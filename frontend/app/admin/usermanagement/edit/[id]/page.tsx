
// 'use client'
// import { useParams } from 'next/navigation'

// import { getSession } from '@/lib/auth';
// import Editusermanagement from '../../../../../src/components/admin/Editusermanagement';

// export default async function Editusermanagements() {
//  const { id } = useParams()

// //   return <Userdelegation user={user} />;
// //   return <EditUserDelegation user={user} />;
//     return (
//     <Editusermanagement
//       userId={id}
//       mode="edit"   // read only
//     />
//     )
// }

 

// app/admin/usermanagement/edit/[id]/page.tsx
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Editusermanagement from '../../../../../src/components/admin/Editusermanagement';

export default async function EditUserManagementPage({
  params,
}: {
  params: { id: string }
}) {
  // Server-side auth check
  const session = await getSession()
  
//   if (!session) {
//     redirect('/login')
//   }

  // Optional: Check if user has permission to edit
  // if (session.role !== 'admin') {
  //   redirect('/dashboard')
  // }

  return (
    <Editusermanagement
      userId={params.id}
      mode="edit"
    />
  )
}