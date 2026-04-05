
'use client'

import { useParams } from 'next/navigation'
import ViewSurrender from '../../../../src/components/surrender/ViewSurrender'

export default function EditSurrenderPage() {
  const { id } = useParams()

  return (
    <ViewSurrender
      imprestNumber={id}
      mode="view"   // read only
    />
  )
}