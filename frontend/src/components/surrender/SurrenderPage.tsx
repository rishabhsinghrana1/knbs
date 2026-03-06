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

// const requestTypes = [
//   { label: 'My Pending Surrender', color: '#FF6B35', selected: true },
//   { label: 'My Completed Surrender', color: '#4CAF50', selected: false },
// ]

// const years = ['2024', '2025', '2026']
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// const departments = ['Finance', 'HR', 'Marketing', 'Software']
// const statuses = ['On Hold', 'Pending', 'Accepted', 'Rejected', 'Verifying']

// const tableData = [
//   { imprestNumber: 'Finance Department', reqDate: '01/01/26', userRequested: 'Finance', userEntered: 'John Doe', status: 'Verifying', department: 'Finance' },
//   { imprestNumber: 'Finance Department', reqDate: '01/01/26', userRequested: 'Finance', userEntered: 'John Doe', status: 'Verifying', department: 'Finance' },
//   { imprestNumber: 'Finance Department', reqDate: '01/01/26', userRequested: 'Finance', userEntered: 'John Doe', status: 'Verifying', department: 'Finance' },
//   { imprestNumber: 'Finance Department', reqDate: '01/01/26', userRequested: 'Finance', userEntered: 'John Doe', status: 'Verifying', department: 'Finance' },
//   { imprestNumber: 'Finance Department', reqDate: '01/01/26', userRequested: 'Finance', userEntered: 'John Doe', status: 'Verifying', department: 'Finance' },
//   { imprestNumber: 'Finance Department', reqDate: '01/01/26', userRequested: 'Finance', userEntered: 'John Doe', status: 'Verifying', department: 'Finance' },
// ]

// export default function SurrenderRequestPage() {
//     const router = useRouter()
  
//   const [selectedMenu, setSelectedMenu] = useState('Surrender')
//   const [selectedType, setSelectedType] = useState(0)
//   const [year, setYear] = useState('2026')
//   const [month, setMonth] = useState('April')
//   const [department, setDepartment] = useState('Finance')
//   const [status, setStatus] = useState('On Hold')
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
//     console.log('View row:', selectedRow)
//     handleMenuClose()
//   }

//   const handleEdit = () => {
//     console.log('Edit row:', selectedRow)
//     handleMenuClose()
//   }

//   const handleDelete = () => {
//     console.log('Delete row:', selectedRow)
//     handleMenuClose()
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
//           <Box sx={{ p: 3 }}>
//             <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
//               {/* Header with Title and Create Button */}
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'space-between', 
//                 alignItems: 'center',
//                 mb: 3,
//     background: 'linear-gradient(90deg, #FF6B35 0%, #000000 100%)',
//                 p: 2.5,
//                 borderRadius: 1,
//                 mx: -3,
//                 mt: -3,
//               }}>
//                 <Box>
//                   <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', mb: 0.5 }}>
//                     Create surrender request
//                   </Typography>
//                   <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
//                     Track your requests here
//                   </Typography>
//                 </Box>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     bgcolor: 'white',
//                     color: '#1A1A1A',
//                     textTransform: 'none',
//                     fontWeight: 600,
//                     px: 3,
//                     boxShadow: 'none',
//                     '&:hover': {
//                       bgcolor: '#F5F5F5',
//                       boxShadow: 'none',
//                     }
//                   }}
//                                     onClick={() => router.push('/surrender/create')}

//                 >
//                   Create request +
//                 </Button>
//               </Box>

//               {/* Select Type */}
//               <Box sx={{ mb: 3, mt: 3 }}>
//                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5, color: '#1A1A1A' }}>
//                   Select Type
//                 </Typography>
//                 <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//                   {requestTypes.map((type, index) => (
//                     <Button
//                       key={index}
//                       variant={selectedType === index ? 'contained' : 'outlined'}
//                       onClick={() => setSelectedType(index)}
//                       sx={{
//                         textTransform: 'none',
//                         borderRadius: 1.5,
//                         px: 2.5,
//                         py: 0.8,
//                         fontSize: '0.875rem',
//                         fontWeight: 500,
//                         ...(selectedType === index ? {
//                           bgcolor: type.color,
//                           color: 'white',
//                           border: 'none',
//                           '&:hover': {
//                             bgcolor: type.color,
//                             opacity: 0.9,
//                           }
//                         } : {
//                           borderColor: type.color,
//                           color: type.color,
//                           bgcolor: 'transparent',
//                           '&:hover': {
//                             borderColor: type.color,
//                             bgcolor: `${type.color}10`,
//                           }
//                         })
//                       }}
//                     >
//                       {type.label}
//                     </Button>
//                   ))}
//                 </Box>
//               </Box>

//               {/* Filter By */}
//               <Box sx={{ mb: 3 }}>
//                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5, color: '#1A1A1A' }}>
//                   Filter By
//                 </Typography>
//                 <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end', flexWrap: 'wrap' }}>
//                   <Box sx={{ flex: '1 1 200px' }}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}>
//                       Year
//                     </Typography>
//                     <TextField
//                       select
//                       fullWidth
//                       size="small"
//                       value={year}
//                       onChange={(e) => setYear(e.target.value)}
//                       sx={{ bgcolor: 'white' }}
//                     >
//                       {years.map((y) => (
//                         <MenuItem key={y} value={y}>{y}</MenuItem>
//                       ))}
//                     </TextField>
//                   </Box>

//                   <Box sx={{ flex: '1 1 200px' }}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}>
//                       Month
//                     </Typography>
//                     <TextField
//                       select
//                       fullWidth
//                       size="small"
//                       value={month}
//                       onChange={(e) => setMonth(e.target.value)}
//                       sx={{ bgcolor: 'white' }}
//                     >
//                       {months.map((m) => (
//                         <MenuItem key={m} value={m}>{m}</MenuItem>
//                       ))}
//                     </TextField>
//                   </Box>

//                   <Box sx={{ flex: '1 1 200px' }}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}>
//                       Department
//                     </Typography>
//                     <TextField
//                       select
//                       fullWidth
//                       size="small"
//                       value={department}
//                       onChange={(e) => setDepartment(e.target.value)}
//                       sx={{ bgcolor: 'white' }}
//                     >
//                       {departments.map((d) => (
//                         <MenuItem key={d} value={d}>{d}</MenuItem>
//                       ))}
//                     </TextField>
//                   </Box>

//                   <Box sx={{ flex: '1 1 200px' }}>
//                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}>
//                       Status
//                     </Typography>
//                     <TextField
//                       select
//                       fullWidth
//                       size="small"
//                       value={status}
//                       onChange={(e) => setStatus(e.target.value)}
//                       sx={{ bgcolor: 'white' }}
//                     >
//                       {statuses.map((s) => (
//                         <MenuItem key={s} value={s}>{s}</MenuItem>
//                       ))}
//                     </TextField>
//                   </Box>

//                   <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
//                     <Button
//                       variant="outlined"
//                       sx={{
//                         textTransform: 'none',
//                         color: '#6B7280',
//                         borderColor: '#E5E7EB',
//                         px: 3,
//                         '&:hover': {
//                           borderColor: '#D1D5DB',
//                           bgcolor: '#F9FAFB'
//                         }
//                       }}
//                     >
//                       Reset
//                     </Button>
//                     <Button
//                       variant="contained"
//                       sx={{
//                         textTransform: 'none',
//                         bgcolor: '#FF6B35',
//                         px: 3,
//                         '&:hover': {
//                           bgcolor: '#FF5722'
//                         }
//                       }}
//                     >
//                       Search Results
//                     </Button>
//                   </Box>
//                 </Box>
//               </Box>

//               {/* Dashboard Table */}
//               <Box>
//                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#1A1A1A' }}>
//                   Dashboard
//                 </Typography>
//                 <TableContainer>
//                   <Table>
//                     <TableHead sx={{ bgcolor: '#F9FAFB' }}>
//                       <TableRow>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Imprest Number</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Request Date</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>User Requested</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>User Entered</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Status</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Department</TableCell>
//                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Actions</TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {tableData.map((row, index) => (
//                         <TableRow key={index} hover>
//                           <TableCell sx={{ fontSize: '0.875rem', py: 2 }}>{row.imprestNumber}</TableCell>
//                           <TableCell sx={{ fontSize: '0.875rem', py: 2 }}>{row.reqDate}</TableCell>
//                           <TableCell sx={{ fontSize: '0.875rem', py: 2 }}>{row.userRequested}</TableCell>
//                           <TableCell sx={{ fontSize: '0.875rem', py: 2 }}>{row.userEntered}</TableCell>
//                           <TableCell sx={{ py: 2 }}>
//                             <Chip
//                               label={row.status}
//                               size="small"
//                               sx={{
//                                 bgcolor: '#E8F5E9',
//                                 color: '#4CAF50',
//                                 fontWeight: 500,
//                                 fontSize: '0.75rem',
//                                 height: '24px'
//                               }}
//                             />
//                           </TableCell>
//                           <TableCell sx={{ fontSize: '0.875rem', py: 2 }}>{row.department}</TableCell>
//                           <TableCell sx={{ py: 2 }}>
//                             <IconButton
//                               size="small"
//                               onClick={(e) => handleMenuOpen(e, index)}
//                             >
//                               <MoreVertIcon fontSize="small" />
//                             </IconButton>
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>

//                 {/* Actions Menu */}
//                 <Menu
//                   anchorEl={anchorEl}
//                   open={Boolean(anchorEl)}
//                   onClose={handleMenuClose}
//                   PaperProps={{
//                     sx: {
//                       boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//                       borderRadius: 2,
//                       minWidth: 150,
//                     }
//                   }}
//                 >
//                   <MenuItemComponent onClick={handleView} sx={{ fontSize: '0.875rem', py: 1 }}>
//                     <ViewIcon sx={{ fontSize: '1rem', mr: 1, color: '#6B7280' }} />
//                     View
//                   </MenuItemComponent>
//                   <MenuItemComponent onClick={handleEdit} sx={{ fontSize: '0.875rem', py: 1 }}>
//                     <EditIcon sx={{ fontSize: '1rem', mr: 1, color: '#6B7280' }} />
//                     Edit
//                   </MenuItemComponent>
//                   <MenuItemComponent onClick={handleDelete} sx={{ fontSize: '0.875rem', py: 1, color: '#EF5350' }}>
//                     <DeleteIcon sx={{ fontSize: '1rem', mr: 1 }} />
//                     Delete
//                   </MenuItemComponent>
//                 </Menu>
//               </Box>
//             </Paper>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// 'use client'

// import React, { useEffect, useState } from 'react'
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
//   CircularProgress,
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

// const requestTypes = [
//   { label: 'My Pending Surrender', color: '#FF6B35' },
//   { label: 'My Completed Surrender', color: '#4CAF50' },
// ]

// const years = ['2024', '2025', '2026']
// const months = ['January', 'February', 'March', 'April']
// const departments = ['Finance', 'HR', 'Marketing', 'Software']
// const statuses = ['On Hold', 'Pending', 'Accepted', 'Rejected', 'Verifying']

// export default function SurrenderRequestPage() {
//   const router = useRouter()

//   const [selectedMenu, setSelectedMenu] = useState('Surrender')
//   const [selectedType, setSelectedType] = useState(0)
//   const [year, setYear] = useState('2026')
//   const [month, setMonth] = useState('April')
//   const [department, setDepartment] = useState('Finance')
//   const [status, setStatus] = useState('On Hold')

//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
//   const [selectedRow, setSelectedRow] = useState<any>(null)

//   const [imprests, setImprests] = useState<any[]>([])
//   const [loading, setLoading] = useState(false)

//   // ✅ Fetch Imprest API
//   useEffect(() => {
//     const fetchImprests = async () => {
//       try {
//         setLoading(true)
//         const res = await fetch('http://localhost:8000/api/v1/imprest/')
//         const data = await res.json()
//         setImprests(data)
//       } catch (error) {
//         console.error('Error fetching imprests:', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchImprests()
//   }, [])

//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, row: any) => {
//     setAnchorEl(event.currentTarget)
//     setSelectedRow(row)
//   }

//   const handleMenuClose = () => {
//     setAnchorEl(null)
//     setSelectedRow(null)
//   }

//   const handleView = () => {
//     router.push(`/surrender/view/${selectedRow.imprest_id}`)
//     handleMenuClose()
//   }

//   const handleEdit = () => {
//     router.push(`/surrender/edit/${selectedRow.imprest_id}`)
//     handleMenuClose()
//   }

//   const handleDelete = () => {
//     console.log('Delete:', selectedRow)
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

//               {/* HEADER */}
//               {/* <Box sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 mb: 3,
//                 background: 'linear-gradient(90deg, #FF6B35 0%, #000000 100%)',
//                 p: 2.5,
//                 borderRadius: 1,
//                 mx: -3,
//                 mt: -3,
//               }}>
//                 <Typography variant="h6" sx={{ color: 'white' }}>
//                   Create Surrender Request
//                 </Typography>

//                 <Button
//                   variant="contained"
//                   sx={{ bgcolor: 'white', color: '#000' }}
//                   onClick={() => router.push('/surrender/create')}
//                 >
//                   Create Request +
//                 </Button>
//               </Box> */}

//               {/* TABLE */}
//               <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
//                 Surrender
//               </Typography>

//               <TableContainer>
//                 <Table>
//                   <TableHead sx={{ bgcolor: '#F9FAFB' }}>
//                     <TableRow>
//                       <TableCell>Imprest Number</TableCell>
//                       <TableCell>Request Date</TableCell>
//                       <TableCell>User Requested</TableCell>
//                       <TableCell>User Entered</TableCell>
//                       <TableCell>Status</TableCell>
//                       <TableCell>Department</TableCell>
//                       <TableCell>Actions</TableCell>
//                     </TableRow>
//                   </TableHead>

//                   <TableBody>
//                     {loading ? (
//                       <TableRow>
//                         <TableCell colSpan={7} align="center">
//                           <CircularProgress size={24} />
//                         </TableCell>
//                       </TableRow>
//                     ) : imprests.length === 0 ? (
//                       <TableRow>
//                         <TableCell colSpan={7} align="center">
//                           No Records Found
//                         </TableCell>
//                       </TableRow>
//                     ) : (
//                       imprests.map((row) => (
//                         <TableRow key={row.imprest_id} hover>
//                           <TableCell>{row.request_no}</TableCell>
//                           <TableCell>
//                             {new Date(row.created_on).toLocaleDateString()}
//                           </TableCell>
//                           <TableCell>{row.user_requested_name}</TableCell>
//                           <TableCell>{row.user_entered_name}</TableCell>
//                           <TableCell>
//                             <Chip
//                               label={row.status_display}
//                               size="small"
//                               sx={{
//                                 bgcolor: '#E8F5E9',
//                                 color: '#4CAF50',
//                                 fontWeight: 500,
//                               }}
//                             />
//                           </TableCell>
//                           <TableCell>{row.department_name}</TableCell>
//                           <TableCell>
//                             <IconButton
//                               size="small"
//                               onClick={(e) => handleMenuOpen(e, row)}
//                             >
//                               <MoreVertIcon fontSize="small" />
//                             </IconButton>
//                           </TableCell>
//                         </TableRow>
//                       ))
//                     )}
//                   </TableBody>
//                 </Table>
//               </TableContainer>

//               {/* ACTION MENU */}
//               <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//               >
//                 <MenuItemComponent onClick={handleView}>
//                   <ViewIcon sx={{ mr: 1 }} /> View
//                 </MenuItemComponent>
//                 <MenuItemComponent onClick={handleEdit}>
//                   <EditIcon sx={{ mr: 1 }} /> Edit
//                 </MenuItemComponent>
//                 <MenuItemComponent onClick={handleDelete}>
//                   <DeleteIcon sx={{ mr: 1 }} /> Delete
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

import React, { useEffect, useState } from 'react'
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
  CircularProgress,
} from '@mui/material'
import {
  MoreVert as MoreVertIcon,
  Visibility as ViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material'
import Sidebar from '../main/Sidebar'
import Header from '../main/Header'
import { useRouter } from 'next/navigation'

// ─── Types ────────────────────────────────────────────────────────────────────
interface SurrenderRow {
  imprest_id: number
  request_no: string
  user_requested: number
  user_requested_name: string
  user_entered_name: string
  department: number
  department_name: string
  project_name: string
  status: string         // raw: "Pending_HOD", "Approved", etc.
  status_display: string // human: "Pending HOD"
  created_on: string     // ISO
}

interface LoggedInUser {
  user_id: number
  department_id: number
  department_name: string
  name: string
}

// ─── Constants ────────────────────────────────────────────────────────────────
const requestTypes = [
  { label: 'My Pending Surrender',   color: '#FF6B35', key: 'pending-my' },
  { label: 'My Completed Surrender', color: '#4CAF50', key: 'completed-my' },
]

const years  = ['2024', '2025', '2026']
const months = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

const PENDING_STATUSES   = ['Pending_HOD', 'Pending_Finance', 'Pending_MD', 'On_Hold', 'Verifying']
const COMPLETED_STATUSES = ['Approved', 'Rejected']

// ─── Chip colour ──────────────────────────────────────────────────────────────
const statusChipStyle = (status: string) => {
  if (status === 'Approved')             return { bgcolor: '#E8F5E9', color: '#4CAF50' }
  if (status === 'Rejected')             return { bgcolor: '#FFEBEE', color: '#EF5350' }
  if (PENDING_STATUSES.includes(status)) return { bgcolor: '#FFF3E0', color: '#FF9800' }
  return { bgcolor: '#F3E5F5', color: '#8E24AA' }
}

// ─── Role-based type filter ───────────────────────────────────────────────────
const applyTypeFilter = (
  data: SurrenderRow[],
  typeKey: string,
  user: LoggedInUser
): SurrenderRow[] => {
  switch (typeKey) {
    case 'pending-my':
      return data.filter(
        (r) => r.user_requested === user.user_id && PENDING_STATUSES.includes(r.status)
      )
    case 'completed-my':
      return data.filter(
        (r) => r.user_requested === user.user_id && COMPLETED_STATUSES.includes(r.status)
      )
    default:
      return data
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function SurrenderRequestPage() {
  const router = useRouter()

  const [allData,      setAllData]      = useState<SurrenderRow[]>([])
  const [filteredData, setFilteredData] = useState<SurrenderRow[]>([])
  const [loading,      setLoading]      = useState(false)
  const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null)

  const [selectedMenu, setSelectedMenu] = useState('Surrender')
  const [selectedType, setSelectedType] = useState(0)

  const [year,       setYear]       = useState('2026')
  const [month,      setMonth]      = useState('')
  const [department, setDepartment] = useState('')

  const [anchorEl,    setAnchorEl]    = useState<null | HTMLElement>(null)
  const [selectedRow, setSelectedRow] = useState<SurrenderRow | null>(null)

  // ── Temp hardcoded user — replace with real auth later ────────────────────
  // TODO: jab login ban jaye to ye hatao aur real user data lagao
  useEffect(() => {
    setLoggedInUser({
      user_id: 1,         // <- logged-in user ka ID
      department_id: 1,   // <- us user ka department ID
      department_name: 'Finance',
      name: 'Rahul Sharma',
    })
  }, [])

  // ── Fetch data ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res  = await fetch('http://localhost:8000/api/v1/imprest/')
        const data = await res.json()
        setAllData(data)
      } catch (err) {
        console.error('Error fetching surrender data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // ── Re-apply when data or user loads ──────────────────────────────────────
  useEffect(() => {
    if (!loggedInUser) return
    runFilters(selectedType, year, month, department, allData, loggedInUser)
  }, [allData, loggedInUser])

  // ── Core filter function ───────────────────────────────────────────────────
  const runFilters = (
    typeIndex: number,
    yr: string,
    mn: string,
    dept: string,
    data: SurrenderRow[],
    user: LoggedInUser
  ) => {
    // 1. Role-based type filter
    let result = applyTypeFilter(data, requestTypes[typeIndex].key, user)

    // 2. Year
    if (yr) {
      result = result.filter(
        (r) => new Date(r.created_on).getFullYear().toString() === yr
      )
    }

    // 3. Month
    if (mn) {
      const monthIndex = months.indexOf(mn)
      result = result.filter(
        (r) => new Date(r.created_on).getMonth() === monthIndex
      )
    }

    // 4. Department (extra sub-filter)
    if (dept) {
      result = result.filter(
        (r) => r.department_name.toLowerCase() === dept.toLowerCase()
      )
    }

    setFilteredData(result)
  }

  const applyFilters = () => {
    if (!loggedInUser) return
    runFilters(selectedType, year, month, department, allData, loggedInUser)
  }

  const resetFilters = () => {
    setYear('2026')
    setMonth('')
    setDepartment('')
    if (loggedInUser) runFilters(selectedType, '2026', '', '', allData, loggedInUser)
  }

  const handleTypeChange = (index: number) => {
    setSelectedType(index)
    if (loggedInUser) runFilters(index, year, month, department, allData, loggedInUser)
  }

  // ── Department dropdown built from API data ────────────────────────────────
  const departmentOptions = Array.from(new Set(allData.map((r) => r.department_name)))

  // ── Menu helpers ───────────────────────────────────────────────────────────
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, row: SurrenderRow) => {
    setAnchorEl(event.currentTarget)
    setSelectedRow(row)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setSelectedRow(null)
  }

  const handleView = () => {
    if (!selectedRow) return
    router.push(`/surrender/view/${selectedRow.imprest_id}`)
    handleMenuClose()
  }

  const handleEdit = () => {
    if (!selectedRow) return
    router.push(`/surrender/edit/${selectedRow.imprest_id}`)
    handleMenuClose()
  }

  const handleDelete = () => {
    console.log('Delete:', selectedRow)
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
                    Surrender Requests
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    {loggedInUser
                      ? `Logged in as: ${loggedInUser.name} — ${loggedInUser.department_name}`
                      : 'Loading...'}
                  </Typography>
                </Box>
                {/* <Button
                  variant="contained"
                  sx={{
                    bgcolor: 'white',
                    color: '#1A1A1A',
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': { bgcolor: '#F5F5F5' },
                  }}
                  onClick={() => router.push('/surrender/create')}
                >
                  Create Surrender +
                </Button> */}
              </Box>

              {/* ── Select Type ── */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                  Select Type
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {requestTypes.map((type, index) => (
                    <Button
                      key={index}
                      variant={selectedType === index ? 'contained' : 'outlined'}
                      onClick={() => handleTypeChange(index)}
                      sx={{
                        textTransform: 'none',
                        borderRadius: 1.5,
                        px: 2.5,
                        py: 0.8,
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        ...(selectedType === index
                          ? { bgcolor: type.color, color: 'white', '&:hover': { bgcolor: type.color, opacity: 0.9 } }
                          : { borderColor: type.color, color: type.color, '&:hover': { bgcolor: `${type.color}10` } }),
                      }}
                    >
                      {type.label}
                    </Button>
                  ))}
                </Box>
              </Box>

              {/* ── Filter By ── */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                  Filter By
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>

                  {/* Year */}
                  <TextField
                    select size="small" label="Year" value={year}
                    onChange={(e) => setYear(e.target.value)}
                    sx={{ minWidth: 140 }}
                  >
                    {years.map((y) => <MenuItem key={y} value={y}>{y}</MenuItem>)}
                  </TextField>

                  {/* Month */}
                  <TextField
                    select size="small" label="Month" value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    sx={{ minWidth: 150 }}
                  >
                    <MenuItem value="">All Months</MenuItem>
                    {months.map((m) => <MenuItem key={m} value={m}>{m}</MenuItem>)}
                  </TextField>

                  {/* Department — dynamic from API */}
                  <TextField
                    select size="small" label="Department" value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    sx={{ minWidth: 170 }}
                  >
                    <MenuItem value="">All Departments</MenuItem>
                    {departmentOptions.map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}
                  </TextField>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant="outlined" onClick={resetFilters}>Reset</Button>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: '#FF6B35', '&:hover': { bgcolor: '#e55a25' } }}
                      onClick={applyFilters}
                    >
                      Search
                    </Button>
                  </Box>
                </Box>

                {/* Record count */}
                <Typography variant="caption" sx={{ color: '#888', mt: 1, display: 'block' }}>
                  Showing {filteredData.length} of {allData.length} records
                  &nbsp;·&nbsp; Type: <strong>{requestTypes[selectedType].label}</strong>
                </Typography>
              </Box>

              {/* ── Table ── */}
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                Dashboard
              </Typography>

              <TableContainer>
                <Table>
                  <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Imprest Number</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Request Date</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Requested By</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Entered By</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {loading ? (
                      <TableRow>
                        <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                          <CircularProgress size={24} sx={{ color: '#FF6B35' }} />
                        </TableCell>
                      </TableRow>
                    ) : filteredData.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} align="center" sx={{ py: 4, color: '#888' }}>
                          No records found for the selected filters.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredData.map((row) => (
                        <TableRow key={row.imprest_id} hover>
                          <TableCell>{row.request_no}</TableCell>
                          <TableCell>
                            {new Date(row.created_on).toLocaleDateString('en-GB', {
                              day: '2-digit', month: 'short', year: 'numeric',
                            })}
                          </TableCell>
                          <TableCell>{row.user_requested_name}</TableCell>
                          <TableCell>{row.user_entered_name}</TableCell>
                          <TableCell>{row.department_name}</TableCell>
                          <TableCell>
                            <Chip
                              label={row.status_display}
                              size="small"
                              sx={{ ...statusChipStyle(row.status), fontWeight: 500, fontSize: '0.75rem' }}
                            />
                          </TableCell>
                          <TableCell>
                            <IconButton size="small" onClick={(e) => handleMenuOpen(e, row)}>
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
                <MenuItemComponent onClick={handleEdit}>
                  <EditIcon sx={{ fontSize: 18, mr: 1 }} /> Edit
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