# Deployment Instructions for DeFi Donation Tracker

## Prerequisites

1. Install Clarinet CLI:
   ```bash
   # Install Clarinet
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   cargo install clarinet
   ```

2. Set up your Stacks wallet for deployment:
   - Install Hiro Wallet browser extension
   - Create or import a wallet
   - Get some STX tokens for testnet deployment

## Smart Contract Deployment

### 1. Initialize Clarinet Project
```bash
clarinet new stacks-donation-tracker
cd stacks-donation-tracker
```

### 2. Add Smart Contracts
Copy the contract files to the `contracts/` directory:
- `donation-tracker.clar`
- `donation-rewards.clar`

### 3. Configure Clarinet.toml
Update the Clarinet.toml file with the contract configurations provided.

### 4. Test Contracts Locally
```bash
# Check syntax
clarinet check

# Run tests
clarinet test

# Start local development environment
clarinet integrate
```

### 5. Deploy to Testnet
```bash
# Deploy donation tracker contract
clarinet deploy --testnet contracts/donation-tracker.clar

# Deploy rewards contract
clarinet deploy --testnet contracts/donation-rewards.clar
```

### 6. Update Frontend Configuration
After deployment, update the contract addresses in:
- `src/services/contractService.ts`
- `src/context/WalletContext.tsx`

## Frontend Deployment

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Application
```bash
npm run build
```

### 3. Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Environment Variables

Create a `.env.local` file with:
```
NEXT_PUBLIC_NETWORK=testnet
NEXT_PUBLIC_CONTRACT_ADDRESS=ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM
NEXT_PUBLIC_DONATION_CONTRACT_NAME=donation-tracker
NEXT_PUBLIC_REWARDS_CONTRACT_NAME=donation-rewards
```

## Testing the dApp

1. Visit your deployed application
2. Connect your Stacks wallet
3. Create a test campaign
4. Make a test donation
5. Verify transactions on Stacks Explorer

## Mainnet Deployment

For mainnet deployment:
1. Change network configuration to mainnet
2. Ensure you have sufficient STX for deployment costs
3. Update all frontend references to mainnet addresses
4. Test thoroughly on testnet first

## Monitoring and Maintenance

- Monitor contract performance via Stacks Explorer
- Keep track of gas costs and optimize as needed
- Update frontend dependencies regularly
- Monitor for security updates

For support, check the Stacks documentation at: https://docs.stacks.co/
