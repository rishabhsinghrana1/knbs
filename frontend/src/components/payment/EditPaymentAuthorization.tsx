// 'use client'

// import { useParams, useRouter } from 'next/navigation'
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button
// } from '@mui/material'
// import { useState, useEffect } from 'react'

// export default function EditPaymentPage() {
//   const { id } = useParams()
//   const router = useRouter()

//   const [form, setForm] = useState({
//     debtorCode: '',
//     debtorName: '',
//     glAccount: '',
//     accountName: '',
//     amount: '',
//     requestNo: '',
//     requestLine: ''
//   })

//   useEffect(() => {
//     // 👉 API se data fetch kar lena
//     setForm({
//       debtorCode: 'D001',
//       debtorName: 'ABC Pvt Ltd',
//       glAccount: '1001',
//       accountName: 'Cash Account',
//       amount: '5000',
//       requestNo: 'REQ-001',
//       requestLine: '1'
//     })
//   }, [id])

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSave = () => {
//     console.log('Updated Data:', form)
//     router.push(`/payment-authorization/view/${id}`)
//   }

//   return (
//     <Box sx={{ p: 3 }}>
//       <Paper sx={{ p: 3, borderRadius: 2 }}>
//         <Typography variant="h6" mb={3}>
//           Edit Payment Authorization
//         </Typography>

//         <Box sx={{ display: 'grid', gap: 2 }}>
//           <TextField name="debtorCode" label="Debtor Code" value={form.debtorCode} onChange={handleChange} />
//           <TextField name="debtorName" label="Debtor Name" value={form.debtorName} onChange={handleChange} />
//           <TextField name="glAccount" label="GL Account" value={form.glAccount} onChange={handleChange} />
//           <TextField name="accountName" label="Account Name" value={form.accountName} onChange={handleChange} />
//           <TextField name="amount" label="Amount" value={form.amount} onChange={handleChange} />
//           <TextField name="requestNo" label="Request No" value={form.requestNo} onChange={handleChange} />
//           <TextField name="requestLine" label="Request Line" value={form.requestLine} onChange={handleChange} />
//         </Box>

//         <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
//           <Button variant="outlined" onClick={() => router.back()}>
//             Cancel
//           </Button>
//           <Button variant="contained" onClick={handleSave}>
//             Save
//           </Button>
//         </Box>
//       </Paper>
//     </Box>
//   )
// }


'use client'

import { useParams, useRouter } from 'next/navigation'
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  CircularProgress
} from '@mui/material'
import { useState, useEffect } from 'react'

interface LineData {
  debtor_code: string
  debtor_name: string
  gl_account: string
  account_name: string
  amount: number
  request_no: string
  request_line: string
}

export default function EditPaymentPage() {
  const { id } = useParams()
  const router = useRouter()

  const [bank, setBank] = useState('')
  const [status, setStatus] = useState('Draft')
  const [lines, setLines] = useState<LineData[]>([])
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)

  // ===============================
  // FETCH PAYMENT BY ID
  // ===============================
  useEffect(() => {
    const fetchPayment = async () => {
      try {
        setLoading(true)

        const res = await fetch(
          `http://localhost:8000/api/v1/payment/payment-authorization/${id}/`
        )

        const data = await res.json()

        if (res.ok) {
          setBank(data.bank_in_sage)
          setStatus(data.status)
          setLines(data.lines || [])
        } else {
          console.error(data)
        }
      } catch (error) {
        console.error('Error fetching payment:', error)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchPayment()
  }, [id])

  // ===============================
  // HANDLE LINE CHANGE
  // ===============================
  const handleLineChange = (
    index: number,
    field: keyof LineData,
    value: any
  ) => {
    const updated = [...lines]
    updated[index][field] = value
    setLines(updated)
  }

  // ===============================
  // UPDATE API CALL
  // ===============================
  const handleSave = async () => {
    setSaving(true)

    const payload = {
      bank_in_sage: bank,
      status: status,
      lines: lines
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/payment/payment-authorization/${id}/`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      const data = await response.json()

      if (response.ok) {
        alert('Updated Successfully ✅')
        router.push('/payment-authorization')
      } else {
        console.error(data)
        alert('Update failed')
      }
    } catch (error) {
      console.error(error)
      alert('Server error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" mb={3}>
          Edit Payment Authorization
        </Typography>

        {/* Bank */}
        <TextField
          fullWidth
          size="small"
          label="Bank in Sage"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Status */}
        <TextField
          select
          fullWidth
          size="small"
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          sx={{ mb: 3 }}
        >
          <MenuItem value="Draft">Draft</MenuItem>
          <MenuItem value="Processed">Processed</MenuItem>
        </TextField>

        {/* Lines Table */}
        {lines.map((line, index) => (
          <Box
            key={index}
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2,
              mb: 2,
              p: 2,
              border: '1px solid #eee',
              borderRadius: 1
            }}
          >
            <TextField
              label="Debtor Code"
              value={line.debtor_code}
              onChange={(e) =>
                handleLineChange(index, 'debtor_code', e.target.value)
              }
            />

            <TextField
              label="Debtor Name"
              value={line.debtor_name}
              onChange={(e) =>
                handleLineChange(index, 'debtor_name', e.target.value)
              }
            />

            <TextField
              label="GL Account"
              value={line.gl_account}
              onChange={(e) =>
                handleLineChange(index, 'gl_account', e.target.value)
              }
            />

            <TextField
              label="Account Name"
              value={line.account_name}
              onChange={(e) =>
                handleLineChange(index, 'account_name', e.target.value)
              }
            />

            <TextField
              label="Amount"
              type="number"
              value={line.amount}
              onChange={(e) =>
                handleLineChange(index, 'amount', Number(e.target.value))
              }
            />

            <TextField
              label="Request No"
              value={line.request_no}
              onChange={(e) =>
                handleLineChange(index, 'request_no', e.target.value)
              }
            />

            <TextField
              label="Request Line"
              value={line.request_line}
              onChange={(e) =>
                handleLineChange(index, 'request_line', e.target.value)
              }
            />
          </Box>
        ))}

        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <Button variant="outlined" onClick={() => router.back()}>
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Updating...' : 'Save'}
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}
