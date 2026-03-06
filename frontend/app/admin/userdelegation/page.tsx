import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import Userdelegation from '../../../src/components/admin/userdelegation';

export default async function ImprestNewPage() {
  const session = await getSession();

  const user = session?.user ?? {
    name: "Guest User",
    email: "",
    image: null,
    role: "guest",
  };

  return <Userdelegation user={user} />;
}