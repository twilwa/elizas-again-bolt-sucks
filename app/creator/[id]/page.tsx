// app/creator/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { CreatorHeader } from "@/components/creator/CreatorHeader";
import { CreatorAgents } from "@/components/creator/CreatorAgents";
import { AgentDetailModal } from "@/components/creator/AgentDetailModal";
import { mockCreators } from "@/components/creator/mockData";
import { Agent, Creator } from "@/components/creator/types";

export default function CreatorPage() {
  const params = useParams();
  const { id } = params as { id: string };
  const [creator, setCreator] = useState<Creator | null>(null);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  useEffect(() => {
    const creatorData = mockCreators.find((c) => c.id === id);
    if (creatorData) {
      setCreator(creatorData);
      setAgents(creatorData.agents);
    }
  }, [id]);

  if (!creator) {
    return (
      <DashboardLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Creator not found</h1>
          <p className="text-gray-600">The creator you're looking for doesn't exist.</p>
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
