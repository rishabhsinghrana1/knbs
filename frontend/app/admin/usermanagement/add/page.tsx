import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import Addusermanagement from '../../../../src/components/admin/Addusermanagement';

export default async function Addusermanagements() {
  const session = await getSession();

  const user = session?.user ?? {
    name: "Guest User",
    email: "",
    image: null,
    role: "guest",
  };

  return <Addusermanagement user={user} />;
}