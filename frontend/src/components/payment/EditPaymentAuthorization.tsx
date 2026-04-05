// // 'use client'

// // import { useParams, useRouter } from 'next/navigation'
// // import {
// //   Box,
// //   Paper,
// //   Typography,
// //   TextField,
// //   Button
// // } from '@mui/material'
// // import { useState, useEffect } from 'react'

// // export default function EditPaymentPage() {
// //   const { id } = useParams()
// //   const router = useRouter()

// //   const [form, setForm] = useState({
// //     debtorCode: '',
// //     debtorName: '',
// //     glAccount: '',
// //     accountName: '',
// //     amount: '',
// //     requestNo: '',
// //     requestLine: ''
// //   })

// //   useEffect(() => {
// //     // 👉 API se data fetch kar lena
// //     setForm({
// //       debtorCode: 'D001',
// //       debtorName: 'ABC Pvt Ltd',
// //       glAccount: '1001',
// //       accountName: 'Cash Account',
// //       amount: '5000',
// //       requestNo: 'REQ-001',
// //       requestLine: '1'
// //     })
// //   }, [id])

// //   const handleChange = (e: any) => {
// //     setForm({ ...form, [e.target.name]: e.target.value })
// //   }

// //   const handleSave = () => {
// //     console.log('Updated Data:', form)
// //     router.push(`/payment-authorization/view/${id}`)
// //   }

// //   return (
// //     <Box sx={{ p: 3 }}>
// //       <Paper sx={{ p: 3, borderRadius: 2 }}>
// //         <Typography variant="h6" mb={3}>
// //           Edit Payment Authorization
// //         </Typography>

// //         <Box sx={{ display: 'grid', gap: 2 }}>
// //           <TextField name="debtorCode" label="Debtor Code" value={form.debtorCode} onChange={handleChange} />
// //           <TextField name="debtorName" label="Debtor Name" value={form.debtorName} onChange={handleChange} />
// //           <TextField name="glAccount" label="GL Account" value={form.glAccount} onChange={handleChange} />
// //           <TextField name="accountName" label="Account Name" value={form.accountName} onChange={handleChange} />
// //           <TextField name="amount" label="Amount" value={form.amount} onChange={handleChange} />
// //           <TextField name="requestNo" label="Request No" value={form.requestNo} onChange={handleChange} />
// //           <TextField name="requestLine" label="Request Line" value={form.requestLine} onChange={handleChange} />
// //         </Box>

// //         <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
// //           <Button variant="outlined" onClick={() => router.back()}>
// //             Cancel
// //           </Button>
// //           <Button variant="contained" onClick={handleSave}>
// //             Save
// //           </Button>
// //         </Box>
// //       </Paper>
// //     </Box>
// //   )
// // }


// 'use client'

// import { useParams, useRouter } from 'next/navigation'
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   MenuItem,
//   CircularProgress
// } from '@mui/material'
// import { useState, useEffect } from 'react'

// interface LineData {
//   debtor_code: string
//   debtor_name: string
//   gl_account: string
//   account_name: string
//   amount: number
//   request_no: string
//   request_line: string
// }

// export default function EditPaymentPage() {
//   const { id } = useParams()
//   const router = useRouter()

//   const [bank, setBank] = useState('')
//   const [status, setStatus] = useState('Draft')
//   const [lines, setLines] = useState<LineData[]>([])
//   const [loading, setLoading] = useState(false)
//   const [saving, setSaving] = useState(false)

//   // ===============================
//   // FETCH PAYMENT BY ID
//   // ===============================
//   useEffect(() => {
//     const fetchPayment = async () => {
//       try {
//         setLoading(true)

//         const res = await fetch(
//           `http://localhost:8000/api/v1/payment/payment-authorization/${id}/`
//         )

//         const data = await res.json()

//         if (res.ok) {
//           setBank(data.bank_in_sage)
//           setStatus(data.status)
//           setLines(data.lines || [])
//         } else {
//           console.error(data)
//         }
//       } catch (error) {
//         console.error('Error fetching payment:', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (id) fetchPayment()
//   }, [id])

//   // ===============================
//   // HANDLE LINE CHANGE
//   // ===============================
//   const handleLineChange = (
//     index: number,
//     field: keyof LineData,
//     value: any
//   ) => {
//     const updated = [...lines]
//     updated[index][field] = value
//     setLines(updated)
//   }

//   // ===============================
//   // UPDATE API CALL
//   // ===============================
//   const handleSave = async () => {
//     setSaving(true)

//     const payload = {
//       bank_in_sage: bank,
//       status: status,
//       lines: lines
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:8000/api/v1/payment/payment-authorization/${id}/`,
//         {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(payload)
//         }
//       )

//       const data = await response.json()

//       if (response.ok) {
//         alert('Updated Successfully ✅')
//         router.push('/payment-authorization')
//       } else {
//         console.error(data)
//         alert('Update failed')
//       }
//     } catch (error) {
//       console.error(error)
//       alert('Server error')
//     } finally {
//       setSaving(false)
//     }
//   }

//   if (loading) {
//     return (
//       <Box sx={{ p: 5, textAlign: 'center' }}>
//         <CircularProgress />
//       </Box>
//     )
//   }

//   return (
//     <Box sx={{ p: 3 }}>
//       <Paper sx={{ p: 3, borderRadius: 2 }}>
//         <Typography variant="h6" mb={3}>
//           Edit Payment Authorization
//         </Typography>

//         {/* Bank */}
//         <TextField
//           fullWidth
//           size="small"
//           label="Bank in Sage"
//           value={bank}
//           onChange={(e) => setBank(e.target.value)}
//           sx={{ mb: 2 }}
//         />

//         {/* Status */}
//         <TextField
//           select
//           fullWidth
//           size="small"
//           label="Status"
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//           sx={{ mb: 3 }}
//         >
//           <MenuItem value="Draft">Draft</MenuItem>
//           <MenuItem value="Processed">Processed</MenuItem>
//         </TextField>

//         {/* Lines Table */}
//         {lines.map((line, index) => (
//           <Box
//             key={index}
//             sx={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(3, 1fr)',
//               gap: 2,
//               mb: 2,
//               p: 2,
//               border: '1px solid #eee',
//               borderRadius: 1
//             }}
//           >
//             <TextField
//               label="Debtor Code"
//               value={line.debtor_code}
//               onChange={(e) =>
//                 handleLineChange(index, 'debtor_code', e.target.value)
//               }
//             />

//             <TextField
//               label="Debtor Name"
//               value={line.debtor_name}
//               onChange={(e) =>
//                 handleLineChange(index, 'debtor_name', e.target.value)
//               }
//             />

//             <TextField
//               label="GL Account"
//               value={line.gl_account}
//               onChange={(e) =>
//                 handleLineChange(index, 'gl_account', e.target.value)
//               }
//             />

//             <TextField
//               label="Account Name"
//               value={line.account_name}
//               onChange={(e) =>
//                 handleLineChange(index, 'account_name', e.target.value)
//               }
//             />

//             <TextField
//               label="Amount"
//               type="number"
//               value={line.amount}
//               onChange={(e) =>
//                 handleLineChange(index, 'amount', Number(e.target.value))
//               }
//             />

//             <TextField
//               label="Request No"
//               value={line.request_no}
//               onChange={(e) =>
//                 handleLineChange(index, 'request_no', e.target.value)
//               }
//             />

//             <TextField
//               label="Request Line"
//               value={line.request_line}
//               onChange={(e) =>
//                 handleLineChange(index, 'request_line', e.target.value)
//               }
//             />
//           </Box>
//         ))}

//         <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
//           <Button variant="outlined" onClick={() => router.back()}>
//             Cancel
//           </Button>

//           <Button
//             variant="contained"
//             onClick={handleSave}
//             disabled={saving}
//           >
//             {saving ? 'Updating...' : 'Save'}
//           </Button>
//         </Box>
//       </Paper>
//     </Box>
//   )
// }


'use client'

import React, { useState, useEffect } from 'react'
import {
  Box, Paper, Typography, TextField, MenuItem, Button,
  Table, TableBody, TableCell, TableHead, TableRow,
  CircularProgress, Breadcrumbs, Alert, Snackbar, IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Link from '@mui/material/Link'
import Sidebar from '../main/Sidebar'
import Header from '../main/Header'
import { useParams, useRouter } from 'next/navigation'
import { getLoggedInUser, getPaymentPermissions } from './Paymentpermissions'

const API_BASE_URL = 'http://localhost:8000/api/v1'

const STATUS_COLORS: Record<string, string> = {
  Draft:           '#F97316',
  Submitted:       '#1565C0',
  FinanceApproved: '#2E7D32',
  Completed:       '#6A1B9A',
  Cancelled:       '#C62828',
}

interface LineData {
  id?:          number
  imprest_id?:  string
  debtor_code:  string
  debtor_name:  string
  gl_account:   string
  account_name: string
  amount:       number
  request_no:   string
  request_line: string
}

export default function EditPaymentPage() {
  const { id }   = useParams()
  const router   = useRouter()

  const [selectedMenu, setSelectedMenu] = useState('Payment Authorization')
  const [bank,         setBank]         = useState('')
  const [status,       setStatus]       = useState('Draft')
  const [lines,        setLines]        = useState<LineData[]>([])
  const [accounts,     setAccounts]     = useState<any[]>([])
  const [loading,      setLoading]      = useState(true)
  const [saving,       setSaving]       = useState(false)
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' | 'warning' }>({
    open: false, message: '', severity: 'success',
  })

  const user  = getLoggedInUser()
  const perms = getPaymentPermissions(user)

  // ── Fetch bank accounts ───────────────────────────────────────────────────
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res  = await fetch(`${API_BASE_URL}/account/accounts-list/`)
        const data = await res.json()
        setAccounts(data.filter((item: any) => item.iAccountType === 1))
      } catch (e) {
        console.error('Failed to fetch accounts:', e)
      }
    }
    fetchAccounts()
  }, [])

  // ── Fetch payment ─────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchPayment = async () => {
      try {
        setLoading(true)
        const res  = await fetch(`${API_BASE_URL}/payment/payment-authorization/${id}/`)
        const data = await res.json()
        if (res.ok) {
          setBank(data.bank_in_sage || '')
          setStatus(data.status || 'Draft')
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

  const handleLineChange = (index: number, field: keyof LineData, value: any) => {
    const updated = [...lines]
    updated[index] = { ...updated[index], [field]: value }
    setLines(updated)
  }

  const handleDeleteLine = (index: number) => {
    setLines(lines.filter((_, i) => i !== index))
  }

  // ── Only Draft can be edited ──────────────────────────────────────────────
  const isEditable = status === 'Draft'

  const handleSave = async () => {
    if (!bank) {
      setSnackbar({ open: true, message: 'Please select a bank.', severity: 'error' })
      return
    }
    setSaving(true)
    try {
      const response = await fetch(
        `${API_BASE_URL}/payment/payment-authorization/${id}/`,
        {
          method:  'PUT',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({ bank_in_sage: bank, status, lines }),
        }
      )
      const data = await response.json()
      if (response.ok) {
        setSnackbar({ open: true, message: 'Updated successfully!', severity: 'success' })
        setTimeout(() => router.push('/payament/payment_authorization'), 1500)
      } else {
        setSnackbar({ open: true, message: 'Update failed: ' + JSON.stringify(data), severity: 'error' })
      }
    } catch (error) {
      setSnackbar({ open: true, message: 'Server error. Please try again.', severity: 'error' })
    } finally {
      setSaving(false)
    }
  }

  const totalAmount = lines.reduce((s, l) => s + Number(l.amount || 0), 0)

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA', overflow: 'hidden' }}>
      <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header />

        <Box sx={{ flexGrow: 1, overflow: 'auto', p: 3 }}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
            <Link
              underline="hover"
              onClick={() => router.push('/payament/payment_authorization')}
              sx={{ fontSize: '0.875rem', color: '#6B7280', cursor: 'pointer' }}
            >
              Payment Authorization
            </Link>
            <Typography sx={{ fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}>
              Edit Payment
            </Typography>
          </Breadcrumbs>

          <Paper sx={{ p: 3, borderRadius: 2 }}>

            {/* ── Page Header ── */}
            <Box sx={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
              p: 2.5, borderRadius: 1, mx: -3, mt: -3, mb: 3,
            }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                  Edit Payment Authorization
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  Only Draft payments can be edited
                </Typography>
              </Box>
              <Box
                sx={{
                  px: 2, py: 0.5, borderRadius: 2,
                  bgcolor: 'rgba(255,255,255,0.15)',
                  color: 'white', fontSize: '0.8rem', fontWeight: 600,
                }}
              >
                {status}
              </Box>
            </Box>

            {/* Read-only notice for non-Draft */}
            {!isEditable && (
              <Alert severity="info" sx={{ mb: 3 }}>
                This payment is <strong>{status}</strong> and cannot be edited. Only Draft payments can be modified.
              </Alert>
            )}

            {/* Bank selector */}
            <TextField
              select fullWidth size="small" label="Bank in Sage *"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              disabled={!isEditable}
              sx={{ mb: 3, maxWidth: 400, bgcolor: !isEditable ? '#F9FAFB' : undefined }}
            >
              {accounts.map((a) => (
                <MenuItem key={a.AccountLink} value={a.AccountLink}>
                  {a.Description}
                </MenuItem>
              ))}
            </TextField>

            {/* Lines table */}
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
              Payment Lines
            </Typography>

            <Box sx={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 2, mb: 3 }}>
              <Table size="small" sx={{ minWidth: 900 }}>
                <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                  <TableRow>
                    {['Sl', 'Debtor Code', 'Debtor Name', 'GL Account', 'Account Name', 'Amount', 'Request No', 'Request Line', ...(isEditable ? ['Action'] : [])].map((h) => (
                      <TableCell key={h} sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{h}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {lines.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} align="center" sx={{ py: 4, color: '#aaa' }}>
                        No payment lines found.
                      </TableCell>
                    </TableRow>
                  ) : lines.map((line, index) => (
                    <TableRow key={index} hover>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <TextField
                          size="small" value={line.debtor_code}
                          disabled={!isEditable}
                          onChange={(e) => handleLineChange(index, 'debtor_code', e.target.value)}
                          sx={{ minWidth: 120 }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          size="small" value={line.debtor_name}
                          disabled={!isEditable}
                          onChange={(e) => handleLineChange(index, 'debtor_name', e.target.value)}
                          sx={{ minWidth: 150 }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          size="small" value={line.gl_account}
                          disabled={!isEditable}
                          onChange={(e) => handleLineChange(index, 'gl_account', e.target.value)}
                          sx={{ minWidth: 130 }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          size="small" value={line.account_name}
                          disabled={!isEditable}
                          onChange={(e) => handleLineChange(index, 'account_name', e.target.value)}
                          sx={{ minWidth: 150 }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          size="small" type="number" value={line.amount}
                          disabled={!isEditable}
                          onChange={(e) => handleLineChange(index, 'amount', Number(e.target.value))}
                          sx={{ minWidth: 110 }}
                        />
                      </TableCell>
                      <TableCell sx={{ fontSize: '0.82rem', color: '#555' }}>{line.request_no || '—'}</TableCell>
                      <TableCell sx={{ fontSize: '0.82rem', color: '#555' }}>{line.request_line || '—'}</TableCell>
                      {isEditable && (
                        <TableCell>
                          <IconButton color="error" size="small" onClick={() => handleDeleteLine(index)}>
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>

            {/* Total */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Total:&nbsp;
                {totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </Typography>
            </Box>

            {/* Action buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button variant="outlined" onClick={() => router.back()} sx={{ textTransform: 'none' }}>
                Cancel
              </Button>
              {isEditable && (
                <Button
                  variant="contained" onClick={handleSave} disabled={saving}
                  sx={{ bgcolor: '#F97316', '&:hover': { bgcolor: '#e06612' }, textTransform: 'none' }}
                >
                  {saving ? <CircularProgress size={20} sx={{ color: 'white' }} /> : 'Save Changes'}
                </Button>
              )}
            </Box>
          </Paper>
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((p) => ({ ...p, open: false }))}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}