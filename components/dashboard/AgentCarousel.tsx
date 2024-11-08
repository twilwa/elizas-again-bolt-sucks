"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Bot, Briefcase, Clock } from "lucide-react";

// Mock data - replace with real data later
const mockAgents = [
  {
    id: 1,
    name: "Financial Advisor",
    type: "GPT-4",
    status: "Active",
    clients: 12,
    uptime: "99.9%",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
  },
  {
    id: 2,
    name: "Customer Support",
    type: "Claude",
    status: "Active",
    clients: 48,
    uptime: "99.7%",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
];

interface AgentCarouselProps {
  onSelect: (agent: any) => void;
}

export function AgentCarousel({ onSelect }: AgentCarouselProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Agents Under Contract</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {mockAgents.map((agent) => (
            <CarouselItem key={agent.id} className="md:basis-1/2 lg:basis-1/2">
              <div
                className="card bg-neutral hover:border-primary cursor-pointer transition-all"
                onClick={() => onSelect(agent)}
              >
                <figure className="relative aspect-square">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                    <p className="text-white/80">{agent.type}</p>
                  </div>
                </figure>
                <div className="card-body p-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-primary" />
                      <span>{agent.status}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>{agent.clients} clients</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{agent.uptime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}