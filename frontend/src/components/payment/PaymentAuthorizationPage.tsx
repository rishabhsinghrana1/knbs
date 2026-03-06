// // 'use client'

// // import React, { useState } from 'react'
// // import {
// //   Box,
// //   Paper,
// //   Typography,
// //   TextField,
// //   MenuItem,
// //   Button,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableRow
// // } from '@mui/material'
// // import * as XLSX from 'xlsx'
// // import Sidebar from '../main/Sidebar'

// // interface RowData {
// //   debtorCode: string
// //   debtorName: string
// //   glAccount: string
// //   accountName: string
// //   amount: number
// //   requestNo: string
// //   requestLine: string
// // }

// // export default function PaymentAuthorizationPage() {
// //   const [rows, setRows] = useState<RowData[]>([])
// //     const [selectedMenu, setSelectedMenu] = useState('Imprest')

// //   // ✅ Excel Import Handler
// //   const handleExcelImport = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0]
// //     if (!file) return

// //     const reader = new FileReader()
// //     reader.onload = (evt) => {
// //       const data = evt.target?.result
// //       const workbook = XLSX.read(data, { type: 'binary' })
// //       const sheetName = workbook.SheetNames[0]
// //       const sheet = workbook.Sheets[sheetName]
// //       const jsonData: any[] = XLSX.utils.sheet_to_json(sheet)

// //       const formatted = jsonData.map((item, index) => ({
// //         debtorCode: item['Debtor Code'] || '',
// //         debtorName: item['Debtor Name'] || '',
// //         glAccount: item['GL Account'] || '',
// //         accountName: item['Account Name'] || '',
// //         amount: item['Amount Approved'] || 0,
// //         requestNo: item['Request No'] || '',
// //         requestLine: item['Request Line'] || '',
// //       }))

// //       setRows(formatted)
// //     }

// //     reader.readAsBinaryString(file)
// //   }

// //   return (
// //     // <Box sx={{ p: 3 }}>
// //     //              <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />
// //         <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
// //              <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu}  />   

// //       <Typography variant="body2" color="text.secondary">
// //         Imprest &gt; Payment authorization
// //       </Typography>

// //       <Typography variant="h5" sx={{ fontWeight: 600, mt: 1 }}>
// //         Payment authorization
// //       </Typography>

// //       <Paper sx={{ p: 3, mt: 3, borderRadius: 2 }}>
// //         <Typography variant="subtitle1" fontWeight={600}>
// //           Manage your payments
// //         </Typography>
// //         <Typography variant="body2" color="text.secondary" mb={3}>
// //           Start adding information
// //         </Typography>

// //         {/* Filters */}
// //         <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
// //           <TextField select fullWidth size="small" label="Payment Number">
// //             <MenuItem value="new">New</MenuItem>
// //           </TextField>

// //           <TextField select fullWidth size="small" label="Bank in sage">
// //             <MenuItem value="new">New</MenuItem>
// //           </TextField>
// //         </Box>

// //         {/* Import Button */}
// //         <Box sx={{ mb: 2 }}>
// //           <Button
// //             variant="outlined"
// //             component="label"
// //           >
// //             Import from Excel
// //             <input
// //               hidden
// //               type="file"
// //               accept=".xlsx,.xls"
// //               onChange={handleExcelImport}
// //             />
// //           </Button>
// //         </Box>

// //         {/* Table */}
// //         <Table size="small">
// //           <TableHead>
// //             <TableRow>
// //               <TableCell>Sl. No.</TableCell>
// //               <TableCell>Debtor Code</TableCell>
// //               <TableCell>Debtor Name</TableCell>
// //               <TableCell>GL account</TableCell>
// //               <TableCell>Account Name</TableCell>
// //               <TableCell>Amount approved</TableCell>
// //               <TableCell>Request No.</TableCell>
// //               <TableCell>Request Line</TableCell>
// //             </TableRow>
// //           </TableHead>
// //           <TableBody>
// //             {rows.map((row, index) => (
// //               <TableRow key={index}>
// //                 <TableCell>{index + 1}</TableCell>
// //                 <TableCell>{row.debtorCode}</TableCell>
// //                 <TableCell>{row.debtorName}</TableCell>
// //                 <TableCell>{row.glAccount}</TableCell>
// //                 <TableCell>{row.accountName}</TableCell>
// //                 <TableCell>{row.amount}</TableCell>
// //                 <TableCell>{row.requestNo}</TableCell>
// //                 <TableCell>{row.requestLine}</TableCell>
// //               </TableRow>
// //             ))}
// //           </TableBody>
// //         </Table>

// //         {/* Actions */}
// //         <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
// //           <Button variant="outlined">Save</Button>
// //           <Button variant="contained" sx={{ bgcolor: '#F97316' }}>
// //             Process Batch
// //           </Button>
// //         </Box>
// //       </Paper>
// //     </Box>
// //   )
// // }
// 'use client'

// import React, { useState } from 'react'
// import {
//     Box,
//     Paper,
//     Typography,
//     TextField,
//     MenuItem,
//     Button,
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableRow
// } from '@mui/material'
// import * as XLSX from 'xlsx'
// import Sidebar from '../main/Sidebar'
// import Header from '../main/Header'
// import Breadcrumbs from '@mui/material/Breadcrumbs'
// import Link from '@mui/material/Link'
// import NavigateNextIcon from '@mui/icons-material/NavigateNext'
// interface RowData {
//     debtorCode: string
//     debtorName: string
//     glAccount: string
//     accountName: string
//     amount: number
//     requestNo: string
//     requestLine: string
// }

// export default function PaymentAuthorizationPage() {
//     const [rows, setRows] = useState<RowData[]>([])
//     const [selectedMenu, setSelectedMenu] = useState('Payment Authorization')

//     const handleExcelImport = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0]
//         if (!file) return

//         const reader = new FileReader()
//         reader.onload = (evt) => {
//             const data = evt.target?.result
//             const workbook = XLSX.read(data, { type: 'binary' })
//             const sheet = workbook.Sheets[workbook.SheetNames[0]]
//             const jsonData: any[] = XLSX.utils.sheet_to_json(sheet)

//             setRows(
//                 jsonData.map((item) => ({
//                     debtorCode: item['Debtor Code'] || '',
//                     debtorName: item['Debtor Name'] || '',
//                     glAccount: item['GL Account'] || '',
//                     accountName: item['Account Name'] || '',
//                     amount: item['Amount Approved'] || 0,
//                     requestNo: item['Request No'] || '',
//                     requestLine: item['Request Line'] || '',
//                 }))
//             )
//         }

//         reader.readAsBinaryString(file)
//     }

//     return (
//         <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
//             {/* Sidebar */}
//             <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//             {/* Main Content */}
//             <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//                 {/* <Header /> */}

//                 {/* Page Body */}
//                 <Box sx={{ p: 3, overflow: 'auto' }}>
//                     {/* <Typography variant="body2" color="text.secondary">
//             Imprest &gt; Payment authorization
//                <Breadcrumbs 
//               separator={<NavigateNextIcon fontSize="small" />}
//               sx={{ mb: 2 }}
//             >
//               <Link 
//                 underline="hover" 
//                 color="inherit" 
//                 href="/imprest"
//                 sx={{ fontSize: '0.875rem', color: '#6B7280' }}
//               >
//                 Imprest
//               </Link>
//           </Typography> */}
//                     <Breadcrumbs
//                         separator={<NavigateNextIcon fontSize="small" />}
//                         sx={{ mb: 2 }}
//                     >
//                         <Link
//                             underline="hover"
//                             color="inherit"
//                             href="/imprest"
//                             sx={{ fontSize: '0.875rem', color: '#6B7280' }}
//                         >
//                             Imprest
//                         </Link>

//                         <Typography
//                             sx={{ fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}
//                         >
//                             Payment authorization
//                         </Typography>
//                     </Breadcrumbs>


//                     <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
//                         Payment authorization
//                     </Typography>

//                     <Paper sx={{ p: 3, borderRadius: 2 }}>
//                         <Typography fontWeight={600}>Manage your payments</Typography>
//                         <Typography variant="body2" color="text.secondary" mb={3}>
//                             Start adding information
//                         </Typography>

//                         {/* Filters */}
//                         <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
//                             <TextField select fullWidth size="small" label="Payment Number">
//                                 <MenuItem value="num">1</MenuItem>
//                             </TextField>

//                             <TextField select fullWidth size="small" label="Bank in sage">
//                                 <MenuItem value="new">New</MenuItem>
//                             </TextField>
//                         </Box>

//                         {/* Import */}
//                         <Button component="label" variant="outlined" sx={{ mb: 2 }}>
//                             Import from Excel
//                             <input hidden type="file" accept=".xlsx,.xls" onChange={handleExcelImport} />
//                         </Button>

//                         {/* Table */}
//                         <Table size="small">
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell>Sl. No.</TableCell>
//                                     <TableCell>Debtor Code</TableCell>
//                                     <TableCell>Debtor Name</TableCell>
//                                     <TableCell>GL account</TableCell>
//                                     <TableCell>Account Name</TableCell>
//                                     <TableCell>Amount approved</TableCell>
//                                     <TableCell>Request No.</TableCell>
//                                     <TableCell>Request Line</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {rows.map((row, index) => (
//                                     <TableRow key={index}>
//                                         <TableCell>{index + 1}</TableCell>
//                                         <TableCell>{row.debtorCode}</TableCell>
//                                         <TableCell>{row.debtorName}</TableCell>
//                                         <TableCell>{row.glAccount}</TableCell>
//                                         <TableCell>{row.accountName}</TableCell>
//                                         <TableCell>{row.amount}</TableCell>
//                                         <TableCell>{row.requestNo}</TableCell>
//                                         <TableCell>{row.requestLine}</TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>

//                         {/* Actions */}
//                         <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
//                             <Button variant="outlined">Save</Button>
//                             <Button variant="contained" sx={{ bgcolor: '#F97316' }}>
//                                 Process Batch
//                             </Button>
//                         </Box>
//                     </Paper>
//                 </Box>
//             </Box>
//         </Box>
//     )
// }


// 'use client'

// import React, { useState } from 'react'
// import {
//   Box,
//   Paper,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Button,
//   TextField,
//   MenuItem,
//   Chip,
//   IconButton,
//   Menu,
//   MenuItem as MenuItemComponent,
// } from '@mui/material'
// import {
//   MoreVert as MoreVertIcon,
//   Visibility as ViewIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
// } from '@mui/icons-material'
// import Sidebar from '../main/Sidebar'
// import Header from '../main/Header'
// import { useRouter } from 'next/navigation'

// const years = ['2024', '2025', '2026']
// const statuses = ['Draft', 'Processed']

// const tableData = [
//   {
//     paymentNumber: 'PAY-001',
//     bank: 'HDFC',
//     totalAmount: 25000,
//     date: '01/02/2026',
//     status: 'Draft',
//   },
//   {
//     paymentNumber: 'PAY-002',
//     bank: 'ICICI',
//     totalAmount: 48000,
//     date: '05/02/2026',
//     status: 'Processed',
//   },
// ]

// export default function PaymentAuthorizationPage() {
//   const router = useRouter()

//   const [selectedMenu, setSelectedMenu] = useState('Payment Authorization')
//   const [year, setYear] = useState('2026')
//   const [status, setStatus] = useState('Draft')
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
//   const [selectedRow, setSelectedRow] = useState<number | null>(null)

//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
//     setAnchorEl(event.currentTarget)
//     setSelectedRow(index)
//   }

//   const handleMenuClose = () => {
//     setAnchorEl(null)
//     setSelectedRow(null)
//   }

//   const handleView = () => {
//      const paymentNumber = tableData[selectedRow].paymentNumber
//     router.push(`/payament/view/${paymentNumber}`)
//     handleMenuClose()
//   }

//   const handleEdit = () => {
//     router.push(`/payment-authorization/edit/${selectedRow}`)
//     handleMenuClose()
//   }

//   const handleDelete = () => {
//     console.log('Delete:', selectedRow)
//     handleMenuClose()
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
      
//       {/* Sidebar */}
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
//         <Header />

//         <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
//           <Box sx={{ p: 3 }}>
//             <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>

//               {/* Gradient Header */}
//               <Box
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   mb: 3,
//                   background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
//                   p: 2.5,
//                   borderRadius: 1,
//                   mx: -3,
//                   mt: -3,
//                 }}
//               >
//                 <Box>
//                   <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
//                     Payment Authorization
//                   </Typography>
//                   <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
//                     Manage and process payment batches
//                   </Typography>
//                 </Box>

//                 <Button
//                   variant="contained"
//                   sx={{
//                     bgcolor: 'white',
//                     color: '#1A1A1A',
//                     textTransform: 'none',
//                     fontWeight: 600,
//                     '&:hover': { bgcolor: '#F5F5F5' },
//                   }}
//                   onClick={() => router.push('/payament/add')}
//                 >
//                   Create Payment +
//                 </Button>
//               </Box>

//               {/* Filter Section */}
//               <Box sx={{ mb: 3 }}>
//                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
//                   Filter By
//                 </Typography>

//                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                   <TextField
//                     select
//                     size="small"
//                     label="Year"
//                     value={year}
//                     onChange={(e) => setYear(e.target.value)}
//                     sx={{ minWidth: 150 }}
//                   >
//                     {years.map((y) => (
//                       <MenuItem key={y} value={y}>{y}</MenuItem>
//                     ))}
//                   </TextField>

//                   <TextField
//                     select
//                     size="small"
//                     label="Status"
//                     value={status}
//                     onChange={(e) => setStatus(e.target.value)}
//                     sx={{ minWidth: 150 }}
//                   >
//                     {statuses.map((s) => (
//                       <MenuItem key={s} value={s}>{s}</MenuItem>
//                     ))}
//                   </TextField>
//                 </Box>
//               </Box>

//               {/* Table */}
//               <TableContainer>
//                 <Table>
//                   <TableHead sx={{ bgcolor: '#F9FAFB' }}>
//                     <TableRow>
//                       <TableCell>Payment No</TableCell>
//                       <TableCell>Bank</TableCell>
//                       <TableCell>Date</TableCell>
//                       <TableCell>Status</TableCell>
//                       <TableCell>Actions</TableCell>
//                     </TableRow>
//                   </TableHead>

//                   <TableBody>
//                     {tableData.map((row, index) => (
//                       <TableRow key={index} hover>
//                         <TableCell>{row.paymentNumber}</TableCell>
//                         <TableCell>{row.bank}</TableCell>
//                         <TableCell>{row.date}</TableCell>


//                         <TableCell>
//                           <Chip
//                             label={row.status}
//                             size="small"
//                             sx={{
//                               bgcolor: row.status === 'Draft' ? '#FFF3E0' : '#E8F5E9',
//                               color: row.status === 'Draft' ? '#F97316' : '#4CAF50',
//                               fontWeight: 500,
//                             }}
//                           />
//                         </TableCell>

//                         <TableCell>
//                           <IconButton size="small" onClick={(e) => handleMenuOpen(e, index)}>
//                             <MoreVertIcon fontSize="small" />
//                           </IconButton>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>

//               {/* Action Menu */}
//               <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//                 <MenuItemComponent onClick={handleView}>
//                   <ViewIcon sx={{ fontSize: 18, mr: 1 }} />
//                   View
//                 </MenuItemComponent>

//                 {selectedRow !== null &&
//                   tableData[selectedRow].status === 'Draft' && (
//                     <MenuItemComponent onClick={handleEdit}>
//                       <EditIcon sx={{ fontSize: 18, mr: 1 }} />
//                       Edit
//                     </MenuItemComponent>
//                   )}

//                 <MenuItemComponent onClick={handleDelete} sx={{ color: '#EF5350' }}>
//                   <DeleteIcon sx={{ fontSize: 18, mr: 1 }} />
//                   Delete
//                 </MenuItemComponent>
//               </Menu>

//             </Paper>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// 'use client'

// import React, { useState, useEffect } from 'react'
// import {
//   Box,
//   Paper,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Button,
//   TextField,
//   MenuItem,
//   Chip,
//   IconButton,
//   Menu,
//   MenuItem as MenuItemComponent,
// } from '@mui/material'
// import {
//   MoreVert as MoreVertIcon,
//   Visibility as ViewIcon,
//   Edit as EditIcon,
//   Delete as DeleteIcon,
// } from '@mui/icons-material'
// import Sidebar from '../main/Sidebar'
// import Header from '../main/Header'
// import { useRouter } from 'next/navigation'

// const years = ['2024', '2025', '2026']
// const statuses = ['Draft', 'Processed']

// export default function PaymentAuthorizationPage() {
//   const router = useRouter()

//   const [selectedMenu, setSelectedMenu] = useState('Payment Authorization')
//   const [year, setYear] = useState('2026')
//   const [status, setStatus] = useState('Draft')
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
//   const [selectedRow, setSelectedRow] = useState<number | null>(null)
//   const [tableData, setTableData] = useState<any[]>([])
//   const [loading, setLoading] = useState(false)

//   // ================= API CALL =================
//   useEffect(() => {
//     const fetchPayments = async () => {
//       try {
//         setLoading(true)

//         const response = await fetch(
//           'http://localhost:8000/api/v1/payment/payment-authorization/'
//         )

//         if (!response.ok) {
//           throw new Error('Failed to fetch payments')
//         }

//         const data = await response.json()
//         setTableData(data)
//       } catch (error) {
//         console.error('Error fetching payments:', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchPayments()
//   }, [])

//   // ================= ACTION MENU =================
//   const handleMenuOpen = (
//     event: React.MouseEvent<HTMLElement>,
//     index: number
//   ) => {
//     setAnchorEl(event.currentTarget)
//     setSelectedRow(index)
//   }

//   const handleMenuClose = () => {
//     setAnchorEl(null)
//     setSelectedRow(null)
//   }

//   const handleView = () => {
//     if (selectedRow === null) return
//     const paymentId = tableData[selectedRow].id
//     router.push(`/payament/view/${paymentId}`)
//     handleMenuClose()
//   }

//   const handleEdit = () => {
//     if (selectedRow === null) return
//     const paymentId = tableData[selectedRow].id
//     router.push(`/payament/edit/${paymentId}`)
//     handleMenuClose()
//   }

//   const handleDelete = async () => {
//     if (selectedRow === null) return

//     const paymentId = tableData[selectedRow].id

//     try {
//       await fetch(
//         `http://localhost:8000/api/v1/payment/payment-authorization/${paymentId}/`,
//         {
//           method: 'DELETE',
//         }
//       )

//       setTableData((prev) =>
//         prev.filter((item) => item.id !== paymentId)
//       )
//     } catch (error) {
//       console.error('Delete failed:', error)
//     }

//     handleMenuClose()
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
      
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
//         <Header />

//         <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
//           <Box sx={{ p: 3 }}>
//             <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>

//               {/* Header */}
//               <Box
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   mb: 3,
//                   background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
//                   p: 2.5,
//                   borderRadius: 1,
//                   mx: -3,
//                   mt: -3,
//                 }}
//               >
//                 <Box>
//                   <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
//                     Payment Authorization
//                   </Typography>
//                   <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
//                     Manage and process payment batches
//                   </Typography>
//                 </Box>

//                 <Button
//                   variant="contained"
//                   sx={{
//                     bgcolor: 'white',
//                     color: '#1A1A1A',
//                     textTransform: 'none',
//                     fontWeight: 600,
//                     '&:hover': { bgcolor: '#F5F5F5' },
//                   }}
//                   onClick={() => router.push('/payament/add')}
//                 >
//                   Create Payment +
//                 </Button>
//               </Box>

//               {/* Filter */}
//               <Box sx={{ mb: 3 }}>
//                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
//                   Filter By
//                 </Typography>

//                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                   <TextField
//                     select
//                     size="small"
//                     label="Year"
//                     value={year}
//                     onChange={(e) => setYear(e.target.value)}
//                     sx={{ minWidth: 150 }}
//                   >
//                     {years.map((y) => (
//                       <MenuItem key={y} value={y}>{y}</MenuItem>
//                     ))}
//                   </TextField>

//                   <TextField
//                     select
//                     size="small"
//                     label="Status"
//                     value={status}
//                     onChange={(e) => setStatus(e.target.value)}
//                     sx={{ minWidth: 150 }}
//                   >
//                     {statuses.map((s) => (
//                       <MenuItem key={s} value={s}>{s}</MenuItem>
//                     ))}
//                   </TextField>
//                 </Box>
//               </Box>

//               {loading && <Typography>Loading...</Typography>}

//               {/* Table */}
//               <TableContainer>
//                 <Table>
//                   <TableHead sx={{ bgcolor: '#F9FAFB' }}>
//                     <TableRow>
//                       <TableCell>Payment No</TableCell>
//                       <TableCell>Bank</TableCell>
//                       <TableCell>Date</TableCell>
//                       <TableCell>Status</TableCell>
//                       <TableCell>Actions</TableCell>
//                     </TableRow>
//                   </TableHead>

//                   <TableBody>
//                     {tableData.map((row, index) => (
//                       <TableRow key={row.id} hover>
//                         <TableCell>{row.payment_number}</TableCell>
//                         <TableCell>{row.bank_description}</TableCell>
//                         <TableCell>
//                           {new Date(row.created_at).toLocaleDateString()}
//                         </TableCell>

//                         <TableCell>
//                           <Chip
//                             label={row.status}
//                             size="small"
//                             sx={{
//                               bgcolor:
//                                 row.status === 'Draft'
//                                   ? '#FFF3E0'
//                                   : '#E8F5E9',
//                               color:
//                                 row.status === 'Draft'
//                                   ? '#F97316'
//                                   : '#4CAF50',
//                               fontWeight: 500,
//                             }}
//                           />
//                         </TableCell>

//                         <TableCell>
//                           <IconButton
//                             size="small"
//                             onClick={(e) => handleMenuOpen(e, index)}
//                           >
//                             <MoreVertIcon fontSize="small" />
//                           </IconButton>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>

//               {/* Action Menu */}
//               <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//               >
//                 <MenuItemComponent onClick={handleView}>
//                   <ViewIcon sx={{ fontSize: 18, mr: 1 }} />
//                   View
//                 </MenuItemComponent>

//                 {/* {selectedRow !== null &&
//                   tableData[selectedRow]?.status === 'Draft' && (
//                     <MenuItemComponent onClick={handleEdit}>
//                       <EditIcon sx={{ fontSize: 18, mr: 1 }} />
//                       Edit
//                     </MenuItemComponent>
//                   )} */}

//                 <MenuItemComponent
//                   onClick={handleDelete}
//                   sx={{ color: '#EF5350' }}
//                 >
//                   <DeleteIcon sx={{ fontSize: 18, mr: 1 }} />
//                   Delete
//                 </MenuItemComponent>
//               </Menu>

//             </Paper>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   )
// }

'use client'

import React, { useState, useEffect } from 'react'
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  MenuItem,
  Chip,
  IconButton,
  Menu,
  MenuItem as MenuItemComponent,
} from '@mui/material'
import {
  MoreVert as MoreVertIcon,
  Visibility as ViewIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material'
import Sidebar from '../main/Sidebar'
import Header from '../main/Header'
import { useRouter } from 'next/navigation'

const years    = ['2024', '2025', '2026']
const statuses = ['All', 'Draft', 'Processed']

export default function PaymentAuthorizationPage() {
  const router = useRouter()

  const [selectedMenu, setSelectedMenu] = useState('Payment Authorization')
  const [year,         setYear]         = useState('2026')
  const [status,       setStatus]       = useState('All')

  const [allData,      setAllData]      = useState<any[]>([])
  const [filteredData, setFilteredData] = useState<any[]>([])
  const [loading,      setLoading]      = useState(false)

  const [anchorEl,    setAnchorEl]    = useState<null | HTMLElement>(null)
  const [selectedRow, setSelectedRow] = useState<number | null>(null)

  // ── Fetch ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:8000/api/v1/payment/payment-authorization/')
        if (!response.ok) throw new Error('Failed to fetch payments')
        const data = await response.json()
        setAllData(data)
        setFilteredData(data) // show all initially
      } catch (error) {
        console.error('Error fetching payments:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPayments()
  }, [])

  // ── Filter logic ───────────────────────────────────────────────────────────
  const applyFilters = (yr: string, st: string) => {
    let result = [...allData]

    // Year — parse from created_at
    if (yr) {
      result = result.filter(
        (row) => new Date(row.created_at).getFullYear().toString() === yr
      )
    }

    // Status — 'All' means no filter
    if (st && st !== 'All') {
      result = result.filter(
        (row) => row.status === st
      )
    }

    setFilteredData(result)
  }

  const handleYearChange = (val: string) => {
    setYear(val)
    applyFilters(val, status)
  }

  const handleStatusChange = (val: string) => {
    setStatus(val)
    applyFilters(year, val)
  }

  const resetFilters = () => {
    setYear('2026')
    setStatus('All')
    applyFilters('2026', 'All')
  }

  // ── Menu helpers ───────────────────────────────────────────────────────────
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget)
    setSelectedRow(index)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setSelectedRow(null)
  }

  const handleView = () => {
    if (selectedRow === null) return
    router.push(`/payament/view/${filteredData[selectedRow].id}`)
    handleMenuClose()
  }

  const handleDelete = async () => {
    if (selectedRow === null) return
    const paymentId = filteredData[selectedRow].id
    try {
      await fetch(
        `http://localhost:8000/api/v1/payment/payment-authorization/${paymentId}/`,
        { method: 'DELETE' }
      )
      const updated = allData.filter((item) => item.id !== paymentId)
      setAllData(updated)
      // re-apply current filters on updated data
      let result = [...updated]
      if (year) result = result.filter((r) => new Date(r.created_at).getFullYear().toString() === year)
      if (status && status !== 'All') result = result.filter((r) => r.status === status)
      setFilteredData(result)
    } catch (error) {
      console.error('Delete failed:', error)
    }
    handleMenuClose()
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>

      <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header />

        <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
          <Box sx={{ p: 3 }}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>

              {/* ── Gradient Header ── */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                  background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
                  p: 2.5,
                  borderRadius: 1,
                  mx: -3,
                  mt: -3,
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                    Payment Authorization
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    Manage and process payment batches
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: 'white',
                    color: '#1A1A1A',
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': { bgcolor: '#F5F5F5' },
                  }}
                  onClick={() => router.push('/payament/add')}
                >
                  Create Payment +
                </Button>
              </Box>

              {/* ── Filter ── */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                  Filter By
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>

                  {/* Year — live filter on change */}
                  <TextField
                    select size="small" label="Year" value={year}
                    onChange={(e) => handleYearChange(e.target.value)}
                    sx={{ minWidth: 150 }}
                  >
                    {years.map((y) => <MenuItem key={y} value={y}>{y}</MenuItem>)}
                  </TextField>

                  {/* Status — live filter on change */}
                  <TextField
                    select size="small" label="Status" value={status}
                    onChange={(e) => handleStatusChange(e.target.value)}
                    sx={{ minWidth: 150 }}
                  >
                    {statuses.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                  </TextField>

                  <Button variant="outlined" onClick={resetFilters}>Reset</Button>
                </Box>

                {/* Record count */}
                <Typography variant="caption" sx={{ color: '#888', mt: 1, display: 'block' }}>
                  Showing {filteredData.length} of {allData.length} records
                </Typography>
              </Box>

              {loading && (
                <Typography sx={{ color: '#888', mb: 2 }}>Loading...</Typography>
              )}

              {/* ── Table ── */}
              <TableContainer>
                <Table>
                  <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Payment No</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Bank</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {filteredData.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} align="center" sx={{ py: 4, color: '#888' }}>
                          No records found for the selected filters.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredData.map((row, index) => (
                        <TableRow key={row.id} hover>
                          <TableCell>{row.payment_number}</TableCell>
                          <TableCell>{row.bank_description}</TableCell>
                          <TableCell>
                            {new Date(row.created_at).toLocaleDateString('en-GB', {
                              day: '2-digit', month: 'short', year: 'numeric',
                            })}
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={row.status}
                              size="small"
                              sx={{
                                bgcolor: row.status === 'Draft' ? '#FFF3E0' : '#E8F5E9',
                                color:   row.status === 'Draft' ? '#F97316' : '#4CAF50',
                                fontWeight: 500,
                                fontSize: '0.75rem',
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <IconButton size="small" onClick={(e) => handleMenuOpen(e, index)}>
                              <MoreVertIcon fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* ── Action Menu ── */}
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItemComponent onClick={handleView}>
                  <ViewIcon sx={{ fontSize: 18, mr: 1 }} /> View
                </MenuItemComponent>
                <MenuItemComponent onClick={handleDelete} sx={{ color: '#EF5350' }}>
                  <DeleteIcon sx={{ fontSize: 18, mr: 1 }} /> Delete
                </MenuItemComponent>
              </Menu>

            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}