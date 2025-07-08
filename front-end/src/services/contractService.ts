import { STACKS_TESTNET, STACKS_MAINNET } from '@stacks/network';
import { 
  cvToJSON,
  principalCV,
  uintCV,
  stringUtf8CV,
  fetchCallReadOnlyFunction,
} from '@stacks/transactions';
import { mockCampaigns } from '@/data/mockData';

// Environment configuration using Hiro API
const getNetwork = () => {
  const networkType = process.env.NEXT_PUBLIC_STACKS_NETWORK || 'testnet';
  
  if (networkType === 'mainnet') {
    return STACKS_MAINNET;
  }
  
  return STACKS_TESTNET;
};

const network = getNetwork();
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || 'ST3AM1A56AK2C1XAFJ4115ZSV26EB49BVQ10MGCS0';
const DONATION_CONTRACT_NAME = process.env.NEXT_PUBLIC_DONATION_CONTRACT_NAME || 'donation-tracker-v2';
const REWARDS_CONTRACT_NAME = process.env.NEXT_PUBLIC_REWARDS_CONTRACT_NAME || 'donation-rewards-v2';
const HIRO_API_KEY = process.env.NEXT_PUBLIC_PLATFORM_HIRO_API_KEY;

// Flag to use mock data when contracts aren't deployed
const USE_MOCK_DATA = true; // Set to false when contracts are deployed and working

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
  private apiUrl = process.env.NEXT_PUBLIC_STACKS_API_URL || 'https://api.testnet.hiro.so';
  
  // Hiro API helper functions
  private async makeHiroApiCall(endpoint: string) {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    
    if (HIRO_API_KEY) {
      headers['Authorization'] = `Bearer ${HIRO_API_KEY}`;
    }
    
    const response = await fetch(`${this.apiUrl}${endpoint}`, {
      method: 'GET',
      headers,
    });
    
    if (!response.ok) {
      throw new Error(`Hiro API call failed: ${response.statusText}`);
    }
    
    return response.json();
  }

  private async fetchContractData(functionName: string, functionArgs: any[] = []) {
    try {
      // Use direct contract call with Hiro API
      const result = await fetchCallReadOnlyFunction({
        contractAddress: CONTRACT_ADDRESS,
        contractName: DONATION_CONTRACT_NAME,
        functionName,
        functionArgs,
        network,
        senderAddress: CONTRACT_ADDRESS,
      });

      return cvToJSON(result);
    } catch (error) {
      console.error(`Error calling ${functionName}:`, error);
      // If contract call fails, fall back to mock data for development
      console.log('Falling back to mock data due to contract error');
      return null;
    }
  }

  // Campaign-related functions
  async getCampaign(campaignId: number): Promise<Campaign | null> {
    if (USE_MOCK_DATA) {
      return mockCampaigns.find(c => c.id === campaignId) || null;
    }

    try {
      const result = await this.fetchContractData('get-campaign', [stringUtf8CV(campaignId.toString())]);
      
      if (result && result.success && result.value) {
        return {
          id: campaignId,
          title: result.value.title?.value || '',
          description: result.value.description?.value || '',
          targetAmount: parseInt(result.value['target-amount']?.value || '0') / 1000000, // Convert from microSTX
          currentAmount: parseInt(result.value['raised-amount']?.value || '0') / 1000000,
          creator: result.value.creator?.value || '',
          endBlock: parseInt(result.value['end-block']?.value || '0'),
          isActive: result.value['is-active']?.value || false,
          createdAt: parseInt(result.value['created-at']?.value || '0'),
        };
      }
      
      // Fall back to mock data if no real data available
      return mockCampaigns.find(c => c.id === campaignId) || null;
    } catch (error) {
      console.error('Error fetching campaign:', error);
      // Return mock data as fallback
      return mockCampaigns.find(c => c.id === campaignId) || null;
    }
  }

  async getTotalCampaigns(): Promise<number> {
    if (USE_MOCK_DATA) {
      return mockCampaigns.length;
    }

    try {
      const result = await this.fetchContractData('get-donation-counter');
      return result?.success ? parseInt(result.value) : mockCampaigns.length;
    } catch (error) {
      console.error('Error fetching total campaigns:', error);
      return mockCampaigns.length;
    }
  }

  async getTotalDonations(): Promise<number> {
    if (USE_MOCK_DATA) {
      // Calculate total donations from mock data
      return mockCampaigns.reduce((total, campaign) => {
        return total + Math.ceil(campaign.currentAmount / 5);
      }, 0);
    }

    try {
      const result = await this.fetchContractData('get-donation-counter');
      return result?.success ? parseInt(result.value) : 0;
    } catch (error) {
      console.error('Error fetching total donations:', error);
      return 0;
    }
  }

  async getAllCampaigns(): Promise<Campaign[]> {
    if (USE_MOCK_DATA) {
      return [...mockCampaigns];
    }

    try {
      // Try to get total campaigns first
      const totalResult = await this.fetchContractData('get-donation-counter');
      const totalCampaigns = totalResult?.success ? parseInt(totalResult.value) : mockCampaigns.length;

      const campaigns: Campaign[] = [];

      // Fetch campaigns one by one
      for (let i = 1; i <= Math.min(totalCampaigns, 10); i++) { // Limit to 10 for performance
        const campaign = await this.getCampaign(i);
        if (campaign) {
          campaigns.push(campaign);
        }
      }

      // If no campaigns from contract, return mock data
      return campaigns.length > 0 ? campaigns : [...mockCampaigns];
    } catch (error) {
      console.error('Error fetching all campaigns:', error);
      return [...mockCampaigns];
    }
  }
}

export const contractService = new ContractService();
