// 'use client'

// import React, { useState } from 'react'
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   MenuItem,
//   Breadcrumbs,
//   Link,
//   IconButton,
//   Checkbox,
//   FormControlLabel,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from '@mui/material'
// import {
//   NavigateNext as NavigateNextIcon,
//   CloudUpload as CloudUploadIcon,
//   MoreVert as MoreVertIcon,
// } from '@mui/icons-material'
// import Sidebar from '../main/Sidebar'
// import Header from '../main/Header'
// import { useRouter } from 'next/navigation'

// const departments = ['Finance', 'HR', 'Marketing', 'Software']
// const users = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams']
// const statuses = ['Pending', 'Approved', 'Rejected']
// const projects = ['Project A', 'Project B', 'Project C']

// // const detailsColumns = [
// //   'SL No',
// //   'Sanction Group',
// //   'Sanction Name',
// //   'GL Account',
// //   'Account Name',
// //   'Amount Sanctioned',
// //   'Amount Used',
// // ]

// interface FormData {
//   imprestNumber: string
//   userRequested: string
//   status: string
//   dateRequest: string
//   userEntered: string
//   project: string
//   department: string
//   remarks: string
//   uploadedFile: File | null
// }
// const detailsColumns = [
//   'SL No',
//   'Sanction Group',
//   'Sanction Name',
//   'GL Account',
//   'Account Name',
//   'Amount Sanctioned',
//   'Amount Used',
// ]

// export default function SurrenderCreatePage() {
//   const router = useRouter()

//   const [selectedMenu, setSelectedMenu] = useState('Surrender')
//   const [formData, setFormData] = useState<FormData>({
//     imprestNumber: '',
//     userRequested: '',
//     status: '',
//     dateRequest: '',
//     userEntered: '',
//     project: '',
//     department: '',
//     remarks: '',
//     uploadedFile: null,
//   })

//     const [tableRows, setTableRows] = useState([
//     { sanctionGroup: '', sanctionName: '', glAccount: '', accountName: '', amountSanctioned: '', amountUsed: '' },
//   ])

//   const [amounts, setAmounts] = useState({
//     slNo: '',
//     sanctionGroup: '',
//     sanctionName: '',
//     netReimbursement: '',
//     amountAdvanced: '',
//   })

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//    const handleInputChanges = (index: number, field: string, value: string) => {
//     const updatedRows = [...tableRows]
//     updatedRows[index][field] = value

//     // If last row edited and value not empty, add a new blank row
//     if (
//       index === tableRows.length - 1 &&
//       value.trim() !== ''
//     ) {
//       updatedRows.push({ sanctionGroup: '', sanctionName: '', glAccount: '', accountName: '', amountSanctioned: '', amountUsed: '' })
//     }
//     setTableRows(updatedRows)
//   }
//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setFormData((prev) => ({ ...prev, uploadedFile: event.target.files![0] }))
//     }
//   }

//   const handleAmountChange = (field: string, value: string) => {
//     setAmounts((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleSubmit = () => {
//     console.log('Form Data:', formData)
//     console.log('Table Rows:', tableRows)
//     console.log('Amounts:', amounts)
//     // Submit logic here
//   }

//   const handleCancel = () => {
//     router.push('/surrender')
//   }
//   const handleAddMore = () => {
//     setTableRows((prev) => [...prev, { sanctionGroup: '', sanctionName: '', glAccount: '', accountName: '', amountSanctioned: '', amountUsed: '' }])
//   }
//   return (
//     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
//       {/* Sidebar */}
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
//         {/* Header */}
//         <Header />

//         {/* Page Content - Scrollable */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             overflow: 'auto',
//             '&::-webkit-scrollbar': {
//               width: '8px',
//             },
//             '&::-webkit-scrollbar-track': {
//               background: '#f1f1f1',
//             },
//             '&::-webkit-scrollbar-thumb': {
//               background: '#888',
//               borderRadius: '4px',
//             },
//             '&::-webkit-scrollbar-thumb:hover': {
//               background: '#555',
//             },
//           }}
//         >
//           {/* Centered container with max width */}
//           <Box
//             sx={{
//               p: 3,
//               maxWidth: '1200px',
//               mx: 'auto',
//             }}
//           >
//             {/* Breadcrumbs */}
//             <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 3 }}>
//               <Link
//                 underline="hover"
//                 color="inherit"
//                 href="/surrender"
//                 sx={{ cursor: 'pointer', fontSize: '0.875rem' }}
//               >
//                 Surrender
//               </Link>
//               <Typography sx={{ fontSize: '0.875rem', color: '#6B7280' }}>
//                 Imprest Surrender
//               </Typography>
//             </Breadcrumbs>

//             {/* Title */}
//             <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
//               Imprest Surrender Request
//             </Typography>

//             {/* Form Paper */}
//             <Paper
//               elevation={0}
//               sx={{
//                 p: 3,
//                 borderRadius: 2,
//                 bgcolor: '#FFFFFF',
//                 border: '1px solid #E5E7EB',
//               }}
//             >
//               {/* Add Information Section */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
//                   Add Information
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: '#6B7280', mb: 3 }}>
//                   Save data in the system
//                 </Typography>

//                 {/* Form Grid - Row 1 */}
//                 <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 2 }}>
//                   <Box>
//                     <Typography
//                       variant="caption"
//                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
//                     >
//                       Imprest Number
//                     </Typography>
//                     <TextField
//                       fullWidth
//                       size="small"
//                       placeholder="Add Number"
//                       value={formData.imprestNumber}
//                       onChange={(e) => handleInputChange('imprestNumber', e.target.value)}
//                       sx={{ bgcolor: 'white' }}
//                     />
//                   </Box>

//                   <Box>
//                     <Typography
//                       variant="caption"
//                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
//                     >
//                       User Requested
//                     </Typography>
//                     <TextField
//                       select
//                       fullWidth
//                       size="small"
//                       placeholder="User Requested"
//                       value={formData.userRequested}
//                       onChange={(e) => handleInputChange('userRequested', e.target.value)}
//                       sx={{ bgcolor: 'white' }}
//                     >
//                       {users.map((user) => (
//                         <MenuItem key={user} value={user}>
//                           {user}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Box>

//                   <Box>
//                     <Typography
//                       variant="caption"
//                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
//                     >
//                       Status
//                     </Typography>
//                     <TextField
//                       select
//                       fullWidth
//                       size="small"
//                       placeholder="Add Status"
//                       value={formData.status}
//                       onChange={(e) => handleInputChange('status', e.target.value)}
//                       sx={{ bgcolor: 'white' }}
//                     >
//                       {statuses.map((status) => (
//                         <MenuItem key={status} value={status}>
//                           {status}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Box>
//                 </Box>

//                 {/* Form Grid - Row 2 */}
//                 <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 2 }}>
//                   <Box>
//                     <Typography
//                       variant="caption"
//                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
//                     >
//                       Date Request
//                     </Typography>
//                     <TextField
//                       fullWidth
//                       size="small"
//                       type="date"
//                       value={formData.dateRequest}
//                       onChange={(e) => handleInputChange('dateRequest', e.target.value)}
//                       sx={{ bgcolor: 'white' }}
//                     />
//                   </Box>

//                   <Box>
//                     <Typography
//                       variant="caption"
//                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
//                     >
//                       User Entered
//                     </Typography>
//                     <TextField
//                       select
//                       fullWidth
//                       size="small"
//                       placeholder="User Entered"
//                       value={formData.userEntered}
//                       onChange={(e) => handleInputChange('userEntered', e.target.value)}
//                       sx={{ bgcolor: 'white' }}
//                     >
//                       {users.map((user) => (
//                         <MenuItem key={user} value={user}>
//                           {user}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Box>

//                   <Box>
//                     <Typography
//                       variant="caption"
//                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
//                     >
//                       Project
//                     </Typography>
//                     <TextField
//                       select
//                       fullWidth
//                       size="small"
//                       placeholder="Add Project"
//                       value={formData.project}
//                       onChange={(e) => handleInputChange('project', e.target.value)}
//                       sx={{ bgcolor: 'white' }}
//                     >
//                       {projects.map((project) => (
//                         <MenuItem key={project} value={project}>
//                           {project}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Box>
//                 </Box>

//                 {/* Department Field */}
//                 <Box sx={{ mb: 2 }}>
//                   <Typography
//                     variant="caption"
//                     sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
//                   >
//                     Department
//                   </Typography>
//                   <TextField
//                     select
//                     fullWidth
//                     size="small"
//                     placeholder="Add Department"
//                     value={formData.department}
//                     onChange={(e) => handleInputChange('department', e.target.value)}
//                     sx={{ bgcolor: 'white' }}
//                   >
//                     {departments.map((dept) => (
//                       <MenuItem key={dept} value={dept}>
//                         {dept}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                 </Box>

//                 {/* Remarks Field */}
//                 <Box>
//                   <Typography
//                     variant="caption"
//                     sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
//                   >
//                     Remarks
//                   </Typography>
//                   <TextField
//                     fullWidth
//                     multiline
//                     rows={3}
//                     placeholder="Add Remarks"
//                     value={formData.remarks}
//                     onChange={(e) => handleInputChange('remarks', e.target.value)}
//                     sx={{ bgcolor: 'white' }}
//                   />
//                 </Box>
//               </Box>

//               {/* Upload Document Section */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
//                   Upload Document
//                 </Typography>
//                 <Box
//                   sx={{
//                     border: '1.5px dashed #E5E7EB',
//                     borderRadius: 2,
//                     p: 3,
//                     textAlign: 'center',
//                     bgcolor: '#FAFAFA',
//                     cursor: 'pointer',
//                     maxWidth: '100%',
//                   }}
//                   onClick={() => document.getElementById('file-upload')?.click()}
//                 >
//                   <CloudUploadIcon sx={{ fontSize: 40, color: '#FF6B35', mb: 1 }} />
//                   <Typography variant="body2" sx={{ color: '#6B7280' }}>
//                     Choose a file to upload
//                   </Typography>
//                   <input
//                     id="file-upload"
//                     type="file"
//                     hidden
//                     onChange={handleFileUpload}
//                   />
//                   {formData.uploadedFile && (
//                     <Typography
//                       variant="caption"
//                       sx={{ color: '#4CAF50', mt: 1, display: 'block' }}
//                     >
//                       File uploaded: {formData.uploadedFile.name}
//                     </Typography>
//                   )}
//                 </Box>
//               </Box>

//               {/* Details of Spending Section */}
//              <Box sx={{ mb: 4 }}>
//       <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
//         Details of Spending
//       </Typography>

//       {/* Checkboxes can stay or be removed as needed */}

//       <TableContainer sx={{ border: '1px solid #E5E7EB', borderRadius: 1 }}>
//         <Table size="small">
//           <TableHead sx={{ bgcolor: '#F9FAFB' }}>
//             <TableRow>
//               <TableCell sx={{ fontWeight: 600, fontSize: '0.75rem', py: 1.5 }}>SL No</TableCell>
//               {detailsColumns.slice(1).map((col) => (
//                 <TableCell key={col} sx={{ fontWeight: 600, fontSize: '0.75rem', py: 1.5 }}>
//                   {col}
//                 </TableCell>
//               ))}
//               <TableCell sx={{ fontWeight: 600, fontSize: '0.75rem', py: 1.5 }}>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {tableRows.map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell sx={{ py: 1 }}>{index + 1}</TableCell>
//                 <TableCell sx={{ py: 1 }}>
//                   <TextField
//                     size="small"
//                     fullWidth
//                     placeholder="-"
//                     value={row.sanctionGroup}
//                     onChange={(e) => handleInputChanges(index, 'sanctionGroup', e.target.value)}
//                   />
//                 </TableCell>
//                 <TableCell sx={{ py: 1 }}>
//                   <TextField
//                     size="small"
//                     fullWidth
//                     placeholder="-"
//                     value={row.sanctionName}
//                     onChange={(e) => handleInputChanges(index, 'sanctionName', e.target.value)}
//                   />
//                 </TableCell>
//                 <TableCell sx={{ py: 1 }}>
//                   <TextField
//                     size="small"
//                     fullWidth
//                     placeholder="-"
//                     value={row.glAccount}
//                     onChange={(e) => handleInputChanges(index, 'glAccount', e.target.value)}
//                   />
//                 </TableCell>
//                 <TableCell sx={{ py: 1 }}>
//                   <TextField
//                     size="small"
//                     fullWidth
//                     placeholder="-"
//                     value={row.accountName}
//                     onChange={(e) => handleInputChanges(index, 'accountName', e.target.value)}
//                   />
//                 </TableCell>
//                 <TableCell sx={{ py: 1 }}>
//                   <TextField
//                     size="small"
//                     fullWidth
//                     placeholder="-"
//                     value={row.amountSanctioned}
//                     onChange={(e) => handleInputChanges(index, 'amountSanctioned', e.target.value)}
//                   />
//                 </TableCell>
//                 <TableCell sx={{ py: 1 }}>
//                   <TextField
//                     size="small"
//                     fullWidth
//                     placeholder="-"
//                     value={row.amountUsed}
//                     onChange={(e) => handleInputChanges(index, 'amountUsed', e.target.value)}
//                   />
//                 </TableCell>
//                 <TableCell sx={{ py: 1 }}>
//                   <IconButton size="small">
//                     <MoreVertIcon fontSize="small" />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Add More button */}
//       <Box sx={{ mt: 2 }}>
//         <Button variant="outlined" size="small" onClick={handleAddMore}>
//           Add More
//         </Button>
//       </Box>
//     </Box>

//               {/* Amount Entered Section */}
//               <Box
//                 sx={{
//                   mb: 4,
//                   p: 2,
//                   border: '1px solid #E5E7EB',
//                   borderRadius: 2,
//                   bgcolor: '#FAFAFA',
//                 }}
//               >
//                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
//                   Amount Entered
//                 </Typography>

//                 <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
//                   <Box>
//                     <Typography
//                       variant="caption"
//                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
//                     >
//                       SL No
//                     </Typography>
//                     <TextField
//                       fullWidth
//                       size="small"
//                       placeholder="Suggest to us"
//                       value={amounts.slNo}
//                       onChange={(e) => handleAmountChange('slNo', e.target.value)}
//                       sx={{ bgcolor: 'white' }}
//                     />
//                   </Box>

//                   <Box>
//                     <Typography
//                       variant="caption"
//                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
//                     >
//                       Reimbursement
//                     </Typography>
//                     <TextField
//                       fullWidth
//                       size="small"
//                       placeholder="-"
//                       value={amounts.netReimbursement}
//                       onChange={(e) => handleAmountChange('netReimbursement', e.target.value)}
//                       sx={{ bgcolor: 'white' }}
//                     />
//                   </Box>

//                   <Box>
//                     <Typography
//                       variant="caption"
//                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
//                     >
//                       Amount Advanced
//                     </Typography>
//                     <TextField
//                       fullWidth
//                       size="small"
//                       placeholder="-"
//                       value={amounts.amountAdvanced}
//                       onChange={(e) => handleAmountChange('amountAdvanced', e.target.value)}
//                       sx={{ bgcolor: 'white' }}
//                     />
//                   </Box>
//                 </Box>
//               </Box>

//               {/* Action Buttons */}
//               <Box
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'flex-end',
//                   gap: 2,
//                   pt: 3,
//                   mt: 2,
//                   borderTop: '1px solid #E5E7EB',
//                 }}
//               >
//                 <Button
//                   variant="outlined"
//                   onClick={handleCancel}
//                   sx={{
//                     textTransform: 'none',
//                     color: '#6B7280',
//                     borderColor: '#E5E7EB',
//                     px: 4,
//                     '&:hover': {
//                       borderColor: '#D1D5DB',
//                       bgcolor: '#F9FAFB',
//                     },
//                   }}
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   variant="contained"
//                   onClick={handleSubmit}
//                   sx={{
//                     textTransform: 'none',
//                     bgcolor: '#FF6B35',
//                     px: 4,
//                     '&:hover': {
//                       bgcolor: '#E2581B',
//                     },
//                   }}
//                 >
//                   Save
//                 </Button>
//               </Box>
//             </Paper>
//           </Box>
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

interface SurrenderLine {
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
  surrendered_amount?: string
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
  department_name: string
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

export default function EditSurrenderDetailsPage() {
  const router = useRouter()
  const { id } = useParams()
  const [selectedMenu, setSelectedMenu] = useState('Surrender')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const fixedField = {
  width: '100%',
  '& .MuiOutlinedInput-root': {
    minHeight: 44,
  },
  '& input': {
    padding: '10px 12px',
  },
}

const tableFieldStyle = {
  width: '100%',
  '& .MuiOutlinedInput-root': {
    minHeight: 44,
  },
  '& input': {
    padding: '10px 12px',
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
    surrenderNumber: '',
    imprestNumber: '',
    userRequester: '' as number | '',
    status: '',
    userEntered: '' as number | '',
    project: '' as number | '',
    department: '' as number | '',
    purpose: '',
    surrender_date: '',
    remarks: '',
  })

  const [surrenderLines, setSurrenderLines] = useState<SurrenderLine[]>([])
  const [existingAttachments, setExistingAttachments] = useState<Attachment[]>([])
  const [newFiles, setNewFiles] = useState<File[]>([])

  // Fetch dropdowns
  useEffect(() => {
    fetchUsers()
    fetchDepartments()
    fetchProjects()
    fetchClients()
    fetchAccounts()
  }, [])

  // Fetch surrender data
  useEffect(() => {
    if (id) fetchSurrender()
  }, [id])

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/users/`)
      setUsers(response.data)
    } catch (error) {
      console.error('Error fetching users:', error)
      showAlert('Failed to load users', 'warning')
    }
  }

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/department/departments/`)
      setDepartments(response.data)
    } catch (error) {
      console.error('Error fetching departments:', error)
      showAlert('Failed to load departments', 'warning')
    }
  }

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/project/projects-list/`)
      setProjects(response.data)
    } catch (error) {
      console.error('Error fetching projects:', error)
      showAlert('Failed to load projects', 'warning')
    }
  }

  const fetchClients = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/client/clients-list/`)
      setClients(response.data)
    } catch (error) {
      console.error('Error fetching clients:', error)
      showAlert('Failed to load clients', 'warning')
    }
  }

  const fetchAccounts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/account/accounts-list/`)
      setAccounts(response.data)
    } catch (error) {
      console.error('Error fetching accounts:', error)
      showAlert('Failed to load accounts', 'warning')
    }
  }

  const fetchSurrender = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/imprest/${id}/`)
      const data = res.data

      setFormData({
        surrenderNumber: data.imprest_id || '',
        imprestNumber: data.request_no || '',
        userRequester: data.user_requested || '',
        status: data.status || '',
        userEntered: data.user_entered || '',
        project: data.project || '',
        department: data.department_name || '',
        purpose: data.purpose || '',
        surrender_date: data.surrender_date || '',
        remarks: data.remarks || '',
      })

      setSurrenderLines(
        (data.surrender_lines || data.request_lines || []).map((line: any, index: number) => ({
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
          surrendered_amount: line.surrendered_amount?.toString() || '',
          supplier_no: line.supplier_no || '',
        }))
      )

      setExistingAttachments(data.attachments || [])
    } catch (err) {
      console.error('Error fetching surrender', err)
      showAlert('Failed to load surrender data', 'error')
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
    const updated = [...surrenderLines]
    updated[index] = { ...updated[index], [field]: value }
    setSurrenderLines(updated)
  }

  const addRow = () => {
    setSurrenderLines((prev) => [
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
        surrendered_amount: '',
        supplier_no: '',
      },
    ])
  }

  const handleDeleteLine = (index: number) => {
    setSurrenderLines(surrenderLines.filter((_, i) => i !== index))
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
      setExistingAttachments(existingAttachments.filter((a) => a.attachment_id !== attachmentId))
      showAlert('Attachment deleted successfully', 'success')
    } catch (error) {
      console.error('Error deleting attachment:', error)
      showAlert('Failed to delete attachment', 'error')
    }
  }

  // Update API
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
        surrender_date: formData.surrender_date,
        remarks: formData.remarks,
        created_by:1,
        request_lines: surrenderLines.map((line) => ({
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
          surrendered_amount: line.surrendered_amount ? parseFloat(line.surrendered_amount) : null,
          supplier_no: line.supplier_no,
        })),
      }

      await axios.put(`${API_BASE_URL}/imprest/${id}/`, payload)

      if (newFiles.length > 0) {
        await uploadAttachments()
      }

      showAlert('Surrender updated successfully!', 'success')
      setTimeout(() => {
        // router.push(`/surrender/view/${id}`)
      }, 1500)
    } catch (error: any) {
      console.error('Update failed', error)
      const errorMessage =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        'Failed to update surrender'
      showAlert(errorMessage, 'error')
    } finally {
      setSaving(false)
    }
  }

  const uploadAttachments = async () => {
    try {
      const fd = new FormData()
      newFiles.forEach((file) => {
        fd.append('files', file)
      })
      fd.append('attachment_type', 'Support')

      await axios.post(`${API_BASE_URL}/imprest/${id}/upload-multiple-attachments/`, fd)
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

  const getProjectId = (proj: Project) => proj.ProjectLink || proj.id || 0

  const getProjectName = (proj: Project) =>
    proj.ProjectName || proj.project_name || proj.name || `Project ${proj.id}`

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
              onClick={() => router.push('/surrender')}
            >
              Surrender
            </Link>
            <Typography fontSize="0.875rem">Edit Surrender</Typography>
          </Breadcrumbs>

          <Paper sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Edit Surrender
            </Typography>

            {/* Information */}
            <Grid container spacing={3} mb={4}>
              <Grid item md={4}>
                <TextField
                  label="Surrender Number"
                  size="small"
                  fullWidth
                  disabled
                  value={formData.surrenderNumber}
                  sx={{
                    bgcolor: '#F9FAFB',
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
                  }}
                />
              </Grid>

              <Grid item md={4}>
                <TextField
                  label="Imprest Number"
                  size="small"
                  fullWidth
                  disabled
                  value={formData.imprestNumber}
                  sx={{
                    bgcolor: '#F9FAFB',
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
                  }}
                />
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
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
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
                  label="User Requester *"
                  size="small"
                  fullWidth
                  value={formData.userRequester}
                  onChange={(e) => handleFormChange('userRequester', Number(e.target.value))}
                  sx={{
                    bgcolor: '#F9FAFB',
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
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
                  label="User Entered"
                  size="small"
                  fullWidth
                  value={formData.userEntered}
                  onChange={(e) => handleFormChange('userEntered', Number(e.target.value))}
                  sx={{
                    bgcolor: '#F9FAFB',
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
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
                  label="Surrender Date"
                  size="small"
                  type="date"
                  fullWidth
                  value={formData.surrender_date}
                  onChange={(e) => handleFormChange('surrender_date', e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    bgcolor: '#F9FAFB',
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
                  }}
                />
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
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
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
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
                  }}
                >
                  {departments.map((d) => (
                    <MenuItem key={d.id} value={d.id}>{d.department_name}</MenuItem>
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
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
                  }}
                />
              </Grid>

              <Grid item md={12}>
                <TextField
                  label="Remarks"
                  multiline
                  rows={2}
                  fullWidth
                  value={formData.remarks}
                  onChange={(e) => handleFormChange('remarks', e.target.value)}
                  sx={{
                    bgcolor: '#F9FAFB',
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
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
                        bgcolor: 'white',
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
                          '&:hover': { bgcolor: '#FEE2E2' },
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
                <Box
                  sx={{
                    border: '2px dashed #E5E7EB',
                    borderRadius: 2,
                    p: 4,
                    textAlign: 'center',
                    bgcolor: '#FAFAFA',
                  }}
                >
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
                      sx={{ textTransform: 'none', color: '#6B7280', fontWeight: 500 }}
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
                          bgcolor: 'white',
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
                            '&:hover': { bgcolor: '#FEE2E2' },
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
                        px: 2,
                      }}
                    >
                      Delete All
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>

            {/* Surrender Lines */}
            {/* Surrender Lines */}
<Typography fontWeight={600} mb={2}>
  Surrender Lines
</Typography>

<TableContainer
  sx={{
    border: '1px solid #E5E7EB',
    borderRadius: 2,
    overflowX: 'auto',
  }}
>
  <Table sx={{ minWidth: 1600 }} size="small">
    <TableHead sx={{ bgcolor: '#F9FAFB' }}>
      <TableRow>
        <TableCell sx={{ minWidth: 70, fontWeight: 600 }}>Sr No</TableCell>
        <TableCell sx={{ minWidth: 140, fontWeight: 600 }}>Debtor Code</TableCell>
        <TableCell sx={{ minWidth: 180, fontWeight: 600 }}>Debtor Name</TableCell>
        <TableCell sx={{ minWidth: 220, fontWeight: 600 }}>Description</TableCell>
        <TableCell sx={{ minWidth: 140, fontWeight: 600 }}>GL Account</TableCell>
        <TableCell sx={{ minWidth: 200, fontWeight: 600 }}>Account Name</TableCell>
        <TableCell sx={{ minWidth: 120, fontWeight: 600 }}>Est. Amt</TableCell>
        <TableCell sx={{ minWidth: 120, fontWeight: 600 }}>Appr. Amt</TableCell>
        <TableCell sx={{ minWidth: 120, fontWeight: 600 }}>Spent Amt</TableCell>
        {/* <TableCell sx={{ minWidth: 140, fontWeight: 600 }}>Surrendered Amt</TableCell> */}
        <TableCell sx={{ minWidth: 160, fontWeight: 600 }}>Supplier</TableCell>
        <TableCell sx={{ minWidth: 80, fontWeight: 600 }}>Action</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {surrenderLines.map((row, i) => (
        <TableRow key={i}>
          <TableCell>{row.srNo}</TableCell>

          {/* Debtor Code */}
          <TableCell>
            <Autocomplete
              size="small"
              fullWidth
              options={clients}
              getOptionLabel={(o) => `${o.DCLink}`}
              value={
                clients.find((c) => c.DCLink == row.debtor_code) || null
              }
              onChange={(e, val) => {
                handleRowChange(i, 'debtor_code', val?.DCLink || '')
                handleRowChange(i, 'debtor_name', val?.Name || '')
              }}
              renderInput={(params) => (
                <TextField {...params} fullWidth size="small" />
              )}
            />
          </TableCell>

          {/* Debtor Name */}
          <TableCell>
            <Autocomplete
              size="small"
              fullWidth
              options={clients}
              getOptionLabel={(o) => o.Name}
              value={
                clients.find((c) => c.DCLink == row.debtor_code) || null
              }
              onChange={(e, val) => {
                handleRowChange(i, 'debtor_code', val?.DCLink || '')
                handleRowChange(i, 'debtor_name', val?.Name || '')
              }}
              renderInput={(params) => (
                <TextField {...params} fullWidth size="small" />
              )}
            />
          </TableCell>

          {/* Description */}
          <TableCell>
            <TextField
              size="small"
              fullWidth
              value={row.description}
              onChange={(e) =>
                handleRowChange(i, 'description', e.target.value)
              }
            />
          </TableCell>

          {/* GL Account */}
          <TableCell>
            <Autocomplete
              size="small"
              fullWidth
              options={accounts}
              getOptionLabel={(o) => o.Master_Sub_Account}
              value={
                accounts.find(
                  (a) => a.Master_Sub_Account === row.gl_account
                ) || null
              }
              onChange={(e, val) => {
                handleRowChange(
                  i,
                  'gl_account',
                  val?.Master_Sub_Account || ''
                )
                handleRowChange(
                  i,
                  'account_name',
                  val?.Description || ''
                )
              }}
              renderInput={(params) => (
                <TextField {...params} fullWidth size="small" />
              )}
            />
          </TableCell>

          {/* Account Name */}
          <TableCell>
            <Autocomplete
              size="small"
              fullWidth
              options={accounts}
              getOptionLabel={(o) => o.Description}
              value={
                accounts.find(
                  (a) => a.Master_Sub_Account === row.gl_account
                ) || null
              }
              onChange={(e, val) => {
                handleRowChange(
                  i,
                  'gl_account',
                  val?.Master_Sub_Account || ''
                )
                handleRowChange(
                  i,
                  'account_name',
                  val?.Description || ''
                )
              }}
              renderInput={(params) => (
                <TextField {...params} fullWidth size="small" />
              )}
            />
          </TableCell>

          {/* Amount Fields */}
          {[
            'estimated_amount',
            'approved_amount',
            'spent_amount',
            // 'surrendered_amount',
          ].map((field) => (
            <TableCell key={field}>
              <TextField
                size="small"
                type="number"
                fullWidth
                value={(row as any)[field] || ''}
                onChange={(e) =>
                  handleRowChange(i, field, e.target.value)
                }
              />
            </TableCell>
          ))}

          {/* Supplier */}
          <TableCell>
            <TextField
              size="small"
              fullWidth
              value={row.supplier_no}
              onChange={(e) =>
                handleRowChange(i, 'supplier_no', e.target.value)
              }
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