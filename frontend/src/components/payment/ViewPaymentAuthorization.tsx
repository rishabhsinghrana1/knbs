// 'use client'

// import { useParams } from 'next/navigation'
// import {
//   Box,
//   Paper,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Button
// } from '@mui/material'
// import Sidebar from '../main/Sidebar'
// import { useState, useEffect } from 'react'

// export default function ViewPaymentPage() {
//   const { id } = useParams()
//   const [data, setData] = useState<any>(null)

//   useEffect(() => {
//     // 👉 Yaha API call laga dena
//     const mockData = {
//       debtorCode: 'D001',
//       debtorName: 'ABC Pvt Ltd',
//       glAccount: '1001',
//       accountName: 'Cash Account',
//       amount: 5000,
//       requestNo: 'REQ-001',
//       requestLine: '1'
//     }

//     setData(mockData)
//   }, [id])

//   if (!data) return null

// return (
//   <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>

//     {/* Sidebar */}
//     <Sidebar />

//     {/* Main Content Wrapper */}
//     <Box
//       sx={{
//         flexGrow: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         overflow: 'hidden'
//       }}
//     >

//       {/* Page Body */}
//       <Box sx={{ p: 3, overflow: 'auto' }}>
//         <Paper sx={{ p: 3, borderRadius: 2 }}>

//           <Typography variant="h6" mb={2}>
//             View Payment Authorization
//           </Typography>

//           <Table size="small">
//             <TableBody>
//               <TableRow>
//                 <TableCell>Debtor Code</TableCell>
//                 <TableCell>{data.debtorCode}</TableCell>
//               </TableRow>

//               <TableRow>
//                 <TableCell>Debtor Name</TableCell>
//                 <TableCell>{data.debtorName}</TableCell>
//               </TableRow>

//               <TableRow>
//                 <TableCell>GL Account</TableCell>
//                 <TableCell>{data.glAccount}</TableCell>
//               </TableRow>

//               <TableRow>
//                 <TableCell>Account Name</TableCell>
//                 <TableCell>{data.accountName}</TableCell>
//               </TableRow>

//               <TableRow>
//                 <TableCell>Amount</TableCell>
//                 <TableCell>{data.amount}</TableCell>
//               </TableRow>

//               <TableRow>
//                 <TableCell>Request No</TableCell>
//                 <TableCell>{data.requestNo}</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>

//           <Button
//             variant="contained"
//             sx={{ mt: 3, bgcolor: '#F97316' }}
//             href={`/payment-authorization/edit/${id}`}
//           >
//             Edit
//           </Button>

//         </Paper>
//       </Box>
//     </Box>
//   </Box>
// )

// }

'use client'

import { useParams, useRouter } from 'next/navigation'
import {
    Box,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    CircularProgress,
    Chip
} from '@mui/material'
import Sidebar from '../main/Sidebar'
import { useState, useEffect } from 'react'

export default function ViewPaymentPage() {
    const { id } = useParams()
    const router = useRouter()

    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)

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

                const result = await res.json()

                if (res.ok) {
                    setData(result)
                } else {
                    console.error(result)
                }
            } catch (error) {
                console.error('Error fetching payment:', error)
            } finally {
                setLoading(false)
            }
        }

        if (id) fetchPayment()
    }, [id])

    if (loading) {
        return (
            <Box sx={{ p: 5, textAlign: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }

    if (!data) return null

    return (
        <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
            <Sidebar />

            <Box sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>

                <Paper sx={{ p: 3, borderRadius: 2 }}>

                    <Typography variant="h6" mb={3}>
                        View Payment Authorization
                    </Typography>

                    {/* ================= HEADER INFO ================= */}
                    <Table size="small" sx={{ mb: 3 }}>
                        <TableBody>
                            <TableRow>
                                <TableCell><b>Payment No</b></TableCell>
                                <TableCell>{data.payment_number}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell><b>Bank</b></TableCell>
                                <TableCell>
                                    {data.bank_description || data.bank_in_sage}
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell><b>Status</b></TableCell>
                                <TableCell>
                                    <Chip
                                        label={data.status}
                                        size="small"
                                        sx={{
                                            bgcolor:
                                                data.status === 'Draft'
                                                    ? '#FFF3E0'
                                                    : '#E8F5E9',
                                            color:
                                                data.status === 'Draft'
                                                    ? '#F97316'
                                                    : '#4CAF50'
                                        }}
                                    />
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell><b>Created Date</b></TableCell>
                                <TableCell>
                                    {new Date(data.created_at).toLocaleDateString()}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    {/* ================= LINES TABLE ================= */}
                    <Typography variant="subtitle1" mb={1}>
                        Payment Lines
                    </Typography>

                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Sl. No.</TableCell>
                                <TableCell>Debtor Code</TableCell>
                                <TableCell>Debtor Name</TableCell>
                                <TableCell>GL Account</TableCell>
                                <TableCell>Account Name</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Request No</TableCell>
                                <TableCell>Request Line</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {data.lines?.map((line: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{line.debtor_code}</TableCell>
                                    <TableCell>{line.debtor_name}</TableCell>
                                    <TableCell>{line.gl_account}</TableCell>
                                    <TableCell>{line.account_name}</TableCell>
                                    <TableCell>{line.amount}</TableCell>
                                    <TableCell>{line.request_no}</TableCell>
                                    <TableCell>{line.request_line}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* ================= ACTION BUTTON ================= */}
                    {/* <Box sx={{ mt: 3 }}>
                        {data.status === 'Draft' && (
                            <Button
                                variant="contained"
                                sx={{ bgcolor: '#F97316' }}
                                onClick={() =>
                                    router.push(`/payment-authorization/edit/${id}`)
                                }
                            >
                                Edit
                            </Button>
                        )}
                    </Box> */}
                    <Box sx={{ mt: 3 }}>
                        <Button variant="outlined" onClick={() => router.back()}>
                            Back
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}
