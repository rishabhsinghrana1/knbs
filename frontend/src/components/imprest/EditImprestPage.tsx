// 'use client'

// import React, { useState } from 'react'
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Grid,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Breadcrumbs,
//   Link,
//   Button,
//   MenuItem,
// } from '@mui/material'
// import { NavigateNext as NavigateNextIcon } from '@mui/icons-material'
// import Sidebar from '../main/Sidebar'
// import Header from '../main/Header'
// import { useRouter, useParams } from 'next/navigation'

// interface RequestLine {
//   id: number
//   srNo: string
//   deductionCode: string
//   deductionName: string
//   glAccount: string
//   accountName: string
//   amountRequested: string
//   amountApproved: string
//   amountUsed: string
//   supplierNo: string
// }

// const statuses = ['Pending', 'Verifying', 'Approved', 'Rejected']

// export default function EditImprestDetailsPage() {
//   const router = useRouter()
//   const { id } = useParams()
//   const [selectedMenu, setSelectedMenu] = useState('Imprest')

//   const [formData, setFormData] = useState({
//     imprestNumber: id as string,
//     userRequester: 'John Doe',
//     status: 'Verifying',
//     userRaiser: 'Admin User',
//     userEntered: 'HR Manager',
//     project: 'Project Alpha',
//     department: 'Finance',
//     remarks: 'This is a sample remark for the imprest request.',
//     approvalRemarks: '',
//   })

//   const [requestLines, setRequestLines] = useState<RequestLine[]>([
//     {
//       id: 1,
//       srNo: '1',
//       deductionCode: 'DED001',
//       deductionName: 'Office Supplies',
//       glAccount: 'GL001',
//       accountName: 'General Expenses',
//       amountRequested: '5000',
//       amountApproved: '4500',
//       amountUsed: '4500',
//       supplierNo: 'SUP001',
//     },
//   ])

//   const handleFormChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleRowChange = (index: number, field: string, value: string) => {
//     const updated = [...requestLines]
//     updated[index] = { ...updated[index], [field]: value }
//     setRequestLines(updated)
//   }

//   const addRow = () => {
//     setRequestLines((prev) => [
//       ...prev,
//       {
//         id: prev.length + 1,
//         srNo: String(prev.length + 1),
//         deductionCode: '',
//         deductionName: '',
//         glAccount: '',
//         accountName: '',
//         amountRequested: '',
//         amountApproved: '',
//         amountUsed: '',
//         supplierNo: '',
//       },
//     ])
//   }

//   const handleSave = () => {
//     console.log('Form Data:', formData)
//     console.log('Request Lines:', requestLines)
//     router.push(`/imprest/view/${id}`)
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//         <Header />

//         <Box sx={{ p: 3, overflow: 'auto' }}>
//           <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
//             <Link
//               underline="hover"
//               sx={{ cursor: 'pointer', fontSize: '0.875rem' }}
//               onClick={() => router.push('/imprest')}
//             >
//               Imprest
//             </Link>
//             <Typography fontSize="0.875rem">Edit Imprest</Typography>
//           </Breadcrumbs>

//           <Paper sx={{ p: 4, borderRadius: 2 }}>
//             <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
//               Edit Imprest
//             </Typography>

//             {/* Information */}
//             <Grid container spacing={3} mb={4}>
//               <Grid item md={4}>
//                 <TextField label="Imprest Number" size="small" fullWidth disabled value={formData.imprestNumber} />
//               </Grid>

//               <Grid item md={4}>
//                 <TextField label="User Requester" size="small" fullWidth value={formData.userRequester}
//                   onChange={(e) => handleFormChange('userRequester', e.target.value)} />
//               </Grid>

//               <Grid item md={4}>
//                 <TextField select label="Status" size="small" fullWidth value={formData.status}
//                   onChange={(e) => handleFormChange('status', e.target.value)}>
//                   {statuses.map((s) => (
//                     <MenuItem key={s} value={s}>{s}</MenuItem>
//                   ))}
//                 </TextField>
//               </Grid>

//               <Grid item md={4}>
//                 <TextField label="User Raiser" size="small" fullWidth value={formData.userRaiser}
//                   onChange={(e) => handleFormChange('userRaiser', e.target.value)} />
//               </Grid>

//               <Grid item md={4}>
//                 <TextField label="User Entered" size="small" fullWidth value={formData.userEntered}
//                   onChange={(e) => handleFormChange('userEntered', e.target.value)} />
//               </Grid>

//               <Grid item md={4}>
//                 <TextField label="Project" size="small" fullWidth value={formData.project}
//                   onChange={(e) => handleFormChange('project', e.target.value)} />
//               </Grid>

//               <Grid item md={4}>
//                 <TextField label="Department" size="small" fullWidth value={formData.department}
//                   onChange={(e) => handleFormChange('department', e.target.value)} />
//               </Grid>

//               <Grid item md={12}>
//                 <TextField
//                   label="Remarks"
//                   multiline
//                   rows={3}
//                   fullWidth
//                   value={formData.remarks}
//                   onChange={(e) => handleFormChange('remarks', e.target.value)}
//                 />
//               </Grid>
//             </Grid>

//             {/* Request Lines */}
//             <Typography fontWeight={600} mb={2}>Request Lines</Typography>

//             <TableContainer sx={{ border: '1px solid #E5E7EB', borderRadius: 2 }}>
//               <Table>
//                 <TableHead sx={{ bgcolor: '#F9FAFB' }}>
//                   <TableRow>
//                     {['Sr No', 'Deduction Code', 'Deduction Name', 'GL', 'Account', 'Req Amt', 'Appr Amt', 'Used Amt', 'Supplier'].map(h => (
//                       <TableCell key={h} sx={{ fontWeight: 600, fontSize: '0.75rem' }}>{h}</TableCell>
//                     ))}
//                   </TableRow>
//                 </TableHead>

//                 <TableBody>
//                   {requestLines.map((row, i) => (
//                     <TableRow key={row.id}>
//                       <TableCell>{row.srNo}</TableCell>
//                       <TableCell><TextField size="small" value={row.deductionCode}
//                         onChange={(e) => handleRowChange(i, 'deductionCode', e.target.value)} /></TableCell>
//                       <TableCell><TextField size="small" value={row.deductionName}
//                         onChange={(e) => handleRowChange(i, 'deductionName', e.target.value)} /></TableCell>
//                       <TableCell><TextField size="small" value={row.glAccount}
//                         onChange={(e) => handleRowChange(i, 'glAccount', e.target.value)} /></TableCell>
//                       <TableCell><TextField size="small" value={row.accountName}
//                         onChange={(e) => handleRowChange(i, 'accountName', e.target.value)} /></TableCell>
//                       <TableCell><TextField size="small" value={row.amountRequested}
//                         onChange={(e) => handleRowChange(i, 'amountRequested', e.target.value)} /></TableCell>
//                       <TableCell><TextField size="small" value={row.amountApproved}
//                         onChange={(e) => handleRowChange(i, 'amountApproved', e.target.value)} /></TableCell>
//                       <TableCell><TextField size="small" value={row.amountUsed}
//                         onChange={(e) => handleRowChange(i, 'amountUsed', e.target.value)} /></TableCell>
//                       <TableCell><TextField size="small" value={row.supplierNo}
//                         onChange={(e) => handleRowChange(i, 'supplierNo', e.target.value)} /></TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>

//             <Button onClick={addRow} sx={{ mt: 2, textTransform: 'none' }}>
//               + Add More
//             </Button>

//             {/* Actions */}
//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
//               <Button variant="outlined" onClick={() => router.back()}>Cancel</Button>
//               <Button variant="contained" sx={{ bgcolor: '#FF6B35' }} onClick={handleSave}>
//                 Save Changes
//               </Button>
//             </Box>
//           </Paper>
//         </Box>
//       </Box>
//     </Box>
//   )
// }


// 'use client'

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Grid,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Breadcrumbs,
//   Link,
//   Button,
//   MenuItem,
//   CircularProgress,
// } from '@mui/material'
// import { NavigateNext as NavigateNextIcon } from '@mui/icons-material'
// import Sidebar from '../main/Sidebar'
// import Header from '../main/Header'
// import { useRouter, useParams } from 'next/navigation'

// const API_BASE_URL = 'http://localhost:8000/api/v1'

// interface RequestLine {
//   id?: number
//   srNo: string
//   deductionCode: string
//   deductionName: string
//   glAccount: string
//   accountName: string
//   amountRequested: string
//   amountApproved: string
//   amountUsed: string
//   supplierNo: string
// }

// const statuses = ['Pending', 'Verifying', 'Approved', 'Rejected']

// export default function EditImprestDetailsPage() {
//   const router = useRouter()
//   const { id } = useParams()
//   const [selectedMenu, setSelectedMenu] = useState('Imprest')
//   const [loading, setLoading] = useState(true)
//   const [saving, setSaving] = useState(false)

//   const [formData, setFormData] = useState({
//     imprestNumber: '',
//     userRequester: '',
//     status: '',
//     userRaiser: '',
//     userEntered: '',
//     project: '',
//     department: '',
//     remarks: '',
//   })

//   const [requestLines, setRequestLines] = useState<RequestLine[]>([])
// console.log(id,5445456645);

//   // ✅ FETCH DATA
//   useEffect(() => {
//     if (id) fetchImprest()
//   }, [id])

//   const fetchImprest = async () => {
//     try {
//       const res = await axios.get(`${API_BASE_URL}/imprest/${id}/`)
//       const data = res.data

//       setFormData({
//         imprestNumber: data.imprest_number,
//         userRequester: data.user_requested,
//         status: data.status,
//         userRaiser: data.user_raiser,
//         userEntered: data.user_entered,
//         project: data.project,
//         department: data.department,
//         remarks: data.remarks || '',
//       })

//       setRequestLines(
//         data.request_lines.map((line: any, index: number) => ({
//           id: line.id,
//           srNo: String(index + 1),
//           deductionCode: line.debtor_code || '',
//           deductionName: line.debtor_name || '',
//           glAccount: line.gl_account || '',
//           accountName: line.account_name || '',
//           amountRequested: line.estimated_amount?.toString() || '',
//           amountApproved: line.amount_approved?.toString() || '',
//           amountUsed: line.amount_used?.toString() || '',
//           supplierNo: line.supplier_no || '',
//         }))
//       )
//     } catch (err) {
//       console.error('Error fetching imprest', err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleFormChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleRowChange = (index: number, field: string, value: string) => {
//     const updated = [...requestLines]
//     updated[index] = { ...updated[index], [field]: value }
//     setRequestLines(updated)
//   }

//   const addRow = () => {
//     setRequestLines((prev) => [
//       ...prev,
//       {
//         srNo: String(prev.length + 1),
//         deductionCode: '',
//         deductionName: '',
//         glAccount: '',
//         accountName: '',
//         amountRequested: '',
//         amountApproved: '',
//         amountUsed: '',
//         supplierNo: '',
//       },
//     ])
//   }

//   // ✅ UPDATE API
//   const handleSave = async () => {
//     try {
//       setSaving(true)

//       const payload = {
//         user_requested: formData.userRequester,
//         status: formData.status,
//         user_raiser: formData.userRaiser,
//         user_entered: formData.userEntered,
//         project: formData.project,
//         department: formData.department,
//         remarks: formData.remarks,
//         request_lines: requestLines.map((line) => ({
//           id: line.id,
//           debtor_code: line.deductionCode,
//           debtor_name: line.deductionName,
//           gl_account: line.glAccount,
//           account_name: line.accountName,
//           estimated_amount: parseFloat(line.amountRequested || '0'),
//           amount_approved: parseFloat(line.amountApproved || '0'),
//           amount_used: parseFloat(line.amountUsed || '0'),
//           supplier_no: line.supplierNo,
//         })),
//       }

//       await axios.put(`${API_BASE_URL}/imprest/${id}/`, payload)

//       router.push(`/imprest/view/${id}`)
//     } catch (error) {
//       console.error('Update failed', error)
//     } finally {
//       setSaving(false)
//     }
//   }

//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
//         <CircularProgress />
//       </Box>
//     )
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//         <Header />

//         <Box sx={{ p: 3, overflow: 'auto' }}>
//           <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
//             <Link underline="hover" sx={{ cursor: 'pointer' }} onClick={() => router.push('/imprest')}>
//               Imprest
//             </Link>
//             <Typography>Edit Imprest</Typography>
//           </Breadcrumbs>

//           <Paper sx={{ p: 4 }}>
//             <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
//               Edit Imprest
//             </Typography>

//             <Grid container spacing={3}>
//               <Grid item md={4}>
//                 <TextField label="Imprest Number" size="small" fullWidth disabled value={formData.imprestNumber} />
//               </Grid>

//               <Grid item md={4}>
//                 <TextField label="User Requester" size="small" fullWidth
//                   value={formData.userRequester}
//                   onChange={(e) => handleFormChange('userRequester', e.target.value)} />
//               </Grid>

//               <Grid item md={4}>
//                 <TextField select label="Status" size="small" fullWidth
//                   value={formData.status}
//                   onChange={(e) => handleFormChange('status', e.target.value)}>
//                   {statuses.map((s) => (
//                     <MenuItem key={s} value={s}>{s}</MenuItem>
//                   ))}
//                 </TextField>
//               </Grid>

//               <Grid item md={4}>
//                 <TextField label="User Raiser" size="small" fullWidth
//                   value={formData.userRaiser}
//                   onChange={(e) => handleFormChange('userRaiser', e.target.value)} />
//               </Grid>

//               <Grid item md={4}>
//                 <TextField label="User Entered" size="small" fullWidth
//                   value={formData.userEntered}
//                   onChange={(e) => handleFormChange('userEntered', e.target.value)} />
//               </Grid>

//               <Grid item md={4}>
//                 <TextField label="Project" size="small" fullWidth
//                   value={formData.project}
//                   onChange={(e) => handleFormChange('project', e.target.value)} />
//               </Grid>

//               <Grid item md={4}>
//                 <TextField label="Department" size="small" fullWidth
//                   value={formData.department}
//                   onChange={(e) => handleFormChange('department', e.target.value)} />
//               </Grid>

//               <Grid item md={12}>
//                 <TextField label="Remarks" multiline rows={3} fullWidth
//                   value={formData.remarks}
//                   onChange={(e) => handleFormChange('remarks', e.target.value)} />
//               </Grid>
//             </Grid>

//             {/* Request Lines Table Same As Yours */}

//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
//               <Button variant="outlined" onClick={() => router.back()}>Cancel</Button>
//               <Button variant="contained" sx={{ bgcolor: '#FF6B35' }}
//                 onClick={handleSave}
//                 disabled={saving}>
//                 {saving ? 'Saving...' : 'Save Changes'}
//               </Button>
//             </Box>
//           </Paper>
//         </Box>
//       </Box>
//     </Box>
//   )
// }


'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Box,
  Paper,
  Typography,
  TextField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Breadcrumbs,
  Link,
  Button,
  MenuItem,
  CircularProgress,
  Alert,
  Snackbar,
  Autocomplete,
  IconButton,
} from '@mui/material'
import {
  NavigateNext as NavigateNextIcon,
  Delete as DeleteIcon,
  CloudUpload as UploadIcon,
  Close as CloseIcon,
} from '@mui/icons-material'
import Sidebar from '../main/Sidebar'
import Header from '../main/Header'
import { useRouter, useParams } from 'next/navigation'

const API_BASE_URL = 'http://localhost:8000/api/v1'

interface RequestLine {
  breakdown_id?: number
  srNo: string
  debtor_code?: number
  debtor_name?: string
  description: string
  gl_account: string
  account_name: string
  estimated_amount: string
  approved_amount?: string
  spent_amount?: string
  supplier_no: string
}

interface User {
  id: number
  username?: string
  name?: string
  first_name?: string
  last_name?: string
  email?: string
}

interface Department {
  id: number
  name: string
}

interface Project {
  id?: number
  ProjectLink?: number
  project_name?: string
  ProjectName?: string
  project_code?: string
  name?: string
}

interface Client {
  DCLink: number
  Name: string
}

interface Account {
  Master_Sub_Account: string
  Description: string
}

interface Attachment {
  attachment_id: number
  file_name: string
  file_path: string
  file_size: number
  attachment_type: string
}

const statuses = [
  'Draft',
  'Pending_HOD',
  'Pending_FC',
  'Pending_DG',
  'Approved',
  'Rejected',
  'Surrendered',
  'Closed'
]

export default function EditImprestDetailsPage() {
  const router = useRouter()
  const { id } = useParams()
  const [selectedMenu, setSelectedMenu] = useState('Imprest')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const fixedField = {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      height: 40,
    },
    '& input': {
      padding: '8px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  }

  const tableFieldStyle = {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      height: 42,
      paddingRight: '6px',
    },
    '& input': {
      padding: '8px 10px',
      fontSize: '14px',
      whiteSpace: 'nowrap',
      overflow: 'visible',
      textOverflow: 'unset',
    },
  }

  // Alert states
  const [alert, setAlert] = useState<{
    open: boolean
    message: string
    severity: 'success' | 'error' | 'info' | 'warning'
  }>({
    open: false,
    message: '',
    severity: 'success'
  })

  // Dropdown data
  const [users, setUsers] = useState<User[]>([])
  const [departments, setDepartments] = useState<Department[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [clients, setClients] = useState<Client[]>([])
  const [accounts, setAccounts] = useState<Account[]>([])

  // Form states
  const [formData, setFormData] = useState({
    imprestNumber: '',
    userRequester: '' as number | '',
    status: '',
    userRaiser: '' as number | '',
    userEntered: '' as number | '',
    project: '' as number | '',
    department: '' as number | '',
    purpose: '',
  })

  const [requestLines, setRequestLines] = useState<RequestLine[]>([])
  const [existingAttachments, setExistingAttachments] = useState<Attachment[]>([])
  const [newFiles, setNewFiles] = useState<File[]>([])

  // ✅ FETCH DROPDOWNS
  useEffect(() => {
    fetchUsers()
    fetchDepartments()
    fetchProjects()
    fetchClients()
    fetchAccounts()
  }, [])

  // ✅ FETCH IMPREST DATA
  useEffect(() => {
    if (id) fetchImprest()
  }, [id])

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/management/`)
      setUsers(response.data)
    } catch (error) {
      console.error("Error fetching users:", error)
      showAlert("Failed to load users", "warning")
    }
  }

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/departments/`)
      setDepartments(response.data)
    } catch (error) {
      console.error("Error fetching departments:", error)
      showAlert("Failed to load departments", "warning")
    }
  }

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/project/projects-list/`)
      setProjects(response.data)
    } catch (error) {
      console.error("Error fetching projects:", error)
      showAlert("Failed to load projects", "warning")
    }
  }

  const fetchClients = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/client/clients-list/`)
      setClients(response.data)
    } catch (error) {
      console.error("Error fetching clients:", error)
      showAlert("Failed to load clients", "warning")
    }
  }

  const fetchAccounts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/account/accounts-list/`)
      setAccounts(response.data)
    } catch (error) {
      console.error("Error fetching accounts:", error)
      showAlert("Failed to load accounts", "warning")
    }
  }

  const fetchImprest = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/imprest/${id}/`)
      const data = res.data

      setFormData({
        imprestNumber: data.request_no || '',
        userRequester: data.user_requested || '',
        status: data.status || '',
        userRaiser: data.created_by || '',
        userEntered: data.user_entered || '',
        project: data.project || '',
        department: data.department || '',
        purpose: data.purpose || '',
      })

      setRequestLines(
        data.request_lines.map((line: any, index: number) => ({
          breakdown_id: line.breakdown_id,
          srNo: String(index + 1),
          debtor_code: line.debtor_code || '',
          debtor_name: line.debtor_name || '',
          description: line.description || '',
          gl_account: line.gl_account || '',
          account_name: line.account_name || '',
          estimated_amount: line.estimated_amount?.toString() || '',
          approved_amount: line.approved_amount?.toString() || '',
          spent_amount: line.spent_amount?.toString() || '',
          supplier_no: line.supplier_no || '',
        }))
      )

      setExistingAttachments(data.attachments || [])
    } catch (err) {
      console.error('Error fetching imprest', err)
      showAlert('Failed to load imprest data', 'error')
    } finally {
      setLoading(false)
    }
  }

  const showAlert = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
    setAlert({ open: true, message, severity })
  }

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false })
  }

  const handleFormChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleRowChange = (index: number, field: string, value: string | number) => {
    const updated = [...requestLines]
    updated[index] = { ...updated[index], [field]: value }
    setRequestLines(updated)
  }

  const addRow = () => {
    setRequestLines((prev) => [
      ...prev,
      {
        srNo: String(prev.length + 1),
        debtor_code: undefined,
        debtor_name: '',
        description: '',
        gl_account: '',
        account_name: '',
        estimated_amount: '',
        approved_amount: '',
        spent_amount: '',
        supplier_no: '',
      },
    ])
  }

  const handleDeleteLine = (index: number) => {
    setRequestLines(requestLines.filter((_, i) => i !== index))
  }

  // File handling
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      setNewFiles([...newFiles, ...Array.from(files)])
    }
  }

  const handleFileDelete = (index: number) => {
    setNewFiles(newFiles.filter((_, i) => i !== index))
  }

  const handleDeleteAllFiles = () => {
    setNewFiles([])
  }

  const handleDeleteExistingAttachment = async (attachmentId: number) => {
    if (!window.confirm('Are you sure you want to delete this attachment?')) return
    
    try {
      await axios.delete(`${API_BASE_URL}/imprest/attachments/${attachmentId}/`)
      setExistingAttachments(existingAttachments.filter(a => a.attachment_id !== attachmentId))
      showAlert('Attachment deleted successfully', 'success')
    } catch (error) {
      console.error('Error deleting attachment:', error)
      showAlert('Failed to delete attachment', 'error')
    }
  }

  // ✅ UPDATE API
  const handleSave = async () => {
    try {
      setSaving(true)

      const payload = {
        user_requested: formData.userRequester,
        user_entered: formData.userEntered,
        department: formData.department,
        project: formData.project,
        purpose: formData.purpose,
        status: formData.status,
        request_lines: requestLines.map((line) => ({
          breakdown_id: line.breakdown_id,
          debtor_code: line.debtor_code,
          debtor_name: line.debtor_name,
          description: line.description,
          gl_account: line.gl_account,
          expense_head: line.gl_account,
          account_name: line.account_name,
          estimated_amount: parseFloat(line.estimated_amount || '0'),
          approved_amount: line.approved_amount ? parseFloat(line.approved_amount) : null,
          spent_amount: line.spent_amount ? parseFloat(line.spent_amount) : null,
          supplier_no: line.supplier_no,
        })),
      }

      await axios.put(`${API_BASE_URL}/imprest/${id}/`, payload)

      // Upload new attachments if any
      if (newFiles.length > 0) {
        await uploadAttachments()
      }

      showAlert('Imprest updated successfully!', 'success')
      setTimeout(() => {
        router.push(`/imprest/view/${id}`)
      }, 1500)
    } catch (error: any) {
      console.error('Update failed', error)
      const errorMessage = error.response?.data?.detail ||
        error.response?.data?.message ||
        'Failed to update imprest'
      showAlert(errorMessage, 'error')
    } finally {
      setSaving(false)
    }
  }

  const uploadAttachments = async () => {
    try {
      const formData = new FormData()
      newFiles.forEach(file => {
        formData.append('files', file)
      })
      formData.append('attachment_type', 'Support')

      await axios.post(
        `${API_BASE_URL}/imprest/${id}/upload-multiple-attachments/`,
        formData
      )
    } catch (error) {
      console.error('Error uploading attachments:', error)
      showAlert('Failed to upload new attachments', 'warning')
    }
  }

  // Helper functions
  const getUserDisplayName = (user: User) => {
    if (user.name) return user.name
    if (user.first_name && user.last_name) return `${user.first_name} ${user.last_name}`
    if (user.first_name) return user.first_name
    return user.username || `User ${user.id}`
  }

  const getProjectId = (proj: Project) => {
    return proj.ProjectLink || proj.id || 0
  }

  const getProjectName = (proj: Project) => {
    return proj.ProjectName || proj.project_name || proj.name || `Project ${proj.id}`
  }

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
      <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />

        <Box sx={{ p: 3, overflow: 'auto' }}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
            <Link
              underline="hover"
              sx={{ cursor: 'pointer', fontSize: '0.875rem' }}
              onClick={() => router.push('/imprest')}
            >
              Imprest
            </Link>
            <Typography fontSize="0.875rem">Edit Imprest</Typography>
          </Breadcrumbs>

          <Paper sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Edit Imprest
            </Typography>

            {/* Information */}
            <Grid container spacing={3} mb={4}>
              <Grid item md={4}>
                <TextField
                  label="Imprest Number"
                  size="small"
                  fullWidth
                  disabled
                  value={formData.imprestNumber}
                  sx={{
                    bgcolor: '#F9FAFB',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#E5E7EB' }
                    }
                  }}
                />
              </Grid>

              <Grid item md={4}>
                <TextField
                  select
                  label="User Requester *"
                  size="small"
                  fullWidth
                  value={formData.userRequester}
                  onChange={(e) => handleFormChange('userRequester', Number(e.target.value))}
                  sx={{
                    bgcolor: '#F9FAFB',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#E5E7EB' }
                    }
                  }}
                >
                  {users.map((user) => (
                    <MenuItem key={user.id} value={user.id}>
                      {getUserDisplayName(user)}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item md={4}>
                <TextField
                  select
                  label="Status *"
                  size="small"
                  fullWidth
                  value={formData.status}
                  onChange={(e) => handleFormChange('status', e.target.value)}
                  sx={{
                    bgcolor: '#F9FAFB',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#E5E7EB' }
                    }
                  }}
                >
                  {statuses.map((s) => (
                    <MenuItem key={s} value={s}>{s}</MenuItem>
                  ))}
                </TextField>
              </Grid>


              <Grid item md={4}>
                <TextField
                  select
                  label="User Entered"
                  size="small"
                  fullWidth
                  value={formData.userEntered}
                  onChange={(e) => handleFormChange('userEntered', Number(e.target.value))}
                  sx={{
                    bgcolor: '#F9FAFB',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#E5E7EB' }
                    }
                  }}
                >
                  {users.map((user) => (
                    <MenuItem key={user.id} value={user.id}>
                      {getUserDisplayName(user)}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item md={4}>
                <TextField
                  select
                  label="Project *"
                  size="small"
                  fullWidth
                  value={formData.project}
                  onChange={(e) => handleFormChange('project', Number(e.target.value))}
                  sx={{
                    bgcolor: '#F9FAFB',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#E5E7EB' }
                    }
                  }}
                >
                  {projects.map((p) => (
                    <MenuItem key={getProjectId(p)} value={getProjectId(p)}>
                      {getProjectName(p)}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item md={4}>
                <TextField
                  select
                  label="Department *"
                  size="small"
                  fullWidth
                  value={formData.department}
                  onChange={(e) => handleFormChange('department', Number(e.target.value))}
                  sx={{
                    bgcolor: '#F9FAFB',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#E5E7EB' }
                    }
                  }}
                >
                  {departments.map((d) => (
                    <MenuItem key={d.id} value={d.id}>
                      {d.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item md={12}>
                <TextField
                  label="Purpose *"
                  multiline
                  rows={3}
                  fullWidth
                  value={formData.purpose}
                  onChange={(e) => handleFormChange('purpose', e.target.value)}
                  sx={{
                    bgcolor: '#F9FAFB',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#E5E7EB' }
                    }
                  }}
                />
              </Grid>
            </Grid>

            {/* Existing Attachments */}
            {existingAttachments.length > 0 && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                  Existing Attachments
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {existingAttachments.map((file) => (
                    <Box
                      key={file.attachment_id}
                      sx={{
                        position: 'relative',
                        width: 120,
                        height: 120,
                        border: '1px solid #E5E7EB',
                        borderRadius: 2,
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'white'
                      }}
                    >
                      <UploadIcon sx={{ fontSize: 40, color: '#FF6B35', mb: 1 }} />
                      <Typography variant="caption" sx={{ textAlign: 'center', wordBreak: 'break-all', fontSize: '0.7rem', color: '#6B7280' }}>
                        {file.file_name.length > 15 ? file.file_name.substring(0, 12) + '...' : file.file_name}
                      </Typography>
                      <Typography variant="caption" sx={{ fontSize: '0.65rem', color: '#9CA3AF', mt: 0.5 }}>
                        {(file.file_size / 1024).toFixed(2)} KB
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => handleDeleteExistingAttachment(file.attachment_id)}
                        sx={{
                          position: 'absolute',
                          top: 4,
                          right: 4,
                          bgcolor: 'white',
                          boxShadow: 1,
                          width: 20,
                          height: 20,
                          '&:hover': { bgcolor: '#FEE2E2' }
                        }}
                      >
                        <CloseIcon sx={{ fontSize: 14, color: '#6B7280' }} />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {/* Upload New Documents */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                Upload New Documents
              </Typography>

              {newFiles.length === 0 ? (
                <Box sx={{
                  border: '2px dashed #E5E7EB',
                  borderRadius: 2,
                  p: 4,
                  textAlign: 'center',
                  bgcolor: '#FAFAFA',
                }}>
                  <input
                    accept="*/*"
                    style={{ display: 'none' }}
                    id="file-upload"
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="file-upload">
                    <Button
                      component="span"
                      sx={{
                        textTransform: 'none',
                        color: '#6B7280',
                        fontWeight: 500
                      }}
                    >
                      <UploadIcon sx={{ mr: 1 }} />
                      Click to upload documents
                    </Button>
                  </label>
                </Box>
              ) : (
                <Box>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                    {newFiles.map((file, index) => (
                      <Box
                        key={index}
                        sx={{
                          position: 'relative',
                          width: 120,
                          height: 120,
                          border: '1px solid #E5E7EB',
                          borderRadius: 2,
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'white'
                        }}
                      >
                        <UploadIcon sx={{ fontSize: 40, color: '#FF6B35', mb: 1 }} />
                        <Typography variant="caption" sx={{ textAlign: 'center', wordBreak: 'break-all', fontSize: '0.7rem', color: '#6B7280' }}>
                          {file.name.length > 15 ? file.name.substring(0, 12) + '...' : file.name}
                        </Typography>
                        <Typography variant="caption" sx={{ fontSize: '0.65rem', color: '#9CA3AF', mt: 0.5 }}>
                          {(file.size / 1024).toFixed(2)} KB
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => handleFileDelete(index)}
                          sx={{
                            position: 'absolute',
                            top: 4,
                            right: 4,
                            bgcolor: 'white',
                            boxShadow: 1,
                            width: 20,
                            height: 20,
                            '&:hover': { bgcolor: '#FEE2E2' }
                          }}
                        >
                          <CloseIcon sx={{ fontSize: 14, color: '#6B7280' }} />
                        </IconButton>
                      </Box>
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ color: '#6B7280' }}>
                      {newFiles.length} new file(s) ready to upload
                    </Typography>
                    <Button
                      size="small"
                      onClick={handleDeleteAllFiles}
                      sx={{
                        textTransform: 'none',
                        color: '#6B7280',
                        fontSize: '0.875rem',
                        border: '1px solid #E5E7EB',
                        px: 2
                      }}
                    >
                      Delete All
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>

            {/* Request Lines */}
            <Typography fontWeight={600} mb={2}>Request Lines</Typography>

            <TableContainer sx={{ border: '1px solid #E5E7EB', borderRadius: 2 }}>
              <Table sx={{ minWidth: 1200 }}>
                <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                  <TableRow>
                    {['Sr No', 'Debtor Code', 'Debtor Name', 'Description', 'GL Account', 'Account Name', 'Est. Amt', 'Appr. Amt', 'Spent Amt', 'Supplier', 'Action'].map(h => (
                      <TableCell key={h} sx={{ fontWeight: 600, fontSize: '0.75rem' }}>{h}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {requestLines.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>{row.srNo}</TableCell>
                      
                      {/* Debtor Code */}
                      <TableCell>
                        <Autocomplete
                          size="small"
                          fullWidth
                          options={clients}
                          filterOptions={(options, state) => {
                            const input = state.inputValue.toLowerCase()
                            return options.filter(
                              (o) =>
                                o.DCLink.toString().includes(input) ||
                                o.Name.toLowerCase().includes(input)
                            )
                          }}
                          getOptionLabel={(o) => `${o.DCLink}`}
                          value={clients.find(c => c.DCLink === row.debtor_code) || null}
                          onChange={(e, val) => {
                            handleRowChange(i, 'debtor_code', val?.DCLink || '')
                            handleRowChange(i, 'debtor_name', val?.Name || '')
                          }}
                          renderInput={(params) => (
                            <TextField {...params} placeholder="Search" sx={fixedField} />
                          )}
                        />
                      </TableCell>

                      {/* Debtor Name */}
                      <TableCell>
                        <Autocomplete
                          size="small"
                          fullWidth
                          options={clients}
                          filterOptions={(options, state) => {
                            const input = state.inputValue.toLowerCase()
                            return options.filter(
                              (o) =>
                                o.Name.toLowerCase().includes(input) ||
                                o.DCLink.toString().includes(input)
                            )
                          }}
                          getOptionLabel={(o) => o.Name}
                          value={clients.find(c => c.DCLink === row.debtor_code) || null}
                          onChange={(e, val) => {
                            handleRowChange(i, 'debtor_code', val?.DCLink || '')
                            handleRowChange(i, 'debtor_name', val?.Name || '')
                          }}
                          renderInput={(params) => (
                            <TextField {...params} placeholder="Search" sx={tableFieldStyle} />
                          )}
                        />
                      </TableCell>

                      {/* Description */}
                      <TableCell>
                        <TextField
                          size="small"
                          value={row.description}
                          onChange={(e) => handleRowChange(i, 'description', e.target.value)}
                          sx={fixedField}
                        />
                      </TableCell>

                      {/* GL Account */}
                      <TableCell>
                        <Autocomplete
                          size="small"
                          fullWidth
                          options={accounts}
                          filterOptions={(options, state) => {
                            const input = state.inputValue.toLowerCase()
                            return options.filter(
                              (o) =>
                                o.Master_Sub_Account.toLowerCase().includes(input) ||
                                o.Description.toLowerCase().includes(input)
                            )
                          }}
                          getOptionLabel={(o) => `${o.Master_Sub_Account}`}
                          value={accounts.find(a => a.Master_Sub_Account === row.gl_account) || null}
                          onChange={(e, val) => {
                            handleRowChange(i, 'gl_account', val?.Master_Sub_Account || '')
                            handleRowChange(i, 'account_name', val?.Description || '')
                          }}
                          renderInput={(params) => (
                            <TextField {...params} placeholder="Search" sx={fixedField} />
                          )}
                        />
                      </TableCell>

                      {/* Account Name */}
                      <TableCell>
                        <Autocomplete
                          size="small"
                          fullWidth
                          options={accounts}
                          filterOptions={(options, state) => {
                            const input = state.inputValue.toLowerCase()
                            return options.filter(
                              (o) =>
                                o.Description.toLowerCase().includes(input) ||
                                o.Master_Sub_Account.toLowerCase().includes(input)
                            )
                          }}
                          getOptionLabel={(o) => o.Description}
                          value={accounts.find(a => a.Master_Sub_Account === row.gl_account) || null}
                          onChange={(e, val) => {
                            handleRowChange(i, 'gl_account', val?.Master_Sub_Account || '')
                            handleRowChange(i, 'account_name', val?.Description || '')
                          }}
                          renderInput={(params) => (
                            <TextField {...params} placeholder="Search" sx={fixedField} />
                          )}
                        />
                      </TableCell>

                      <TableCell>
                        <TextField
                          size="small"
                          type="number"
                          value={row.estimated_amount}
                          onChange={(e) => handleRowChange(i, 'estimated_amount', e.target.value)}
                          sx={fixedField}
                        />
                      </TableCell>

                      <TableCell>
                        <TextField
                          size="small"
                          type="number"
                          value={row.approved_amount}
                          onChange={(e) => handleRowChange(i, 'approved_amount', e.target.value)}
                          sx={fixedField}
                        />
                      </TableCell>

                      <TableCell>
                        <TextField
                          size="small"
                          type="number"
                          value={row.spent_amount}
                          onChange={(e) => handleRowChange(i, 'spent_amount', e.target.value)}
                          sx={fixedField}
                        />
                      </TableCell>

                      <TableCell>
                        <TextField
                          size="small"
                          value={row.supplier_no}
                          onChange={(e) => handleRowChange(i, 'supplier_no', e.target.value)}
                          sx={fixedField}
                        />
                      </TableCell>

                      <TableCell align="center">
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteLine(i)}
                          color="error"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Button onClick={addRow} sx={{ mt: 2, textTransform: 'none' }}>
              + Add More
            </Button>

            {/* Actions */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
              <Button variant="outlined" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{ bgcolor: '#FF6B35' }}
                onClick={handleSave}
                disabled={saving}
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Alert Snackbar */}
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}