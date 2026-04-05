// // // 'use client'

// // // import React, { useState } from 'react'
// // // import {
// // //   Box,
// // //   Paper,
// // //   Typography,
// // //   TextField,
// // //   Button,
// // //   MenuItem,
// // //   Breadcrumbs,
// // //   Link,
// // //   IconButton,
// // //   Checkbox,
// // //   FormControlLabel,
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableContainer,
// // //   TableHead,
// // //   TableRow,
// // // } from '@mui/material'
// // // import {
// // //   NavigateNext as NavigateNextIcon,
// // //   CloudUpload as CloudUploadIcon,
// // //   MoreVert as MoreVertIcon,
// // // } from '@mui/icons-material'
// // // import Sidebar from '../main/Sidebar'
// // // import Header from '../main/Header'
// // // import { useRouter } from 'next/navigation'

// // // const departments = ['Finance', 'HR', 'Marketing', 'Software']
// // // const users = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams']
// // // const statuses = ['Pending', 'Approved', 'Rejected']
// // // const projects = ['Project A', 'Project B', 'Project C']

// // // // const detailsColumns = [
// // // //   'SL No',
// // // //   'Sanction Group',
// // // //   'Sanction Name',
// // // //   'GL Account',
// // // //   'Account Name',
// // // //   'Amount Sanctioned',
// // // //   'Amount Used',
// // // // ]

// // // interface FormData {
// // //   imprestNumber: string
// // //   userRequested: string
// // //   status: string
// // //   dateRequest: string
// // //   userEntered: string
// // //   project: string
// // //   department: string
// // //   remarks: string
// // //   uploadedFile: File | null
// // // }
// // // const detailsColumns = [
// // //   'SL No',
// // //   'Sanction Group',
// // //   'Sanction Name',
// // //   'GL Account',
// // //   'Account Name',
// // //   'Amount Sanctioned',
// // //   'Amount Used',
// // // ]

// // // export default function SurrenderCreatePage() {
// // //   const router = useRouter()

// // //   const [selectedMenu, setSelectedMenu] = useState('Surrender')
// // //   const [formData, setFormData] = useState<FormData>({
// // //     imprestNumber: '',
// // //     userRequested: '',
// // //     status: '',
// // //     dateRequest: '',
// // //     userEntered: '',
// // //     project: '',
// // //     department: '',
// // //     remarks: '',
// // //     uploadedFile: null,
// // //   })

// // //     const [tableRows, setTableRows] = useState([
// // //     { sanctionGroup: '', sanctionName: '', glAccount: '', accountName: '', amountSanctioned: '', amountUsed: '' },
// // //   ])

// // //   const [amounts, setAmounts] = useState({
// // //     slNo: '',
// // //     sanctionGroup: '',
// // //     sanctionName: '',
// // //     netReimbursement: '',
// // //     amountAdvanced: '',
// // //   })

// // //   const handleInputChange = (field: string, value: string) => {
// // //     setFormData((prev) => ({ ...prev, [field]: value }))
// // //   }

// // //    const handleInputChanges = (index: number, field: string, value: string) => {
// // //     const updatedRows = [...tableRows]
// // //     updatedRows[index][field] = value

// // //     // If last row edited and value not empty, add a new blank row
// // //     if (
// // //       index === tableRows.length - 1 &&
// // //       value.trim() !== ''
// // //     ) {
// // //       updatedRows.push({ sanctionGroup: '', sanctionName: '', glAccount: '', accountName: '', amountSanctioned: '', amountUsed: '' })
// // //     }
// // //     setTableRows(updatedRows)
// // //   }
// // //   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
// // //     if (event.target.files && event.target.files[0]) {
// // //       setFormData((prev) => ({ ...prev, uploadedFile: event.target.files![0] }))
// // //     }
// // //   }

// // //   const handleAmountChange = (field: string, value: string) => {
// // //     setAmounts((prev) => ({ ...prev, [field]: value }))
// // //   }

// // //   const handleSubmit = () => {
// // //     console.log('Form Data:', formData)
// // //     console.log('Table Rows:', tableRows)
// // //     console.log('Amounts:', amounts)
// // //     // Submit logic here
// // //   }

// // //   const handleCancel = () => {
// // //     router.push('/surrender')
// // //   }
// // //   const handleAddMore = () => {
// // //     setTableRows((prev) => [...prev, { sanctionGroup: '', sanctionName: '', glAccount: '', accountName: '', amountSanctioned: '', amountUsed: '' }])
// // //   }
// // //   return (
// // //     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
// // //       {/* Sidebar */}
// // //       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

// // //       {/* Main Content */}
// // //       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
// // //         {/* Header */}
// // //         <Header />

// // //         {/* Page Content - Scrollable */}
// // //         <Box
// // //           sx={{
// // //             flexGrow: 1,
// // //             overflow: 'auto',
// // //             '&::-webkit-scrollbar': {
// // //               width: '8px',
// // //             },
// // //             '&::-webkit-scrollbar-track': {
// // //               background: '#f1f1f1',
// // //             },
// // //             '&::-webkit-scrollbar-thumb': {
// // //               background: '#888',
// // //               borderRadius: '4px',
// // //             },
// // //             '&::-webkit-scrollbar-thumb:hover': {
// // //               background: '#555',
// // //             },
// // //           }}
// // //         >
// // //           {/* Centered container with max width */}
// // //           <Box
// // //             sx={{
// // //               p: 3,
// // //               maxWidth: '1200px',
// // //               mx: 'auto',
// // //             }}
// // //           >
// // //             {/* Breadcrumbs */}
// // //             <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 3 }}>
// // //               <Link
// // //                 underline="hover"
// // //                 color="inherit"
// // //                 href="/surrender"
// // //                 sx={{ cursor: 'pointer', fontSize: '0.875rem' }}
// // //               >
// // //                 Surrender
// // //               </Link>
// // //               <Typography sx={{ fontSize: '0.875rem', color: '#6B7280' }}>
// // //                 Imprest Surrender
// // //               </Typography>
// // //             </Breadcrumbs>

// // //             {/* Title */}
// // //             <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
// // //               Imprest Surrender Request
// // //             </Typography>

// // //             {/* Form Paper */}
// // //             <Paper
// // //               elevation={0}
// // //               sx={{
// // //                 p: 3,
// // //                 borderRadius: 2,
// // //                 bgcolor: '#FFFFFF',
// // //                 border: '1px solid #E5E7EB',
// // //               }}
// // //             >
// // //               {/* Add Information Section */}
// // //               <Box sx={{ mb: 4 }}>
// // //                 <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
// // //                   Add Information
// // //                 </Typography>
// // //                 <Typography variant="body2" sx={{ color: '#6B7280', mb: 3 }}>
// // //                   Save data in the system
// // //                 </Typography>

// // //                 {/* Form Grid - Row 1 */}
// // //                 <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 2 }}>
// // //                   <Box>
// // //                     <Typography
// // //                       variant="caption"
// // //                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
// // //                     >
// // //                       Imprest Number
// // //                     </Typography>
// // //                     <TextField
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="Add Number"
// // //                       value={formData.imprestNumber}
// // //                       onChange={(e) => handleInputChange('imprestNumber', e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     />
// // //                   </Box>

// // //                   <Box>
// // //                     <Typography
// // //                       variant="caption"
// // //                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
// // //                     >
// // //                       User Requested
// // //                     </Typography>
// // //                     <TextField
// // //                       select
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="User Requested"
// // //                       value={formData.userRequested}
// // //                       onChange={(e) => handleInputChange('userRequested', e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     >
// // //                       {users.map((user) => (
// // //                         <MenuItem key={user} value={user}>
// // //                           {user}
// // //                         </MenuItem>
// // //                       ))}
// // //                     </TextField>
// // //                   </Box>

// // //                   <Box>
// // //                     <Typography
// // //                       variant="caption"
// // //                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
// // //                     >
// // //                       Status
// // //                     </Typography>
// // //                     <TextField
// // //                       select
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="Add Status"
// // //                       value={formData.status}
// // //                       onChange={(e) => handleInputChange('status', e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     >
// // //                       {statuses.map((status) => (
// // //                         <MenuItem key={status} value={status}>
// // //                           {status}
// // //                         </MenuItem>
// // //                       ))}
// // //                     </TextField>
// // //                   </Box>
// // //                 </Box>

// // //                 {/* Form Grid - Row 2 */}
// // //                 <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 2 }}>
// // //                   <Box>
// // //                     <Typography
// // //                       variant="caption"
// // //                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
// // //                     >
// // //                       Date Request
// // //                     </Typography>
// // //                     <TextField
// // //                       fullWidth
// // //                       size="small"
// // //                       type="date"
// // //                       value={formData.dateRequest}
// // //                       onChange={(e) => handleInputChange('dateRequest', e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     />
// // //                   </Box>

// // //                   <Box>
// // //                     <Typography
// // //                       variant="caption"
// // //                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
// // //                     >
// // //                       User Entered
// // //                     </Typography>
// // //                     <TextField
// // //                       select
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="User Entered"
// // //                       value={formData.userEntered}
// // //                       onChange={(e) => handleInputChange('userEntered', e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     >
// // //                       {users.map((user) => (
// // //                         <MenuItem key={user} value={user}>
// // //                           {user}
// // //                         </MenuItem>
// // //                       ))}
// // //                     </TextField>
// // //                   </Box>

// // //                   <Box>
// // //                     <Typography
// // //                       variant="caption"
// // //                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
// // //                     >
// // //                       Project
// // //                     </Typography>
// // //                     <TextField
// // //                       select
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="Add Project"
// // //                       value={formData.project}
// // //                       onChange={(e) => handleInputChange('project', e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     >
// // //                       {projects.map((project) => (
// // //                         <MenuItem key={project} value={project}>
// // //                           {project}
// // //                         </MenuItem>
// // //                       ))}
// // //                     </TextField>
// // //                   </Box>
// // //                 </Box>

// // //                 {/* Department Field */}
// // //                 <Box sx={{ mb: 2 }}>
// // //                   <Typography
// // //                     variant="caption"
// // //                     sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
// // //                   >
// // //                     Department
// // //                   </Typography>
// // //                   <TextField
// // //                     select
// // //                     fullWidth
// // //                     size="small"
// // //                     placeholder="Add Department"
// // //                     value={formData.department}
// // //                     onChange={(e) => handleInputChange('department', e.target.value)}
// // //                     sx={{ bgcolor: 'white' }}
// // //                   >
// // //                     {departments.map((dept) => (
// // //                       <MenuItem key={dept} value={dept}>
// // //                         {dept}
// // //                       </MenuItem>
// // //                     ))}
// // //                   </TextField>
// // //                 </Box>

// // //                 {/* Remarks Field */}
// // //                 <Box>
// // //                   <Typography
// // //                     variant="caption"
// // //                     sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
// // //                   >
// // //                     Remarks
// // //                   </Typography>
// // //                   <TextField
// // //                     fullWidth
// // //                     multiline
// // //                     rows={3}
// // //                     placeholder="Add Remarks"
// // //                     value={formData.remarks}
// // //                     onChange={(e) => handleInputChange('remarks', e.target.value)}
// // //                     sx={{ bgcolor: 'white' }}
// // //                   />
// // //                 </Box>
// // //               </Box>

// // //               {/* Upload Document Section */}
// // //               <Box sx={{ mb: 4 }}>
// // //                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
// // //                   Upload Document
// // //                 </Typography>
// // //                 <Box
// // //                   sx={{
// // //                     border: '1.5px dashed #E5E7EB',
// // //                     borderRadius: 2,
// // //                     p: 3,
// // //                     textAlign: 'center',
// // //                     bgcolor: '#FAFAFA',
// // //                     cursor: 'pointer',
// // //                     maxWidth: '100%',
// // //                   }}
// // //                   onClick={() => document.getElementById('file-upload')?.click()}
// // //                 >
// // //                   <CloudUploadIcon sx={{ fontSize: 40, color: '#FF6B35', mb: 1 }} />
// // //                   <Typography variant="body2" sx={{ color: '#6B7280' }}>
// // //                     Choose a file to upload
// // //                   </Typography>
// // //                   <input
// // //                     id="file-upload"
// // //                     type="file"
// // //                     hidden
// // //                     onChange={handleFileUpload}
// // //                   />
// // //                   {formData.uploadedFile && (
// // //                     <Typography
// // //                       variant="caption"
// // //                       sx={{ color: '#4CAF50', mt: 1, display: 'block' }}
// // //                     >
// // //                       File uploaded: {formData.uploadedFile.name}
// // //                     </Typography>
// // //                   )}
// // //                 </Box>
// // //               </Box>

// // //               {/* Details of Spending Section */}
// // //              <Box sx={{ mb: 4 }}>
// // //       <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
// // //         Details of Spending
// // //       </Typography>

// // //       {/* Checkboxes can stay or be removed as needed */}

// // //       <TableContainer sx={{ border: '1px solid #E5E7EB', borderRadius: 1 }}>
// // //         <Table size="small">
// // //           <TableHead sx={{ bgcolor: '#F9FAFB' }}>
// // //             <TableRow>
// // //               <TableCell sx={{ fontWeight: 600, fontSize: '0.75rem', py: 1.5 }}>SL No</TableCell>
// // //               {detailsColumns.slice(1).map((col) => (
// // //                 <TableCell key={col} sx={{ fontWeight: 600, fontSize: '0.75rem', py: 1.5 }}>
// // //                   {col}
// // //                 </TableCell>
// // //               ))}
// // //               <TableCell sx={{ fontWeight: 600, fontSize: '0.75rem', py: 1.5 }}>Actions</TableCell>
// // //             </TableRow>
// // //           </TableHead>
// // //           <TableBody>
// // //             {tableRows.map((row, index) => (
// // //               <TableRow key={index}>
// // //                 <TableCell sx={{ py: 1 }}>{index + 1}</TableCell>
// // //                 <TableCell sx={{ py: 1 }}>
// // //                   <TextField
// // //                     size="small"
// // //                     fullWidth
// // //                     placeholder="-"
// // //                     value={row.sanctionGroup}
// // //                     onChange={(e) => handleInputChanges(index, 'sanctionGroup', e.target.value)}
// // //                   />
// // //                 </TableCell>
// // //                 <TableCell sx={{ py: 1 }}>
// // //                   <TextField
// // //                     size="small"
// // //                     fullWidth
// // //                     placeholder="-"
// // //                     value={row.sanctionName}
// // //                     onChange={(e) => handleInputChanges(index, 'sanctionName', e.target.value)}
// // //                   />
// // //                 </TableCell>
// // //                 <TableCell sx={{ py: 1 }}>
// // //                   <TextField
// // //                     size="small"
// // //                     fullWidth
// // //                     placeholder="-"
// // //                     value={row.glAccount}
// // //                     onChange={(e) => handleInputChanges(index, 'glAccount', e.target.value)}
// // //                   />
// // //                 </TableCell>
// // //                 <TableCell sx={{ py: 1 }}>
// // //                   <TextField
// // //                     size="small"
// // //                     fullWidth
// // //                     placeholder="-"
// // //                     value={row.accountName}
// // //                     onChange={(e) => handleInputChanges(index, 'accountName', e.target.value)}
// // //                   />
// // //                 </TableCell>
// // //                 <TableCell sx={{ py: 1 }}>
// // //                   <TextField
// // //                     size="small"
// // //                     fullWidth
// // //                     placeholder="-"
// // //                     value={row.amountSanctioned}
// // //                     onChange={(e) => handleInputChanges(index, 'amountSanctioned', e.target.value)}
// // //                   />
// // //                 </TableCell>
// // //                 <TableCell sx={{ py: 1 }}>
// // //                   <TextField
// // //                     size="small"
// // //                     fullWidth
// // //                     placeholder="-"
// // //                     value={row.amountUsed}
// // //                     onChange={(e) => handleInputChanges(index, 'amountUsed', e.target.value)}
// // //                   />
// // //                 </TableCell>
// // //                 <TableCell sx={{ py: 1 }}>
// // //                   <IconButton size="small">
// // //                     <MoreVertIcon fontSize="small" />
// // //                   </IconButton>
// // //                 </TableCell>
// // //               </TableRow>
// // //             ))}
// // //           </TableBody>
// // //         </Table>
// // //       </TableContainer>

// // //       {/* Add More button */}
// // //       <Box sx={{ mt: 2 }}>
// // //         <Button variant="outlined" size="small" onClick={handleAddMore}>
// // //           Add More
// // //         </Button>
// // //       </Box>
// // //     </Box>

// // //               {/* Amount Entered Section */}
// // //               <Box
// // //                 sx={{
// // //                   mb: 4,
// // //                   p: 2,
// // //                   border: '1px solid #E5E7EB',
// // //                   borderRadius: 2,
// // //                   bgcolor: '#FAFAFA',
// // //                 }}
// // //               >
// // //                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
// // //                   Amount Entered
// // //                 </Typography>

// // //                 <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
// // //                   <Box>
// // //                     <Typography
// // //                       variant="caption"
// // //                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
// // //                     >
// // //                       SL No
// // //                     </Typography>
// // //                     <TextField
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="Suggest to us"
// // //                       value={amounts.slNo}
// // //                       onChange={(e) => handleAmountChange('slNo', e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     />
// // //                   </Box>

// // //                   <Box>
// // //                     <Typography
// // //                       variant="caption"
// // //                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
// // //                     >
// // //                       Reimbursement
// // //                     </Typography>
// // //                     <TextField
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="-"
// // //                       value={amounts.netReimbursement}
// // //                       onChange={(e) => handleAmountChange('netReimbursement', e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     />
// // //                   </Box>

// // //                   <Box>
// // //                     <Typography
// // //                       variant="caption"
// // //                       sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}
// // //                     >
// // //                       Amount Advanced
// // //                     </Typography>
// // //                     <TextField
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="-"
// // //                       value={amounts.amountAdvanced}
// // //                       onChange={(e) => handleAmountChange('amountAdvanced', e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     />
// // //                   </Box>
// // //                 </Box>
// // //               </Box>

// // //               {/* Action Buttons */}
// // //               <Box
// // //                 sx={{
// // //                   display: 'flex',
// // //                   justifyContent: 'flex-end',
// // //                   gap: 2,
// // //                   pt: 3,
// // //                   mt: 2,
// // //                   borderTop: '1px solid #E5E7EB',
// // //                 }}
// // //               >
// // //                 <Button
// // //                   variant="outlined"
// // //                   onClick={handleCancel}
// // //                   sx={{
// // //                     textTransform: 'none',
// // //                     color: '#6B7280',
// // //                     borderColor: '#E5E7EB',
// // //                     px: 4,
// // //                     '&:hover': {
// // //                       borderColor: '#D1D5DB',
// // //                       bgcolor: '#F9FAFB',
// // //                     },
// // //                   }}
// // //                 >
// // //                   Cancel
// // //                 </Button>
// // //                 <Button
// // //                   variant="contained"
// // //                   onClick={handleSubmit}
// // //                   sx={{
// // //                     textTransform: 'none',
// // //                     bgcolor: '#FF6B35',
// // //                     px: 4,
// // //                     '&:hover': {
// // //                       bgcolor: '#E2581B',
// // //                     },
// // //                   }}
// // //                 >
// // //                   Save
// // //                 </Button>
// // //               </Box>
// // //             </Paper>
// // //           </Box>
// // //         </Box>
// // //       </Box>
// // //     </Box>
// // //   )
// // // }

// // // 'use client'

// // // import React, { useState, useEffect } from 'react'
// // // import axios from 'axios'
// // // import {
// // //   Box,
// // //   Paper,
// // //   Typography,
// // //   TextField,
// // //   Grid,
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableContainer,
// // //   TableHead,
// // //   TableRow,
// // //   Breadcrumbs,
// // //   Link,
// // //   Button,
// // //   MenuItem,
// // //   CircularProgress,
// // //   Alert,
// // //   Snackbar,
// // //   Autocomplete,
// // //   IconButton,
// // //   Chip
// // // } from '@mui/material'
// // // import {
// // //   NavigateNext as NavigateNextIcon,
// // //   Delete as DeleteIcon,
// // //   CloudUpload as UploadIcon,
// // //   Close as CloseIcon,
// // // } from '@mui/icons-material'
// // // import Sidebar from '../main/Sidebar'
// // // import Header from '../main/Header'
// // // import { useRouter, useParams } from 'next/navigation'

// // // const API_BASE_URL = 'http://localhost:8000/api/v1'

// // // interface SurrenderLine {
// // //   breakdown_id?: number
// // //   srNo: string
// // //   debtor_code?: number
// // //   debtor_name?: string
// // //   description: string
// // //   gl_account: string
// // //   account_name: string
// // //   estimated_amount: string
// // //   approved_amount?: string
// // //   spent_amount?: string
// // //   surrendered_amount?: string
// // //   supplier_no: string
// // // }

// // // interface User {
// // //   id: number
// // //   username?: string
// // //   name?: string
// // //   first_name?: string
// // //   last_name?: string
// // //   email?: string
// // // }

// // // interface Department {
// // //   id: number
// // //   department_name: string
// // // }

// // // interface Project {
// // //   id?: number
// // //   ProjectLink?: number
// // //   project_name?: string
// // //   ProjectName?: string
// // //   project_code?: string
// // //   name?: string
// // // }

// // // interface Client {
// // //   DCLink: number
// // //   Name: string
// // // }

// // // interface Account {
// // //   Master_Sub_Account: string
// // //   Description: string
// // // }

// // // interface Attachment {
// // //   attachment_id: number
// // //   file_name: string
// // //   file_path: string
// // //   file_size: number
// // //   attachment_type: string
// // // }

// // // const statuses = [
// // //   'Draft',
// // //   'Pending_HOD',
// // //   'Pending_FC',
// // //   'Pending_DG',
// // //   'Approved',
// // //   'Rejected',
// // //   'Surrendered',
// // //   'Closed'
// // // ]

// // // export default function EditSurrenderDetailsPage() {
// // //   const router = useRouter()
// // //   const { id } = useParams()
// // //   const [selectedMenu, setSelectedMenu] = useState('Surrender')
// // //   const [loading, setLoading] = useState(true)
// // //   const [saving, setSaving] = useState(false)

// // //   const fixedField = {
// // //     width: '100%',
// // //     '& .MuiOutlinedInput-root': {
// // //       minHeight: 44,
// // //     },
// // //     '& input': {
// // //       padding: '10px 12px',
// // //     },
// // //   }

// // //   const tableFieldStyle = {
// // //     width: '100%',
// // //     '& .MuiOutlinedInput-root': {
// // //       minHeight: 44,
// // //     },
// // //     '& input': {
// // //       padding: '10px 12px',
// // //     },
// // //   }



// // //   // Alert states
// // //   const [alert, setAlert] = useState<{
// // //     open: boolean
// // //     message: string
// // //     severity: 'success' | 'error' | 'info' | 'warning'
// // //   }>({
// // //     open: false,
// // //     message: '',
// // //     severity: 'success'
// // //   })

// // //   // Dropdown data
// // //   const [users, setUsers] = useState<User[]>([])
// // //   const [departments, setDepartments] = useState<Department[]>([])
// // //   const [projects, setProjects] = useState<Project[]>([])
// // //   const [clients, setClients] = useState<Client[]>([])
// // //   const [accounts, setAccounts] = useState<Account[]>([])

// // //   // Form states
// // //   const [formData, setFormData] = useState({
// // //     surrenderNumber: '',
// // //     imprestNumber: '',
// // //     userRequester: '' as number | '',
// // //     status: '',
// // //     userEntered: '' as number | '',
// // //     project: '' as number | '',
// // //     department: '' as number | '',
// // //     purpose: '',
// // //     surrender_date: '',
// // //     remarks: '',
// // //   })

// // //   const [surrenderLines, setSurrenderLines] = useState<SurrenderLine[]>([])
// // //   const [existingAttachments, setExistingAttachments] = useState<Attachment[]>([])
// // //   const [newFiles, setNewFiles] = useState<File[]>([])

// // //   // Fetch dropdowns
// // //   useEffect(() => {
// // //     fetchUsers()
// // //     fetchDepartments()
// // //     fetchProjects()
// // //     fetchClients()
// // //     fetchAccounts()
// // //   }, [])

// // //   // Fetch surrender data
// // //   useEffect(() => {
// // //     if (id) fetchSurrender()
// // //   }, [id])

// // //   const fetchUsers = async () => {
// // //     try {
// // //       const response = await axios.get(`${API_BASE_URL}/users/users/`)
// // //       setUsers(response.data)
// // //     } catch (error) {
// // //       console.error('Error fetching users:', error)
// // //       showAlert('Failed to load users', 'warning')
// // //     }
// // //   }

// // //   const fetchDepartments = async () => {
// // //     try {
// // //       const response = await axios.get(`${API_BASE_URL}/department/departments/`)
// // //       setDepartments(response.data)
// // //     } catch (error) {
// // //       console.error('Error fetching departments:', error)
// // //       showAlert('Failed to load departments', 'warning')
// // //     }
// // //   }

// // //   const fetchProjects = async () => {
// // //     try {
// // //       const response = await axios.get(`${API_BASE_URL}/project/projects-list/`)
// // //       setProjects(response.data)
// // //     } catch (error) {
// // //       console.error('Error fetching projects:', error)
// // //       showAlert('Failed to load projects', 'warning')
// // //     }
// // //   }

// // //   const fetchClients = async () => {
// // //     try {
// // //       const response = await axios.get(`${API_BASE_URL}/client/clients-list/`)
// // //       setClients(response.data)
// // //     } catch (error) {
// // //       console.error('Error fetching clients:', error)
// // //       showAlert('Failed to load clients', 'warning')
// // //     }
// // //   }

// // //   const fetchAccounts = async () => {
// // //     try {
// // //       const response = await axios.get(`${API_BASE_URL}/account/accounts-list/`)
// // //       setAccounts(response.data)
// // //     } catch (error) {
// // //       console.error('Error fetching accounts:', error)
// // //       showAlert('Failed to load accounts', 'warning')
// // //     }
// // //   }

// // //   const fetchSurrender = async () => {
// // //     try {
// // //       const res = await axios.get(`${API_BASE_URL}/imprest/${id}/`)
// // //       const data = res.data

// // //       setFormData({
// // //         surrenderNumber: data.imprest_id || '',
// // //         imprestNumber: data.request_no || '',
// // //         userRequester: data.user_requested || '',
// // //         status: data.status || '',
// // //         userEntered: data.user_entered || '',
// // //         project: data.project || '',
// // //         department: data.department_name || '',
// // //         purpose: data.purpose || '',
// // //         surrender_date: data.surrender_date || '',
// // //         remarks: data.remarks || '',
// // //       })

// // //       setSurrenderLines(
// // //         (data.surrender_lines || data.request_lines || []).map((line: any, index: number) => ({
// // //           breakdown_id: line.breakdown_id,
// // //           srNo: String(index + 1),
// // //           debtor_code: line.debtor_code || '',
// // //           debtor_name: line.debtor_name || '',
// // //           description: line.description || '',
// // //           gl_account: line.gl_account || '',
// // //           account_name: line.account_name || '',
// // //           estimated_amount: line.estimated_amount?.toString() || '',
// // //           approved_amount: line.approved_amount?.toString() || '',
// // //           spent_amount: line.spent_amount?.toString() || '',
// // //           surrendered_amount: line.surrendered_amount?.toString() || '',
// // //           supplier_no: line.supplier_no || '',
// // //         }))
// // //       )

// // //       setExistingAttachments(data.attachments || [])
// // //     } catch (err) {
// // //       console.error('Error fetching surrender', err)
// // //       showAlert('Failed to load surrender data', 'error')
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const showAlert = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
// // //     setAlert({ open: true, message, severity })
// // //   }

// // //   const handleCloseAlert = () => {
// // //     setAlert({ ...alert, open: false })
// // //   }

// // //   const handleFormChange = (field: string, value: string | number) => {
// // //     setFormData((prev) => ({ ...prev, [field]: value }))
// // //   }

// // //   const handleRowChange = (index: number, field: string, value: string | number) => {
// // //     const updated = [...surrenderLines]
// // //     updated[index] = { ...updated[index], [field]: value }
// // //     setSurrenderLines(updated)
// // //   }

// // //   const addRow = () => {
// // //     setSurrenderLines((prev) => [
// // //       ...prev,
// // //       {
// // //         srNo: String(prev.length + 1),
// // //         debtor_code: undefined,
// // //         debtor_name: '',
// // //         description: '',
// // //         gl_account: '',
// // //         account_name: '',
// // //         estimated_amount: '',
// // //         approved_amount: '',
// // //         spent_amount: '',
// // //         surrendered_amount: '',
// // //         supplier_no: '',
// // //       },
// // //     ])
// // //   }

// // //   const handleDeleteLine = (index: number) => {
// // //     setSurrenderLines(surrenderLines.filter((_, i) => i !== index))
// // //   }

// // //   // File handling
// // //   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
// // //     const files = event.target.files
// // //     if (files) {
// // //       setNewFiles([...newFiles, ...Array.from(files)])
// // //     }
// // //   }

// // //   const handleFileDelete = (index: number) => {
// // //     setNewFiles(newFiles.filter((_, i) => i !== index))
// // //   }

// // //   const handleDeleteAllFiles = () => {
// // //     setNewFiles([])
// // //   }

// // //   const handleDeleteExistingAttachment = async (attachmentId: number) => {
// // //     if (!window.confirm('Are you sure you want to delete this attachment?')) return

// // //     try {
// // //       await axios.delete(`${API_BASE_URL}/imprest/attachments/${attachmentId}/`)
// // //       setExistingAttachments(existingAttachments.filter((a) => a.attachment_id !== attachmentId))
// // //       showAlert('Attachment deleted successfully', 'success')
// // //     } catch (error) {
// // //       console.error('Error deleting attachment:', error)
// // //       showAlert('Failed to delete attachment', 'error')
// // //     }
// // //   }

// // //     const updateStatus = async (newStatus: string) => {
// // //     try {
// // //       setSaving(true)

// // //       await axios.patch(`${API_BASE_URL}/imprest/${id}/`, {
// // //         status: newStatus,
// // //       })

// // //       setFormData((prev) => ({
// // //         ...prev,
// // //         status: newStatus,
// // //       }))

// // //       showAlert(`Status updated to ${newStatus}`, 'success')

// // //     } catch (error) {
// // //       console.error(error)
// // //       showAlert('Failed to update status', 'error')
// // //     } finally {
// // //       setSaving(false)
// // //     }
// // //   }

// // //   // Update API
// // //   const handleSave = async () => {
// // //     try {
// // //       setSaving(true)

// // //       const payload = {
// // //         user_requested: formData.userRequester,
// // //         user_entered: formData.userEntered,
// // //         department: formData.department,
// // //         project: formData.project,
// // //         purpose: formData.purpose,
// // //         status: formData.status,
// // //         surrender_date: formData.surrender_date,
// // //         remarks: formData.remarks,
// // //         created_by: 1,
// // //         request_lines: surrenderLines.map((line) => ({
// // //           breakdown_id: line.breakdown_id,
// // //           debtor_code: line.debtor_code,
// // //           debtor_name: line.debtor_name,
// // //           description: line.description,
// // //           gl_account: line.gl_account,
// // //           expense_head: line.gl_account,
// // //           account_name: line.account_name,
// // //           estimated_amount: parseFloat(line.estimated_amount || '0'),
// // //           approved_amount: line.approved_amount ? parseFloat(line.approved_amount) : null,
// // //           spent_amount: line.spent_amount ? parseFloat(line.spent_amount) : null,
// // //           surrendered_amount: line.surrendered_amount ? parseFloat(line.surrendered_amount) : null,
// // //           supplier_no: line.supplier_no,
// // //         })),
// // //       }

// // //       await axios.put(`${API_BASE_URL}/imprest/${id}/`, payload)

// // //       if (newFiles.length > 0) {
// // //         await uploadAttachments()
// // //       }

// // //       showAlert('Surrender updated successfully!', 'success')
// // //       setTimeout(() => {
// // //         // router.push(`/surrender/view/${id}`)
// // //       }, 1500)
// // //     } catch (error: any) {
// // //       console.error('Update failed', error)
// // //       const errorMessage =
// // //         error.response?.data?.detail ||
// // //         error.response?.data?.message ||
// // //         'Failed to update surrender'
// // //       showAlert(errorMessage, 'error')
// // //     } finally {
// // //       setSaving(false)
// // //     }
// // //   }

// // //   const uploadAttachments = async () => {
// // //     try {
// // //       const fd = new FormData()
// // //       newFiles.forEach((file) => {
// // //         fd.append('files', file)
// // //       })
// // //       fd.append('attachment_type', 'Support')

// // //       await axios.post(`${API_BASE_URL}/imprest/${id}/upload-multiple-attachments/`, fd)
// // //     } catch (error) {
// // //       console.error('Error uploading attachments:', error)
// // //       showAlert('Failed to upload new attachments', 'warning')
// // //     }
// // //   }


// // //   // Helper functions
// // //   const getUserDisplayName = (user: User) => {
// // //     if (user.name) return user.name
// // //     if (user.first_name && user.last_name) return `${user.first_name} ${user.last_name}`
// // //     if (user.first_name) return user.first_name
// // //     return user.username || `User ${user.id}`
// // //   }

// // //   const getProjectId = (proj: Project) => proj.ProjectLink || proj.id || 0

// // //   const getProjectName = (proj: Project) =>
// // //     proj.ProjectName || proj.project_name || proj.name || `Project ${proj.id}`

// // //   if (loading) {
// // //     return (
// // //       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
// // //         <CircularProgress />
// // //       </Box>
// // //     )
// // //   }

// // //   return (
// // //     <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
// // //       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

// // //       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
// // //         <Header />

// // //         <Box sx={{ p: 3, overflow: 'auto' }}>
// // //           <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
// // //             <Link
// // //               underline="hover"
// // //               sx={{ cursor: 'pointer', fontSize: '0.875rem' }}
// // //               onClick={() => router.push('/surrender')}
// // //             >
// // //               Surrender
// // //             </Link>
// // //             <Typography fontSize="0.875rem">Edit Surrender</Typography>
// // //           </Breadcrumbs>

// // //           <Paper sx={{ p: 4, borderRadius: 2 }}>
// // //             <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
// // //               Edit Surrender
// // //             </Typography>

// // //             {/* Information */}
// // //             <Grid container spacing={3} mb={4}>
// // //               <Grid item md={4}>
// // //                 <TextField
// // //                   label="Surrender Number"
// // //                   size="small"
// // //                   fullWidth
// // //                   disabled
// // //                   value={formData.surrenderNumber}
// // //                   sx={{
// // //                     bgcolor: '#F9FAFB',
// // //                     '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
// // //                   }}
// // //                 />
// // //               </Grid>

// // //               <Grid item md={4}>
// // //                 <TextField
// // //                   label="Imprest Number"
// // //                   size="small"
// // //                   fullWidth
// // //                   disabled
// // //                   value={formData.imprestNumber}
// // //                   sx={{
// // //                     bgcolor: '#F9FAFB',
// // //                     '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
// // //                   }}
// // //                 />
// // //               </Grid>

// // //               <Grid item md={4}>
// // //                 <TextField
// // //                   select
// // //                   label="Status *"
// // //                   size="small"
// // //                   fullWidth
// // //                   value={formData.status}
// // //                   onChange={(e) => handleFormChange('status', e.target.value)}
// // //                   sx={{
// // //                     bgcolor: '#F9FAFB',
// // //                     '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
// // //                   }}
// // //                 >
// // //                   {statuses.map((s) => (
// // //                     <MenuItem key={s} value={s}>{s}</MenuItem>
// // //                   ))}
// // //                 </TextField>
// // //               </Grid>
           
// // //               <Grid item md={4}>
// // //                 <TextField
// // //                   select
// // //                   label="User Requester *"
// // //                   size="small"
// // //                   fullWidth
// // //                   value={formData.userRequester}
// // //                   onChange={(e) => handleFormChange('userRequester', Number(e.target.value))}
// // //                   sx={{
// // //                     bgcolor: '#F9FAFB',
// // //                     '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
// // //                   }}
// // //                 >
// // //                   {users.map((user) => (
// // //                     <MenuItem key={user.id} value={user.id}>
// // //                       {getUserDisplayName(user)}
// // //                     </MenuItem>
// // //                   ))}
// // //                 </TextField>
// // //               </Grid>

// // //               <Grid item md={4}>
// // //                 <TextField
// // //                   select
// // //                   label="User Entered"
// // //                   size="small"
// // //                   fullWidth
// // //                   value={formData.userEntered}
// // //                   onChange={(e) => handleFormChange('userEntered', Number(e.target.value))}
// // //                   sx={{
// // //                     bgcolor: '#F9FAFB',
// // //                     '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
// // //                   }}
// // //                 >
// // //                   {users.map((user) => (
// // //                     <MenuItem key={user.id} value={user.id}>
// // //                       {getUserDisplayName(user)}
// // //                     </MenuItem>
// // //                   ))}
// // //                 </TextField>
// // //               </Grid>

// // //               <Grid item md={4}>
// // //                 <TextField
// // //                   label="Surrender Date"
// // //                   size="small"
// // //                   type="date"
// // //                   fullWidth
// // //                   value={formData.surrender_date}
// // //                   onChange={(e) => handleFormChange('surrender_date', e.target.value)}
// // //                   InputLabelProps={{ shrink: true }}
// // //                   sx={{
// // //                     bgcolor: '#F9FAFB',
// // //                     '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
// // //                   }}
// // //                 />
// // //               </Grid>

// // //               <Grid item md={4}>
// // //                 <TextField
// // //                   select
// // //                   label="Project *"
// // //                   size="small"
// // //                   fullWidth
// // //                   value={formData.project}
// // //                   onChange={(e) => handleFormChange('project', Number(e.target.value))}
// // //                   sx={{
// // //                     bgcolor: '#F9FAFB',
// // //                     '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
// // //                   }}
// // //                 >
// // //                   {projects.map((p) => (
// // //                     <MenuItem key={getProjectId(p)} value={getProjectId(p)}>
// // //                       {getProjectName(p)}
// // //                     </MenuItem>
// // //                   ))}
// // //                 </TextField>
// // //               </Grid>

// // //               <Grid item md={4}>
// // //                 <TextField
// // //                   select
// // //                   label="Department *"
// // //                   size="small"
// // //                   fullWidth
// // //                   value={formData.department}
// // //                   onChange={(e) => handleFormChange('department', Number(e.target.value))}
// // //                   sx={{
// // //                     bgcolor: '#F9FAFB',
// // //                     '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
// // //                   }}
// // //                 >
// // //                   {departments.map((d) => (
// // //                     <MenuItem key={d.id} value={d.id}>{d.department_name}</MenuItem>
// // //                   ))}
// // //                 </TextField>
// // //               </Grid>

// // //               <Grid item md={12}>
// // //                 <TextField
// // //                   label="Purpose *"
// // //                   multiline
// // //                   rows={3}
// // //                   fullWidth
// // //                   value={formData.purpose}
// // //                   onChange={(e) => handleFormChange('purpose', e.target.value)}
// // //                   sx={{
// // //                     bgcolor: '#F9FAFB',
// // //                     '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
// // //                   }}
// // //                 />
// // //               </Grid>

// // //               <Grid item md={12}>
// // //                 <TextField
// // //                   label="Remarks"
// // //                   multiline
// // //                   rows={2}
// // //                   fullWidth
// // //                   value={formData.remarks}
// // //                   onChange={(e) => handleFormChange('remarks', e.target.value)}
// // //                   sx={{
// // //                     bgcolor: '#F9FAFB',
// // //                     '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#E5E7EB' } },
// // //                   }}
// // //                 />
// // //               </Grid>
// // //             </Grid>

// // //             {/* Existing Attachments */}
// // //             {existingAttachments.length > 0 && (
// // //               <Box sx={{ mb: 4 }}>
// // //                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
// // //                   Existing Attachments
// // //                 </Typography>
// // //                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// // //                   {existingAttachments.map((file) => (
// // //                     <Box
// // //                       key={file.attachment_id}
// // //                       sx={{
// // //                         position: 'relative',
// // //                         width: 120,
// // //                         height: 120,
// // //                         border: '1px solid #E5E7EB',
// // //                         borderRadius: 2,
// // //                         p: 2,
// // //                         display: 'flex',
// // //                         flexDirection: 'column',
// // //                         alignItems: 'center',
// // //                         justifyContent: 'center',
// // //                         bgcolor: 'white',
// // //                       }}
// // //                     >
// // //                       <UploadIcon sx={{ fontSize: 40, color: '#FF6B35', mb: 1 }} />
// // //                       <Typography variant="caption" sx={{ textAlign: 'center', wordBreak: 'break-all', fontSize: '0.7rem', color: '#6B7280' }}>
// // //                         {file.file_name.length > 15 ? file.file_name.substring(0, 12) + '...' : file.file_name}
// // //                       </Typography>
// // //                       <Typography variant="caption" sx={{ fontSize: '0.65rem', color: '#9CA3AF', mt: 0.5 }}>
// // //                         {(file.file_size / 1024).toFixed(2)} KB
// // //                       </Typography>
// // //                       <IconButton
// // //                         size="small"
// // //                         onClick={() => handleDeleteExistingAttachment(file.attachment_id)}
// // //                         sx={{
// // //                           position: 'absolute',
// // //                           top: 4,
// // //                           right: 4,
// // //                           bgcolor: 'white',
// // //                           boxShadow: 1,
// // //                           width: 20,
// // //                           height: 20,
// // //                           '&:hover': { bgcolor: '#FEE2E2' },
// // //                         }}
// // //                       >
// // //                         <CloseIcon sx={{ fontSize: 14, color: '#6B7280' }} />
// // //                       </IconButton>
// // //                     </Box>
// // //                   ))}
// // //                 </Box>
// // //               </Box>
// // //             )}

// // //             {/* Upload New Documents */}
// // //             <Box sx={{ mb: 4 }}>
// // //               <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
// // //                 Upload New Documents
// // //               </Typography>

// // //               {newFiles.length === 0 ? (
// // //                 <Box
// // //                   sx={{
// // //                     border: '2px dashed #E5E7EB',
// // //                     borderRadius: 2,
// // //                     p: 4,
// // //                     textAlign: 'center',
// // //                     bgcolor: '#FAFAFA',
// // //                   }}
// // //                 >
// // //                   <input
// // //                     accept="*/*"
// // //                     style={{ display: 'none' }}
// // //                     id="file-upload"
// // //                     type="file"
// // //                     multiple
// // //                     onChange={handleFileUpload}
// // //                   />
// // //                   <label htmlFor="file-upload">
// // //                     <Button
// // //                       component="span"
// // //                       sx={{ textTransform: 'none', color: '#6B7280', fontWeight: 500 }}
// // //                     >
// // //                       <UploadIcon sx={{ mr: 1 }} />
// // //                       Click to upload documents
// // //                     </Button>
// // //                   </label>
// // //                 </Box>
// // //               ) : (
// // //                 <Box>
// // //                   <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
// // //                     {newFiles.map((file, index) => (
// // //                       <Box
// // //                         key={index}
// // //                         sx={{
// // //                           position: 'relative',
// // //                           width: 120,
// // //                           height: 120,
// // //                           border: '1px solid #E5E7EB',
// // //                           borderRadius: 2,
// // //                           p: 2,
// // //                           display: 'flex',
// // //                           flexDirection: 'column',
// // //                           alignItems: 'center',
// // //                           justifyContent: 'center',
// // //                           bgcolor: 'white',
// // //                         }}
// // //                       >
// // //                         <UploadIcon sx={{ fontSize: 40, color: '#FF6B35', mb: 1 }} />
// // //                         <Typography variant="caption" sx={{ textAlign: 'center', wordBreak: 'break-all', fontSize: '0.7rem', color: '#6B7280' }}>
// // //                           {file.name.length > 15 ? file.name.substring(0, 12) + '...' : file.name}
// // //                         </Typography>
// // //                         <Typography variant="caption" sx={{ fontSize: '0.65rem', color: '#9CA3AF', mt: 0.5 }}>
// // //                           {(file.size / 1024).toFixed(2)} KB
// // //                         </Typography>
// // //                         <IconButton
// // //                           size="small"
// // //                           onClick={() => handleFileDelete(index)}
// // //                           sx={{
// // //                             position: 'absolute',
// // //                             top: 4,
// // //                             right: 4,
// // //                             bgcolor: 'white',
// // //                             boxShadow: 1,
// // //                             width: 20,
// // //                             height: 20,
// // //                             '&:hover': { bgcolor: '#FEE2E2' },
// // //                           }}
// // //                         >
// // //                           <CloseIcon sx={{ fontSize: 14, color: '#6B7280' }} />
// // //                         </IconButton>
// // //                       </Box>
// // //                     ))}
// // //                   </Box>
// // //                   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// // //                     <Typography variant="caption" sx={{ color: '#6B7280' }}>
// // //                       {newFiles.length} new file(s) ready to upload
// // //                     </Typography>
// // //                     <Button
// // //                       size="small"
// // //                       onClick={handleDeleteAllFiles}
// // //                       sx={{
// // //                         textTransform: 'none',
// // //                         color: '#6B7280',
// // //                         fontSize: '0.875rem',
// // //                         border: '1px solid #E5E7EB',
// // //                         px: 2,
// // //                       }}
// // //                     >
// // //                       Delete All
// // //                     </Button>
// // //                   </Box>
// // //                 </Box>
// // //               )}
// // //             </Box>

// // //             {/* Surrender Lines */}
// // //             {/* Surrender Lines */}
// // //             <Typography fontWeight={600} mb={2}>
// // //               Surrender Lines
// // //             </Typography>

// // //             <TableContainer
// // //               sx={{
// // //                 border: '1px solid #E5E7EB',
// // //                 borderRadius: 2,
// // //                 overflowX: 'auto',
// // //               }}
// // //             >
// // //               <Table sx={{ minWidth: 1600 }} size="small">
// // //                 <TableHead sx={{ bgcolor: '#F9FAFB' }}>
// // //                   <TableRow>
// // //                     <TableCell sx={{ minWidth: 70, fontWeight: 600 }}>Sr No</TableCell>
// // //                     <TableCell sx={{ minWidth: 140, fontWeight: 600 }}>Debtor Code</TableCell>
// // //                     <TableCell sx={{ minWidth: 180, fontWeight: 600 }}>Debtor Name</TableCell>
// // //                     <TableCell sx={{ minWidth: 220, fontWeight: 600 }}>Description</TableCell>
// // //                     <TableCell sx={{ minWidth: 140, fontWeight: 600 }}>GL Account</TableCell>
// // //                     <TableCell sx={{ minWidth: 200, fontWeight: 600 }}>Account Name</TableCell>
// // //                     <TableCell sx={{ minWidth: 120, fontWeight: 600 }}>Est. Amt</TableCell>
// // //                     <TableCell sx={{ minWidth: 120, fontWeight: 600 }}>Appr. Amt</TableCell>
// // //                     <TableCell sx={{ minWidth: 120, fontWeight: 600 }}>Spent Amt</TableCell>
// // //                     {/* <TableCell sx={{ minWidth: 140, fontWeight: 600 }}>Surrendered Amt</TableCell> */}
// // //                     <TableCell sx={{ minWidth: 160, fontWeight: 600 }}>Supplier</TableCell>
// // //                     <TableCell sx={{ minWidth: 80, fontWeight: 600 }}>Action</TableCell>
// // //                   </TableRow>
// // //                 </TableHead>

// // //                 <TableBody>
// // //                   {surrenderLines.map((row, i) => (
// // //                     <TableRow key={i}>
// // //                       <TableCell>{row.srNo}</TableCell>

// // //                       {/* Debtor Code */}
// // //                       <TableCell>
// // //                         <Autocomplete
// // //                           size="small"
// // //                           fullWidth
// // //                           options={clients}
// // //                           getOptionLabel={(o) => `${o.DCLink}`}
// // //                           value={
// // //                             clients.find((c) => c.DCLink == row.debtor_code) || null
// // //                           }
// // //                           onChange={(e, val) => {
// // //                             handleRowChange(i, 'debtor_code', val?.DCLink || '')
// // //                             handleRowChange(i, 'debtor_name', val?.Name || '')
// // //                           }}
// // //                           renderInput={(params) => (
// // //                             <TextField {...params} fullWidth size="small" />
// // //                           )}
// // //                         />
// // //                       </TableCell>

// // //                       {/* Debtor Name */}
// // //                       <TableCell>
// // //                         <Autocomplete
// // //                           size="small"
// // //                           fullWidth
// // //                           options={clients}
// // //                           getOptionLabel={(o) => o.Name}
// // //                           value={
// // //                             clients.find((c) => c.DCLink == row.debtor_code) || null
// // //                           }
// // //                           onChange={(e, val) => {
// // //                             handleRowChange(i, 'debtor_code', val?.DCLink || '')
// // //                             handleRowChange(i, 'debtor_name', val?.Name || '')
// // //                           }}
// // //                           renderInput={(params) => (
// // //                             <TextField {...params} fullWidth size="small" />
// // //                           )}
// // //                         />
// // //                       </TableCell>

// // //                       {/* Description */}
// // //                       <TableCell>
// // //                         <TextField
// // //                           size="small"
// // //                           fullWidth
// // //                           value={row.description}
// // //                           onChange={(e) =>
// // //                             handleRowChange(i, 'description', e.target.value)
// // //                           }
// // //                         />
// // //                       </TableCell>

// // //                       {/* GL Account */}
// // //                       <TableCell>
// // //                         <Autocomplete
// // //                           size="small"
// // //                           fullWidth
// // //                           options={accounts}
// // //                           getOptionLabel={(o) => o.Master_Sub_Account}
// // //                           value={
// // //                             accounts.find(
// // //                               (a) => a.Master_Sub_Account === row.gl_account
// // //                             ) || null
// // //                           }
// // //                           onChange={(e, val) => {
// // //                             handleRowChange(
// // //                               i,
// // //                               'gl_account',
// // //                               val?.Master_Sub_Account || ''
// // //                             )
// // //                             handleRowChange(
// // //                               i,
// // //                               'account_name',
// // //                               val?.Description || ''
// // //                             )
// // //                           }}
// // //                           renderInput={(params) => (
// // //                             <TextField {...params} fullWidth size="small" />
// // //                           )}
// // //                         />
// // //                       </TableCell>

// // //                       {/* Account Name */}
// // //                       <TableCell>
// // //                         <Autocomplete
// // //                           size="small"
// // //                           fullWidth
// // //                           options={accounts}
// // //                           getOptionLabel={(o) => o.Description}
// // //                           value={
// // //                             accounts.find(
// // //                               (a) => a.Master_Sub_Account === row.gl_account
// // //                             ) || null
// // //                           }
// // //                           onChange={(e, val) => {
// // //                             handleRowChange(
// // //                               i,
// // //                               'gl_account',
// // //                               val?.Master_Sub_Account || ''
// // //                             )
// // //                             handleRowChange(
// // //                               i,
// // //                               'account_name',
// // //                               val?.Description || ''
// // //                             )
// // //                           }}
// // //                           renderInput={(params) => (
// // //                             <TextField {...params} fullWidth size="small" />
// // //                           )}
// // //                         />
// // //                       </TableCell>

// // //                       {/* Amount Fields */}
// // //                       {[
// // //                         'estimated_amount',
// // //                         'approved_amount',
// // //                         'spent_amount',
// // //                         // 'surrendered_amount',
// // //                       ].map((field) => (
// // //                         <TableCell key={field}>
// // //                           <TextField
// // //                             size="small"
// // //                             type="number"
// // //                             fullWidth
// // //                             value={(row as any)[field] || ''}
// // //                             onChange={(e) =>
// // //                               handleRowChange(i, field, e.target.value)
// // //                             }
// // //                           />
// // //                         </TableCell>
// // //                       ))}

// // //                       {/* Supplier */}
// // //                       <TableCell>
// // //                         <TextField
// // //                           size="small"
// // //                           fullWidth
// // //                           value={row.supplier_no}
// // //                           onChange={(e) =>
// // //                             handleRowChange(i, 'supplier_no', e.target.value)
// // //                           }
// // //                         />
// // //                       </TableCell>

// // //                       <TableCell align="center">
// // //                         <IconButton
// // //                           size="small"
// // //                           onClick={() => handleDeleteLine(i)}
// // //                           color="error"
// // //                         >
// // //                           <DeleteIcon fontSize="small" />
// // //                         </IconButton>
// // //                       </TableCell>
// // //                     </TableRow>
// // //                   ))}
// // //                 </TableBody>
// // //               </Table>
// // //             </TableContainer>

// // //             <Button onClick={addRow} sx={{ mt: 2, textTransform: 'none' }}>
// // //               + Add More
// // //             </Button>
// // // <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>

// // //   {/* Status Buttons */}

// // //   <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>

// // //   {/* Draft Status */}
// // //   {formData.status === 'Draft' && (
// // //     <>
// // //       <Button
// // //         variant="contained"
// // //         sx={{ bgcolor: '#FF9800' }}
// // //         onClick={() => updateStatus('Surrendered')}
// // //       >
// // //         Submit Surrender
// // //       </Button>

// // //       <Button
// // //         variant="contained"
// // //         sx={{ bgcolor: '#FF6B35' }}
// // //         onClick={handleSave}
// // //         disabled={saving}
// // //       >
// // //         {saving ? 'Saving...' : 'Save'}
// // //       </Button>
// // //     </>
// // //   )}

// // //   {/* Surrendered Status */}
// // //   {formData.status === 'Surrendered' && (
// // //     <Button
// // //       variant="contained"
// // //       sx={{ bgcolor: '#4CAF50' }}
// // //       onClick={() => updateStatus('DGApproved')}
// // //     >
// // //       DG Approve
// // //     </Button>
// // //   )}

// // //   {/* DG Approved Status */}
// // //   {formData.status === 'DGApproved' && (
// // //     <Button
// // //       variant="contained"
// // //       sx={{ bgcolor: '#1976D2' }}
// // //       onClick={() => updateStatus('Completed')}
// // //     >
// // //       Complete
// // //     </Button>
// // //   )}

// // //   {/* Cancel Button Always Visible */}
// // //   <Button
// // //     variant="outlined"
// // //     onClick={() => router.back()}
// // //   >
// // //     Cancel
// // //   </Button>

// // // </Box>
// // //             </Box>
// // //           </Paper>
// // //         </Box>
// // //       </Box>

// // //       {/* Alert Snackbar */}
// // //       <Snackbar
// // //         open={alert.open}
// // //         autoHideDuration={6000}
// // //         onClose={handleCloseAlert}
// // //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
// // //       >
// // //         <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
// // //           {alert.message}
// // //         </Alert>
// // //       </Snackbar>
// // //     </Box>
// // //   )
// // // }

// // 'use client'

// // import React, { useState, useEffect } from 'react'
// // import axios from 'axios'
// // import {
// //   Box,
// //   Paper,
// //   Typography,
// //   TextField,
// //   Grid,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Breadcrumbs,
// //   Link,
// //   Button,
// //   MenuItem,
// //   CircularProgress,
// //   Alert,
// //   Snackbar,
// //   Autocomplete,
// //   IconButton,
// // } from '@mui/material'
// // import {
// //   NavigateNext as NavigateNextIcon,
// //   Delete as DeleteIcon,
// //   CloudUpload as UploadIcon,
// //   Close as CloseIcon,
// // } from '@mui/icons-material'
// // import Sidebar from '../main/Sidebar'
// // import Header from '../main/Header'
// // import { useRouter, useParams } from 'next/navigation'

// // const API_BASE_URL = 'http://localhost:8000/api/v1'

// // // Surrender statuses per workflow docs:
// // // Draft → Surrendered → DGApproved → Completed
// // const SURRENDER_STATUSES = ['Draft', 'Surrendered', 'DGApproved', 'Completed']

// // interface SurrenderLine {
// //   breakdown_id?: number
// //   srNo: string
// //   debtor_code?: number | string
// //   debtor_name?: string
// //   description: string
// //   gl_account: string
// //   account_name: string
// //   estimated_amount: string
// //   approved_amount?: string
// //   spent_amount?: string
// //   surrendered_amount?: string
// //   supplier_no: string
// // }

// // interface User {
// //   id: number
// //   username?: string
// //   name?: string
// //   first_name?: string
// //   last_name?: string
// //   email?: string
// // }

// // interface Department {
// //   id: number
// //   department_name: string
// // }

// // interface Project {
// //   id?: number
// //   ProjectLink?: number
// //   project_name?: string
// //   ProjectName?: string
// //   project_code?: string
// //   name?: string
// // }

// // interface Client {
// //   DCLink: number
// //   Name: string
// // }

// // interface Account {
// //   Master_Sub_Account: string
// //   Description: string
// // }

// // interface Attachment {
// //   attachment_id: number
// //   file_name: string
// //   file_path: string
// //   file_size: number
// //   attachment_type: string
// // }

// // export default function EditSurrenderDetailsPage() {
// //   const router = useRouter()
// //   const { id } = useParams()
// //   const [selectedMenu, setSelectedMenu] = useState('Surrender')
// //   const [loading, setLoading] = useState(true)
// //   const [saving, setSaving] = useState(false)

// //   const [alert, setAlert] = useState<{
// //     open: boolean
// //     message: string
// //     severity: 'success' | 'error' | 'info' | 'warning'
// //   }>({ open: false, message: '', severity: 'success' })

// //   // Dropdown data
// //   const [users, setUsers] = useState<User[]>([])
// //   const [departments, setDepartments] = useState<Department[]>([])
// //   const [projects, setProjects] = useState<Project[]>([])
// //   const [clients, setClients] = useState<Client[]>([])
// //   const [accounts, setAccounts] = useState<Account[]>([])

// //   const [formData, setFormData] = useState({
// //     surrenderNumber: '',
// //     imprestNumber: '',
// //     userRequester: '' as number | '',
// //     status: '',
// //     userEntered: '' as number | '',
// //     project: '' as number | '',
// //     department: '' as number | '',
// //     purpose: '',
// //     surrender_date: '',
// //     remarks: '',
// //   })

// //   const [surrenderLines, setSurrenderLines] = useState<SurrenderLine[]>([])
// //   const [existingAttachments, setExistingAttachments] = useState<Attachment[]>([])
// //   const [newFiles, setNewFiles] = useState<File[]>([])

// //   useEffect(() => {
// //     fetchUsers()
// //     fetchDepartments()
// //     fetchProjects()
// //     fetchClients()
// //     fetchAccounts()
// //   }, [])

// //   useEffect(() => {
// //     if (id) fetchSurrender()
// //   }, [id])

// //   const fetchUsers = async () => {
// //     try {
// //       const response = await axios.get(`${API_BASE_URL}/users/users/`)
// //       setUsers(response.data)
// //     } catch (error) {
// //       console.error('Error fetching users:', error)
// //       showAlert('Failed to load users', 'warning')
// //     }
// //   }

// //   const fetchDepartments = async () => {
// //     try {
// //       const response = await axios.get(`${API_BASE_URL}/department/departments/`)
// //       setDepartments(response.data)
// //     } catch (error) {
// //       console.error('Error fetching departments:', error)
// //     }
// //   }

// //   const fetchProjects = async () => {
// //     try {
// //       const response = await axios.get(`${API_BASE_URL}/project/projects-list/`)
// //       setProjects(response.data)
// //     } catch (error) {
// //       console.error('Error fetching projects:', error)
// //     }
// //   }

// //   const fetchClients = async () => {
// //     try {
// //       const response = await axios.get(`${API_BASE_URL}/client/clients-list/`)
// //       setClients(response.data)
// //     } catch (error) {
// //       console.error('Error fetching clients:', error)
// //     }
// //   }

// //   const fetchAccounts = async () => {
// //     try {
// //       const response = await axios.get(`${API_BASE_URL}/account/accounts-list/`)
// //       setAccounts(response.data)
// //     } catch (error) {
// //       console.error('Error fetching accounts:', error)
// //     }
// //   }

// //   const fetchSurrender = async () => {
// //     try {
// //       const res = await axios.get(`${API_BASE_URL}/imprest/${id}/`)
// //       const data = res.data

// //       setFormData({
// //         surrenderNumber: data.imprest_id || '',
// //         imprestNumber: data.request_no || '',
// //         userRequester: data.user_requested || '',
// //         status: data.status || '',
// //         userEntered: data.user_entered || '',
// //         project: data.project || '',
// //         department: data.department_name || '',
// //         purpose: data.purpose || '',
// //         surrender_date: data.surrender_date || '',
// //         remarks: data.remarks || '',
// //       })

// //       setSurrenderLines(
// //         (data.surrender_lines || data.request_lines || []).map(
// //           (line: any, index: number) => ({
// //             breakdown_id: line.breakdown_id,
// //             srNo: String(index + 1),
// //             debtor_code: line.debtor_code || '',
// //             debtor_name: line.debtor_name || '',
// //             description: line.description || '',
// //             gl_account: line.gl_account || '',
// //             account_name: line.account_name || '',
// //             estimated_amount: line.estimated_amount?.toString() || '',
// //             approved_amount: line.approved_amount?.toString() || '',
// //             spent_amount: line.spent_amount?.toString() || '',
// //             surrendered_amount: line.surrendered_amount?.toString() || '',
// //             supplier_no: line.supplier_no || '',
// //           })
// //         )
// //       )

// //       setExistingAttachments(data.attachments || [])
// //     } catch (err) {
// //       console.error('Error fetching surrender', err)
// //       showAlert('Failed to load surrender data', 'error')
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const showAlert = (
// //     message: string,
// //     severity: 'success' | 'error' | 'info' | 'warning'
// //   ) => {
// //     setAlert({ open: true, message, severity })
// //   }

// //   const handleCloseAlert = () => setAlert((prev) => ({ ...prev, open: false }))

// //   const handleFormChange = (field: string, value: string | number) => {
// //     setFormData((prev) => ({ ...prev, [field]: value }))
// //   }

// //   const handleRowChange = (index: number, field: string, value: string | number) => {
// //     const updated = [...surrenderLines]
// //     updated[index] = { ...updated[index], [field]: value }
// //     setSurrenderLines(updated)
// //   }

// //   const addRow = () => {
// //     setSurrenderLines((prev) => [
// //       ...prev,
// //       {
// //         srNo: String(prev.length + 1),
// //         debtor_code: undefined,
// //         debtor_name: '',
// //         description: '',
// //         gl_account: '',
// //         account_name: '',
// //         estimated_amount: '',
// //         approved_amount: '',
// //         spent_amount: '',
// //         surrendered_amount: '',
// //         supplier_no: '',
// //       },
// //     ])
// //   }

// //   const handleDeleteLine = (index: number) => {
// //     setSurrenderLines(surrenderLines.filter((_, i) => i !== index))
// //   }

// //   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const files = event.target.files
// //     if (files) setNewFiles((prev) => [...prev, ...Array.from(files)])
// //   }

// //   const handleFileDelete = (index: number) => {
// //     setNewFiles(newFiles.filter((_, i) => i !== index))
// //   }

// //   const handleDeleteAllFiles = () => setNewFiles([])

// //   const handleDeleteExistingAttachment = async (attachmentId: number) => {
// //     if (!window.confirm('Are you sure you want to delete this attachment?')) return
// //     try {
// //       await axios.delete(`${API_BASE_URL}/imprest/attachments/${attachmentId}/`)
// //       setExistingAttachments(existingAttachments.filter((a) => a.attachment_id !== attachmentId))
// //       showAlert('Attachment deleted successfully', 'success')
// //     } catch (error) {
// //       console.error('Error deleting attachment:', error)
// //       showAlert('Failed to delete attachment', 'error')
// //     }
// //   }

// //   // ─── Workflow per docs: Draft → Surrendered → DGApproved → Completed ───
// //   const updateStatus = async (newStatus: string) => {
// //     try {
// //       setSaving(true)
// //       await axios.patch(`${API_BASE_URL}/imprest/${id}/`, { status: newStatus })
// //       setFormData((prev) => ({ ...prev, status: newStatus }))
// //       showAlert(`Status updated to ${newStatus}`, 'success')
// //     } catch (error) {
// //       console.error(error)
// //       showAlert('Failed to update status', 'error')
// //     } finally {
// //       setSaving(false)
// //     }
// //   }

// //   const handleSave = async () => {
// //     try {
// //       setSaving(true)

// //       const payload = {
// //         user_requested: formData.userRequester,
// //         user_entered: formData.userEntered,
// //         department: formData.department,
// //         project: formData.project,
// //         purpose: formData.purpose,
// //         status: formData.status,
// //         surrender_date: formData.surrender_date,
// //         remarks: formData.remarks,
// //         created_by: 1,
// //         request_lines: surrenderLines.map((line) => ({
// //           breakdown_id: line.breakdown_id,
// //           debtor_code: line.debtor_code,
// //           debtor_name: line.debtor_name,
// //           description: line.description,
// //           gl_account: line.gl_account,
// //           expense_head: line.gl_account,
// //           account_name: line.account_name,
// //           estimated_amount: parseFloat(line.estimated_amount || '0'),
// //           approved_amount: line.approved_amount ? parseFloat(line.approved_amount) : null,
// //           spent_amount: line.spent_amount ? parseFloat(line.spent_amount) : null,
// //           surrendered_amount: line.surrendered_amount ? parseFloat(line.surrendered_amount) : null,
// //           supplier_no: line.supplier_no,
// //         })),
// //       }

// //       await axios.put(`${API_BASE_URL}/imprest/${id}/`, payload)

// //       if (newFiles.length > 0) await uploadAttachments()

// //       showAlert('Surrender updated successfully!', 'success')
// //       setTimeout(() => router.push('/surrender'), 1500)
// //     } catch (error: any) {
// //       console.error('Update failed', error)
// //       showAlert(
// //         error.response?.data?.detail ||
// //           error.response?.data?.message ||
// //           'Failed to update surrender',
// //         'error'
// //       )
// //     } finally {
// //       setSaving(false)
// //     }
// //   }

// //   const uploadAttachments = async () => {
// //     try {
// //       const fd = new FormData()
// //       newFiles.forEach((file) => fd.append('files', file))
// //       fd.append('attachment_type', 'Support')
// //       await axios.post(`${API_BASE_URL}/imprest/${id}/upload-multiple-attachments/`, fd)
// //     } catch (error) {
// //       console.error('Error uploading attachments:', error)
// //       showAlert('Failed to upload new attachments', 'warning')
// //     }
// //   }

// //   const getUserDisplayName = (user: User) => {
// //     if (user.name) return user.name
// //     if (user.first_name && user.last_name) return `${user.first_name} ${user.last_name}`
// //     if (user.first_name) return user.first_name
// //     return user.username || `User ${user.id}`
// //   }

// //   const getProjectId = (proj: Project) => proj.ProjectLink || proj.id || 0
// //   const getProjectName = (proj: Project) =>
// //     proj.ProjectName || proj.project_name || proj.name || `Project ${proj.id}`

// //   if (loading) {
// //     return (
// //       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
// //         <CircularProgress />
// //       </Box>
// //     )
// //   }

// //   // ─── Status badge color ───
// //   const statusColor: Record<string, string> = {
// //     Draft: '#6B7280',
// //     Surrendered: '#FF9800',
// //     DGApproved: '#4CAF50',
// //     Completed: '#1976D2',
// //   }

// //   return (
// //     // FIX: overflow on outer box removed; only inner scrollable area uses overflow:auto
// //     <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA', overflow: 'hidden' }}>
// //       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

// //       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
// //         <Header />

// //         {/* FIX: only this inner box scrolls, sidebar/header stay fixed */}
// //         <Box sx={{ flexGrow: 1, overflow: 'auto', p: 3 }}>
// //           <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
// //             <Link
// //               underline="hover"
// //               sx={{ cursor: 'pointer', fontSize: '0.875rem' }}
// //               onClick={() => router.push('/surrender')}
// //             >
// //               Surrender
// //             </Link>
// //             <Typography fontSize="0.875rem">Edit Surrender</Typography>
// //           </Breadcrumbs>

// //           <Paper sx={{ p: 4, borderRadius: 2 }}>
// //             {/* ── Header Row ── */}
// //             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
// //               <Typography variant="h5" sx={{ fontWeight: 600 }}>
// //                 Edit Surrender
// //               </Typography>
// //               {formData.status && (
// //                 <Box
// //                   sx={{
// //                     px: 2,
// //                     py: 0.5,
// //                     borderRadius: 2,
// //                     bgcolor: statusColor[formData.status] || '#6B7280',
// //                     color: 'white',
// //                     fontSize: '0.8rem',
// //                     fontWeight: 600,
// //                     letterSpacing: 0.5,
// //                   }}
// //                 >
// //                   {formData.status}
// //                 </Box>
// //               )}
// //             </Box>

// //             {/* ── Form Fields ── */}
// //             <Grid container spacing={3} mb={4}>
// //               <Grid item xs={12} md={4}>
// //                 <TextField
// //                   label="Surrender Number"
// //                   size="small"
// //                   fullWidth
// //                   disabled
// //                   value={formData.surrenderNumber}
// //                   sx={{ bgcolor: '#F9FAFB' }}
// //                 />
// //               </Grid>

// //               <Grid item xs={12} md={4}>
// //                 <TextField
// //                   label="Imprest Number"
// //                   size="small"
// //                   fullWidth
// //                   disabled
// //                   value={formData.imprestNumber}
// //                   sx={{ bgcolor: '#F9FAFB' }}
// //                 />
// //               </Grid>

// //               <Grid item xs={12} md={4}>
// //                 <TextField
// //                   label="Surrender Date"
// //                   size="small"
// //                   type="date"
// //                   fullWidth
// //                   value={formData.surrender_date}
// //                   onChange={(e) => handleFormChange('surrender_date', e.target.value)}
// //                   InputLabelProps={{ shrink: true }}
// //                   sx={{ bgcolor: '#F9FAFB' }}
// //                 />
// //               </Grid>

// //               <Grid item xs={12} md={4}>
// //                 <TextField
// //                   select
// //                   label="User Requester *"
// //                   size="small"
// //                   fullWidth
// //                   value={formData.userRequester}
// //                   onChange={(e) => handleFormChange('userRequester', Number(e.target.value))}
// //                   sx={{ bgcolor: '#F9FAFB' }}
// //                 >
// //                   {users.map((user) => (
// //                     <MenuItem key={user.id} value={user.id}>
// //                       {getUserDisplayName(user)}
// //                     </MenuItem>
// //                   ))}
// //                 </TextField>
// //               </Grid>

// //               <Grid item xs={12} md={4}>
// //                 <TextField
// //                   select
// //                   label="User Entered"
// //                   size="small"
// //                   fullWidth
// //                   value={formData.userEntered}
// //                   onChange={(e) => handleFormChange('userEntered', Number(e.target.value))}
// //                   sx={{ bgcolor: '#F9FAFB' }}
// //                 >
// //                   {users.map((user) => (
// //                     <MenuItem key={user.id} value={user.id}>
// //                       {getUserDisplayName(user)}
// //                     </MenuItem>
// //                   ))}
// //                 </TextField>
// //               </Grid>

// //               <Grid item xs={12} md={4}>
// //                 <TextField
// //                   select
// //                   label="Project *"
// //                   size="small"
// //                   fullWidth
// //                   value={formData.project}
// //                   onChange={(e) => handleFormChange('project', Number(e.target.value))}
// //                   sx={{ bgcolor: '#F9FAFB' }}
// //                 >
// //                   {projects.map((p) => (
// //                     <MenuItem key={getProjectId(p)} value={getProjectId(p)}>
// //                       {getProjectName(p)}
// //                     </MenuItem>
// //                   ))}
// //                 </TextField>
// //               </Grid>

// //               <Grid item xs={12} md={4}>
// //                 <TextField
// //                   select
// //                   label="Department *"
// //                   size="small"
// //                   fullWidth
// //                   value={formData.department}
// //                   onChange={(e) => handleFormChange('department', Number(e.target.value))}
// //                   sx={{ bgcolor: '#F9FAFB' }}
// //                 >
// //                   {departments.map((d) => (
// //                     <MenuItem key={d.id} value={d.id}>
// //                       {d.department_name}
// //                     </MenuItem>
// //                   ))}
// //                 </TextField>
// //               </Grid>

// //               <Grid item xs={12} md={8}>
// //                 <TextField
// //                   label="Purpose *"
// //                   multiline
// //                   rows={3}
// //                   fullWidth
// //                   value={formData.purpose}
// //                   onChange={(e) => handleFormChange('purpose', e.target.value)}
// //                   sx={{ bgcolor: '#F9FAFB' }}
// //                 />
// //               </Grid>

// //               <Grid item xs={12}>
// //                 <TextField
// //                   label="Remarks"
// //                   multiline
// //                   rows={2}
// //                   fullWidth
// //                   value={formData.remarks}
// //                   onChange={(e) => handleFormChange('remarks', e.target.value)}
// //                   sx={{ bgcolor: '#F9FAFB' }}
// //                 />
// //               </Grid>
// //             </Grid>

// //             {/* ── Existing Attachments ── */}
// //             {existingAttachments.length > 0 && (
// //               <Box sx={{ mb: 4 }}>
// //                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
// //                   Existing Attachments
// //                 </Typography>
// //                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// //                   {existingAttachments.map((file) => (
// //                     <Box
// //                       key={file.attachment_id}
// //                       sx={{
// //                         position: 'relative',
// //                         width: 120,
// //                         height: 120,
// //                         border: '1px solid #E5E7EB',
// //                         borderRadius: 2,
// //                         p: 2,
// //                         display: 'flex',
// //                         flexDirection: 'column',
// //                         alignItems: 'center',
// //                         justifyContent: 'center',
// //                         bgcolor: 'white',
// //                       }}
// //                     >
// //                       <UploadIcon sx={{ fontSize: 40, color: '#FF6B35', mb: 1 }} />
// //                       <Typography
// //                         variant="caption"
// //                         sx={{ textAlign: 'center', wordBreak: 'break-all', fontSize: '0.7rem', color: '#6B7280' }}
// //                       >
// //                         {file.file_name.length > 15
// //                           ? file.file_name.substring(0, 12) + '...'
// //                           : file.file_name}
// //                       </Typography>
// //                       <Typography variant="caption" sx={{ fontSize: '0.65rem', color: '#9CA3AF', mt: 0.5 }}>
// //                         {(file.file_size / 1024).toFixed(2)} KB
// //                       </Typography>
// //                       <IconButton
// //                         size="small"
// //                         onClick={() => handleDeleteExistingAttachment(file.attachment_id)}
// //                         sx={{
// //                           position: 'absolute',
// //                           top: 4,
// //                           right: 4,
// //                           bgcolor: 'white',
// //                           boxShadow: 1,
// //                           width: 20,
// //                           height: 20,
// //                           '&:hover': { bgcolor: '#FEE2E2' },
// //                         }}
// //                       >
// //                         <CloseIcon sx={{ fontSize: 14, color: '#6B7280' }} />
// //                       </IconButton>
// //                     </Box>
// //                   ))}
// //                 </Box>
// //               </Box>
// //             )}

// //             {/* ── Upload New Documents ── */}
// //             <Box sx={{ mb: 4 }}>
// //               <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
// //                 Upload New Documents
// //               </Typography>

// //               {newFiles.length === 0 ? (
// //                 <Box
// //                   sx={{
// //                     border: '2px dashed #E5E7EB',
// //                     borderRadius: 2,
// //                     p: 4,
// //                     textAlign: 'center',
// //                     bgcolor: '#FAFAFA',
// //                   }}
// //                 >
// //                   <input
// //                     accept="*/*"
// //                     style={{ display: 'none' }}
// //                     id="file-upload"
// //                     type="file"
// //                     multiple
// //                     onChange={handleFileUpload}
// //                   />
// //                   <label htmlFor="file-upload">
// //                     <Button component="span" sx={{ textTransform: 'none', color: '#6B7280', fontWeight: 500 }}>
// //                       <UploadIcon sx={{ mr: 1 }} />
// //                       Click to upload documents
// //                     </Button>
// //                   </label>
// //                 </Box>
// //               ) : (
// //                 <Box>
// //                   <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
// //                     {newFiles.map((file, index) => (
// //                       <Box
// //                         key={index}
// //                         sx={{
// //                           position: 'relative',
// //                           width: 120,
// //                           height: 120,
// //                           border: '1px solid #E5E7EB',
// //                           borderRadius: 2,
// //                           p: 2,
// //                           display: 'flex',
// //                           flexDirection: 'column',
// //                           alignItems: 'center',
// //                           justifyContent: 'center',
// //                           bgcolor: 'white',
// //                         }}
// //                       >
// //                         <UploadIcon sx={{ fontSize: 40, color: '#FF6B35', mb: 1 }} />
// //                         <Typography
// //                           variant="caption"
// //                           sx={{ textAlign: 'center', wordBreak: 'break-all', fontSize: '0.7rem', color: '#6B7280' }}
// //                         >
// //                           {file.name.length > 15 ? file.name.substring(0, 12) + '...' : file.name}
// //                         </Typography>
// //                         <Typography variant="caption" sx={{ fontSize: '0.65rem', color: '#9CA3AF', mt: 0.5 }}>
// //                           {(file.size / 1024).toFixed(2)} KB
// //                         </Typography>
// //                         <IconButton
// //                           size="small"
// //                           onClick={() => handleFileDelete(index)}
// //                           sx={{
// //                             position: 'absolute',
// //                             top: 4,
// //                             right: 4,
// //                             bgcolor: 'white',
// //                             boxShadow: 1,
// //                             width: 20,
// //                             height: 20,
// //                             '&:hover': { bgcolor: '#FEE2E2' },
// //                           }}
// //                         >
// //                           <CloseIcon sx={{ fontSize: 14, color: '#6B7280' }} />
// //                         </IconButton>
// //                       </Box>
// //                     ))}
// //                   </Box>
// //                   <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
// //                     <Typography variant="caption" sx={{ color: '#6B7280' }}>
// //                       {newFiles.length} new file(s) ready to upload
// //                     </Typography>
// //                     <Button
// //                       size="small"
// //                       onClick={handleDeleteAllFiles}
// //                       sx={{ textTransform: 'none', color: '#6B7280', border: '1px solid #E5E7EB', px: 2 }}
// //                     >
// //                       Delete All
// //                     </Button>
// //                   </Box>
// //                 </Box>
// //               )}
// //             </Box>

// //             {/* ── Surrender Lines ── */}
// //             <Typography fontWeight={600} mb={2}>
// //               Surrender Lines
// //             </Typography>

// //             <TableContainer sx={{ border: '1px solid #E5E7EB', borderRadius: 2, overflowX: 'auto' }}>
// //               <Table sx={{ minWidth: 1600 }} size="small">
// //                 <TableHead sx={{ bgcolor: '#F9FAFB' }}>
// //                   <TableRow>
// //                     <TableCell sx={{ minWidth: 60, fontWeight: 600 }}>Sr No</TableCell>
// //                     <TableCell sx={{ minWidth: 140, fontWeight: 600 }}>Debtor Code</TableCell>
// //                     <TableCell sx={{ minWidth: 180, fontWeight: 600 }}>Debtor Name</TableCell>
// //                     <TableCell sx={{ minWidth: 220, fontWeight: 600 }}>Description</TableCell>
// //                     <TableCell sx={{ minWidth: 140, fontWeight: 600 }}>GL Account</TableCell>
// //                     <TableCell sx={{ minWidth: 200, fontWeight: 600 }}>Account Name</TableCell>
// //                     <TableCell sx={{ minWidth: 120, fontWeight: 600 }}>Est. Amt</TableCell>
// //                     <TableCell sx={{ minWidth: 120, fontWeight: 600 }}>Appr. Amt</TableCell>
// //                     <TableCell sx={{ minWidth: 120, fontWeight: 600 }}>Spent Amt</TableCell>
// //                     <TableCell sx={{ minWidth: 130, fontWeight: 600 }}>Surrendered Amt</TableCell>
// //                     <TableCell sx={{ minWidth: 160, fontWeight: 600 }}>Supplier</TableCell>
// //                     <TableCell sx={{ minWidth: 80, fontWeight: 600 }}>Action</TableCell>
// //                   </TableRow>
// //                 </TableHead>

// //                 <TableBody>
// //                   {surrenderLines.map((row, i) => (
// //                     <TableRow key={i}>
// //                       <TableCell>{row.srNo}</TableCell>

// //                       {/* Debtor Code */}
// //                       <TableCell>
// //                         <Autocomplete
// //                           size="small"
// //                           fullWidth
// //                           options={clients}
// //                           getOptionLabel={(o) => `${o.DCLink}`}
// //                           value={clients.find((c) => c.DCLink == row.debtor_code) || null}
// //                           onChange={(_, val) => {
// //                             handleRowChange(i, 'debtor_code', val?.DCLink || '')
// //                             handleRowChange(i, 'debtor_name', val?.Name || '')
// //                           }}
// //                           renderInput={(params) => <TextField {...params} size="small" />}
// //                         />
// //                       </TableCell>

// //                       {/* Debtor Name */}
// //                       <TableCell>
// //                         <Autocomplete
// //                           size="small"
// //                           fullWidth
// //                           options={clients}
// //                           getOptionLabel={(o) => o.Name}
// //                           value={clients.find((c) => c.DCLink == row.debtor_code) || null}
// //                           onChange={(_, val) => {
// //                             handleRowChange(i, 'debtor_code', val?.DCLink || '')
// //                             handleRowChange(i, 'debtor_name', val?.Name || '')
// //                           }}
// //                           renderInput={(params) => <TextField {...params} size="small" />}
// //                         />
// //                       </TableCell>

// //                       {/* Description */}
// //                       <TableCell>
// //                         <TextField
// //                           size="small"
// //                           fullWidth
// //                           value={row.description}
// //                           onChange={(e) => handleRowChange(i, 'description', e.target.value)}
// //                         />
// //                       </TableCell>

// //                       {/* GL Account */}
// //                       <TableCell>
// //                         <Autocomplete
// //                           size="small"
// //                           fullWidth
// //                           options={accounts}
// //                           getOptionLabel={(o) => o.Master_Sub_Account}
// //                           value={accounts.find((a) => a.Master_Sub_Account === row.gl_account) || null}
// //                           onChange={(_, val) => {
// //                             handleRowChange(i, 'gl_account', val?.Master_Sub_Account || '')
// //                             handleRowChange(i, 'account_name', val?.Description || '')
// //                           }}
// //                           renderInput={(params) => <TextField {...params} size="small" />}
// //                         />
// //                       </TableCell>

// //                       {/* Account Name */}
// //                       <TableCell>
// //                         <Autocomplete
// //                           size="small"
// //                           fullWidth
// //                           options={accounts}
// //                           getOptionLabel={(o) => o.Description}
// //                           value={accounts.find((a) => a.Master_Sub_Account === row.gl_account) || null}
// //                           onChange={(_, val) => {
// //                             handleRowChange(i, 'gl_account', val?.Master_Sub_Account || '')
// //                             handleRowChange(i, 'account_name', val?.Description || '')
// //                           }}
// //                           renderInput={(params) => <TextField {...params} size="small" />}
// //                         />
// //                       </TableCell>

// //                       {/* Amount Fields */}
// //                       {(['estimated_amount', 'approved_amount', 'spent_amount', 'surrendered_amount'] as const).map(
// //                         (field) => (
// //                           <TableCell key={field}>
// //                             <TextField
// //                               size="small"
// //                               type="number"
// //                               fullWidth
// //                               value={(row as any)[field] || ''}
// //                               onChange={(e) => handleRowChange(i, field, e.target.value)}
// //                             />
// //                           </TableCell>
// //                         )
// //                       )}

// //                       {/* Supplier */}
// //                       <TableCell>
// //                         <TextField
// //                           size="small"
// //                           fullWidth
// //                           value={row.supplier_no}
// //                           onChange={(e) => handleRowChange(i, 'supplier_no', e.target.value)}
// //                         />
// //                       </TableCell>

// //                       <TableCell align="center">
// //                         <IconButton size="small" onClick={() => handleDeleteLine(i)} color="error">
// //                           <DeleteIcon fontSize="small" />
// //                         </IconButton>
// //                       </TableCell>
// //                     </TableRow>
// //                   ))}
// //                 </TableBody>
// //               </Table>
// //             </TableContainer>

// //             <Button onClick={addRow} sx={{ mt: 2, textTransform: 'none' }}>
// //               + Add More
// //             </Button>

// //             {/* ── Action Buttons — Workflow: Draft→Surrendered→DGApproved→Completed ── */}
// //             <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>

// //               {/* DRAFT: User can Save or Submit Surrender */}
// //               {formData.status === 'Draft' && (
// //                 <>
// //                   <Button
// //                     variant="contained"
// //                     sx={{ bgcolor: '#FF6B35', '&:hover': { bgcolor: '#e55a27' }, textTransform: 'none' }}
// //                     onClick={handleSave}
// //                     disabled={saving}
// //                   >
// //                     {saving ? 'Saving...' : 'Save Draft'}
// //                   </Button>
// //                   <Button
// //                     variant="contained"
// //                     sx={{ bgcolor: '#FF9800', '&:hover': { bgcolor: '#e68900' }, textTransform: 'none' }}
// //                     onClick={() => updateStatus('Surrendered')}
// //                     disabled={saving}
// //                   >
// //                     Submit Surrender
// //                   </Button>
// //                 </>
// //               )}

// //               {/* SURRENDERED: DG can approve → DGApproved */}
// //               {formData.status === 'Surrendered' && (
// //                 <Button
// //                   variant="contained"
// //                   sx={{ bgcolor: '#4CAF50', '&:hover': { bgcolor: '#388E3C' }, textTransform: 'none' }}
// //                   onClick={() => updateStatus('DGApproved')}
// //                   disabled={saving}
// //                 >
// //                   DG Approve
// //                 </Button>
// //               )}

// //               {/* DGAPPROVED: Finance/Admin can complete */}
// //               {formData.status === 'DGApproved' && (
// //                 <Button
// //                   variant="contained"
// //                   sx={{ bgcolor: '#1976D2', '&:hover': { bgcolor: '#1565C0' }, textTransform: 'none' }}
// //                   onClick={() => updateStatus('Completed')}
// //                   disabled={saving}
// //                 >
// //                   Mark Completed
// //                 </Button>
// //               )}

// //               {/* Cancel always visible */}
// //               <Button
// //                 variant="outlined"
// //                 onClick={() => router.back()}
// //                 sx={{ textTransform: 'none' }}
// //               >
// //                 Cancel
// //               </Button>
// //             </Box>
// //           </Paper>
// //         </Box>
// //       </Box>

// //       {/* Alert Snackbar */}
// //       <Snackbar
// //         open={alert.open}
// //         autoHideDuration={6000}
// //         onClose={handleCloseAlert}
// //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
// //       >
// //         <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
// //           {alert.message}
// //         </Alert>
// //       </Snackbar>
// //     </Box>
// //   )
// // }

// 'use client'

// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { useRouter, useParams } from 'next/navigation'
// import Sidebar from '../main/Sidebar'
// import Header from '../main/Header'

// const API = 'http://localhost:8000/api/v1'

// // ─────────────────────────────────────────────────────────────────────────────
// //  Workflow:
// //  User submits Draft → status: Submitted
// //  Finance Manager: Submitted → FinanceManagerApproved  OR  Rejected (back to user)
// //  Director:        FinanceManagerApproved → DirectorApproved → auto Completed
// //  Director reject: → Rejected (back to user)
// //  Completed: Locked forever, GL posted in Sage
// // ─────────────────────────────────────────────────────────────────────────────

// const STATUS_CFG = {
//   Draft:                  { label: 'Draft',             color: '#6B7280', bg: '#F3F4F6', step: 0 },
//   Submitted:              { label: 'Submitted',          color: '#C2410C', bg: '#FFF7ED', step: 1 },
//   FinanceManagerApproved: { label: 'Finance Approved',   color: '#065F46', bg: '#ECFDF5', step: 2 },
//   DirectorApproved:       { label: 'Director Approved',  color: '#1D4ED8', bg: '#EFF6FF', step: 3 },
//   Completed:              { label: 'Completed',          color: '#166534', bg: '#F0FDF4', step: 4 },
//   Rejected:               { label: 'Rejected',           color: '#991B1B', bg: '#FEF2F2', step: -1 },
// }

// const STEP_LABELS = ['Draft', 'Submitted', 'Finance Approved', 'Director Approved', 'Completed']

// const fmt = (n) => new Intl.NumberFormat('en-PK').format(Number(n) || 0)

// // ─── Who can do what based on status + role ───────────────────────────────────
// const resolvePermissions = (status, role) => {
//   const locked        = status === 'Completed'
//   const isUserStatus  = status === 'Draft' || status === 'Rejected'
//   const isFMStatus    = status === 'Submitted'
//   const isDirStatus   = status === 'FinanceManagerApproved'

//   const canEdit = !locked && (
//     (role === 'user'            && isUserStatus) ||
//     (role === 'finance_manager' && isFMStatus)   ||
//     (role === 'director'        && isDirStatus)  ||
//      role === 'admin'
//   )
//   return {
//     locked,
//     canEdit,
//     canSave:        canEdit,
//     canSubmit:      !locked && (role === 'user' || role === 'admin') && isUserStatus,
//     canFMApprove:   !locked && role === 'finance_manager' && isFMStatus,
//     canFMReject:    !locked && role === 'finance_manager' && isFMStatus,
//     canDirApprove:  !locked && role === 'director'        && isDirStatus,
//     canDirReject:   !locked && role === 'director'        && isDirStatus,
//     canEditFMAmts:  !locked && role === 'finance_manager' && isFMStatus,
//   }
// }

// // ─────────────────────────────────────────────────────────────────────────────
// export default function SurrenderDetailPage() {
//   const router = useRouter()
//   const { id } = useParams()

//   const [selectedMenu, setSelectedMenu] = useState('Surrender')
//   const [loading,  setLoading]  = useState(true)
//   const [saving,   setSaving]   = useState(false)
//   const [toast,    setToast]    = useState(null)
//   const [currentUser, setCurrentUser] = useState(null)

//   // form state (driven from API)
//   const [imprest,       setImprest]       = useState(null)
//   const [lines,         setLines]         = useState([])
//   const [attachments,   setAttachments]   = useState([])
//   const [newFiles,      setNewFiles]      = useState([])
//   const [remarks,       setRemarks]       = useState('')
//   const [surrenderDate, setSurrenderDate] = useState('')

//   // reject modal
//   const [showReject, setShowReject] = useState(false)
//   const [rejectNote, setRejectNote] = useState('')

//   // ── Load user from localStorage ───────────────────────────────────────────
//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem('user')
//       if (stored) {
//         const u = JSON.parse(stored)
//         setCurrentUser({
//           user_id: u.id,
//           name:    u.user_name || u.name || 'User',
//           role:    (u.role || 'user').toLowerCase(),
//         })
//       }
//     } catch {}
//   }, [])

//   // ── Fetch surrender/imprest data from API ──────────────────────────────────
//   useEffect(() => { if (id) fetchData() }, [id])

//   const fetchData = async () => {
//     setLoading(true)
//     try {
//       const res  = await axios.get(`${API}/imprest/${id}/`)
//       const data = res.data
//       setImprest(data)
//       setRemarks(data.remarks || '')
//       setSurrenderDate(data.surrender_date || '')

//       // lines — API may send surrender_lines or request_lines
//       const raw = data.surrender_lines || data.request_lines || []
//       setLines(raw.map((l, i) => ({
//         breakdown_id:       l.breakdown_id,
//         sr:                 i + 1,
//         description:        l.description        || '',
//         gl_account:         l.gl_account         || '',
//         account_name:       l.account_name       || '',
//         estimated_amount:   l.estimated_amount   || 0,
//         approved_amount:    l.approved_amount     || 0,
//         amount_used:        l.spent_amount        || l.amount_used        || 0,
//         surrendered_amount: l.surrendered_amount  || l.amount_returned    || 0,
//         debtor_code:        l.debtor_code         || '',
//         debtor_name:        l.debtor_name         || '',
//         supplier_no:        l.supplier_no         || '',
//       })))

//       setAttachments(data.attachments || [])
//     } catch (err) {
//       console.error(err)
//       showToast('Data load karne mein error aaya', 'error')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const showToast = (msg, type = 'success') => {
//     setToast({ msg, type })
//     setTimeout(() => setToast(null), 3500)
//   }

//   // ── Line helpers ───────────────────────────────────────────────────────────
//   const handleLineChange = (idx, field, val) => {
//     const updated = [...lines]
//     updated[idx]  = { ...updated[idx], [field]: val }
//     setLines(updated)
//   }

//   const addLine = () => setLines(prev => [...prev, {
//     sr: prev.length + 1, description: '', gl_account: '', account_name: '',
//     estimated_amount: 0, approved_amount: 0, amount_used: 0, surrendered_amount: 0,
//     debtor_code: '', debtor_name: '', supplier_no: '',
//   }])

//   const deleteLine = (idx) => setLines(lines.filter((_, i) => i !== idx))

//   // ── Save (PUT) ─────────────────────────────────────────────────────────────
//   const handleSave = async () => {
//     setSaving(true)
//     try {
//       const payload = {
//         remarks,
//         surrender_date: surrenderDate,
//         request_lines:  lines.map(l => ({
//           breakdown_id:       l.breakdown_id,
//           description:        l.description,
//           gl_account:         l.gl_account,
//           expense_head:       l.gl_account,
//           account_name:       l.account_name,
//           estimated_amount:   parseFloat(l.estimated_amount)   || 0,
//           approved_amount:    parseFloat(l.approved_amount)    || null,
//           spent_amount:       parseFloat(l.amount_used)        || null,
//           surrendered_amount: parseFloat(l.surrendered_amount) || null,
//           debtor_code:        l.debtor_code || null,
//           debtor_name:        l.debtor_name || '',
//           supplier_no:        l.supplier_no || '',
//         })),
//       }
//       await axios.put(`${API}/imprest/${id}/`, payload)
//       if (newFiles.length > 0) await uploadFiles()
//       showToast('Surrender save ho gaya!')
//       await fetchData()
//     } catch (err) {
//       console.error(err)
//       showToast(err.response?.data?.detail || 'Save karne mein error', 'error')
//     } finally {
//       setSaving(false)
//     }
//   }

//   // ── Upload receipts ────────────────────────────────────────────────────────
//   const uploadFiles = async () => {
//     const fd = new FormData()
//     newFiles.forEach(f => fd.append('files', f))
//     fd.append('attachment_type', 'Receipt')
//     await axios.post(`${API}/imprest/${id}/upload-multiple-attachments/`, fd)
//     setNewFiles([])
//   }

//   // ── Delete existing attachment ─────────────────────────────────────────────
//   const deleteAttachment = async (attId) => {
//     if (!window.confirm('Is attachment ko delete karna chahte hain?')) return
//     try {
//       await axios.delete(`${API}/imprest/attachments/${attId}/`)
//       setAttachments(prev => prev.filter(a => a.attachment_id !== attId))
//       showToast('Attachment delete ho gaya')
//     } catch {
//       showToast('Delete error', 'error')
//     }
//   }

//   // ── Status change (PATCH) ──────────────────────────────────────────────────
//   const changeStatus = async (newStatus, extra = {}) => {
//     setSaving(true)
//     try {
//       await axios.patch(`${API}/imprest/${id}/`, { status: newStatus, ...extra })
//       showToast(`Status: ${STATUS_CFG[newStatus]?.label || newStatus}`)
//       setShowReject(false)
//       setRejectNote('')
//       await fetchData()
//     } catch (err) {
//       console.error(err)
//       showToast(err.response?.data?.detail || 'Status update error', 'error')
//     } finally {
//       setSaving(false)
//     }
//   }

//   // ── Workflow action handlers ────────────────────────────────────────────────
//   const handleSubmit     = () => changeStatus('Submitted')
//   const handleFMApprove  = () => changeStatus('FinanceManagerApproved')
//   const handleDirApprove = () => changeStatus('DirectorApproved')  // backend marks Completed

//   const handleRejectConfirm = () => {
//     if (!rejectNote.trim()) { showToast('Rejection reason likhein', 'error'); return }
//     changeStatus('Rejected', { remarks: rejectNote })
//   }

//   // ── Computed values ────────────────────────────────────────────────────────
//   const status  = imprest?.status || 'Draft'
//   const role    = currentUser?.role || 'user'
//   const perms   = resolvePermissions(status, role)
//   const cfg     = STATUS_CFG[status] || STATUS_CFG.Draft
//   const curStep = cfg.step ?? 0

//   const totals = lines.reduce((acc, l) => ({
//     estimated:   acc.estimated   + (Number(l.estimated_amount)   || 0),
//     approved:    acc.approved    + (Number(l.approved_amount)    || 0),
//     used:        acc.used        + (Number(l.amount_used)        || 0),
//     surrendered: acc.surrendered + (Number(l.surrendered_amount) || 0),
//   }), { estimated: 0, approved: 0, used: 0, surrendered: 0 })

//   // ── Loading / not found states ─────────────────────────────────────────────
//   if (loading) return (
//     <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans',sans-serif", color: '#9CA3AF', fontSize: 15 }}>
//       ⏳ Loading...
//     </div>
//   )

//   if (!imprest) return (
//     <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans',sans-serif", color: '#EF4444', fontSize: 15 }}>
//       ❌ Data nahi mila (ID: {id})
//     </div>
//   )

//   // ─────────────────────────────────────────────────────────────────────────
//   return (
//     <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#F5F7FA', fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
//         <Header />

//         <div style={{ flexGrow: 1, overflow: 'auto', padding: '24px 28px' }}>

//           {/* ── Breadcrumb ── */}
//           <div style={{ marginBottom: 10, fontSize: 12, color: '#9CA3AF' }}>
//             <span style={{ cursor: 'pointer', color: '#F97316', fontWeight: 600 }} onClick={() => router.push('/surrender')}>
//               ← Surrender List
//             </span>
//             <span style={{ margin: '0 8px' }}>/</span>
//             <span>Edit Surrender</span>
//           </div>

//           {/* ── Header row ── */}
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
//             <div>
//               <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: '#111827' }}>
//                 {imprest.request_no}
//               </h1>
//               <p style={{ margin: '3px 0 0', fontSize: 13, color: '#6B7280' }}>
//                 {imprest.project_name || ''}
//                 {imprest.department_name ? ` · ${imprest.department_name}` : ''}
//               </p>
//             </div>
//             <div style={{ padding: '6px 18px', borderRadius: 20, background: cfg.bg, color: cfg.color, fontSize: 13, fontWeight: 800, border: `1.5px solid ${cfg.color}30` }}>
//               {cfg.label}
//             </div>
//           </div>

//           {/* ── Progress Stepper ── */}
//           {status !== 'Rejected' && (
//             <div style={{ background: 'white', borderRadius: 12, padding: '16px 24px', marginBottom: 14, border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 {STEP_LABELS.map((label, i) => {
//                   const done = curStep > i, current = curStep === i
//                   return (
//                     <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i < STEP_LABELS.length - 1 ? 1 : 'none' }}>
//                       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
//                         <div style={{
//                           width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
//                           fontSize: 12, fontWeight: 800, flexShrink: 0,
//                           background: done ? '#F97316' : current ? 'white' : '#F3F4F6',
//                           color:      done ? 'white'   : current ? '#F97316' : '#9CA3AF',
//                           border:     current ? '2.5px solid #F97316' : done ? 'none' : '2px solid #E5E7EB',
//                           boxShadow:  current ? '0 0 0 4px rgba(249,115,22,0.12)' : 'none',
//                         }}>
//                           {done ? '✓' : i + 1}
//                         </div>
//                         <span style={{ fontSize: 10, fontWeight: current ? 700 : 500, color: current ? '#F97316' : done ? '#374151' : '#9CA3AF', whiteSpace: 'nowrap' }}>
//                           {label}
//                         </span>
//                       </div>
//                       {i < STEP_LABELS.length - 1 && (
//                         <div style={{ flex: 1, height: 2, background: done ? '#F97316' : '#E5E7EB', margin: '0 6px', marginBottom: 18 }} />
//                       )}
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>
//           )}

//           {/* ── Rejection banner ── */}
//           {status === 'Rejected' && (
//             <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: 10, padding: '14px 20px', marginBottom: 14, display: 'flex', gap: 12 }}>
//               <span style={{ fontSize: 20 }}>⚠️</span>
//               <div>
//                 <div style={{ fontWeight: 700, color: '#991B1B', fontSize: 14 }}>Surrender Reject Hua</div>
//                 <div style={{ fontSize: 13, color: '#7F1D1D', marginTop: 3 }}>{imprest.remarks || 'Review karein aur dobara submit karein.'}</div>
//               </div>
//             </div>
//           )}

//           {/* ── Completed/Locked banner ── */}
//           {perms.locked && (
//             <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', borderRadius: 10, padding: '14px 20px', marginBottom: 14, display: 'flex', gap: 12 }}>
//               <span style={{ fontSize: 20 }}>🔒</span>
//               <div>
//                 <div style={{ fontWeight: 700, color: '#166534', fontSize: 14 }}>Surrender Completed — Locked</div>
//                 <div style={{ fontSize: 13, color: '#14532D', marginTop: 3 }}>GL journal Sage mein post ho chuka hai. Koi changes mumkin nahi.</div>
//               </div>
//             </div>
//           )}

//           {/* ── Details Card ── */}
//           <div style={{ background: 'white', borderRadius: 12, padding: '20px 24px', marginBottom: 14, border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
//             <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: '#9CA3AF', textTransform: 'uppercase', marginBottom: 16 }}>Surrender Details</div>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px,1fr))', gap: 14 }}>
//               {[
//                 { label: 'Surrender No',   value: imprest.request_no,              disabled: true },
//                 { label: 'Imprest No',     value: imprest.imprest_no || imprest.request_no, disabled: true },
//                 { label: 'Requested By',   value: imprest.user_requested_name,      disabled: true },
//                 { label: 'Entered By',     value: imprest.user_entered_name,        disabled: true },
//                 { label: 'Department',     value: imprest.department_name,          disabled: true },
//                 { label: 'Project',        value: imprest.project_name,             disabled: true },
//               ].map(f => (
//                 <div key={f.label}>
//                   <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: '#9CA3AF', marginBottom: 4, letterSpacing: 0.5, textTransform: 'uppercase' }}>{f.label}</label>
//                   <input value={f.value || '—'} disabled
//                     style={{ width: '100%', padding: '8px 10px', borderRadius: 7, border: '1.5px solid #E5E7EB', fontSize: 13, color: '#374151', background: '#F9FAFB', boxSizing: 'border-box', fontFamily: 'inherit' }}
//                   />
//                 </div>
//               ))}

//               {/* Surrender Date — editable if allowed */}
//               <div>
//                 <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: '#9CA3AF', marginBottom: 4, letterSpacing: 0.5, textTransform: 'uppercase' }}>Surrender Date</label>
//                 <input type="date" value={surrenderDate} disabled={!perms.canEdit}
//                   onChange={e => setSurrenderDate(e.target.value)}
//                   style={{ width: '100%', padding: '8px 10px', borderRadius: 7, border: '1.5px solid #E5E7EB', fontSize: 13, color: '#374151', background: perms.canEdit ? 'white' : '#F9FAFB', boxSizing: 'border-box', fontFamily: 'inherit' }}
//                 />
//               </div>

//               {/* Purpose — always read-only (set at imprest creation) */}
//               <div style={{ gridColumn: 'span 3' }}>
//                 <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: '#9CA3AF', marginBottom: 4, letterSpacing: 0.5, textTransform: 'uppercase' }}>Purpose</label>
//                 <textarea value={imprest.purpose || ''} disabled rows={2}
//                   style={{ width: '100%', padding: '8px 10px', borderRadius: 7, border: '1.5px solid #E5E7EB', fontSize: 13, color: '#374151', background: '#F9FAFB', boxSizing: 'border-box', fontFamily: 'inherit', resize: 'none' }}
//                 />
//               </div>

//               {/* Remarks — editable */}
//               <div style={{ gridColumn: 'span 3' }}>
//                 <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: '#9CA3AF', marginBottom: 4, letterSpacing: 0.5, textTransform: 'uppercase' }}>Remarks</label>
//                 <textarea value={remarks} disabled={!perms.canEdit} rows={2}
//                   onChange={e => setRemarks(e.target.value)}
//                   style={{ width: '100%', padding: '8px 10px', borderRadius: 7, border: '1.5px solid #E5E7EB', fontSize: 13, color: '#374151', background: perms.canEdit ? 'white' : '#F9FAFB', boxSizing: 'border-box', fontFamily: 'inherit', resize: 'none' }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* ── Summary Totals ── */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 14 }}>
//             {[
//               { label: 'Total Estimated',  value: totals.estimated,   color: '#6B7280', icon: '📋' },
//               { label: 'Total Approved',   value: totals.approved,    color: '#065F46', icon: '✅' },
//               { label: 'Amount Used',      value: totals.used,        color: '#C2410C', icon: '💸' },
//               { label: 'Amount Returned',  value: totals.surrendered, color: '#1D4ED8', icon: '↩️' },
//             ].map(c => (
//               <div key={c.label} style={{ background: 'white', borderRadius: 10, padding: '14px 18px', border: '1px solid #F3F4F6', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
//                 <div style={{ fontSize: 18, marginBottom: 4 }}>{c.icon}</div>
//                 <div style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>{c.label}</div>
//                 <div style={{ fontSize: 20, fontWeight: 800, color: c.color, marginTop: 3 }}>{fmt(c.value)}</div>
//               </div>
//             ))}
//           </div>

//           {/* ── Surrender Lines ── */}
//           <div style={{ background: 'white', borderRadius: 12, marginBottom: 14, border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
//             <div style={{ padding: '13px 22px', borderBottom: '1px solid #F3F4F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>Surrender Lines</span>
//               {perms.canEdit && (
//                 <button onClick={addLine} style={{ background: '#F97316', color: 'white', border: 'none', borderRadius: 7, padding: '6px 14px', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
//                   + Add Line
//                 </button>
//               )}
//             </div>
//             <div style={{ overflowX: 'auto' }}>
//               <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
//                 <thead>
//                   <tr style={{ background: '#F9FAFB' }}>
//                     {['#', 'Description', 'GL Account', 'Account Name', 'Estimated', 'Approved', 'Amount Used', 'Amount Returned',
//                       ...(perms.canEdit ? ['Action'] : []),
//                     ].map(h => (
//                       <th key={h} style={{ padding: '9px 12px', textAlign: 'left', fontWeight: 700, color: '#374151', fontSize: 11, letterSpacing: 0.3, borderBottom: '1px solid #F3F4F6', whiteSpace: 'nowrap' }}>
//                         {h}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {lines.length === 0 ? (
//                     <tr>
//                       <td colSpan={9} style={{ textAlign: 'center', padding: '28px', color: '#9CA3AF', fontSize: 13 }}>Koi line nahi hai</td>
//                     </tr>
//                   ) : lines.map((line, i) => (
//                     <tr key={i} style={{ borderBottom: '1px solid #F9FAFB' }}>
//                       <td style={{ padding: '8px 12px', color: '#9CA3AF', fontWeight: 600 }}>{line.sr}</td>

//                       <td style={{ padding: '8px 12px' }}>
//                         <input value={line.description} disabled={!perms.canEdit}
//                           onChange={e => handleLineChange(i, 'description', e.target.value)}
//                           style={{ width: 145, padding: '5px 7px', borderRadius: 6, border: '1.5px solid #E5E7EB', fontSize: 12, background: perms.canEdit ? 'white' : '#F9FAFB', fontFamily: 'inherit' }}
//                         />
//                       </td>

//                       <td style={{ padding: '8px 12px' }}>
//                         <input value={line.gl_account} disabled={!perms.canEdit}
//                           onChange={e => handleLineChange(i, 'gl_account', e.target.value)}
//                           style={{ width: 80, padding: '5px 7px', borderRadius: 6, border: '1.5px solid #E5E7EB', fontSize: 12, background: perms.canEdit ? 'white' : '#F9FAFB', fontFamily: 'inherit' }}
//                         />
//                       </td>

//                       <td style={{ padding: '8px 12px' }}>
//                         <input value={line.account_name} disabled={!perms.canEdit}
//                           onChange={e => handleLineChange(i, 'account_name', e.target.value)}
//                           style={{ width: 130, padding: '5px 7px', borderRadius: 6, border: '1.5px solid #E5E7EB', fontSize: 12, background: perms.canEdit ? 'white' : '#F9FAFB', fontFamily: 'inherit' }}
//                         />
//                       </td>

//                       {/* Estimated — always read-only */}
//                       <td style={{ padding: '8px 12px', color: '#6B7280', fontWeight: 500 }}>{fmt(line.estimated_amount)}</td>

//                       {/* Approved — Finance Manager can edit */}
//                       <td style={{ padding: '8px 12px' }}>
//                         {perms.canEditFMAmts ? (
//                           <input type="number" value={line.approved_amount}
//                             onChange={e => handleLineChange(i, 'approved_amount', e.target.value)}
//                             style={{ width: 88, padding: '5px 7px', borderRadius: 6, border: '1.5px solid #10B981', fontSize: 12, fontFamily: 'inherit' }}
//                           />
//                         ) : (
//                           <span style={{ color: '#065F46', fontWeight: 600 }}>{fmt(line.approved_amount)}</span>
//                         )}
//                       </td>

//                       {/* Amount Used */}
//                       <td style={{ padding: '8px 12px' }}>
//                         <input type="number" value={line.amount_used} disabled={!perms.canEdit}
//                           onChange={e => handleLineChange(i, 'amount_used', e.target.value)}
//                           style={{ width: 88, padding: '5px 7px', borderRadius: 6, border: '1.5px solid #E5E7EB', fontSize: 12, background: perms.canEdit ? 'white' : '#F9FAFB', fontFamily: 'inherit' }}
//                         />
//                       </td>

//                       {/* Amount Returned */}
//                       <td style={{ padding: '8px 12px' }}>
//                         <input type="number" value={line.surrendered_amount} disabled={!perms.canEdit}
//                           onChange={e => handleLineChange(i, 'surrendered_amount', e.target.value)}
//                           style={{ width: 88, padding: '5px 7px', borderRadius: 6, border: '1.5px solid #E5E7EB', fontSize: 12, background: perms.canEdit ? 'white' : '#F9FAFB', fontFamily: 'inherit' }}
//                         />
//                       </td>

//                       {perms.canEdit && (
//                         <td style={{ padding: '8px 12px' }}>
//                           <button onClick={() => deleteLine(i)}
//                             style={{ background: '#FEF2F2', border: 'none', borderRadius: 6, padding: '4px 8px', cursor: 'pointer', color: '#EF4444', fontSize: 13 }}>
//                             🗑
//                           </button>
//                         </td>
//                       )}
//                     </tr>
//                   ))}
//                 </tbody>
//                 <tfoot>
//                   <tr style={{ background: '#F9FAFB', borderTop: '2px solid #E5E7EB' }}>
//                     <td colSpan={4} style={{ padding: '9px 12px', fontWeight: 700, fontSize: 11, color: '#374151' }}>TOTALS</td>
//                     <td style={{ padding: '9px 12px', fontWeight: 800, color: '#6B7280' }}>{fmt(totals.estimated)}</td>
//                     <td style={{ padding: '9px 12px', fontWeight: 800, color: '#065F46' }}>{fmt(totals.approved)}</td>
//                     <td style={{ padding: '9px 12px', fontWeight: 800, color: '#C2410C' }}>{fmt(totals.used)}</td>
//                     <td style={{ padding: '9px 12px', fontWeight: 800, color: '#1D4ED8' }}>{fmt(totals.surrendered)}</td>
//                     {perms.canEdit && <td />}
//                   </tr>
//                 </tfoot>
//               </table>
//             </div>
//           </div>

//           {/* ── Attachments / Receipts ── */}
//           <div style={{ background: 'white', borderRadius: 12, padding: '20px 24px', marginBottom: 14, border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
//             <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: '#9CA3AF', textTransform: 'uppercase', marginBottom: 14 }}>Receipts & Attachments</div>
//             <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>

//               {attachments.map(file => (
//                 <div key={file.attachment_id} style={{ border: '1px solid #E5E7EB', borderRadius: 10, padding: '12px 14px', minWidth: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, background: '#FAFAFA', position: 'relative' }}>
//                   <span style={{ fontSize: 24 }}>{(file.file_name || '').endsWith('.pdf') ? '📄' : '🖼️'}</span>
//                   <span style={{ fontSize: 10, fontWeight: 600, color: '#374151', textAlign: 'center', wordBreak: 'break-all' }}>
//                     {(file.file_name || '').length > 16 ? (file.file_name || '').slice(0, 13) + '...' : file.file_name}
//                   </span>
//                   <span style={{ fontSize: 9, color: '#9CA3AF' }}>{((file.file_size || 0) / 1024).toFixed(0)} KB</span>
//                   {perms.canEdit && (
//                     <button onClick={() => deleteAttachment(file.attachment_id)}
//                       style={{ position: 'absolute', top: 4, right: 4, background: 'white', border: '1px solid #E5E7EB', borderRadius: '50%', width: 18, height: 18, cursor: 'pointer', fontSize: 9, color: '#9CA3AF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                       ×
//                     </button>
//                   )}
//                 </div>
//               ))}

//               {newFiles.map((f, i) => (
//                 <div key={i} style={{ border: '1.5px dashed #F97316', borderRadius: 10, padding: '12px 14px', minWidth: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, background: '#FFF7ED', position: 'relative' }}>
//                   <span style={{ fontSize: 24 }}>📎</span>
//                   <span style={{ fontSize: 10, fontWeight: 600, color: '#C2410C', textAlign: 'center', wordBreak: 'break-all' }}>
//                     {f.name.length > 16 ? f.name.slice(0, 13) + '...' : f.name}
//                   </span>
//                   <span style={{ fontSize: 9, color: '#9CA3AF' }}>{(f.size / 1024).toFixed(0)} KB · New</span>
//                   <button onClick={() => setNewFiles(prev => prev.filter((_, j) => j !== i))}
//                     style={{ position: 'absolute', top: 4, right: 4, background: 'white', border: '1px solid #E5E7EB', borderRadius: '50%', width: 18, height: 18, cursor: 'pointer', fontSize: 9, color: '#9CA3AF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     ×
//                   </button>
//                 </div>
//               ))}

//               {perms.canEdit && (
//                 <label style={{ border: '2px dashed #E5E7EB', borderRadius: 10, padding: '12px 14px', minWidth: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, cursor: 'pointer', background: '#FAFAFA' }}>
//                   <span style={{ fontSize: 24, color: '#9CA3AF' }}>📎</span>
//                   <span style={{ fontSize: 10, fontWeight: 600, color: '#9CA3AF' }}>Upload Receipt</span>
//                   <input type="file" multiple style={{ display: 'none' }}
//                     onChange={e => setNewFiles(prev => [...prev, ...Array.from(e.target.files)])} />
//                 </label>
//               )}
//             </div>
//           </div>

//           {/* ── Action Buttons (Role + Status driven) ── */}
//           <div style={{ background: 'white', borderRadius: 12, padding: '18px 24px', border: '1px solid #F3F4F6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
//             <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: '#9CA3AF', textTransform: 'uppercase', marginBottom: 14 }}>Actions</div>
//             <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>

//               {/* Save — shown whenever user can edit (user/FM/Director/admin) */}
//               {perms.canSave && (
//                 <button onClick={handleSave} disabled={saving}
//                   style={{ padding: '10px 22px', borderRadius: 9, border: 'none', background: '#F97316', color: 'white', fontSize: 13, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(249,115,22,0.28)', opacity: saving ? 0.7 : 1 }}>
//                   {saving ? '⏳ Saving...' : '💾 Save'}
//                 </button>
//               )}

//               {/* Submit — User only, Draft/Rejected */}
//               {perms.canSubmit && (
//                 <button onClick={handleSubmit} disabled={saving}
//                   style={{ padding: '10px 22px', borderRadius: 9, border: 'none', background: '#111827', color: 'white', fontSize: 13, fontWeight: 700, cursor: 'pointer', opacity: saving ? 0.7 : 1 }}>
//                   ✈️ Submit Surrender
//                 </button>
//               )}

//               {/* Finance Manager Approve */}
//               {perms.canFMApprove && (
//                 <button onClick={handleFMApprove} disabled={saving}
//                   style={{ padding: '10px 22px', borderRadius: 9, border: 'none', background: '#10B981', color: 'white', fontSize: 13, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(16,185,129,0.28)', opacity: saving ? 0.7 : 1 }}>
//                   ✅ Finance Approve
//                 </button>
//               )}

//               {/* Finance Manager Reject */}
//               {perms.canFMReject && (
//                 <button onClick={() => setShowReject(true)} disabled={saving}
//                   style={{ padding: '10px 22px', borderRadius: 9, border: 'none', background: '#EF4444', color: 'white', fontSize: 13, fontWeight: 700, cursor: 'pointer', opacity: saving ? 0.7 : 1 }}>
//                   ✗ Reject
//                 </button>
//               )}

//               {/* Director Approve */}
//               {perms.canDirApprove && (
//                 <button onClick={handleDirApprove} disabled={saving}
//                   style={{ padding: '10px 22px', borderRadius: 9, border: 'none', background: '#1D4ED8', color: 'white', fontSize: 13, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(29,78,216,0.28)', opacity: saving ? 0.7 : 1 }}>
//                   🏁 Director Approve
//                 </button>
//               )}

//               {/* Director Reject */}
//               {perms.canDirReject && (
//                 <button onClick={() => setShowReject(true)} disabled={saving}
//                   style={{ padding: '10px 22px', borderRadius: 9, border: 'none', background: '#EF4444', color: 'white', fontSize: 13, fontWeight: 700, cursor: 'pointer', opacity: saving ? 0.7 : 1 }}>
//                   ✗ Reject
//                 </button>
//               )}

//               {/* Cancel */}
//               <button onClick={() => router.push('/surrender')}
//                 style={{ padding: '10px 18px', borderRadius: 9, border: '1.5px solid #E5E7EB', background: 'white', color: '#374151', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
//                 Cancel
//               </button>

//               <span style={{ marginLeft: 'auto', fontSize: 11, color: '#9CA3AF' }}>
//                 Role: <strong style={{ color: '#F97316' }}>{role}</strong>
//                 {currentUser?.name ? ` · ${currentUser.name}` : ''}
//               </span>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ── Reject Modal ── */}
//       {showReject && (
//         <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <div style={{ background: 'white', borderRadius: 14, padding: 28, maxWidth: 440, width: '90%', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
//             <div style={{ fontSize: 15, fontWeight: 800, color: '#111827', marginBottom: 8 }}>⚠️ Surrender Reject Karein</div>
//             <p style={{ fontSize: 13, color: '#6B7280', margin: '0 0 14px' }}>
//               Rejection reason likhein. User ko wapis bheja jayega dobara submit karne ke liye.
//             </p>
//             <textarea rows={4} value={rejectNote} onChange={e => setRejectNote(e.target.value)}
//               placeholder="Rejection reason yahan likhein..."
//               style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1.5px solid #E5E7EB', fontSize: 13, fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box', outline: 'none' }}
//             />
//             <div style={{ display: 'flex', gap: 10, marginTop: 16, justifyContent: 'flex-end' }}>
//               <button onClick={() => { setShowReject(false); setRejectNote('') }}
//                 style={{ padding: '9px 18px', borderRadius: 8, border: '1.5px solid #E5E7EB', background: 'white', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>
//                 Cancel
//               </button>
//               <button onClick={handleRejectConfirm} disabled={saving}
//                 style={{ padding: '9px 18px', borderRadius: 8, border: 'none', background: '#EF4444', color: 'white', cursor: 'pointer', fontSize: 13, fontWeight: 700, opacity: saving ? 0.7 : 1 }}>
//                 {saving ? '⏳...' : 'Reject Confirm'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ── Toast ── */}
//       {toast && (
//         <div style={{
//           position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
//           background: toast.type === 'error' ? '#FEF2F2' : '#F0FDF4',
//           border: `1px solid ${toast.type === 'error' ? '#FCA5A5' : '#86EFAC'}`,
//           color: toast.type === 'error' ? '#991B1B' : '#166534',
//           padding: '11px 18px', borderRadius: 10, fontSize: 13, fontWeight: 600,
//           boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
//         }}>
//           {toast.type === 'error' ? '❌' : '✅'} {toast.msg}
//         </div>
//       )}

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
//         * { box-sizing: border-box; }
//         input, textarea, select { font-family: inherit; color: #374151; }
//         input:focus, textarea:focus { border-color: #F97316 !important; outline: none; }
//       `}</style>
//     </div>
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
const SAGE_API_BASE = 'http://localhost:5000/freedom.core/KNBSDEMO/sdk/rest'

// ─── Workflow (per docs) ───────────────────────────────────────────────────────
// FinanceApproved → user submits surrender → Surrendered
// Surrendered     → Finance Manager approves/rejects → FMApproved / Rejected
// FMApproved      → Director approves/rejects → Completed / Rejected
// Rejected        → goes back to user → re-submit → Surrendered
// Completed       → GL journal posted to Sage → no further changes

// ─── Types ────────────────────────────────────────────────────────────────────
interface SurrenderLine {
  breakdown_id?: number
  srNo: string
  debtor_code?: number | string
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

interface LoggedInUser {
  user_id: number
  department_id: number
  department_name: string
  name: string
  role: string
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

// ─── Status badge colors ──────────────────────────────────────────────────────
const statusColor: Record<string, string> = {
  FinanceApproved: '#7C3AED',
  Draft: '#6B7280',
  Surrendered: '#FF9800',
  FMApproved: '#1976D2',
  Completed: '#4CAF50',
  Rejected: '#EF5350',
}

// ─── Date → Sage milliseconds helper ─────────────────────────────────────────
const toSageDate = (date: Date = new Date()) =>
  `/Date(${date.getTime()})/`

// ─── Sage API calls for Surrender (per docs) ──────────────────────────────────
// On Completed: post CustomerTransaction (reverse) + GLTransactionBatch
const postSurrenderToSage = async (
  requestNo: string,
  debtorCode: string,
  amountUsed: number,
  amountReturned: number,
  glLines: { accountCode: string; debit: number }[]
) => {
  const dateMs = toSageDate()

  // 1. Reverse debtor — amount used
  await axios.post(`${SAGE_API_BASE}/CustomerTransactionPost`, {
    CustomerTransactionPost: {
      Date: dateMs,
      CustomerCode: debtorCode,
      Reference: `${requestNo}-SUR`,
      TransactionCode: 'SURRENDER',
      Amount: amountUsed.toFixed(2),
    },
  })

  // 2. Return amount (if any)
  if (amountReturned > 0) {
    await axios.post(`${SAGE_API_BASE}/CustomerTransactionPost`, {
      CustomerTransactionPost: {
        Date: dateMs,
        CustomerCode: debtorCode,
        Reference: `${requestNo}-RET`,
        TransactionCode: 'IMPRESTRET',
        Amount: amountReturned.toFixed(2),
      },
    })
  }

  // 3. GL Journal — debit expense accounts, credit holder account (99100)
  const totalUsed = glLines.reduce((sum, l) => sum + l.debit, 0)
  await axios.post(`${SAGE_API_BASE}/GLTransactionPost`, {
    GLTransactionBatch: {
      Transactions: [
        ...glLines.map((line) => ({
          Date: dateMs,
          AccountCode: line.accountCode,
          Reference: requestNo,
          TransactionCode: 'JNL',
          Debit: line.debit.toFixed(2),
        })),
        {
          Date: dateMs,
          AccountCode: '99100',
          Reference: requestNo,
          TransactionCode: 'JNL',
          Credit: totalUsed.toFixed(2),
        },
      ],
    },
  })
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function EditSurrenderDetailsPage() {
  const router = useRouter()
  const { id } = useParams()
  const [selectedMenu, setSelectedMenu] = useState('Surrender')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null)

  const [alert, setAlert] = useState<{
    open: boolean
    message: string
    severity: 'success' | 'error' | 'info' | 'warning'
  }>({ open: false, message: '', severity: 'success' })

  // Dropdown data
  const [users, setUsers] = useState<User[]>([])
  const [departments, setDepartments] = useState<Department[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [clients, setClients] = useState<Client[]>([])
  const [accounts, setAccounts] = useState<Account[]>([])

  const [formData, setFormData] = useState({
    surrenderNumber: '',
    imprestNumber: '',
    requestNo: '',
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

  // ── Load user ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setLoggedInUser({
        user_id: user.id,
        department_id: user.department_id || user.department,
        department_name: user.department,
        name: user.user_name,
        role: user.role || 'user',
      })
    }
  }, [])

  useEffect(() => {
    fetchUsers()
    fetchDepartments()
    fetchProjects()
    fetchClients()
    fetchAccounts()
  }, [])

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
    }
  }

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/project/projects-list/`)
      setProjects(response.data)
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
  }

  const fetchClients = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/client/clients-list/`)
      setClients(response.data)
    } catch (error) {
      console.error('Error fetching clients:', error)
    }
  }

  const fetchAccounts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/account/accounts-list/`)
      setAccounts(response.data)
    } catch (error) {
      console.error('Error fetching accounts:', error)
    }
  }

  const fetchSurrender = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/imprest/${id}/`)
      const data = res.data

      setFormData({
        surrenderNumber: data.imprest_id || '',
        imprestNumber: data.request_no || '',
        requestNo: data.request_no || '',
        userRequester: data.user_requested || '',
        status: data.status || '',
        userEntered: data.user_entered || '',
        project: data.project || '',
        department: data.department || '',
        purpose: data.purpose || '',
        surrender_date: data.surrender_date || '',
        remarks: data.remarks || '',
      })

      setSurrenderLines(
        (data.surrender_lines || data.request_lines || []).map(
          (line: any, index: number) => ({
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
          })
        )
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

  const handleCloseAlert = () => setAlert((prev) => ({ ...prev, open: false }))

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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) setNewFiles((prev) => [...prev, ...Array.from(files)])
  }

  const handleFileDelete = (index: number) => {
    setNewFiles(newFiles.filter((_, i) => i !== index))
  }

  const handleDeleteAllFiles = () => setNewFiles([])

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

  const uploadAttachments = async () => {
    try {
      const fd = new FormData()
      newFiles.forEach((file) => fd.append('files', file))
      fd.append('attachment_type', 'Support')
      await axios.post(`${API_BASE_URL}/imprest/${id}/upload-multiple-attachments/`, fd)
    } catch (error) {
      console.error('Error uploading attachments:', error)
      showAlert('Failed to upload new attachments', 'warning')
    }
  }

  // ── Build payload ──────────────────────────────────────────────────────────
  const buildPayload = (overrideStatus?: string) => ({
    user_requested: formData.userRequester,
    user_entered: formData.userEntered,
    department: formData.department,
    project: formData.project,
    purpose: formData.purpose,
    status: overrideStatus || formData.status,
    surrender_date: formData.surrender_date,
    remarks: formData.remarks,
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
  })

  // ── Save Draft ─────────────────────────────────────────────────────────────
  const handleSaveDraft = async () => {
    try {
      setSaving(true)
      await axios.put(`${API_BASE_URL}/imprest/${id}/`, buildPayload('Draft'))
      if (newFiles.length > 0) await uploadAttachments()
      showAlert('Draft saved successfully!', 'success')
      setTimeout(() => router.push('/surrender'), 1500)
    } catch (error: any) {
      showAlert(error.response?.data?.detail || 'Failed to save draft', 'error')
    } finally {
      setSaving(false)
    }
  }

  // ── Submit Surrender (Draft/Rejected → Surrendered) ────────────────────────
  // Docs: user submits surrender with amount used + receipts
  const handleSubmitSurrender = async () => {
    if (!surrenderLines.length) {
      showAlert('Please add at least one surrender line', 'warning')
      return
    }
    try {
      setSaving(true)
      await axios.put(`${API_BASE_URL}/imprest/${id}/`, buildPayload('Surrendered'))
      if (newFiles.length > 0) await uploadAttachments()
      showAlert('Surrender submitted successfully!', 'success')
      setTimeout(() => router.push('/surrender'), 1500)
    } catch (error: any) {
      showAlert(error.response?.data?.detail || 'Failed to submit surrender', 'error')
    } finally {
      setSaving(false)
    }
  }

  // ── Finance Manager: Approve (Surrendered → FMApproved) ────────────────────
  // Docs: FM may change Amount Used as per receipts, then approve
  const handleFMApprove = async () => {
    try {
      setSaving(true)
      // Save any FM changes to lines first, then update status
      await axios.put(`${API_BASE_URL}/imprest/${id}/`, buildPayload('FMApproved'))
      showAlert('Approved by Finance Manager!', 'success')
      setTimeout(() => router.push('/surrender'), 1500)
    } catch (error: any) {
      showAlert(error.response?.data?.detail || 'Approval failed', 'error')
    } finally {
      setSaving(false)
    }
  }

  // ── Finance Manager: Reject (Surrendered → Rejected) ──────────────────────
  // Docs: If not approved, goes back to user who submitted
  const handleFMReject = async () => {
    if (!formData.remarks.trim()) {
      showAlert('Please add rejection remarks before rejecting', 'warning')
      return
    }
    try {
      setSaving(true)
      await axios.patch(`${API_BASE_URL}/imprest/${id}/`, {
        status: 'Rejected',
        remarks: formData.remarks,
      })
      showAlert('Surrender rejected. Sent back to user.', 'info')
      setTimeout(() => router.push('/surrender'), 1500)
    } catch (error: any) {
      showAlert(error.response?.data?.detail || 'Rejection failed', 'error')
    } finally {
      setSaving(false)
    }
  }

  // ── Director: Approve (FMApproved → Completed) ────────────────────────────
  // Docs: Once Director approves → status Completed → GL journal posted to Sage
  // After Completed no changes anywhere
  const handleDirectorApprove = async () => {
    try {
      setSaving(true)

      // 1. Update status to Completed
      await axios.patch(`${API_BASE_URL}/imprest/${id}/`, { status: 'Completed' })
      setFormData((prev) => ({ ...prev, status: 'Completed' }))

      // 2. Post to Sage (per docs: CustomerTransaction + GLTransaction)
      try {
        // Use first debtor code from lines (or fallback)
        const firstLine = surrenderLines[0]
        const debtorCode = String(firstLine?.debtor_code || '')
        const amountUsed = surrenderLines.reduce(
          (sum, l) => sum + parseFloat(l.spent_amount || l.approved_amount || '0'), 0
        )
        const amountReturned = surrenderLines.reduce(
          (sum, l) => sum + parseFloat(l.surrendered_amount || '0'), 0
        )
        const glLines = surrenderLines
          .filter((l) => l.gl_account)
          .map((l) => ({
            accountCode: l.gl_account,
            debit: parseFloat(l.spent_amount || l.approved_amount || '0'),
          }))

        await postSurrenderToSage(
          formData.requestNo,
          debtorCode,
          amountUsed,
          amountReturned,
          glLines
        )
        showAlert('Surrender completed and posted to Sage!', 'success')
      } catch (sageErr) {
        console.error('Sage posting error:', sageErr)
        showAlert('Completed but Sage posting failed. Please check Sage manually.', 'warning')
      }

      setTimeout(() => router.push('/surrender'), 2000)
    } catch (error: any) {
      showAlert(error.response?.data?.detail || 'Director approval failed', 'error')
    } finally {
      setSaving(false)
    }
  }

  // ── Director: Reject (FMApproved → Rejected) ──────────────────────────────
  // Docs: If Director rejects → goes back to user → re-submit → FM → Director again
  const handleDirectorReject = async () => {
    if (!formData.remarks.trim()) {
      showAlert('Please add rejection remarks before rejecting', 'warning')
      return
    }
    try {
      setSaving(true)
      await axios.patch(`${API_BASE_URL}/imprest/${id}/`, {
        status: 'Rejected',
        remarks: formData.remarks,
      })
      showAlert('Surrender rejected by Director. Sent back to user.', 'info')
      setTimeout(() => router.push('/surrender'), 1500)
    } catch (error: any) {
      showAlert(error.response?.data?.detail || 'Rejection failed', 'error')
    } finally {
      setSaving(false)
    }
  }

  // ── Role/status based field editability ───────────────────────────────────
  // Docs: FM can change Amount Used as per receipts
  // Docs: After Completed → no change anywhere
  const isCompleted = formData.status === 'Completed'
  const isFMEditing = loggedInUser?.role === 'finance_manager' && formData.status === 'Surrendered'
  const isUserEditing =
    (formData.status === 'Draft' || formData.status === 'FinanceApproved' || formData.status === 'Rejected') &&
    loggedInUser?.role === 'user'
  const isReadOnly = isCompleted

  // FM can only edit spent_amount, not other line fields
  const canEditSpentAmount = isFMEditing || isUserEditing
  const canEditOtherFields = isUserEditing && !isCompleted

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
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA', overflow: 'hidden' }}>
      <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header />

        <Box sx={{ flexGrow: 1, overflow: 'auto', p: 3 }}>
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

            {/* ── Header Row ── */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Edit Surrender
              </Typography>
              {formData.status && (
                <Box
                  sx={{
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    bgcolor: statusColor[formData.status] || '#6B7280',
                    color: 'white',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: 0.5,
                  }}
                >
                  {formData.status === 'FinanceApproved' ? 'Finance Approved' : formData.status}
                </Box>
              )}
            </Box>

            {/* ── Completed Warning ── */}
            {isCompleted && (
              <Alert severity="info" sx={{ mb: 3 }}>
                This surrender is <strong>Completed</strong>. No further changes can be made.
                GL journal has been posted to Sage.
              </Alert>
            )}

            {/* ── Rejected Notice ── */}
            {formData.status === 'Rejected' && (
              <Alert severity="warning" sx={{ mb: 3 }}>
                This surrender was <strong>Rejected</strong>. Please review the remarks, make changes, and re-submit.
                {formData.remarks && <><br /><strong>Reason:</strong> {formData.remarks}</>}
              </Alert>
            )}

            {/* ── FM Notice ── */}
            {isFMEditing && (
              <Alert severity="info" sx={{ mb: 3 }}>
                <strong>Finance Manager Review:</strong> You may adjust the <em>Spent Amount</em> as per receipts before approving.
              </Alert>
            )}

            {/* ── Form Fields ── */}
            <Grid container spacing={3} mb={4}>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Surrender Number"
                  size="small"
                  fullWidth
                  disabled
                  value={formData.surrenderNumber}
                  sx={{ bgcolor: '#F9FAFB' }}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  label="Imprest Number"
                  size="small"
                  fullWidth
                  disabled
                  value={formData.imprestNumber}
                  sx={{ bgcolor: '#F9FAFB' }}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  label="Surrender Date"
                  size="small"
                  type="date"
                  fullWidth
                  disabled={isReadOnly || !canEditOtherFields}
                  value={formData.surrender_date}
                  onChange={(e) => handleFormChange('surrender_date', e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  sx={{ bgcolor: '#F9FAFB' }}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  select
                  label="User Requester *"
                  size="small"
                  fullWidth
                  disabled={isReadOnly || !canEditOtherFields}
                  value={formData.userRequester}
                  onChange={(e) => handleFormChange('userRequester', Number(e.target.value))}
                  sx={{ bgcolor: '#F9FAFB' }}
                >
                  {users.map((user) => (
                    <MenuItem key={user.id} value={user.id}>
                      {getUserDisplayName(user)}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  select
                  label="User Entered"
                  size="small"
                  fullWidth
                  disabled={isReadOnly || !canEditOtherFields}
                  value={formData.userEntered}
                  onChange={(e) => handleFormChange('userEntered', Number(e.target.value))}
                  sx={{ bgcolor: '#F9FAFB' }}
                >
                  {users.map((user) => (
                    <MenuItem key={user.id} value={user.id}>
                      {getUserDisplayName(user)}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  select
                  label="Project *"
                  size="small"
                  fullWidth
                  disabled={isReadOnly || !canEditOtherFields}
                  value={formData.project}
                  onChange={(e) => handleFormChange('project', Number(e.target.value))}
                  sx={{ bgcolor: '#F9FAFB' }}
                >
                  {projects.map((p) => (
                    <MenuItem key={getProjectId(p)} value={getProjectId(p)}>
                      {getProjectName(p)}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  select
                  label="Department *"
                  size="small"
                  fullWidth
                  disabled={isReadOnly || !canEditOtherFields}
                  value={formData.department}
                  onChange={(e) => handleFormChange('department', Number(e.target.value))}
                  sx={{ bgcolor: '#F9FAFB' }}
                >
                  {departments.map((d) => (
                    <MenuItem key={d.id} value={d.id}>
                      {d.department_name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={8}>
                <TextField
                  label="Purpose *"
                  multiline
                  rows={3}
                  fullWidth
                  disabled={isReadOnly || !canEditOtherFields}
                  value={formData.purpose}
                  onChange={(e) => handleFormChange('purpose', e.target.value)}
                  sx={{ bgcolor: '#F9FAFB' }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label={formData.status === 'Surrendered' && isFMEditing ? 'Remarks / Rejection Reason *' : 'Remarks'}
                  multiline
                  rows={2}
                  fullWidth
                  disabled={isCompleted}
                  value={formData.remarks}
                  onChange={(e) => handleFormChange('remarks', e.target.value)}
                  sx={{ bgcolor: '#F9FAFB' }}
                  helperText={
                    (isFMEditing || loggedInUser?.role === 'director') && formData.status !== 'Completed'
                      ? 'Required if rejecting'
                      : ''
                  }
                />
              </Grid>
            </Grid>

            {/* ── Existing Attachments ── */}
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
                      <Typography
                        variant="caption"
                        sx={{ textAlign: 'center', wordBreak: 'break-all', fontSize: '0.7rem', color: '#6B7280' }}
                      >
                        {file.file_name.length > 15
                          ? file.file_name.substring(0, 12) + '...'
                          : file.file_name}
                      </Typography>
                      <Typography variant="caption" sx={{ fontSize: '0.65rem', color: '#9CA3AF', mt: 0.5 }}>
                        {(file.file_size / 1024).toFixed(2)} KB
                      </Typography>
                      {!isCompleted && (
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
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {/* ── Upload New Documents (only when not completed) ── */}
            {!isCompleted && (canEditOtherFields || isFMEditing) && (
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
                      <Button component="span" sx={{ textTransform: 'none', color: '#6B7280', fontWeight: 500 }}>
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
                          <Typography
                            variant="caption"
                            sx={{ textAlign: 'center', wordBreak: 'break-all', fontSize: '0.7rem', color: '#6B7280' }}
                          >
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
                        sx={{ textTransform: 'none', color: '#6B7280', border: '1px solid #E5E7EB', px: 2 }}
                      >
                        Delete All
                      </Button>
                    </Box>
                  </Box>
                )}
              </Box>
            )}

            {/* ── Surrender Lines ── */}
            <Typography fontWeight={600} mb={2}>
              Surrender Lines
            </Typography>

            <TableContainer sx={{ border: '1px solid #E5E7EB', borderRadius: 2, overflowX: 'auto' }}>
              <Table sx={{ minWidth: 1600 }} size="small">
                <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                  <TableRow>
                    <TableCell sx={{ minWidth: 60, fontWeight: 600 }}>Sr No</TableCell>
                    <TableCell sx={{ minWidth: 140, fontWeight: 600 }}>Debtor Code</TableCell>
                    <TableCell sx={{ minWidth: 180, fontWeight: 600 }}>Debtor Name</TableCell>
                    <TableCell sx={{ minWidth: 220, fontWeight: 600 }}>Description</TableCell>
                    <TableCell sx={{ minWidth: 140, fontWeight: 600 }}>GL Account</TableCell>
                    <TableCell sx={{ minWidth: 200, fontWeight: 600 }}>Account Name</TableCell>
                    <TableCell sx={{ minWidth: 120, fontWeight: 600 }}>Est. Amt</TableCell>
                    <TableCell sx={{ minWidth: 120, fontWeight: 600 }}>Appr. Amt</TableCell>
                    {/* Spent Amount — editable by FM to adjust per receipts */}
                    <TableCell sx={{ minWidth: 120, fontWeight: 600 }}>
                      Spent Amt
                      {isFMEditing && (
                        <Typography variant="caption" sx={{ color: '#FF9800', display: 'block', fontSize: '0.65rem' }}>
                          FM Editable
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell sx={{ minWidth: 130, fontWeight: 600 }}>Surrendered Amt</TableCell>
                    <TableCell sx={{ minWidth: 160, fontWeight: 600 }}>Supplier</TableCell>
                    {!isCompleted && <TableCell sx={{ minWidth: 80, fontWeight: 600 }}>Action</TableCell>}
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
                          disabled={isReadOnly || !canEditOtherFields}
                          options={clients}
                          getOptionLabel={(o) => `${o.DCLink}`}
                          value={clients.find((c) => c.DCLink == row.debtor_code) || null}
                          onChange={(_, val) => {
                            handleRowChange(i, 'debtor_code', val?.DCLink || '')
                            handleRowChange(i, 'debtor_name', val?.Name || '')
                          }}
                          renderInput={(params) => <TextField {...params} size="small" />}
                        />
                      </TableCell>

                      {/* Debtor Name */}
                      <TableCell>
                        <Autocomplete
                          size="small"
                          fullWidth
                          disabled={isReadOnly || !canEditOtherFields}
                          options={clients}
                          getOptionLabel={(o) => o.Name}
                          value={clients.find((c) => c.DCLink == row.debtor_code) || null}
                          onChange={(_, val) => {
                            handleRowChange(i, 'debtor_code', val?.DCLink || '')
                            handleRowChange(i, 'debtor_name', val?.Name || '')
                          }}
                          renderInput={(params) => <TextField {...params} size="small" />}
                        />
                      </TableCell>

                      {/* Description */}
                      <TableCell>
                        <TextField
                          size="small"
                          fullWidth
                          disabled={isReadOnly || !canEditOtherFields}
                          value={row.description}
                          onChange={(e) => handleRowChange(i, 'description', e.target.value)}
                        />
                      </TableCell>

                      {/* GL Account */}
                      <TableCell>
                        <Autocomplete
                          size="small"
                          fullWidth
                          disabled={isReadOnly || !canEditOtherFields}
                          options={accounts}
                          getOptionLabel={(o) => o.Master_Sub_Account}
                          value={accounts.find((a) => a.Master_Sub_Account === row.gl_account) || null}
                          onChange={(_, val) => {
                            handleRowChange(i, 'gl_account', val?.Master_Sub_Account || '')
                            handleRowChange(i, 'account_name', val?.Description || '')
                          }}
                          renderInput={(params) => <TextField {...params} size="small" />}
                        />
                      </TableCell>

                      {/* Account Name */}
                      <TableCell>
                        <Autocomplete
                          size="small"
                          fullWidth
                          disabled={isReadOnly || !canEditOtherFields}
                          options={accounts}
                          getOptionLabel={(o) => o.Description}
                          value={accounts.find((a) => a.Master_Sub_Account === row.gl_account) || null}
                          onChange={(_, val) => {
                            handleRowChange(i, 'gl_account', val?.Master_Sub_Account || '')
                            handleRowChange(i, 'account_name', val?.Description || '')
                          }}
                          renderInput={(params) => <TextField {...params} size="small" />}
                        />
                      </TableCell>

                      {/* Estimated Amount — always read-only (set in original imprest) */}
                      <TableCell>
                        <TextField
                          size="small"
                          type="number"
                          fullWidth
                          disabled
                          value={row.estimated_amount || ''}
                          sx={{ bgcolor: '#F9FAFB' }}
                        />
                      </TableCell>

                      {/* Approved Amount — read-only */}
                      <TableCell>
                        <TextField
                          size="small"
                          type="number"
                          fullWidth
                          disabled
                          value={row.approved_amount || ''}
                          sx={{ bgcolor: '#F9FAFB' }}
                        />
                      </TableCell>

                      {/* Spent Amount — FM can edit, user can also enter when submitting */}
                      <TableCell>
                        <TextField
                          size="small"
                          type="number"
                          fullWidth
                          disabled={isReadOnly || !canEditSpentAmount}
                          value={row.spent_amount || ''}
                          onChange={(e) => handleRowChange(i, 'spent_amount', e.target.value)}
                          sx={isFMEditing ? { bgcolor: '#FFF8E1' } : {}}
                        />
                      </TableCell>

                      {/* Surrendered Amount (returned) */}
                      <TableCell>
                        <TextField
                          size="small"
                          type="number"
                          fullWidth
                          disabled={isReadOnly || !canEditOtherFields}
                          value={row.surrendered_amount || ''}
                          onChange={(e) => handleRowChange(i, 'surrendered_amount', e.target.value)}
                        />
                      </TableCell>

                      {/* Supplier */}
                      <TableCell>
                        <TextField
                          size="small"
                          fullWidth
                          disabled={isReadOnly || !canEditOtherFields}
                          value={row.supplier_no}
                          onChange={(e) => handleRowChange(i, 'supplier_no', e.target.value)}
                        />
                      </TableCell>

                      {!isCompleted && (
                        <TableCell align="center">
                          {canEditOtherFields && (
                            <IconButton size="small" onClick={() => handleDeleteLine(i)} color="error">
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          )}
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {canEditOtherFields && (
              <Button onClick={addRow} sx={{ mt: 2, textTransform: 'none' }}>
                + Add More
              </Button>
            )}

            {/* ── Action Buttons — per workflow docs ── */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4, flexWrap: 'wrap' }}>

              {/* USER: Draft or FinanceApproved or Rejected → can Save Draft or Submit */}
              {!isCompleted &&
                loggedInUser?.role === 'user' &&
                (formData.status === 'Draft' ||
                  formData.status === 'FinanceApproved' ||
                  formData.status === 'Rejected') && (
                  <>
                    {formData.status !== 'FinanceApproved' && (
                      <Button
                        variant="outlined"
                        sx={{ textTransform: 'none' }}
                        onClick={handleSaveDraft}
                        disabled={saving}
                      >
                        {saving ? 'Saving...' : 'Save Draft'}
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      sx={{ bgcolor: '#FF9800', '&:hover': { bgcolor: '#e68900' }, textTransform: 'none' }}
                      onClick={handleSubmitSurrender}
                      disabled={saving}
                    >
                      {saving ? 'Submitting...' : 'Submit Surrender'}
                    </Button>
                  </>
                )}

              {/* FINANCE MANAGER: Surrendered → Approve or Reject */}
              {!isCompleted &&
                loggedInUser?.role === 'finance_manager' &&
                formData.status === 'Surrendered' && (
                  <>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: '#EF5350', '&:hover': { bgcolor: '#c62828' }, textTransform: 'none' }}
                      onClick={handleFMReject}
                      disabled={saving}
                    >
                      {saving ? 'Rejecting...' : 'Reject'}
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: '#1976D2', '&:hover': { bgcolor: '#1565C0' }, textTransform: 'none' }}
                      onClick={handleFMApprove}
                      disabled={saving}
                    >
                      {saving ? 'Approving...' : 'Approve'}
                    </Button>
                  </>
                )}

              {/* DIRECTOR: FMApproved → Final Approve or Reject */}
              {!isCompleted &&
                loggedInUser?.role === 'director' &&
                formData.status === 'FMApproved' && (
                  <>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: '#EF5350', '&:hover': { bgcolor: '#c62828' }, textTransform: 'none' }}
                      onClick={handleDirectorReject}
                      disabled={saving}
                    >
                      {saving ? 'Rejecting...' : 'Reject'}
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: '#4CAF50', '&:hover': { bgcolor: '#388E3C' }, textTransform: 'none' }}
                      onClick={handleDirectorApprove}
                      disabled={saving}
                    >
                      {saving ? 'Processing...' : 'Approve & Complete'}
                    </Button>
                  </>
                )}

              {/* Cancel always visible */}
              <Button
                variant="outlined"
                onClick={() => router.back()}
                sx={{ textTransform: 'none' }}
              >
                Cancel
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