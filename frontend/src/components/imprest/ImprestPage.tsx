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


// const requestTypes = [
//   { label: 'My request', color: '#FF6B35', route: '/imprest' },,
//   { label: 'Dept Request', color: '#FF6B35', route: '/imprest/dept' },
//   { label: 'Pending Dept Request', color: '#FF6B35', route: '/imprest/pending-dept' },
//   { label: 'Pending my request', color: '#FF6B35', route: '/imprest/pending-my' },
//   { label: 'Completed my request', color: '#4CAF50', route: '/imprest/completed-my' },
//   { label: 'Completed debt request', color: '#4CAF50', route: '/imprest/completed-dept' },
// ]

// const years = ['2024', '2025', '2026']
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// const departments = ['Finance', 'HR', 'Marketing', 'Software']
// const statuses = ['On Hold', 'Pending', 'Accepted', 'Rejected', 'Verifying']



// export default function ImprestRequestPage() {
//   const router = useRouter()
//   const [imprestData, setImprestData] = useState([])

//   const [selectedMenu, setSelectedMenu] = useState('Imprest')
//   const [selectedType, setSelectedType] = useState(0)
//   const [year, setYear] = useState('2026')
//   const [month, setMonth] = useState('April')
//   const [department, setDepartment] = useState('Finance')
//   const [status, setStatus] = useState('On Hold')
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
//   const [selectedRow, setSelectedRow] = useState<number | null>(null)
//   console.log(selectedRow, "selectedRowselectedRow");

//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
//     setAnchorEl(event.currentTarget)
//     setSelectedRow(index)
//   }

//   useEffect(() => {
//     fetchImprestData()
//   }, [])

//   const fetchImprestData = async () => {
//     try {
//       const res = await axios.get('http://localhost:8000/api/v1/imprest/') // apna API URL
//       setImprestData(res.data)
//     } catch (error) {
//       console.error(error)
//     }
//   }


//   const handleMenuClose = () => {
//     setAnchorEl(null)
//     setSelectedRow(null)
//   }


//   const handleView = () => {
//     if (selectedRow === null) return

//     const imprestNumber = imprestData[selectedRow].imprest_id
//     router.push(`/imprest/view/${imprestNumber}`)
//     handleMenuClose()
//   }

//   const handleEdit = () => {
//     if (selectedRow === null) return

//     const imprestNumber = imprestData[selectedRow].imprest_id
//     console.log(imprestNumber, "imprestNumberimprestNumber");

//     router.push(`/imprest/edit/${imprestNumber}`)
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

//         {/* Scrollable Content */}
//         <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
//           <Box sx={{ p: 3 }}>

//             <Paper
//               elevation={0}
//               sx={{
//                 p: 3,
//                 borderRadius: 2,
//                 boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
//               }}
//             >

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
//                     Create Imprest
//                   </Typography>
//                   <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
//                     Add new imprest request
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
//                   onClick={() => router.push('/imprest/new_reqest')}
//                 >
//                   Create Imprest +
//                 </Button>
//               </Box>

//               {/* ================= CONTENT START ================= */}

//               {/* Select Type */}
//               <Box sx={{ mb: 3 }}>
//                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
//                   Select Type
//                 </Typography>

//                 <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//                   {requestTypes.map((type, index) => (
//                     <Button
//                       key={index}
//                       variant={selectedType === index ? 'contained' : 'outlined'}
//                       onClick={() => {
//                         setSelectedType(index)
//                         router.push(type.route)
//                       }}
//                       sx={{
//                         textTransform: 'none',
//                         borderRadius: 1.5,
//                         px: 2.5,
//                         py: 0.8,
//                         fontSize: '0.875rem',
//                         fontWeight: 500,
//                         ...(selectedType === index
//                           ? {
//                             bgcolor: type.color,
//                             color: 'white',
//                             '&:hover': { bgcolor: type.color, opacity: 0.9 },
//                           }
//                           : {
//                             borderColor: type.color,
//                             color: type.color,
//                             '&:hover': { bgcolor: `${type.color}10` },
//                           }),
//                       }}
//                     >
//                       {type.label}
//                     </Button>
//                   ))}
//                 </Box>
//               </Box>

//               {/* Filter By */}
//               <Box sx={{ mb: 3 }}>
//                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
//                   Filter By
//                 </Typography>

//                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                   {/* Year */}
//                   <TextField
//                     select
//                     size="small"
//                     label="Year"
//                     value={year}
//                     onChange={(e) => setYear(e.target.value)}
//                     sx={{ minWidth: 180 }}
//                   >
//                     {years.map((y) => (
//                       <MenuItem key={y} value={y}>{y}</MenuItem>
//                     ))}
//                   </TextField>

//                   {/* Month */}
//                   <TextField
//                     select
//                     size="small"
//                     label="Month"
//                     value={month}
//                     onChange={(e) => setMonth(e.target.value)}
//                     sx={{ minWidth: 180 }}
//                   >
//                     {months.map((m) => (
//                       <MenuItem key={m} value={m}>{m}</MenuItem>
//                     ))}
//                   </TextField>

//                   {/* Department */}
//                   <TextField
//                     select
//                     size="small"
//                     label="Department"
//                     value={department}
//                     onChange={(e) => setDepartment(e.target.value)}
//                     sx={{ minWidth: 200 }}
//                   >
//                     {departments.map((d) => (
//                       <MenuItem key={d} value={d}>{d}</MenuItem>
//                     ))}
//                   </TextField>

//                   {/* Status */}
//                   <TextField
//                     select
//                     size="small"
//                     label="Status"
//                     value={status}
//                     onChange={(e) => setStatus(e.target.value)}
//                     sx={{ minWidth: 180 }}
//                   >
//                     {statuses.map((s) => (
//                       <MenuItem key={s} value={s}>{s}</MenuItem>
//                     ))}
//                   </TextField>

//                   <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//                     <Button variant="outlined">Reset</Button>
//                     <Button variant="contained" sx={{ bgcolor: '#FF6B35' }}>
//                       Search
//                     </Button>
//                   </Box>
//                 </Box>
//               </Box>

//               {/* Dashboard Table */}
//               <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
//                 Dashboard
//               </Typography>

//               <TableContainer>
//                 <Table>
//                   <TableHead sx={{ bgcolor: '#F9FAFB' }}>
//                     <TableRow>
//                       <TableCell>Request No.</TableCell>
//                       <TableCell>Request Date</TableCell>
//                       <TableCell>Department</TableCell>
//                       <TableCell>Requested by</TableCell>
//                       <TableCell>Status</TableCell>
//                       <TableCell>Project</TableCell>
//                       <TableCell>Actions</TableCell>
//                     </TableRow>
//                   </TableHead>

//                   <TableBody>
//                     {imprestData.map((row, index) => (
//                       <TableRow key={row.imprest_id}>
//                         <TableCell>{row.request_no}</TableCell>
//                         <TableCell>
//                           {new Date(row.created_on).toLocaleDateString()}
//                         </TableCell>
//                         <TableCell>{row.department_name}</TableCell>
//                         <TableCell>{row.user_requested_name}</TableCell>
//                         <TableCell> <Chip label={row.status} size="small" sx={{ bgcolor: '#E8F5E9', color: '#4CAF50', fontWeight: 500, fontSize: '0.75rem', }} /> </TableCell>
//                         <TableCell>{row.project_name}</TableCell>
//                         <TableCell>
//                           <IconButton onClick={(e) => handleMenuOpen(e, index)}>
//                             <MoreVertIcon fontSize="small" />
//                           </IconButton>
//                         </TableCell>
                        
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//   <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//                 <MenuItemComponent onClick={handleView}>
//                   <ViewIcon sx={{ fontSize: 18, mr: 1 }} />
//                   View
//                 </MenuItemComponent>

              
//                     <MenuItemComponent onClick={handleEdit}>
//                       <EditIcon sx={{ fontSize: 18, mr: 1 }} />
//                       Edit
//                     </MenuItemComponent>
               

//                 <MenuItemComponent onClick={handleDelete} sx={{ color: '#EF5350' }}>
//                   <DeleteIcon sx={{ fontSize: 18, mr: 1 }} />
//                   Delete
//                 </MenuItemComponent>
//               </Menu>
//               {/* ================= CONTENT END ================= */}

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
  user_requested: number        // user ID
  user_requested_name: string
  department: number            // dept ID
  department_name: string
  project_name: string
  status: string                // raw: "Pending_HOD", "Approved", etc.
  status_display: string        // human: "Pending HOD"
  created_on: string            // ISO: "2026-02-17T07:17:05.461398Z"
}

interface LoggedInUser {
  user_id: number
  department_id: number
  department_name: string
  name: string
}

// ─── Constants ────────────────────────────────────────────────────────────────
const requestTypes = [
  { label: 'My Request',             color: '#FF6B35', key: 'my' },
  { label: 'Dept Request',           color: '#FF6B35', key: 'dept' },
  { label: 'Pending My Request',     color: '#FF9800', key: 'pending-my' },
  { label: 'Pending Dept Request',   color: '#FF9800', key: 'pending-dept' },
  { label: 'Completed My Request',   color: '#4CAF50', key: 'completed-my' },
  { label: 'Completed Dept Request', color: '#4CAF50', key: 'completed-dept' },
]

const years  = ['2024', '2025', '2026']
const months = ['January','February','March','April','May','June',
                'July','August','September','October','November','December']

// Statuses considered "Pending"
const PENDING_STATUSES  = ['Pending_HOD', 'Pending_Finance', 'Pending_MD', 'On_Hold', 'Verifying']
// Statuses considered "Completed"
const COMPLETED_STATUSES = ['Approved', 'Rejected']

// Chip colour per status
const statusChipStyle = (status: string) => {
  if (COMPLETED_STATUSES.includes(status) && status === 'Approved')
    return { bgcolor: '#E8F5E9', color: '#4CAF50' }
  if (status === 'Rejected')
    return { bgcolor: '#FFEBEE', color: '#EF5350' }
  if (PENDING_STATUSES.includes(status))
    return { bgcolor: '#FFF3E0', color: '#FF9800' }
  return { bgcolor: '#F3E5F5', color: '#8E24AA' }
}

// ─── Role-based filter helper ─────────────────────────────────────────────────
const applyTypeFilter = (
  data: ImprestRow[],
  typeKey: string,
  user: LoggedInUser
): ImprestRow[] => {
  switch (typeKey) {
    case 'my':
      // All requests created by logged-in user
      return data.filter((r) => r.user_requested === user.user_id)

    case 'dept':
      // All requests from logged-in user's department
      return data.filter((r) => r.department === user.department_id)

    case 'pending-my':
      // My requests that are still pending
      return data.filter(
        (r) => r.user_requested === user.user_id && PENDING_STATUSES.includes(r.status)
      )

    case 'pending-dept':
      // Dept requests that are still pending
      return data.filter(
        (r) => r.department === user.department_id && PENDING_STATUSES.includes(r.status)
      )

    case 'completed-my':
      // My requests that are completed (Approved / Rejected)
      return data.filter(
        (r) => r.user_requested === user.user_id && COMPLETED_STATUSES.includes(r.status)
      )

    case 'completed-dept':
      // Dept requests that are completed
      return data.filter(
        (r) => r.department === user.department_id && COMPLETED_STATUSES.includes(r.status)
      )

    default:
      return data
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ImprestRequestPage() {
  const router = useRouter()

  // ── State ──────────────────────────────────────────────────────────────────
  const [imprestData,  setImprestData]  = useState<ImprestRow[]>([])
  const [filteredData, setFilteredData] = useState<ImprestRow[]>([])
  const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null)

  const [selectedMenu, setSelectedMenu] = useState('Imprest')
  const [selectedType, setSelectedType] = useState(0)   // index into requestTypes

  // Extra filters (year / month / department)
  const [year,       setYear]       = useState('2026')
  const [month,      setMonth]      = useState('')
  const [department, setDepartment] = useState('')

  const [anchorEl,    setAnchorEl]    = useState<null | HTMLElement>(null)
  const [selectedRow, setSelectedRow] = useState<number | null>(null)

  // ── Fetch logged-in user from localStorage / session ─────────────────────
  // useEffect(() => {
  //   // Adjust this to however you store the logged-in user
  //   const stored = localStorage.getItem('user')
  //   if (stored) {
  //     setLoggedInUser(JSON.parse(stored))
  //   }
  // }, [])
  useEffect(() => {
    setLoggedInUser({
      user_id: 1,            // <- logged-in user ka ID
      department_id: 1,      // <- us user ka department ID
      department_name: 'Finance',
      name: 'Rahul Sharma',
    })
  }, [])

  // ── Fetch all imprest data ─────────────────────────────────────────────────
  useEffect(() => {
    fetchImprestData()
  }, [])

  const fetchImprestData = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/imprest/')
      setImprestData(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  // ── Re-apply filters whenever raw data, type, or user changes ─────────────
  useEffect(() => {
    if (!loggedInUser) return
    runFilters(selectedType, year, month, department, imprestData, loggedInUser)
  }, [imprestData, loggedInUser])

  // ── Core filter function ───────────────────────────────────────────────────
  const runFilters = (
    typeIndex: number,
    yr: string,
    mn: string,
    dept: string,
    data: ImprestRow[],
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

    // 4. Department (extra sub-filter on top of type)
    if (dept) {
      result = result.filter(
        (r) => r.department_name.toLowerCase() === dept.toLowerCase()
      )
    }

    setFilteredData(result)
  }

  const applyFilters = () => {
    if (!loggedInUser) return
    runFilters(selectedType, year, month, department, imprestData, loggedInUser)
  }

  const resetFilters = () => {
    setYear('2026')
    setMonth('')
    setDepartment('')
    if (loggedInUser) {
      runFilters(selectedType, '2026', '', '', imprestData, loggedInUser)
    }
  }

  // ── Type button click ──────────────────────────────────────────────────────
  const handleTypeChange = (index: number) => {
    setSelectedType(index)
    if (loggedInUser) {
      runFilters(index, year, month, department, imprestData, loggedInUser)
    }
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
    const id = filteredData[selectedRow].imprest_id
    router.push(`/imprest/view/${id}`)
    handleMenuClose()
  }

  const handleEdit = () => {
    if (selectedRow === null) return
    const id = filteredData[selectedRow].imprest_id
    router.push(`/imprest/edit/${id}`)
    handleMenuClose()
  }

  const handleDelete = () => {
    console.log('Delete row:', selectedRow)
    handleMenuClose()
  }

  // Unique departments from API data for dropdown
  const departmentOptions = Array.from(new Set(imprestData.map((r) => r.department_name)))

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
                    Imprest Requests
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    {loggedInUser ? `Logged in as: ${loggedInUser.name} — ${loggedInUser.department_name}` : 'Loading...'}
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
                  onClick={() => router.push('/imprest/new_reqest')}
                >
                  Create Imprest +
                </Button>
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

                  {/* Department — dynamically built from API data */}
                  <TextField
                    select size="small" label="Department" value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    sx={{ minWidth: 170 }}
                  >
                    <MenuItem value="">All Departments</MenuItem>
                    {departmentOptions.map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}
                  </TextField>

                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
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

                {/* Result count */}
                <Typography variant="caption" sx={{ color: '#888', mt: 1, display: 'block' }}>
                  Showing {filteredData.length} of {imprestData.length} records
                  {loggedInUser && (
                    <> &nbsp;·&nbsp; Type: <strong>{requestTypes[selectedType].label}</strong></>
                  )}
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
                        <TableCell colSpan={7} align="center" sx={{ py: 4, color: '#888' }}>
                          No records found for the selected filters.
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredData.map((row, index) => (
                        <TableRow key={row.imprest_id} hover>
                          <TableCell>{row.request_no}</TableCell>
                          <TableCell>
                            {new Date(row.created_on).toLocaleDateString('en-GB', {
                              day: '2-digit', month: 'short', year: 'numeric',
                            })}
                          </TableCell>
                          <TableCell>{row.department_name}</TableCell>
                          <TableCell>{row.user_requested_name}</TableCell>
                          <TableCell>
                            <Chip
                              label={row.status_display}
                              size="small"
                              sx={{ ...statusChipStyle(row.status), fontWeight: 500, fontSize: '0.75rem' }}
                            />
                          </TableCell>
                          <TableCell>{row.project_name}</TableCell>
                          <TableCell>
                            <IconButton onClick={(e) => handleMenuOpen(e, index)}>
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