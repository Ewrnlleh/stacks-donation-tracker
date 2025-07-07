const CONTRACT_NAME = "donation-tracker";

// Devnet wallets for local development
const devnetWallets = [
  { 
    stxAddress: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM', 
    label: 'Deployer',
    mnemonic: 'twice kind fence tip hidden tilt action fragile skin nothing glory cousin green tomorrow spring wrist shed math olympic multiply hip blue scout claw'
  }
];

const DEPLOYER_ADDRESS =
  process.env.NEXT_PUBLIC_STACKS_NETWORK === "devnet"
    ? devnetWallets[0].stxAddress
    : process.env.NEXT_PUBLIC_STACKS_NETWORK === "testnet"
    ? process.env.NEXT_PUBLIC_CONTRACT_DEPLOYER_TESTNET_ADDRESS
    : process.env.NEXT_PUBLIC_CONTRACT_DEPLOYER_MAINNET_ADDRESS;

export const DONATION_CONTRACT = {
  address: DEPLOYER_ADDRESS,
  name: CONTRACT_NAME,
} as const;

export const getContractIdentifier = () => {
  return `${DONATION_CONTRACT.address}.${DONATION_CONTRACT.name}`;
};
