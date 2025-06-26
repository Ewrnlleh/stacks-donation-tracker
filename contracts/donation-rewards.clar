;; Donation Rewards Smart Contract
;; This contract manages a points system and NFT rewards for donors

;; Constants
(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u200))
(define-constant err-not-found (err u201))
(define-constant err-insufficient-points (err u202))
(define-constant err-already-claimed (err u203))

;; SIP-010 Fungible Token Trait (for donation points)
(impl-trait 'SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard.sip-010-trait)

;; Token Constants
(define-constant token-name "Donation Points")
(define-constant token-symbol "DPT")
(define-constant token-decimals u6)

;; Data Variables
(define-data-var token-total-supply uint u0)
(define-data-var next-reward-id uint u1)

;; Data Maps
(define-map token-balances principal uint)
(define-map token-allowances {owner: principal, spender: principal} uint)

;; Donation milestone rewards
(define-map milestone-rewards uint {
    points-required: uint,
    reward-type: (string-ascii 50),
    description: (string-ascii 200),
    nft-id: (optional uint),
    is-active: bool
})

;; User claimed rewards
(define-map user-claimed-rewards {user: principal, reward-id: uint} bool)

;; Donation to points conversion rate (1 STX = 100 points)
(define-constant points-per-stx u100)

;; SIP-010 Implementation

(define-read-only (get-name)
    (ok token-name)
)

(define-read-only (get-symbol)
    (ok token-symbol)
)

(define-read-only (get-decimals)
    (ok token-decimals)
)

(define-read-only (get-balance (who principal))
    (ok (default-to u0 (map-get? token-balances who)))
)

(define-read-only (get-total-supply)
    (ok (var-get token-total-supply))
)

(define-read-only (get-token-uri)
    (ok (some "https://donation-tracker.stacks/metadata/points"))
)

(define-public (transfer (amount uint) (from principal) (to principal) (memo (optional (buff 34))))
    (begin
        (asserts! (is-eq tx-sender from) (err u4))
        (asserts! (<= amount (unwrap-panic (get-balance from))) (err u1))
        
        (try! (map-set token-balances from (- (unwrap-panic (get-balance from)) amount)))
        (try! (map-set token-balances to (+ (unwrap-panic (get-balance to)) amount)))
        
        (print {
            event: "token-transfer",
            from: from,
            to: to,
            amount: amount,
            memo: memo
        })
        
        (ok true)
    )
)

;; Reward Functions

;; Award points for donations (called by main donation contract)
(define-public (award-donation-points (donor principal) (donation-amount uint))
    (let (
        (points-to-award (* donation-amount points-per-stx))
        (current-balance (unwrap-panic (get-balance donor)))
    )
        ;; Mint new points
        (try! (map-set token-balances donor (+ current-balance points-to-award)))
        (var-set token-total-supply (+ (var-get token-total-supply) points-to-award))
        
        (print {
            event: "points-awarded",
            donor: donor,
            points: points-to-award,
            donation-amount: donation-amount
        })
        
        (ok points-to-award)
    )
)

;; Create a new milestone reward (only owner)
(define-public (create-milestone-reward 
    (points-required uint)
    (reward-type (string-ascii 50))
    (description (string-ascii 200))
    (nft-id (optional uint))
)
    (let (
        (reward-id (var-get next-reward-id))
    )
        (asserts! (is-eq tx-sender contract-owner) err-owner-only)
        
        (try! (map-set milestone-rewards reward-id {
            points-required: points-required,
            reward-type: reward-type,
            description: description,
            nft-id: nft-id,
            is-active: true
        }))
        
        (var-set next-reward-id (+ reward-id u1))
        
        (print {
            event: "milestone-reward-created",
            reward-id: reward-id,
            points-required: points-required,
            reward-type: reward-type
        })
        
        (ok reward-id)
    )
)

;; Claim milestone reward
(define-public (claim-milestone-reward (reward-id uint))
    (let (
        (reward (unwrap! (map-get? milestone-rewards reward-id) err-not-found))
        (user-balance (unwrap-panic (get-balance tx-sender)))
        (already-claimed (default-to false (map-get? user-claimed-rewards {user: tx-sender, reward-id: reward-id})))
    )
        ;; Check if reward exists and is active
        (asserts! (get is-active reward) err-not-found)
        
        ;; Check if user has enough points
        (asserts! (>= user-balance (get points-required reward)) err-insufficient-points)
        
        ;; Check if not already claimed
        (asserts! (not already-claimed) err-already-claimed)
        
        ;; Burn points
        (try! (map-set token-balances tx-sender (- user-balance (get points-required reward))))
        (var-set token-total-supply (- (var-get token-total-supply) (get points-required reward)))
        
        ;; Mark as claimed
        (map-set user-claimed-rewards {user: tx-sender, reward-id: reward-id} true)
        
        (print {
            event: "milestone-reward-claimed",
            user: tx-sender,
            reward-id: reward-id,
            points-spent: (get points-required reward),
            reward-type: (get reward-type reward)
        })
        
        (ok true)
    )
)

;; Read-only functions

;; Get reward details
(define-read-only (get-milestone-reward (reward-id uint))
    (map-get? milestone-rewards reward-id)
)

;; Check if user has claimed a reward
(define-read-only (has-claimed-reward (user principal) (reward-id uint))
    (default-to false (map-get? user-claimed-rewards {user: user, reward-id: reward-id}))
)

;; Get user's claimable rewards (rewards they have enough points for but haven't claimed)
(define-read-only (get-claimable-rewards (user principal))
    (let (
        (user-balance (unwrap-panic (get-balance user)))
    )
        ;; This is a simplified version - in a real implementation, 
        ;; you'd iterate through all rewards
        (list 
            {reward-id: u1, points-required: u1000, can-claim: (>= user-balance u1000)},
            {reward-id: u2, points-required: u5000, can-claim: (>= user-balance u5000)},
            {reward-id: u3, points-required: u10000, can-claim: (>= user-balance u10000)}
        )
    )
)

;; Get donor level based on points
(define-read-only (get-donor-level (user principal))
    (let (
        (balance (unwrap-panic (get-balance user)))
    )
        (if (>= balance u50000)
            "Diamond Donor"
            (if (>= balance u25000)
                "Platinum Donor"
                (if (>= balance u10000)
                    "Gold Donor"
                    (if (>= balance u5000)
                        "Silver Donor"
                        (if (>= balance u1000)
                            "Bronze Donor"
                            "New Donor"
                        )
                    )
                )
            )
        )
    )
)

;; Get leaderboard (simplified - returns top donor categories)
(define-read-only (get-donor-leaderboard)
    (list
        {level: "Diamond Donor", min-points: u50000, description: "Ultimate philanthropist"},
        {level: "Platinum Donor", min-points: u25000, description: "Major contributor"},
        {level: "Gold Donor", min-points: u10000, description: "Generous supporter"},
        {level: "Silver Donor", min-points: u5000, description: "Regular contributor"},
        {level: "Bronze Donor", min-points: u1000, description: "Community supporter"},
        {level: "New Donor", min-points: u0, description: "Welcome to our community"}
    )
)
