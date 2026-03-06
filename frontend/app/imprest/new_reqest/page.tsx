import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import NewRequestPage from '../../../src/components/imprest/NewRequestPage';

export default async function ImprestNewPage() {
  const session = await getSession();

  const user = session?.user ?? {
    name: "Guest User",
    email: "",
    image: null,
    role: "guest",
  };

  return <NewRequestPage user={user} />;
}