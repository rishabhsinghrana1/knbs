// import {   view } from '../../../../src/components/imprest/viewImprest'

// export default function Page() {
//   return <VIEW />
// }

'use client'

import { useParams } from 'next/navigation'
import ViewImprestPages from '../../../../src/components/imprest/ViewImprestPage'

export default function ViewImprestPage() {
  const { id } = useParams()

  return (
    <ViewImprestPages
      imprestNumber={id}
      mode="view"   // read only
    />
  )
}