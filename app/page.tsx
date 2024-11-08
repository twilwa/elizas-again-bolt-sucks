import { Navbar } from "@/components/Navbar";
import { WaitlistCard } from "@/components/WaitlistCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to <span className="text-primary">Elizas</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The premier marketplace for AI agents. Create, discover, and utilize
            powerful AI assistants for your needs.
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