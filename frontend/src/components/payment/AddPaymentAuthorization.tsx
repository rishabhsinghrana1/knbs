// // // // 'use client'

// // // // import React, { useState } from 'react'
// // // // import {
// // // //     Box,
// // // //     Paper,
// // // //     Typography,
// // // //     TextField,
// // // //     MenuItem,
// // // //     Button,
// // // //     Table,
// // // //     TableBody,
// // // //     TableCell,
// // // //     TableHead,
// // // //     TableRow
// // // // } from '@mui/material'
// // // // import * as XLSX from 'xlsx'
// // // // import Sidebar from '../main/Sidebar'
// // // // import Header from '../main/Header'
// // // // import Breadcrumbs from '@mui/material/Breadcrumbs'
// // // // import Link from '@mui/material/Link'
// // // // import NavigateNextIcon from '@mui/icons-material/NavigateNext'
// // // // interface RowData {
// // // //     debtorCode: string
// // // //     debtorName: string
// // // //     glAccount: string
// // // //     accountName: string
// // // //     amount: number
// // // //     requestNo: string
// // // //     requestLine: string
// // // // }

// // // // export default function PaymentAuthorizationPage() {
// // // //     const [rows, setRows] = useState<RowData[]>([])
// // // //     const [selectedMenu, setSelectedMenu] = useState('Payment Authorization')

// // // //     const handleExcelImport = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //         const file = e.target.files?.[0]
// // // //         if (!file) return

// // // //         const reader = new FileReader()
// // // //         reader.onload = (evt) => {
// // // //             const data = evt.target?.result
// // // //             const workbook = XLSX.read(data, { type: 'binary' })
// // // //             const sheet = workbook.Sheets[workbook.SheetNames[0]]
// // // //             const jsonData: any[] = XLSX.utils.sheet_to_json(sheet)

// // // //             setRows(
// // // //                 jsonData.map((item) => ({
// // // //                     debtorCode: item['Debtor Code'] || '',
// // // //                     debtorName: item['Debtor Name'] || '',
// // // //                     glAccount: item['GL Account'] || '',
// // // //                     accountName: item['Account Name'] || '',
// // // //                     amount: item['Amount Approved'] || 0,
// // // //                     requestNo: item['Request No'] || '',
// // // //                     requestLine: item['Request Line'] || '',
// // // //                 }))
// // // //             )
// // // //         }

// // // //         reader.readAsBinaryString(file)
// // // //     }

// // // //     return (
// // // //         <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
// // // //             {/* Sidebar */}
// // // //             <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

// // // //             {/* Main Content */}
// // // //             <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
// // // //                 {/* <Header /> */}

// // // //                 {/* Page Body */}
// // // //                 <Box sx={{ p: 3, overflow: 'auto' }}>

// // // //                     <Breadcrumbs
// // // //                         separator={<NavigateNextIcon fontSize="small" />}
// // // //                         sx={{ mb: 2 }}
// // // //                     >
// // // //                         <Link
// // // //                             underline="hover"
// // // //                             color="inherit"
// // // //                             href="/payament/payment_authorization"
// // // //                             sx={{ fontSize: '0.875rem', color: '#6B7280' }}
// // // //                         >
// // // //                             Payment authorization
// // // //                         </Link>

// // // //                         <Typography
// // // //                             sx={{ fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}
// // // //                         >
// // // //                           Add Payment authorization
// // // //                         </Typography>
// // // //                     </Breadcrumbs>


// // // //                     <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
// // // //                         Payment authorization
// // // //                     </Typography>

// // // //                     <Paper sx={{ p: 3, borderRadius: 2 }}>
// // // //                         <Typography fontWeight={600}>Manage your payments</Typography>
// // // //                         <Typography variant="body2" color="text.secondary" mb={3}>
// // // //                             Start adding information
// // // //                         </Typography>

// // // //                         {/* Filters */}
// // // //                         <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
// // // //                             <TextField select fullWidth size="small" label="Payment Number">
// // // //                                 <MenuItem value="num">1</MenuItem>
// // // //                             </TextField>

// // // //                             <TextField select fullWidth size="small" label="Bank in sage">
// // // //                                 <MenuItem value="new">New</MenuItem>
// // // //                             </TextField>
// // // //                         </Box>

// // // //                         {/* Import */}
// // // //                         <Button component="label" variant="outlined" sx={{ mb: 2 }}>
// // // //                             Import from Excel
// // // //                             <input hidden type="file" accept=".xlsx,.xls" onChange={handleExcelImport} />
// // // //                         </Button>

// // // //                         {/* Table */}
// // // //                         <Table size="small">
// // // //                             <TableHead>
// // // //                                 <TableRow>
// // // //                                     <TableCell>Sl. No.</TableCell>
// // // //                                     <TableCell>Debtor Code</TableCell>
// // // //                                     <TableCell>Debtor Name</TableCell>
// // // //                                     <TableCell>GL account</TableCell>
// // // //                                     <TableCell>Account Name</TableCell>
// // // //                                     <TableCell>Amount approved</TableCell>
// // // //                                     <TableCell>Request No.</TableCell>
// // // //                                     <TableCell>Request Line</TableCell>
// // // //                                 </TableRow>
// // // //                             </TableHead>
// // // //                             <TableBody>
// // // //                                 {rows.map((row, index) => (
// // // //                                     <TableRow key={index}>
// // // //                                         <TableCell>{index + 1}</TableCell>
// // // //                                         <TableCell>{row.debtorCode}</TableCell>
// // // //                                         <TableCell>{row.debtorName}</TableCell>
// // // //                                         <TableCell>{row.glAccount}</TableCell>
// // // //                                         <TableCell>{row.accountName}</TableCell>
// // // //                                         <TableCell>{row.amount}</TableCell>
// // // //                                         <TableCell>{row.requestNo}</TableCell>
// // // //                                         <TableCell>{row.requestLine}</TableCell>
// // // //                                     </TableRow>
// // // //                                 ))}
// // // //                             </TableBody>
// // // //                         </Table>

// // // //                         {/* Actions */}
// // // //                         <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
// // // //                             <Button variant="outlined">Save</Button>
// // // //                             <Button variant="contained" sx={{ bgcolor: '#F97316' }}>
// // // //                                 Process Batch
// // // //                             </Button>
// // // //                         </Box>
// // // //                     </Paper>
// // // //                 </Box>
// // // //             </Box>
// // // //         </Box>
// // // //     )
// // // // }

// // // // 'use client'

// // // // import React, { useState, useEffect } from 'react'
// // // // import {
// // // //     Box,
// // // //     Paper,
// // // //     Typography,
// // // //     TextField,
// // // //     MenuItem,
// // // //     Button,
// // // //     Table,
// // // //     TableBody,
// // // //     TableCell,
// // // //     TableHead,
// // // //     TableRow,
// // // //     CircularProgress
// // // // } from '@mui/material'
// // // // import * as XLSX from 'xlsx'
// // // // import Sidebar from '../main/Sidebar'
// // // // import Breadcrumbs from '@mui/material/Breadcrumbs'
// // // // import Link from '@mui/material/Link'
// // // // import NavigateNextIcon from '@mui/icons-material/NavigateNext'

// // // // interface RowData {
// // // //     debtor_code: string
// // // //     debtor_name: string
// // // //     gl_account: string
// // // //     account_name: string
// // // //     amount: number
// // // //     request_no: string
// // // //     request_line: string
// // // // }

// // // // export default function PaymentAuthorizationPage() {
// // // //     const [rows, setRows] = useState<RowData[]>([])
// // // //     const [accounts, setAccounts] = useState<any[]>([])
// // // //     const [selectedBank, setSelectedBank] = useState('')
// // // //     const [status, setStatus] = useState('Draft')
// // // //     const [selectedMenu, setSelectedMenu] = useState('Payment Authorization')
// // // //     const [loading, setLoading] = useState(false)
// // // //     const [accountLoading, setAccountLoading] = useState(false)
// // // // console.log(selectedBank,"selectedBankselectedBank");

// // // //     // ===============================
// // // //     // FETCH SAGE ACCOUNTS API
// // // //     // ===============================
// // // //     useEffect(() => {
// // // //         const fetchAccounts = async () => {
// // // //             setAccountLoading(true)
// // // //             try {
// // // //                 const res = await fetch(
// // // //                     'http://localhost:8000/api/v1/account/accounts-list/'
// // // //                 )
// // // //                 const data = await res.json()

// // // //                 const filtered = data.filter(
// // // //                     (item: any) => item.iAccountType === 1
// // // //                 )

// // // //                 setAccounts(filtered)
// // // //             } catch (error) {
// // // //                 console.error('Error fetching accounts:', error)
// // // //             } finally {
// // // //                 setAccountLoading(false)
// // // //             }
// // // //         }

// // // //         fetchAccounts()
// // // //     }, [])

// // // //     // ===============================
// // // //     // EXCEL IMPORT
// // // //     // ===============================
// // // //     const handleExcelImport = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //         const file = e.target.files?.[0]
// // // //         if (!file) return

// // // //         const reader = new FileReader()
// // // //         reader.onload = (evt) => {
// // // //             const data = evt.target?.result
// // // //             const workbook = XLSX.read(data, { type: 'binary' })
// // // //             const sheet = workbook.Sheets[workbook.SheetNames[0]]
// // // //             const jsonData: any[] = XLSX.utils.sheet_to_json(sheet)

// // // //             const formattedRows = jsonData.map((item) => ({
// // // //                 debtor_code: item['Debtor Code'] || '',
// // // //                 debtor_name: item['Debtor Name'] || '',
// // // //                 gl_account: item['GL Account'] || '',
// // // //                 account_name: item['Account Name'] || '',
// // // //                 amount: Number(item['Amount Approved']) || 0,
// // // //                 request_no: item['Request No'] || '',
// // // //                 request_line: item['Request Line'] || '',
// // // //             }))

// // // //             setRows(formattedRows)
// // // //         }

// // // //         reader.readAsBinaryString(file)
// // // //     }

// // // //     // ===============================
// // // //     // SAVE PAYMENT AUTHORIZATION
// // // //     // ===============================
// // // //     const handleSave = async () => {
// // // //         if (!selectedBank) {
// // // //             alert('Please select Bank in Sage')
// // // //             return
// // // //         }

// // // //         if (rows.length === 0) {
// // // //             alert('Please import Excel first')
// // // //             return
// // // //         }

// // // //         setLoading(true)

// // // //         const payload = {
// // // //             bank_in_sage: selectedBank,
// // // //             status: status,
// // // //             lines: rows
// // // //         }

// // // //         try {
// // // //             const response = await fetch(
// // // //                 'http://localhost:8000/api/v1/payment/payment-authorization/',
// // // //                 {
// // // //                     method: 'POST',
// // // //                     headers: {
// // // //                         'Content-Type': 'application/json'
// // // //                     },
// // // //                     body: JSON.stringify(payload)
// // // //                 }
// // // //             )

// // // //             const data = await response.json()

// // // //             if (response.ok) {
// // // //                 alert(`Created Successfully ✅ Payment No: ${data.payment_number}`)
// // // //                 setRows([])
// // // //                 setSelectedBank('')
// // // //             } else {
// // // //                 console.error(data)
// // // //                 alert('Error creating payment authorization')
// // // //             }
// // // //         } catch (error) {
// // // //             console.error(error)
// // // //             alert('Server error')
// // // //         } finally {
// // // //             setLoading(false)
// // // //         }
// // // //     }

// // // //     return (
// // // //         <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
// // // //             <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

// // // //             <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
// // // //                 <Box sx={{ p: 3, overflow: 'auto' }}>
// // // //                     <Breadcrumbs
// // // //                         separator={<NavigateNextIcon fontSize="small" />}
// // // //                         sx={{ mb: 2 }}
// // // //                     >
// // // //                         <Link
// // // //                             underline="hover"
// // // //                             color="inherit"
// // // //                             href="/payament/payment_authorization"
// // // //                             sx={{ fontSize: '0.875rem', color: '#6B7280' }}
// // // //                         >
// // // //                             Payment authorization
// // // //                         </Link>

// // // //                         <Typography
// // // //                             sx={{ fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}
// // // //                         >
// // // //                             Add Payment authorization
// // // //                         </Typography>
// // // //                     </Breadcrumbs>

// // // //                     <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
// // // //                         Payment authorization
// // // //                     </Typography>

// // // //                     <Paper sx={{ p: 3, borderRadius: 2 }}>
// // // //                         <Typography fontWeight={600}>Manage your payments</Typography>
// // // //                         <Typography variant="body2" color="text.secondary" mb={3}>
// // // //                             Start adding information
// // // //                         </Typography>

// // // //                         {/* Bank Dropdown */}
// // // //                         <TextField
// // // //                             select
// // // //                             fullWidth
// // // //                             size="small"
// // // //                             label="Bank in Sage"
// // // //                             value={selectedBank}
// // // //                             onChange={(e) => setSelectedBank(e.target.value)}
// // // //                             sx={{ mb: 2 }}
// // // //                         >
// // // //                             {accountLoading ? (
// // // //                                 <MenuItem disabled>
// // // //                                     <CircularProgress size={20} />
// // // //                                 </MenuItem>
// // // //                             ) : (
// // // //                                 accounts.map((account) => (
// // // //                                     <MenuItem
// // // //                                         key={account.AccountLink}
// // // //                                         value={account.AccountLink}
// // // //                                     >
// // // //                                         {account.Description}
// // // //                                     </MenuItem>
// // // //                                 ))
// // // //                             )}
// // // //                         </TextField>

// // // //                         {/* Status */}
// // // //                         <TextField
// // // //                             select
// // // //                             fullWidth
// // // //                             size="small"
// // // //                             label="Status"
// // // //                             value={status}
// // // //                             onChange={(e) => setStatus(e.target.value)}
// // // //                             sx={{ mb: 2 }}
// // // //                         >
// // // //                             <MenuItem value="Draft">Draft</MenuItem>
// // // //                             <MenuItem value="Processed">Processed</MenuItem>
// // // //                         </TextField>

// // // //                         {/* Import Button */}
// // // //                         <Button component="label" variant="outlined" sx={{ mb: 2 }}>
// // // //                             Import from Excel
// // // //                             <input hidden type="file" accept=".xlsx,.xls" onChange={handleExcelImport} />
// // // //                         </Button>

// // // //                         {/* Table */}
// // // //                         <Table size="small">
// // // //                             <TableHead>
// // // //                                 <TableRow>
// // // //                                     <TableCell>Sl. No.</TableCell>
// // // //                                     <TableCell>Debtor Code</TableCell>
// // // //                                     <TableCell>Debtor Name</TableCell>
// // // //                                     <TableCell>GL Account</TableCell>
// // // //                                     <TableCell>Account Name</TableCell>
// // // //                                     <TableCell>Amount Approved</TableCell>
// // // //                                     <TableCell>Request No.</TableCell>
// // // //                                     <TableCell>Request Line</TableCell>
// // // //                                 </TableRow>
// // // //                             </TableHead>
// // // //                             <TableBody>
// // // //                                 {rows.map((row, index) => (
// // // //                                     <TableRow key={index}>
// // // //                                         <TableCell>{index + 1}</TableCell>
// // // //                                         <TableCell>{row.debtor_code}</TableCell>
// // // //                                         <TableCell>{row.debtor_name}</TableCell>
// // // //                                         <TableCell>{row.gl_account}</TableCell>
// // // //                                         <TableCell>{row.account_name}</TableCell>
// // // //                                         <TableCell>{row.amount}</TableCell>
// // // //                                         <TableCell>{row.request_no}</TableCell>
// // // //                                         <TableCell>{row.request_line}</TableCell>
// // // //                                     </TableRow>
// // // //                                 ))}
// // // //                             </TableBody>
// // // //                         </Table>

// // // //                         {/* Buttons */}
// // // //                         <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
// // // //                             <Button
// // // //                                 variant="outlined"
// // // //                                 onClick={handleSave}
// // // //                                 disabled={loading}
// // // //                             >
// // // //                                 {loading ? 'Saving...' : 'Save'}
// // // //                             </Button>

// // // //                             <Button
// // // //                                 variant="contained"
// // // //                                 sx={{ bgcolor: '#F97316' }}
// // // //                                 disabled
// // // //                             >
// // // //                                 Process Batch
// // // //                             </Button>
// // // //                         </Box>
// // // //                     </Paper>
// // // //                 </Box>
// // // //             </Box>
// // // //         </Box>
// // // //     )
// // // // }

// // // 'use client'

// // // import React, { useState, useEffect } from 'react'
// // // import {
// // //     Box,
// // //     Paper,
// // //     Typography,
// // //     TextField,
// // //     MenuItem,
// // //     Button,
// // //     Table,
// // //     TableBody,
// // //     TableCell,
// // //     TableHead,
// // //     TableRow,
// // //     CircularProgress,
// // //     IconButton,
// // //     Breadcrumbs,
// // // } from '@mui/material'
// // // import DeleteIcon from '@mui/icons-material/Delete'
// // // import * as XLSX from 'xlsx'
// // // import Sidebar from '../main/Sidebar'
// // // import Link from '@mui/material/Link'
// // // import NavigateNextIcon from '@mui/icons-material/NavigateNext'
// // // interface RowData {
// // //     imprest_id: string
// // //     debtor_code: string
// // //     debtor_name: string
// // //     gl_account: string
// // //     account_name: string
// // //     amount: number
// // //     request_no: string
// // //     request_line: string
// // // }

// // // export default function PaymentAuthorizationPage() {

// // //     const [rows, setRows] = useState<RowData[]>([])
// // //     const [accounts, setAccounts] = useState<any[]>([])
// // //     const [imprests, setImprests] = useState<any[]>([])

// // //     const [selectedBank, setSelectedBank] = useState('')
// // //     const [status, setStatus] = useState('Draft')

// // //     const [loading, setLoading] = useState(false)
// // //     const [accountLoading, setAccountLoading] = useState(false)

// // //     // ===============================
// // //     // FETCH BANK ACCOUNTS
// // //     // ===============================
// // //     useEffect(() => {
// // //         const fetchAccounts = async () => {
// // //             setAccountLoading(true)
// // //             try {
// // //                 const res = await fetch(
// // //                     'http://localhost:8000/api/v1/account/accounts-list/'
// // //                 )
// // //                 const data = await res.json()
// // //                 const filtered = data.filter(
// // //                     (item: any) => item.iAccountType === 1
// // //                 )
// // //                 setAccounts(filtered)
// // //             } catch (error) {
// // //                 console.error(error)
// // //             } finally {
// // //                 setAccountLoading(false)
// // //             }
// // //         }

// // //         fetchAccounts()
// // //     }, [])

// // //     // ===============================
// // //     // FETCH IMPREST LIST
// // //     // ===============================
// // //     useEffect(() => {
// // //         const fetchImprests = async () => {
// // //             try {
// // //                 const res = await fetch(
// // //                     'http://localhost:8000/api/v1/imprest/'
// // //                 )
// // //                 const data = await res.json()
// // //                 setImprests(data)
// // //             } catch (err) {
// // //                 console.error(err)
// // //             }
// // //         }

// // //         fetchImprests()
// // //     }, [])

// // //     // ===============================
// // //     // ADD MANUAL ROW
// // //     // ===============================
// // //     const handleAddRow = () => {
// // //         setRows([
// // //             ...rows,
// // //             {
// // //                 imprest_id: '',
// // //                 debtor_code: '',
// // //                 debtor_name: '',
// // //                 gl_account: '',
// // //                 account_name: '',
// // //                 amount: 0,
// // //                 request_no: '',
// // //                 request_line: ''
// // //             }
// // //         ])
// // //     }

// // //     // ===============================
// // //     // DELETE ROW
// // //     // ===============================
// // //     const handleDeleteRow = (index: number) => {
// // //         const updated = rows.filter((_, i) => i !== index)
// // //         setRows(updated)
// // //     }

// // //     // ===============================
// // //     // ROW CHANGE HANDLER
// // //     // ===============================
// // //     const handleRowChange = (
// // //         index: number,
// // //         field: keyof RowData,
// // //         value: any
// // //     ) => {
// // //         const updatedRows = [...rows]
// // //         updatedRows[index][field] = value
// // //         setRows(updatedRows)
// // //     }

// // //     const editableFields: (keyof RowData)[] = [
// // //         'debtor_code',
// // //         'debtor_name',
// // //         'gl_account',
// // //         'account_name',
// // //         'amount'
// // //     ]

// // //     // ===============================
// // //     // IMPREST SELECT (ROW WISE)
// // //     // ===============================
// // //     const handleImprestSelect = (index: number, imprestId: string) => {

// // //         const imprest = imprests.find(
// // //             (item) => item.imprest_id === Number(imprestId)
// // //         )

// // //         if (!imprest) return

// // //         const firstLine = imprest.request_lines?.[0]

// // //         const updatedRows = [...rows]

// // //         updatedRows[index] = {
// // //             imprest_id: imprestId,
// // //             debtor_code: firstLine?.supplier_no || '',
// // //             debtor_name: imprest.user_requested_name || '',
// // //             gl_account: firstLine?.gl_account || '',
// // //             account_name: firstLine?.account_name || '',
// // //             amount: Number(firstLine?.approved_amount || firstLine?.estimated_amount || 0),
// // //             request_no: imprest.request_no,
// // //             request_line: firstLine?.breakdown_id?.toString() || ''
// // //         }

// // //         setRows(updatedRows)
// // //     }

// // //     // ===============================
// // //     // EXCEL IMPORT
// // //     // ===============================
// // //     const handleExcelImport = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //         const file = e.target.files?.[0]
// // //         if (!file) return

// // //         const reader = new FileReader()

// // //         reader.onload = (evt) => {
// // //             const data = evt.target?.result
// // //             const workbook = XLSX.read(data, { type: 'binary' })
// // //             const sheet = workbook.Sheets[workbook.SheetNames[0]]
// // //             const jsonData: any[] = XLSX.utils.sheet_to_json(sheet)

// // //             const formattedRows = jsonData.map((item) => ({
// // //                 imprest_id: '',
// // //                 debtor_code: item['Debtor Code'] || '',
// // //                 debtor_name: item['Debtor Name'] || '',
// // //                 gl_account: item['GL Account'] || '',
// // //                 account_name: item['Account Name'] || '',
// // //                 amount: Number(item['Amount Approved']) || 0,
// // //                 request_no: item['Request No'] || '',
// // //                 request_line: item['Request Line'] || '',
// // //             }))

// // //             setRows(formattedRows)
// // //         }

// // //         reader.readAsBinaryString(file)
// // //     }

// // //     // ===============================
// // //     // SAVE
// // //     // ===============================
// // //     const handleSave = async () => {

// // //         if (!selectedBank) {
// // //             alert('Please select Bank')
// // //             return
// // //         }

// // //         if (rows.length === 0) {
// // //             alert('Please add at least one line')
// // //             return
// // //         }

// // //         setLoading(true)

// // //         const payload = {
// // //             bank_in_sage: selectedBank,
// // //             status,
// // //             lines: rows
// // //         }

// // //         try {
// // //             const response = await fetch(
// // //                 'http://localhost:8000/api/v1/payment/payment-authorization/',
// // //                 {
// // //                     method: 'POST',
// // //                     headers: { 'Content-Type': 'application/json' },
// // //                     body: JSON.stringify(payload)
// // //                 }
// // //             )

// // //             const data = await response.json()

// // //             if (response.ok) {
// // //                 alert(`Created Successfully ✅ Payment No: ${data.payment_number}`)
// // //                 setRows([])
// // //             } else {
// // //                 alert('Error saving')
// // //                 console.error(data)
// // //             }

// // //         } catch (error) {
// // //             console.error(error)
// // //             alert('Server error')
// // //         } finally {
// // //             setLoading(false)
// // //         }
// // //     }

// // //     return (
// // //         <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>

// // //             <Sidebar selectedMenu="Payment Authorization" onMenuSelect={() => { }} />

// // //             <Box sx={{ flexGrow: 1, p: 3 }}>
// // //                    <Breadcrumbs
// // //                         separator={<NavigateNextIcon fontSize="small" />}
// // //                         sx={{ mb: 2 }}
// // //                     >
// // //                         <Link
// // //                             underline="hover"
// // //                             color="inherit"
// // //                             href="/payament/payment_authorization"
// // //                             sx={{ fontSize: '0.875rem', color: '#6B7280' }}
// // //                         >
// // //                             Payment authorization
// // //                         </Link>

// // //                         <Typography
// // //                             sx={{ fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}
// // //                         >
// // //                             Add Payment authorization
// // //                         </Typography>
// // //                     </Breadcrumbs>

// // //                 <Paper sx={{ p: 3 }}>

// // //                     {/* Bank */}
// // //                     <TextField
// // //                         select
// // //                         fullWidth
// // //                         size="small"
// // //                         label="Bank in Sage"
// // //                         value={selectedBank}
// // //                         onChange={(e) => setSelectedBank(e.target.value)}
// // //                         sx={{ mb: 2 }}
// // //                     >
// // //                         {accountLoading ? (
// // //                             <MenuItem disabled>
// // //                                 <CircularProgress size={20} />
// // //                             </MenuItem>
// // //                         ) : (
// // //                             accounts.map((account) => (
// // //                                 <MenuItem
// // //                                     key={account.AccountLink}
// // //                                     value={account.AccountLink}
// // //                                 >
// // //                                     {account.Description}
// // //                                 </MenuItem>
// // //                             ))
// // //                         )}
// // //                     </TextField>

// // //                     {/* Status */}
// // //                     <TextField
// // //                         select
// // //                         fullWidth
// // //                         size="small"
// // //                         label="Status"
// // //                         value={status}
// // //                         onChange={(e) => setStatus(e.target.value)}
// // //                         sx={{ mb: 2 }}
// // //                     >
// // //                         <MenuItem value="Draft">Draft</MenuItem>
// // //                         <MenuItem value="Processed">Processed</MenuItem>
// // //                     </TextField>

// // //                     {/* Buttons */}
// // //                     <Button component="label" variant="outlined" sx={{ mb: 2 }}>
// // //                         Import from Excel
// // //                         <input hidden type="file" accept=".xlsx,.xls" onChange={handleExcelImport} />
// // //                     </Button>

// // //                     <Button
// // //                         variant="outlined"
// // //                         sx={{ mb: 2, ml: 2 }}
// // //                         onClick={handleAddRow}
// // //                     >
// // //                         Add Manual Line
// // //                     </Button>

// // //                     {/* TABLE */}
// // //                     <Table size="small">
// // //                         <TableHead>
// // //                             <TableRow>
// // //                                 <TableCell>Sl</TableCell>
// // //                                 <TableCell>Imprest No</TableCell>
// // //                                 <TableCell>Debtor Code</TableCell>
// // //                                 <TableCell>Debtor Name</TableCell>
// // //                                 <TableCell>GL Account</TableCell>
// // //                                 <TableCell>Account Name</TableCell>
// // //                                 <TableCell>Amount</TableCell>
// // //                                 <TableCell>Request No</TableCell>
// // //                                 <TableCell>Request Line</TableCell>
// // //                                 <TableCell>Action</TableCell>
// // //                             </TableRow>
// // //                         </TableHead>

// // //                         <TableBody>
// // //                             {rows.map((row, index) => (
// // //                                 <TableRow key={index}>

// // //                                     <TableCell>{index + 1}</TableCell>

// // //                                     {/* Imprest Select */}
// // //                                     <TableCell>
// // //                                         <TextField
// // //                                             select
// // //                                             size="small"
// // //                                             value={row.imprest_id}
// // //                                             onChange={(e) =>
// // //                                                 handleImprestSelect(index, e.target.value)
// // //                                             }
// // //                                         >
// // //                                             {imprests.map((imp) => (
// // //                                                 <MenuItem
// // //                                                     key={imp.imprest_id}
// // //                                                     value={imp.imprest_id}
// // //                                                 >
// // //                                                     {imp.request_no}
// // //                                                 </MenuItem>
// // //                                             ))}
// // //                                         </TextField>
// // //                                     </TableCell>

// // //                                     {/* Editable Fields */}
// // //                                     {editableFields.map((field) => (
// // //                                         <TableCell key={field}>
// // //                                             <TextField
// // //                                                 size="small"
// // //                                                 type={field === 'amount' ? 'number' : 'text'}
// // //                                                 value={row[field]}
// // //                                                 onChange={(e) =>
// // //                                                     handleRowChange(
// // //                                                         index,
// // //                                                         field,
// // //                                                         field === 'amount'
// // //                                                             ? Number(e.target.value)
// // //                                                             : e.target.value
// // //                                                     )
// // //                                                 }
// // //                                             />
// // //                                         </TableCell>
// // //                                     ))}
// // //                                     <TableCell>{row.request_no}</TableCell>
// // //                                     <TableCell>{row.request_line}</TableCell>

// // //                                     <TableCell>
// // //                                         <IconButton
// // //                                             color="error"
// // //                                             onClick={() => handleDeleteRow(index)}
// // //                                         >
// // //                                             <DeleteIcon />
// // //                                         </IconButton>
// // //                                     </TableCell>

// // //                                 </TableRow>
// // //                             ))}
// // //                         </TableBody>
// // //                     </Table>

// // //                     {/* SAVE */}
// // //                     <Box sx={{ textAlign: 'right', mt: 3 }}>
// // //                         <Button
// // //                             variant="contained"
// // //                             onClick={handleSave}
// // //                             disabled={loading}
// // //                         >
// // //                             {loading ? 'Saving...' : 'Save'}
// // //                         </Button>
// // //                     </Box>

// // //                 </Paper>
// // //             </Box>
// // //         </Box>
// // //     )
// // // }

// // 'use client'

// // import React, { useState, useEffect } from 'react'
// // import {
// //     Box, Paper, Typography, TextField, MenuItem, Button,
// //     Table, TableBody, TableCell, TableHead, TableRow,
// //     CircularProgress, IconButton, Breadcrumbs, Alert,
// // } from '@mui/material'
// // import DeleteIcon from '@mui/icons-material/Delete'
// // import * as XLSX from 'xlsx'
// // import Sidebar from '../main/Sidebar'
// // import Link from '@mui/material/Link'
// // import NavigateNextIcon from '@mui/icons-material/NavigateNext'
// // import { useRouter } from 'next/navigation'

// // const PAYMENT_ALLOWED_ROLES = ['Admin', 'Finance', 'Finance Manager', 'Director']

// // // In statuses mein jo line hai wo "used" maani jayegi (Docs B.c)
// // const ACTIVE_PAYMENT_STATUSES = ['Draft', 'Submitted', 'FinanceApproved', 'Completed']

// // interface RowData {
// //     imprest_id: string
// //     imprest_line_id: string  // breakdown_id
// //     debtor_code: string
// //     debtor_name: string
// //     gl_account: string
// //     account_name: string
// //     amount: number
// //     request_no: string
// //     request_line: string
// // }

// // export default function AddPaymentPage() {
// //     const router = useRouter()

// //     const [rows,           setRows]           = useState<RowData[]>([])
// //     const [accounts,       setAccounts]       = useState<any[]>([])
// //     const [imprests,       setImprests]       = useState<any[]>([])       // sab imprests
// //     const [usedLineIds,    setUsedLineIds]    = useState<Set<string>>(new Set()) // payment table se used breakdown_ids

// //     const [selectedBank,   setSelectedBank]   = useState('')
// //     const [loading,        setLoading]        = useState(false)
// //     const [accountLoading, setAccountLoading] = useState(false)
// //     const [dataLoading,    setDataLoading]    = useState(true)
// //     const [errorMsg,       setErrorMsg]       = useState('')

// //     const [allowed,        setAllowed]        = useState(false)
// //     const [userChecked,    setUserChecked]    = useState(false)

// //     // ── LocalStorage se role check
// //     useEffect(() => {
// //         try {
// //             const raw = localStorage.getItem('user')
// //             if (raw) {
// //                 const user = JSON.parse(raw)
// //                 const roleName = user?.role_details?.role_name || ''
// //                 setAllowed(PAYMENT_ALLOWED_ROLES.includes(roleName))
// //             }
// //         } catch (e) { console.error(e) }
// //         finally { setUserChecked(true) }
// //     }, [])

// //     // ── Bank accounts fetch
// //     useEffect(() => {
// //         const fetchAccounts = async () => {
// //             setAccountLoading(true)
// //             try {
// //                 const res  = await fetch('http://localhost:8000/api/v1/account/accounts-list/')
// //                 const data = await res.json()
// //                 setAccounts(data.filter((item: any) => item.iAccountType === 1))
// //             } catch (e) { console.error(e) }
// //             finally { setAccountLoading(false) }
// //         }
// //         fetchAccounts()
// //     }, [])

// //     // ── Imprests + Payments dono fetch
// //     useEffect(() => {
// //         const fetchData = async () => {
// //             setDataLoading(true)
// //             try {
// //                 // 1. Sab imprests — koi status filter nahi
// //                 const impRes  = await fetch('http://localhost:8000/api/v1/imprest/')
// //                 const impData = await impRes.json()
// //                 setImprests(Array.isArray(impData) ? impData : [])

// //                 // 2. Payment Authorization list — used lines nikalo
// //                 const payRes  = await fetch('http://localhost:8000/api/v1/payment/payment-authorization/')
// //                 const payData = await payRes.json()

// //                 const usedIds = new Set<string>()
// //                 if (Array.isArray(payData)) {
// //                     payData.forEach((payment: any) => {
// //                         if (ACTIVE_PAYMENT_STATUSES.includes(payment.status)) {
// //                             payment.lines?.forEach((line: any) => {
// //                                 // request_line field mein breakdown_id store hota hai
// //                                 const lid = String(
// //                                     line.request_line      ||
// //                                     line.imprest_line_id   ||
// //                                     line.breakdown_id      ||
// //                                     ''
// //                                 )
// //                                 if (lid) usedIds.add(lid)
// //                             })
// //                         }
// //                     })
// //                 }
// //                 setUsedLineIds(usedIds)

// //             } catch (e) {
// //                 console.error(e)
// //                 setErrorMsg('Data load karne mein error aaya.')
// //             } finally {
// //                 setDataLoading(false)
// //             }
// //         }
// //         fetchData()
// //     }, [])

// //     // ── Ek imprest ki lines with isUsed flag
// //     const getLines = (imprestId: string, currentRowIndex: number) => {
// //         const imprest = imprests.find((i) => String(i.imprest_id) === String(imprestId))
// //         if (!imprest) return []

// //         // Is page pe already selected lines (same imprest ki)
// //         const selectedInRows = new Set(
// //             rows
// //                 .filter((r, i) => i !== currentRowIndex && String(r.imprest_id) === String(imprestId))
// //                 .map((r) => r.imprest_line_id)
// //                 .filter(Boolean)
// //         )

// //         return (imprest.request_lines || []).map((line: any) => {
// //             const lineId = String(line.breakdown_id)
// //             return {
// //                 ...line,
// //                 isUsed: usedLineIds.has(lineId) || selectedInRows.has(lineId),
// //             }
// //         })
// //     }

// //     // ── Row add / delete
// //     const handleAddRow = () => {
// //         setRows([...rows, {
// //             imprest_id: '', imprest_line_id: '',
// //             debtor_code: '', debtor_name: '',
// //             gl_account: '', account_name: '',
// //             amount: 0, request_no: '', request_line: '',
// //         }])
// //     }

// //     const handleDeleteRow = (index: number) => setRows(rows.filter((_, i) => i !== index))

// //     // ── Imprest select → reset line
// //     const handleImprestSelect = (index: number, imprestId: string) => {
// //         const imprest = imprests.find((i) => String(i.imprest_id) === String(imprestId))
// //         const updated = [...rows]
// //         updated[index] = {
// //             ...updated[index],
// //             imprest_id:      imprestId,
// //             imprest_line_id: '',
// //             debtor_code:     '',
// //             debtor_name:     imprest?.user_requested_name || '',
// //             gl_account:      '',
// //             account_name:    '',
// //             amount:          0,
// //             request_no:      imprest?.request_no || '',
// //             request_line:    '',
// //         }
// //         setRows(updated)
// //         setErrorMsg('')
// //     }

// //     // ── Line select → auto fill
// //     const handleLineSelect = (index: number, lineId: string) => {
// //         if (usedLineIds.has(lineId)) {
// //             setErrorMsg(`Line ${lineId} pehle se kisi payment mein use ho chuki hai.`)
// //             return
// //         }
// //         const isDuplicate = rows.some(
// //             (r, i) =>
// //                 i !== index &&
// //                 String(r.imprest_id) === String(rows[index].imprest_id) &&
// //                 r.imprest_line_id === lineId
// //         )
// //         if (isDuplicate) {
// //             setErrorMsg(`Line ${lineId} is form mein pehle se select ho chuki hai.`)
// //             return
// //         }

// //         const imprest = imprests.find((i) => String(i.imprest_id) === String(rows[index].imprest_id))
// //         const line    = imprest?.request_lines?.find((l: any) => String(l.breakdown_id) === String(lineId))
// //         if (!line) return

// //         setErrorMsg('')
// //         const updated = [...rows]
// //         updated[index] = {
// //             ...updated[index],
// //             imprest_line_id: lineId,
// //             debtor_code:     line.supplier_no  || '',
// //             gl_account:      line.gl_account   || line.expense_head || '',
// //             account_name:    line.account_name || '',
// //             amount:          Number(line.approved_amount || line.estimated_amount || 0),
// //             request_line:    String(line.breakdown_id),
// //         }
// //         setRows(updated)
// //     }

// //     // ── Excel Import
// //     const handleExcelImport = (e: React.ChangeEvent<HTMLInputElement>) => {
// //         const file = e.target.files?.[0]
// //         if (!file) return
// //         const reader = new FileReader()
// //         reader.onload = (evt) => {
// //             const data     = evt.target?.result
// //             const workbook = XLSX.read(data, { type: 'binary' })
// //             const sheet    = workbook.Sheets[workbook.SheetNames[0]]
// //             const jsonData: any[] = XLSX.utils.sheet_to_json(sheet)

// //             const importErrors: string[] = []
// //             const formattedRows: RowData[] = []

// //             jsonData.forEach((item, idx) => {
// //                 const imprestId = String(item['Imprest ID'] || '')
// //                 const lineId    = String(item['Request Line'] || '')

// //                 const matchedImprest = imprests.find((i) => String(i.imprest_id) === imprestId)
// //                 if (!matchedImprest) {
// //                     importErrors.push(`Row ${idx + 2}: Imprest ID "${imprestId}" nahi mila.`)
// //                     return
// //                 }
// //                 const matchedLine = matchedImprest.request_lines?.find(
// //                     (l: any) => String(l.breakdown_id) === lineId
// //                 )
// //                 if (!matchedLine) {
// //                     importErrors.push(`Row ${idx + 2}: Line "${lineId}" nahi mili.`)
// //                     return
// //                 }
// //                 if (usedLineIds.has(lineId)) {
// //                     importErrors.push(`Row ${idx + 2}: Line "${lineId}" pehle se kisi payment mein use ho chuki hai.`)
// //                     return
// //                 }

// //                 formattedRows.push({
// //                     imprest_id:      imprestId,
// //                     imprest_line_id: lineId,
// //                     debtor_code:     item['Debtor Code']   || matchedLine.supplier_no   || '',
// //                     debtor_name:     item['Debtor Name']   || matchedImprest.user_requested_name || '',
// //                     gl_account:      item['GL Account']    || matchedLine.gl_account    || matchedLine.expense_head || '',
// //                     account_name:    item['Account Name']  || matchedLine.account_name  || '',
// //                     amount:          Number(item['Amount Approved'] || matchedLine.approved_amount || 0),
// //                     request_no:      item['Request No']    || matchedImprest.request_no || '',
// //                     request_line:    lineId,
// //                 })
// //             })

// //             if (importErrors.length > 0) setErrorMsg(importErrors.join('\n'))
// //             else setErrorMsg('')

// //             if (formattedRows.length > 0) setRows(formattedRows)
// //         }
// //         reader.readAsBinaryString(file)
// //     }

// //     // ── Validate
// //     const validate = () => {
// //         if (!selectedBank)     return 'Bank select karo.'
// //         if (rows.length === 0) return 'Kam se kam ek line add karo.'
// //         for (let i = 0; i < rows.length; i++) {
// //             if (!rows[i].imprest_id)      return `Row ${i + 1}: Imprest select karo.`
// //             if (!rows[i].imprest_line_id) return `Row ${i + 1}: Line select karo.`
// //         }
// //         return ''
// //     }

// //     const handleSaveDraft = async () => {
// //         const err = validate(); if (err) { setErrorMsg(err); return }
// //         setErrorMsg('')
// //         await savePayment('Draft')
// //     }

// //     const handleSubmit = async () => {
// //         const err = validate(); if (err) { setErrorMsg(err); return }
// //         setErrorMsg('')
// //         if (!window.confirm('Submit karna chahte ho? Status "Submitted" ho jayega.')) return
// //         await savePayment('Submitted')
// //     }

// //     const savePayment = async (statusVal: string) => {
// //         setLoading(true)
// //         try {
// //             const response = await fetch(
// //                 'http://localhost:8000/api/v1/payment/payment-authorization/',
// //                 {
// //                     method:  'POST',
// //                     headers: { 'Content-Type': 'application/json' },
// //                     body:    JSON.stringify({
// //                         bank_in_sage: selectedBank,
// //                         status:       statusVal,
// //                         lines:        rows,
// //                     }),
// //                 }
// //             )
// //             const data = await response.json()
// //             if (response.ok) {
// //                 alert(`${statusVal === 'Draft' ? 'Draft saved ✅' : 'Submitted ✅'}  Payment No: ${data.payment_number}`)
// //                 router.push('/payament/payment_authorization')
// //             } else {
// //                 setErrorMsg('Error: ' + JSON.stringify(data))
// //             }
// //         } catch (error) {
// //             setErrorMsg('Server error')
// //         } finally {
// //             setLoading(false)
// //         }
// //     }

// //     // ── Permission check
// //     if (userChecked && !allowed) {
// //         return (
// //             <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
// //                 <Sidebar selectedMenu="Payment Authorization" onMenuSelect={() => {}} />
// //                 <Box sx={{ flexGrow: 1, p: 5, textAlign: 'center' }}>
// //                     <Typography variant="h6" color="error">
// //                         Aapko Payment create karne ka permission nahi hai.
// //                     </Typography>
// //                 </Box>
// //             </Box>
// //         )
// //     }

// //     return (
// //         <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
// //             <Sidebar selectedMenu="Payment Authorization" onMenuSelect={() => {}} />

// //             <Box sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>

// //                 <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
// //                     <Link underline="hover" color="inherit"
// //                         href="/payament/payment_authorization"
// //                         sx={{ fontSize: '0.875rem', color: '#6B7280' }}>
// //                         Payment Authorization
// //                     </Link>
// //                     <Typography sx={{ fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}>
// //                         Add Payment
// //                     </Typography>
// //                 </Breadcrumbs>

// //                 <Paper sx={{ p: 3 }}>

// //                     {/* Header */}
// //                     <Box sx={{
// //                         background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
// //                         p: 2.5, borderRadius: 1, mx: -3, mt: -3, mb: 3,
// //                     }}>
// //                         <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
// //                             New Payment Authorization
// //                         </Typography>
// //                         <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)' }}>
// //                             Imprest select karo → Line select karo → Submit
// //                         </Typography>
// //                     </Box>

// //                     {errorMsg && (
// //                         <Alert severity="error" sx={{ mb: 2, whiteSpace: 'pre-line' }} onClose={() => setErrorMsg('')}>
// //                             {errorMsg}
// //                         </Alert>
// //                     )}

// //                     {dataLoading ? (
// //                         <Box sx={{ textAlign: 'center', py: 6 }}>
// //                             <CircularProgress sx={{ color: '#F97316' }} />
// //                             <Typography sx={{ mt: 2, color: '#888' }}>Data load ho raha hai...</Typography>
// //                         </Box>
// //                     ) : (
// //                         <>
// //                             {/* Bank */}
// //                             <TextField
// //                                 select fullWidth size="small" label="Bank in Sage"
// //                                 value={selectedBank}
// //                                 onChange={(e) => setSelectedBank(e.target.value)}
// //                                 sx={{ mb: 3, maxWidth: 400 }}
// //                             >
// //                                 {accountLoading
// //                                     ? <MenuItem disabled><CircularProgress size={20} /></MenuItem>
// //                                     : accounts.map((a) => (
// //                                         <MenuItem key={a.AccountLink} value={a.AccountLink}>
// //                                             {a.Description}
// //                                         </MenuItem>
// //                                     ))
// //                                 }
// //                             </TextField>

// //                             {/* Buttons */}
// //                             <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
// //                                 <Button component="label" variant="outlined" size="small">
// //                                     Import from Excel
// //                                     <input hidden type="file" accept=".xlsx,.xls" onChange={handleExcelImport} />
// //                                 </Button>
// //                                 <Button variant="outlined" size="small" onClick={handleAddRow}>
// //                                     + Add Line
// //                                 </Button>
// //                             </Box>

// //                             {/* Table */}
// //                             <Box sx={{ overflowX: 'auto' }}>
// //                                 <Table size="small">
// //                                     <TableHead sx={{ bgcolor: '#F9FAFB' }}>
// //                                         <TableRow>
// //                                             {['Sl', 'Imprest No', 'Line', 'Debtor Code', 'Debtor Name',
// //                                               'GL Account', 'Account Name', 'Amount', 'Request No', 'Action']
// //                                                 .map((h) => (
// //                                                     <TableCell key={h} sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>
// //                                                         {h}
// //                                                     </TableCell>
// //                                                 ))}
// //                                         </TableRow>
// //                                     </TableHead>
// //                                     <TableBody>
// //                                         {rows.length === 0 ? (
// //                                             <TableRow>
// //                                                 <TableCell colSpan={10} align="center" sx={{ py: 4, color: '#aaa' }}>
// //                                                     "Add Line" click karo ya Excel import karo
// //                                                 </TableCell>
// //                                             </TableRow>
// //                                         ) : rows.map((row, index) => (
// //                                             <TableRow key={index} hover>
// //                                                 <TableCell>{index + 1}</TableCell>

// //                                                 {/* Imprest dropdown */}
// //                                                 <TableCell sx={{ minWidth: 170 }}>
// //                                                     <TextField
// //                                                         select size="small" fullWidth
// //                                                         value={row.imprest_id}
// //                                                         onChange={(e) => handleImprestSelect(index, e.target.value)}
// //                                                     >
// //                                                         <MenuItem value=""><em>Select...</em></MenuItem>
// //                                                         {imprests.map((imp) => (
// //                                                             <MenuItem key={imp.imprest_id} value={String(imp.imprest_id)}>
// //                                                                 {imp.request_no}
// //                                                             </MenuItem>
// //                                                         ))}
// //                                                     </TextField>
// //                                                 </TableCell>

// //                                                 {/* Line dropdown — used lines disabled */}
// //                                                 <TableCell sx={{ minWidth: 220 }}>
// //                                                     <TextField
// //                                                         select size="small" fullWidth
// //                                                         value={row.imprest_line_id}
// //                                                         onChange={(e) => handleLineSelect(index, e.target.value)}
// //                                                         disabled={!row.imprest_id}
// //                                                     >
// //                                                         <MenuItem value=""><em>Select Line...</em></MenuItem>
// //                                                         {getLines(row.imprest_id, index).map((line: any) => (
// //                                                             <MenuItem
// //                                                                 key={line.breakdown_id}
// //                                                                 value={String(line.breakdown_id)}
// //                                                                 disabled={line.isUsed}
// //                                                                 sx={line.isUsed ? { color: '#bbb' } : {}}
// //                                                             >
// //                                                                 #{line.breakdown_id}
// //                                                                 {line.account_name ? ` · ${line.account_name}` : ''}
// //                                                                 {` · ${line.approved_amount || line.estimated_amount || 0}`}
// //                                                                 {line.isUsed ? ' — Already Used' : ''}
// //                                                             </MenuItem>
// //                                                         ))}
// //                                                     </TextField>
// //                                                 </TableCell>

// //                                                 {/* Auto-filled fields */}
// //                                                 <TableCell sx={{ fontSize: '0.82rem', color: '#555' }}>{row.debtor_code  || '—'}</TableCell>
// //                                                 <TableCell sx={{ fontSize: '0.82rem', color: '#555' }}>{row.debtor_name  || '—'}</TableCell>
// //                                                 <TableCell sx={{ fontSize: '0.82rem', color: '#555' }}>{row.gl_account   || '—'}</TableCell>
// //                                                 <TableCell sx={{ fontSize: '0.82rem', color: '#555' }}>{row.account_name || '—'}</TableCell>
// //                                                 <TableCell sx={{ fontWeight: 600 }}>
// //                                                     {row.amount ? Number(row.amount).toLocaleString() : '0'}
// //                                                 </TableCell>
// //                                                 <TableCell sx={{ fontSize: '0.82rem', color: '#555' }}>{row.request_no   || '—'}</TableCell>

// //                                                 <TableCell>
// //                                                     <IconButton color="error" size="small" onClick={() => handleDeleteRow(index)}>
// //                                                         <DeleteIcon fontSize="small" />
// //                                                     </IconButton>
// //                                                 </TableCell>
// //                                             </TableRow>
// //                                         ))}
// //                                     </TableBody>
// //                                 </Table>
// //                             </Box>

// //                             {/* Total */}
// //                             {rows.length > 0 && (
// //                                 <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, pr: 1 }}>
// //                                     <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
// //                                         Total:&nbsp;
// //                                         {rows.reduce((s, r) => s + Number(r.amount || 0), 0).toLocaleString()}
// //                                     </Typography>
// //                                 </Box>
// //                             )}

// //                             {/* Action Buttons */}
// //                             <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
// //                                 <Button variant="outlined" onClick={() => router.back()}>
// //                                     Cancel
// //                                 </Button>
// //                                 <Button
// //                                     variant="outlined" onClick={handleSaveDraft} disabled={loading}
// //                                     sx={{ borderColor: '#F97316', color: '#F97316' }}
// //                                 >
// //                                     {loading ? 'Saving...' : 'Save as Draft'}
// //                                 </Button>
// //                                 <Button
// //                                     variant="contained" onClick={handleSubmit} disabled={loading}
// //                                     sx={{ bgcolor: '#F97316', '&:hover': { bgcolor: '#e06612' } }}
// //                                 >
// //                                     {loading ? 'Submitting...' : 'Submit'}
// //                                 </Button>
// //                             </Box>
// //                         </>
// //                     )}
// //                 </Paper>
// //             </Box>
// //         </Box>
// //     )
// // }

// 'use client'

// import React, { useState, useEffect } from 'react'
// import {
//   Box, Paper, Typography, TextField, MenuItem, Button,
//   Table, TableBody, TableCell, TableHead, TableRow,
//   CircularProgress, IconButton, Breadcrumbs, Alert,
// } from '@mui/material'
// import DeleteIcon from '@mui/icons-material/Delete'
// import * as XLSX from 'xlsx'
// import Sidebar from '../main/Sidebar'
// import Link from '@mui/material/Link'
// import NavigateNextIcon from '@mui/icons-material/NavigateNext'
// import { useRouter } from 'next/navigation'
// import { getLoggedInUser, getPaymentPermissions } from './Paymentpermissions'

// // Active payment statuses — lines in these payments are considered "used"
// const ACTIVE_PAYMENT_STATUSES = ['Draft', 'Submitted', 'FinanceApproved', 'Completed']

// interface RowData {
//   imprest_id:      string
//   imprest_line_id: string  // breakdown_id
//   debtor_code:     string
//   debtor_name:     string
//   gl_account:      string
//   account_name:    string
//   amount:          number
//   request_no:      string
//   request_line:    string
// }

// const EMPTY_ROW: RowData = {
//   imprest_id: '', imprest_line_id: '',
//   debtor_code: '', debtor_name: '',
//   gl_account: '', account_name: '',
//   amount: 0, request_no: '', request_line: '',
// }

// export default function AddPaymentPage() {
//   const router = useRouter()

//   const [rows,           setRows]           = useState<RowData[]>([])
//   const [accounts,       setAccounts]       = useState<any[]>([])
//   const [imprests,       setImprests]       = useState<any[]>([])
//   const [usedLineIds,    setUsedLineIds]    = useState<Set<string>>(new Set())

//   const [selectedBank,   setSelectedBank]   = useState('')
//   const [loading,        setLoading]        = useState(false)
//   const [accountLoading, setAccountLoading] = useState(false)
//   const [dataLoading,    setDataLoading]    = useState(true)
//   const [errorMsg,       setErrorMsg]       = useState('')

//   const [userChecked,    setUserChecked]    = useState(false)

//   // ── Role-based permissions ────────────────────────────────────────────────
//   const user  = getLoggedInUser()
//   const perms = getPaymentPermissions(user)

//   useEffect(() => { setUserChecked(true) }, [])

//   // ── Fetch bank accounts ───────────────────────────────────────────────────
//   useEffect(() => {
//     const fetchAccounts = async () => {
//       setAccountLoading(true)
//       try {
//         const res  = await fetch('http://localhost:8000/api/v1/account/accounts-list/')
//         const data = await res.json()
//         setAccounts(data.filter((item: any) => item.iAccountType === 1))
//       } catch (e) {
//         console.error('Failed to fetch accounts:', e)
//       } finally {
//         setAccountLoading(false)
//       }
//     }
//     fetchAccounts()
//   }, [])

//   // ── Fetch imprests + existing payments to determine used lines ────────────
//   useEffect(() => {
//     const fetchData = async () => {
//       setDataLoading(true)
//       try {
//         // Fetch all imprests — no status filter (as per docs)
//         const impRes  = await fetch('http://localhost:8000/api/v1/imprest/')
//         const impData = await impRes.json()
//         setImprests(Array.isArray(impData) ? impData : [])

//         // Fetch existing payments to find already-used breakdown IDs
//         const payRes  = await fetch('http://localhost:8000/api/v1/payment/payment-authorization/')
//         const payData = await payRes.json()

//         const usedIds = new Set<string>()
//         if (Array.isArray(payData)) {
//           payData.forEach((payment: any) => {
//             if (ACTIVE_PAYMENT_STATUSES.includes(payment.status)) {
//               payment.lines?.forEach((line: any) => {
//                 const lid = String(line.request_line || line.imprest_line_id || line.breakdown_id || '')
//                 if (lid) usedIds.add(lid)
//               })
//             }
//           })
//         }
//         setUsedLineIds(usedIds)

//       } catch (e) {
//         console.error('Failed to load data:', e)
//         setErrorMsg('Failed to load data. Please refresh.')
//       } finally {
//         setDataLoading(false)
//       }
//     }
//     fetchData()
//   }, [])

//   // ── Get lines for a given imprest, marking already-used ones ─────────────
//   const getLines = (imprestId: string, currentRowIndex: number) => {
//     const imprest = imprests.find((i) => String(i.imprest_id) === String(imprestId))
//     if (!imprest) return []

//     // Lines already selected in other rows of this form (same imprest)
//     const selectedInOtherRows = new Set(
//       rows
//         .filter((r, i) => i !== currentRowIndex && String(r.imprest_id) === String(imprestId))
//         .map((r) => r.imprest_line_id)
//         .filter(Boolean)
//     )

//     return (imprest.request_lines || []).map((line: any) => {
//       const lineId = String(line.breakdown_id)
//       return {
//         ...line,
//         isUsed: usedLineIds.has(lineId) || selectedInOtherRows.has(lineId),
//       }
//     })
//   }

//   // ── Add / remove rows ─────────────────────────────────────────────────────
//   const handleAddRow    = () => setRows([...rows, { ...EMPTY_ROW }])
//   const handleDeleteRow = (index: number) => setRows(rows.filter((_, i) => i !== index))

//   // ── Imprest selected — reset line fields, prefill name + request_no ───────
//   const handleImprestSelect = (index: number, imprestId: string) => {
//     const imprest = imprests.find((i) => String(i.imprest_id) === String(imprestId))
//     const updated = [...rows]
//     updated[index] = {
//       ...EMPTY_ROW,
//       imprest_id:  imprestId,
//       debtor_name: imprest?.user_requested_name || '',
//       request_no:  imprest?.request_no          || '',
//     }
//     setRows(updated)
//     setErrorMsg('')
//   }

//   // ── Line selected — auto-fill fields from that breakdown line ─────────────
//   const handleLineSelect = (index: number, lineId: string) => {
//     // Block if line is already used in an existing payment
//     if (usedLineIds.has(lineId)) {
//       setErrorMsg(`Line #${lineId} is already used in another payment.`)
//       return
//     }

//     // Block if line is selected in another row of this form
//     const isDuplicate = rows.some(
//       (r, i) =>
//         i !== index &&
//         String(r.imprest_id) === String(rows[index].imprest_id) &&
//         r.imprest_line_id === lineId
//     )
//     if (isDuplicate) {
//       setErrorMsg(`Line #${lineId} is already selected in another row.`)
//       return
//     }

//     const imprest = imprests.find((i) => String(i.imprest_id) === String(rows[index].imprest_id))
//     const line    = imprest?.request_lines?.find((l: any) => String(l.breakdown_id) === String(lineId))
//     if (!line) return

//     setErrorMsg('')
//     const updated = [...rows]
//     updated[index] = {
//       ...updated[index],
//       imprest_line_id: lineId,
//       debtor_code:     line.supplier_no  || '',
//       gl_account:      line.gl_account   || line.expense_head || '',
//       account_name:    line.account_name || '',
//       amount:          Number(line.approved_amount || line.estimated_amount || 0),
//       request_line:    String(line.breakdown_id),
//     }
//     setRows(updated)
//   }

//   // ── Excel import with validation ──────────────────────────────────────────
//   const handleExcelImport = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (!file) return
//     const reader = new FileReader()
//     reader.onload = (evt) => {
//       const workbook = XLSX.read(evt.target?.result, { type: 'binary' })
//       const sheet    = workbook.Sheets[workbook.SheetNames[0]]
//       const jsonData: any[] = XLSX.utils.sheet_to_json(sheet)

//       const importErrors: string[] = []
//       const formattedRows: RowData[] = []

//       jsonData.forEach((item, idx) => {
//         const imprestId = String(item['Imprest ID']   || '')
//         const lineId    = String(item['Request Line'] || '')

//         const matchedImprest = imprests.find((i) => String(i.imprest_id) === imprestId)
//         if (!matchedImprest) {
//           importErrors.push(`Row ${idx + 2}: Imprest ID "${imprestId}" not found.`)
//           return
//         }

//         const matchedLine = matchedImprest.request_lines?.find(
//           (l: any) => String(l.breakdown_id) === lineId
//         )
//         if (!matchedLine) {
//           importErrors.push(`Row ${idx + 2}: Line "${lineId}" not found in this imprest.`)
//           return
//         }

//         if (usedLineIds.has(lineId)) {
//           importErrors.push(`Row ${idx + 2}: Line "${lineId}" is already used in another payment.`)
//           return
//         }

//         formattedRows.push({
//           imprest_id:      imprestId,
//           imprest_line_id: lineId,
//           debtor_code:     item['Debtor Code']    || matchedLine.supplier_no   || '',
//           debtor_name:     item['Debtor Name']    || matchedImprest.user_requested_name || '',
//           gl_account:      item['GL Account']     || matchedLine.gl_account    || matchedLine.expense_head || '',
//           account_name:    item['Account Name']   || matchedLine.account_name  || '',
//           amount:          Number(item['Amount Approved'] || matchedLine.approved_amount || 0),
//           request_no:      item['Request No']     || matchedImprest.request_no || '',
//           request_line:    lineId,
//         })
//       })

//       setErrorMsg(importErrors.length > 0 ? importErrors.join('\n') : '')
//       if (formattedRows.length > 0) setRows(formattedRows)
//     }
//     reader.readAsBinaryString(file)
//   }

//   // ── Form validation ───────────────────────────────────────────────────────
//   const validate = () => {
//     if (!selectedBank)     return 'Please select a bank.'
//     if (rows.length === 0) return 'Please add at least one line.'
//     for (let i = 0; i < rows.length; i++) {
//       if (!rows[i].imprest_id)      return `Row ${i + 1}: Please select an imprest.`
//       if (!rows[i].imprest_line_id) return `Row ${i + 1}: Please select a line.`
//     }
//     return ''
//   }

//   const handleSaveDraft = async () => {
//     const err = validate()
//     if (err) { setErrorMsg(err); return }
//     setErrorMsg('')
//     await savePayment('Draft')
//   }

//   const handleSubmit = async () => {
//     const err = validate()
//     if (err) { setErrorMsg(err); return }
//     setErrorMsg('')
//     if (!window.confirm('Submit this payment? Status will change to Submitted.')) return
//     await savePayment('Submitted')
//   }

//   const savePayment = async (statusVal: string) => {
//     setLoading(true)
//     try {
//       const response = await fetch(
//         'http://localhost:8000/api/v1/payment/payment-authorization/',
//         {
//           method:  'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body:    JSON.stringify({ bank_in_sage: selectedBank, status: statusVal, lines: rows }),
//         }
//       )
//       const data = await response.json()
//       if (response.ok) {
//         alert(`${statusVal === 'Draft' ? 'Draft saved' : 'Submitted'} successfully. Payment No: ${data.payment_number}`)
//         router.push('/payament/payment_authorization')
//       } else {
//         setErrorMsg('Error: ' + JSON.stringify(data))
//       }
//     } catch (e) {
//       setErrorMsg('Server error. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   // ── Permission guard — no create access ───────────────────────────────────
//   if (userChecked && !perms.canCreate) {
//     return (
//       <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
//         <Sidebar selectedMenu="Payment Authorization" onMenuSelect={() => {}} />
//         <Box sx={{ flexGrow: 1, p: 5 }}>
//           <Alert severity="error">You do not have permission to create payments.</Alert>
//         </Box>
//       </Box>
//     )
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
//       <Sidebar selectedMenu="Payment Authorization" onMenuSelect={() => {}} />

//       <Box sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>

//         <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
//           <Link underline="hover" color="inherit"
//             href="/payament/payment_authorization"
//             sx={{ fontSize: '0.875rem', color: '#6B7280' }}>
//             Payment Authorization
//           </Link>
//           <Typography sx={{ fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}>
//             Add Payment
//           </Typography>
//         </Breadcrumbs>

//         <Paper sx={{ p: 3 }}>

//           {/* ── Page Header ── */}
//           <Box sx={{
//             background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
//             p: 2.5, borderRadius: 1, mx: -3, mt: -3, mb: 3,
//           }}>
//             <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
//               New Payment Authorization
//             </Typography>
//             <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)' }}>
//               Select imprest → Select line → Submit
//             </Typography>
//           </Box>

//           {errorMsg && (
//             <Alert severity="error" sx={{ mb: 2, whiteSpace: 'pre-line' }} onClose={() => setErrorMsg('')}>
//               {errorMsg}
//             </Alert>
//           )}

//           {dataLoading ? (
//             <Box sx={{ textAlign: 'center', py: 6 }}>
//               <CircularProgress sx={{ color: '#F97316' }} />
//               <Typography sx={{ mt: 2, color: '#888' }}>Loading data...</Typography>
//             </Box>
//           ) : (
//             <>
//               {/* Bank selector */}
//               <TextField
//                 select fullWidth size="small" label="Bank in Sage"
//                 value={selectedBank}
//                 onChange={(e) => setSelectedBank(e.target.value)}
//                 sx={{ mb: 3, maxWidth: 400 }}
//               >
//                 {accountLoading
//                   ? <MenuItem disabled><CircularProgress size={20} /></MenuItem>
//                   : accounts.map((a) => (
//                       <MenuItem key={a.AccountLink} value={a.AccountLink}>
//                         {a.Description}
//                       </MenuItem>
//                     ))
//                 }
//               </TextField>

//               {/* Toolbar */}
//               <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
//                 <Button component="label" variant="outlined" size="small">
//                   Import from Excel
//                   <input hidden type="file" accept=".xlsx,.xls" onChange={handleExcelImport} />
//                 </Button>
//                 <Button variant="outlined" size="small" onClick={handleAddRow}>
//                   + Add Line
//                 </Button>
//               </Box>

//               {/* Lines table */}
//               <Box sx={{ overflowX: 'auto' }}>
//                 <Table size="small">
//                   <TableHead sx={{ bgcolor: '#F9FAFB' }}>
//                     <TableRow>
//                       {['Sl', 'Imprest No', 'Line', 'Debtor Code', 'Debtor Name',
//                         'GL Account', 'Account Name', 'Amount', 'Request No', 'Action']
//                         .map((h) => (
//                           <TableCell key={h} sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{h}</TableCell>
//                         ))}
//                     </TableRow>
//                   </TableHead>

//                   <TableBody>
//                     {rows.length === 0 ? (
//                       <TableRow>
//                         <TableCell colSpan={10} align="center" sx={{ py: 4, color: '#aaa' }}>
//                           Click "Add Line" or import from Excel to get started.
//                         </TableCell>
//                       </TableRow>
//                     ) : rows.map((row, index) => (
//                       <TableRow key={index} hover>
//                         <TableCell>{index + 1}</TableCell>

//                         {/* Imprest dropdown */}
//                         <TableCell sx={{ minWidth: 170 }}>
//                           <TextField
//                             select size="small" fullWidth
//                             value={row.imprest_id}
//                             onChange={(e) => handleImprestSelect(index, e.target.value)}
//                           >
//                             <MenuItem value=""><em>Select...</em></MenuItem>
//                             {imprests.map((imp) => (
//                               <MenuItem key={imp.imprest_id} value={String(imp.imprest_id)}>
//                                 {imp.request_no}
//                               </MenuItem>
//                             ))}
//                           </TextField>
//                         </TableCell>

//                         {/* Line dropdown — used lines are disabled */}
//                         <TableCell sx={{ minWidth: 220 }}>
//                           <TextField
//                             select size="small" fullWidth
//                             value={row.imprest_line_id}
//                             onChange={(e) => handleLineSelect(index, e.target.value)}
//                             disabled={!row.imprest_id}
//                           >
//                             <MenuItem value=""><em>Select line...</em></MenuItem>
//                             {getLines(row.imprest_id, index).map((line: any) => (
//                               <MenuItem
//                                 key={line.breakdown_id}
//                                 value={String(line.breakdown_id)}
//                                 disabled={line.isUsed}
//                                 sx={line.isUsed ? { color: '#bbb' } : {}}
//                               >
//                                 #{line.breakdown_id}
//                                 {line.account_name ? ` · ${line.account_name}` : ''}
//                                 {` · ${line.approved_amount || line.estimated_amount || 0}`}
//                                 {line.isUsed ? ' — Already Used' : ''}
//                               </MenuItem>
//                             ))}
//                           </TextField>
//                         </TableCell>

//                         {/* Auto-filled read-only fields */}
//                         <TableCell sx={{ fontSize: '0.82rem', color: '#555' }}>{row.debtor_code  || '—'}</TableCell>
//                         <TableCell sx={{ fontSize: '0.82rem', color: '#555' }}>{row.debtor_name  || '—'}</TableCell>
//                         <TableCell sx={{ fontSize: '0.82rem', color: '#555' }}>{row.gl_account   || '—'}</TableCell>
//                         <TableCell sx={{ fontSize: '0.82rem', color: '#555' }}>{row.account_name || '—'}</TableCell>
//                         <TableCell sx={{ fontWeight: 600 }}>
//                           {row.amount ? Number(row.amount).toLocaleString() : '0'}
//                         </TableCell>
//                         <TableCell sx={{ fontSize: '0.82rem', color: '#555' }}>{row.request_no || '—'}</TableCell>

//                         <TableCell>
//                           <IconButton color="error" size="small" onClick={() => handleDeleteRow(index)}>
//                             <DeleteIcon fontSize="small" />
//                           </IconButton>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </Box>

//               {/* Total */}
//               {rows.length > 0 && (
//                 <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, pr: 1 }}>
//                   <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
//                     Total:&nbsp;
//                     {rows.reduce((s, r) => s + Number(r.amount || 0), 0).toLocaleString()}
//                   </Typography>
//                 </Box>
//               )}

//               {/* Action buttons */}
//               <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
//                 <Button variant="outlined" onClick={() => router.back()}>
//                   Cancel
//                 </Button>
//                 <Button
//                   variant="outlined" onClick={handleSaveDraft} disabled={loading}
//                   sx={{ borderColor: '#F97316', color: '#F97316' }}
//                 >
//                   {loading ? 'Saving...' : 'Save as Draft'}
//                 </Button>
//                 {/* Submit button — only shown if user has canSubmit permission */}
//                 {perms.canSubmit && (
//                   <Button
//                     variant="contained" onClick={handleSubmit} disabled={loading}
//                     sx={{ bgcolor: '#F97316', '&:hover': { bgcolor: '#e06612' } }}
//                   >
//                     {loading ? 'Submitting...' : 'Submit'}
//                   </Button>
//                 )}
//               </Box>
//             </>
//           )}
//         </Paper>
//       </Box>
//     </Box>
//   )
// }


'use client'

import React, { useState, useEffect } from 'react'
import {
  Box, Paper, Typography, TextField, MenuItem, Button,
  Table, TableBody, TableCell, TableHead, TableRow,
  CircularProgress, IconButton, Breadcrumbs, Alert, Snackbar,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import * as XLSX from 'xlsx'
import Sidebar from '../main/Sidebar'
import Header from '../main/Header'
import Link from '@mui/material/Link'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, getPaymentPermissions } from './Paymentpermissions'

const API_BASE_URL   = 'http://localhost:8000/api/v1'
const SAGE_API_BASE  = 'http://localhost:5000/freedom.core/KNBSDEMO/sdk/rest'

// Docs: Lines in these payment statuses are considered "already used"
const ACTIVE_PAYMENT_STATUSES = ['Draft', 'Submitted', 'FinanceApproved', 'Completed']

// ─── Types ────────────────────────────────────────────────────────────────────
interface RowData {
  imprest_id:      string
  imprest_line_id: string
  debtor_code:     string
  debtor_name:     string
  gl_account:      string
  account_name:    string
  amount:          number
  request_no:      string
  request_line:    string
}

const EMPTY_ROW: RowData = {
  imprest_id: '', imprest_line_id: '',
  debtor_code: '', debtor_name: '',
  gl_account: '', account_name: '',
  amount: 0, request_no: '', request_line: '',
}

// ─── Sage date helper ─────────────────────────────────────────────────────────
const toSageDate = (date: Date = new Date()) => `/Date(${date.getTime()})/`

// ─── Sage CustomerTransactionPost per docs ────────────────────────────────────
// One call per debtor (line). Reference: <REQUEST_NO>-<REQUEST_LINE>-<PAYMENT_NO>
const postPaymentToSage = async (
  rows: RowData[],
  paymentNo: string,
  transactionCode: string = 'IMPREST'
) => {
  const dateMs = toSageDate()
  const results: { success: boolean; row: RowData; error?: any }[] = []

  for (const row of rows) {
    const reference = `${row.request_no}-${row.request_line}-${paymentNo}`
    try {
      await fetch(`${SAGE_API_BASE}/CustomerTransactionPost`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          CustomerTransactionPost: {
            Date:            dateMs,
            CustomerCode:    row.debtor_code,
            Reference:       reference,
            TransactionCode: transactionCode,
            Amount:          Number(row.amount).toFixed(2),
          },
        }),
      })
      results.push({ success: true, row })
    } catch (err) {
      results.push({ success: false, row, error: err })
    }
  }

  return results
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function AddPaymentPage() {
  const router = useRouter()

  const [rows,           setRows]           = useState<RowData[]>([])
  const [accounts,       setAccounts]       = useState<any[]>([])
  const [imprests,       setImprests]       = useState<any[]>([])
  const [usedLineIds,    setUsedLineIds]    = useState<Set<string>>(new Set())
  const [selectedBank,   setSelectedBank]   = useState('')
  const [loading,        setLoading]        = useState(false)
  const [accountLoading, setAccountLoading] = useState(false)
  const [dataLoading,    setDataLoading]    = useState(true)
  const [errorMsg,       setErrorMsg]       = useState('')
  const [userChecked,    setUserChecked]    = useState(false)
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' | 'warning' }>({
    open: false, message: '', severity: 'success',
  })

  const user  = getLoggedInUser()
  const perms = getPaymentPermissions(user)

  useEffect(() => { setUserChecked(true) }, [])

  // ── Fetch bank accounts (iAccountType === 1 = bank accounts) ──────────────
  useEffect(() => {
    const fetchAccounts = async () => {
      setAccountLoading(true)
      try {
        const res  = await fetch(`${API_BASE_URL}/account/accounts-list/`)
        const data = await res.json()
        setAccounts(data.filter((item: any) => item.iAccountType === 1))
      } catch (e) {
        console.error('Failed to fetch accounts:', e)
      } finally {
        setAccountLoading(false)
      }
    }
    fetchAccounts()
  }, [])

  // ── Fetch imprests (FinanceApproved only per docs) + existing payment lines ─
  useEffect(() => {
    const fetchData = async () => {
      setDataLoading(true)
      try {
        const impRes  = await fetch(`${API_BASE_URL}/imprest/`)
        const impData = await impRes.json()
        // Docs: Payment is made from FinanceApproved imprests
        const financeApproved = Array.isArray(impData)
          ? impData.filter((i: any) => i.status === 'FinanceApproved')
          : []
        setImprests(financeApproved)

        // Find already-used breakdown IDs from existing active payments
        const payRes  = await fetch(`${API_BASE_URL}/payment/payment-authorization/`)
        const payData = await payRes.json()
        const usedIds = new Set<string>()
        if (Array.isArray(payData)) {
          payData.forEach((payment: any) => {
            if (ACTIVE_PAYMENT_STATUSES.includes(payment.status)) {
              payment.lines?.forEach((line: any) => {
                const lid = String(line.request_line || line.imprest_line_id || line.breakdown_id || '')
                if (lid) usedIds.add(lid)
              })
            }
          })
        }
        setUsedLineIds(usedIds)
      } catch (e) {
        console.error('Failed to load data:', e)
        setErrorMsg('Failed to load data. Please refresh.')
      } finally {
        setDataLoading(false)
      }
    }
    fetchData()
  }, [])

  // ── Get lines for a given imprest ─────────────────────────────────────────
  const getLines = (imprestId: string, currentRowIndex: number) => {
    const imprest = imprests.find((i) => String(i.imprest_id) === String(imprestId))
    if (!imprest) return []

    const selectedInOtherRows = new Set(
      rows
        .filter((r, i) => i !== currentRowIndex && String(r.imprest_id) === String(imprestId))
        .map((r) => r.imprest_line_id)
        .filter(Boolean)
    )

    return (imprest.request_lines || []).map((line: any) => {
      const lineId = String(line.breakdown_id)
      return {
        ...line,
        isUsed: usedLineIds.has(lineId) || selectedInOtherRows.has(lineId),
      }
    })
  }

  // ── Add / remove rows ─────────────────────────────────────────────────────
  const handleAddRow    = () => setRows([...rows, { ...EMPTY_ROW }])
  const handleDeleteRow = (index: number) => setRows(rows.filter((_, i) => i !== index))

  // ── Imprest selected ──────────────────────────────────────────────────────
  const handleImprestSelect = (index: number, imprestId: string) => {
    const imprest = imprests.find((i) => String(i.imprest_id) === String(imprestId))
    const updated = [...rows]
    updated[index] = {
      ...EMPTY_ROW,
      imprest_id:  imprestId,
      debtor_name: imprest?.user_requested_name || '',
      request_no:  imprest?.request_no          || '',
    }
    setRows(updated)
    setErrorMsg('')
  }

  // ── Line selected ─────────────────────────────────────────────────────────
  const handleLineSelect = (index: number, lineId: string) => {
    if (usedLineIds.has(lineId)) {
      setErrorMsg(`Line #${lineId} is already used in another payment.`)
      return
    }
    const isDuplicate = rows.some(
      (r, i) =>
        i !== index &&
        String(r.imprest_id) === String(rows[index].imprest_id) &&
        r.imprest_line_id === lineId
    )
    if (isDuplicate) {
      setErrorMsg(`Line #${lineId} is already selected in another row.`)
      return
    }

    const imprest = imprests.find((i) => String(i.imprest_id) === String(rows[index].imprest_id))
    const line    = imprest?.request_lines?.find((l: any) => String(l.breakdown_id) === String(lineId))
    if (!line) return

    setErrorMsg('')
    const updated = [...rows]
    updated[index] = {
      ...updated[index],
      imprest_line_id: lineId,
      debtor_code:     line.supplier_no  || '',
      gl_account:      line.gl_account   || line.expense_head || '',
      account_name:    line.account_name || '',
      amount:          Number(line.approved_amount || line.estimated_amount || 0),
      request_line:    String(line.breakdown_id),
    }
    setRows(updated)
  }

  // ── Excel import ──────────────────────────────────────────────────────────
  const handleExcelImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (evt) => {
      const workbook = XLSX.read(evt.target?.result, { type: 'binary' })
      const sheet    = workbook.Sheets[workbook.SheetNames[0]]
      const jsonData: any[] = XLSX.utils.sheet_to_json(sheet)

      const importErrors: string[] = []
      const formattedRows: RowData[] = []

      jsonData.forEach((item, idx) => {
        const imprestId = String(item['Imprest ID']   || '')
        const lineId    = String(item['Request Line'] || '')

        const matchedImprest = imprests.find((i) => String(i.imprest_id) === imprestId)
        if (!matchedImprest) { importErrors.push(`Row ${idx + 2}: Imprest ID "${imprestId}" not found.`); return }

        const matchedLine = matchedImprest.request_lines?.find(
          (l: any) => String(l.breakdown_id) === lineId
        )
        if (!matchedLine) { importErrors.push(`Row ${idx + 2}: Line "${lineId}" not found.`); return }
        if (usedLineIds.has(lineId)) { importErrors.push(`Row ${idx + 2}: Line "${lineId}" already used.`); return }

        formattedRows.push({
          imprest_id:      imprestId,
          imprest_line_id: lineId,
          debtor_code:     item['Debtor Code']    || matchedLine.supplier_no   || '',
          debtor_name:     item['Debtor Name']    || matchedImprest.user_requested_name || '',
          gl_account:      item['GL Account']     || matchedLine.gl_account    || matchedLine.expense_head || '',
          account_name:    item['Account Name']   || matchedLine.account_name  || '',
          amount:          Number(item['Amount Approved'] || matchedLine.approved_amount || 0),
          request_no:      item['Request No']     || matchedImprest.request_no || '',
          request_line:    lineId,
        })
      })

      setErrorMsg(importErrors.length > 0 ? importErrors.join('\n') : '')
      if (formattedRows.length > 0) setRows(formattedRows)
    }
    reader.readAsBinaryString(file)
  }

  // ── Validation ────────────────────────────────────────────────────────────
  const validate = () => {
    if (!selectedBank)     return 'Please select a bank.'
    if (rows.length === 0) return 'Please add at least one line.'
    for (let i = 0; i < rows.length; i++) {
      if (!rows[i].imprest_id)      return `Row ${i + 1}: Please select an imprest.`
      if (!rows[i].imprest_line_id) return `Row ${i + 1}: Please select a line.`
      if (!rows[i].debtor_code)     return `Row ${i + 1}: Debtor code is missing.`
    }
    return ''
  }

  const handleSaveDraft = async () => {
    const err = validate()
    if (err) { setErrorMsg(err); return }
    setErrorMsg('')
    await savePayment('Draft')
  }

  const handleSubmit = async () => {
    const err = validate()
    if (err) { setErrorMsg(err); return }
    setErrorMsg('')
    if (!window.confirm('Submit this payment? Status will change to Submitted.')) return
    await savePayment('Submitted')
  }

  // ── Save payment — then post to Sage per docs ─────────────────────────────
  // Docs: one CustomerTransactionPost per debtor line
  // Reference: <REQUEST_NO>-<REQUEST_LINE>-<PAYMENT_NO>
  const savePayment = async (statusVal: string) => {
    setLoading(true)
    try {
      const response = await fetch(
        `${API_BASE_URL}/payment/payment-authorization/`,
        {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({ bank_in_sage: selectedBank, status: statusVal, lines: rows }),
        }
      )
      const data = await response.json()

      if (!response.ok) {
        setErrorMsg('Error: ' + JSON.stringify(data))
        setLoading(false)
        return
      }

      const paymentNo = data.payment_number || String(data.id)

      // Docs: When processing payment, call CustomerTransactionPost for each debtor
      // This creates a debit against each person who took money
      if (statusVal === 'Submitted') {
        try {
          const sageResults = await postPaymentToSage(rows, paymentNo)
          const failed = sageResults.filter((r) => !r.success)
          if (failed.length > 0) {
            setSnackbar({
              open: true,
              message: `Payment submitted. ${failed.length} Sage posting(s) failed — check manually.`,
              severity: 'warning',
            })
          } else {
            setSnackbar({ open: true, message: `Payment submitted & posted to Sage. No: ${paymentNo}`, severity: 'success' })
          }
        } catch (sageErr) {
          console.error('Sage posting error:', sageErr)
          setSnackbar({ open: true, message: 'Payment submitted but Sage posting failed.', severity: 'warning' })
        }
      } else {
        setSnackbar({ open: true, message: `Draft saved. Payment No: ${paymentNo}`, severity: 'success' })
      }

      setTimeout(() => router.push('/payament/payment_authorization'), 1800)
    } catch (e) {
      setErrorMsg('Server error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // ── Total ─────────────────────────────────────────────────────────────────
  const totalAmount = rows.reduce((s, r) => s + Number(r.amount || 0), 0)

  // ── Permission guard ──────────────────────────────────────────────────────
  if (userChecked && !perms.canCreate) {
    return (
      <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
        <Sidebar selectedMenu="Payment Authorization" onMenuSelect={() => {}} />
        <Box sx={{ flexGrow: 1, p: 5 }}>
          <Alert severity="error">You do not have permission to create payments.</Alert>
        </Box>
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA', overflow: 'hidden' }}>
      <Sidebar selectedMenu="Payment Authorization" onMenuSelect={() => {}} />

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
              Add Payment
            </Typography>
          </Breadcrumbs>

          <Paper sx={{ p: 3, borderRadius: 2 }}>

            {/* ── Page Header ── */}
            <Box sx={{
              background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
              p: 2.5, borderRadius: 1, mx: -3, mt: -3, mb: 3,
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                New Payment Authorization
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                Select imprest → Select line → Submit. Each line posts separately to Sage.
              </Typography>
            </Box>

            {errorMsg && (
              <Alert severity="error" sx={{ mb: 2, whiteSpace: 'pre-line' }} onClose={() => setErrorMsg('')}>
                {errorMsg}
              </Alert>
            )}

            {dataLoading ? (
              <Box sx={{ textAlign: 'center', py: 6 }}>
                <CircularProgress sx={{ color: '#F97316' }} />
                <Typography sx={{ mt: 2, color: '#888' }}>Loading data...</Typography>
              </Box>
            ) : (
              <>
                {/* Bank selector */}
                <TextField
                  select fullWidth size="small" label="Bank in Sage *"
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  sx={{ mb: 3, maxWidth: 400 }}
                >
                  {accountLoading
                    ? <MenuItem disabled><CircularProgress size={20} /></MenuItem>
                    : accounts.map((a) => (
                        <MenuItem key={a.AccountLink} value={a.AccountLink}>
                          {a.Description}
                        </MenuItem>
                      ))
                  }
                </TextField>

                {/* Toolbar */}
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Button component="label" variant="outlined" size="small" sx={{ textTransform: 'none' }}>
                    Import from Excel
                    <input hidden type="file" accept=".xlsx,.xls" onChange={handleExcelImport} />
                  </Button>
                  <Button
                    variant="outlined" size="small"
                    sx={{ textTransform: 'none', borderColor: '#FF6B35', color: '#FF6B35' }}
                    onClick={handleAddRow}
                  >
                    + Add Line
                  </Button>
                </Box>

                {/* Lines table */}
                <Box sx={{ overflowX: 'auto', border: '1px solid #E5E7EB', borderRadius: 2 }}>
                  <Table size="small" sx={{ minWidth: 1100 }}>
                    <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                      <TableRow>
                        {['Sl', 'Imprest No', 'Line', 'Debtor Code', 'Debtor Name',
                          'GL Account', 'Account Name', 'Amount', 'Request No', 'Action']
                          .map((h) => (
                            <TableCell key={h} sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{h}</TableCell>
                          ))}
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {rows.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={10} align="center" sx={{ py: 4, color: '#aaa' }}>
                            Click "+ Add Line" or import from Excel to get started.
                          </TableCell>
                        </TableRow>
                      ) : rows.map((row, index) => (
                        <TableRow key={index} hover>
                          <TableCell>{index + 1}</TableCell>

                          {/* Imprest dropdown */}
                          <TableCell sx={{ minWidth: 170 }}>
                            <TextField
                              select size="small" fullWidth
                              value={row.imprest_id}
                              onChange={(e) => handleImprestSelect(index, e.target.value)}
                            >
                              <MenuItem value=""><em>Select...</em></MenuItem>
                              {imprests.map((imp) => (
                                <MenuItem key={imp.imprest_id} value={String(imp.imprest_id)}>
                                  {imp.request_no}
                                </MenuItem>
                              ))}
                            </TextField>
                          </TableCell>

                          {/* Line dropdown — used lines disabled */}
                          <TableCell sx={{ minWidth: 230 }}>
                            <TextField
                              select size="small" fullWidth
                              value={row.imprest_line_id}
                              onChange={(e) => handleLineSelect(index, e.target.value)}
                              disabled={!row.imprest_id}
                            >
                              <MenuItem value=""><em>Select line...</em></MenuItem>
                              {getLines(row.imprest_id, index).map((line: any) => (
                                <MenuItem
                                  key={line.breakdown_id}
                                  value={String(line.breakdown_id)}
                                  disabled={line.isUsed}
                                  sx={line.isUsed ? { color: '#bbb' } : {}}
                                >
                                  #{line.breakdown_id}
                                  {line.account_name ? ` · ${line.account_name}` : ''}
                                  {` · ${line.approved_amount || line.estimated_amount || 0}`}
                                  {line.isUsed ? ' — Used' : ''}
                                </MenuItem>
                              ))}
                            </TextField>
                          </TableCell>

                          {/* Auto-filled read-only fields */}
                          <TableCell sx={{ fontSize: '0.82rem', color: '#555', whiteSpace: 'nowrap' }}>{row.debtor_code  || '—'}</TableCell>
                          <TableCell sx={{ fontSize: '0.82rem', color: '#555', whiteSpace: 'nowrap' }}>{row.debtor_name  || '—'}</TableCell>
                          <TableCell sx={{ fontSize: '0.82rem', color: '#555', whiteSpace: 'nowrap' }}>{row.gl_account   || '—'}</TableCell>
                          <TableCell sx={{ fontSize: '0.82rem', color: '#555', whiteSpace: 'nowrap' }}>{row.account_name || '—'}</TableCell>
                          <TableCell sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>
                            {row.amount ? Number(row.amount).toLocaleString('en-US', { minimumFractionDigits: 2 }) : '0.00'}
                          </TableCell>
                          <TableCell sx={{ fontSize: '0.82rem', color: '#555' }}>{row.request_no || '—'}</TableCell>

                          <TableCell>
                            <IconButton color="error" size="small" onClick={() => handleDeleteRow(index)}>
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>

                {/* Total */}
                {rows.length > 0 && (
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, pr: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Total:&nbsp;
                      {totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </Typography>
                  </Box>
                )}

                {/* Action buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                  <Button variant="outlined" onClick={() => router.back()} sx={{ textTransform: 'none' }}>
                    Cancel
                  </Button>
                  <Button
                    variant="outlined" onClick={handleSaveDraft} disabled={loading}
                    sx={{ borderColor: '#F97316', color: '#F97316', textTransform: 'none' }}
                  >
                    {loading ? 'Saving...' : 'Save as Draft'}
                  </Button>
                  {perms.canSubmit && (
                    <Button
                      variant="contained" onClick={handleSubmit} disabled={loading}
                      sx={{ bgcolor: '#F97316', '&:hover': { bgcolor: '#e06612' }, textTransform: 'none' }}
                    >
                      {loading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : 'Submit'}
                    </Button>
                  )}
                </Box>
              </>
            )}
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