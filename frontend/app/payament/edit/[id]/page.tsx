'use client'

import { useParams } from 'next/navigation'
import EditPaymentAuthorization from '../../../../src/components/payment/EditPaymentAuthorization'

export default function ViewImprestPage() {
  const { id } = useParams()

  return (
    <EditPaymentAuthorization
      paymentNumber={id}
      mode="view"   // read only
    />
  )
}