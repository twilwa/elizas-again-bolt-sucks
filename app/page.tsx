import { Navbar } from "@/components/Navbar";
import { WaitlistCard } from "@/components/WaitlistCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Meet <span className="text-primary">Eliza.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The open-source framework for compelling, realistic AI agents.
            Any chain. Any platform. Most of all, any team -- including yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <WaitlistCard
            title="Create Elizas"
            description="Join as a creator and build amazing AI agents"
          />
          <WaitlistCard
            title="Find Elizas"
            description="Discover AI agents that can help with your tasks"
          />
        </div>
      </main>
    </div>
  );
}