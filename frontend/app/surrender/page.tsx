import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import SurrenderPage from '../../src/components/surrender/SurrenderPage';


export default async function SurrenderPages() {
  const session = await getSession();

  const user = session?.user ?? {
    name: "Guest User",
    email: "",
    image: null,
    role: "guest",
  };

  return <SurrenderPage user={user} />;
}