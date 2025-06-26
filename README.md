# 🎯 DeFi Donation Tracker

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Stacks](https://img.shields.io/badge/Stacks-Blockchain-orange.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)

A decentralized application (dApp) for transparent charity donations built on the Stacks blockchain. Every donation is tracked on-chain, providing complete transparency and accountability for donors and campaign creators.

## 🌟 Features

### ✨ Core Functionality
- **Transparent Donations**: All donations are recorded immutably on the Stacks blockchain
- **Campaign Management**: Create and manage donation campaigns with customizable goals and durations
- **Real-time Tracking**: Monitor donation progress and campaign statistics in real-time
- **Donor Recognition**: Points-based reward system for contributors
- **Multi-wallet Support**: Compatible with Hiro Wallet and Xverse

### 🎯 Campaign Features
- Set funding targets and campaign duration
- View detailed campaign statistics and progress
- Campaign creator fund withdrawal system
- Emergency pause functionality for campaign creators
- Transparent fund tracking with blockchain verification

### 🏆 Rewards System
- Earn donation points for every contribution
- Tiered donor levels (Bronze, Silver, Gold, Platinum, Diamond)
- Milestone rewards and achievements
- Community leaderboard

## 🛠 Technology Stack

- **Blockchain**: Stacks blockchain with Bitcoin security
- **Smart Contracts**: Clarity programming language
- **Frontend**: Next.js 15 with React and TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Wallet Integration**: Stacks.js for wallet connectivity
- **State Management**: React Context API
- **Icons**: Lucide React
- **Development**: Clarinet for contract development and testing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Stacks wallet (Hiro Wallet or Xverse)
- STX tokens for testnet/mainnet interactions

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stacks-donation-tracker
   cd stacks-donation-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the values in `.env.local`:
   ```env
   NEXT_PUBLIC_NETWORK=testnet
   NEXT_PUBLIC_CONTRACT_ADDRESS=ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM
   NEXT_PUBLIC_DONATION_CONTRACT_NAME=donation-tracker
   NEXT_PUBLIC_REWARDS_CONTRACT_NAME=donation-rewards
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Smart Contracts

### 🎯 Donation Tracker Contract (`donation-tracker.clar`)

The main contract handles all donation campaign logic:

#### Public Functions
- `create-campaign` - Create a new donation campaign
- `donate` - Make a donation to a campaign
- `withdraw-funds` - Withdraw funds (campaign creator only)
- `pause-campaign` - Emergency pause a campaign

#### Read-Only Functions
- `get-campaign` - Retrieve campaign details
- `get-campaign-stats` - Get campaign statistics
- `get-total-campaigns` - Total number of campaigns
- `get-total-donations` - Total number of donations
- `is-campaign-active` - Check if a campaign is active

### 🏆 Donation Rewards Contract (`donation-rewards.clar`)

Manages the points system and donor rewards:

#### Features
- SIP-010 compliant fungible token for donation points
- Automatic point allocation (1 STX = 100 points)
- Milestone reward system
- Donor level classification
- Reward claiming mechanism

## 🔧 Smart Contract Deployment

### Testnet Deployment

1. **Install Clarinet**
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   cargo install clarinet
   ```

2. **Deploy contracts**
   ```bash
   npm run contracts:check
   npm run contracts:deploy:testnet
   ```

3. **Update frontend configuration**
   Update contract addresses in the frontend after deployment.

### Contract Addresses

**Testnet:**
- Donation Tracker: `ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.donation-tracker`
- Donation Rewards: `ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.donation-rewards`

*Update these addresses after your deployment*

## 📱 Usage Guide

### For Donors

1. **Connect Wallet**: Click "Connect Wallet" and choose your preferred Stacks wallet
2. **Browse Campaigns**: Use search and filters to find campaigns you want to support
3. **Make Donations**: Click on a campaign and use the "Donate Now" button
4. **Track Impact**: Monitor your donations and earned reward points
5. **Claim Rewards**: Redeem milestone rewards as you reach point thresholds

### For Campaign Creators

1. **Connect Wallet**: Ensure your wallet is connected
2. **Create Campaign**: Use the "Create Campaign" button to set up your fundraiser
3. **Set Details**: Define title, description, target amount, and duration
4. **Launch Campaign**: Submit the transaction to deploy your campaign
5. **Manage Funds**: Withdraw funds when campaign goals are met or campaign ends
6. **Track Progress**: Monitor donations and engagement through the dashboard

## 🔒 Security Features

- **On-chain Verification**: All transactions are recorded on the immutable Stacks blockchain
- **Multi-signature Support**: Enhanced security for large donations
- **Emergency Pause**: Campaign creators can pause campaigns if needed
- **Transparent Fund Tracking**: Every STX can be traced through blockchain explorer
- **Smart Contract Auditing**: Contracts follow Stacks best practices

## 🤝 Contributing

We welcome contributions to improve the DeFi Donation Tracker! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Stacks Foundation** for the amazing blockchain infrastructure
- **Hiro Systems** for development tools and wallet
- **Next.js Team** for the excellent React framework
- **Tailwind CSS** for the utility-first styling framework
- **Lucide** for the beautiful icon set

---

**Built with ❤️ on the Stacks blockchain for a more transparent world.**
