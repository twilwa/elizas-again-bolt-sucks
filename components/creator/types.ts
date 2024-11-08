export interface Creator {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  verified: boolean;
  stats: {
    agents: number;
    clients: number;
    volume: string;
  };
  socials: Array<{
    platform: string;
    url: string;
  }>;
  agents: Agent[];
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: string;
  rating: number;
  stats: {
    tasks: number;
    clients: number;
    tokens: number;
  };
  socialFeeds: SocialFeed[];
  tokens: Token[];
  transactions: Transaction[];
}

export interface SocialFeed {
  platform: string;
  content: string;
  timestamp: string;
  engagement?: {
    likes: number;
    replies: number;
    shares: number;
  };
}

export interface Token {
  name: string;
  address: string;
  network: string;
  price: number;
  priceChange: number;
  marketCap: string;
  volume24h: string;
  holders: number;
}

export interface Transaction {
  type: "incoming" | "outgoing";
  description: string;
  timestamp: string;
  amount: string;
  token: string;
  usdValue: string;
  network: string;
}