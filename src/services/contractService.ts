import { STACKS_TESTNET } from '@stacks/network';
import { 
  cvToJSON,
  principalCV,
  uintCV,
  fetchCallReadOnlyFunction,
} from '@stacks/transactions';
import { mockCampaigns } from '@/data/mockData';

const network = STACKS_TESTNET;
const CONTRACT_ADDRESS = 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM'; // Replace with deployed contract address
const DONATION_CONTRACT_NAME = 'donation-tracker';
const REWARDS_CONTRACT_NAME = 'donation-rewards';

// Flag to use mock data when contracts aren't deployed
const USE_MOCK_DATA = true;

export interface Campaign {
  id: number;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  creator: string;
  endBlock: number;
  isActive: boolean;
  createdAt: number;
}

export interface Donation {
  id: number;
  campaignId: number;
  donor: string;
  amount: number;
  message?: string;
  blockHeight: number;
  timestamp: number;
}

export interface CampaignStats {
  totalRaised: number;
  targetAmount: number;
  donorsCount: number;
  progressPercentage: number;
  isActive: boolean;
  daysRemaining: number;
}

class ContractService {
  // Campaign-related functions
  async getCampaign(campaignId: number): Promise<Campaign | null> {
    if (USE_MOCK_DATA) {
      return mockCampaigns.find(c => c.id === campaignId) || null;
    }

    try {
      const result = await fetchCallReadOnlyFunction({
        contractAddress: CONTRACT_ADDRESS,
        contractName: DONATION_CONTRACT_NAME,
        functionName: 'get-campaign',
        functionArgs: [uintCV(campaignId)],
        network,
        senderAddress: CONTRACT_ADDRESS,
      });

      const campaignData = cvToJSON(result);
      
      if (campaignData.success && campaignData.value) {
        return {
          id: campaignId,
          title: campaignData.value.title.value,
          description: campaignData.value.description.value,
          targetAmount: parseInt(campaignData.value['target-amount'].value) / 1000000, // Convert from microSTX
          currentAmount: parseInt(campaignData.value['current-amount'].value) / 1000000,
          creator: campaignData.value.creator.value,
          endBlock: parseInt(campaignData.value['end-block'].value),
          isActive: campaignData.value['is-active'].value,
          createdAt: parseInt(campaignData.value['created-at'].value),
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error fetching campaign:', error);
      return null;
    }
  }

  async getTotalCampaigns(): Promise<number> {
    if (USE_MOCK_DATA) {
      return mockCampaigns.length;
    }

    try {
      const result = await fetchCallReadOnlyFunction({
        contractAddress: CONTRACT_ADDRESS,
        contractName: DONATION_CONTRACT_NAME,
        functionName: 'get-total-campaigns',
        functionArgs: [],
        network,
        senderAddress: CONTRACT_ADDRESS,
      });

      const totalData = cvToJSON(result);
      return totalData.success ? parseInt(totalData.value) : 0;
    } catch (error) {
      console.error('Error fetching total campaigns:', error);
      return 0;
    }
  }

  async getTotalDonations(): Promise<number> {
    if (USE_MOCK_DATA) {
      // Calculate total donations from mock data
      return mockCampaigns.reduce((total, campaign) => {
        // Estimate number of donations based on current amount (assuming average 5 STX per donation)
        return total + Math.ceil(campaign.currentAmount / 5);
      }, 0);
    }

    try {
      const result = await fetchCallReadOnlyFunction({
        contractAddress: CONTRACT_ADDRESS,
        contractName: DONATION_CONTRACT_NAME,
        functionName: 'get-total-donations',
        functionArgs: [],
        network,
        senderAddress: CONTRACT_ADDRESS,
      });

      const totalData = cvToJSON(result);
      return totalData.success ? parseInt(totalData.value) : 0;
    } catch (error) {
      console.error('Error fetching total donations:', error);
      return 0;
    }
  }

  async getAllCampaigns(): Promise<Campaign[]> {
    if (USE_MOCK_DATA) {
      return [...mockCampaigns];
    }

    const totalCampaigns = await this.getTotalCampaigns();
    const campaigns: Campaign[] = [];

    for (let i = 1; i <= totalCampaigns; i++) {
      const campaign = await this.getCampaign(i);
      if (campaign) {
        campaigns.push(campaign);
      }
    }

    return campaigns;
  }
}

export const contractService = new ContractService();
