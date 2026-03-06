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
//   Chip,
// } from '@mui/material'
// import {
//   NavigateNext as NavigateNextIcon,
//   CloudUpload as UploadIcon,
// } from '@mui/icons-material'
// import Sidebar from '../main/Sidebar'
// import Header from '../main/Header'
// import { useRouter } from 'next/navigation'

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

// export default function ViewImprestDetailsPage() {
//   const router = useRouter()
//   const [selectedMenu, setSelectedMenu] = useState('Imprest')
  
//   // Mock data - in real app, fetch based on ID
//   const [imprestNumber] = useState('IMP-2024-001')
//   const [userRequester] = useState('John Doe')
//   const [status] = useState('Verifying')
//   const [userRaiser] = useState('Admin User')
//   const [userEntered] = useState('HR Manager')
//   const [project] = useState('Project Alpha')
//   const [department] = useState('Finance')
//   const [remarks] = useState('This is a sample remark for the imprest request.')
//   const [approvalRemarks] = useState('Approved by department head.')
  
//   const [uploadedFiles] = useState([
//     { name: 'document1.pdf' },
//     { name: 'invoice.xlsx' },
//   ])
  
//   const [requestLines] = useState<RequestLine[]>([
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
//       supplierNo: 'SUP001'
//     },
//     {
//       id: 2,
//       srNo: '2',
//       deductionCode: 'DED002',
//       deductionName: 'Travel',
//       glAccount: 'GL002',
//       accountName: 'Travel Expenses',
//       amountRequested: '10000',
//       amountApproved: '9000',
//       amountUsed: '8500',
//       supplierNo: 'SUP002'
//     }
//   ])

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'Verifying': return '#FF6B35'
//       case 'Approved': return '#4CAF50'
//       case 'Rejected': return '#EF5350'
//       case 'Pending': return '#FFA726'
//       default: return '#9E9E9E'
//     }
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
//         <Header />
        
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
//                 onClick={() => router.push('/imprest')}
//                 sx={{ fontSize: '0.875rem', color: '#6B7280', cursor: 'pointer' }}
//               >
//                 Imprest
//               </Link>
//               <Typography sx={{ fontSize: '0.875rem', color: '#1A1A1A', fontWeight: 500 }}>
//                 View Details
//               </Typography>
//             </Breadcrumbs>

//             <Paper elevation={0} sx={{ p: 4, borderRadius: 2, bgcolor: 'white' }}>
//               {/* Header with Status and Edit Button */}
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
//                 <Box>
//                   <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
//                     Imprest Details
//                   </Typography>
//                   <Chip 
//                     label={status}
//                     sx={{ 
//                       bgcolor: getStatusColor(status),
//                       color: 'white',
//                       fontWeight: 500,
//                       fontSize: '0.75rem'
//                     }}
//                   />
//                 </Box>
//                 <Button
//                   variant="contained"
//                   onClick={() => router.push(`/imprest/edit/${imprestNumber}`)}
//                   sx={{
//                     textTransform: 'none',
//                     bgcolor: '#FF6B35',
//                     px: 4,
//                     '&:hover': {
//                       bgcolor: '#FF5722'
//                     }
//                   }}
//                 >
//                   Edit
//                 </Button>
//               </Box>

//               {/* Information Section */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 3, color: '#1A1A1A' }}>
//                   Information
//                 </Typography>

//                 <Grid container spacing={3}>
//                   <Grid item xs={12} md={4}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
//                       Imprest Number
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
//                       {imprestNumber}
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12} md={4}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
//                       User Requester
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
//                       {userRequester}
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12} md={4}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
//                       Status
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
//                       {status}
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12} md={4}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
//                       User Raiser
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
//                       {userRaiser}
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12} md={4}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
//                       User Entered
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
//                       {userEntered}
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12} md={4}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
//                       Project
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
//                       {project}
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12} md={4}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
//                       Department
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
//                       {department}
//                     </Typography>
//                   </Grid>

//                   <Grid item xs={12}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
//                       Remarks
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#1A1A1A' }}>
//                       {remarks}
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </Box>

//               {/* Uploaded Documents */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2.5, color: '#1A1A1A' }}>
//                   Uploaded Documents
//                 </Typography>

//                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                   {uploadedFiles.map((file, index) => (
//                     <Box
//                       key={index}
//                       sx={{
//                         width: 120,
//                         height: 120,
//                         border: '1px solid #E5E7EB',
//                         borderRadius: 2,
//                         p: 2,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         bgcolor: '#F9FAFB'
//                       }}
//                     >
//                       <UploadIcon sx={{ fontSize: 40, color: '#FF6B35', mb: 1 }} />
//                       <Typography variant="caption" sx={{ textAlign: 'center', wordBreak: 'break-all', fontSize: '0.7rem', color: '#6B7280' }}>
//                         {file.name}
//                       </Typography>
//                     </Box>
//                   ))}
//                 </Box>
//               </Box>

//               {/* Request Lines Table */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#1A1A1A' }}>
//                   Request Lines
//                 </Typography>

//                 <TableContainer sx={{ border: '1px solid #E5E7EB', borderRadius: 2, overflow: 'auto' }}>
//                   <Table sx={{ minWidth: 1200 }}>
//                     <TableHead sx={{ bgcolor: '#F9FAFB' }}>
//                       <TableRow>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Sr. No.</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Deduction Code</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Deduction Name</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>GL account</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Account Name</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Amount requested</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Amount approved</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Amount Used</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Supp.PO No.</TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {requestLines.map((line) => (
//                         <TableRow key={line.id}>
//                           <TableCell>{line.srNo}</TableCell>
//                           <TableCell>{line.deductionCode}</TableCell>
//                           <TableCell>{line.deductionName}</TableCell>
//                           <TableCell>{line.glAccount}</TableCell>
//                           <TableCell>{line.accountName}</TableCell>
//                           <TableCell>₹{line.amountRequested}</TableCell>
//                           <TableCell>₹{line.amountApproved}</TableCell>
//                           <TableCell>₹{line.amountUsed}</TableCell>
//                           <TableCell>{line.supplierNo}</TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               </Box>

//               {/* Approval Remarks */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#1A1A1A' }}>
//                   Approval remarks
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: '#1A1A1A', bgcolor: '#F9FAFB', p: 2, borderRadius: 1 }}>
//                   {approvalRemarks}
//                 </Typography>
//               </Box>

//               {/* Action Buttons */}
//               <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
//                 <Button
//                   variant="outlined"
//                   onClick={() => router.push('/imprest')}
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
//                   Back
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
  Chip,
  CircularProgress,
  Alert,
  Snackbar,
  IconButton,
} from '@mui/material'
import {
  NavigateNext as NavigateNextIcon,
  CloudUpload as UploadIcon,
  Download as DownloadIcon,
} from '@mui/icons-material'
import Sidebar from '../main/Sidebar'
import Header from '../main/Header'
import { useRouter, useParams } from 'next/navigation'

const API_BASE_URL = 'http://localhost:8000/api/v1'

interface RequestLine {
  breakdown_id: number
  debtor_code: number
  debtor_name: string
  description: string
  gl_account: string
  account_name: string
  estimated_amount: string
  approved_amount: string | null
  spent_amount: string | null
  supplier_no: string
}

interface Attachment {
  attachment_id: number
  file_name: string
  file_path: string
  file_size: number
  attachment_type: string
  uploaded_at: string
}

export default function ViewImprestDetailsPage() {
  const router = useRouter()
  const { id } = useParams()
  const [selectedMenu, setSelectedMenu] = useState('Imprest')
  const [loading, setLoading] = useState(true)

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

  // Data states
  const [imprestNumber, setImprestNumber] = useState('')
  const [userRequester, setUserRequester] = useState('')
  const [status, setStatus] = useState('')
  const [statusDisplay, setStatusDisplay] = useState('')
  const [userRaiser, setUserRaiser] = useState('')
  const [userEntered, setUserEntered] = useState('')
  const [project, setProject] = useState('')
  const [department, setDepartment] = useState('')
  const [purpose, setPurpose] = useState('')
  const [totalAmount, setTotalAmount] = useState('')
  const [createdOn, setCreatedOn] = useState('')
  
  const [requestLines, setRequestLines] = useState<RequestLine[]>([])
  const [attachments, setAttachments] = useState<Attachment[]>([])
  const [approvals, setApprovals] = useState<any[]>([])

  // Fetch imprest data
  useEffect(() => {
    if (id) {
      fetchImprestDetails()
    }
  }, [id])

  const fetchImprestDetails = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_BASE_URL}/imprest/${id}/`)
      const data = response.data

      // Set main data
      setImprestNumber(data.request_no || '')
      setUserRequester(data.user_requested?.toString() || 'N/A')
      setStatus(data.status || '')
      setStatusDisplay(data.status_display || data.status || '')
      setUserRaiser(data.created_by?.toString() || 'N/A')
      setUserEntered(data.user_entered?.toString() || 'N/A')
      setProject(data.project?.toString() || 'N/A')
      setDepartment(data.department?.toString() || 'N/A')
      setPurpose(data.purpose || 'N/A')
      setTotalAmount(data.total_amount || '0')
      setCreatedOn(data.created_on ? new Date(data.created_on).toLocaleString() : 'N/A')

      // Set request lines
      setRequestLines(data.request_lines || [])

      // Set attachments
      setAttachments(data.attachments || [])

      // Set approvals
      setApprovals(data.approvals || [])

    } catch (error: any) {
      console.error('Error fetching imprest details:', error)
      showAlert('Failed to load imprest details', 'error')
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Draft': return '#9E9E9E'
      case 'Pending_HOD': return '#FFA726'
      case 'Pending_FC': return '#FF9800'
      case 'Pending_DG': return '#FF6B35'
      case 'Approved': return '#4CAF50'
      case 'Rejected': return '#EF5350'
      case 'Surrendered': return '#9C27B0'
      case 'Closed': return '#607D8B'
      default: return '#9E9E9E'
    }
  }

  const handleDownloadAttachment = async (attachment: Attachment) => {
    try {
      // Create download link
      const downloadUrl = `${API_BASE_URL}${attachment.file_path}`
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = attachment.file_name
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      showAlert('Downloading file...', 'info')
    } catch (error) {
      console.error('Error downloading file:', error)
      showAlert('Failed to download file', 'error')
    }
  }

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
      <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header />
        
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
                onClick={() => router.push('/imprest')}
                sx={{ fontSize: '0.875rem', color: '#6B7280', cursor: 'pointer' }}
              >
                Imprest
              </Link>
              <Typography sx={{ fontSize: '0.875rem', color: '#1A1A1A', fontWeight: 500 }}>
                View Details
              </Typography>
            </Breadcrumbs>

            <Paper elevation={0} sx={{ p: 4, borderRadius: 2, bgcolor: 'white' }}>
              {/* Header with Status and Edit Button */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    Imprest Details
                  </Typography>
                  <Chip 
                    label={statusDisplay}
                    sx={{ 
                      bgcolor: getStatusColor(status),
                      color: 'white',
                      fontWeight: 500,
                      fontSize: '0.75rem'
                    }}
                  />
                </Box>
                <Button
                  variant="contained"
                  onClick={() => router.push(`/imprest/edit/${id}`)}
                  sx={{
                    textTransform: 'none',
                    bgcolor: '#FF6B35',
                    px: 4,
                    '&:hover': {
                      bgcolor: '#FF5722'
                    }
                  }}
                >
                  Edit
                </Button>
              </Box>

              {/* Information Section */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 3, color: '#1A1A1A' }}>
                  Information
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
                      Imprest Number
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
                      {imprestNumber}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
                      User Requester
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
                      {userRequester}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
                      Status
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
                      {statusDisplay}
                    </Typography>
                  </Grid>

                  

                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
                      User Entered
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
                      {userEntered}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
                      Project
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
                      {project}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
                      Department
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
                      {department}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
                      Total Amount
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
                      KES {parseFloat(totalAmount).toFixed(2)}
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
                      Created On
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
                      {createdOn}
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#9CA3AF', fontWeight: 500 }}>
                      Purpose
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1A1A1A' }}>
                      {purpose}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              {/* Uploaded Documents */}
              {attachments.length > 0 && (
                <Box sx={{ mb: 4 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2.5, color: '#1A1A1A' }}>
                    Uploaded Documents ({attachments.length})
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    {attachments.map((file) => (
                      <Box
                        key={file.attachment_id}
                        sx={{
                          position: 'relative',
                          width: 120,
                          height: 140,
                          border: '1px solid #E5E7EB',
                          borderRadius: 2,
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: '#F9FAFB',
                          cursor: 'pointer',
                          '&:hover': {
                            bgcolor: '#F3F4F6',
                            borderColor: '#FF6B35'
                          }
                        }}
                        onClick={() => handleDownloadAttachment(file)}
                      >
                        <UploadIcon sx={{ fontSize: 40, color: '#FF6B35', mb: 1 }} />
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            textAlign: 'center', 
                            wordBreak: 'break-all', 
                            fontSize: '0.7rem', 
                            color: '#6B7280',
                            mb: 0.5
                          }}
                        >
                          {file.file_name.length > 15 ? file.file_name.substring(0, 12) + '...' : file.file_name}
                        </Typography>
                        <Typography variant="caption" sx={{ fontSize: '0.65rem', color: '#9CA3AF' }}>
                          {(file.file_size / 1024).toFixed(2)} KB
                        </Typography>
                        <IconButton
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 4,
                            right: 4,
                            bgcolor: 'white',
                            boxShadow: 1,
                            width: 24,
                            height: 24,
                            '&:hover': { bgcolor: '#FF6B35', color: 'white' }
                          }}
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDownloadAttachment(file)
                          }}
                        >
                          <DownloadIcon sx={{ fontSize: 14 }} />
                        </IconButton>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}

              {/* Request Lines Table */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#1A1A1A' }}>
                  Request Lines ({requestLines.length})
                </Typography>

                <TableContainer sx={{ border: '1px solid #E5E7EB', borderRadius: 2, overflow: 'auto' }}>
                  <Table sx={{ minWidth: 1200 }}>
                    <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Sr. No.</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Debtor Code</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Debtor Name</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Description</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>GL Account</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Account Name</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Est. Amount</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Approved Amount</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Spent Amount</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.75rem', py: 1.5 }}>Supplier No.</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {requestLines.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={10} sx={{ textAlign: 'center', py: 4 }}>
                            <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
                              No request lines found
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ) : (
                        requestLines.map((line, index) => (
                          <TableRow key={line.breakdown_id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{line.debtor_code || 'N/A'}</TableCell>
                            <TableCell>{line.debtor_name || 'N/A'}</TableCell>
                            <TableCell>{line.description || 'N/A'}</TableCell>
                            <TableCell>{line.gl_account || 'N/A'}</TableCell>
                            <TableCell>{line.account_name || 'N/A'}</TableCell>
                            <TableCell>KES {parseFloat(line.estimated_amount || '0').toFixed(2)}</TableCell>
                            <TableCell>
                              {line.approved_amount ? `KES ${parseFloat(line.approved_amount).toFixed(2)}` : '-'}
                            </TableCell>
                            <TableCell>
                              {line.spent_amount ? `KES ${parseFloat(line.spent_amount).toFixed(2)}` : '-'}
                            </TableCell>
                            <TableCell>{line.supplier_no || '-'}</TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              {/* Approval History */}
              {approvals.length > 0 && (
                <Box sx={{ mb: 4 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#1A1A1A' }}>
                    Approval History
                  </Typography>
                  <Box sx={{ bgcolor: '#F9FAFB', p: 3, borderRadius: 1, border: '1px solid #E5E7EB' }}>
                    {approvals.map((approval, index) => (
                      <Box key={index} sx={{ mb: index < approvals.length - 1 ? 2 : 0 }}>
                        <Typography variant="body2" sx={{ color: '#1A1A1A', fontWeight: 500 }}>
                          {approval.approver_name || `Approver ${approval.approver}`}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#6B7280' }}>
                          {approval.remarks || 'No remarks'}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                  variant="outlined"
                  onClick={() => router.push('/imprest')}
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
                  Back
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