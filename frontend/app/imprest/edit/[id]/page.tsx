
'use client'

import { useParams } from 'next/navigation'
import EditImprestPage from '../../../../src/components/imprest/EditImprestPage'

export default function ViewImprestPage() {
  const { id } = useParams()

  return (
    <EditImprestPage
      imprestNumber={id}
      mode="view"   // read only
    />
  )
}