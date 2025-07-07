import { 
  cvToJSON, 
  hexToCV, 
  uintCV, 
  stringAsciiCV, 
  someCV, 
  noneCV,
  fetchCallReadOnlyFunction,
  ClarityValue,
} from '@stacks/transactions';
import { StacksNetwork } from '@stacks/network';

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

export interface CampaignStats {
  totalRaised: number;
  targetAmount: number;
  donorsCount: number;
  progressPercentage: number;
  isActive: boolean;
  daysRemaining: number;
}

export class CampaignUtils {
  constructor(
    private network: StacksNetwork,
    private contractAddress: string,
    private contractName: string
  ) {}

  async getCampaign(campaignId: number): Promise<Campaign | null> {
    try {
      const result = await fetchCallReadOnlyFunction({
        contractAddress: this.contractAddress,
        contractName: this.contractName,
        functionName: 'get-campaign',
        functionArgs: [uintCV(campaignId)],
        network: this.network,
        senderAddress: this.contractAddress,
      });

      const resultValue = cvToJSON(result);
      
      if (resultValue.success && resultValue.value) {
        const campaign = resultValue.value.value;
        return {
          id: campaignId,
          title: campaign.title.value,
          description: campaign.description.value,
          targetAmount: parseInt(campaign['target-amount'].value) / 1000000, // Convert from microSTX
          currentAmount: parseInt(campaign['current-amount'].value) / 1000000,
          creator: campaign.creator.value,
          endBlock: parseInt(campaign['end-block'].value),
          isActive: campaign['is-active'].value,
          createdAt: parseInt(campaign['created-at'].value),
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error fetching campaign:', error);
      return null;
    }
  }

  async getCampaignStats(campaignId: number): Promise<CampaignStats | null> {
    try {
      const result = await fetchCallReadOnlyFunction({
        contractAddress: this.contractAddress,
        contractName: this.contractName,
        functionName: 'get-campaign-stats',
        functionArgs: [uintCV(campaignId)],
        network: this.network,
        senderAddress: this.contractAddress,
      });

      const resultValue = cvToJSON(result);
      
      if (resultValue.success && resultValue.value) {
        const stats = resultValue.value.value;
        return {
          totalRaised: parseInt(stats['total-raised'].value) / 1000000,
          targetAmount: parseInt(stats['target-amount'].value) / 1000000,
          donorsCount: parseInt(stats['donors-count'].value),
          progressPercentage: parseInt(stats['progress-percentage'].value),
          isActive: stats['is-active'].value,
          daysRemaining: parseInt(stats['days-remaining'].value),
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error fetching campaign stats:', error);
      return null;
    }
  }

  async getTotalCampaigns(): Promise<number> {
    try {
      const result = await fetchCallReadOnlyFunction({
        contractAddress: this.contractAddress,
        contractName: this.contractName,
        functionName: 'get-total-campaigns',
        functionArgs: [],
        network: this.network,
        senderAddress: this.contractAddress,
      });

      const resultValue = cvToJSON(result);
      return resultValue.success ? parseInt(resultValue.value) : 0;
    } catch (error) {
      console.error('Error fetching total campaigns:', error);
      return 0;
    }
  }

  async getTotalDonations(): Promise<number> {
    try {
      const result = await fetchCallReadOnlyFunction({
        contractAddress: this.contractAddress,
        contractName: this.contractName,
        functionName: 'get-total-donations',
        functionArgs: [],
        network: this.network,
        senderAddress: this.contractAddress,
      });

      const resultValue = cvToJSON(result);
      return resultValue.success ? parseInt(resultValue.value) : 0;
    } catch (error) {
      console.error('Error fetching total donations:', error);
      return 0;
    }
  }

  async isCampaignActive(campaignId: number): Promise<boolean> {
    try {
      const result = await fetchCallReadOnlyFunction({
        contractAddress: this.contractAddress,
        contractName: this.contractName,
        functionName: 'is-campaign-active',
        functionArgs: [uintCV(campaignId)],
        network: this.network,
        senderAddress: this.contractAddress,
      });

      const resultValue = cvToJSON(result);
      return resultValue.success ? resultValue.value : false;
    } catch (error) {
      console.error('Error checking if campaign is active:', error);
      return false;
    }
  }

  // Utility function to create function arguments for transactions
  createCampaignArgs(
    title: string,
    description: string,
    targetAmount: number,
    durationBlocks: number
  ): ClarityValue[] {
    return [
      stringAsciiCV(title),
      stringAsciiCV(description),
      uintCV(targetAmount * 1000000), // Convert to microSTX
      uintCV(durationBlocks),
    ];
  }

  createDonationArgs(
    campaignId: number,
    amount: number,
    message?: string
  ): ClarityValue[] {
    return [
      uintCV(campaignId),
      uintCV(amount * 1000000), // Convert to microSTX
      message ? someCV(stringAsciiCV(message)) : noneCV(),
    ];
  }

  createWithdrawArgs(campaignId: number): ClarityValue[] {
    return [uintCV(campaignId)];
  }

  // Format STX amounts for display
  formatSTX(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }).format(amount);
  }

  // Calculate days remaining from blocks
  calculateDaysRemaining(endBlock: number, currentBlock: number = 0): number {
    const blocksPerDay = 144; // Assuming ~10 minutes per block
    const remainingBlocks = Math.max(0, endBlock - currentBlock);
    return Math.ceil(remainingBlocks / blocksPerDay);
  }

  // Calculate progress percentage
  calculateProgress(currentAmount: number, targetAmount: number): number {
    if (targetAmount === 0) return 0;
    return Math.min((currentAmount / targetAmount) * 100, 100);
  }
}
