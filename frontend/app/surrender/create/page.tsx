import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import CreateSurrender from '../../../src/components/surrender/CreateSurrender';


export default async function SurrenderPages() {
  const session = await getSession();

  const user = session?.user ?? {
    name: "Guest User",
    email: "",
    image: null,
    role: "guest",
  };

  return <CreateSurrender user={user} />;
}