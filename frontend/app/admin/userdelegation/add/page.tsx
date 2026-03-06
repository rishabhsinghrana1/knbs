import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import AddUserDelegation from '../../../../src/components/admin/addUserDelegation';

export default async function ImprestNewPage() {
  const session = await getSession();

  const user = session?.user ?? {
    name: "Guest User",
    email: "",
    image: null,
    role: "guest",
  };

  return <AddUserDelegation user={user} />;
}