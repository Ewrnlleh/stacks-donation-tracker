#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Deployment configuration
const TESTNET_CONFIG = {
  network: 'testnet',
  nodeUrl: 'https://stacks-node-api.testnet.stacks.co',
  explorerUrl: 'https://explorer.stacks.co',
  contractAddress: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM', // Replace with your address
};

const MAINNET_CONFIG = {
  network: 'mainnet',
  nodeUrl: 'https://stacks-node-api.mainnet.stacks.co',
  explorerUrl: 'https://explorer.stacks.co',
  contractAddress: 'SP1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM', // Replace with your address
};

// Generate deployment instructions
function generateDeploymentInstructions() {
  const instructions = `# Deployment Instructions for DeFi Donation Tracker

## Prerequisites

1. Install Clarinet CLI:
   \`\`\`bash
   # Install Clarinet
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   cargo install clarinet
   \`\`\`

2. Set up your Stacks wallet for deployment:
   - Install Hiro Wallet browser extension
   - Create or import a wallet
   - Get some STX tokens for testnet deployment

## Smart Contract Deployment

### 1. Initialize Clarinet Project
\`\`\`bash
clarinet new stacks-donation-tracker
cd stacks-donation-tracker
\`\`\`

### 2. Add Smart Contracts
Copy the contract files to the \`contracts/\` directory:
- \`donation-tracker.clar\`
- \`donation-rewards.clar\`

### 3. Configure Clarinet.toml
Update the Clarinet.toml file with the contract configurations provided.

### 4. Test Contracts Locally
\`\`\`bash
# Check syntax
clarinet check

# Run tests
clarinet test

# Start local development environment
clarinet integrate
\`\`\`

### 5. Deploy to Testnet
\`\`\`bash
# Deploy donation tracker contract
clarinet deploy --testnet contracts/donation-tracker.clar

# Deploy rewards contract
clarinet deploy --testnet contracts/donation-rewards.clar
\`\`\`

### 6. Update Frontend Configuration
After deployment, update the contract addresses in:
- \`src/services/contractService.ts\`
- \`src/context/WalletContext.tsx\`

## Frontend Deployment

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Build the Application
\`\`\`bash
npm run build
\`\`\`

### 3. Deploy to Vercel
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
\`\`\`

## Environment Variables

Create a \`.env.local\` file with:
\`\`\`
NEXT_PUBLIC_NETWORK=testnet
NEXT_PUBLIC_CONTRACT_ADDRESS=ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM
NEXT_PUBLIC_DONATION_CONTRACT_NAME=donation-tracker
NEXT_PUBLIC_REWARDS_CONTRACT_NAME=donation-rewards
\`\`\`

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
`;

  fs.writeFileSync('DEPLOYMENT.md', instructions);
  console.log('✅ Created DEPLOYMENT.md with complete deployment instructions');
}

// Generate environment configuration
function generateEnvConfig() {
  const envExample = `# Copy this file to .env.local and update the values

# Network Configuration (testnet or mainnet)
NEXT_PUBLIC_NETWORK=testnet

# Contract Addresses (update after deployment)
NEXT_PUBLIC_CONTRACT_ADDRESS=ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM
NEXT_PUBLIC_DONATION_CONTRACT_NAME=donation-tracker
NEXT_PUBLIC_REWARDS_CONTRACT_NAME=donation-rewards

# API URLs
NEXT_PUBLIC_STACKS_API_URL=https://stacks-node-api.testnet.stacks.co
NEXT_PUBLIC_EXPLORER_URL=https://explorer.stacks.co

# Application Configuration
NEXT_PUBLIC_APP_NAME=DeFi Donation Tracker
NEXT_PUBLIC_APP_DESCRIPTION=Transparent charity donations on Stacks blockchain
`;

  fs.writeFileSync('.env.example', envExample);
  console.log('✅ Created .env.example file');
}

// Generate package.json scripts
function updatePackageJsonScripts() {
  const packageJsonPath = 'package.json';
  
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    packageJson.scripts = {
      ...packageJson.scripts,
      'contracts:check': 'clarinet check',
      'contracts:test': 'clarinet test',
      'contracts:deploy:testnet': 'clarinet deploy --testnet',
      'contracts:deploy:mainnet': 'clarinet deploy --mainnet',
      'dev:contracts': 'clarinet integrate',
    };

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ Updated package.json with contract scripts');
  }
}

// Main setup function
function setup() {
  console.log('🚀 Setting up DeFi Donation Tracker deployment...\n');
  
  generateDeploymentInstructions();
  generateEnvConfig();
  updatePackageJsonScripts();
  
  console.log('\n✅ Setup complete!');
  console.log('\nNext steps:');
  console.log('1. Copy .env.example to .env.local and update values');
  console.log('2. Follow instructions in DEPLOYMENT.md');
  console.log('3. Deploy smart contracts to testnet');
  console.log('4. Update frontend configuration');
  console.log('5. Deploy frontend to Vercel');
}

// Run setup
setup();
