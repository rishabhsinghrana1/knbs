// // // // // 'use client'

// // // // // import { useParams } from 'next/navigation'
// // // // // import {
// // // // //   Box,
// // // // //   Paper,
// // // // //   Typography,
// // // // //   Table,
// // // // //   TableBody,
// // // // //   TableCell,
// // // // //   TableHead,
// // // // //   TableRow,
// // // // //   Button
// // // // // } from '@mui/material'
// // // // // import Sidebar from '../main/Sidebar'
// // // // // import { useState, useEffect } from 'react'

// // // // // export default function ViewPaymentPage() {
// // // // //   const { id } = useParams()
// // // // //   const [data, setData] = useState<any>(null)

// // // // //   useEffect(() => {
// // // // //     // 👉 Yaha API call laga dena
// // // // //     const mockData = {
// // // // //       debtorCode: 'D001',
// // // // //       debtorName: 'ABC Pvt Ltd',
// // // // //       glAccount: '1001',
// // // // //       accountName: 'Cash Account',
// // // // //       amount: 5000,
// // // // //       requestNo: 'REQ-001',
// // // // //       requestLine: '1'
// // // // //     }

// // // // //     setData(mockData)
// // // // //   }, [id])

// // // // //   if (!data) return null

// // // // // return (
// // // // //   <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>

// // // // //     {/* Sidebar */}
// // // // //     <Sidebar />

// // // // //     {/* Main Content Wrapper */}
// // // // //     <Box
// // // // //       sx={{
// // // // //         flexGrow: 1,
// // // // //         display: 'flex',
// // // // //         flexDirection: 'column',
// // // // //         overflow: 'hidden'
// // // // //       }}
// // // // //     >

// // // // //       {/* Page Body */}
// // // // //       <Box sx={{ p: 3, overflow: 'auto' }}>
// // // // //         <Paper sx={{ p: 3, borderRadius: 2 }}>

// // // // //           <Typography variant="h6" mb={2}>
// // // // //             View Payment Authorization
// // // // //           </Typography>

// // // // //           <Table size="small">
// // // // //             <TableBody>
// // // // //               <TableRow>
// // // // //                 <TableCell>Debtor Code</TableCell>
// // // // //                 <TableCell>{data.debtorCode}</TableCell>
// // // // //               </TableRow>

// // // // //               <TableRow>
// // // // //                 <TableCell>Debtor Name</TableCell>
// // // // //                 <TableCell>{data.debtorName}</TableCell>
// // // // //               </TableRow>

// // // // //               <TableRow>
// // // // //                 <TableCell>GL Account</TableCell>
// // // // //                 <TableCell>{data.glAccount}</TableCell>
// // // // //               </TableRow>

// // // // //               <TableRow>
// // // // //                 <TableCell>Account Name</TableCell>
// // // // //                 <TableCell>{data.accountName}</TableCell>
// // // // //               </TableRow>

// // // // //               <TableRow>
// // // // //                 <TableCell>Amount</TableCell>
// // // // //                 <TableCell>{data.amount}</TableCell>
// // // // //               </TableRow>

// // // // //               <TableRow>
// // // // //                 <TableCell>Request No</TableCell>
// // // // //                 <TableCell>{data.requestNo}</TableCell>
// // // // //               </TableRow>
// // // // //             </TableBody>
// // // // //           </Table>

// // // // //           <Button
// // // // //             variant="contained"
// // // // //             sx={{ mt: 3, bgcolor: '#F97316' }}
// // // // //             href={`/payment-authorization/edit/${id}`}
// // // // //           >
// // // // //             Edit
// // // // //           </Button>

// // // // //         </Paper>
// // // // //       </Box>
// // // // //     </Box>
// // // // //   </Box>
// // // // // )

// // // // // }

// // // // 'use client'

// // // // import { useParams, useRouter } from 'next/navigation'
// // // // import {
// // // //     Box,
// // // //     Paper,
// // // //     Typography,
// // // //     Table,
// // // //     TableBody,
// // // //     TableCell,
// // // //     TableHead,
// // // //     TableRow,
// // // //     Button,
// // // //     CircularProgress,
// // // //     Chip
// // // // } from '@mui/material'
// // // // import Sidebar from '../main/Sidebar'
// // // // import { useState, useEffect } from 'react'

// // // // export default function ViewPaymentPage() {
// // // //     const { id } = useParams()
// // // //     const router = useRouter()

// // // //     const [data, setData] = useState<any>(null)
// // // //     const [loading, setLoading] = useState(false)

// // // //     // ===============================
// // // //     // FETCH PAYMENT BY ID
// // // //     // ===============================
// // // //     useEffect(() => {
// // // //         const fetchPayment = async () => {
// // // //             try {
// // // //                 setLoading(true)

// // // //                 const res = await fetch(
// // // //                     `http://localhost:8000/api/v1/payment/payment-authorization/${id}/`
// // // //                 )

// // // //                 const result = await res.json()

// // // //                 if (res.ok) {
// // // //                     setData(result)
// // // //                 } else {
// // // //                     console.error(result)
// // // //                 }
// // // //             } catch (error) {
// // // //                 console.error('Error fetching payment:', error)
// // // //             } finally {
// // // //                 setLoading(false)
// // // //             }
// // // //         }

// // // //         if (id) fetchPayment()
// // // //     }, [id])

// // // //     if (loading) {
// // // //         return (
// // // //             <Box sx={{ p: 5, textAlign: 'center' }}>
// // // //                 <CircularProgress />
// // // //             </Box>
// // // //         )
// // // //     }

// // // //     if (!data) return null

// // // //     return (
// // // //         <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
// // // //             <Sidebar />

// // // //             <Box sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>

// // // //                 <Paper sx={{ p: 3, borderRadius: 2 }}>

// // // //                     <Typography variant="h6" mb={3}>
// // // //                         View Payment Authorization
// // // //                     </Typography>

// // // //                     {/* ================= HEADER INFO ================= */}
// // // //                     <Table size="small" sx={{ mb: 3 }}>
// // // //                         <TableBody>
// // // //                             <TableRow>
// // // //                                 <TableCell><b>Payment No</b></TableCell>
// // // //                                 <TableCell>{data.payment_number}</TableCell>
// // // //                             </TableRow>

// // // //                             <TableRow>
// // // //                                 <TableCell><b>Bank</b></TableCell>
// // // //                                 <TableCell>
// // // //                                     {data.bank_description || data.bank_in_sage}
// // // //                                 </TableCell>
// // // //                             </TableRow>

// // // //                             <TableRow>
// // // //                                 <TableCell><b>Status</b></TableCell>
// // // //                                 <TableCell>
// // // //                                     <Chip
// // // //                                         label={data.status}
// // // //                                         size="small"
// // // //                                         sx={{
// // // //                                             bgcolor:
// // // //                                                 data.status === 'Draft'
// // // //                                                     ? '#FFF3E0'
// // // //                                                     : '#E8F5E9',
// // // //                                             color:
// // // //                                                 data.status === 'Draft'
// // // //                                                     ? '#F97316'
// // // //                                                     : '#4CAF50'
// // // //                                         }}
// // // //                                     />
// // // //                                 </TableCell>
// // // //                             </TableRow>

// // // //                             <TableRow>
// // // //                                 <TableCell><b>Created Date</b></TableCell>
// // // //                                 <TableCell>
// // // //                                     {new Date(data.created_at).toLocaleDateString()}
// // // //                                 </TableCell>
// // // //                             </TableRow>
// // // //                         </TableBody>
// // // //                     </Table>

// // // //                     {/* ================= LINES TABLE ================= */}
// // // //                     <Typography variant="subtitle1" mb={1}>
// // // //                         Payment Lines
// // // //                     </Typography>

// // // //                     <Table size="small">
// // // //                         <TableHead>
// // // //                             <TableRow>
// // // //                                 <TableCell>Sl. No.</TableCell>
// // // //                                 <TableCell>Debtor Code</TableCell>
// // // //                                 <TableCell>Debtor Name</TableCell>
// // // //                                 <TableCell>GL Account</TableCell>
// // // //                                 <TableCell>Account Name</TableCell>
// // // //                                 <TableCell>Amount</TableCell>
// // // //                                 <TableCell>Request No</TableCell>
// // // //                                 <TableCell>Request Line</TableCell>
// // // //                             </TableRow>
// // // //                         </TableHead>

// // // //                         <TableBody>
// // // //                             {data.lines?.map((line: any, index: number) => (
// // // //                                 <TableRow key={index}>
// // // //                                     <TableCell>{index + 1}</TableCell>
// // // //                                     <TableCell>{line.debtor_code}</TableCell>
// // // //                                     <TableCell>{line.debtor_name}</TableCell>
// // // //                                     <TableCell>{line.gl_account}</TableCell>
// // // //                                     <TableCell>{line.account_name}</TableCell>
// // // //                                     <TableCell>{line.amount}</TableCell>
// // // //                                     <TableCell>{line.request_no}</TableCell>
// // // //                                     <TableCell>{line.request_line}</TableCell>
// // // //                                 </TableRow>
// // // //                             ))}
// // // //                         </TableBody>
// // // //                     </Table>

// // // //                     {/* ================= ACTION BUTTON ================= */}
// // // //                     {/* <Box sx={{ mt: 3 }}>
// // // //                         {data.status === 'Draft' && (
// // // //                             <Button
// // // //                                 variant="contained"
// // // //                                 sx={{ bgcolor: '#F97316' }}
// // // //                                 onClick={() =>
// // // //                                     router.push(`/payment-authorization/edit/${id}`)
// // // //                                 }
// // // //                             >
// // // //                                 Edit
// // // //                             </Button>
// // // //                         )}
// // // //                     </Box> */}
// // // //                     <Box sx={{ mt: 3 }}>
// // // //                         <Button variant="outlined" onClick={() => router.back()}>
// // // //                             Back
// // // //                         </Button>
// // // //                     </Box>
// // // //                 </Paper>
// // // //             </Box>
// // // //         </Box>
// // // //     )
// // // // }

// // // 'use client'

// // // import { useParams, useRouter } from 'next/navigation'
// // // import {
// // //   Box, Paper, Typography, Table, TableBody, TableCell, TableHead,
// // //   TableRow, Button, CircularProgress, Chip, Breadcrumbs, Link, Dialog,
// // //   DialogTitle, DialogContent, DialogContentText, DialogActions,
// // // } from '@mui/material'
// // // import NavigateNextIcon from '@mui/icons-material/NavigateNext'
// // // import Sidebar from '../main/Sidebar'
// // // import { useState, useEffect } from 'react'

// // // const statusStyles: Record<string, { bg: string; color: string }> = {
// // //   Draft:           { bg: '#FFF3E0', color: '#F97316' },
// // //   Submitted:       { bg: '#E3F2FD', color: '#1976D2' },
// // //   FinanceApproved: { bg: '#E8F5E9', color: '#2E7D32' },
// // //   Completed:       { bg: '#F3E5F5', color: '#7B1FA2' },
// // //   Cancelled:       { bg: '#FFEBEE', color: '#C62828' },
// // // }

// // // export default function ViewPaymentPage() {
// // //   const { id } = useParams()
// // //   const router  = useRouter()

// // //   const [data,         setData]         = useState<any>(null)
// // //   const [loading,      setLoading]      = useState(false)
// // //   const [actionLoad,   setActionLoad]   = useState(false)
// // //   const [currentUser,  setCurrentUser]  = useState<any>(null)
// // //   const [confirmOpen,  setConfirmOpen]  = useState(false)
// // //   const [confirmType,  setConfirmType]  = useState<'submit' | 'approve' | 'process' | 'cancel'>('submit')

// // //   // ── User ────────────────────────────────────────────────────────────────
// // //   useEffect(() => {
// // //     try {
// // //       const stored = localStorage.getItem('user')
// // //       if (stored) setCurrentUser(JSON.parse(stored))
// // //     } catch (e) { console.error(e) }
// // //   }, [])

// // //   // ── Fetch Payment ────────────────────────────────────────────────────────
// // //   useEffect(() => {
// // //     if (!id) return
// // //     const fetch_ = async () => {
// // //       setLoading(true)
// // //       try {
// // //         const res    = await fetch(`http://localhost:8000/api/v1/payment/payment-authorization/${id}/`)
// // //         const result = await res.json()
// // //         if (res.ok) setData(result)
// // //         else console.error(result)
// // //       } catch (e) { console.error(e) }
// // //       finally { setLoading(false) }
// // //     }
// // //     fetch_()
// // //   }, [id])

// // //   // ── Role Checks ─────────────────────────────────────────────────────────
// // //   const roleName    = currentUser?.role_details?.role_name || ''
// // //   const isFinMgr    = roleName === 'Finance Manager'
// // //   const isFinance   = roleName === 'Finance'
// // //   const isAdmin     = roleName === 'Admin'
// // //   const isDirector  = roleName === 'Director'
// // //   const canProcess  = isFinMgr || isAdmin || isFinance || isDirector

// // //   // ── What buttons to show based on status + role ─────────────────────────
// // //   // Draft     → Submit (Finance / Finance Manager / Admin / Director)
// // //   // Submitted → Approve (Finance Manager)
// // //   // FinanceApproved → Process (Finance Manager / Finance / Admin / Director)

// // //   const showSubmit  = data?.status === 'Draft'           && canProcess
// // //   const showApprove = data?.status === 'Submitted'       && isFinMgr
// // //   const showProcess = data?.status === 'FinanceApproved' && canProcess
// // //   const showCancel  = (data?.status === 'Draft' || data?.status === 'Submitted') && (isAdmin || isFinMgr || isDirector)

// // //   // ── Action Handler ───────────────────────────────────────────────────────
// // //   const doAction = async () => {
// // //     setConfirmOpen(false)
// // //     setActionLoad(true)

// // //     const statusMap: Record<string, string> = {
// // //       submit:  'Submitted',
// // //       approve: 'FinanceApproved',
// // //       process: 'Completed',
// // //       cancel:  'Cancelled',
// // //     }

// // //     try {
// // //       const res = await fetch(
// // //         `http://localhost:8000/api/v1/payment/payment-authorization/${id}/`,
// // //         {
// // //           method: 'PATCH',
// // //           headers: { 'Content-Type': 'application/json' },
// // //           body: JSON.stringify({ status: statusMap[confirmType] }),
// // //         }
// // //       )
// // //       if (res.ok) {
// // //         const updated = await res.json()
// // //         setData(updated)
// // //         if (confirmType === 'process') {
// // //           alert('Payment Processed ✅ Bank file generated.')
// // //         }
// // //       } else {
// // //         alert('Action failed')
// // //       }
// // //     } catch (e) {
// // //       console.error(e)
// // //       alert('Server error')
// // //     } finally {
// // //       setActionLoad(false)
// // //     }
// // //   }

// // //   const triggerAction = (type: typeof confirmType) => {
// // //     setConfirmType(type)
// // //     setConfirmOpen(true)
// // //   }

// // //   const confirmMessages: Record<string, string> = {
// // //     submit:  'Payment submit ho jayegi aur Finance Manager ke paas jayegi. Confirm?',
// // //     approve: 'Payment approve ho jayegi aur FinanceApproved status mein aa jayegi. Confirm?',
// // //     process: 'Bank file generate hogi aur Sage mein cashbook posting hogi. Confirm?',
// // //     cancel:  'Payment cancel ho jayegi. Yeh action undo nahi hoga. Confirm?',
// // //   }

// // //   // ── Loading / Empty ──────────────────────────────────────────────────────
// // //   if (loading) return <Box sx={{ p: 5, textAlign: 'center' }}><CircularProgress /></Box>
// // //   if (!data)   return null

// // //   return (
// // //     <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
// // //       <Sidebar selectedMenu="Payment Authorization" onMenuSelect={() => {}} />

// // //       <Box sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>

// // //         <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
// // //           <Link underline="hover" href="/payament/payment_authorization" sx={{ fontSize: '0.875rem', color: '#6B7280' }}>
// // //             Payment Authorization
// // //           </Link>
// // //           <Typography sx={{ fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}>
// // //             View Payment
// // //           </Typography>
// // //         </Breadcrumbs>

// // //         <Paper sx={{ p: 3, borderRadius: 2 }}>

// // //           {/* ── Header Info ── */}
// // //           <Box sx={{
// // //             background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
// // //             p: 2.5, borderRadius: 1, mx: -3, mt: -3, mb: 3,
// // //           }}>
// // //             <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>View Payment Authorization</Typography>
// // //             <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
// // //               {data.payment_number}
// // //             </Typography>
// // //           </Box>

// // //           <Table size="small" sx={{ mb: 3, maxWidth: 500 }}>
// // //             <TableBody>
// // //               <TableRow>
// // //                 <TableCell sx={{ fontWeight: 600, color: '#555', border: 0 }}>Payment No</TableCell>
// // //                 <TableCell sx={{ border: 0 }}>{data.payment_number}</TableCell>
// // //               </TableRow>
// // //               <TableRow>
// // //                 <TableCell sx={{ fontWeight: 600, color: '#555', border: 0 }}>Bank</TableCell>
// // //                 <TableCell sx={{ border: 0 }}>{data.bank_description || data.bank_in_sage}</TableCell>
// // //               </TableRow>
// // //               <TableRow>
// // //                 <TableCell sx={{ fontWeight: 600, color: '#555', border: 0 }}>Status</TableCell>
// // //                 <TableCell sx={{ border: 0 }}>
// // //                   <Chip label={data.status} size="small" sx={{
// // //                     bgcolor: statusStyles[data.status]?.bg || '#F5F5F5',
// // //                     color:   statusStyles[data.status]?.color || '#333',
// // //                     fontWeight: 500,
// // //                   }} />
// // //                 </TableCell>
// // //               </TableRow>
// // //               <TableRow>
// // //                 <TableCell sx={{ fontWeight: 600, color: '#555', border: 0 }}>Created Date</TableCell>
// // //                 <TableCell sx={{ border: 0 }}>
// // //                   {new Date(data.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
// // //                 </TableCell>
// // //               </TableRow>
// // //             </TableBody>
// // //           </Table>

// // //           {/* ── Lines ── */}
// // //           <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Payment Lines</Typography>
// // //           <Table size="small">
// // //             <TableHead sx={{ bgcolor: '#F9FAFB' }}>
// // //               <TableRow>
// // //                 <TableCell sx={{ fontWeight: 600 }}>Sl.</TableCell>
// // //                 <TableCell sx={{ fontWeight: 600 }}>Debtor Code</TableCell>
// // //                 <TableCell sx={{ fontWeight: 600 }}>Debtor Name</TableCell>
// // //                 <TableCell sx={{ fontWeight: 600 }}>GL Account</TableCell>
// // //                 <TableCell sx={{ fontWeight: 600 }}>Account Name</TableCell>
// // //                 <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
// // //                 <TableCell sx={{ fontWeight: 600 }}>Request No</TableCell>
// // //                 <TableCell sx={{ fontWeight: 600 }}>Request Line</TableCell>
// // //               </TableRow>
// // //             </TableHead>
// // //             <TableBody>
// // //               {data.lines?.map((line: any, i: number) => (
// // //                 <TableRow key={i} hover>
// // //                   <TableCell>{i + 1}</TableCell>
// // //                   <TableCell>{line.debtor_code}</TableCell>
// // //                   <TableCell>{line.debtor_name}</TableCell>
// // //                   <TableCell>{line.gl_account}</TableCell>
// // //                   <TableCell>{line.account_name}</TableCell>
// // //                   <TableCell>{line.amount}</TableCell>
// // //                   <TableCell>{line.request_no}</TableCell>
// // //                   <TableCell>{line.request_line}</TableCell>
// // //                 </TableRow>
// // //               ))}
// // //             </TableBody>
// // //           </Table>

// // //           {/* ── Action Buttons ── */}
// // //           <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
// // //             <Button variant="outlined" onClick={() => router.back()}>Back</Button>

// // //             {/* ✅ Draft → Submit */}
// // //             {showSubmit && (
// // //               <Button variant="contained" sx={{ bgcolor: '#1976D2', '&:hover': { bgcolor: '#1565C0' } }}
// // //                 onClick={() => triggerAction('submit')} disabled={actionLoad}>
// // //                 Submit
// // //               </Button>
// // //             )}

// // //             {/* ✅ Submitted → Finance Manager Approve */}
// // //             {showApprove && (
// // //               <Button variant="contained" sx={{ bgcolor: '#2E7D32', '&:hover': { bgcolor: '#1B5E20' } }}
// // //                 onClick={() => triggerAction('approve')} disabled={actionLoad}>
// // //                 Approve
// // //               </Button>
// // //             )}

// // //             {/* ✅ FinanceApproved → Process (bank file + sage posting) */}
// // //             {showProcess && (
// // //               <Button variant="contained" sx={{ bgcolor: '#7B1FA2', '&:hover': { bgcolor: '#6A1B9A' } }}
// // //                 onClick={() => triggerAction('process')} disabled={actionLoad}>
// // //                 {actionLoad ? 'Processing...' : 'Process'}
// // //               </Button>
// // //             )}

// // //             {/* ✅ Cancel */}
// // //             {showCancel && (
// // //               <Button variant="outlined" color="error"
// // //                 onClick={() => triggerAction('cancel')} disabled={actionLoad}>
// // //                 Cancel Payment
// // //               </Button>
// // //             )}
// // //           </Box>
// // //         </Paper>
// // //       </Box>

// // //       {/* Confirm Dialog */}
// // //       <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
// // //         <DialogTitle>
// // //           {confirmType === 'submit'  ? 'Submit Payment?'    :
// // //            confirmType === 'approve' ? 'Approve Payment?'   :
// // //            confirmType === 'process' ? 'Process Payment?'   : 'Cancel Payment?'}
// // //         </DialogTitle>
// // //         <DialogContent>
// // //           <DialogContentText>{confirmMessages[confirmType]}</DialogContentText>
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={() => setConfirmOpen(false)}>No</Button>
// // //           <Button onClick={doAction} variant="contained"
// // //             color={confirmType === 'cancel' ? 'error' : 'primary'}>
// // //             Yes, Confirm
// // //           </Button>
// // //         </DialogActions>
// // //       </Dialog>
// // //     </Box>
// // //   )
// // // }

// // 'use client'

// // import { useParams, useRouter } from 'next/navigation'
// // import {
// //   Box, Paper, Typography, Table, TableBody, TableCell,
// //   TableHead, TableRow, Button, CircularProgress, Chip, Alert,
// // } from '@mui/material'
// // import Sidebar from '../main/Sidebar'
// // import { useState, useEffect } from 'react'
// // import { getLoggedInUser, getPaymentPermissions } from './Paymentpermissions'

// // const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
// //   Draft:           { bg: '#FFF3E0', color: '#F97316' },
// //   Submitted:       { bg: '#E3F2FD', color: '#1565C0' },
// //   FinanceApproved: { bg: '#E8F5E9', color: '#2E7D32' },
// //   Completed:       { bg: '#F3E5F5', color: '#6A1B9A' },
// //   Cancelled:       { bg: '#FFEBEE', color: '#C62828' },
// // }

// // export default function ViewPaymentPage() {
// //   const { id } = useParams()
// //   const router  = useRouter()

// //   const [data,          setData]          = useState<any>(null)
// //   const [loading,       setLoading]       = useState(false)
// //   const [actionLoading, setActionLoading] = useState(false)
// //   const [errorMsg,      setErrorMsg]      = useState('')
// //   const [successMsg,    setSuccessMsg]    = useState('')

// //   // ── Permissions ──────────────────────────────────────────────────────────
// //   const user  = getLoggedInUser()
// //   const perms = getPaymentPermissions(user)

// //   // ── Fetch ────────────────────────────────────────────────────────────────
// //   const fetchPayment = async () => {
// //     try {
// //       setLoading(true)
// //       const res    = await fetch(`http://localhost:8000/api/v1/payment/payment-authorization/${id}/`)
// //       const result = await res.json()
// //       if (res.ok) setData(result)
// //       else console.error(result)
// //     } catch (e) { console.error(e) }
// //     finally { setLoading(false) }
// //   }

// //   useEffect(() => { if (id) fetchPayment() }, [id])

// //   // ── Status update ────────────────────────────────────────────────────────
// //   const updateStatus = async (newStatus: string) => {
// //     setActionLoading(true)
// //     setErrorMsg('')
// //     try {
// //       const res    = await fetch(
// //         `http://localhost:8000/api/v1/payment/payment-authorization/${id}/`,
// //         {
// //           method:  'PATCH',
// //           headers: { 'Content-Type': 'application/json' },
// //           body:    JSON.stringify({ status: newStatus }),
// //         }
// //       )
// //       const result = await res.json()
// //       if (res.ok) {
// //         setSuccessMsg(`Status update ho gaya: ${newStatus}`)
// //         await fetchPayment()
// //       } else {
// //         setErrorMsg('Update failed: ' + JSON.stringify(result))
// //       }
// //     } catch (e) { setErrorMsg('Server error') }
// //     finally { setActionLoading(false) }
// //   }

// //   // ── Process ──────────────────────────────────────────────────────────────
// //   const handleProcess = async () => {
// //     if (!window.confirm('Process karna chahte ho? Bank file generate hogi aur Sage mein posting hogi.')) return
// //     setActionLoading(true)
// //     setErrorMsg('')
// //     try {
// //       const res    = await fetch(
// //         `http://localhost:8000/api/v1/payment/payment-authorization/${id}/process/`,
// //         { method: 'POST' }
// //       )
// //       const result = await res.json()
// //       if (res.ok) {
// //         setSuccessMsg('Payment processed. Status: Completed.')
// //         await fetchPayment()
// //       } else {
// //         setErrorMsg('Process failed: ' + JSON.stringify(result))
// //       }
// //     } catch (e) { setErrorMsg('Server error') }
// //     finally { setActionLoading(false) }
// //   }

// //   // ── Render action buttons based on role + status ──────────────────────────
// //   const renderButtons = () => {
// //     if (!data) return null
// //     const s = data.status

// //     return (
// //       <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>

// //         {/* Draft → Submit: canSubmit role */}
// //         {s === 'Draft' && perms.canSubmit && (
// //           <Button
// //             variant="contained" disabled={actionLoading}
// //             sx={{ bgcolor: '#1565C0', '&:hover': { bgcolor: '#0d47a1' } }}
// //             onClick={() => { if (window.confirm('Submit karna chahte ho?')) updateStatus('Submitted') }}
// //           >
// //             Submit
// //           </Button>
// //         )}

// //         {/* Submitted → Approve: canApprove role (Finance Manager / Admin / Director) */}
// //         {s === 'Submitted' && perms.canApprove && (
// //           <Button
// //             variant="contained" disabled={actionLoading}
// //             sx={{ bgcolor: '#2E7D32', '&:hover': { bgcolor: '#1b5e20' } }}
// //             onClick={() => { if (window.confirm('Approve karna chahte ho?')) updateStatus('FinanceApproved') }}
// //           >
// //             Approve
// //           </Button>
// //         )}

// //         {/* FinanceApproved → Process: canProcess role */}
// //         {s === 'FinanceApproved' && perms.canProcess && (
// //           <Button
// //             variant="contained" disabled={actionLoading}
// //             sx={{ bgcolor: '#6A1B9A', '&:hover': { bgcolor: '#4a148c' } }}
// //             onClick={handleProcess}
// //           >
// //             Process & Complete
// //           </Button>
// //         )}

// //         {/* Cancel: canCancel role, only Draft or Submitted */}
// //         {(s === 'Draft' || s === 'Submitted') && perms.canCancel && (
// //           <Button
// //             variant="outlined" color="error" disabled={actionLoading}
// //             onClick={() => { if (window.confirm('Cancel karna chahte ho?')) updateStatus('Cancelled') }}
// //           >
// //             Cancel
// //           </Button>
// //         )}

// //         {actionLoading && <CircularProgress size={22} />}
// //       </Box>
// //     )
// //   }

// //   if (loading) return <Box sx={{ p: 5, textAlign: 'center' }}><CircularProgress /></Box>
// //   if (!data)   return null

// //   const chip = STATUS_COLORS[data.status] || { bg: '#F5F5F5', color: '#333' }

// //   return (
// //     <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
// //       <Sidebar selectedMenu="Payment Authorization" onMenuSelect={() => {}} />

// //       <Box sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>
// //         <Paper sx={{ p: 3, borderRadius: 2 }}>

// //           {/* ── Gradient Header ── */}
// //           <Box sx={{
// //             display: 'flex', justifyContent: 'space-between', alignItems: 'center',
// //             background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
// //             p: 2.5, borderRadius: 1, mx: -3, mt: -3, mb: 3,
// //           }}>
// //             <Box>
// //               <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
// //                 View Payment Authorization
// //               </Typography>
// //               <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
// //                 Payment No: {data.payment_number}
// //               </Typography>
// //             </Box>
// //             <Chip
// //               label={data.status}
// //               sx={{ bgcolor: chip.bg, color: chip.color, fontWeight: 600 }}
// //             />
// //           </Box>

// //           {errorMsg   && <Alert severity="error"   sx={{ mb: 2 }} onClose={() => setErrorMsg('')}>{errorMsg}</Alert>}
// //           {successMsg && <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccessMsg('')}>{successMsg}</Alert>}

// //           {/* ── Header Info ── */}
// //           <Table size="small" sx={{ mb: 3, maxWidth: 500 }}>
// //             <TableBody>
// //               {[
// //                 ['Payment No',   data.payment_number],
// //                 ['Bank',         data.bank_description || data.bank_in_sage],
// //                 ['Created Date', new Date(data.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })],
// //                 ['Created By',   data.created_by_name || '—'],
// //               ].map(([label, value]) => (
// //                 <TableRow key={label}>
// //                   <TableCell sx={{ fontWeight: 600, border: 'none', pl: 0, color: '#555', width: 140 }}>{label}</TableCell>
// //                   <TableCell sx={{ border: 'none', fontWeight: 500 }}>{value}</TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>

// //           {/* ── Lines Table ── */}
// //           <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
// //             Payment Lines
// //           </Typography>

// //           <Table size="small" sx={{ mb: 3 }}>
// //             <TableHead sx={{ bgcolor: '#F9FAFB' }}>
// //               <TableRow>
// //                 {['Sl.', 'Debtor Code', 'Debtor Name', 'GL Account', 'Account Name', 'Amount', 'Request No', 'Request Line']
// //                   .map((h) => <TableCell key={h} sx={{ fontWeight: 600 }}>{h}</TableCell>)}
// //               </TableRow>
// //             </TableHead>
// //             <TableBody>
// //               {data.lines?.map((line: any, i: number) => (
// //                 <TableRow key={i} hover>
// //                   <TableCell>{i + 1}</TableCell>
// //                   <TableCell>{line.debtor_code}</TableCell>
// //                   <TableCell>{line.debtor_name}</TableCell>
// //                   <TableCell>{line.gl_account}</TableCell>
// //                   <TableCell>{line.account_name}</TableCell>
// //                   <TableCell sx={{ fontWeight: 600 }}>{Number(line.amount).toLocaleString()}</TableCell>
// //                   <TableCell>{line.request_no}</TableCell>
// //                   <TableCell>{line.request_line}</TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>

// //           {/* ── Total ── */}
// //           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
// //             <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
// //               Total:&nbsp;
// //               {data.lines?.reduce((s: number, l: any) => s + Number(l.amount || 0), 0).toLocaleString()}
// //             </Typography>
// //           </Box>

// //           {/* ── Bottom: Back + Action Buttons ── */}
// //           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// //             <Button variant="outlined" onClick={() => router.back()}>
// //               Back
// //             </Button>

// //             {/* Action buttons — sirf wahi dikhenge jo role ke hisaab se allowed hain */}
// //             {renderButtons()}
// //           </Box>

// //         </Paper>
// //       </Box>
// //     </Box>
// //   )
// // }

// 'use client'

// import { useParams, useRouter } from 'next/navigation'
// import {
//   Box, Paper, Typography, Table, TableBody, TableCell,
//   TableHead, TableRow, Button, CircularProgress, Chip, Alert,
// } from '@mui/material'
// import Sidebar from '../main/Sidebar'
// import { useState, useEffect } from 'react'
// import { getLoggedInUser, getPaymentPermissions } from './Paymentpermissions'

// const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
//   Draft:           { bg: '#FFF3E0', color: '#F97316' },
//   Submitted:       { bg: '#E3F2FD', color: '#1565C0' },
//   FinanceApproved: { bg: '#E8F5E9', color: '#2E7D32' },
//   Completed:       { bg: '#F3E5F5', color: '#6A1B9A' },
//   Cancelled:       { bg: '#FFEBEE', color: '#C62828' },
// }

// export default function ViewPaymentPage() {
//   const { id } = useParams()
//   const router  = useRouter()

//   const [data,          setData]          = useState<any>(null)
//   const [loading,       setLoading]       = useState(false)
//   const [actionLoading, setActionLoading] = useState(false)
//   const [errorMsg,      setErrorMsg]      = useState('')
//   const [successMsg,    setSuccessMsg]    = useState('')

//   // ── Role-based permissions ────────────────────────────────────────────────
//   const user  = getLoggedInUser()
//   const perms = getPaymentPermissions(user)

//   // ── Fetch payment by ID ───────────────────────────────────────────────────
//   const fetchPayment = async () => {
//     try {
//       setLoading(true)
//       const res    = await fetch(`http://localhost:8000/api/v1/payment/payment-authorization/${id}/`)
//       const result = await res.json()
//       if (res.ok) setData(result)
//       else console.error('Fetch error:', result)
//     } catch (e) {
//       console.error('Failed to fetch payment:', e)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => { if (id) fetchPayment() }, [id])

//   // ── Update payment status via PATCH ──────────────────────────────────────
//   const updateStatus = async (newStatus: string) => {
//     setActionLoading(true)
//     setErrorMsg('')
//     try {
//       const res    = await fetch(
//         `http://localhost:8000/api/v1/payment/payment-authorization/${id}/`,
//         {
//           method:  'PATCH',
//           headers: { 'Content-Type': 'application/json' },
//           body:    JSON.stringify({ status: newStatus }),
//         }
//       )
//       const result = await res.json()
//       if (res.ok) {
//         setSuccessMsg(`Status updated to: ${newStatus}`)
//         await fetchPayment()
//       } else {
//         setErrorMsg('Update failed: ' + JSON.stringify(result))
//       }
//     } catch (e) {
//       setErrorMsg('Server error. Please try again.')
//     } finally {
//       setActionLoading(false)
//     }
//   }

//   // ── Process payment — generates bank file + Sage cashbook posting ─────────
//   const handleProcess = async () => {
//     if (!window.confirm('Process this payment? A bank file will be generated and posted to Sage.')) return
//     setActionLoading(true)
//     setErrorMsg('')
//     try {
//       const res    = await fetch(
//         `http://localhost:8000/api/v1/payment/payment-authorization/${id}/process/`,
//         { method: 'POST' }
//       )
//       const result = await res.json()
//       if (res.ok) {
//         setSuccessMsg('Payment processed successfully. Status: Completed.')
//         await fetchPayment()
//       } else {
//         setErrorMsg('Process failed: ' + JSON.stringify(result))
//       }
//     } catch (e) {
//       setErrorMsg('Server error. Please try again.')
//     } finally {
//       setActionLoading(false)
//     }
//   }

//   // ── Render action buttons based on current status + user role ─────────────
//   const renderButtons = () => {
//     if (!data) return null
//     const s = data.status

//     return (
//       <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>

//         {/* Submit — visible only when Draft and user has canSubmit permission */}
//         {s === 'Draft' && perms.canSubmit && (
//           <Button
//             variant="contained" disabled={actionLoading}
//             sx={{ bgcolor: '#1565C0', '&:hover': { bgcolor: '#0d47a1' } }}
//             onClick={() => { if (window.confirm('Submit this payment?')) updateStatus('Submitted') }}
//           >
//             Submit
//           </Button>
//         )}

//         {/* Approve — visible only when Submitted and user has canApprove permission */}
//         {s === 'Submitted' && perms.canApprove && (
//           <Button
//             variant="contained" disabled={actionLoading}
//             sx={{ bgcolor: '#2E7D32', '&:hover': { bgcolor: '#1b5e20' } }}
//             onClick={() => { if (window.confirm('Approve this payment?')) updateStatus('FinanceApproved') }}
//           >
//             Approve
//           </Button>
//         )}

//         {/* Process — visible only when FinanceApproved and user has canProcess permission */}
//         {s === 'FinanceApproved' && perms.canProcess && (
//           <Button
//             variant="contained" disabled={actionLoading}
//             sx={{ bgcolor: '#6A1B9A', '&:hover': { bgcolor: '#4a148c' } }}
//             onClick={handleProcess}
//           >
//             Process & Complete
//           </Button>
//         )}

//         {/* Cancel — visible on Draft or Submitted, only for canCancel roles */}
//         {(s === 'Draft' || s === 'Submitted') && perms.canCancel && (
//           <Button
//             variant="outlined" color="error" disabled={actionLoading}
//             onClick={() => { if (window.confirm('Cancel this payment?')) updateStatus('Cancelled') }}
//           >
//             Cancel
//           </Button>
//         )}

//         {actionLoading && <CircularProgress size={22} />}
//       </Box>
//     )
//   }

//   if (loading) return <Box sx={{ p: 5, textAlign: 'center' }}><CircularProgress /></Box>
//   if (!data)   return null

//   const chip = STATUS_COLORS[data.status] || { bg: '#F5F5F5', color: '#333' }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
//       <Sidebar selectedMenu="Payment Authorization" onMenuSelect={() => {}} />

//       <Box sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>
//         <Paper sx={{ p: 3, borderRadius: 2 }}>

//           {/* ── Page Header ── */}
//           <Box sx={{
//             display: 'flex', justifyContent: 'space-between', alignItems: 'center',
//             background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
//             p: 2.5, borderRadius: 1, mx: -3, mt: -3, mb: 3,
//           }}>
//             <Box>
//               <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
//                 View Payment Authorization
//               </Typography>
//               <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
//                 Payment No: {data.payment_number}
//               </Typography>
//             </Box>
//             <Chip label={data.status} sx={{ bgcolor: chip.bg, color: chip.color, fontWeight: 600 }} />
//           </Box>

//           {/* ── Alerts ── */}
//           {errorMsg   && <Alert severity="error"   sx={{ mb: 2 }} onClose={() => setErrorMsg('')}>{errorMsg}</Alert>}
//           {successMsg && <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccessMsg('')}>{successMsg}</Alert>}

//           {/* ── Payment Header Info ── */}
//           <Table size="small" sx={{ mb: 3, maxWidth: 500 }}>
//             <TableBody>
//               {[
//                 ['Payment No',   data.payment_number],
//                 ['Bank',         data.bank_description || data.bank_in_sage],
//                 ['Created Date', new Date(data.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })],
//                 ['Created By',   data.created_by_name || '—'],
//               ].map(([label, value]) => (
//                 <TableRow key={label}>
//                   <TableCell sx={{ fontWeight: 600, border: 'none', pl: 0, color: '#555', width: 140 }}>{label}</TableCell>
//                   <TableCell sx={{ border: 'none', fontWeight: 500 }}>{value}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>

//           {/* ── Payment Lines ── */}
//           <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
//             Payment Lines
//           </Typography>

//           <Table size="small" sx={{ mb: 3 }}>
//             <TableHead sx={{ bgcolor: '#F9FAFB' }}>
//               <TableRow>
//                 {['Sl.', 'Debtor Code', 'Debtor Name', 'GL Account', 'Account Name', 'Amount', 'Request No', 'Request Line']
//                   .map((h) => <TableCell key={h} sx={{ fontWeight: 600 }}>{h}</TableCell>)}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data.lines?.map((line: any, i: number) => (
//                 <TableRow key={i} hover>
//                   <TableCell>{i + 1}</TableCell>
//                   <TableCell>{line.debtor_code}</TableCell>
//                   <TableCell>{line.debtor_name}</TableCell>
//                   <TableCell>{line.gl_account}</TableCell>
//                   <TableCell>{line.account_name}</TableCell>
//                   <TableCell sx={{ fontWeight: 600 }}>{Number(line.amount).toLocaleString()}</TableCell>
//                   <TableCell>{line.request_no}</TableCell>
//                   <TableCell>{line.request_line}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>

//           {/* ── Total Amount ── */}
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
//             <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
//               Total:&nbsp;
//               {data.lines?.reduce((s: number, l: any) => s + Number(l.amount || 0), 0).toLocaleString()}
//             </Typography>
//           </Box>

//           {/* ── Footer: Back button + role-based action buttons ── */}
//           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <Button variant="outlined" onClick={() => router.back()}>
//               Back
//             </Button>

//             {/* Action buttons rendered based on role + current status */}
//             {renderButtons()}
//           </Box>

//         </Paper>
//       </Box>
//     </Box>
//   )
// }

'use client'

import React, { useState, useEffect } from 'react'
import {
  Box, Paper, Typography, Table, TableBody, TableCell,
  TableHead, TableRow, Button, CircularProgress, Chip, Alert, Snackbar,
  Breadcrumbs, Divider, Grid,
} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Link from '@mui/material/Link'
import Sidebar from '../main/Sidebar'
import Header from '../main/Header'
import { useParams, useRouter } from 'next/navigation'
import { getLoggedInUser, getPaymentPermissions } from './Paymentpermissions'

const API_BASE_URL  = 'http://localhost:8000/api/v1'
const SAGE_API_BASE = 'http://localhost:5000/freedom.core/KNBSDEMO/sdk/rest'

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  Draft:           { bg: '#FFF3E0', color: '#F97316' },
  Submitted:       { bg: '#E3F2FD', color: '#1565C0' },
  FinanceApproved: { bg: '#E8F5E9', color: '#2E7D32' },
  Completed:       { bg: '#F3E5F5', color: '#6A1B9A' },
  Cancelled:       { bg: '#FFEBEE', color: '#C62828' },
}

// ─── Sage date helper ─────────────────────────────────────────────────────────
const toSageDate = (date: Date = new Date()) => `/Date(${date.getTime()})/`

// ─── Read-only field ──────────────────────────────────────────────────────────
const ReadField = ({ label, value }: { label: string; value?: string | number }) => (
  <Box>
    <Typography variant="caption" sx={{ color: '#9CA3AF', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ mt: 0.3, fontWeight: 500, color: value ? '#111827' : '#9CA3AF' }}>
      {value || '—'}
    </Typography>
  </Box>
)

export default function ViewPaymentPage() {
  const { id }  = useParams()
  const router  = useRouter()

  const [selectedMenu,  setSelectedMenu]  = useState('Payment Authorization')
  const [data,          setData]          = useState<any>(null)
  const [loading,       setLoading]       = useState(true)
  const [actionLoading, setActionLoading] = useState(false)
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' | 'warning' | 'info' }>({
    open: false, message: '', severity: 'success',
  })

  const user  = getLoggedInUser()
  const perms = getPaymentPermissions(user)

  // ── Fetch payment ─────────────────────────────────────────────────────────
  const fetchPayment = async () => {
    try {
      setLoading(true)
      const res    = await fetch(`${API_BASE_URL}/payment/payment-authorization/${id}/`)
      const result = await res.json()
      if (res.ok) setData(result)
      else console.error('Fetch error:', result)
    } catch (e) {
      console.error('Failed to fetch payment:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { if (id) fetchPayment() }, [id])

  // ── Update status via PATCH ───────────────────────────────────────────────
  const updateStatus = async (newStatus: string) => {
    setActionLoading(true)
    try {
      const res    = await fetch(
        `${API_BASE_URL}/payment/payment-authorization/${id}/`,
        {
          method:  'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({ status: newStatus }),
        }
      )
      const result = await res.json()
      if (res.ok) {
        setSnackbar({ open: true, message: `Status updated to: ${newStatus}`, severity: 'success' })
        await fetchPayment()
      } else {
        setSnackbar({ open: true, message: 'Update failed: ' + JSON.stringify(result), severity: 'error' })
      }
    } catch (e) {
      setSnackbar({ open: true, message: 'Server error. Please try again.', severity: 'error' })
    } finally {
      setActionLoading(false)
    }
  }

  // ── Process payment — Sage CustomerTransactionPost per debtor ─────────────
  // Docs: Reference = <REQUEST_NO>-<REQUEST_LINE>-<PAYMENT_NO>
  // Docs: Creates debit against the person. Reversal happens in Surrender.
  const handleProcess = async () => {
    if (!window.confirm('Process this payment? Will post to Sage and mark as Completed.')) return
    setActionLoading(true)

    const lines      = data?.lines || []
    const paymentNo  = data?.payment_number || String(data?.id)
    const dateMs     = toSageDate()
    const sageErrors: string[] = []

    // Post each line to Sage individually (per docs)
    for (const line of lines) {
      const reference = `${line.request_no}-${line.request_line}-${paymentNo}`
      try {
        const res = await fetch(`${SAGE_API_BASE}/CustomerTransactionPost`, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            CustomerTransactionPost: {
              Date:            dateMs,
              CustomerCode:    line.debtor_code,
              Reference:       reference,
              TransactionCode: 'IMPREST',
              Amount:          Number(line.amount).toFixed(2),
            },
          }),
        })
        if (!res.ok) sageErrors.push(`Line ${line.request_line}: Sage error`)
      } catch (err) {
        sageErrors.push(`Line ${line.request_line}: Network error`)
      }
    }

    // Also call backend process endpoint (generates bank file etc)
    try {
      const res    = await fetch(
        `${API_BASE_URL}/payment/payment-authorization/${id}/process/`,
        { method: 'POST' }
      )
      const result = await res.json()
      if (res.ok) {
        if (sageErrors.length > 0) {
          setSnackbar({
            open: true,
            message: `Payment processed. ${sageErrors.length} Sage posting(s) failed — check manually.`,
            severity: 'warning',
          })
        } else {
          setSnackbar({ open: true, message: 'Payment processed and posted to Sage successfully!', severity: 'success' })
        }
        await fetchPayment()
      } else {
        setSnackbar({ open: true, message: 'Process failed: ' + JSON.stringify(result), severity: 'error' })
      }
    } catch (e) {
      setSnackbar({ open: true, message: 'Server error. Please try again.', severity: 'error' })
    } finally {
      setActionLoading(false)
    }
  }

  // ── Action buttons based on status + role ─────────────────────────────────
  const renderButtons = () => {
    if (!data) return null
    const s = data.status

    return (
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>

        {/* Submit — Draft → Submitted */}
        {s === 'Draft' && perms.canSubmit && (
          <Button
            variant="contained" disabled={actionLoading}
            sx={{ bgcolor: '#1565C0', '&:hover': { bgcolor: '#0d47a1' }, textTransform: 'none' }}
            onClick={() => { if (window.confirm('Submit this payment?')) updateStatus('Submitted') }}
          >
            Submit
          </Button>
        )}

        {/* Approve — Submitted → FinanceApproved */}
        {s === 'Submitted' && perms.canApprove && (
          <Button
            variant="contained" disabled={actionLoading}
            sx={{ bgcolor: '#2E7D32', '&:hover': { bgcolor: '#1b5e20' }, textTransform: 'none' }}
            onClick={() => { if (window.confirm('Approve this payment?')) updateStatus('FinanceApproved') }}
          >
            Approve
          </Button>
        )}

        {/* Process — FinanceApproved → Completed + Sage posting */}
        {s === 'FinanceApproved' && perms.canProcess && (
          <Button
            variant="contained" disabled={actionLoading}
            sx={{ bgcolor: '#6A1B9A', '&:hover': { bgcolor: '#4a148c' }, textTransform: 'none' }}
            onClick={handleProcess}
          >
            Process & Complete
          </Button>
        )}

        {/* Cancel — Draft or Submitted only */}
        {(s === 'Draft' || s === 'Submitted') && perms.canCancel && (
          <Button
            variant="outlined" color="error" disabled={actionLoading}
            sx={{ textTransform: 'none' }}
            onClick={() => { if (window.confirm('Cancel this payment?')) updateStatus('Cancelled') }}
          >
            Cancel
          </Button>
        )}

        {actionLoading && <CircularProgress size={22} sx={{ color: '#F97316' }} />}
      </Box>
    )
  }

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (!data) return null

  const chip       = STATUS_COLORS[data.status] || { bg: '#F5F5F5', color: '#333' }
  const totalAmt   = data.lines?.reduce((s: number, l: any) => s + Number(l.amount || 0), 0) || 0
  const fmt        = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

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
              View Payment
            </Typography>
          </Breadcrumbs>

          <Paper sx={{ borderRadius: 2, overflow: 'hidden' }}>

            {/* ── Gradient Header ── */}
            <Box sx={{
              background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
              p: 3,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'white' }}>
                  Payment Authorization
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  Payment No: {data.payment_number}
                  &nbsp;·&nbsp;
                  {new Date(data.created_at).toLocaleDateString('en-GB', {
                    day: '2-digit', month: 'short', year: 'numeric',
                  })}
                </Typography>
              </Box>
              <Chip
                label={data.status}
                sx={{ bgcolor: chip.bg, color: chip.color, fontWeight: 600, fontSize: '0.8rem', border: `1px solid ${chip.color}40` }}
              />
            </Box>

            <Box sx={{ p: 4 }}>

              {/* ── Summary card ── */}
              <Box
                sx={{
                  p: 2, mb: 4, borderRadius: 2, border: '1px solid #E5E7EB',
                  bgcolor: 'white', display: 'inline-flex', gap: 5,
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" sx={{ color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                    Total Lines
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827' }}>
                    {data.lines?.length || 0}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" sx={{ color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                    Total Amount
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#F97316' }}>
                    {fmt(totalAmt)}
                  </Typography>
                </Box>
              </Box>

              {/* ── Payment Info ── */}
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: '#374151' }}>
                Payment Information
              </Typography>

              <Grid container spacing={3} mb={4}>
                <Grid item xs={12} sm={6} md={3}>
                  <ReadField label="Payment No" value={data.payment_number} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ReadField label="Bank" value={data.bank_description || data.bank_in_sage} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ReadField
                    label="Created Date"
                    value={new Date(data.created_at).toLocaleDateString('en-GB', {
                      day: '2-digit', month: 'short', year: 'numeric',
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ReadField label="Created By" value={data.created_by_name} />
                </Grid>
              </Grid>

              <Divider sx={{ mb: 3 }} />

              {/* ── Payment Lines ── */}
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: '#374151' }}>
                Payment Lines
              </Typography>

              <Box sx={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 2, mb: 4 }}>
                <Table size="small" sx={{ minWidth: 900 }}>
                  <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                    <TableRow>
                      {['Sl.', 'Debtor Code', 'Debtor Name', 'GL Account', 'Account Name', 'Amount', 'Request No', 'Request Line']
                        .map((h) => <TableCell key={h} sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{h}</TableCell>)}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.lines?.map((line: any, i: number) => (
                      <TableRow key={i} hover>
                        <TableCell>{i + 1}</TableCell>
                        <TableCell>{line.debtor_code || '—'}</TableCell>
                        <TableCell>{line.debtor_name || '—'}</TableCell>
                        <TableCell>{line.gl_account  || '—'}</TableCell>
                        <TableCell>{line.account_name || '—'}</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>{fmt(Number(line.amount || 0))}</TableCell>
                        <TableCell>{line.request_no   || '—'}</TableCell>
                        <TableCell>{line.request_line || '—'}</TableCell>
                      </TableRow>
                    ))}

                    {/* Total row */}
                    <TableRow sx={{ bgcolor: '#F9FAFB' }}>
                      <TableCell colSpan={5} sx={{ fontWeight: 700, color: '#374151' }}>Total</TableCell>
                      <TableCell sx={{ fontWeight: 700, color: '#F97316' }}>{fmt(totalAmt)}</TableCell>
                      <TableCell colSpan={2} />
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>

              {/* ── Footer ── */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Button variant="outlined" onClick={() => router.push('/payament/payment_authorization')} sx={{ textTransform: 'none' }}>
                  Back to List
                </Button>
                {renderButtons()}
              </Box>

            </Box>
          </Paper>
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
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