"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { CreatorHeader } from "@/components/creator/CreatorHeader";
import { CreatorAgents } from "@/components/creator/CreatorAgents";
import { AgentDetailModal } from "@/components/creator/AgentDetailModal";
import { mockCreators } from "@/components/creator/mockData";

export default function CreatorPage({ params }: { params: { id: string } }) {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const creator = mockCreators.find((c) => c.id === params.id);

  if (!creator) {
    return <div>Creator not found</div>;
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-base-100">
        <div className="container mx-auto px-4 py-6">
          <CreatorHeader creator={creator} />
          <CreatorAgents 
            agents={creator.agents} 
            onSelectAgent={setSelectedAgent}
          />
          <AgentDetailModal
            agent={selectedAgent}
            onClose={() => setSelectedAgent(null)}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}