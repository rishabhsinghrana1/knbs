// // 'use client'

// // import React, { useState, useEffect } from 'react'
// // import {
// //   Box,
// //   Paper,
// //   Typography,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Button,
// //   TextField,
// //   MenuItem,
// //   Chip,
// //   IconButton,
// //   Menu,
// //   MenuItem as MenuItemComponent,
// // } from '@mui/material'
// // import {
// //   MoreVert as MoreVertIcon,
// //   Visibility as ViewIcon,
// //   Edit as EditIcon,
// //   Delete as DeleteIcon,
// // } from '@mui/icons-material'
// // import Sidebar from '../main/Sidebar'
// // import Header from '../main/Header'
// // import { useRouter } from 'next/navigation'
// // import axios from 'axios'


// // const requestTypes = [
// //   { label: 'My request', color: '#FF6B35', route: '/imprest' },,
// //   { label: 'Dept Request', color: '#FF6B35', route: '/imprest/dept' },
// //   { label: 'Pending Dept Request', color: '#FF6B35', route: '/imprest/pending-dept' },
// //   { label: 'Pending my request', color: '#FF6B35', route: '/imprest/pending-my' },
// //   { label: 'Completed my request', color: '#4CAF50', route: '/imprest/completed-my' },
// //   { label: 'Completed debt request', color: '#4CAF50', route: '/imprest/completed-dept' },
// // ]

// // const years = ['2024', '2025', '2026']
// // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// // const departments = ['Finance', 'HR', 'Marketing', 'Software']
// // const statuses = ['On Hold', 'Pending', 'Accepted', 'Rejected', 'Verifying']



// // export default function ImprestRequestPage() {
// //   const router = useRouter()
// //   const [imprestData, setImprestData] = useState([])

// //   const [selectedMenu, setSelectedMenu] = useState('Imprest')
// //   const [selectedType, setSelectedType] = useState(0)
// //   const [year, setYear] = useState('2026')
// //   const [month, setMonth] = useState('April')
// //   const [department, setDepartment] = useState('Finance')
// //   const [status, setStatus] = useState('On Hold')
// //   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
// //   const [selectedRow, setSelectedRow] = useState<number | null>(null)
// //   console.log(selectedRow, "selectedRowselectedRow");

// //   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
// //     setAnchorEl(event.currentTarget)
// //     setSelectedRow(index)
// //   }

// //   useEffect(() => {
// //     fetchImprestData()
// //   }, [])

// //   const fetchImprestData = async () => {
// //     try {
// //       const res = await axios.get('http://localhost:8000/api/v1/imprest/') // apna API URL
// //       setImprestData(res.data)
// //     } catch (error) {
// //       console.error(error)
// //     }
// //   }


// //   const handleMenuClose = () => {
// //     setAnchorEl(null)
// //     setSelectedRow(null)
// //   }


// //   const handleView = () => {
// //     if (selectedRow === null) return

// //     const imprestNumber = imprestData[selectedRow].imprest_id
// //     router.push(`/imprest/view/${imprestNumber}`)
// //     handleMenuClose()
// //   }

// //   const handleEdit = () => {
// //     if (selectedRow === null) return

// //     const imprestNumber = imprestData[selectedRow].imprest_id
// //     console.log(imprestNumber, "imprestNumberimprestNumber");

// //     router.push(`/imprest/edit/${imprestNumber}`)
// //     handleMenuClose()
// //   }


// //   const handleDelete = () => {
// //     console.log('Delete row:', selectedRow)
// //     handleMenuClose()
// //   }

// //   return (
// //     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>

// //       {/* Sidebar */}
// //       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

// //       {/* Main Content */}
// //       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

// //         {/* Header */}
// //         <Header />

// //         {/* Scrollable Content */}
// //         <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
// //           <Box sx={{ p: 3 }}>

// //             <Paper
// //               elevation={0}
// //               sx={{
// //                 p: 3,
// //                 borderRadius: 2,
// //                 boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
// //               }}
// //             >

// //               {/* Gradient Header */}
// //               <Box
// //                 sx={{
// //                   display: 'flex',
// //                   justifyContent: 'space-between',
// //                   alignItems: 'center',
// //                   mb: 3,
// //                   background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
// //                   p: 2.5,
// //                   borderRadius: 1,
// //                   mx: -3,
// //                   mt: -3,
// //                 }}
// //               >
// //                 <Box>
// //                   <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
// //                     Create Imprest
// //                   </Typography>
// //                   <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
// //                     Add new imprest request
// //                   </Typography>
// //                 </Box>

// //                 <Button
// //                   variant="contained"
// //                   sx={{
// //                     bgcolor: 'white',
// //                     color: '#1A1A1A',
// //                     textTransform: 'none',
// //                     fontWeight: 600,
// //                     '&:hover': { bgcolor: '#F5F5F5' },
// //                   }}
// //                   onClick={() => router.push('/imprest/new_reqest')}
// //                 >
// //                   Create Imprest +
// //                 </Button>
// //               </Box>

// //               {/* ================= CONTENT START ================= */}

// //               {/* Select Type */}
// //               <Box sx={{ mb: 3 }}>
// //                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
// //                   Select Type
// //                 </Typography>

// //                 <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
// //                   {requestTypes.map((type, index) => (
// //                     <Button
// //                       key={index}
// //                       variant={selectedType === index ? 'contained' : 'outlined'}
// //                       onClick={() => {
// //                         setSelectedType(index)
// //                         router.push(type.route)
// //                       }}
// //                       sx={{
// //                         textTransform: 'none',
// //                         borderRadius: 1.5,
// //                         px: 2.5,
// //                         py: 0.8,
// //                         fontSize: '0.875rem',
// //                         fontWeight: 500,
// //                         ...(selectedType === index
// //                           ? {
// //                             bgcolor: type.color,
// //                             color: 'white',
// //                             '&:hover': { bgcolor: type.color, opacity: 0.9 },
// //                           }
// //                           : {
// //                             borderColor: type.color,
// //                             color: type.color,
// //                             '&:hover': { bgcolor: `${type.color}10` },
// //                           }),
// //                       }}
// //                     >
// //                       {type.label}
// //                     </Button>
// //                   ))}
// //                 </Box>
// //               </Box>

// //               {/* Filter By */}
// //               <Box sx={{ mb: 3 }}>
// //                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
// //                   Filter By
// //                 </Typography>

// //                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// //                   {/* Year */}
// //                   <TextField
// //                     select
// //                     size="small"
// //                     label="Year"
// //                     value={year}
// //                     onChange={(e) => setYear(e.target.value)}
// //                     sx={{ minWidth: 180 }}
// //                   >
// //                     {years.map((y) => (
// //                       <MenuItem key={y} value={y}>{y}</MenuItem>
// //                     ))}
// //                   </TextField>

// //                   {/* Month */}
// //                   <TextField
// //                     select
// //                     size="small"
// //                     label="Month"
// //                     value={month}
// //                     onChange={(e) => setMonth(e.target.value)}
// //                     sx={{ minWidth: 180 }}
// //                   >
// //                     {months.map((m) => (
// //                       <MenuItem key={m} value={m}>{m}</MenuItem>
// //                     ))}
// //                   </TextField>

// //                   {/* Department */}
// //                   <TextField
// //                     select
// //                     size="small"
// //                     label="Department"
// //                     value={department}
// //                     onChange={(e) => setDepartment(e.target.value)}
// //                     sx={{ minWidth: 200 }}
// //                   >
// //                     {departments.map((d) => (
// //                       <MenuItem key={d} value={d}>{d}</MenuItem>
// //                     ))}
// //                   </TextField>

// //                   {/* Status */}
// //                   <TextField
// //                     select
// //                     size="small"
// //                     label="Status"
// //                     value={status}
// //                     onChange={(e) => setStatus(e.target.value)}
// //                     sx={{ minWidth: 180 }}
// //                   >
// //                     {statuses.map((s) => (
// //                       <MenuItem key={s} value={s}>{s}</MenuItem>
// //                     ))}
// //                   </TextField>

// //                   <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
// //                     <Button variant="outlined">Reset</Button>
// //                     <Button variant="contained" sx={{ bgcolor: '#FF6B35' }}>
// //                       Search
// //                     </Button>
// //                   </Box>
// //                 </Box>
// //               </Box>

// //               {/* Dashboard Table */}
// //               <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
// //                 Dashboard
// //               </Typography>

// //               <TableContainer>
// //                 <Table>
// //                   <TableHead sx={{ bgcolor: '#F9FAFB' }}>
// //                     <TableRow>
// //                       <TableCell>Request No.</TableCell>
// //                       <TableCell>Request Date</TableCell>
// //                       <TableCell>Department</TableCell>
// //                       <TableCell>Requested by</TableCell>
// //                       <TableCell>Status</TableCell>
// //                       <TableCell>Project</TableCell>
// //                       <TableCell>Actions</TableCell>
// //                     </TableRow>
// //                   </TableHead>

// //                   <TableBody>
// //                     {imprestData.map((row, index) => (
// //                       <TableRow key={row.imprest_id}>
// //                         <TableCell>{row.request_no}</TableCell>
// //                         <TableCell>
// //                           {new Date(row.created_on).toLocaleDateString()}
// //                         </TableCell>
// //                         <TableCell>{row.department_name}</TableCell>
// //                         <TableCell>{row.user_requested_name}</TableCell>
// //                         <TableCell> <Chip label={row.status} size="small" sx={{ bgcolor: '#E8F5E9', color: '#4CAF50', fontWeight: 500, fontSize: '0.75rem', }} /> </TableCell>
// //                         <TableCell>{row.project_name}</TableCell>
// //                         <TableCell>
// //                           <IconButton onClick={(e) => handleMenuOpen(e, index)}>
// //                             <MoreVertIcon fontSize="small" />
// //                           </IconButton>
// //                         </TableCell>

// //                       </TableRow>
// //                     ))}
// //                   </TableBody>
// //                 </Table>
// //               </TableContainer>
// //   <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
// //                 <MenuItemComponent onClick={handleView}>
// //                   <ViewIcon sx={{ fontSize: 18, mr: 1 }} />
// //                   View
// //                 </MenuItemComponent>


// //                     <MenuItemComponent onClick={handleEdit}>
// //                       <EditIcon sx={{ fontSize: 18, mr: 1 }} />
// //                       Edit
// //                     </MenuItemComponent>


// //                 <MenuItemComponent onClick={handleDelete} sx={{ color: '#EF5350' }}>
// //                   <DeleteIcon sx={{ fontSize: 18, mr: 1 }} />
// //                   Delete
// //                 </MenuItemComponent>
// //               </Menu>
// //               {/* ================= CONTENT END ================= */}

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
// import axios from 'axios'

// // ─── Types ────────────────────────────────────────────────────────────────────
// interface ImprestRow {
//   imprest_id: number
//   request_no: string
//   user_requested: number        // user ID
//   user_requested_name: string
//   department: number            // dept ID
//   department_name: string
//   project_name: string
//   status: string                // raw: "Pending_HOD", "Approved", etc.
//   status_display: string        // human: "Pending HOD"
//   created_on: string            // ISO: "2026-02-17T07:17:05.461398Z"
// }

// // interface LoggedInUser {
// //   user_id: number
// //   department_id: number
// //   department_name: string
// //   name: string
// // }
// interface LoggedInUser {
//   id: number
//   user_name: string
//   department: string
//   department_id: number

//   role: number
//   role_name: string

//   permissions: {
//     can_create_imprest: boolean
//     can_access_department_documents: boolean
//     can_access_all_documents: boolean
//     can_approve_documents: boolean
//     can_create_payment_transfers: boolean
//   }
// }

// // ─── Constants ────────────────────────────────────────────────────────────────
// const requestTypes = [
//   { label: 'My Request', color: '#FF6B35', key: 'my' },
//   { label: 'Dept Request', color: '#FF6B35', key: 'dept' },
//   { label: 'Pending My Request', color: '#FF9800', key: 'pending-my' },
//   { label: 'Pending Dept Request', color: '#FF9800', key: 'pending-dept' },
//   { label: 'Completed My Request', color: '#4CAF50', key: 'completed-my' },
//   { label: 'Completed Dept Request', color: '#4CAF50', key: 'completed-dept' },
// ]

// const years = ['2024', '2025', '2026']
// const months = ['January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December']

// // Statuses considered "Pending"
// const PENDING_STATUSES = ['Pending_HOD', 'Pending_Finance', 'Pending_MD', 'On_Hold', 'Verifying']
// // Statuses considered "Completed"
// const COMPLETED_STATUSES = ['Approved', 'Rejected']

// // Chip colour per status
// const statusChipStyle = (status: string) => {
//   if (COMPLETED_STATUSES.includes(status) && status === 'Approved')
//     return { bgcolor: '#E8F5E9', color: '#4CAF50' }
//   if (status === 'Rejected')
//     return { bgcolor: '#FFEBEE', color: '#EF5350' }
//   if (PENDING_STATUSES.includes(status))
//     return { bgcolor: '#FFF3E0', color: '#FF9800' }
//   return { bgcolor: '#F3E5F5', color: '#8E24AA' }
// }

// // ─── Role-based filter helper ─────────────────────────────────────────────────
// const applyTypeFilter = (
//   data: ImprestRow[],
//   typeKey: string,
//   user: LoggedInUser
// ): ImprestRow[] => {
//   switch (typeKey) {
//     case 'my':
//       return data.filter((r) => r.user_requested === user.id)

//     case 'dept':

//       if (!user.permissions.can_access_department_documents) {
//         return []
//       }

//       return data.filter(
//         (r) => r.department_name === user.department
//       )

//     case 'pending-my':
//       return data.filter(
//         (r) => r.user_requested === user.id && PENDING_STATUSES.includes(r.status)
//       )

//     case 'pending-dept':
//       return data.filter(
//         (r) => r.department_name === user.department &&
//           PENDING_STATUSES.includes(r.status)
//       )

//     case 'completed-my':
//       return data.filter(
//         (r) => r.user_requested === user.id &&
//           COMPLETED_STATUSES.includes(r.status)
//       )

//     case 'completed-dept':
//       return data.filter(
//         (r) => r.department_name === user.department &&
//           COMPLETED_STATUSES.includes(r.status)
//       )

//     default:
//       return data
//   }
// }

// // ─── Component ────────────────────────────────────────────────────────────────
// export default function ImprestRequestPage() {
//   const router = useRouter()

//   // ── State ──────────────────────────────────────────────────────────────────
//   const [imprestData, setImprestData] = useState<ImprestRow[]>([])
//   const [filteredData, setFilteredData] = useState<ImprestRow[]>([])
//   const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null)

//   const [selectedMenu, setSelectedMenu] = useState('Imprest')
//   const [selectedType, setSelectedType] = useState(0)   // index into requestTypes

//   // Extra filters (year / month / department)
//   const [year, setYear] = useState('2026')
//   const [month, setMonth] = useState('')
//   const [department, setDepartment] = useState('')

//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
//   const [selectedRow, setSelectedRow] = useState<number | null>(null)

//   // ── Fetch logged-in user from localStorage / session ─────────────────────
//   useEffect(() => {
//     const stored = localStorage.getItem('user')


//     if (stored) {
//       const user = JSON.parse(stored)

//       setLoggedInUser({
//         id: user.id,
//         user_name: user.user_name,
//         department: user.department,
//         department_id: user.department_id,

//         role: user.role,
//         role_name: user.role_details.role_name,

//         permissions: user.permissions
//       })
//     }
//   }, [])

//   // ── Fetch all imprest data ─────────────────────────────────────────────────
//   useEffect(() => {
//     fetchImprestData()
//   }, [])

//   const fetchImprestData = async () => {
//     try {
//       const res = await axios.get('http://localhost:8000/api/v1/imprest/')
//       setImprestData(res.data)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   // ── Re-apply filters whenever raw data, type, or user changes ─────────────
//   useEffect(() => {
//     if (!loggedInUser) return
//     runFilters(selectedType, year, month, department, imprestData, loggedInUser)
//   }, [imprestData, loggedInUser])

//   // ── Core filter function ───────────────────────────────────────────────────
//   const runFilters = (
//     typeIndex: number,
//     yr: string,
//     mn: string,
//     dept: string,
//     data: ImprestRow[],
//     user: LoggedInUser
//   ) => {
//     // 1. Role-based type filter
//     let result = applyTypeFilter(data, requestTypes[typeIndex].key, user)

//     // 2. Year
//     if (yr) {
//       result = result.filter(
//         (r) => new Date(r.created_on).getFullYear().toString() === yr
//       )
//     }

//     // 3. Month
//     if (mn) {
//       const monthIndex = months.indexOf(mn)
//       result = result.filter(
//         (r) => new Date(r.created_on).getMonth() === monthIndex
//       )
//     }

//     // 4. Department (extra sub-filter on top of type)
//     if (dept) {
//       result = result.filter(
//         (r) => r.department_name.toLowerCase() === dept.toLowerCase()
//       )
//     }

//     setFilteredData(result)
//   }

//   const applyFilters = () => {
//     if (!loggedInUser) return
//     runFilters(selectedType, year, month, department, imprestData, loggedInUser)
//   }

//   const resetFilters = () => {
//     setYear('2026')
//     setMonth('')
//     setDepartment('')
//     if (loggedInUser) {
//       runFilters(selectedType, '2026', '', '', imprestData, loggedInUser)
//     }
//   }

//   // ── Type button click ──────────────────────────────────────────────────────
//   const handleTypeChange = (index: number) => {
//     setSelectedType(index)
//     if (loggedInUser) {
//       runFilters(index, year, month, department, imprestData, loggedInUser)
//     }
//   }

//   // ── Menu helpers ───────────────────────────────────────────────────────────
//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
//     setAnchorEl(event.currentTarget)
//     setSelectedRow(index)
//   }

//   const handleMenuClose = () => {
//     setAnchorEl(null)
//     setSelectedRow(null)
//   }

//   const handleView = () => {
//     if (selectedRow === null) return
//     const id = filteredData[selectedRow].imprest_id
//     router.push(`/imprest/view/${id}`)
//     handleMenuClose()
//   }

//   // const handleEdit = () => {
//   //   if (selectedRow === null) return
//   //   const id = filteredData[selectedRow].imprest_id
//   //   router.push(`/imprest/edit/${id}`)
//   //   handleMenuClose()
//   // }
//   const handleEdit = () => {
//     if (selectedRow === null) return
//     const row = filteredData[selectedRow]

//     if (row.status !== "Draft") {
//       alert("Only Draft request can be edited")
//       return
//     }

//     router.push(`/imprest/edit/${row.imprest_id}`)
//     handleMenuClose()
//   }

//   const handleDelete = () => {
//     console.log('Delete row:', selectedRow)
//     handleMenuClose()
//   }

//   console.log(loggedInUser);


//   // Unique departments from API data for dropdown
//   const departmentOptions = Array.from(new Set(imprestData.map((r) => r.department_name)))

//   // ── Render ─────────────────────────────────────────────────────────────────
//   return (
//     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>

//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
//         <Header />

//         <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
//           <Box sx={{ p: 3 }}>

//             <Paper elevation={0} sx={{ p: 3, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>

//               {/* ── Gradient Header ── */}
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
//                     Imprest Requests
//                   </Typography>
//                   <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
//                     {loggedInUser ? `Logged in as: ${loggedInUser.user_name} — ${loggedInUser.department}` : 'Loading...'}
//                   </Typography>
//                 </Box>
//                 {loggedInUser?.permissions?.can_create_imprest && (
//                   <Button
//                         sx={{
//                     bgcolor: 'white',
//                     color: '#1A1A1A',
//                     textTransform: 'none',
//                     fontWeight: 600,
//                     '&:hover': { bgcolor: '#F5F5F5' },
//                   }}
//                     onClick={() => router.push('/imprest/new_reqest')}
//                   >
//                     Create Imprest +
//                   </Button>
//                 )}
//               </Box>

//               {/* ── Select Type ── */}
//               <Box sx={{ mb: 3 }}>
//                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
//                   Select Type
//                 </Typography>
//                 <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//                   {requestTypes.map((type, index) => (
//                     <Button
//                       key={index}
//                       variant={selectedType === index ? 'contained' : 'outlined'}
//                       onClick={() => handleTypeChange(index)}
//                       sx={{
//                         textTransform: 'none',
//                         borderRadius: 1.5,
//                         px: 2.5,
//                         py: 0.8,
//                         fontSize: '0.875rem',
//                         fontWeight: 500,
//                         ...(selectedType === index
//                           ? { bgcolor: type.color, color: 'white', '&:hover': { bgcolor: type.color, opacity: 0.9 } }
//                           : { borderColor: type.color, color: type.color, '&:hover': { bgcolor: `${type.color}10` } }),
//                       }}
//                     >
//                       {type.label}
//                     </Button>
//                   ))}
//                 </Box>
//               </Box>

//               {/* ── Filter By ── */}
//               <Box sx={{ mb: 3 }}>
//                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
//                   Filter By
//                 </Typography>

//                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>

//                   {/* Year */}
//                   <TextField
//                     select size="small" label="Year" value={year}
//                     onChange={(e) => setYear(e.target.value)}
//                     sx={{ minWidth: 140 }}
//                   >
//                     {years.map((y) => <MenuItem key={y} value={y}>{y}</MenuItem>)}
//                   </TextField>

//                   {/* Month */}
//                   <TextField
//                     select size="small" label="Month" value={month}
//                     onChange={(e) => setMonth(e.target.value)}
//                     sx={{ minWidth: 150 }}
//                   >
//                     <MenuItem value="">All Months</MenuItem>
//                     {months.map((m) => <MenuItem key={m} value={m}>{m}</MenuItem>)}
//                   </TextField>

//                   {/* Department — dynamically built from API data */}
//                   <TextField
//                     select size="small" label="Department" value={department}
//                     onChange={(e) => setDepartment(e.target.value)}
//                     sx={{ minWidth: 170 }}
//                   >
//                     <MenuItem value="">All Departments</MenuItem>
//                     {departmentOptions.map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}
//                   </TextField>

//                   <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//                     <Button variant="outlined" onClick={resetFilters}>Reset</Button>
//                     <Button
//                       variant="contained"
//                       sx={{ bgcolor: '#FF6B35', '&:hover': { bgcolor: '#e55a25' } }}
//                       onClick={applyFilters}
//                     >
//                       Search
//                     </Button>
//                   </Box>
//                 </Box>

//                 {/* Result count */}
//                 <Typography variant="caption" sx={{ color: '#888', mt: 1, display: 'block' }}>
//                   Showing {filteredData.length} of {imprestData.length} records
//                   {loggedInUser && (
//                     <> &nbsp;·&nbsp; Type: <strong>{requestTypes[selectedType].label}</strong></>
//                   )}
//                 </Typography>
//               </Box>

//               {/* ── Table ── */}
//               <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
//                 Dashboard
//               </Typography>

//               <TableContainer>
//                 <Table>
//                   <TableHead sx={{ bgcolor: '#F9FAFB' }}>
//                     <TableRow>
//                       <TableCell sx={{ fontWeight: 600 }}>Request No.</TableCell>
//                       <TableCell sx={{ fontWeight: 600 }}>Request Date</TableCell>
//                       <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
//                       <TableCell sx={{ fontWeight: 600 }}>Requested By</TableCell>
//                       <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
//                       <TableCell sx={{ fontWeight: 600 }}>Project</TableCell>
//                       <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
//                     </TableRow>
//                   </TableHead>

//                   <TableBody>
//                     {filteredData.length === 0 ? (
//                       <TableRow>
//                         <TableCell colSpan={7} align="center" sx={{ py: 4, color: '#888' }}>
//                           No records found for the selected filters.
//                         </TableCell>
//                       </TableRow>
//                     ) : (
//                       filteredData.map((row, index) => (
//                         <TableRow key={row.imprest_id} hover>
//                           <TableCell>{row.request_no}</TableCell>
//                           <TableCell>
//                             {new Date(row.created_on).toLocaleDateString('en-GB', {
//                               day: '2-digit', month: 'short', year: 'numeric',
//                             })}
//                           </TableCell>
//                           <TableCell>{row.department_name}</TableCell>
//                           <TableCell>{row.user_requested_name}</TableCell>
//                           <TableCell>
//                             <Chip
//                               label={row.status_display}
//                               size="small"
//                               sx={{ ...statusChipStyle(row.status), fontWeight: 500, fontSize: '0.75rem' }}
//                             />
//                           </TableCell>
//                           <TableCell>{row.project_name}</TableCell>
//                           <TableCell>
//                             <IconButton onClick={(e) => handleMenuOpen(e, index)}>
//                               <MoreVertIcon fontSize="small" />
//                             </IconButton>
//                           </TableCell>
//                         </TableRow>
//                       ))
//                     )}
//                   </TableBody>
//                 </Table>
//               </TableContainer>

//               {/* ── Action Menu ── */}
//               <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//                 <MenuItemComponent onClick={handleView}>
//                   <ViewIcon sx={{ fontSize: 18, mr: 1 }} /> View
//                 </MenuItemComponent>
//                 <MenuItemComponent onClick={handleEdit}>
//                   <EditIcon sx={{ fontSize: 18, mr: 1 }} /> Edit
//                 </MenuItemComponent>
//                 <MenuItemComponent onClick={handleDelete} sx={{ color: '#EF5350' }}>
//                   <DeleteIcon sx={{ fontSize: 18, mr: 1 }} /> Delete
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
// import axios from 'axios'

// // ─── Types ────────────────────────────────────────────────────────────────────
// interface ImprestRow {
//   imprest_id: number
//   request_no: string
//   user_requested: number
//   user_requested_name: string
//   department: number
//   department_name: string
//   project_name: string
//   status: string           // raw: "Draft", "Submitted", "HODApproved", etc.
//   status_display: string   // human readable
//   created_on: string       // ISO
// }

// interface LoggedInUser {
//   id: number
//   user_name: string
//   department: string
//   department_id: number
//   role: number
//   role_name: string
//   permissions: {
//     can_create_imprest: boolean
//     can_access_department_documents: boolean
//     can_access_all_documents: boolean
//     can_approve_documents: boolean
//     can_create_payment_transfers: boolean
//   }
// }

// // ─── Constants — Docs-aligned statuses ────────────────────────────────────────
// // Imprest: Draft, Submitted, HODApproved, HODRejected, FinanceApproved, FinanceRejected, Completed, Cancelled

// const PENDING_STATUSES = ['Submitted', 'HODApproved']
// // Submitted = waiting for HOD; HODApproved = waiting for Finance

// const COMPLETED_STATUSES = ['FinanceApproved', 'Completed']
// // FinanceApproved means fully approved; Completed = paid/closed

// const REJECTED_STATUSES = ['HODRejected', 'FinanceRejected', 'Cancelled']

// const requestTypes = [
//   { label: 'My Requests',          color: '#FF6B35', key: 'my' },
//   { label: 'Dept Requests',        color: '#FF6B35', key: 'dept' },
//   { label: 'Pending My',           color: '#FF9800', key: 'pending-my' },
//   { label: 'Pending Dept',         color: '#FF9800', key: 'pending-dept' },
//   { label: 'Completed My',         color: '#4CAF50', key: 'completed-my' },
//   { label: 'Completed Dept',       color: '#4CAF50', key: 'completed-dept' },
// ]

// const years   = ['2024', '2025', '2026']
// const months  = ['January','February','March','April','May','June',
//                  'July','August','September','October','November','December']

// // ─── Status chip styling ──────────────────────────────────────────────────────
// const statusChipStyle = (status: string) => {
//   if (status === 'Draft')
//     return { bgcolor: '#F3F4F6', color: '#6B7280' }
//   if (status === 'Submitted')
//     return { bgcolor: '#EFF6FF', color: '#2563EB' }
//   if (status === 'HODApproved')
//     return { bgcolor: '#FFF3E0', color: '#FF9800' }
//   if (status === 'HODRejected' || status === 'FinanceRejected')
//     return { bgcolor: '#FFEBEE', color: '#EF5350' }
//   if (status === 'FinanceApproved')
//     return { bgcolor: '#E8F5E9', color: '#4CAF50' }
//   if (status === 'Completed')
//     return { bgcolor: '#E3F2FD', color: '#1976D2' }
//   if (status === 'Cancelled')
//     return { bgcolor: '#FFEBEE', color: '#9E9E9E' }
//   return { bgcolor: '#F3E5F5', color: '#8E24AA' }
// }

// // ─── Role-based filter ────────────────────────────────────────────────────────
// const applyTypeFilter = (
//   data: ImprestRow[],
//   typeKey: string,
//   user: LoggedInUser
// ): ImprestRow[] => {
//   switch (typeKey) {
//     case 'my':
//       return data.filter((r) => r.user_requested === user.id)

//     case 'dept':
//       if (!user.permissions.can_access_department_documents) return []
//       return data.filter((r) => r.department_name === user.department)

//     case 'pending-my':
//       return data.filter(
//         (r) => r.user_requested === user.id && PENDING_STATUSES.includes(r.status)
//       )

//     case 'pending-dept':
//       if (!user.permissions.can_access_department_documents) return []
//       return data.filter(
//         (r) => r.department_name === user.department && PENDING_STATUSES.includes(r.status)
//       )

//     case 'completed-my':
//       return data.filter(
//         (r) => r.user_requested === user.id && COMPLETED_STATUSES.includes(r.status)
//       )

//     case 'completed-dept':
//       if (!user.permissions.can_access_department_documents) return []
//       return data.filter(
//         (r) => r.department_name === user.department && COMPLETED_STATUSES.includes(r.status)
//       )

//     default:
//       return data
//   }
// }

// // ─── Component ────────────────────────────────────────────────────────────────
// export default function ImprestRequestPage() {
//   const router = useRouter()

//   const [imprestData,  setImprestData]  = useState<ImprestRow[]>([])
//   const [filteredData, setFilteredData] = useState<ImprestRow[]>([])
//   const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null)

//   const [selectedMenu, setSelectedMenu] = useState('Imprest')
//   const [selectedType, setSelectedType] = useState(0)

//   const [year,       setYear]       = useState('2026')
//   const [month,      setMonth]      = useState('')
//   const [department, setDepartment] = useState('')

//   const [anchorEl,   setAnchorEl]   = useState<null | HTMLElement>(null)
//   const [selectedRow, setSelectedRow] = useState<number | null>(null)

//   // ── Load user from localStorage ───────────────────────────────────────────
//   useEffect(() => {
//     const stored = localStorage.getItem('user')
//     if (stored) {
//       const u = JSON.parse(stored)
//       setLoggedInUser({
//         id:            u.id,
//         user_name:     u.user_name,
//         department:    u.department,
//         department_id: u.department_id,
//         role:          u.role,
//         role_name:     u.role_details?.role_name || '',
//         permissions:   u.permissions,
//       })
//     }
//   }, [])

//   // ── Fetch imprest data ────────────────────────────────────────────────────
//   useEffect(() => {
//     fetchImprestData()
//   }, [])

//   const fetchImprestData = async () => {
//     try {
//       const res = await axios.get('http://localhost:8000/api/v1/imprest/')
//       setImprestData(res.data)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   // ── Re-apply filters when data or user changes ────────────────────────────
//   useEffect(() => {
//     if (!loggedInUser) return
//     runFilters(selectedType, year, month, department, imprestData, loggedInUser)
//   }, [imprestData, loggedInUser])

//   // ── Core filter ───────────────────────────────────────────────────────────
//   const runFilters = (
//     typeIndex: number,
//     yr: string,
//     mn: string,
//     dept: string,
//     data: ImprestRow[],
//     user: LoggedInUser
//   ) => {
//     let result = applyTypeFilter(data, requestTypes[typeIndex].key, user)

//     if (yr) {
//       result = result.filter(
//         (r) => new Date(r.created_on).getFullYear().toString() === yr
//       )
//     }
//     if (mn) {
//       const mi = months.indexOf(mn)
//       result = result.filter((r) => new Date(r.created_on).getMonth() === mi)
//     }
//     if (dept) {
//       result = result.filter(
//         (r) => r.department_name.toLowerCase() === dept.toLowerCase()
//       )
//     }

//     setFilteredData(result)
//   }

//   const applyFilters = () => {
//     if (!loggedInUser) return
//     runFilters(selectedType, year, month, department, imprestData, loggedInUser)
//   }

//   const resetFilters = () => {
//     setYear('2026'); setMonth(''); setDepartment('')
//     if (loggedInUser)
//       runFilters(selectedType, '2026', '', '', imprestData, loggedInUser)
//   }

//   const handleTypeChange = (index: number) => {
//     setSelectedType(index)
//     if (loggedInUser)
//       runFilters(index, year, month, department, imprestData, loggedInUser)
//   }

//   // ── Action menu ───────────────────────────────────────────────────────────
//   const handleMenuOpen = (e: React.MouseEvent<HTMLElement>, index: number) => {
//     setAnchorEl(e.currentTarget)
//     setSelectedRow(index)
//   }
//   const handleMenuClose = () => { setAnchorEl(null); setSelectedRow(null) }

//   const handleView = () => {
//     if (selectedRow === null) return
//     router.push(`/imprest/view/${filteredData[selectedRow].imprest_id}`)
//     handleMenuClose()
//   }

//   const handleEdit = () => {
//     if (selectedRow === null) return
//     const row = filteredData[selectedRow]

//     // Only Draft can be edited by the requester
//     if (row.status !== 'Draft') {
//       alert('Only Draft requests can be edited.')
//       handleMenuClose()
//       return
//     }
//     router.push(`/imprest/edit/${row.imprest_id}`)
//     handleMenuClose()
//   }

//   const handleDelete = async () => {
//     if (selectedRow === null) return
//     const row = filteredData[selectedRow]

//     // Only Draft or Rejected can be deleted
//     if (!['Draft', 'HODRejected', 'FinanceRejected', 'Cancelled'].includes(row.status)) {
//       alert('Only Draft or Rejected requests can be deleted.')
//       handleMenuClose()
//       return
//     }

//     if (!window.confirm('Are you sure you want to delete this request?')) {
//       handleMenuClose()
//       return
//     }

//     try {
//       await axios.delete(`http://localhost:8000/api/v1/imprest/${row.imprest_id}/`)
//       fetchImprestData()
//     } catch (err) {
//       console.error(err)
//       alert('Failed to delete request.')
//     }
//     handleMenuClose()
//   }

//   const departmentOptions = Array.from(new Set(imprestData.map((r) => r.department_name)))

//   // ─── Render ────────────────────────────────────────────────────────────────
//   return (
//     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
//         <Header />

//         <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
//           <Box sx={{ p: 3 }}>
//             <Paper elevation={0} sx={{ p: 3, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>

//               {/* ── Gradient Header ── */}
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
//                     Imprest Requests
//                   </Typography>
//                   <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
//                     {loggedInUser
//                       ? `${loggedInUser.user_name} — ${loggedInUser.department} — ${loggedInUser.role_name}`
//                       : 'Loading...'}
//                   </Typography>
//                 </Box>

//                 {/* Only roles that can create imprest see this button */}
//                 {loggedInUser?.permissions?.can_create_imprest && (
//                   <Button
//                     sx={{
//                       bgcolor: 'white',
//                       color: '#1A1A1A',
//                       textTransform: 'none',
//                       fontWeight: 600,
//                       '&:hover': { bgcolor: '#F5F5F5' },
//                     }}
//                     onClick={() => router.push('/imprest/new_reqest')}
//                   >
//                     Create Imprest +
//                   </Button>
//                 )}
//               </Box>

//               {/* ── Select Type ── */}
//               <Box sx={{ mb: 3 }}>
//                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
//                   Select Type
//                 </Typography>
//                 <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//                   {requestTypes.map((type, index) => (
//                     <Button
//                       key={index}
//                       variant={selectedType === index ? 'contained' : 'outlined'}
//                       onClick={() => handleTypeChange(index)}
//                       sx={{
//                         textTransform: 'none',
//                         borderRadius: 1.5,
//                         px: 2.5,
//                         py: 0.8,
//                         fontSize: '0.875rem',
//                         fontWeight: 500,
//                         ...(selectedType === index
//                           ? {
//                               bgcolor: type.color,
//                               color: 'white',
//                               '&:hover': { bgcolor: type.color, opacity: 0.9 },
//                             }
//                           : {
//                               borderColor: type.color,
//                               color: type.color,
//                               '&:hover': { bgcolor: `${type.color}10` },
//                             }),
//                       }}
//                     >
//                       {type.label}
//                     </Button>
//                   ))}
//                 </Box>
//               </Box>

//               {/* ── Filters ── */}
//               <Box sx={{ mb: 3 }}>
//                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
//                   Filter By
//                 </Typography>

//                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
//                   <TextField
//                     select size="small" label="Year" value={year}
//                     onChange={(e) => setYear(e.target.value)}
//                     sx={{ minWidth: 140 }}
//                   >
//                     {years.map((y) => <MenuItem key={y} value={y}>{y}</MenuItem>)}
//                   </TextField>

//                   <TextField
//                     select size="small" label="Month" value={month}
//                     onChange={(e) => setMonth(e.target.value)}
//                     sx={{ minWidth: 150 }}
//                   >
//                     <MenuItem value="">All Months</MenuItem>
//                     {months.map((m) => <MenuItem key={m} value={m}>{m}</MenuItem>)}
//                   </TextField>

//                   <TextField
//                     select size="small" label="Department" value={department}
//                     onChange={(e) => setDepartment(e.target.value)}
//                     sx={{ minWidth: 170 }}
//                   >
//                     <MenuItem value="">All Departments</MenuItem>
//                     {departmentOptions.map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}
//                   </TextField>

//                   <Box sx={{ display: 'flex', gap: 1 }}>
//                     <Button variant="outlined" onClick={resetFilters} sx={{ textTransform: 'none' }}>
//                       Reset
//                     </Button>
//                     <Button
//                       variant="contained"
//                       sx={{ bgcolor: '#FF6B35', '&:hover': { bgcolor: '#e55a25' }, textTransform: 'none' }}
//                       onClick={applyFilters}
//                     >
//                       Search
//                     </Button>
//                   </Box>
//                 </Box>

//                 <Typography variant="caption" sx={{ color: '#888', mt: 1, display: 'block' }}>
//                   Showing {filteredData.length} of {imprestData.length} records
//                   {loggedInUser && (
//                     <> &nbsp;·&nbsp; Type: <strong>{requestTypes[selectedType].label}</strong></>
//                   )}
//                 </Typography>
//               </Box>

//               {/* ── Table ── */}
//               <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
//                 Dashboard
//               </Typography>

//               <TableContainer>
//                 <Table>
//                   <TableHead sx={{ bgcolor: '#F9FAFB' }}>
//                     <TableRow>
//                       <TableCell sx={{ fontWeight: 600 }}>Request No.</TableCell>
//                       <TableCell sx={{ fontWeight: 600 }}>Request Date</TableCell>
//                       <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
//                       <TableCell sx={{ fontWeight: 600 }}>Requested By</TableCell>
//                       <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
//                       <TableCell sx={{ fontWeight: 600 }}>Project</TableCell>
//                       <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
//                     </TableRow>
//                   </TableHead>

//                   <TableBody>
//                     {filteredData.length === 0 ? (
//                       <TableRow>
//                         <TableCell colSpan={7} align="center" sx={{ py: 6, color: '#888' }}>
//                           No records found for the selected filters.
//                         </TableCell>
//                       </TableRow>
//                     ) : (
//                       filteredData.map((row, index) => (
//                         <TableRow key={row.imprest_id} hover>
//                           <TableCell sx={{ fontWeight: 500 }}>{row.request_no}</TableCell>
//                           <TableCell>
//                             {new Date(row.created_on).toLocaleDateString('en-GB', {
//                               day: '2-digit', month: 'short', year: 'numeric',
//                             })}
//                           </TableCell>
//                           <TableCell>{row.department_name}</TableCell>
//                           <TableCell>{row.user_requested_name}</TableCell>
//                           <TableCell>
//                             <Chip
//                               label={row.status_display || row.status}
//                               size="small"
//                               sx={{
//                                 ...statusChipStyle(row.status),
//                                 fontWeight: 500,
//                                 fontSize: '0.75rem',
//                               }}
//                             />
//                           </TableCell>
//                           <TableCell>{row.project_name}</TableCell>
//                           <TableCell>
//                             <IconButton size="small" onClick={(e) => handleMenuOpen(e, index)}>
//                               <MoreVertIcon fontSize="small" />
//                             </IconButton>
//                           </TableCell>
//                         </TableRow>
//                       ))
//                     )}
//                   </TableBody>
//                 </Table>
//               </TableContainer>

//               {/* ── Action Menu ── */}
//               <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//                 <MenuItemComponent onClick={handleView}>
//                   <ViewIcon sx={{ fontSize: 18, mr: 1 }} /> View
//                 </MenuItemComponent>
//                 <MenuItemComponent onClick={handleEdit}>
//                   <EditIcon sx={{ fontSize: 18, mr: 1 }} /> Edit
//                 </MenuItemComponent>
//                 <MenuItemComponent onClick={handleDelete} sx={{ color: '#EF5350' }}>
//                   <DeleteIcon sx={{ fontSize: 18, mr: 1 }} /> Delete
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
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material'
import Sidebar from '../main/Sidebar'
import Header from '../main/Header'
import { useRouter } from 'next/navigation'
import axios from 'axios'

// ─── Types ────────────────────────────────────────────────────────────────────
interface ImprestRow {
  imprest_id: number
  request_no: string
  user_requested: number
  user_requested_name: string
  department: number
  department_name: string
  project_name: string
  status: string
  status_display: string
  created_on: string
}

interface LoggedInUser {
  id: number
  user_name: string
  department: string
  department_id: number
  role_name: string
  permissions: {
    can_create_imprest: boolean
    can_access_department_documents: boolean
    can_access_all_documents: boolean
    can_approve_documents: boolean
    can_create_payment_transfers: boolean
  }
}

// ─── Docs-aligned statuses ────────────────────────────────────────────────────
const PENDING_STATUSES   = ['Submitted', 'HODApproved']
const COMPLETED_STATUSES = ['FinanceApproved', 'Completed']

// ─── Role helpers ─────────────────────────────────────────────────────────────
const isHODRole      = (r: string) => ['Manager', 'Director', 'Admin'].includes(r)
const isFinanceRole  = (r: string) => ['Finance Manager', 'Admin'].includes(r)
const isAdminRole    = (r: string) => r === 'Admin'
const isViewerRole   = (r: string) => r === 'Viewer'

// ─── Request type tabs — role ke hisab se ────────────────────────────────────
// Docs:
//   User          → sirf apne requests
//   Manager       → dept documents
//   Director      → sab documents
//   Finance Mgr   → dept + apne
//   Admin         → sab
//   Viewer        → sirf apne (view only)
const ALL_REQUEST_TYPES = [
  { label: 'My Requests',    color: '#FF6B35', key: 'my',           roles: ['User','Finance','Finance Manager','Manager','Director','Admin','Viewer'] },
  { label: 'Dept Requests',  color: '#FF6B35', key: 'dept',         roles: ['Manager','Director','Admin','Finance Manager'] },
  { label: 'Pending My',     color: '#FF9800', key: 'pending-my',   roles: ['User','Finance','Finance Manager','Manager','Director','Admin'] },
  { label: 'Pending Dept',   color: '#FF9800', key: 'pending-dept', roles: ['Manager','Director','Admin','Finance Manager'] },
  { label: 'Completed My',   color: '#4CAF50', key: 'completed-my', roles: ['User','Finance','Finance Manager','Manager','Director','Admin','Viewer'] },
  { label: 'Completed Dept', color: '#4CAF50', key: 'completed-dept', roles: ['Manager','Director','Admin','Finance Manager'] },
]

const years  = ['2024', '2025', '2026']
const months = ['January','February','March','April','May','June',
                'July','August','September','October','November','December']

// ─── Status chip styling ──────────────────────────────────────────────────────
const statusChipStyle = (status: string) => {
  switch (status) {
    case 'Draft':           return { bgcolor: '#F3F4F6', color: '#6B7280' }
    case 'Submitted':       return { bgcolor: '#EFF6FF', color: '#2563EB' }
    case 'HODApproved':     return { bgcolor: '#FFF3E0', color: '#FF9800' }
    case 'HODRejected':     return { bgcolor: '#FFEBEE', color: '#EF5350' }
    case 'FinanceApproved': return { bgcolor: '#E8F5E9', color: '#4CAF50' }
    case 'FinanceRejected': return { bgcolor: '#FFEBEE', color: '#EF5350' }
    case 'Completed':       return { bgcolor: '#E3F2FD', color: '#1976D2' }
    case 'Cancelled':       return { bgcolor: '#F3F4F6', color: '#9E9E9E' }
    default:                return { bgcolor: '#F3E5F5', color: '#8E24AA' }
  }
}

// ─── Role + Status based action permissions ───────────────────────────────────
// Docs workflow:
//   Draft        → owner/Admin edit kar sakta hai, owner/Admin delete kar sakta hai
//   Submitted    → HOD (Manager/Director/Admin) edit page se approve/reject karta hai
//   HODApproved  → Finance Manager/Admin edit page se approve/reject karta hai
//   Baaki sab    → sirf View

const canEdit = (row: ImprestRow, user: LoggedInUser): boolean => {
  if (isViewerRole(user.role_name)) return false
  if (row.status === 'Draft')       return row.user_requested === user.id || isAdminRole(user.role_name)
  if (row.status === 'Submitted')   return isHODRole(user.role_name)
  if (row.status === 'HODApproved') return isFinanceRole(user.role_name)
  return false
}

const canDelete = (row: ImprestRow, user: LoggedInUser): boolean => {
  if (isViewerRole(user.role_name)) return false
  const deletable = ['Draft', 'HODRejected', 'FinanceRejected', 'Cancelled']
  return deletable.includes(row.status) &&
    (row.user_requested === user.id || isAdminRole(user.role_name))
}

const getEditLabel = (status: string): string => {
  if (status === 'Submitted')   return 'HOD Review'
  if (status === 'HODApproved') return 'Finance Review'
  return 'Edit'
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ImprestRequestPage() {
  const router = useRouter()

  const [imprestData,  setImprestData]  = useState<ImprestRow[]>([])
  const [filteredData, setFilteredData] = useState<ImprestRow[]>([])
  const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null)

  const [selectedMenu, setSelectedMenu] = useState('Imprest')
  const [selectedType, setSelectedType] = useState(0)

  const [year,       setYear]       = useState('2026')
  const [month,      setMonth]      = useState('')
  const [department, setDepartment] = useState('')

  const [anchorEl,    setAnchorEl]    = useState<null | HTMLElement>(null)
  const [selectedRow, setSelectedRow] = useState<ImprestRow | null>(null)

  // ── Load user from localStorage ───────────────────────────────────────────
  // localStorage structure from your API:
  // { id, user_name, department: "IT", department_id,
  //   department_role: "Admin",
  //   role_details: { role_name: "Admin" },
  //   permissions: { can_create_imprest, ... } }
  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (stored) {
      const u = JSON.parse(stored)
      setLoggedInUser({
        id:            u.id,
        user_name:     u.user_name,
        department:    u.department,
        department_id: u.department_id,
        // role_details.role_name ya department_role — dono try karo
        role_name:     u.role_details?.role_name || u.department_role || '',
        permissions:   u.permissions,
      })
    }
  }, [])

  // ── Fetch imprest data ────────────────────────────────────────────────────
  useEffect(() => { fetchImprestData() }, [])

  const fetchImprestData = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/imprest/')
      setImprestData(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  // ── Visible tabs based on role ────────────────────────────────────────────
  const visibleTypes = loggedInUser
    ? ALL_REQUEST_TYPES.filter((t) => t.roles.includes(loggedInUser.role_name))
    : []

  // ── Re-apply filters ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!loggedInUser) return
    runFilters(selectedType, year, month, department, imprestData, loggedInUser)
  }, [imprestData, loggedInUser])

  const runFilters = (
    typeIndex: number,
    yr: string,
    mn: string,
    dept: string,
    data: ImprestRow[],
    user: LoggedInUser
  ) => {
    const typeKey = visibleTypes[typeIndex]?.key || 'my'
    let result = (() => {
      switch (typeKey) {
        case 'my':           return data.filter((r) => r.user_requested === user.id)
        case 'dept':         return data.filter((r) => r.department_name === user.department)
        case 'pending-my':   return data.filter((r) => r.user_requested === user.id && PENDING_STATUSES.includes(r.status))
        case 'pending-dept': return data.filter((r) => r.department_name === user.department && PENDING_STATUSES.includes(r.status))
        case 'completed-my': return data.filter((r) => r.user_requested === user.id && COMPLETED_STATUSES.includes(r.status))
        case 'completed-dept': return data.filter((r) => r.department_name === user.department && COMPLETED_STATUSES.includes(r.status))
        default: return data
      }
    })()

    if (yr) result = result.filter((r) => new Date(r.created_on).getFullYear().toString() === yr)
    if (mn) result = result.filter((r) => new Date(r.created_on).getMonth() === months.indexOf(mn))
    if (dept) result = result.filter((r) => r.department_name.toLowerCase() === dept.toLowerCase())

    setFilteredData(result)
  }

  const applyFilters = () => {
    if (!loggedInUser) return
    runFilters(selectedType, year, month, department, imprestData, loggedInUser)
  }

  const resetFilters = () => {
    setYear('2026'); setMonth(''); setDepartment('')
    if (loggedInUser) runFilters(selectedType, '2026', '', '', imprestData, loggedInUser)
  }

  const handleTypeChange = (index: number) => {
    setSelectedType(index)
    if (loggedInUser) runFilters(index, year, month, department, imprestData, loggedInUser)
  }

  // ── Action menu ───────────────────────────────────────────────────────────
  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>, row: ImprestRow) => {
    setAnchorEl(e.currentTarget)
    setSelectedRow(row)
  }
  const handleMenuClose = () => { setAnchorEl(null); setSelectedRow(null) }

  const handleView = () => {
    if (!selectedRow) return
    router.push(`/imprest/view/${selectedRow.imprest_id}`)
    handleMenuClose()
  }

  const handleEdit = () => {
    if (!selectedRow || !loggedInUser) return
    router.push(`/imprest/edit/${selectedRow.imprest_id}`)
    handleMenuClose()
  }
  const handleCreateClick = () => {
  const activeImprest = imprestData.find(
    (r) =>
      r.user_requested === loggedInUser?.id &&
      !['Completed', 'Cancelled', 'HODRejected', 'FinanceRejected'].includes(r.status)
  )

  if (activeImprest) {
    alert(`Active Imprest already exists (${activeImprest.request_no}) — Status: ${activeImprest.status}. Complete it first.`)
    return
  }

  router.push('/imprest/new_reqest')
}

  const handleDelete = async () => {
    if (!selectedRow || !loggedInUser) return
    if (!window.confirm('Are you sure you want to delete this request?')) {
      handleMenuClose()
      return
    }
    try {
      await axios.delete(`http://localhost:8000/api/v1/imprest/${selectedRow.imprest_id}/`)
      fetchImprestData()
    } catch (err) {
      console.error(err)
      alert('Failed to delete request.')
    }
    handleMenuClose()
  }

  const departmentOptions = Array.from(new Set(imprestData.map((r) => r.department_name)))

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
      <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
        <Header />

        <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
          <Box sx={{ p: 3 }}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>

              {/* ── Gradient Header ── */}
              <Box sx={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                mb: 3, background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
                p: 2.5, borderRadius: 1, mx: -3, mt: -3,
              }}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                    Imprest Requests
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    {loggedInUser
                      ? `${loggedInUser.user_name} — ${loggedInUser.department} — ${loggedInUser.role_name}`
                      : 'Loading...'}
                  </Typography>
                </Box>

                {loggedInUser?.permissions?.can_create_imprest && (
                  <Button
                    sx={{ bgcolor: 'white', color: '#1A1A1A', textTransform: 'none', fontWeight: 600, '&:hover': { bgcolor: '#F5F5F5' } }}
                    onClick={handleCreateClick}

                  >
                    Create Imprest +
                  </Button>
                )}
              </Box>

              {/* ── Select Type — sirf role ke hisab se tabs ── */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>Select Type</Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {visibleTypes.map((type, index) => (
                    <Button
                      key={index}
                      variant={selectedType === index ? 'contained' : 'outlined'}
                      onClick={() => handleTypeChange(index)}
                      sx={{
                        textTransform: 'none', borderRadius: 1.5, px: 2.5, py: 0.8,
                        fontSize: '0.875rem', fontWeight: 500,
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

              {/* ── Filters ── */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>Filter By</Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                  <TextField select size="small" label="Year" value={year}
                    onChange={(e) => setYear(e.target.value)} sx={{ minWidth: 140 }}>
                    {years.map((y) => <MenuItem key={y} value={y}>{y}</MenuItem>)}
                  </TextField>

                  <TextField select size="small" label="Month" value={month}
                    onChange={(e) => setMonth(e.target.value)} sx={{ minWidth: 150 }}>
                    <MenuItem value="">All Months</MenuItem>
                    {months.map((m) => <MenuItem key={m} value={m}>{m}</MenuItem>)}
                  </TextField>

                  <TextField select size="small" label="Department" value={department}
                    onChange={(e) => setDepartment(e.target.value)} sx={{ minWidth: 170 }}>
                    <MenuItem value="">All Departments</MenuItem>
                    {departmentOptions.map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}
                  </TextField>

                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant="outlined" onClick={resetFilters} sx={{ textTransform: 'none' }}>Reset</Button>
                    <Button variant="contained"
                      sx={{ bgcolor: '#FF6B35', '&:hover': { bgcolor: '#e55a25' }, textTransform: 'none' }}
                      onClick={applyFilters}>
                      Search
                    </Button>
                  </Box>
                </Box>
                <Typography variant="caption" sx={{ color: '#888', mt: 1, display: 'block' }}>
                  Showing {filteredData.length} of {imprestData.length} records
                  {loggedInUser && <> &nbsp;·&nbsp; Type: <strong>{visibleTypes[selectedType]?.label}</strong></>}
                </Typography>
              </Box>

              {/* ── Table ── */}
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>Dashboard</Typography>

              <TableContainer>
                <Table>
                  <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Request No.</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Request Date</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Requested By</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Project</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {filteredData.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} align="center" sx={{ py: 6, color: '#888' }}>
                          No records found for the selected filters.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredData.map((row) => (
                        <TableRow key={row.imprest_id} hover>
                          <TableCell sx={{ fontWeight: 500 }}>{row.request_no}</TableCell>
                          <TableCell>
                            {new Date(row.created_on).toLocaleDateString('en-GB', {
                              day: '2-digit', month: 'short', year: 'numeric',
                            })}
                          </TableCell>
                          <TableCell>{row.department_name}</TableCell>
                          <TableCell>{row.user_requested_name}</TableCell>
                          <TableCell>
                            <Chip
                              label={row.status_display || row.status}
                              size="small"
                              sx={{ ...statusChipStyle(row.status), fontWeight: 500, fontSize: '0.75rem' }}
                            />
                          </TableCell>
                          <TableCell>{row.project_name}</TableCell>
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

              {/* ── Action Menu — role + status ke hisab se ── */}
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>

                {/* View — sab dekh sakte hain */}
                <MenuItemComponent onClick={handleView}>
                  <ViewIcon sx={{ fontSize: 18, mr: 1 }} /> View
                </MenuItemComponent>

                {/* Edit — sirf tabhi dikhao jab canEdit true ho */}
                {selectedRow && loggedInUser && canEdit(selectedRow, loggedInUser) && (
                  <MenuItemComponent onClick={handleEdit}>
                    <EditIcon sx={{ fontSize: 18, mr: 1 }} />
                    {getEditLabel(selectedRow.status)}
                  </MenuItemComponent>
                )}

                {/* Delete — sirf tabhi dikhao jab canDelete true ho */}
                {selectedRow && loggedInUser && canDelete(selectedRow, loggedInUser) && (
                  <MenuItemComponent onClick={handleDelete} sx={{ color: '#EF5350' }}>
                    <DeleteIcon sx={{ fontSize: 18, mr: 1 }} /> Delete
                  </MenuItemComponent>
                )}

              </Menu>

            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}