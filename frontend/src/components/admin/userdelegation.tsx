// 'use client'

// import React, { useState } from 'react'
// import {
//   Box,
//   Typography,
//   TextField,
//   MenuItem,
//   Button,
//   Paper,
// } from '@mui/material'
// import { useRouter } from 'next/navigation'
// import Sidebar from '../main/Sidebar'
// // import Header from '../main/Header'  // Agar Header chahiye toh use karo

// const users = ['John Doe', 'Jane Smith', 'Mike Johnson', 'Sarah Williams']
// const statuses = ['Scheduled', 'Active', 'Archived']

// export default function UserDelegation() {
//   const router = useRouter()
//   const [selectedMenu, setSelectedMenu] = useState('Admin')

//   const [formData, setFormData] = useState({
//     userName: '',
//     userPassword: '',
//     delegateTo: '',
//     status: 'Scheduled',
//     fromDate: '',
//     toDate: '',
//     remarks: '',
//   })

//   const handleChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleSave = () => {
//     console.log('Save delegation:', formData)
//     // Save logic here
//   }

//   const handleCancel = () => {
//     router.push('/admin')
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
//       {/* Sidebar Left */}
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       {/* Main Content Right */}
//       <Box sx={{ flex: 1, p: 4, overflowY: 'auto' }}>
//         <Typography variant="h5" sx={{ mb: 3 }}>
//           User delegation
//         </Typography>

//         <Paper sx={{ p: 3 }}>
//           <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
//             <TextField
//               label="User name"
//               size="small"
//               value={formData.userName}
//               onChange={(e) => handleChange('userName', e.target.value)}
//             />
//             <TextField
//               label="User Password"
//               size="small"
//               type="password"
//               value={formData.userPassword}
//               onChange={(e) => handleChange('userPassword', e.target.value)}
//             />
//             <TextField
//               label="Delegate to"
//               select
//               size="small"
//               value={formData.delegateTo}
//               onChange={(e) => handleChange('delegateTo', e.target.value)}
//             >
//               {users.map((user) => (
//                 <MenuItem key={user} value={user}>
//                   {user}
//                 </MenuItem>
//               ))}
//             </TextField>
//             <TextField
//               label="Status"
//               select
//               size="small"
//               value={formData.status}
//               onChange={(e) => handleChange('status', e.target.value)}
//             >
//               {statuses.map((status) => (
//                 <MenuItem key={status} value={status}>
//                   {status}
//                 </MenuItem>
//               ))}
//             </TextField>
//             <TextField
//               label="From Date"
//               size="small"
//               type="date"
//               InputLabelProps={{ shrink: true }}
//               value={formData.fromDate}
//               onChange={(e) => handleChange('fromDate', e.target.value)}
//             />
//             <TextField
//               label="To Date"
//               size="small"
//               type="date"
//               InputLabelProps={{ shrink: true }}
//               value={formData.toDate}
//               onChange={(e) => handleChange('toDate', e.target.value)}
//             />
//             <TextField
//               label="Remarks"
//               size="small"
//               multiline
//               rows={3}
//               fullWidth
//               value={formData.remarks}
//               onChange={(e) => handleChange('remarks', e.target.value)}
//               sx={{ gridColumn: 'span 3' }}
//             />
//           </Box>

//           <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
//             <Button variant="outlined" onClick={handleCancel}>
//               Cancel
//             </Button>
//             <Button variant="contained" onClick={handleSave} sx={{ bgcolor: '#FF6B35' }}>
//               Save
//             </Button>
//           </Box>
//         </Paper>
//       </Box>
//     </Box>
//   )
// }

// 'use client'

// import React from 'react'
// import {
//   Box,
//   Typography,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
// } from '@mui/material'
// import EditIcon from '@mui/icons-material/Edit'
// import DeleteIcon from '@mui/icons-material/Delete'
// import { useRouter } from 'next/navigation'
// import Sidebar from '../main/Sidebar'
// import { useState } from 'react'
// const delegationList = [
//   {
//     id: 1,
//     userName: 'John Doe',
//     delegateTo: 'Jane Smith',
//     status: 'Active',
//     fromDate: '2026-02-04',
//     toDate: '2026-02-10',
//   },
// ]

// export default function UserDelegationList() {
//   const router = useRouter()
//   const [selectedMenu, setSelectedMenu] = useState('User Delegation')
//   return (
//     <Box sx={{ display: 'flex', height: '100vh' }}>
//               <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />
        
  

//       <Box sx={{ flex: 1, p: 4 }}>
//         {/* Header */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
//           <Typography variant="h5">User Delegation</Typography>
//           <Button
//             variant="contained"
//             sx={{ bgcolor: '#FF6B35' }}
//             onClick={() => router.push('/admin/userdelegation/add')}
//           >
//             + Add Delegation
//           </Button>
//         </Box>

//         {/* Table */}
//         <Paper>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>User Name</TableCell>
//                 <TableCell>Delegate To</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>From</TableCell>
//                 <TableCell>To</TableCell>
//                 <TableCell align="center">Action</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {delegationList.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{row.userName}</TableCell>
//                   <TableCell>{row.delegateTo}</TableCell>
//                   <TableCell>{row.status}</TableCell>
//                   <TableCell>{row.fromDate}</TableCell>
//                   <TableCell>{row.toDate}</TableCell>
//                   <TableCell align="center">
//                     <IconButton
//                       onClick={() =>
//                         router.push(`/admin/userdelegation/edit/${row.id}`)
//                       }
//                     >
//                       <EditIcon color="primary" />
//                     </IconButton>
//                     <IconButton onClick={() => console.log('Delete', row.id)}>
//                       <DeleteIcon color="error" />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Paper>
//       </Box>
//     </Box>
//   )
// }

// 'use client'

// import React, { useEffect, useState } from 'react'
// import {
//   Box,
//   Typography,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   CircularProgress,
// } from '@mui/material'
// import EditIcon from '@mui/icons-material/Edit'
// import DeleteIcon from '@mui/icons-material/Delete'
// import { useRouter } from 'next/navigation'
// import Sidebar from '../main/Sidebar'

// import { UserDelegationService } from '../../lib/api/services/users.service'
// import { UserDelegation } from '../../lib/types/user'

// export default function UserDelegationList() {
//   const router = useRouter()
//   const [selectedMenu, setSelectedMenu] = useState('User Delegation')
//   const [delegations, setDelegations] = useState<UserDelegation[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchDelegations = async () => {
//       try {
//         const data = await UserDelegationService.getDelegations()
//         setDelegations(data)
//       } catch (error) {
//         console.error('Failed to fetch delegations', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchDelegations()
//   }, [])

//   const handleDelete = async (id: number) => {
//     try {
//       await UserDelegationService.deleteDelegation(id)
//       setDelegations((prev) => prev.filter((d) => d.id !== id))
//     } catch (error) {
//       console.error('Delete failed', error)
//     }
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh' }}>
//       <Sidebar
//         selectedMenu={selectedMenu}
//         onMenuSelect={setSelectedMenu}
//       />

//       <Box sx={{ flex: 1, p: 4 }}>
//         {/* Header */}
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             mb: 3,
//           }}
//         >
//              <Typography variant="h5" fontWeight={600}>User Delegation</Typography>
//           {/* <Typography variant="h5">User Delegation</Typography> */}
//           <Button
//             variant="contained"
//             sx={{ bgcolor: '#FF6B35' }}
//             onClick={() =>
//               router.push('/admin/userdelegation/add')
//             }
//           >
//             + Add Delegation
//           </Button>
//         </Box>

//         {/* Table */}
//           <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', overflow: 'hidden' }}>
//           {loading ? (
//             <Box
//               sx={{
//                 p: 4,
//                 display: 'flex',
//                 justifyContent: 'center',
//               }}
//             >
//               <CircularProgress />
//             </Box>
//           ) : (
//             <Table>
//               <TableHead>
//                  <TableRow sx={{ bgcolor: '#FAFAFA' }}>
//                   <TableCell sx={{ fontWeight: 600 }}>User Name</TableCell>
//                   <TableCell   sx={{ fontWeight: 600 }}>Delegate To</TableCell>
//                   <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
//                   <TableCell sx={{ fontWeight: 600 }}>From</TableCell>
//                   <TableCell sx={{ fontWeight: 600 }}>To</TableCell>
//                   <TableCell sx={{ fontWeight: 600 }} align="center">
//                     Action
//                   </TableCell>
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {delegations.map((row) => (
//                   <TableRow key={row.id}>
//                     <TableCell>{row.user_name}</TableCell>
//                     <TableCell>{row.delegate_to}</TableCell>
//                     <TableCell>{row.status}</TableCell>
//                     <TableCell>
//                       {row.from_date || '-'}
//                     </TableCell>
//                     <TableCell>
//                       {row.to_date || '-'}
//                     </TableCell>
//                     <TableCell align="center">
//                       <IconButton
//                         onClick={() =>
//                           router.push(
//                             `/admin/userdelegation/edit/${row.id}`
//                           )
//                         }
//                       >
//                         <EditIcon color="primary" />
//                       </IconButton>
//                       <IconButton
//                         onClick={() =>
//                           handleDelete(row.id)
//                         }
//                       >
//                         <DeleteIcon color="error" />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}

//                 {delegations.length === 0 && (
//                   <TableRow>
//                     <TableCell
//                       colSpan={6}
//                       align="center"
//                     >
//                       No delegations found
//                     </TableCell>
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//           )}
//         </Paper>
//       </Box>
//     </Box>
//   )
// }

// 'use client'

// import React, { useEffect, useState } from 'react'
// import {
//   Box,
//   Typography,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   CircularProgress,
// } from '@mui/material'
// import EditIcon from '@mui/icons-material/Edit'
// import DeleteIcon from '@mui/icons-material/Delete'
// import { useRouter } from 'next/navigation'
// import Sidebar from '../main/Sidebar'

// import { UserDelegationService } from '../../lib/api/services/users.service'
// import { UserDelegation } from '../../lib/types/user'

// export default function UserDelegationList() {
//   const router = useRouter()
//   const [selectedMenu, setSelectedMenu] = useState('User Delegation')
//   const [delegations, setDelegations] = useState<UserDelegation[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchDelegations = async () => {
//       try {
//         const data = await UserDelegationService.getDelegations()
//         setDelegations(data)
//       } catch (error) {
//         console.error('Failed to fetch delegations', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchDelegations()
//   }, [])

//   const handleDelete = async (id: number) => {
//     try {
//       await UserDelegationService.deleteDelegation(id)
//       setDelegations((prev) => prev.filter((d) => d.id !== id))
//     } catch (error) {
//       console.error('Delete failed', error)
//     }
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
      
//       <Sidebar
//         selectedMenu={selectedMenu}
//         onMenuSelect={setSelectedMenu}
//       />

//       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        
//         <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
//           <Box sx={{ p: 3 }}>
//             <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>

//               {/* Header */}
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
//                     User Delegation
//                   </Typography>
//                   <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
//                     Manage user delegation settings
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
//                   onClick={() =>
//                     router.push('/admin/userdelegation/add')
//                   }
//                 >
//                   + Add Delegation
//                 </Button>
//               </Box>

//               {/* Table */}
//               <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', overflow: 'hidden' }}>
//                 {loading ? (
//                   <Box
//                     sx={{
//                       p: 4,
//                       display: 'flex',
//                       justifyContent: 'center',
//                     }}
//                   >
//                     <CircularProgress />
//                   </Box>
//                 ) : (
//                   <Table>
//                     <TableHead>
//                       <TableRow sx={{ bgcolor: '#FAFAFA' }}>
//                         <TableCell sx={{ fontWeight: 600 }}>User Name</TableCell>
//                         <TableCell sx={{ fontWeight: 600 }}>Delegate To</TableCell>
//                         <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
//                         <TableCell sx={{ fontWeight: 600 }}>From</TableCell>
//                         <TableCell sx={{ fontWeight: 600 }}>To</TableCell>
//                         <TableCell sx={{ fontWeight: 600 }} align="center">
//                           Action
//                         </TableCell>
//                       </TableRow>
//                     </TableHead>

//                     <TableBody>
//                       {delegations.map((row) => (
//                         <TableRow key={row.id} sx={{ '&:hover': { bgcolor: '#FAFAFA' } }}>
//                           <TableCell>{row.user_name}</TableCell>
//                           <TableCell>{row.delegate_to_name}</TableCell>
//                           <TableCell>{row.status}</TableCell>
//                           <TableCell>{row.from_date || '-'}</TableCell>
//                           <TableCell>{row.to_date || '-'}</TableCell>
//                           <TableCell align="center">
//                             <IconButton
//                               size="small"
//                               onClick={() =>
//                                 router.push(
//                                   `/admin/userdelegation/edit/${row.id}`
//                                 )
//                               }
//                               sx={{ color: '#F97316', mr: 1 }}
//                             >
//                               <EditIcon fontSize="small" />
//                             </IconButton>

//                             <IconButton
//                               size="small"
//                               onClick={() =>
//                                 handleDelete(row.id)
//                               }
//                               sx={{ color: '#F97316' }}
//                             >
//                               <DeleteIcon fontSize="small" />
//                             </IconButton>
//                           </TableCell>
//                         </TableRow>
//                       ))}

//                       {delegations.length === 0 && (
//                         <TableRow>
//                           <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
//                             No delegations found
//                           </TableCell>
//                         </TableRow>
//                       )}
//                     </TableBody>
//                   </Table>
//                 )}
//               </Paper>

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
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CircularProgress,
  TextField,
  MenuItem,
  InputAdornment,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'
import { useRouter } from 'next/navigation'
import Sidebar from '../main/Sidebar'

import { UserDelegationService } from '../../lib/api/services/users.service'
import { UserDelegation } from '../../lib/types/user'

const statusOptions = ['All', 'Active', 'Inactive']

export default function UserDelegationList() {
  const router = useRouter()
  const [selectedMenu, setSelectedMenu] = useState('User Delegation')

  const [allDelegations,      setAllDelegations]      = useState<UserDelegation[]>([])
  const [filteredDelegations, setFilteredDelegations] = useState<UserDelegation[]>([])
  const [loading,             setLoading]             = useState(true)

  // Filter state
  const [search,   setSearch]   = useState('')
  const [status,   setStatus]   = useState('All')
  const [fromDate, setFromDate] = useState('')
  const [toDate,   setToDate]   = useState('')

  // ── Fetch ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchDelegations = async () => {
      try {
        const data = await UserDelegationService.getDelegations()
        setAllDelegations(data)
        setFilteredDelegations(data)
      } catch (error) {
        console.error('Failed to fetch delegations', error)
      } finally {
        setLoading(false)
      }
    }
    fetchDelegations()
  }, [])

  // ── Filter logic ───────────────────────────────────────────────────────────
  const runFilters = (
    srch: string,
    st: string,
    from: string,
    to: string,
    data: UserDelegation[]
  ) => {
    let result = [...data]

    // User name search
    if (srch.trim()) {
      const lower = srch.toLowerCase()
      result = result.filter(
        (r) =>
          r.user_name?.toLowerCase().includes(lower) ||
          r.delegate_to_name?.toLowerCase().includes(lower)
      )
    }

    // Status
    if (st && st !== 'All') {
      result = result.filter(
        (r) => r.status?.toLowerCase() === st.toLowerCase()
      )
    }

    // From date — show records whose from_date >= selected from
    if (from) {
      result = result.filter(
        (r) => r.from_date && new Date(r.from_date) >= new Date(from)
      )
    }

    // To date — show records whose to_date <= selected to
    if (to) {
      result = result.filter(
        (r) => r.to_date && new Date(r.to_date) <= new Date(to)
      )
    }

    setFilteredDelegations(result)
  }

  const handleSearchChange = (val: string) => {
    setSearch(val)
    runFilters(val, status, fromDate, toDate, allDelegations)
  }

  const handleStatusChange = (val: string) => {
    setStatus(val)
    runFilters(search, val, fromDate, toDate, allDelegations)
  }

  const handleFromDateChange = (val: string) => {
    setFromDate(val)
    runFilters(search, status, val, toDate, allDelegations)
  }

  const handleToDateChange = (val: string) => {
    setToDate(val)
    runFilters(search, status, fromDate, val, allDelegations)
  }

  const resetFilters = () => {
    setSearch('')
    setStatus('All')
    setFromDate('')
    setToDate('')
    setFilteredDelegations(allDelegations)
  }

  // ── Delete ─────────────────────────────────────────────────────────────────
  const handleDelete = async (id: number) => {
    try {
      await UserDelegationService.deleteDelegation(id)
      const updated = allDelegations.filter((d) => d.id !== id)
      setAllDelegations(updated)
      runFilters(search, status, fromDate, toDate, updated)
    } catch (error) {
      console.error('Delete failed', error)
    }
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>

      <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
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
                    User Delegation
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    Manage user delegation settings
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
                  onClick={() => router.push('/admin/userdelegation/add')}
                >
                  + Add Delegation
                </Button>
              </Box>

              {/* ── Filters ── */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                  Filter By
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>

                  {/* Search by name */}
                  <TextField
                    size="small"
                    placeholder="Search by user name..."
                    value={search}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    sx={{ minWidth: 220 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ fontSize: 18, color: '#999' }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* Status */}
                  <TextField
                    select size="small" label="Status" value={status}
                    onChange={(e) => handleStatusChange(e.target.value)}
                    sx={{ minWidth: 150 }}
                  >
                    {statusOptions.map((s) => (
                      <MenuItem key={s} value={s}>{s}</MenuItem>
                    ))}
                  </TextField>

                  {/* From Date */}
                  <TextField
                    type="date" size="small" label="From Date"
                    value={fromDate}
                    onChange={(e) => handleFromDateChange(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{ minWidth: 170 }}
                  />

                  {/* To Date */}
                  <TextField
                    type="date" size="small" label="To Date"
                    value={toDate}
                    onChange={(e) => handleToDateChange(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    sx={{ minWidth: 170 }}
                  />

                  <Button variant="outlined" onClick={resetFilters}>
                    Reset
                  </Button>
                </Box>

                {/* Record count */}
                <Typography variant="caption" sx={{ color: '#888', mt: 1, display: 'block' }}>
                  Showing {filteredDelegations.length} of {allDelegations.length} records
                </Typography>
              </Box>

              {/* ── Table ── */}
              <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', overflow: 'hidden' }}>
                {loading ? (
                  <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress sx={{ color: '#F97316' }} />
                  </Box>
                ) : (
                  <Table>
                    <TableHead>
                      <TableRow sx={{ bgcolor: '#FAFAFA' }}>
                        <TableCell sx={{ fontWeight: 600 }}>User Name</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Delegate To</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>From</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>To</TableCell>
                        <TableCell sx={{ fontWeight: 600 }} align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {filteredDelegations.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} align="center" sx={{ py: 4, color: '#888' }}>
                            No records found for the selected filters.
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredDelegations.map((row) => (
                          <TableRow key={row.id} sx={{ '&:hover': { bgcolor: '#FAFAFA' } }}>
                            <TableCell>{row.user_name}</TableCell>
                            <TableCell>{row.delegate_to_name}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.from_date || '-'}</TableCell>
                            <TableCell>{row.to_date || '-'}</TableCell>
                            <TableCell align="center">
                              <IconButton
                                size="small"
                                onClick={() => router.push(`/admin/userdelegation/edit/${row.id}`)}
                                sx={{ color: '#F97316', mr: 1 }}
                              >
                                <EditIcon fontSize="small" />
                              </IconButton>
                              <IconButton
                                size="small"
                                onClick={() => handleDelete(row.id)}
                                sx={{ color: '#EF5350' }}
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                )}
              </Paper>

            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}