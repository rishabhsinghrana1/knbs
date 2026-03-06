import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import ImprestPage from '../../src/components/imprest/ImprestPage';


export default async function ImprestPages() {
  const session = await getSession();

  const user = session?.user ?? {
    name: "Guest User",
    email: "",
    image: null,
    role: "guest",
  };

  return <ImprestPage user={user} />;
}