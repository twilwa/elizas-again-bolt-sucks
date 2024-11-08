import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Transaction } from "./types";

interface TransactionHistoryProps {
  transactions: Transaction[];
}

export function TransactionHistory({ transactions }: TransactionHistoryProps) {
  return (
    <div className="space-y-4">
      {transactions.map((tx, index) => (
        <div key={index} className="card bg-neutral">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {tx.type === "incoming" ? (
                  <ArrowDownRight className="h-5 w-5 text-success" />
                ) : (
                  <ArrowUpRight className="h-5 w-5 text-error" />
                )}
                <div>
                  <p className="font-medium">{tx.description}</p>
                  <p className="text-sm text-base-content/70">
                    {tx.timestamp} • {tx.network}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">{tx.amount} {tx.token}</p>
                <p className="text-sm text-base-content/70">${tx.usdValue}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}