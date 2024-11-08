"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { AgentCarousel } from "@/components/dashboard/AgentCarousel";
import { WalletInfo } from "@/components/dashboard/WalletInfo";
import { AgentChat } from "@/components/dashboard/AgentChat";
import { AgentDetails } from "@/components/dashboard/AgentDetails";

export default function DashboardPage() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-base-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2 space-y-6">
              <AgentCarousel onSelect={setSelectedAgent} />
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <WalletInfo />
              {selectedAgent && <AgentDetails agent={selectedAgent} />}
              <AgentChat agent={selectedAgent} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}