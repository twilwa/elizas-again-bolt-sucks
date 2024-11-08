import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Token } from "./types";

interface TokenInfoProps {
  tokens: Token[];
}

export function TokenInfo({ tokens }: TokenInfoProps) {
  return (
    <div className="space-y-4">
      {tokens.map((token) => (
        <div key={token.address} className="card bg-neutral">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold">{token.name}</h3>
                <p className="text-sm text-base-content/70">{token.network}</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">${token.price}</div>
                <div className={`flex items-center gap-1 text-sm ${
                  token.priceChange >= 0 ? "text-success" : "text-error"
                }`}>
                  {token.priceChange >= 0 ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  {Math.abs(token.priceChange)}%
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
              <div>
                <p className="text-base-content/70">Market Cap</p>
                <p className="font-medium">${token.marketCap}</p>
              </div>
              <div>
                <p className="text-base-content/70">Volume (24h)</p>
                <p className="font-medium">${token.volume24h}</p>
              </div>
              <div>
                <p className="text-base-content/70">Holders</p>
                <p className="font-medium">{token.holders}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}