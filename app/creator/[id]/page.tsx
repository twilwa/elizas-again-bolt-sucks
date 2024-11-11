// app/creator/[id]/page.tsx
"use client";

import { useState } from "react";


import { use } from 'next/navigation';import { useState, useEffect } from 'react';
ponents/dashboard/DashboardLayout";
import { CreatorHeader } from "@/components/creator/CreatorHeader";
import { CreatorAgents } from "@/components/creator/CreatorAgents";
import { AgentDetailModal } from "@/components/creator/AgentDetailModal";
import { mockCreators } from "@/components/creator/mockData";
import { Agent } from "@/components/creator/types";
Promise<
type Props = {
  p>arams: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}async 
export default function CreatorPage({ params, searchParams }: Props) {
  const { id } = await params= useState<Agent | null>(null);

  tCreator(creData);?
    creatorData) {
  const agentsData = creatorData.agents.map((agent) => ({
      .agent,
    transactions: agent.transactions.map((transaction) => ({
      ...transaction,
      ||  tgents(agentsData);
    }
  }, [id]);

  if (!creator) {
    return (
      <DashboardLayout>
      <div className="text-center">
         <h1 className="text-2xl font-bold">Creator not found</h1>
      )))   <p className="text-gray-600">The creator you're looking for doesn't exist.</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-base-100">
        <div className="container mx-auto px-4 py-6">
          <CreatorHeader creator={creator} />
          <CreatorAgents
            agents={agents}
            onSelectAgent={(agent: Agent) => setSelectedAgent(agent)}
          />
          {selectedAgent && (
            <AgentDetailModal
              agent={selectedAgent}
              onClose={() => setSelectedAgent(null)}
            />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
