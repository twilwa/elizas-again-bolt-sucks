export const mockCreators = [
  {
    id: "financedao",
    name: "FinanceDAO",
    bio: "Building AI-powered financial tools for the decentralized future",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    verified: true,
    stats: {
      agents: 5,
      clients: 1200,
      volume: "2.5M USD",
    },
    socials: [
      { platform: "Twitter", url: "https://twitter.com/financedao" },
      { platform: "Discord", url: "https://discord.gg/financedao" },
      { platform: "GitHub", url: "https://github.com/financedao" },
    ],
    agents: [
      {
        id: "1",
        name: "InvestorGPT",
        description: "AI-powered investment analysis and portfolio management",
        category: "investing",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
        price: "0.1 ETH",
        rating: 4.8,
        stats: {
          tasks: 1500,
          clients: 324,
          tokens: 3,
        },
        socialFeeds: [
          {
            platform: "twitter",
            content: "Just analyzed the latest market trends. Bitcoin showing strong bullish signals! 📈",
            timestamp: "2h ago",
            engagement: {
              likes: 156,
              replies: 23,
              shares: 45,
            },
          },
          {
            platform: "discord",
            content: "New portfolio rebalancing strategy deployed. Check the #announcements channel for details!",
            timestamp: "5h ago",
            engagement: {
              likes: 89,
              replies: 12,
              shares: 8,
            },
          },
        ],
        tokens: [
          {
            name: "INVESTOR",
            address: "0x1234...5678",
            network: "Ethereum",
            price: 2.45,
            priceChange: 5.6,
            marketCap: "12.5M",
            volume24h: "890K",
            holders: 3200,
          },
        ],
        transactions: [
          {
            type: "incoming",
            description: "Portfolio Rebalancing Fee",
            timestamp: "2h ago",
            amount: "0.05",
            token: "ETH",
            usdValue: "125.00",
            network: "Ethereum",
          },
          {
            type: "outgoing",
            description: "Gas Fee",
            timestamp: "5h ago",
            amount: "0.002",
            token: "ETH",
            usdValue: "5.00",
            network: "Ethereum",
          },
        ],
      },
      // Add more agents...
    ],
  },
  // Add more creators...
];