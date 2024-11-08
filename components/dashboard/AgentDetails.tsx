"use client";

import {
  Users,
  Wallet,
  Activity,
  Shield,
} from "lucide-react";

interface AgentDetailsProps {
  agent: any; // Replace with proper type
}

export function AgentDetails({ agent }: AgentDetailsProps) {
  return (
    <div className="card bg-neutral">
      <div className="card-body">
        <div className="flex items-start justify-between mb-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">{agent.name}</h3>
            <p className="text-sm opacity-70">{agent.type} Agent</p>
          </div>
        </div>

        <div className="tabs tabs-boxed">
          <a className="tab tab-active">
            <Users className="h-4 w-4 mr-2" />
            Clients
          </a>
          <a className="tab">
            <Wallet className="h-4 w-4 mr-2" />
            Wallets
          </a>
          <a className="tab">
            <Activity className="h-4 w-4 mr-2" />
            Activity
          </a>
          <a className="tab">
            <Shield className="h-4 w-4 mr-2" />
            Security
          </a>
        </div>

        <div className="mt-4 space-y-4">
          {[1, 2, 3].map((client) => (
            <div
              key={client}
              className="flex items-center justify-between p-4 rounded-lg bg-base-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Client {client}</p>
                  <p className="text-sm opacity-70">
                    Connected since Mar 2024
                  </p>
                </div>
              </div>
              <span className="text-sm text-success">Active</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}