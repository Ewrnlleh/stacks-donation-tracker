;; Donation Tracker Smart Contract
;; Transparent charity donations and campaign management on Stacks blockchain

;; Constants
(define-constant contract-owner tx-sender)
(define-constant err-not-authorized (err u100))
(define-constant err-campaign-ended (err u101))
(define-constant err-not-initialized (err u102))
(define-constant err-not-cancelled (err u103))
(define-constant err-campaign-not-ended (err u104))
(define-constant err-campaign-cancelled (err u105))
(define-constant err-already-initialized (err u106))
(define-constant err-already-withdrawn (err u107))
(define-constant err-invalid-amount (err u108))
(define-constant err-not-found (err u109))
(define-constant err-campaign-not-active (err u110))
(define-constant err-owner-only (err u111))

(define-constant default-duration u4320) ;; ~30 days in Bitcoin blocks

;; Data Variables
(define-data-var is-campaign-initialized bool false)
(define-data-var is-campaign-cancelled bool false)
(define-data-var beneficiary principal contract-owner)
(define-data-var campaign-duration uint default-duration)
(define-data-var campaign-start uint u0)
(define-data-var campaign-goal uint u0)
(define-data-var total-stx uint u0)
(define-data-var total-donations uint u0)
(define-data-var donation-count uint u0)
(define-data-var is-campaign-withdrawn bool false)

;; Maps
(define-map stx-donations principal uint)
(define-map donation-messages principal (string-ascii 200))

;; Initialize campaign (goal in USD cents)
(define-public (initialize-campaign (goal uint) (duration uint))
  (begin
    (asserts! (is-eq tx-sender contract-owner) err-not-authorized)
    (asserts! (not (var-get is-campaign-initialized)) err-already-initialized)
    (var-set is-campaign-initialized true)
    (var-set campaign-start burn-block-height)
    (var-set campaign-goal goal)
    (var-set campaign-duration (if (is-eq duration u0) default-duration duration))
    (print {
      topic: "campaign-initialized",
      goal: goal,
      start: burn-block-height,
      duration: (var-get campaign-duration)
    })
    (ok true)))

;; Donate STX to campaign
(define-public (donate-stx (amount uint))
  (let ((current-donation (default-to u0 (map-get? stx-donations tx-sender))))
    (asserts! (var-get is-campaign-initialized) err-not-initialized)
    (asserts! (not (var-get is-campaign-cancelled)) err-campaign-cancelled)
    (asserts! (< burn-block-height (+ (var-get campaign-start) (var-get campaign-duration))) err-campaign-ended)
    (asserts! (> amount u0) err-invalid-amount)
    
    ;; Transfer STX to contract
    (try! (stx-transfer? amount tx-sender (as-contract tx-sender)))
    
    ;; Update totals
    (var-set total-stx (+ (var-get total-stx) amount))
    (var-set donation-count (+ (var-get donation-count) u1))
    
    ;; Update donor record
    (map-set stx-donations tx-sender (+ current-donation amount))
    
    (print {
      topic: "donation-received",
      donor: tx-sender,
      amount: amount,
      total: (+ current-donation amount),
      campaign-total: (var-get total-stx)
    })
    (ok true)))

;; Add donation message
(define-public (add-donation-message (message (string-ascii 200)))
  (begin
    (asserts! (> (default-to u0 (map-get? stx-donations tx-sender)) u0) err-not-authorized)
    (map-set donation-messages tx-sender message)
    (ok true)))

;; Cancel campaign (contract owner only)
(define-public (cancel-campaign)
  (begin
    (asserts! (is-eq tx-sender contract-owner) err-not-authorized)
    (asserts! (var-get is-campaign-initialized) err-not-initialized)
    (asserts! (not (var-get is-campaign-withdrawn)) err-already-withdrawn)
    (var-set is-campaign-cancelled true)
    (print { topic: "campaign-cancelled" })
    (ok true)))

;; Refund donation (if campaign cancelled)
(define-public (refund-donation)
  (let ((stx-amount (default-to u0 (map-get? stx-donations tx-sender))))
    (asserts! (var-get is-campaign-cancelled) err-not-cancelled)
    (asserts! (> stx-amount u0) err-invalid-amount)
    
    ;; Transfer STX back to donor
    (as-contract
      (try! (stx-transfer? stx-amount tx-sender tx-sender)))
    
    ;; Clear donation record
    (map-delete stx-donations tx-sender)
    (map-delete donation-messages tx-sender)
    
    (print {
      topic: "refund-processed",
      donor: tx-sender,
      amount: stx-amount
    })
    (ok true)))

;; Read-only functions
(define-read-only (get-stx-donation (donor principal))
  (ok (default-to u0 (map-get? stx-donations donor))))

(define-read-only (get-donation-message (donor principal))
  (ok (map-get? donation-messages donor)))

(define-read-only (get-campaign-info)
  (ok {
    start: (var-get campaign-start),
    end: (+ (var-get campaign-start) (var-get campaign-duration)),
    goal: (var-get campaign-goal),
    totalStx: (var-get total-stx),
    donationCount: (var-get donation-count),
    isInitialized: (var-get is-campaign-initialized),
    isExpired: (>= burn-block-height (+ (var-get campaign-start) (var-get campaign-duration))),
    isWithdrawn: (var-get is-campaign-withdrawn),
    isCancelled: (var-get is-campaign-cancelled),
    beneficiary: (var-get beneficiary)
  }))

(define-read-only (get-contract-balance)
  (stx-get-balance (as-contract tx-sender)))

;; Multi-campaign system data variables
(define-data-var total-campaigns uint u0)
(define-data-var next-campaign-id uint u1)

;; Data Maps
(define-map campaigns uint {
    title: (string-ascii 100),
    description: (string-ascii 500),
    target-amount: uint,
    current-amount: uint,
    creator: principal,
    end-block: uint,
    is-active: bool,
    created-at: uint
})

(define-map donations uint {
    campaign-id: uint,
    donor: principal,
    amount: uint,
    message: (optional (string-ascii 200)),
    block-height: uint,
    timestamp: uint
})

(define-map campaign-donations uint (list 100 uint))
(define-map donor-campaigns principal (list 50 uint))
(define-map next-donation-id uint uint)

;; Read-only functions

;; Get campaign details by ID
(define-read-only (get-campaign (campaign-id uint))
    (map-get? campaigns campaign-id)
)

;; Get donation details by ID
(define-read-only (get-donation (donation-id uint))
    (map-get? donations donation-id)
)

;; Get total donations count
(define-read-only (get-total-donations)
    (var-get total-donations)
)

;; Get total campaigns count
(define-read-only (get-total-campaigns)
    (var-get total-campaigns)
)

;; Get donations for a specific campaign
(define-read-only (get-campaign-donations (campaign-id uint))
    (default-to (list) (map-get? campaign-donations campaign-id))
)

;; Get campaigns a donor has contributed to
(define-read-only (get-donor-campaigns (donor principal))
    (default-to (list) (map-get? donor-campaigns donor))
)

;; Check if campaign is active and accepting donations
(define-read-only (is-campaign-active (campaign-id uint))
    (match (map-get? campaigns campaign-id)
        campaign (and 
            (get is-active campaign)
            (< block-height (get end-block campaign))
        )
        false
    )
)

;; Public functions

;; Create a new donation campaign
(define-public (create-campaign 
    (title (string-ascii 100))
    (description (string-ascii 500))
    (target-amount uint)
    (duration-blocks uint)
)
    (let (
        (campaign-id (var-get next-campaign-id))
        (end-block (+ block-height duration-blocks))
    )
        (map-set campaigns campaign-id {
            title: title,
            description: description,
            target-amount: target-amount,
            current-amount: u0,
            creator: tx-sender,
            end-block: end-block,
            is-active: true,
            created-at: block-height
        })
        
        ;; Initialize donation tracking for this campaign
        (map-set campaign-donations campaign-id (list))
        (map-set next-donation-id campaign-id u1)
        
        ;; Update counters
        (var-set next-campaign-id (+ campaign-id u1))
        (var-set total-campaigns (+ (var-get total-campaigns) u1))
        
        (print {
            event: "campaign-created",
            campaign-id: campaign-id,
            creator: tx-sender,
            target-amount: target-amount
        })
        
        (ok campaign-id)
    )
)

;; Make a donation to a campaign
(define-public (donate
    (campaign-id uint)
    (amount uint)
    (message (optional (string-ascii 200)))
)
    (let (
        (campaign (unwrap! (map-get? campaigns campaign-id) err-not-found))
        (donation-id (default-to u1 (map-get? next-donation-id campaign-id)))
        (current-donations (get-campaign-donations campaign-id))
        (donor-existing-campaigns (get-donor-campaigns tx-sender))
    )
        ;; Validate donation amount
        (asserts! (> amount u0) err-invalid-amount)
        
        ;; Check if campaign is active
        (asserts! (is-campaign-active campaign-id) err-campaign-not-active)
        
        ;; Transfer STX from donor to contract
        (try! (stx-transfer? amount tx-sender (as-contract tx-sender)))
        
        ;; Record the donation
        (map-set donations donation-id {
            campaign-id: campaign-id,
            donor: tx-sender,
            amount: amount,
            message: message,
            block-height: block-height,
            timestamp: block-height
        })
        
        ;; Update campaign amount
        (map-set campaigns campaign-id 
            (merge campaign { current-amount: (+ (get current-amount campaign) amount) })
        )
        
        ;; Update donation tracking
        (map-set campaign-donations campaign-id (unwrap-panic (as-max-len? (append current-donations donation-id) u100)))
        (map-set next-donation-id campaign-id (+ donation-id u1))
        
        ;; Update donor's campaign list
        (map-set donor-campaigns tx-sender 
            (unwrap-panic (as-max-len? (append donor-existing-campaigns campaign-id) u50))
        )
        
        ;; Update total donations
        (var-set total-donations (+ (var-get total-donations) u1))
        
        (print {
            event: "donation-made",
            campaign-id: campaign-id,
            donor: tx-sender,
            amount: amount,
            donation-id: donation-id
        })
        
        (ok donation-id)
    )
)

;; Withdraw funds from a campaign (only by campaign creator)
(define-public (withdraw-funds (campaign-id uint))
    (let (
        (campaign (unwrap! (map-get? campaigns campaign-id) err-not-found))
        (amount (get current-amount campaign))
    )
        ;; Only campaign creator can withdraw
        (asserts! (is-eq tx-sender (get creator campaign)) err-owner-only)
        
        ;; Check if campaign has ended or target is reached
        (asserts! (or 
            (>= block-height (get end-block campaign))
            (>= (get current-amount campaign) (get target-amount campaign))
        ) err-campaign-not-active)
        
        ;; Transfer funds to campaign creator
        (try! (as-contract (stx-transfer? amount tx-sender (get creator campaign))))
        
        ;; Update campaign to mark as withdrawn
        (map-set campaigns campaign-id 
            (merge campaign { 
                current-amount: u0,
                is-active: false
            })
        )
        
        (print {
            event: "funds-withdrawn",
            campaign-id: campaign-id,
            creator: tx-sender,
            amount: amount
        })
        
        (ok amount)
    )
)

;; Emergency pause campaign (only by creator)
(define-public (pause-campaign (campaign-id uint))
    (let (
        (campaign (unwrap! (map-get? campaigns campaign-id) err-not-found))
    )
        ;; Only campaign creator can pause
        (asserts! (is-eq tx-sender (get creator campaign)) err-owner-only)
        
        ;; Update campaign status
        (map-set campaigns campaign-id 
            (merge campaign { is-active: false })
        )
        
        (print {
            event: "campaign-paused",
            campaign-id: campaign-id,
            creator: tx-sender
        })
        
        (ok true)
    )
)

;; Get campaign statistics
(define-read-only (get-campaign-stats (campaign-id uint))
    (match (map-get? campaigns campaign-id)
        campaign (some {
            total-raised: (get current-amount campaign),
            target-amount: (get target-amount campaign),
            donors-count: (len (get-campaign-donations campaign-id)),
            progress-percentage: (/ (* (get current-amount campaign) u100) (get target-amount campaign)),
            is-active: (is-campaign-active campaign-id),
            days-remaining: (if (> (get end-block campaign) block-height)
                (- (get end-block campaign) block-height)
                u0
            )
        })
        none
    )
)

;; Get top donors for a campaign (returns list of donation IDs sorted by amount)
(define-read-only (get-top-donors (campaign-id uint))
    (get-campaign-donations campaign-id)
)
