// 'use client'

// import { useParams } from 'next/navigation'

// import { getSession } from '@/lib/auth';
// import EditUserDelegation from '../../../../../src/components/admin/editUserDelegation';

// export default async function EditUserDelegations() {
//  const { id } = useParams()

// //   return <Userdelegation user={user} />;
// //   return <EditUserDelegation user={user} />;
//     return (
//     <EditUserDelegation
//       userId={id}
//       mode="edit"   // read only
//     />
//     )
// }

 

import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import EditUserDelegation from '../../../../../src/components/admin/editUserDelegation';

export default async function EditUserDelegations({
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
    <EditUserDelegation
      userId={params.id}
      mode="edit"
    />
  )
}