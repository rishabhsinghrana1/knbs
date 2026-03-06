import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import Usermanagement from '../../../src/components/admin/usermanagement';

export default async function ImprestNewPage() {
  const session = await getSession();

 
  return <Usermanagement />;
}