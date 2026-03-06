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

//                     <Breadcrumbs
//                         separator={<NavigateNextIcon fontSize="small" />}
//                         sx={{ mb: 2 }}
//                     >
//                         <Link
//                             underline="hover"
//                             color="inherit"
//                             href="/payament/payment_authorization"
//                             sx={{ fontSize: '0.875rem', color: '#6B7280' }}
//                         >
//                             Payment authorization
//                         </Link>

//                         <Typography
//                             sx={{ fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}
//                         >
//                           Add Payment authorization
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

// import React, { useState, useEffect } from 'react'
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
//     TableRow,
//     CircularProgress
// } from '@mui/material'
// import * as XLSX from 'xlsx'
// import Sidebar from '../main/Sidebar'
// import Breadcrumbs from '@mui/material/Breadcrumbs'
// import Link from '@mui/material/Link'
// import NavigateNextIcon from '@mui/icons-material/NavigateNext'

// interface RowData {
//     debtor_code: string
//     debtor_name: string
//     gl_account: string
//     account_name: string
//     amount: number
//     request_no: string
//     request_line: string
// }

// export default function PaymentAuthorizationPage() {
//     const [rows, setRows] = useState<RowData[]>([])
//     const [accounts, setAccounts] = useState<any[]>([])
//     const [selectedBank, setSelectedBank] = useState('')
//     const [status, setStatus] = useState('Draft')
//     const [selectedMenu, setSelectedMenu] = useState('Payment Authorization')
//     const [loading, setLoading] = useState(false)
//     const [accountLoading, setAccountLoading] = useState(false)
// console.log(selectedBank,"selectedBankselectedBank");

//     // ===============================
//     // FETCH SAGE ACCOUNTS API
//     // ===============================
//     useEffect(() => {
//         const fetchAccounts = async () => {
//             setAccountLoading(true)
//             try {
//                 const res = await fetch(
//                     'http://localhost:8000/api/v1/account/accounts-list/'
//                 )
//                 const data = await res.json()

//                 const filtered = data.filter(
//                     (item: any) => item.iAccountType === 1
//                 )

//                 setAccounts(filtered)
//             } catch (error) {
//                 console.error('Error fetching accounts:', error)
//             } finally {
//                 setAccountLoading(false)
//             }
//         }

//         fetchAccounts()
//     }, [])

//     // ===============================
//     // EXCEL IMPORT
//     // ===============================
//     const handleExcelImport = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0]
//         if (!file) return

//         const reader = new FileReader()
//         reader.onload = (evt) => {
//             const data = evt.target?.result
//             const workbook = XLSX.read(data, { type: 'binary' })
//             const sheet = workbook.Sheets[workbook.SheetNames[0]]
//             const jsonData: any[] = XLSX.utils.sheet_to_json(sheet)

//             const formattedRows = jsonData.map((item) => ({
//                 debtor_code: item['Debtor Code'] || '',
//                 debtor_name: item['Debtor Name'] || '',
//                 gl_account: item['GL Account'] || '',
//                 account_name: item['Account Name'] || '',
//                 amount: Number(item['Amount Approved']) || 0,
//                 request_no: item['Request No'] || '',
//                 request_line: item['Request Line'] || '',
//             }))

//             setRows(formattedRows)
//         }

//         reader.readAsBinaryString(file)
//     }

//     // ===============================
//     // SAVE PAYMENT AUTHORIZATION
//     // ===============================
//     const handleSave = async () => {
//         if (!selectedBank) {
//             alert('Please select Bank in Sage')
//             return
//         }

//         if (rows.length === 0) {
//             alert('Please import Excel first')
//             return
//         }

//         setLoading(true)

//         const payload = {
//             bank_in_sage: selectedBank,
//             status: status,
//             lines: rows
//         }

//         try {
//             const response = await fetch(
//                 'http://localhost:8000/api/v1/payment/payment-authorization/',
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(payload)
//                 }
//             )

//             const data = await response.json()

//             if (response.ok) {
//                 alert(`Created Successfully ✅ Payment No: ${data.payment_number}`)
//                 setRows([])
//                 setSelectedBank('')
//             } else {
//                 console.error(data)
//                 alert('Error creating payment authorization')
//             }
//         } catch (error) {
//             console.error(error)
//             alert('Server error')
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
//             <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//             <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//                 <Box sx={{ p: 3, overflow: 'auto' }}>
//                     <Breadcrumbs
//                         separator={<NavigateNextIcon fontSize="small" />}
//                         sx={{ mb: 2 }}
//                     >
//                         <Link
//                             underline="hover"
//                             color="inherit"
//                             href="/payament/payment_authorization"
//                             sx={{ fontSize: '0.875rem', color: '#6B7280' }}
//                         >
//                             Payment authorization
//                         </Link>

//                         <Typography
//                             sx={{ fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}
//                         >
//                             Add Payment authorization
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

//                         {/* Bank Dropdown */}
//                         <TextField
//                             select
//                             fullWidth
//                             size="small"
//                             label="Bank in Sage"
//                             value={selectedBank}
//                             onChange={(e) => setSelectedBank(e.target.value)}
//                             sx={{ mb: 2 }}
//                         >
//                             {accountLoading ? (
//                                 <MenuItem disabled>
//                                     <CircularProgress size={20} />
//                                 </MenuItem>
//                             ) : (
//                                 accounts.map((account) => (
//                                     <MenuItem
//                                         key={account.AccountLink}
//                                         value={account.AccountLink}
//                                     >
//                                         {account.Description}
//                                     </MenuItem>
//                                 ))
//                             )}
//                         </TextField>

//                         {/* Status */}
//                         <TextField
//                             select
//                             fullWidth
//                             size="small"
//                             label="Status"
//                             value={status}
//                             onChange={(e) => setStatus(e.target.value)}
//                             sx={{ mb: 2 }}
//                         >
//                             <MenuItem value="Draft">Draft</MenuItem>
//                             <MenuItem value="Processed">Processed</MenuItem>
//                         </TextField>

//                         {/* Import Button */}
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
//                                     <TableCell>GL Account</TableCell>
//                                     <TableCell>Account Name</TableCell>
//                                     <TableCell>Amount Approved</TableCell>
//                                     <TableCell>Request No.</TableCell>
//                                     <TableCell>Request Line</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {rows.map((row, index) => (
//                                     <TableRow key={index}>
//                                         <TableCell>{index + 1}</TableCell>
//                                         <TableCell>{row.debtor_code}</TableCell>
//                                         <TableCell>{row.debtor_name}</TableCell>
//                                         <TableCell>{row.gl_account}</TableCell>
//                                         <TableCell>{row.account_name}</TableCell>
//                                         <TableCell>{row.amount}</TableCell>
//                                         <TableCell>{row.request_no}</TableCell>
//                                         <TableCell>{row.request_line}</TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>

//                         {/* Buttons */}
//                         <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
//                             <Button
//                                 variant="outlined"
//                                 onClick={handleSave}
//                                 disabled={loading}
//                             >
//                                 {loading ? 'Saving...' : 'Save'}
//                             </Button>

//                             <Button
//                                 variant="contained"
//                                 sx={{ bgcolor: '#F97316' }}
//                                 disabled
//                             >
//                                 Process Batch
//                             </Button>
//                         </Box>
//                     </Paper>
//                 </Box>
//             </Box>
//         </Box>
//     )
// }

'use client'

import React, { useState, useEffect } from 'react'
import {
    Box,
    Paper,
    Typography,
    TextField,
    MenuItem,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    CircularProgress,
    IconButton,
    Breadcrumbs,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import * as XLSX from 'xlsx'
import Sidebar from '../main/Sidebar'
import Link from '@mui/material/Link'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
interface RowData {
    imprest_id: string
    debtor_code: string
    debtor_name: string
    gl_account: string
    account_name: string
    amount: number
    request_no: string
    request_line: string
}

export default function PaymentAuthorizationPage() {

    const [rows, setRows] = useState<RowData[]>([])
    const [accounts, setAccounts] = useState<any[]>([])
    const [imprests, setImprests] = useState<any[]>([])

    const [selectedBank, setSelectedBank] = useState('')
    const [status, setStatus] = useState('Draft')

    const [loading, setLoading] = useState(false)
    const [accountLoading, setAccountLoading] = useState(false)

    // ===============================
    // FETCH BANK ACCOUNTS
    // ===============================
    useEffect(() => {
        const fetchAccounts = async () => {
            setAccountLoading(true)
            try {
                const res = await fetch(
                    'http://localhost:8000/api/v1/account/accounts-list/'
                )
                const data = await res.json()
                const filtered = data.filter(
                    (item: any) => item.iAccountType === 1
                )
                setAccounts(filtered)
            } catch (error) {
                console.error(error)
            } finally {
                setAccountLoading(false)
            }
        }

        fetchAccounts()
    }, [])

    // ===============================
    // FETCH IMPREST LIST
    // ===============================
    useEffect(() => {
        const fetchImprests = async () => {
            try {
                const res = await fetch(
                    'http://localhost:8000/api/v1/imprest/'
                )
                const data = await res.json()
                setImprests(data)
            } catch (err) {
                console.error(err)
            }
        }

        fetchImprests()
    }, [])

    // ===============================
    // ADD MANUAL ROW
    // ===============================
    const handleAddRow = () => {
        setRows([
            ...rows,
            {
                imprest_id: '',
                debtor_code: '',
                debtor_name: '',
                gl_account: '',
                account_name: '',
                amount: 0,
                request_no: '',
                request_line: ''
            }
        ])
    }

    // ===============================
    // DELETE ROW
    // ===============================
    const handleDeleteRow = (index: number) => {
        const updated = rows.filter((_, i) => i !== index)
        setRows(updated)
    }

    // ===============================
    // ROW CHANGE HANDLER
    // ===============================
    const handleRowChange = (
        index: number,
        field: keyof RowData,
        value: any
    ) => {
        const updatedRows = [...rows]
        updatedRows[index][field] = value
        setRows(updatedRows)
    }

    const editableFields: (keyof RowData)[] = [
        'debtor_code',
        'debtor_name',
        'gl_account',
        'account_name',
        'amount'
    ]

    // ===============================
    // IMPREST SELECT (ROW WISE)
    // ===============================
    const handleImprestSelect = (index: number, imprestId: string) => {

        const imprest = imprests.find(
            (item) => item.imprest_id === Number(imprestId)
        )

        if (!imprest) return

        const firstLine = imprest.request_lines?.[0]

        const updatedRows = [...rows]

        updatedRows[index] = {
            imprest_id: imprestId,
            debtor_code: firstLine?.supplier_no || '',
            debtor_name: imprest.user_requested_name || '',
            gl_account: firstLine?.gl_account || '',
            account_name: firstLine?.account_name || '',
            amount: Number(firstLine?.approved_amount || firstLine?.estimated_amount || 0),
            request_no: imprest.request_no,
            request_line: firstLine?.breakdown_id?.toString() || ''
        }

        setRows(updatedRows)
    }

    // ===============================
    // EXCEL IMPORT
    // ===============================
    const handleExcelImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()

        reader.onload = (evt) => {
            const data = evt.target?.result
            const workbook = XLSX.read(data, { type: 'binary' })
            const sheet = workbook.Sheets[workbook.SheetNames[0]]
            const jsonData: any[] = XLSX.utils.sheet_to_json(sheet)

            const formattedRows = jsonData.map((item) => ({
                imprest_id: '',
                debtor_code: item['Debtor Code'] || '',
                debtor_name: item['Debtor Name'] || '',
                gl_account: item['GL Account'] || '',
                account_name: item['Account Name'] || '',
                amount: Number(item['Amount Approved']) || 0,
                request_no: item['Request No'] || '',
                request_line: item['Request Line'] || '',
            }))

            setRows(formattedRows)
        }

        reader.readAsBinaryString(file)
    }

    // ===============================
    // SAVE
    // ===============================
    const handleSave = async () => {

        if (!selectedBank) {
            alert('Please select Bank')
            return
        }

        if (rows.length === 0) {
            alert('Please add at least one line')
            return
        }

        setLoading(true)

        const payload = {
            bank_in_sage: selectedBank,
            status,
            lines: rows
        }

        try {
            const response = await fetch(
                'http://localhost:8000/api/v1/payment/payment-authorization/',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                }
            )

            const data = await response.json()

            if (response.ok) {
                alert(`Created Successfully ✅ Payment No: ${data.payment_number}`)
                setRows([])
            } else {
                alert('Error saving')
                console.error(data)
            }

        } catch (error) {
            console.error(error)
            alert('Server error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>

            <Sidebar selectedMenu="Payment Authorization" onMenuSelect={() => { }} />

            <Box sx={{ flexGrow: 1, p: 3 }}>
                   <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        sx={{ mb: 2 }}
                    >
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/payament/payment_authorization"
                            sx={{ fontSize: '0.875rem', color: '#6B7280' }}
                        >
                            Payment authorization
                        </Link>

                        <Typography
                            sx={{ fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}
                        >
                            Add Payment authorization
                        </Typography>
                    </Breadcrumbs>

                <Paper sx={{ p: 3 }}>

                    {/* Bank */}
                    <TextField
                        select
                        fullWidth
                        size="small"
                        label="Bank in Sage"
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        sx={{ mb: 2 }}
                    >
                        {accountLoading ? (
                            <MenuItem disabled>
                                <CircularProgress size={20} />
                            </MenuItem>
                        ) : (
                            accounts.map((account) => (
                                <MenuItem
                                    key={account.AccountLink}
                                    value={account.AccountLink}
                                >
                                    {account.Description}
                                </MenuItem>
                            ))
                        )}
                    </TextField>

                    {/* Status */}
                    <TextField
                        select
                        fullWidth
                        size="small"
                        label="Status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        sx={{ mb: 2 }}
                    >
                        <MenuItem value="Draft">Draft</MenuItem>
                        <MenuItem value="Processed">Processed</MenuItem>
                    </TextField>

                    {/* Buttons */}
                    <Button component="label" variant="outlined" sx={{ mb: 2 }}>
                        Import from Excel
                        <input hidden type="file" accept=".xlsx,.xls" onChange={handleExcelImport} />
                    </Button>

                    <Button
                        variant="outlined"
                        sx={{ mb: 2, ml: 2 }}
                        onClick={handleAddRow}
                    >
                        Add Manual Line
                    </Button>

                    {/* TABLE */}
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Sl</TableCell>
                                <TableCell>Imprest No</TableCell>
                                <TableCell>Debtor Code</TableCell>
                                <TableCell>Debtor Name</TableCell>
                                <TableCell>GL Account</TableCell>
                                <TableCell>Account Name</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Request No</TableCell>
                                <TableCell>Request Line</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index}>

                                    <TableCell>{index + 1}</TableCell>

                                    {/* Imprest Select */}
                                    <TableCell>
                                        <TextField
                                            select
                                            size="small"
                                            value={row.imprest_id}
                                            onChange={(e) =>
                                                handleImprestSelect(index, e.target.value)
                                            }
                                        >
                                            {imprests.map((imp) => (
                                                <MenuItem
                                                    key={imp.imprest_id}
                                                    value={imp.imprest_id}
                                                >
                                                    {imp.request_no}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </TableCell>

                                    {/* Editable Fields */}
                                    {editableFields.map((field) => (
                                        <TableCell key={field}>
                                            <TextField
                                                size="small"
                                                type={field === 'amount' ? 'number' : 'text'}
                                                value={row[field]}
                                                onChange={(e) =>
                                                    handleRowChange(
                                                        index,
                                                        field,
                                                        field === 'amount'
                                                            ? Number(e.target.value)
                                                            : e.target.value
                                                    )
                                                }
                                            />
                                        </TableCell>
                                    ))}
                                    <TableCell>{row.request_no}</TableCell>
                                    <TableCell>{row.request_line}</TableCell>

                                    <TableCell>
                                        <IconButton
                                            color="error"
                                            onClick={() => handleDeleteRow(index)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* SAVE */}
                    <Box sx={{ textAlign: 'right', mt: 3 }}>
                        <Button
                            variant="contained"
                            onClick={handleSave}
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save'}
                        </Button>
                    </Box>

                </Paper>
            </Box>
        </Box>
    )
}