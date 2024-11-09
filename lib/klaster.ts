// lib/klaster.ts
import {
  buildMultichainReadonlyClient,
  MultichainTokenMapping,
  mcUSDC,
  MultichainClient,
  AccountInitData,
  MultichainAccount,
  AccountDeployment,
} from "klaster-sdk";
import { type Hex } from "viem";
import { mainnet, sepolia, baseSepolia } from "viem/chains";

// USDC contract addresses
const USDC_ADDRESSES = {
  1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // Mainnet USDC
  11155111: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238', // Sepolia USDC
  84532: '0x036CbD53842c5426634e7929541eC2318f3dCF7e', // Base Sepolia USDC
} as const;

const USDC_ABI = [
  {
    "constant": true,
    "inputs": [{"name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
] as const;

class ParticleAccountInitData extends AccountInitData<{ address: string }> {
  accountProviderId = 'biconomy';
  version = '2.0.0';
  private readonly address: string;

  constructor(params: { address: string }) {
    super(params);
    this.address = params.address;
  }

  encodeAccountCreationFactoryData(): Hex {
    return "0x" as Hex;
  }

  getSupportedChains(): AccountDeployment[] {
    return [
      { chainId: 1, address: this.address as `0x${string}` },
      { chainId: 11155111, address: this.address as `0x${string}` },
      { chainId: 84532, address: this.address as `0x${string}` }
    ];
  }

  async getAccountAddress(chainId: number): Promise<`0x${string}`> {
    const supported = this.getSupportedChains().find(chain => chain.chainId === chainId);
    if (!supported) {
      throw new Error(`Chain ${chainId} not supported`);
    }
    return this.address as `0x${string}`;
  }
}

export const initializeKlaster = async (address: string) => {
  if (!address || !address.startsWith('0x')) {
    throw new Error('Invalid address provided');
  }

  const supportedChains = [
    mainnet,    // 1
    sepolia,    // 11155111
    baseSepolia // 84532
  ];

  const mcClient = buildMultichainReadonlyClient(
    supportedChains.map((chain) => ({
      chainId: chain.id,
      rpcUrl: chain.rpcUrls.default.http[0],
    }))
  );

  const supportedUSDC: MultichainTokenMapping = supportedChains
    .filter(chain => USDC_ADDRESSES[chain.id as keyof typeof USDC_ADDRESSES])
    .map(chain => ({
      chainId: chain.id,
      address: USDC_ADDRESSES[chain.id as keyof typeof USDC_ADDRESSES],
      abi: USDC_ABI,
    }));

  return {
    mcClient,
    supportedUSDC,
  };
};

export const getUnifiedBalance = async (
  mcClient: MultichainClient,
  tokenMapping: MultichainTokenMapping,
  address: string
) => {
  const accountInitData = new ParticleAccountInitData({ address });
  
  const account = new MultichainAccount(
    accountInitData.getSupportedChains(),
    accountInitData
  );

  try {
    const balance = await mcClient.getUnifiedErc20Balance({
      tokenMapping,
      account,
    });

    return {
      ...balance,
      decimals: 6,
    };
  } catch (error) {
    console.error('Error getting unified balance:', error);
    throw error;
  }
};;