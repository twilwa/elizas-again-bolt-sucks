 // app/(creator)/[name]/page.tsx
import { notFound } from 'next/navigation';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { CreatorHeader } from '@/components/creator/CreatorHeader';
import { ClientCreatorContent } from '@/components/creator/ClientCreatorComponent';
import { mockCreators } from '@/components/creator/mockData';
import { Creator } from '@/components/creator/types';

interface PageProps {
  params: Promise<{ name: string }> | undefined;
  searchParams?: Promise<any>;
}

export default async function CreatorPage({ params }: PageProps) {
  // Since we're using static data, we can create a Promise that resolves immediately
  const resolvedParams = await (params || Promise.resolve({ name: '' }));
  const creator = mockCreators.find((c) => c.name === resolvedParams.name);

  if (!creator) {
    notFound();
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

// This ensures we generate static pages for all creators at build time
export async function generateStaticParams() {
  return mockCreators.map((creator) => ({
    name: creator.name,
  }));
}