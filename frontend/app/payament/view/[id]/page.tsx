'use client'

import { useParams } from 'next/navigation'
import ViewPaymentAuthorization from '../../../../src/components/payment/ViewPaymentAuthorization'

export default function ViewImprestPage() {
  const { id } = useParams()

  return (
    <ViewPaymentAuthorization
      paymentNumber={id}
      mode="view"   // read only
    />
  )
}