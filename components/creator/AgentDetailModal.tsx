"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Agent } from "./types";
import { SocialFeed } from "./SocialFeed";
import { TokenInfo } from "./TokenInfo";
import { TransactionHistory } from "./TransactionHistory";

interface AgentDetailModalProps {
  agent: Agent | null;
  onClose: () => void;
}

export function AgentDetailModal({ agent, onClose }: AgentDetailModalProps) {
  if (!agent) return null;

  return (
    <Dialog open={!!agent} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <div className="flex flex-col h-full">
          <div className="flex items-start gap-4 mb-6">
            <img
              src={agent.image}
              alt={agent.name}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold mb-1">{agent.name}</h2>
              <p className="text-base-content/70">{agent.description}</p>
            </div>
          </div>

          <Tabs defaultValue="social" className="flex-1">
            <TabsList>
              <TabsTrigger value="social">Social Activity</TabsTrigger>
              <TabsTrigger value="tokens">Tokens</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
            </TabsList>

            <TabsContent value="social" className="flex-1 overflow-auto">
              <SocialFeed feeds={agent.socialFeeds} />
            </TabsContent>

            <TabsContent value="tokens" className="flex-1 overflow-auto">
              <TokenInfo tokens={agent.tokens} />
            </TabsContent>

            <TabsContent value="transactions" className="flex-1 overflow-auto">
              <TransactionHistory transactions={agent.transactions} />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}

