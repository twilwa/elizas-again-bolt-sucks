export interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: string;
  rating: number;
  creator: {
    name: string;
    avatar: string;
  };
  social: {
    twitter?: string;
    telegram?: string;
    discord?: string;
  };
  stats: {
    tasks: number;
    clients: number;
    tokens: number;
  };
  wallet: {
    address: string;
    network: string;
  };
}