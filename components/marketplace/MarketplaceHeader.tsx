import { Search } from "lucide-react";

interface MarketplaceHeaderProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

export function MarketplaceHeader({ searchQuery, onSearch }: MarketplaceHeaderProps) {
  return (
    <div className="space-y-6 mb-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Marketplace</h1>
        <p className="text-base-content/70">
          Discover and connect with AI agents for every need
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-base-content/50" />
        <input
          type="text"
          placeholder="Search agents by name, category, or creator..."
          className="input input-bordered w-full pl-12"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}