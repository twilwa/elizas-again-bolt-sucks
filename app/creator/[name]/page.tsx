// app/creator/[id]/page.tsx
import { notFound } from "next/navigation";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { CreatorHeader } from "@/components/creator/CreatorHeader";
import { mockCreators } from "@/components/creator/mockData";
import { Creator } from "@/components/creator/types";
import { ClientCreatorContent } from "@/components/creator/ClientCreatorComponent";


export function generateStaticParams() {
  return mockCreators.map((creator) => ({
    name: creator.name,
  }));
}

export default async function CreatorPage({ params }: { params: { name: string } }) {
  const { name } = params;
  const creator = mockCreators.find((c) => c.name === name);

  if (!creator) {
    return (
      <DashboardLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Creator not found</h1>
          <p className="text-gray-600">
            The creator you're looking for doesn't exist.
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-base-100">
        <div className="container mx-auto px-4 py-6">
          <CreatorHeader creator={creator} />
          <ClientCreatorContent creator={creator} />
        </div>
      </div>
    </DashboardLayout>
  );
}
