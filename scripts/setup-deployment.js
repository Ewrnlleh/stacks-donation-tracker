#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Deployment configuration
const TESTNET_CONFIG = {
  network: 'testnet',
  nodeUrl: 'https://stacks-node-api.testnet.stacks.co',
  explorerUrl: 'https://explorer.stacks.co/?chain=testnet',
  contractAddress: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM', // Replace with your address
};

const MAINNET_CONFIG = {
  network: 'mainnet',
  nodeUrl: 'https://stacks-node-api.mainnet.stacks.co',
  explorerUrl: 'https://explorer.stacks.co/?chain=mainnet',
  contractAddress: 'SP1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM', // Replace with your address
};

// Generate Clarinet.toml configuration
function generateClarinetConfig() {
  const config = `[project]
name = "stacks-donation-tracker"
description = "Transparent charity donations on Stacks blockchain"
authors = []
telemetry = true
cache_dir = ".clarinet"

[contracts.donation-tracker]
path = "contracts/donation-tracker.clar"
clarity_version = 2
epoch = 2.4

[contracts.donation-rewards]
path = "contracts/donation-rewards.clar"
clarity_version = 2
epoch = 2.4

[[project.requirements]]
contract_id = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.donation-tracker"

[repl]
costs = true
cache = true

[repl.analysis]
check_checker = true
passes = ["check_checker"]

# Testnet deployment
[deployment.testnet]
stacks-node = "https://stacks-node-api.testnet.stacks.co"
cost_estimator = "https://stacks-node-api.testnet.stacks.co"

# Mainnet deployment
[deployment.mainnet]
stacks-node = "https://stacks-node-api.mainnet.stacks.co"
cost_estimator = "https://stacks-node-api.mainnet.stacks.co"
`;

  fs.writeFileSync('Clarinet.toml', config);
  console.log('✅ Created Clarinet.toml configuration');
}

// Generate deployment instructions
function generateDeploymentInstructions() {
  const instructions = `# Deployment Instructions for DeFi Donation Tracker

## Prerequisites

1. Install Clarinet CLI:
   \`\`\`bash
   # Install Rust first
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   source ~/.cargo/env
   
   # Install Clarinet
   cargo install clarinet-cli
   \`\`\`

2. Set up your Stacks wallet for deployment:
   - Install Hiro Wallet or Xverse browser extension
   - Create or import a wallet
   - Get some STX tokens for testnet deployment from faucet

## Smart Contract Deployment

### 1. Verify Project Structure
Ensure you have the following structure:
\`\`\`
stacks-donation-tracker/
├── contracts/
│   ├── donation-tracker.clar
│   └── donation-rewards.clar
├── tests/
│   ├── donation-tracker_test.ts
│   └── donation-rewards_test.ts
├── Clarinet.toml
└── settings/
    ├── Testnet.toml
    └── Mainnet.toml
\`\`\`

### 2. Test Contracts Locally
\`\`\`bash
# Check syntax and run static analysis
clarinet check

# Run unit tests
clarinet test

# Start local development environment
clarinet integrate
\`\`\`

### 3. Deploy to Testnet
\`\`\`bash
# Generate deployment plan
clarinet deployment generate --testnet

# Apply deployment
clarinet deployment apply --testnet
\`\`\`

### 4. Verify Deployment
After deployment, verify your contracts on Stacks Explorer:
- Testnet: https://explorer.stacks.co/?chain=testnet
- Search for your contract address

### 5. Update Frontend Configuration
Update the contract addresses in your frontend:
- \`src/lib/constants.ts\`
- \`src/hooks/useContractCall.ts\`
- \`.env.local\`

## Frontend Deployment

### 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 2. Environment Setup
\`\`\`bash
cp .env.example .env.local
# Update .env.local with your deployed contract addresses
\`\`\`

### 3. Build and Test
\`\`\`bash
# Run tests
npm run test

# Build the application
npm run build

# Test locally
npm run start
\`\`\`

### 4. Deploy to Vercel
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
\`\`\`

## Environment Variables

Create a \`.env.local\` file with:
\`\`\`
# Network Configuration
NEXT_PUBLIC_NETWORK=testnet

# Contract Configuration
NEXT_PUBLIC_CONTRACT_ADDRESS=YOUR_DEPLOYED_ADDRESS
NEXT_PUBLIC_DONATION_TRACKER_CONTRACT=donation-tracker
NEXT_PUBLIC_DONATION_REWARDS_CONTRACT=donation-rewards

# API Configuration
NEXT_PUBLIC_STACKS_API_URL=https://stacks-node-api.testnet.stacks.co
NEXT_PUBLIC_EXPLORER_URL=https://explorer.stacks.co

# Application Configuration
NEXT_PUBLIC_APP_NAME=DeFi Donation Tracker
NEXT_PUBLIC_APP_DESCRIPTION=Transparent charity donations on Stacks blockchain
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
\`\`\`

## Testing the dApp

1. Visit your deployed application
2. Connect your Stacks wallet (Hiro Wallet or Xverse)
3. Switch to testnet in your wallet
4. Create a test campaign with the following steps:
   - Click "Create Campaign"
   - Fill in campaign details
   - Set funding goal and deadline
   - Submit transaction
5. Make a test donation:
   - Navigate to your campaign
   - Enter donation amount
   - Confirm transaction in wallet
6. Verify transactions on Stacks Explorer

## Mainnet Deployment

⚠️ **Important**: Test thoroughly on testnet before mainnet deployment!

For mainnet deployment:
1. Update \`NEXT_PUBLIC_NETWORK=mainnet\` in environment variables
2. Use mainnet contract addresses
3. Ensure you have sufficient STX for deployment costs (typically 0.5-2 STX)
4. Update all frontend references to mainnet
5. Deploy contracts using \`clarinet deployment apply --mainnet\`

## Monitoring and Maintenance

### Contract Monitoring
- Monitor contract performance via Stacks Explorer
- Track gas usage and optimize function calls
- Monitor for any unusual transaction patterns

### Frontend Monitoring
- Set up error tracking (Sentry, LogRocket)
- Monitor performance metrics
- Keep dependencies updated

### Security Considerations
- Regularly audit smart contract code
- Monitor for Clarity language updates
- Keep frontend dependencies secure
- Implement proper error handling

## Troubleshooting

### Common Issues:
1. **Contract deployment fails**: Check STX balance and network connectivity
2. **Frontend can't connect to wallet**: Verify wallet extension is installed and enabled
3. **Transactions fail**: Check contract address and function parameters
4. **Network issues**: Verify you're on the correct network (testnet/mainnet)

### Getting Help:
- Stacks Documentation: https://docs.stacks.co/
- Clarinet Documentation: https://github.com/hirosystems/clarinet
- Stacks Discord: https://discord.gg/stacks
- GitHub Issues: Report bugs in the project repository

## Performance Optimization

### Smart Contracts:
- Use efficient data structures (maps vs lists)
- Minimize contract calls in loops
- Optimize read-only functions

### Frontend:
- Implement proper loading states
- Cache contract read operations
- Use React.memo for expensive components
- Optimize bundle size with tree shaking
`;

  fs.writeFileSync('DEPLOYMENT.md', instructions);
  console.log('✅ Created DEPLOYMENT.md with complete deployment instructions');
}

// Generate environment configuration
function generateEnvConfig() {
  const envExample = `# Copy this file to .env.local and update the values

# Network Configuration (testnet or mainnet)
NEXT_PUBLIC_NETWORK=testnet

# Contract Configuration (update after deployment)
NEXT_PUBLIC_CONTRACT_ADDRESS=ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM
NEXT_PUBLIC_DONATION_TRACKER_CONTRACT=donation-tracker
NEXT_PUBLIC_DONATION_REWARDS_CONTRACT=donation-rewards

# API Configuration
NEXT_PUBLIC_STACKS_API_URL=https://stacks-node-api.testnet.stacks.co
NEXT_PUBLIC_EXPLORER_URL=https://explorer.stacks.co

# Application Configuration
NEXT_PUBLIC_APP_NAME=DeFi Donation Tracker
NEXT_PUBLIC_APP_DESCRIPTION=Transparent charity donations on Stacks blockchain
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional: Analytics and Monitoring
# NEXT_PUBLIC_GA_ID=your-google-analytics-id
# SENTRY_DSN=your-sentry-dsn
`;

  fs.writeFileSync('.env.example', envExample);
  console.log('✅ Created .env.example file');
}

// Generate deployment settings
function generateDeploymentSettings() {
  const testnetSettings = `[network]
name = "testnet"

[accounts.deployer]
mnemonic = "your mnemonic here"
balance = 100_000_000_000

[contracts.donation-tracker]
depends_on = []

[contracts.donation-rewards]
depends_on = ["donation-tracker"]
`;

  const mainnetSettings = `[network]
name = "mainnet"

[accounts.deployer]
mnemonic = "your mnemonic here"
balance = 100_000_000_000

[contracts.donation-tracker]
depends_on = []

[contracts.donation-rewards]
depends_on = ["donation-tracker"]
`;

  // Create settings directory if it doesn't exist
  if (!fs.existsSync('settings')) {
    fs.mkdirSync('settings');
  }

  fs.writeFileSync('settings/Testnet.toml', testnetSettings);
  fs.writeFileSync('settings/Mainnet.toml', mainnetSettings);
  console.log('✅ Created deployment settings files');
}

// Update package.json scripts
function updatePackageJsonScripts() {
  const packageJsonPath = 'package.json';
  
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    packageJson.scripts = {
      ...packageJson.scripts,
      // Contract scripts
      'contracts:check': 'clarinet check',
      'contracts:test': 'clarinet test',
      'contracts:console': 'clarinet console',
      'contracts:integrate': 'clarinet integrate',
      // Deployment scripts
      'deploy:testnet:plan': 'clarinet deployment generate --testnet',
      'deploy:testnet:apply': 'clarinet deployment apply --testnet',
      'deploy:mainnet:plan': 'clarinet deployment generate --mainnet',
      'deploy:mainnet:apply': 'clarinet deployment apply --mainnet',
      // Development scripts
      'dev:full': 'concurrently "npm run contracts:integrate" "npm run dev"',
      'test:all': 'npm run contracts:test && npm run test',
    };

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ Updated package.json with contract and deployment scripts');
  }
}

// Main setup function
function setup() {
  console.log('🚀 Setting up DeFi Donation Tracker deployment...\n');
  
  try {
    generateClarinetConfig();
    generateDeploymentInstructions();
    generateEnvConfig();
    generateDeploymentSettings();
    updatePackageJsonScripts();
    
    console.log('\n✅ Setup complete!');
    console.log('\nNext steps:');
    console.log('1. Copy .env.example to .env.local and update values');
    console.log('2. Update mnemonic in settings/Testnet.toml');
    console.log('3. Run "clarinet check" to verify contracts');
    console.log('4. Run "clarinet test" to run tests');
    console.log('5. Deploy to testnet: "npm run deploy:testnet:apply"');
    console.log('6. Update frontend configuration with deployed addresses');
    console.log('7. Deploy frontend to Vercel');
    console.log('\n📖 See DEPLOYMENT.md for detailed instructions');
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

// Run setup
setup();
