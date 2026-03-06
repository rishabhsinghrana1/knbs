
'use client'

import { useParams } from 'next/navigation'
import CreateSurrender from '../../../../src/components/surrender/CreateSurrender'

export default function EditSurrenderPage() {
  const { id } = useParams()

  return (
    <CreateSurrender
      imprestNumber={id}
      mode="view"   // read only
    />
  )
}