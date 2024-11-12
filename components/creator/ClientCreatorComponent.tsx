// components/creator/ClientCreatorContent.tsx
"use client";

import { useState } from "react";
import { Creator, Agent } from "@/components/creator/types";
import { CreatorAgents } from "./CreatorAgents";
import { AgentDetailModal } from "./AgentDetailModal";

export function ClientCreatorContent({ creator }: { creator: Creator }) {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  return (
    <>
      <CreatorAgents
        agents={creator.agents}
        onSelectAgent={(agent: Agent) => setSelectedAgent(agent)}
      />
      {selectedAgent && (
        <AgentDetailModal
          agent={selectedAgent}
          onClose={() => setSelectedAgent(null)}
        />
      )}
    </>
  );
}
