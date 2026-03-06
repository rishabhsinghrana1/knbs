// // // 'use client'

// // // import React, { useState } from 'react'
// // // import {
// // //   Box,
// // //   Paper,
// // //   Typography,
// // //   TextField,
// // //   MenuItem,
// // //   Button,
// // //   Grid,
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableContainer,
// // //   TableHead,
// // //   TableRow,
// // //   IconButton,
// // //   Breadcrumbs,
// // //   Link,
// // // } from '@mui/material'
// // // import {
// // //   CloudUpload as UploadIcon,
// // //   Delete as DeleteIcon,
// // //   NavigateNext as NavigateNextIcon,
// // // } from '@mui/icons-material'
// // // import Sidebar from '../main/Sidebar'
// // // import Header from '../main/Header'

// // // const imprestTypes = ['Type A', 'Type B', 'Type C']
// // // const userRequesters = ['John Doe', 'Jane Smith', 'Mike Johnson']
// // // const userRaisers = ['Admin User', 'HR Manager', 'Finance Head']
// // // const statuses = ['Draft', 'Pending', 'Approved']
// // // const projects = ['Project Alpha', 'Project Beta', 'Project Gamma']
// // // const departments = ['Finance', 'HR', 'Marketing', 'Software']

// // // const expenseCategories = [
// // //   'Sr. No.',
// // //   'Deduction Code',
// // //   'Deduction Name',
// // //   'GL account',
// // //   'Account Name',
// // //   'Amount requested',
// // //   'Amount approved',
// // //   'Amount Used',
// // //   'Supplier No.'
// // // ]

// // // export default function ImprestDetailsPage() {
// // //   const [selectedMenu, setSelectedMenu] = useState('Imprest')
// // //   const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

// // //   // Form states
// // //   const [imprestNumber, setImprestNumber] = useState('')
// // //   const [userRequester, setUserRequester] = useState('')
// // //   const [status, setStatus] = useState('')
// // //   const [userRaiser, setUserRaiser] = useState('')
// // //   const [project, setProject] = useState('')
// // //   const [department, setDepartment] = useState('')
// // //   const [remarks, setRemarks] = useState('')
// // //   const [approvalRemarks, setApprovalRemarks] = useState('')

// // //   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
// // //     const files = event.target.files
// // //     if (files) {
// // //       setUploadedFiles([...uploadedFiles, ...Array.from(files)])
// // //     }
// // //   }

// // //   const handleFileDelete = (index: number) => {
// // //     setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
// // //   }

// // //   const handleSubmit = () => {
// // //     console.log('Form submitted')
// // //   }

// // //   const handleCancel = () => {
// // //     console.log('Form cancelled')
// // //   }

// // //   const handleDeleteAll = () => {
// // //     setUploadedFiles([])
// // //   }

// // //   const handleUploadAll = () => {
// // //     console.log('Upload all files')
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
// // //         <Box sx={{ 
// // //           flexGrow: 1, 
// // //           overflow: 'auto',
// // //           '&::-webkit-scrollbar': {
// // //             width: '8px',
// // //           },
// // //           '&::-webkit-scrollbar-track': {
// // //             background: '#f1f1f1',
// // //           },
// // //           '&::-webkit-scrollbar-thumb': {
// // //             background: '#888',
// // //             borderRadius: '4px',
// // //           },
// // //           '&::-webkit-scrollbar-thumb:hover': {
// // //             background: '#555',
// // //           },
// // //         }}>
// // //           <Box sx={{ p: 3 }}>
// // //             {/* Breadcrumbs */}
// // //             <Breadcrumbs 
// // //               separator={<NavigateNextIcon fontSize="small" />}
// // //               sx={{ mb: 2 }}
// // //             >
// // //               <Link 
// // //                 underline="hover" 
// // //                 color="inherit" 
// // //                 href="/imprest"
// // //                 sx={{ fontSize: '0.875rem', color: '#6B7280' }}
// // //               >
// // //                 Imprest
// // //               </Link>
// // //               <Link 
// // //                 underline="hover" 
// // //                 color="inherit" 
// // //                 href="/imprest"
// // //                 sx={{ fontSize: '0.875rem', color: '#6B7280' }}
// // //               >
// // //                 New Request
// // //               </Link>
// // //               <Typography sx={{ fontSize: '0.875rem', color: '#1A1A1A', fontWeight: 500 }}>
// // //                 Imprest Details
// // //               </Typography>
// // //             </Breadcrumbs>

// // //             <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
// // //               {/* Title */}
// // //               <Typography variant="h5" sx={{ fontWeight: 600, mb: 4 }}>
// // //                 Imprest Details
// // //               </Typography>

// // //               {/* Add Information Section */}
// // //               <Box sx={{ mb: 4 }}>
// // //                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2.5, color: '#1A1A1A' }}>
// // //                   Add Information
// // //                 </Typography>
// // //                 <Typography variant="caption" sx={{ color: '#6B7280', display: 'block', mb: 3 }}>
// // //                   Items with * information
// // //                 </Typography>

// // //                 <Grid container spacing={3}>
// // //                   {/* Imprest Number */}
// // //                   <Grid item xs={12} md={4}>
// // //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// // //                       Imprest number
// // //                     </Typography>
// // //                     <TextField
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="Imprest number"
// // //                       value={imprestNumber}
// // //                       onChange={(e) => setImprestNumber(e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     />
// // //                   </Grid>

// // //                   {/* User Requester */}
// // //                   <Grid item xs={12} md={4}>
// // //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// // //                       User Requester
// // //                     </Typography>
// // //                     <TextField
// // //                       select
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="Select user"
// // //                       value={userRequester}
// // //                       onChange={(e) => setUserRequester(e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     >
// // //                       {userRequesters.map((user) => (
// // //                         <MenuItem key={user} value={user}>{user}</MenuItem>
// // //                       ))}
// // //                     </TextField>
// // //                   </Grid>

// // //                   {/* Status */}
// // //                   <Grid item xs={12} md={4}>
// // //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// // //                       Status
// // //                     </Typography>
// // //                     <TextField
// // //                       select
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="Select status"
// // //                       value={status}
// // //                       onChange={(e) => setStatus(e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     >
// // //                       {statuses.map((s) => (
// // //                         <MenuItem key={s} value={s}>{s}</MenuItem>
// // //                       ))}
// // //                     </TextField>
// // //                   </Grid>

// // //                   {/* User Raiser */}
// // //                   <Grid item xs={12} md={4}>
// // //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// // //                       User Raiser
// // //                     </Typography>
// // //                     <TextField
// // //                       select
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="Select user"
// // //                       value={userRaiser}
// // //                       onChange={(e) => setUserRaiser(e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     >
// // //                       {userRaisers.map((user) => (
// // //                         <MenuItem key={user} value={user}>{user}</MenuItem>
// // //                       ))}
// // //                     </TextField>
// // //                   </Grid>

// // //                   {/* Project */}
// // //                   <Grid item xs={12} md={4}>
// // //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// // //                       Project
// // //                     </Typography>
// // //                     <TextField
// // //                       select
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="Select project"
// // //                       value={project}
// // //                       onChange={(e) => setProject(e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     >
// // //                       {projects.map((p) => (
// // //                         <MenuItem key={p} value={p}>{p}</MenuItem>
// // //                       ))}
// // //                     </TextField>
// // //                   </Grid>

// // //                   {/* Department */}
// // //                   <Grid item xs={12} md={4}>
// // //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// // //                       Department
// // //                     </Typography>
// // //                     <TextField
// // //                       select
// // //                       fullWidth
// // //                       size="small"
// // //                       placeholder="Select Department"
// // //                       value={department}
// // //                       onChange={(e) => setDepartment(e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     >
// // //                       {departments.map((d) => (
// // //                         <MenuItem key={d} value={d}>{d}</MenuItem>
// // //                       ))}
// // //                     </TextField>
// // //                   </Grid>

// // //                   {/* Remarks */}
// // //                   <Grid item xs={12}>
// // //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// // //                       Remarks
// // //                     </Typography>
// // //                     <TextField
// // //                       fullWidth
// // //                       multiline
// // //                       rows={3}
// // //                       placeholder="Add remarks"
// // //                       value={remarks}
// // //                       onChange={(e) => setRemarks(e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     />
// // //                   </Grid>
// // //                 </Grid>
// // //               </Box>

// // //               {/* Upload Document Section */}
// // //               <Box sx={{ mb: 4 }}>
// // //                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2.5, color: '#1A1A1A' }}>
// // //                   Upload document
// // //                 </Typography>

// // //                 <Box sx={{ 
// // //                   border: '2px dashed #E5E7EB', 
// // //                   borderRadius: 2, 
// // //                   p: 4,
// // //                   textAlign: 'center',
// // //                   bgcolor: '#FAFAFA',
// // //                   mb: 2
// // //                 }}>
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
// // //                       startIcon={<UploadIcon />}
// // //                       sx={{
// // //                         textTransform: 'none',
// // //                         color: '#6B7280',
// // //                         fontWeight: 500
// // //                       }}
// // //                     >
// // //                       Click to upload
// // //                     </Button>
// // //                   </label>
// // //                   <Typography variant="caption" sx={{ display: 'block', mt: 1, color: '#9CA3AF' }}>
// // //                     or drag and drop files here
// // //                   </Typography>
// // //                 </Box>

// // //                 {/* Uploaded Files */}
// // //                 {uploadedFiles.length > 0 && (
// // //                   <Box>
// // //                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
// // //                       <Typography variant="body2" sx={{ color: '#6B7280' }}>
// // //                         {uploadedFiles.length} file(s) selected
// // //                       </Typography>
// // //                       <Box sx={{ display: 'flex', gap: 1 }}>
// // //                         <Button
// // //                           size="small"
// // //                           onClick={handleDeleteAll}
// // //                           sx={{ textTransform: 'none', color: '#6B7280', fontSize: '0.875rem' }}
// // //                         >
// // //                           Delete All
// // //                         </Button>
// // //                         <Button
// // //                           size="small"
// // //                           variant="contained"
// // //                           onClick={handleUploadAll}
// // //                           sx={{ 
// // //                             textTransform: 'none', 
// // //                             bgcolor: '#FF6B35',
// // //                             fontSize: '0.875rem',
// // //                             '&:hover': { bgcolor: '#FF5722' }
// // //                           }}
// // //                         >
// // //                           Upload All
// // //                         </Button>
// // //                       </Box>
// // //                     </Box>
// // //                     <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// // //                       {uploadedFiles.map((file, index) => (
// // //                         <Box
// // //                           key={index}
// // //                           sx={{
// // //                             position: 'relative',
// // //                             width: 100,
// // //                             height: 100,
// // //                             border: '1px solid #E5E7EB',
// // //                             borderRadius: 2,
// // //                             p: 1,
// // //                             display: 'flex',
// // //                             flexDirection: 'column',
// // //                             alignItems: 'center',
// // //                             justifyContent: 'center',
// // //                             bgcolor: 'white'
// // //                           }}
// // //                         >
// // //                           <UploadIcon sx={{ fontSize: 32, color: '#FF6B35', mb: 1 }} />
// // //                           <Typography variant="caption" sx={{ textAlign: 'center', wordBreak: 'break-all', fontSize: '0.7rem' }}>
// // //                             {file.name}
// // //                           </Typography>
// // //                           <IconButton
// // //                             size="small"
// // //                             onClick={() => handleFileDelete(index)}
// // //                             sx={{
// // //                               position: 'absolute',
// // //                               top: -8,
// // //                               right: -8,
// // //                               bgcolor: 'white',
// // //                               boxShadow: 1,
// // //                               '&:hover': { bgcolor: '#FEE2E2' }
// // //                             }}
// // //                           >
// // //                             <DeleteIcon sx={{ fontSize: 16, color: '#EF5350' }} />
// // //                           </IconButton>
// // //                         </Box>
// // //                       ))}
// // //                     </Box>
// // //                   </Box>
// // //                 )}
// // //               </Box>

// // //               {/* Request Lines Table */}
// // //               <Box sx={{ mb: 4 }}>
// // //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
// // //                   <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1A1A1A' }}>
// // //                     Request Lines
// // //                   </Typography>
// // //                   <Button
// // //                     variant="contained"
// // //                     size="small"
// // //                     sx={{
// // //                       textTransform: 'none',
// // //                       bgcolor: '#FF6B35',
// // //                       fontSize: '0.875rem',
// // //                       '&:hover': { bgcolor: '#FF5722' }
// // //                     }}
// // //                   >
// // //                     + Add Line
// // //                   </Button>
// // //                 </Box>

// // //                 <TableContainer sx={{ border: '1px solid #E5E7EB', borderRadius: 2 }}>
// // //                   <Table>
// // //                     <TableHead sx={{ bgcolor: '#F9FAFB' }}>
// // //                       <TableRow>
// // //                         {expenseCategories.map((category, index) => (
// // //                           <TableCell 
// // //                             key={index}
// // //                             sx={{ 
// // //                               fontWeight: 600, 
// // //                               color: '#6B7280', 
// // //                               fontSize: '0.75rem',
// // //                               py: 1.5,
// // //                               whiteSpace: 'nowrap'
// // //                             }}
// // //                           >
// // //                             {category}
// // //                           </TableCell>
// // //                         ))}
// // //                       </TableRow>
// // //                     </TableHead>
// // //                     <TableBody>
// // //                       <TableRow>
// // //                         <TableCell colSpan={9} sx={{ textAlign: 'center', py: 6, color: '#9CA3AF' }}>
// // //                           <Typography variant="body2">
// // //                             No request lines added yet. Click "+ Add Line" to add a new line.
// // //                           </Typography>
// // //                         </TableCell>
// // //                       </TableRow>
// // //                     </TableBody>
// // //                   </Table>
// // //                 </TableContainer>
// // //               </Box>

// // //               {/* Approval Remarks */}
// // //               <Box sx={{ mb: 4 }}>
// // //                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#1A1A1A' }}>
// // //                   Approval remarks
// // //                 </Typography>
// // //                 <TextField
// // //                   fullWidth
// // //                   multiline
// // //                   rows={3}
// // //                   placeholder="Add remarks"
// // //                   value={approvalRemarks}
// // //                   onChange={(e) => setApprovalRemarks(e.target.value)}
// // //                   sx={{ bgcolor: 'white' }}
// // //                 />
// // //               </Box>

// // //               {/* Action Buttons */}
// // //               <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
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
// // //                       bgcolor: '#F9FAFB'
// // //                     }
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
// // //                       bgcolor: '#FF5722'
// // //                     }
// // //                   }}
// // //                 >
// // //                   Submit
// // //                 </Button>
// // //               </Box>
// // //             </Paper>
// // //           </Box>
// // //         </Box>
// // //       </Box>
// // //     </Box>
// // //   )
// // // }
// // 'use client'

// // import React, { useState } from 'react'
// // import {
// //   Box,
// //   Paper,
// //   Typography,
// //   TextField,
// //   MenuItem,
// //   Button,
// //   Grid,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   IconButton,
// //   Breadcrumbs,
// //   Link,
// // } from '@mui/material'
// // import {
// //   CloudUpload as UploadIcon,
// //   Delete as DeleteIcon,
// //   NavigateNext as NavigateNextIcon,
// //   Close as CloseIcon,
// // } from '@mui/icons-material'
// // import Sidebar from '../main/Sidebar'
// // import Header from '../main/Header'
// // const userRequesters = ['John Doe', 'Jane Smith', 'Mike Johnson']
// // const userRaisers = ['Admin User', 'HR Manager', 'Finance Head']
// // const statuses = ['Draft', 'Pending', 'Approved']
// // const projects = ['Project Alpha', 'Project Beta', 'Project Gamma']
// // const departments = ['Finance', 'HR', 'Marketing', 'Software']

// // interface RequestLine {
// //   id: number
// //   srNo: string
// //   deductionCode: string
// //   deductionName: string
// //   glAccount: string
// //   accountName: string
// //   amountRequested: string
// //   amountApproved: string
// //   amountUsed: string
// //   supplierNo: string
// // }

// // export default function ImprestDetailsPage() {
// //   const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
// //   const [requestLines, setRequestLines] = useState<RequestLine[]>([])
// //     const [selectedMenu, setSelectedMenu] = useState('Imprest')

// //   // Form states
// //   const [imprestNumber, setImprestNumber] = useState('')
// //   const [userRequester, setUserRequester] = useState('')
// //   const [status, setStatus] = useState('')
// //   const [userRaiser, setUserRaiser] = useState('')
// //   const [project, setProject] = useState('')
// //   const [department, setDepartment] = useState('')
// //   const [remarks, setRemarks] = useState('')
// //   const [approvalRemarks, setApprovalRemarks] = useState('')

// //   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const files = event.target.files
// //     if (files) {
// //       setUploadedFiles([...uploadedFiles, ...Array.from(files)])
// //     }
// //   }

// //   const handleFileDelete = (index: number) => {
// //     setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
// //   }

// //   const handleSubmit = () => {
// //     console.log('Form submitted')
// //   }

// //   const handleCancel = () => {
// //     console.log('Form cancelled')
// //   }

// //   const handleDeleteAll = () => {
// //     setUploadedFiles([])
// //   }

// //   const handleAddLine = () => {
// //     const newLine: RequestLine = {
// //       id: requestLines.length + 1,
// //       srNo: (requestLines.length + 1).toString(),
// //       deductionCode: '',
// //       deductionName: '',
// //       glAccount: '',
// //       accountName: '',
// //       amountRequested: '',
// //       amountApproved: '',
// //       amountUsed: '',
// //       supplierNo: ''
// //     }
// //     setRequestLines([...requestLines, newLine])
// //   }

// //   const handleDeleteLine = (id: number) => {
// //     setRequestLines(requestLines.filter(line => line.id !== id))
// //   }

// //   const updateLineValue = (id: number, field: keyof RequestLine, value: string) => {
// //     setRequestLines(requestLines.map(line => 
// //       line.id === id ? { ...line, [field]: value } : line
// //     ))
// //   }

// //   return (
// //     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
// //          <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

// //       {/* Main Content */}
// //       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
// //          {/* <Header /> */}
// //         {/* Page Content - Scrollable */}
// //         <Box sx={{ 
// //           flexGrow: 1, 
// //           overflow: 'auto',
// //           '&::-webkit-scrollbar': {
// //             width: '8px',
// //           },
// //           '&::-webkit-scrollbar-track': {
// //             background: '#f1f1f1',
// //           },
// //           '&::-webkit-scrollbar-thumb': {
// //             background: '#888',
// //             borderRadius: '4px',
// //           },
// //           '&::-webkit-scrollbar-thumb:hover': {
// //             background: '#555',
// //           },
// //         }}>
// //           <Box sx={{ p: 3, maxWidth: 1400, mx: 'auto' }}>
// //             {/* Breadcrumbs */}
// //             <Breadcrumbs 
// //               separator={<NavigateNextIcon fontSize="small" />}
// //               sx={{ mb: 2 }}
// //             >
// //               <Link 
// //                 underline="hover" 
// //                 color="inherit" 
// //                 href="/imprest"
// //                 sx={{ fontSize: '0.875rem', color: '#6B7280' }}
// //               >
// //                 Imprest
// //               </Link>
// //               <Link 
// //                 underline="hover" 
// //                 color="inherit" 
// //                 href="/imprest"
// //                 sx={{ fontSize: '0.875rem', color: '#6B7280' }}
// //               >
// //                 New Request
// //               </Link>
// //               {/* <Typography sx={{ fontSize: '0.875rem', color: '#1A1A1A', fontWeight: 500 }}>
// //                 Imprest Details
// //               </Typography> */}
// //             </Breadcrumbs>

// //             <Paper elevation={0} sx={{ p: 4, borderRadius: 2, bgcolor: 'white' }}>
// //               {/* Title */}
// //               <Typography variant="h5" sx={{ fontWeight: 600, mb: 4 }}>
// //                 Imprest Details
// //               </Typography>

// //               {/* Add Information Section */}
// //               <Box sx={{ mb: 4 }}>
// //                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#1A1A1A' }}>
// //                   Add Information
// //                 </Typography>
// //                 <Typography variant="caption" sx={{ color: '#9CA3AF', display: 'block', mb: 3 }}>
// //                   Start adding information
// //                 </Typography>

// //                 <Grid container spacing={2.5}>
// //                   {/* Imprest Number */}
// //                   <Grid item xs={12} md={4}>
// //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// //                       Imprest Number
// //                     </Typography>
// //                     <TextField
// //                       fullWidth
// //                       size="small"
// //                       placeholder="Add number"
// //                       value={imprestNumber}
// //                       onChange={(e) => setImprestNumber(e.target.value)}
// //                       sx={{ 
// //                         bgcolor: '#F9FAFB',
// //                         '& .MuiOutlinedInput-root': {
// //                           '& fieldset': { borderColor: '#E5E7EB' }
// //                         }
// //                       }}
// //                     />
// //                   </Grid>

// //                   {/* User Requester */}
// //                   <Grid item xs={12} md={4}>
// //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// //                       User Requester
// //                     </Typography>
// //                     <TextField
// //                       select
// //                       fullWidth
// //                       size="small"
// //                       placeholder="Add user"
// //                       value={userRequester}
// //                       onChange={(e) => setUserRequester(e.target.value)}
// //                       sx={{ 
// //                         bgcolor: '#F9FAFB',
// //                         '& .MuiOutlinedInput-root': {
// //                           '& fieldset': { borderColor: '#E5E7EB' }
// //                         }
// //                       }}
// //                     >
// //                       {userRequesters.map((user) => (
// //                         <MenuItem key={user} value={user}>{user}</MenuItem>
// //                       ))}
// //                     </TextField>
// //                   </Grid>

// //                   {/* Status */}
// //                   <Grid item xs={12} md={4}>
// //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// //                       Status
// //                     </Typography>
// //                     <TextField
// //                       select
// //                       fullWidth
// //                       size="small"
// //                       placeholder="Select status"
// //                       value={status}
// //                       onChange={(e) => setStatus(e.target.value)}
// //                       sx={{ 
// //                         bgcolor: '#F9FAFB',
// //                         '& .MuiOutlinedInput-root': {
// //                           '& fieldset': { borderColor: '#E5E7EB' }
// //                         }
// //                       }}
// //                     >
// //                       {statuses.map((s) => (
// //                         <MenuItem key={s} value={s}>{s}</MenuItem>
// //                       ))}
// //                     </TextField>
// //                   </Grid>

// //                   {/* User Raiser */}
// //                   <Grid item xs={12} md={4}>
// //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// //                       User Raiser
// //                     </Typography>
// //                     <TextField
// //                       select
// //                       fullWidth
// //                       size="small"
// //                       placeholder="Request user"
// //                       value={userRaiser}
// //                       onChange={(e) => setUserRaiser(e.target.value)}
// //                       sx={{ 
// //                         bgcolor: '#F9FAFB',
// //                         '& .MuiOutlinedInput-root': {
// //                           '& fieldset': { borderColor: '#E5E7EB' }
// //                         }
// //                       }}
// //                     >
// //                       {userRaisers.map((user) => (
// //                         <MenuItem key={user} value={user}>{user}</MenuItem>
// //                       ))}
// //                     </TextField>
// //                   </Grid>

// //                   {/* User Entered */}
// //                   <Grid item xs={12} md={4}>
// //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// //                       User Entered
// //                     </Typography>
// //                     <TextField
// //                       fullWidth
// //                       size="small"
// //                       placeholder="Add user"
// //                       sx={{ 
// //                         bgcolor: '#F9FAFB',
// //                         '& .MuiOutlinedInput-root': {
// //                           '& fieldset': { borderColor: '#E5E7EB' }
// //                         }
// //                       }}
// //                     />
// //                   </Grid>

// //                   {/* Project */}
// //                   <Grid item xs={12} md={4}>
// //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// //                       Project
// //                     </Typography>
// //                     <TextField
// //                       select
// //                       fullWidth
// //                       size="small"
// //                       placeholder="Select project"
// //                       value={project}
// //                       onChange={(e) => setProject(e.target.value)}
// //                       sx={{ 
// //                         bgcolor: '#F9FAFB',
// //                         '& .MuiOutlinedInput-root': {
// //                           '& fieldset': { borderColor: '#E5E7EB' }
// //                         }
// //                       }}
// //                     >
// //                       {projects.map((p) => (
// //                         <MenuItem key={p} value={p}>{p}</MenuItem>
// //                       ))}
// //                     </TextField>
// //                   </Grid>

// //                   {/* Department */}
// //                   <Grid item xs={12} md={4}>
// //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// //                       Department
// //                     </Typography>
// //                     <TextField
// //                       select
// //                       fullWidth
// //                       size="small"
// //                       placeholder="Select Department"
// //                       value={department}
// //                       onChange={(e) => setDepartment(e.target.value)}
// //                       sx={{ 
// //                         bgcolor: '#F9FAFB',
// //                         '& .MuiOutlinedInput-root': {
// //                           '& fieldset': { borderColor: '#E5E7EB' }
// //                         }
// //                       }}
// //                     >
// //                       {departments.map((d) => (
// //                         <MenuItem key={d} value={d}>{d}</MenuItem>
// //                       ))}
// //                     </TextField>
// //                   </Grid>

// //                   {/* Remarks */}
// //                   <Grid item xs={12}>
// //                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
// //                       Remarks
// //                     </Typography>
// //                     <TextField
// //                       fullWidth
// //                       multiline
// //                       rows={3}
// //                       placeholder="Add remarks"
// //                       value={remarks}
// //                       onChange={(e) => setRemarks(e.target.value)}
// //                       sx={{ 
// //                         bgcolor: '#F9FAFB',
// //                         '& .MuiOutlinedInput-root': {
// //                           '& fieldset': { borderColor: '#E5E7EB' }
// //                         }
// //                       }}
// //                     />
// //                   </Grid>
// //                 </Grid>
// //               </Box>

// //               {/* Upload Document Section */}
// //               <Box sx={{ mb: 4 }}>
// //                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2.5, color: '#1A1A1A' }}>
// //                   Upload document
// //                 </Typography>

// //                 {uploadedFiles.length === 0 ? (
// //                   <Box sx={{ 
// //                     border: '2px dashed #E5E7EB', 
// //                     borderRadius: 2, 
// //                     p: 4,
// //                     textAlign: 'center',
// //                     bgcolor: '#FAFAFA',
// //                   }}>
// //                     <input
// //                       accept="*/*"
// //                       style={{ display: 'none' }}
// //                       id="file-upload"
// //                       type="file"
// //                       multiple
// //                       onChange={handleFileUpload}
// //                     />
// //                     <label htmlFor="file-upload">
// //                       <Button
// //                         component="span"
// //                         sx={{
// //                           textTransform: 'none',
// //                           color: '#6B7280',
// //                           fontWeight: 500
// //                         }}
// //                       >
// //                         <UploadIcon sx={{ mr: 1 }} />
// //                         Click to upload
// //                       </Button>
// //                     </label>
// //                   </Box>
// //                 ) : (
// //                   <Box>
// //                     <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
// //                       {uploadedFiles.map((file, index) => (
// //                         <Box
// //                           key={index}
// //                           sx={{
// //                             position: 'relative',
// //                             width: 120,
// //                             height: 120,
// //                             border: '1px solid #E5E7EB',
// //                             borderRadius: 2,
// //                             p: 2,
// //                             display: 'flex',
// //                             flexDirection: 'column',
// //                             alignItems: 'center',
// //                             justifyContent: 'center',
// //                             bgcolor: 'white'
// //                           }}
// //                         >
// //                           <UploadIcon sx={{ fontSize: 40, color: '#FF6B35', mb: 1 }} />
// //                           <Typography variant="caption" sx={{ textAlign: 'center', wordBreak: 'break-all', fontSize: '0.7rem', color: '#6B7280' }}>
// //                             {file.name.length > 15 ? file.name.substring(0, 12) + '...' : file.name}
// //                           </Typography>
// //                           <IconButton
// //                             size="small"
// //                             onClick={() => handleFileDelete(index)}
// //                             sx={{
// //                               position: 'absolute',
// //                               top: 4,
// //                               right: 4,
// //                               bgcolor: 'white',
// //                               boxShadow: 1,
// //                               width: 20,
// //                               height: 20,
// //                               '&:hover': { bgcolor: '#FEE2E2' }
// //                             }}
// //                           >
// //                             <CloseIcon sx={{ fontSize: 14, color: '#6B7280' }} />
// //                           </IconButton>
// //                         </Box>
// //                       ))}
// //                     </Box>
// //                     <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
// //                       <Button
// //                         size="small"
// //                         onClick={handleDeleteAll}
// //                         sx={{ 
// //                           textTransform: 'none', 
// //                           color: '#6B7280', 
// //                           fontSize: '0.875rem',
// //                           border: '1px solid #E5E7EB',
// //                           px: 2
// //                         }}
// //                       >
// //                         Delete All
// //                       </Button>
// //                       <Button
// //                         size="small"
// //                         variant="contained"
// //                         sx={{ 
// //                           textTransform: 'none', 
// //                           bgcolor: '#FF6B35',
// //                           fontSize: '0.875rem',
// //                           px: 3,
// //                           '&:hover': { bgcolor: '#FF5722' }
// //                         }}
// //                       >
// //                         Upload
// //                       </Button>
// //                     </Box>
// //                   </Box>
// //                 )}
// //               </Box>

// //               {/* Request Lines Table */}
// //               <Box sx={{ mb: 4 }}>
// //                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
// //                   <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1A1A1A' }}>
// //                     Request Lines
// //                   </Typography>
// //                 </Box>

// //                 <TableContainer sx={{ border: '1px solid #E5E7EB', borderRadius: 2, overflow: 'auto' }}>
// //                   <Table sx={{ minWidth: 1200 }}>
// //                     <TableHead sx={{ bgcolor: '#F9FAFB' }}>
// //                       <TableRow>
// //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 60 }}>
// //                           Sr. No.
// //                         </TableCell>
// //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 120 }}>
// //                           Detor Code
// //                         </TableCell>
// //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 150 }}>
// //                           Detor Name
// //                         </TableCell>
// //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 100 }}>
// //                           GL account
// //                         </TableCell>
// //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 150 }}>
// //                           Account Name
// //                         </TableCell>
// //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 130 }}>
// //                           Amount requested
// //                         </TableCell>
// //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 130 }}>
// //                           Amount approved
// //                         </TableCell>
// //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 120 }}>
// //                           Amount Used
// //                         </TableCell>
// //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 110 }}>
// //                           Supp.PO No.
// //                         </TableCell>
// //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 80 }}>

// //                         </TableCell>
// //                       </TableRow>
// //                     </TableHead>
// //                     <TableBody>
// //                       {requestLines.length === 0 ? (
// //                         <TableRow>
// //                           <TableCell colSpan={10} sx={{ textAlign: 'center', py: 8 }}>
// //                             <Typography variant="body2" sx={{ color: '#9CA3AF', mb: 2 }}>
// //                               No request lines added yet
// //                             </Typography>
// //                             <Button
// //                               variant="contained"
// //                               size="small"
// //                               onClick={handleAddLine}
// //                               sx={{
// //                                 textTransform: 'none',
// //                                 bgcolor: '#FF6B35',
// //                                 fontSize: '0.875rem',
// //                                 '&:hover': { bgcolor: '#FF5722' }
// //                               }}
// //                             >
// //                               + Add Line
// //                             </Button>
// //                           </TableCell>
// //                         </TableRow>
// //                       ) : (
// //                         <>
// //                           {requestLines.map((line) => (
// //                             <TableRow key={line.id}>
// //                               <TableCell sx={{ py: 1 }}>
// //                                 <TextField
// //                                   size="small"
// //                                   value={line.srNo}
// //                                   disabled
// //                                   sx={{ 
// //                                     width: '100%',
// //                                     '& .MuiOutlinedInput-root': {
// //                                       bgcolor: '#F9FAFB',
// //                                       '& fieldset': { borderColor: '#E5E7EB' }
// //                                     }
// //                                   }}
// //                                 />
// //                               </TableCell>
// //                               <TableCell sx={{ py: 1 }}>
// //                                 <TextField
// //                                   size="small"
// //                                   placeholder="-"
// //                                   value={line.deductionCode}
// //                                   onChange={(e) => updateLineValue(line.id, 'deductionCode', e.target.value)}
// //                                   sx={{ 
// //                                     width: '100%',
// //                                     '& .MuiOutlinedInput-root': {
// //                                       '& fieldset': { borderColor: '#E5E7EB' }
// //                                     }
// //                                   }}
// //                                 />
// //                               </TableCell>
// //                               <TableCell sx={{ py: 1 }}>
// //                                 <TextField
// //                                   size="small"
// //                                   placeholder="-"
// //                                   value={line.deductionName}
// //                                   onChange={(e) => updateLineValue(line.id, 'deductionName', e.target.value)}
// //                                   sx={{ 
// //                                     width: '100%',
// //                                     '& .MuiOutlinedInput-root': {
// //                                       '& fieldset': { borderColor: '#E5E7EB' }
// //                                     }
// //                                   }}
// //                                 />
// //                               </TableCell>
// //                               <TableCell sx={{ py: 1 }}>
// //                                 <TextField
// //                                   size="small"
// //                                   placeholder="-"
// //                                   value={line.glAccount}
// //                                   onChange={(e) => updateLineValue(line.id, 'glAccount', e.target.value)}
// //                                   sx={{ 
// //                                     width: '100%',
// //                                     '& .MuiOutlinedInput-root': {
// //                                       '& fieldset': { borderColor: '#E5E7EB' }
// //                                     }
// //                                   }}
// //                                 />
// //                               </TableCell>
// //                               <TableCell sx={{ py: 1 }}>
// //                                 <TextField
// //                                   size="small"
// //                                   placeholder="-"
// //                                   value={line.accountName}
// //                                   onChange={(e) => updateLineValue(line.id, 'accountName', e.target.value)}
// //                                   sx={{ 
// //                                     width: '100%',
// //                                     '& .MuiOutlinedInput-root': {
// //                                       '& fieldset': { borderColor: '#E5E7EB' }
// //                                     }
// //                                   }}
// //                                 />
// //                               </TableCell>
// //                               <TableCell sx={{ py: 1 }}>
// //                                 <TextField
// //                                   size="small"
// //                                   placeholder="-"
// //                                   value={line.amountRequested}
// //                                   onChange={(e) => updateLineValue(line.id, 'amountRequested', e.target.value)}
// //                                   sx={{ 
// //                                     width: '100%',
// //                                     '& .MuiOutlinedInput-root': {
// //                                       '& fieldset': { borderColor: '#E5E7EB' }
// //                                     }
// //                                   }}
// //                                 />
// //                               </TableCell>
// //                               <TableCell sx={{ py: 1 }}>
// //                                 <TextField
// //                                   size="small"
// //                                   placeholder="-"
// //                                   value={line.amountApproved}
// //                                   onChange={(e) => updateLineValue(line.id, 'amountApproved', e.target.value)}
// //                                   sx={{ 
// //                                     width: '100%',
// //                                     '& .MuiOutlinedInput-root': {
// //                                       '& fieldset': { borderColor: '#E5E7EB' }
// //                                     }
// //                                   }}
// //                                 />
// //                               </TableCell>
// //                               <TableCell sx={{ py: 1 }}>
// //                                 <TextField
// //                                   size="small"
// //                                   placeholder="-"
// //                                   value={line.amountUsed}
// //                                   onChange={(e) => updateLineValue(line.id, 'amountUsed', e.target.value)}
// //                                   sx={{ 
// //                                     width: '100%',
// //                                     '& .MuiOutlinedInput-root': {
// //                                       '& fieldset': { borderColor: '#E5E7EB' }
// //                                     }
// //                                   }}
// //                                 />
// //                               </TableCell>
// //                               <TableCell sx={{ py: 1 }}>
// //                                 <TextField
// //                                   size="small"
// //                                   placeholder="-"
// //                                   value={line.supplierNo}
// //                                   onChange={(e) => updateLineValue(line.id, 'supplierNo', e.target.value)}
// //                                   sx={{ 
// //                                     width: '100%',
// //                                     '& .MuiOutlinedInput-root': {
// //                                       '& fieldset': { borderColor: '#E5E7EB' }
// //                                     }
// //                                   }}
// //                                 />
// //                               </TableCell>
// //                               <TableCell sx={{ py: 1, textAlign: 'center' }}>
// //                                 <IconButton
// //                                   size="small"
// //                                   onClick={() => handleDeleteLine(line.id)}
// //                                   sx={{ color: '#EF4444' }}
// //                                 >
// //                                   <DeleteIcon fontSize="small" />
// //                                 </IconButton>
// //                               </TableCell>
// //                             </TableRow>
// //                           ))}
// //                           <TableRow>
// //                             <TableCell colSpan={10} sx={{ py: 2, textAlign: 'right', borderTop: '1px solid #E5E7EB' }}>
// //                               <Button
// //                                 variant="contained"
// //                                 size="small"
// //                                 onClick={handleAddLine}
// //                                 sx={{
// //                                   textTransform: 'none',
// //                                   bgcolor: '#FF6B35',
// //                                   fontSize: '0.875rem',
// //                                   '&:hover': { bgcolor: '#FF5722' }
// //                                 }}
// //                               >
// //                                 Add More
// //                               </Button>
// //                             </TableCell>
// //                           </TableRow>
// //                         </>
// //                       )}
// //                     </TableBody>
// //                   </Table>
// //                 </TableContainer>
// //               </Box>

// //               {/* Approval Remarks */}
// //               <Box sx={{ mb: 4 }}>
// //                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#1A1A1A' }}>
// //                   Approval remarks
// //                 </Typography>
// //                 <TextField
// //                   fullWidth
// //                   multiline
// //                   rows={3}
// //                   placeholder="Add remarks"
// //                   value={approvalRemarks}
// //                   onChange={(e) => setApprovalRemarks(e.target.value)}
// //                   sx={{ 
// //                     bgcolor: '#F9FAFB',
// //                     '& .MuiOutlinedInput-root': {
// //                       '& fieldset': { borderColor: '#E5E7EB' }
// //                     }
// //                   }}
// //                 />
// //               </Box>

// //               {/* Action Buttons */}
// //               <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
// //                 <Button
// //                   variant="outlined"
// //                   onClick={handleCancel}
// //                   sx={{
// //                     textTransform: 'none',
// //                     color: '#6B7280',
// //                     borderColor: '#E5E7EB',
// //                     px: 4,
// //                     '&:hover': {
// //                       borderColor: '#D1D5DB',
// //                       bgcolor: '#F9FAFB'
// //                     }
// //                   }}
// //                 >
// //                   Cancel
// //                 </Button>
// //                 <Button
// //                   variant="contained"
// //                   onClick={handleSubmit}
// //                   sx={{
// //                     textTransform: 'none',
// //                     bgcolor: '#FF6B35',
// //                     px: 4,
// //                     '&:hover': {
// //                       bgcolor: '#FF5722'
// //                     }
// //                   }}
// //                 >
// //                   Submit
// //                 </Button>
// //               </Box>
// //             </Paper>
// //           </Box>
// //         </Box>
// //       </Box>
// //     </Box>
// //   )
// // }


// 'use client'

// import React, { useState, useEffect } from 'react'
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   MenuItem,
//   Button,
//   Grid,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   IconButton,
//   Breadcrumbs,
//   Link,
//   CircularProgress,
//   Alert,
//   Snackbar,
// } from '@mui/material'
// import {
//   CloudUpload as UploadIcon,
//   Delete as DeleteIcon,
//   NavigateNext as NavigateNextIcon,
//   Close as CloseIcon,
// } from '@mui/icons-material'
// import Sidebar from '../main/Sidebar'
// import Header from '../main/Header'
// import axios from 'axios'

// // API Configuration
// const API_BASE_URL = 'http://localhost:8000/api/v1' // Change this to your backend URL

// interface RequestLine {
//   breakdown_id?: number
//   debtor_code?: number
//   debtor_name?: string
//   description: string
//   gl_account: string
//   account_name: string
//   estimated_amount: string
//   approved_amount?: string
//   spent_amount?: string
//   supplier_no: string
// }

// interface User {
//   id: number
//   username: string
//   first_name: string
//   last_name: string
//   email: string
// }

// interface Department {
//   id: number
//   name: string
// }

// interface Project {
//   id: number
//   project_name: string
//   project_code: string
// }
// interface Client {
//   DCLink: number
//   Name: string
// }

// interface Account {
//   id: number
//   Master_Sub_Account: string
//   AccountName: string
// }

// export default function ImprestDetailsPage() {
//   const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
//   const [requestLines, setRequestLines] = useState<RequestLine[]>([])
//   const [selectedMenu, setSelectedMenu] = useState('Imprest')
//   const [loading, setLoading] = useState(false)
//   const [submitLoading, setSubmitLoading] = useState(false)

//   // Alert states
//   const [alert, setAlert] = useState<{
//     open: boolean
//     message: string
//     severity: 'success' | 'error' | 'info' | 'warning'
//   }>({
//     open: false,
//     message: '',
//     severity: 'success'
//   })

//   // Dropdown data
//   const [users, setUsers] = useState<User[]>([])
//   const [departments, setDepartments] = useState<Department[]>([])
//   const [projects, setProjects] = useState<Project[]>([])
//   const [clients, setClients] = useState<Client[]>([])
//   const [account, setAccouts] = useState<Account[]>([])


//   // Form states
//   const [imprestNumber, setImprestNumber] = useState('')
//   const [userRequester, setUserRequester] = useState<number | ''>('')
//   const [userRaiser, setUserRaiser] = useState<number | ''>('')
//   const [userEntered, setUserEntered] = useState<number | ''>('')
//   const [project, setProject] = useState<number | ''>('')
//   const [department, setDepartment] = useState<number | ''>('')
//   const [purpose, setPurpose] = useState('')
//   const [approvalRemarks, setApprovalRemarks] = useState('')

//   // Fetch dropdown data on mount
//   useEffect(() => {
//     fetchUsers()
//     fetchDepartments()
//     fetchProjects()
//     fetchClients()
//     fetchAccounts()
//   }, [])

//   // const fetchUsers = async () => {
//   //   try {
//   //     const response = await axios.get(`${API_BASE_URL}/users/`)
//   //     setUsers(response.data)
//   //   } catch (error) {
//   //     console.error('Error fetching users:', error)
//   //     showAlert('Failed to fetch users', 'error')
//   //   }
//   // }
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/users/management//`)
//       setUsers(response.data)
//     } catch (error) {
//       console.error("Error fetching users:", error)

//       // Dummy fallback
//       setUsers([
//         { id: 1, name: "Rahul Kumar", email: "rahul@test.com" },
//         { id: 2, name: "Amit Singh", email: "amit@test.com" },
//         { id: 3, name: "Neha Sharma", email: "neha@test.com" },
//       ])

//       showAlert("Using dummy users (API failed)", "warning")
//     }
//   }


//   // const fetchDepartments = async () => {
//   //   try {
//   //     const response = await axios.get(`${API_BASE_URL}/departments/`)
//   //     setDepartments(response.data)
//   //   } catch (error) {
//   //     console.error('Error fetching departments:', error)
//   //     showAlert('Failed to fetch departments', 'error')
//   //   }
//   // }
//   const fetchDepartments = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/departments/`)
//       setDepartments(response.data)
//     } catch (error) {
//       console.error("Error fetching departments:", error)

//       // Dummy fallback
//       setDepartments([
//         { id: 1, name: "Finance" },
//         { id: 2, name: "HR" },
//         { id: 3, name: "IT" },
//         { id: 4, name: "Operations" },
//       ])

//       showAlert("Using dummy departments (API failed)", "warning")
//     }
//   }
//   const fetchClients = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/client/clients-list/`)
//       console.log(response, "responseresponse");

//       setClients(response.data)
//     } catch (error) {
//       console.error("Error fetching departments:", error)

//       // Dummy fallback
//       setDepartments([
//         { id: 1, name: "Finance" },
//         { id: 2, name: "HR" },
//         { id: 3, name: "IT" },
//         { id: 4, name: "Operations" },
//       ])

//       showAlert("Using dummy departments (API failed)", "warning")
//     }
//   }


//   // const fetchProjects = async () => {
//   //   try {
//   //     const response = await axios.get(`${API_BASE_URL}/projects/`)
//   //     setProjects(response.data)
//   //   } catch (error) {
//   //     console.error('Error fetching projects:', error)
//   //     showAlert('Failed to fetch projects', 'error')
//   //   }
//   // }
//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/project/projects-list/`)
//       setProjects(response.data)
//     } catch (error) {
//       console.error("Error fetching projects:", error)

//       // Dummy fallback
//       setProjects([
//         { id: 1, name: "ERP Upgrade" },
//         { id: 2, name: "Mobile App" },
//         { id: 3, name: "Website Revamp" },
//       ])

//       showAlert("Using dummy projects (API failed)", "warning")
//     }
//   }

//   const fetchAccounts = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/account/accounts-list/`)
//       setAccouts(response.data)
//     } catch (error) {
//       console.error("Error fetching projects:", error)

//       // Dummy fallback
//       setProjects([
//         { id: 1, name: "ERP Upgrade" },
//         { id: 2, name: "Mobile App" },
//         { id: 3, name: "Website Revamp" },
//       ])

//       showAlert("Using dummy projects (API failed)", "warning")
//     }
//   }


//   const showAlert = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
//     setAlert({ open: true, message, severity })
//   }

//   const handleCloseAlert = () => {
//     setAlert({ ...alert, open: false })
//   }

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files
//     if (files) {
//       setUploadedFiles([...uploadedFiles, ...Array.from(files)])
//     }
//   }

//   const handleFileDelete = (index: number) => {
//     setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
//   }

//   const handleDeleteAll = () => {
//     setUploadedFiles([])
//   }

//   const handleAddLine = () => {
//     const newLine: RequestLine = {
//       debtor_code: undefined,
//       debtor_name: '',
//       description: '',
//       gl_account: '',
//       account_name: '',
//       estimated_amount: '',
//       supplier_no: ''
//     }
//     setRequestLines([...requestLines, newLine])
//   }

//   const handleDeleteLine = (index: number) => {
//     setRequestLines(requestLines.filter((_, i) => i !== index))
//   }

//   // const updateLineValue = (index: number, field: keyof RequestLine, value: string) => {
//   //   setRequestLines(requestLines.map((line, i) =>
//   //     i === index ? { ...line, [field]: value } : line
//   //   ))
//   // }
//   const updateLineValue = (
//     index: number,
//     field: keyof RequestLine,
//     value: string | number
//   ) => {
//     setRequestLines((prev) =>
//       prev.map((line, i) =>
//         i === index ? { ...line, [field]: value } : line
//       )
//     )
//   }


//   const validateForm = () => {
//     if (!userRequester) {
//       showAlert('Please select User Requester', 'error')
//       return false
//     }
//     if (!department) {
//       showAlert('Please select Department', 'error')
//       return false
//     }
//     if (!project) {
//       showAlert('Please select Project', 'error')
//       return false
//     }
//     if (!purpose.trim()) {
//       showAlert('Please enter Purpose/Remarks', 'error')
//       return false
//     }
//     if (requestLines.length === 0) {
//       showAlert('Please add at least one request line', 'error')
//       return false
//     }

//     // Validate request lines
//     for (let i = 0; i < requestLines.length; i++) {
//       const line = requestLines[i]
//       if (!line.debtor_code) {
//         showAlert(`Please select Client for line ${i + 1}`, 'error')
//         return false
//       }
//       if (!line.debtor_name) {
//         showAlert(`Please select Client for line ${i + 1}`, 'error')
//         return false
//       }
//       if (!line.description.trim()) {
//         showAlert(`Please enter Description for line ${i + 1}`, 'error')
//         return false
//       }
//       if (!line.estimated_amount || parseFloat(line.estimated_amount) <= 0) {
//         showAlert(`Please enter valid Amount for line ${i + 1}`, 'error')
//         return false
//       }
//     }

//     return true
//   }

//   const handleSubmit = async () => {
//     if (!validateForm()) return

//     setSubmitLoading(true)

//     try {
//       // Create imprest request
//       const imprestData = {
//         user_requested: userRequester,
//         department: department,
//         project: project,
//         purpose: purpose,
//         request_lines: requestLines.map(line => ({
//           debtor_code: line.debtor_code,
//           debtor_name: line.debtor_name,
//           description: line.description,
//           gl_account: line.gl_account || null,
//           account_name: line.account_name || null,
//           estimated_amount: parseFloat(line.estimated_amount),
//           supplier_no: line.supplier_no || null
//         }))
//       }

//       const response = await axios.post(
//         `${API_BASE_URL}/imprest-requests/`,
//         imprestData,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             // Add authorization header if needed
//             // 'Authorization': `Bearer ${token}`
//           }
//         }
//       )

//       const createdImprest = response.data
//       showAlert('Imprest request created successfully!', 'success')

//       // Upload attachments if any
//       if (uploadedFiles.length > 0) {
//         await uploadAttachments(createdImprest.imprest_id)
//       }

//       // Reset form after successful submission
//       setTimeout(() => {
//         resetForm()
//         // Navigate to list page or detail page
//         // window.location.href = '/imprest'
//       }, 2000)

//     } catch (error: any) {
//       console.error('Error creating imprest request:', error)
//       const errorMessage = error.response?.data?.detail ||
//         error.response?.data?.message ||
//         'Failed to create imprest request'
//       showAlert(errorMessage, 'error')
//     } finally {
//       setSubmitLoading(false)
//     }
//   }

//   const uploadAttachments = async (imprestId: number) => {
//     try {
//       const formData = new FormData()
//       uploadedFiles.forEach(file => {
//         formData.append('files', file)
//       })
//       formData.append('attachment_type', 'Support')

//       await axios.post(
//         `${API_BASE_URL}/imprest-requests/${imprestId}/upload-multiple-attachments/`,
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//             // Add authorization header if needed
//           }
//         }
//       )
//       showAlert('Attachments uploaded successfully!', 'success')
//     } catch (error) {
//       console.error('Error uploading attachments:', error)
//       showAlert('Failed to upload some attachments', 'warning')
//     }
//   }

//   const resetForm = () => {
//     setImprestNumber('')
//     setUserRequester('')
//     setUserRaiser('')
//     setUserEntered('')
//     setProject('')
//     setDepartment('')
//     setPurpose('')
//     setApprovalRemarks('')
//     setRequestLines([])
//     setUploadedFiles([])
//   }

//   const handleCancel = () => {
//     if (window.confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
//       resetForm()
//       // Navigate back
//       // window.location.href = '/imprest'
//     }
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       {/* Main Content */}
//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
//         {/* Page Content - Scrollable */}
//         <Box sx={{
//           flexGrow: 1,
//           overflow: 'auto',
//           '&::-webkit-scrollbar': {
//             width: '8px',
//           },
//           '&::-webkit-scrollbar-track': {
//             background: '#f1f1f1',
//           },
//           '&::-webkit-scrollbar-thumb': {
//             background: '#888',
//             borderRadius: '4px',
//           },
//           '&::-webkit-scrollbar-thumb:hover': {
//             background: '#555',
//           },
//         }}>
//           <Box sx={{ p: 3, maxWidth: 1400, mx: 'auto' }}>
//             {/* Breadcrumbs */}
//             <Breadcrumbs
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
//               <Link
//                 underline="hover"
//                 color="inherit"
//                 href="/imprest/new"
//                 sx={{ fontSize: '0.875rem', color: '#6B7280' }}
//               >
//                 New Request
//               </Link>
//             </Breadcrumbs>

//             <Paper elevation={0} sx={{ p: 4, borderRadius: 2, bgcolor: 'white' }}>
//               {/* Title */}
//               <Typography variant="h5" sx={{ fontWeight: 600, mb: 4 }}>
//                 Create New Imprest Request
//               </Typography>

//               {/* Add Information Section */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#1A1A1A' }}>
//                   Add Information
//                 </Typography>
//                 <Typography variant="caption" sx={{ color: '#9CA3AF', display: 'block', mb: 3 }}>
//                   Fill in the required information below
//                 </Typography>

//                 <Grid container spacing={2.5}>
//                   {/* Imprest Number - Auto-generated */}
//                   <Grid item xs={12} md={4}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
//                       Imprest Number
//                     </Typography>
//                     <TextField
//                       fullWidth
//                       size="small"
//                       placeholder="Auto-generated"
//                       value={imprestNumber}
//                       disabled
//                       sx={{
//                         bgcolor: '#F9FAFB',
//                         '& .MuiOutlinedInput-root': {
//                           '& fieldset': { borderColor: '#E5E7EB' }
//                         }
//                       }}
//                     />
//                   </Grid>

//                   {/* User Requester */}
//                   <Grid item xs={12} md={4}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
//                       User Requester *
//                     </Typography>
//                     <TextField
//                       select
//                       fullWidth
//                       size="small"
//                       placeholder="Select user"
//                       value={userRequester}
//                       onChange={(e) => setUserRequester(Number(e.target.value))}
//                       sx={{
//                         bgcolor: '#F9FAFB',
//                         '& .MuiOutlinedInput-root': {
//                           '& fieldset': { borderColor: '#E5E7EB' }
//                         }
//                       }}
//                     >
//                       {users.map((user) => (
//                         <MenuItem key={user.id} value={user.id}>
//                           {user.name}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>

//                   {/* User Raiser */}
//                   <Grid item xs={12} md={4}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
//                       User Raiser
//                     </Typography>
//                     <TextField
//                       select
//                       fullWidth
//                       size="small"
//                       placeholder="Select user"
//                       value={userRaiser}
//                       onChange={(e) => setUserRaiser(Number(e.target.value))}
//                       sx={{
//                         bgcolor: '#F9FAFB',
//                         '& .MuiOutlinedInput-root': {
//                           '& fieldset': { borderColor: '#E5E7EB' }
//                         }
//                       }}
//                     >
//                       {users.map((user) => (
//                         <MenuItem key={user.id} value={user.id}>
//                           {user.first_name} {user.last_name}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>

//                   {/* User Entered - Auto-filled from logged-in user */}
//                   <Grid item xs={12} md={4}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
//                       User Entered
//                     </Typography>
//                     <TextField
//                       fullWidth
//                       size="small"
//                       placeholder="Auto-filled"
//                       disabled
//                       sx={{
//                         bgcolor: '#F9FAFB',
//                         '& .MuiOutlinedInput-root': {
//                           '& fieldset': { borderColor: '#E5E7EB' }
//                         }
//                       }}
//                     />
//                   </Grid>

//                   {/* Project */}
//                   <Grid item xs={12} md={4}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
//                       Project *
//                     </Typography>
//                     <TextField
//                       select
//                       fullWidth
//                       size="small"
//                       placeholder="Select project"
//                       value={project}
//                       onChange={(e) => setProject(Number(e.target.value))}
//                       sx={{
//                         bgcolor: '#F9FAFB',
//                         '& .MuiOutlinedInput-root': {
//                           '& fieldset': { borderColor: '#E5E7EB' }
//                         }
//                       }}
//                     >
//                       {projects.map((p) => (
//                         <MenuItem key={p.ProjectLink} value={p.ProjectLink}>
//                           {p.ProjectName}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>

//                   {/* Department */}
//                   <Grid item xs={12} md={4}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
//                       Department *
//                     </Typography>
//                     <TextField
//                       select
//                       fullWidth
//                       size="small"
//                       placeholder="Select Department"
//                       value={department}
//                       onChange={(e) => setDepartment(Number(e.target.value))}
//                       sx={{
//                         bgcolor: '#F9FAFB',
//                         '& .MuiOutlinedInput-root': {
//                           '& fieldset': { borderColor: '#E5E7EB' }
//                         }
//                       }}
//                     >
//                       {departments.map((d) => (
//                         <MenuItem key={d.id} value={d.id}>
//                           {d.name}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>

//                   {/* Purpose/Remarks */}
//                   <Grid item xs={12}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
//                       Purpose *
//                     </Typography>
//                     <TextField
//                       fullWidth
//                       multiline
//                       rows={3}
//                       placeholder="Enter purpose of the imprest request"
//                       value={purpose}
//                       onChange={(e) => setPurpose(e.target.value)}
//                       sx={{
//                         bgcolor: '#F9FAFB',
//                         '& .MuiOutlinedInput-root': {
//                           '& fieldset': { borderColor: '#E5E7EB' }
//                         }
//                       }}
//                     />
//                   </Grid>
//                 </Grid>
//               </Box>

//               {/* Upload Document Section */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2.5, color: '#1A1A1A' }}>
//                   Upload Supporting Documents
//                 </Typography>

//                 {uploadedFiles.length === 0 ? (
//                   <Box sx={{
//                     border: '2px dashed #E5E7EB',
//                     borderRadius: 2,
//                     p: 4,
//                     textAlign: 'center',
//                     bgcolor: '#FAFAFA',
//                   }}>
//                     <input
//                       accept="*/*"
//                       style={{ display: 'none' }}
//                       id="file-upload"
//                       type="file"
//                       multiple
//                       onChange={handleFileUpload}
//                     />
//                     <label htmlFor="file-upload">
//                       <Button
//                         component="span"
//                         sx={{
//                           textTransform: 'none',
//                           color: '#6B7280',
//                           fontWeight: 500
//                         }}
//                       >
//                         <UploadIcon sx={{ mr: 1 }} />
//                         Click to upload documents
//                       </Button>
//                     </label>
//                     <Typography variant="caption" sx={{ display: 'block', mt: 1, color: '#9CA3AF' }}>
//                       PDF, DOC, DOCX, JPG, PNG (Max 10MB per file)
//                     </Typography>
//                   </Box>
//                 ) : (
//                   <Box>
//                     <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
//                       {uploadedFiles.map((file, index) => (
//                         <Box
//                           key={index}
//                           sx={{
//                             position: 'relative',
//                             width: 120,
//                             height: 120,
//                             border: '1px solid #E5E7EB',
//                             borderRadius: 2,
//                             p: 2,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             bgcolor: 'white'
//                           }}
//                         >
//                           <UploadIcon sx={{ fontSize: 40, color: '#FF6B35', mb: 1 }} />
//                           <Typography variant="caption" sx={{ textAlign: 'center', wordBreak: 'break-all', fontSize: '0.7rem', color: '#6B7280' }}>
//                             {file.name.length > 15 ? file.name.substring(0, 12) + '...' : file.name}
//                           </Typography>
//                           <Typography variant="caption" sx={{ fontSize: '0.65rem', color: '#9CA3AF', mt: 0.5 }}>
//                             {(file.size / 1024).toFixed(2)} KB
//                           </Typography>
//                           <IconButton
//                             size="small"
//                             onClick={() => handleFileDelete(index)}
//                             sx={{
//                               position: 'absolute',
//                               top: 4,
//                               right: 4,
//                               bgcolor: 'white',
//                               boxShadow: 1,
//                               width: 20,
//                               height: 20,
//                               '&:hover': { bgcolor: '#FEE2E2' }
//                             }}
//                           >
//                             <CloseIcon sx={{ fontSize: 14, color: '#6B7280' }} />
//                           </IconButton>
//                         </Box>
//                       ))}
//                     </Box>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                       <Typography variant="caption" sx={{ color: '#6B7280' }}>
//                         {uploadedFiles.length} file(s) ready to upload
//                       </Typography>
//                       <Button
//                         size="small"
//                         onClick={handleDeleteAll}
//                         sx={{
//                           textTransform: 'none',
//                           color: '#6B7280',
//                           fontSize: '0.875rem',
//                           border: '1px solid #E5E7EB',
//                           px: 2
//                         }}
//                       >
//                         Delete All
//                       </Button>
//                     </Box>
//                   </Box>
//                 )}
//               </Box>

//               {/* Request Lines Table */}
//               <Box sx={{ mb: 4 }}>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//                   <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1A1A1A' }}>
//                     Request Lines *
//                   </Typography>
//                 </Box>

//                 <TableContainer sx={{ border: '1px solid #E5E7EB', borderRadius: 2, overflow: 'auto' }}>
//                   <Table sx={{ minWidth: 1200 }}>
//                     <TableHead sx={{ bgcolor: '#F9FAFB' }}>
//                       <TableRow>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 60 }}>
//                           Sr. No.
//                         </TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 120 }}>
//                           Detor Code *
//                         </TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 120 }}>
//                           Detor Name *
//                         </TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 150 }}>
//                           Description *
//                         </TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 100 }}>
//                           GL Account
//                         </TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 150 }}>
//                           Account Name
//                         </TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 130 }}>
//                           Amount Requested *
//                         </TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 110 }}>
//                           Supplier No.
//                         </TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 80 }}>
//                           Action
//                         </TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {requestLines.length === 0 ? (
//                         <TableRow>
//                           <TableCell colSpan={8} sx={{ textAlign: 'center', py: 8 }}>
//                             <Typography variant="body2" sx={{ color: '#9CA3AF', mb: 2 }}>
//                               No request lines added yet
//                             </Typography>
//                             <Button
//                               variant="contained"
//                               size="small"
//                               onClick={handleAddLine}
//                               sx={{
//                                 textTransform: 'none',
//                                 bgcolor: '#FF6B35',
//                                 fontSize: '0.875rem',
//                                 '&:hover': { bgcolor: '#FF5722' }
//                               }}
//                             >
//                               + Add Line
//                             </Button>
//                           </TableCell>
//                         </TableRow>
//                       ) : (
//                         <>
//                           {requestLines.map((line, index) => (
//                             <TableRow key={index}>
//                               <TableCell sx={{ py: 1 }}>
//                                 <TextField
//                                   size="small"
//                                   value={index + 1}
//                                   disabled
//                                   sx={{
//                                     width: '100%',
//                                     '& .MuiOutlinedInput-root': {
//                                       bgcolor: '#F9FAFB',
//                                       '& fieldset': { borderColor: '#E5E7EB' }
//                                     }
//                                   }}
//                                 />
//                               </TableCell>
//                               <TableCell sx={{ py: 1 }}>
//                                 <TextField
//                                   select
//                                   size="small"
//                                   value={line.debtor_code ?? ""}
//                                   onChange={(e) => {
//                                     const val = Number(e.target.value)

//                                     const selected = clients.find(
//                                       (c) => c.DCLink === val
//                                     )

//                                     updateLineValue(index, "debtor_code", val)
//                                     updateLineValue(index, "debtor_name", selected?.Name || "")
//                                   }}
//                                   sx={{ width: "100%" }}
//                                 >
//                                   {clients.map((c) => (
//                                     <MenuItem key={c.DCLink} value={c.DCLink}>
//                                       {c.DCLink}
//                                     </MenuItem>
//                                   ))}
//                                 </TextField>
//                               </TableCell>
//                               <TableCell sx={{ py: 1 }}>
//                                 <TextField
//                                   size="small"
//                                   value={line.debtor_name || ""}
//                                   disabled
//                                   sx={{ width: "100%" }}
//                                 />
//                               </TableCell>

//                               <TableCell sx={{ py: 1 }}>
//                                 <TextField
//                                   size="small"
//                                   placeholder="Description"
//                                   value={line.description}
//                                   onChange={(e) => updateLineValue(index, 'description', e.target.value)}
//                                   sx={{
//                                     width: '100%',
//                                     '& .MuiOutlinedInput-root': {
//                                       '& fieldset': { borderColor: '#E5E7EB' }
//                                     }
//                                   }}
//                                 />
//                               </TableCell>
//                               <TextField
//                                 select
//                                 size="small"
//                                 value={line.gl_account}
//                                onChange={(e) => {
//   const val = e.target.value

//   const acc = account.find(
//     (a) => a.Master_Sub_Account === val
//   )

//   updateLineValue(index, "gl_account", val)
//   updateLineValue(
//     index,
//     "account_name",
//     acc?.AccountName || ""
//   )
// }}

//                                 sx={{ width: "100%" }}
//                               >
//                                 {account.map((a) => (
//                                   <MenuItem
//                                     key={a.id}
//                                     value={a.Master_Sub_Account}
//                                   >
//                                     {a.Master_Sub_Account}
//                                   </MenuItem>
//                                 ))}
//                               </TextField>

//                               <TextField
//                                 size="small"
//                                 value={line.account_name}
//                                 disabled
//                                 sx={{ width: "100%" }}
//                               />

//                               <TableCell sx={{ py: 1 }}>
//                                 <TextField
//                                   size="small"
//                                   type="number"
//                                   placeholder="0.00"
//                                   value={line.estimated_amount}
//                                   onChange={(e) => updateLineValue(index, 'estimated_amount', e.target.value)}
//                                   sx={{
//                                     width: '100%',
//                                     '& .MuiOutlinedInput-root': {
//                                       '& fieldset': { borderColor: '#E5E7EB' }
//                                     }
//                                   }}
//                                 />
//                               </TableCell>
//                               <TableCell sx={{ py: 1 }}>
//                                 <TextField
//                                   size="small"
//                                   placeholder="Supplier no."
//                                   value={line.supplier_no}
//                                   onChange={(e) => updateLineValue(index, 'supplier_no', e.target.value)}
//                                   sx={{
//                                     width: '100%',
//                                     '& .MuiOutlinedInput-root': {
//                                       '& fieldset': { borderColor: '#E5E7EB' }
//                                     }
//                                   }}
//                                 />
//                               </TableCell>
//                               <TableCell sx={{ py: 1, textAlign: 'center' }}>
//                                 <IconButton
//                                   size="small"
//                                   onClick={() => handleDeleteLine(index)}
//                                   sx={{ color: '#EF4444' }}
//                                 >
//                                   <DeleteIcon fontSize="small" />
//                                 </IconButton>
//                               </TableCell>
//                             </TableRow>
//                           ))}
//                           <TableRow>
//                             <TableCell colSpan={8} sx={{ py: 2, textAlign: 'right', borderTop: '1px solid #E5E7EB' }}>
//                               <Button
//                                 variant="contained"
//                                 size="small"
//                                 onClick={handleAddLine}
//                                 sx={{
//                                   textTransform: 'none',
//                                   bgcolor: '#FF6B35',
//                                   fontSize: '0.875rem',
//                                   '&:hover': { bgcolor: '#FF5722' }
//                                 }}
//                               >
//                                 Add More Lines
//                               </Button>
//                             </TableCell>
//                           </TableRow>
//                         </>
//                       )}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               </Box>

//               {/* Total Amount Display */}
//               {requestLines.length > 0 && (
//                 <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-end' }}>
//                   <Paper elevation={1} sx={{ p: 2, minWidth: 300 }}>
//                     <Typography variant="subtitle2" sx={{ color: '#6B7280', mb: 1 }}>
//                       Total Estimated Amount
//                     </Typography>
//                     <Typography variant="h5" sx={{ color: '#FF6B35', fontWeight: 600 }}>
//                       KES {requestLines.reduce((sum, line) => sum + (parseFloat(line.estimated_amount) || 0), 0).toFixed(2)}
//                     </Typography>
//                   </Paper>
//                 </Box>
//               )}

//               {/* Action Buttons */}
//               <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
//                 <Button
//                   variant="outlined"
//                   onClick={handleCancel}
//                   disabled={submitLoading}
//                   sx={{
//                     textTransform: 'none',
//                     color: '#6B7280',
//                     borderColor: '#E5E7EB',
//                     px: 4,
//                     '&:hover': {
//                       borderColor: '#D1D5DB',
//                       bgcolor: '#F9FAFB'
//                     }
//                   }}
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   variant="contained"
//                   onClick={handleSubmit}
//                   disabled={submitLoading}
//                   sx={{
//                     textTransform: 'none',
//                     bgcolor: '#FF6B35',
//                     px: 4,
//                     '&:hover': {
//                       bgcolor: '#FF5722'
//                     }
//                   }}
//                 >
//                   {submitLoading ? (
//                     <>
//                       <CircularProgress size={20} sx={{ color: 'white', mr: 1 }} />
//                       Submitting...
//                     </>
//                   ) : (
//                     'Create Request'
//                   )}
//                 </Button>
//               </Box>
//             </Paper>
//           </Box>
//         </Box>
//       </Box>

//       {/* Alert Snackbar */}
//       <Snackbar
//         open={alert.open}
//         autoHideDuration={6000}
//         onClose={handleCloseAlert}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       >
//         <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
//           {alert.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   )
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
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Breadcrumbs,
  Link,
  CircularProgress,
  Alert,
  Snackbar,
  Autocomplete,
} from '@mui/material'
import {
  CloudUpload as UploadIcon,
  Delete as DeleteIcon,
  NavigateNext as NavigateNextIcon,
  Close as CloseIcon,
} from '@mui/icons-material'
import Sidebar from '../main/Sidebar'
import Header from '../main/Header'
import axios from 'axios'

// API Configuration
const API_BASE_URL = 'http://localhost:8000/api/v1' // Change this to your backend URL

interface RequestLine {
  breakdown_id?: number
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
  user_name?: string
  name?: string
  first_name?: string
  last_name?: string
  email?: string
}

interface Department {
  department_id: number
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

export default function ImprestDetailsPage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [requestLines, setRequestLines] = useState<RequestLine[]>([])
  const [selectedMenu, setSelectedMenu] = useState('Imprest')
  const [loading, setLoading] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)
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

      /* FULL TEXT SHOW */
      whiteSpace: 'nowrap',
      overflow: 'visible',
      textOverflow: 'unset',
    },
  }

const fixedSelectStyle = {
  backgroundColor: '#F9FAFB',
  borderRadius: '10px',

  '& .MuiOutlinedInput-root': {
    height: 42,
    borderRadius: '10px',
    fontSize: '14px',
  },

  '& .MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  '& input': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '14px',
  },

  '& fieldset': {
    borderColor: '#E5E7EB',
  },

  '&:hover fieldset': {
    borderColor: '#CBD5E1',
  },

  '&.Mui-focused fieldset': {
    borderColor: '#2563EB',
    borderWidth: 1.5,
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
  const [account, setAccounts] = useState<Account[]>([])
const [status, setStatus] = useState('Draft')

  // Form states
  const [imprestNumber, setImprestNumber] = useState('')
  const [userRequester, setUserRequester] = useState<number | ''>('')
  const [userRaiser, setUserRaiser] = useState<number | ''>('')
  const [userEntered, setUserEntered] = useState<number | ''>('')
  const [project, setProject] = useState<number | ''>('')
  const [department, setDepartment] = useState<number | ''>('')
  const [purpose, setPurpose] = useState('')
  const [approvalRemarks, setApprovalRemarks] = useState('')

  // Fetch dropdown data on mount
  useEffect(() => {
    fetchUsers()
    fetchDepartments()
    fetchProjects()
    fetchClients()
    fetchAccounts()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/users/`)
      setUsers(response.data)
    } catch (error) {
      console.error("Error fetching users:", error)
      // Dummy fallback
      setUsers([
        { id: 1, name: "Rahul Kumar", first_name: "Rahul", last_name: "Kumar", email: "rahul@test.com" },
        { id: 2, name: "Amit Singh", first_name: "Amit", last_name: "Singh", email: "amit@test.com" },
        { id: 3, name: "Neha Sharma", first_name: "Neha", last_name: "Sharma", email: "neha@test.com" },
      ])
      showAlert("Using dummy users (API failed)", "warning")
    }
  }

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/department/departments/`)
      setDepartments(response.data)
    } catch (error) {
      console.error("Error fetching departments:", error)
      // Dummy fallback
      setDepartments([
        { id: 1, department_name: "Finance" },
        { id: 2, department_name: "HR" },
        { id: 3, department_name: "IT" },
        { id: 4, department_name: "Operations" },
      ])
      showAlert("Using dummy departments (API failed)", "warning")
    }
  }

  const fetchClients = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/client/clients-list/`)
      console.log(response, "responseresponse")
      setClients(response.data)
    } catch (error) {
      console.error("Error fetching clients:", error)
      // Dummy fallback
      setClients([
        { DCLink: 1001, Name: "Client A" },
        { DCLink: 1002, Name: "Client B" },
        { DCLink: 1003, Name: "Client C" },
      ])
      showAlert("Using dummy clients (API failed)", "warning")
    }
  }

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/project/projects-list/`)
      setProjects(response.data)
    } catch (error) {
      console.error("Error fetching projects:", error)
      // Dummy fallback
      setProjects([
        { id: 1, ProjectLink: 101, ProjectName: "ERP Upgrade", name: "ERP Upgrade" },
        { id: 2, ProjectLink: 102, ProjectName: "Mobile App", name: "Mobile App" },
        { id: 3, ProjectLink: 103, ProjectName: "Website Revamp", name: "Website Revamp" },
      ])
      showAlert("Using dummy projects (API failed)", "warning")
    }
  }

  const fetchAccounts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/account/accounts-list/`)
      setAccounts(response.data)
    } catch (error) {
      console.error("Error fetching accounts:", error)
      // Dummy fallback
      setAccounts([
        { Master_Sub_Account: "1000-100", Description: "Cash Account" },
        { Master_Sub_Account: "2000-200", Description: "Operating Expenses" },
        { Master_Sub_Account: "3000-300", Description: "Travel Expenses" },
      ])
      showAlert("Using dummy accounts (API failed)", "warning")
    }
  }

  const showAlert = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
    setAlert({ open: true, message, severity })
  }

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false })
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      setUploadedFiles([...uploadedFiles, ...Array.from(files)])
    }
  }

  const handleFileDelete = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
  }

  const handleDeleteAll = () => {
    setUploadedFiles([])
  }

  const handleAddLine = () => {
    const newLine: RequestLine = {
      debtor_code: undefined,
      debtor_name: '',
      description: '',
      gl_account: '',
      account_name: '',
      estimated_amount: '',
      supplier_no: ''
    }
    setRequestLines([...requestLines, newLine])
  }

  const handleDeleteLine = (index: number) => {
    setRequestLines(requestLines.filter((_, i) => i !== index))
  }
  const handleImportLines = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = (e) => {
      const text = e.target?.result as string

      const rows = text.split('\n').slice(1)

      const imported: RequestLine[] = rows
        .map((row) => {
          const cols = row.split(',')

          if (cols.length < 4) return null

          return {
            debtor_code: Number(cols[0]),
            debtor_name: cols[1],
            description: cols[2],
            gl_account: cols[3],
            account_name: cols[4] || '',
            estimated_amount: cols[5] || '',
            supplier_no: cols[6] || '',
          }
        })
        .filter(Boolean) as RequestLine[]

      setRequestLines((prev) => [...prev, ...imported])
      showAlert('File imported successfully', 'success')
    }

    reader.readAsText(file)
  }

  const updateLineValue = (
    index: number,
    field: keyof RequestLine,
    value: string | number
  ) => {
    setRequestLines((prev) =>
      prev.map((line, i) =>
        i === index ? { ...line, [field]: value } : line
      )
    )
  }


  const validateForm = () => {
    if (!userRequester) {
      showAlert('Please select User Requester', 'error')
      return false
    }
    if (!department) {
      showAlert('Please select Department', 'error')
      return false
    }
    if (!project) {
      showAlert('Please select Project', 'error')
      return false
    }
    if (!purpose.trim()) {
      showAlert('Please enter Purpose/Remarks', 'error')
      return false
    }
    if (requestLines.length === 0) {
      showAlert('Please add at least one request line', 'error')
      return false
    }

    // Validate request lines
    for (let i = 0; i < requestLines.length; i++) {
      const line = requestLines[i]
      if (!line.debtor_code) {
        showAlert(`Please select Client for line ${i + 1}`, 'error')
        return false
      }
      if (!line.description.trim()) {
        showAlert(`Please enter Description for line ${i + 1}`, 'error')
        return false
      }
      if (!line.estimated_amount || parseFloat(line.estimated_amount) <= 0) {
        showAlert(`Please enter valid Amount for line ${i + 1}`, 'error')
        return false
      }
    }

    return true
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setSubmitLoading(true)

    try {
      const imprestData = {
        user_requested: userRequester,
        user_entered: userEntered || userRequester || 1, // 👈 add
        created_by: userEntered || userRequester || 1,  // 👈 add
        department: department,
        project: project,
        status: status,
        purpose: purpose,
        request_lines: requestLines.map(line => ({
          imprest:1,
          debtor_code: line.debtor_code,
          debtor_name: line.debtor_name,
          description: line.description,
          gl_account: line.gl_account || null,
          expense_head: line.gl_account || null, // 👈 add (backend wants this)
          created_by:1,
          account_name: line.account_name || null,
          estimated_amount: parseFloat(line.estimated_amount),
          supplier_no: line.supplier_no || null
        }))
      }

      const response = await axios.post(
        `${API_BASE_URL}/imprest/`,
        imprestData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )

      const createdImprest = response.data
      showAlert('Imprest request created successfully!', 'success')

      // Upload attachments if any
      if (uploadedFiles.length > 0) {
        await uploadAttachments(createdImprest.imprest_id)
      }

      // Reset form after successful submission
      setTimeout(() => {
        resetForm()
      }, 2000)

    } catch (error: any) {
      console.error('Error creating imprest request:', error)
      const errorMessage = error.response?.data?.detail ||
        error.response?.data?.message ||
        'Failed to create imprest request'
      showAlert(errorMessage, 'error')
    } finally {
      setSubmitLoading(false)
    }
  }

const uploadAttachments = async (imprestId: number) => {
  try {
    const formData = new FormData()

    uploadedFiles.forEach(file => {
      formData.append('files', file)
    })

    formData.append('attachment_type', 'Support')

    await axios.post(
      `${API_BASE_URL}/imprest/${imprestId}/upload-multiple-attachments/`,
      formData
    )

    showAlert('Attachments uploaded successfully!', 'success')

  } catch (error) {
    console.error('Error uploading attachments:', error)
    showAlert('Failed to upload attachments', 'error')
  }
}


  const resetForm = () => {
    setImprestNumber('')
    setUserRequester('')
    setUserRaiser('')
    setUserEntered('')
    setProject('')
    setDepartment('')
    setPurpose('')
    setApprovalRemarks('')
    setRequestLines([])
    setUploadedFiles([])
  }

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All unsaved changes will be lost.')) {
      resetForm()
    }
  }

  // Helper function to get user display name
  const getUserDisplayName = (user: User) => {
    console.log(user,"useruser");
    
    if (user.user_name) return user.user_name
    if (user.first_name && user.last_name) return `${user.first_name} ${user.last_name}`
    if (user.first_name) return user.first_name
    return user.name || `User ${user.id}`
  }

  // Helper function to get project display info
  const getProjectId = (proj: Project) => {
    return proj.ProjectLink || proj.id || 0
  }

  const getProjectName = (proj: Project) => {
    return proj.ProjectName || proj.project_name || proj.name || `Project ${proj.id}`
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
      <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Page Content - Scrollable */}
        <Box sx={{
          flexGrow: 1,
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}>
          <Box sx={{ p: 3, maxWidth: 1400, mx: 'auto' }}>
            {/* Breadcrumbs */}
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              sx={{ mb: 2 }}
            >
              <Link
                underline="hover"
                color="inherit"
                href="/imprest"
                sx={{ fontSize: '0.875rem', color: '#6B7280' }}
              >
                Imprest
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/imprest/new"
                sx={{ fontSize: '0.875rem', color: '#6B7280' }}
              >
                New Request
              </Link>
            </Breadcrumbs>

            <Paper elevation={0} sx={{ p: 4, borderRadius: 2, bgcolor: 'white' }}>
              {/* Title */}
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 4 }}>
                Create New Imprest Request
              </Typography>

              {/* Add Information Section */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#1A1A1A' }}>
                  Add Information
                </Typography>
                <Typography variant="caption" sx={{ color: '#9CA3AF', display: 'block', mb: 3 }}>
                  Fill in the required information below
                </Typography>

                {/* <Grid container spacing={2.5}>
                  {/* Imprest Number - Auto-generated */}
                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
                      Imprest Number
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Auto-generated"
                      value={imprestNumber}
                      disabled
                      sx={{
                        bgcolor: '#F9FAFB',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#E5E7EB' }
                        }
                      }}
                    />
                  </Grid>

                  {/* User Requester */}
                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
                      User Requester *
                    </Typography>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      placeholder="Select user"
                      value={userRequester}
                      onChange={(e) => setUserRequester(Number(e.target.value))}
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

                  {/* User Raiser */}
                  {/* <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
                      User Raiser
                    </Typography>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      placeholder="Select user"
                      value={userRaiser}
                      onChange={(e) => setUserRaiser(Number(e.target.value))}
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
                  </Grid> */}

                  {/* User Entered - Auto-filled from logged-in user */}
                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
                      User Entered
                    </Typography>
                    <TextField
                      fullWidth
                      size="small"
                      placeholder="Auto-filled"
                      disabled
                      sx={{
                        bgcolor: '#F9FAFB',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#E5E7EB' }
                        }
                      }}
                    />
                  </Grid>

                  {/* Project */}
                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
                      Project *
                    </Typography>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      placeholder="Select project"
                      value={project}
                      onChange={(e) => setProject(Number(e.target.value))}
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

                  {/* Department */}
                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
                      Department *
                    </Typography>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      placeholder="Select Department"
                      value={department}
                      onChange={(e) => setDepartment(Number(e.target.value))}
                      sx={{
                        bgcolor: '#F9FAFB',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#E5E7EB' }
                        }
                      }}
                    >
                      {departments.map((d) => (
                        <MenuItem key={d.department_id} value={d.department_id}>
                          {d.department_name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
{/* Status */}
<Grid item xs={12} md={4}>
  <Typography
    variant="caption"
    sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}
  >
    Status *
  </Typography>

  <TextField
    select
    fullWidth
    size="small"
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    sx={{
      bgcolor: '#F9FAFB',
      '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: '#E5E7EB' },
      },
    }}
  >
    <MenuItem value="Draft">Draft</MenuItem>
    <MenuItem value="Pending_HOD">Pending HOD</MenuItem>
    <MenuItem value="Pending_FC">Pending FC</MenuItem>
    <MenuItem value="Pending_DG">Pending DG</MenuItem>
    <MenuItem value="Approved">Approved</MenuItem>
    <MenuItem value="Rejected">Rejected</MenuItem>
    <MenuItem value="Surrendered">Surrendered</MenuItem>
    <MenuItem value="Closed">Closed</MenuItem>
  </TextField>
</Grid>

                  {/* Purpose/Remarks */}
                  <Grid item xs={12}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 1, color: '#6B7280', fontWeight: 500 }}>
                      Purpose *
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      placeholder="Enter purpose of the imprest request"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      sx={{
                        bgcolor: '#F9FAFB',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: '#E5E7EB' }
                        }
                      }}
                    />
                  </Grid>
                {/* </Grid> */} 
                
              </Box>

              {/* Upload Document Section */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2.5, color: '#1A1A1A' }}>
                  Upload Supporting Documents
                </Typography>

                {uploadedFiles.length === 0 ? (
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
                    <Typography variant="caption" sx={{ display: 'block', mt: 1, color: '#9CA3AF' }}>
                      PDF, DOC, DOCX, JPG, PNG (Max 10MB per file)
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                      {uploadedFiles.map((file, index) => (
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
                        {uploadedFiles.length} file(s) ready to upload
                      </Typography>
                      <Button
                        size="small"
                        onClick={handleDeleteAll}
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

              {/* Request Lines Table */}
              <Box sx={{ mb: 4 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                    gap: 2,
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Request Lines *
                  </Typography>

                  <Box>
                    <input
                      type="file"
                      accept=".csv"
                      hidden
                      id="import-lines"
                      onChange={handleImportLines}
                    />

                    <label htmlFor="import-lines">
                      <Button
                        component="span"
                        variant="outlined"
                        size="small"
                        sx={{ textTransform: 'none' }}
                      >
                        Import CSV
                      </Button>
                    </label>
                  </Box>
                </Box>


                <TableContainer sx={{ border: '1px solid #E5E7EB', borderRadius: 2, overflow: 'auto' }}>
                  <Table sx={{ minWidth: 1200 }}>
                    <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 60 }}>
                          Sr. No.
                        </TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 120 }}>
                          Debtor Code *
                        </TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 120 }}>
                          Debtor Name *
                        </TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 150 }}>
                          Description *
                        </TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 100 }}>
                          GL Account
                        </TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 150 }}>
                          Account Name
                        </TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 130 }}>
                          Amount Requested *
                        </TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 110 }}>
                          Supplier No.
                        </TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5, minWidth: 80 }}>
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {requestLines.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={9} sx={{ textAlign: 'center', py: 8 }}>
                            <Typography variant="body2" sx={{ color: '#9CA3AF', mb: 2 }}>
                              No request lines added yet
                            </Typography>
                            <Button
                              variant="contained"
                              size="small"
                              onClick={handleAddLine}
                              sx={{
                                textTransform: 'none',
                                bgcolor: '#FF6B35',
                                fontSize: '0.875rem',
                                '&:hover': { bgcolor: '#FF5722' }
                              }}
                            >
                              + Add Line
                            </Button>
                          </TableCell>
                        </TableRow>
                      ) : (
                        <>
                          {requestLines.map((line, index) => (
                            <TableRow key={index}>

                              {/* Sr No */}
                              <TableCell>
                                {index + 1}
                              </TableCell>


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

                                  getOptionLabel={(o) => `${o.DCLink} `}

                                  value={
                                    clients.find(c => c.DCLink === line.debtor_code) || null
                                  }

                                  onChange={(e, val) => {
                                    updateLineValue(index, 'debtor_code', val?.DCLink || '')
                                    updateLineValue(index, 'debtor_name', val?.Name || '')
                                  }}

                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      placeholder="Search ID / Name"
                                      sx={fixedField}
                                    />
                                  )}
                                />

                              </TableCell>

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

                                  value={
                                    clients.find(c => c.DCLink === line.debtor_code) || null
                                  }

                                  onChange={(e, val) => {
                                    updateLineValue(index, 'debtor_code', val?.DCLink || '')
                                    updateLineValue(index, 'debtor_name', val?.Name || '')
                                  }}

                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      placeholder="Search Name"
                                      sx={tableFieldStyle}
                                    />
                                  )}
                                />

                              </TableCell>




                              {/* Description */}
                              <TableCell>
                                <TextField
                                  size="small"
                                  value={line.description}
                                  onChange={(e) =>
                                    updateLineValue(index, 'description', e.target.value)
                                  }
                                  sx={fixedField}
                                />
                              </TableCell>


                              <TableCell>

                                <Autocomplete
                                  size="small"
                                  fullWidth
                                  options={account}

                                  filterOptions={(options, state) => {
                                    const input = state.inputValue.toLowerCase()

                                    return options.filter(
                                      (o) =>
                                        o.Master_Sub_Account.toLowerCase().includes(input) ||
                                        o.Description.toLowerCase().includes(input)
                                    )
                                  }}

                                  getOptionLabel={(o) =>
                                    `${o.Master_Sub_Account}`
                                  }

                                  value={
                                    account.find(
                                      a => a.Master_Sub_Account === line.gl_account
                                    ) || null
                                  }

                                  onChange={(e, val) => {
                                    updateLineValue(
                                      index,
                                      'gl_account',
                                      val?.Master_Sub_Account || ''
                                    )

                                    updateLineValue(
                                      index,
                                      'account_name',
                                      val?.Description || ''
                                    )
                                  }}

                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      placeholder="Search GL / Name"
                                      sx={fixedField}
                                    />
                                  )}
                                />

                              </TableCell>


                              <TableCell>

                                <Autocomplete
                                  size="small"
                                  fullWidth
                                  options={account}

                                  filterOptions={(options, state) => {
                                    const input = state.inputValue.toLowerCase()

                                    return options.filter(
                                      (o) =>
                                        o.Description.toLowerCase().includes(input) ||
                                        o.Master_Sub_Account.toLowerCase().includes(input)
                                    )
                                  }}

                                  getOptionLabel={(o) => o.Description}

                                  value={
                                    account.find(
                                      a => a.Master_Sub_Account === line.gl_account
                                    ) || null
                                  }

                                  onChange={(e, val) => {
                                    updateLineValue(
                                      index,
                                      'gl_account',
                                      val?.Master_Sub_Account || ''
                                    )

                                    updateLineValue(
                                      index,
                                      'account_name',
                                      val?.Description || ''
                                    )
                                  }}

                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      placeholder="Search Account Name"
                                      sx={fixedField}
                                    />
                                  )}
                                />

                              </TableCell>


                              {/* Amount */}
                              <TableCell>
                                <TextField
                                  size="small"
                                  type="number"
                                  value={line.estimated_amount}
                                  onChange={(e) =>
                                    updateLineValue(index, 'estimated_amount', e.target.value)
                                  }
                                  sx={fixedField}
                                />
                              </TableCell>

                              {/* Supplier */}
                              <TableCell>
                                <TextField
                                  size="small"
                                  value={line.supplier_no}
                                  onChange={(e) =>
                                    updateLineValue(index, 'supplier_no', e.target.value)
                                  }
                                  sx={fixedField}
                                />
                              </TableCell>

                              {/* Delete */}
                              <TableCell align="center">
                                <IconButton
                                  size="small"
                                  onClick={() => handleDeleteLine(index)}
                                  color="error"
                                >
                                  <DeleteIcon fontSize="small" />
                                </IconButton>
                              </TableCell>

                            </TableRow>
                          ))}
                          <TableRow>
                            <TableCell colSpan={9} sx={{ py: 2, textAlign: 'right', borderTop: '1px solid #E5E7EB' }}>
                              <Button
                                variant="contained"
                                size="small"
                                onClick={handleAddLine}
                                sx={{
                                  textTransform: 'none',
                                  bgcolor: '#FF6B35',
                                  fontSize: '0.875rem',
                                  '&:hover': { bgcolor: '#FF5722' }
                                }}
                              >
                                Add More Lines
                              </Button>
                            </TableCell>
                          </TableRow>
                        </>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              {/* Total Amount Display */}
              {requestLines.length > 0 && (
                <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-end' }}>
                  <Paper elevation={1} sx={{ p: 2, minWidth: 300 }}>
                    <Typography variant="subtitle2" sx={{ color: '#6B7280', mb: 1 }}>
                      Total Estimated Amount
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#FF6B35', fontWeight: 600 }}>
                      KES {requestLines.reduce((sum, line) => sum + (parseFloat(line.estimated_amount) || 0), 0).toFixed(2)}
                    </Typography>
                  </Paper>
                </Box>
              )}

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                  variant="outlined"
                  onClick={handleCancel}
                  disabled={submitLoading}
                  sx={{
                    textTransform: 'none',
                    color: '#6B7280',
                    borderColor: '#E5E7EB',
                    px: 4,
                    '&:hover': {
                      borderColor: '#D1D5DB',
                      bgcolor: '#F9FAFB'
                    }
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={submitLoading}
                  sx={{
                    textTransform: 'none',
                    bgcolor: '#FF6B35',
                    px: 4,
                    '&:hover': {
                      bgcolor: '#FF5722'
                    }
                  }}
                >
                  {submitLoading ? (
                    <>
                      <CircularProgress size={20} sx={{ color: 'white', mr: 1 }} />
                      Submitting...
                    </>
                  ) : (
                    'Create Request'
                  )}
                </Button>
              </Box>
            </Paper>
          </Box>
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