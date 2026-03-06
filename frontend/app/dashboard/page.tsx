import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import DashboardClient from '../../src/components/dashboard/DashboardClient';

// export default async function DashboardPage() {
//   const session = await getSession();

// //   if (!session) {
// //     redirect('/login');
// //   }

// //   return <DashboardClient user={session.user} />;
//   return <DashboardClient user={user} />;
// }

export default async function DashboardPage() {
  const session = await getSession();

  const user = session?.user ?? {
    name: "Guest User",
    email: "",
    image: null,
    role: "guest",
  };

  return <DashboardClient user={user} />;
}
