// 'use client'

// import {
//   Box,
//   Typography,
//   Button,
//   Paper,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
// } from '@mui/material'
// import { useRouter } from 'next/navigation'
// import Sidebar from '../main/Sidebar'
// import { useState } from 'react'
// import EditIcon from '@mui/icons-material/Edit'
// import DeleteIcon from '@mui/icons-material/Delete'

// const dummyUsers = [
//   {
//     id: 1,
//     userName: 'Rahul',
//     userEmail: 'rahul@test.com',
//     department: 'IT',
//     status: 'Active',
//   },
//   {
//     id: 2,
//     userName: 'Amit',
//     userEmail: 'amit@test.com',
//     department: 'HR',
//     status: 'Inactive',
//   },
// ]

// export default function UserManagementList() {
//   const router = useRouter()
//   const [selectedMenu, setSelectedMenu] = useState('User Management')

//   return (
//     <Box sx={{ display: 'flex', height: '100vh' }}>
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       <Box sx={{ flex: 1, p: 4 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//           <Typography variant="h5">User Management</Typography>
//           <Button
//             variant="contained"
//             sx={{ bgcolor: '#FF6B35' }}
//             onClick={() => router.push('/admin/usermanagement/add')}
//           >
//             + Add User
//           </Button>
//         </Box>

//         <Paper>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>User Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Department</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Action</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {dummyUsers.map((user) => (
//                 <TableRow key={user.id}>
//                   <TableCell>{user.userName}</TableCell>
//                   <TableCell>{user.userEmail}</TableCell>
//                   <TableCell>{user.department}</TableCell>
//                   <TableCell>{user.status}</TableCell>
//                   <TableCell>
//                     {/* <Button
//                       size="small"
//                       onClick={() =>
//                         router.push(`/admin/usermanagement/edit/${user.id}`)
//                       }
//                     >
//                       Edit
//                     </Button> */}
//                        <IconButton
//                       onClick={() =>
//                         router.push(`/admin/usermanagement/edit/${user.id}`)
//                       }
//                     >
//                       <EditIcon color="primary" />
//                     </IconButton>
//                       <IconButton onClick={() => console.log('Delete', user.id)}>
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

// import {
//   Box,
//   Typography,
//   Button,
//   Paper,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
//   Chip,
//   CircularProgress,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from '@mui/material'
// import { useRouter } from 'next/navigation'
// import Sidebar from '../main/Sidebar'
// import { useState, useEffect } from 'react'
// import EditIcon from '@mui/icons-material/Edit'
// import DeleteIcon from '@mui/icons-material/Delete'
// import { UsersService } from '../../lib/api/services/users.service'
// import type { User } from '../../lib/types/user'

// export default function UserManagementList() {
//   const router = useRouter()
//   const [selectedMenu, setSelectedMenu] = useState('User Management')
//   const [users, setUsers] = useState<User[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
//   const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
//   const [userToDelete, setUserToDelete] = useState<User | null>(null)
//   const [deleting, setDeleting] = useState(false)

//   // Fetch users on component mount
//   useEffect(() => {
//     fetchUsers()
//   }, [])

//   const fetchUsers = async () => {
//     try {
//       setLoading(true)
//       setError(null)
//       const data = await UsersService.getUsers()
//       setUsers(data)
//     } catch (err) {
//       console.error('Error fetching users:', err)
//       setError('Failed to load users. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleDeleteClick = (user: User) => {
//     setUserToDelete(user)
//     setDeleteDialogOpen(true)
//   }

//   const handleDeleteConfirm = async () => {
//     if (!userToDelete) return

//     try {
//       setDeleting(true)
//       await UsersService.deleteUser(userToDelete.id)
      
//       // Remove user from state
//       setUsers(users.filter(u => u.id !== userToDelete.id))
      
//       setDeleteDialogOpen(false)
//       setUserToDelete(null)
//     } catch (err) {
//       console.error('Error deleting user:', err)
//       alert('Failed to delete user. Please try again.')
//     } finally {
//       setDeleting(false)
//     }
//   }

//   const handleDeleteCancel = () => {
//     setDeleteDialogOpen(false)
//     setUserToDelete(null)
//   }

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//     })
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh' }}>
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       <Box sx={{ flex: 1, p: 4, overflow: 'auto' }}>
//         {/* Header */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
//           <Typography variant="h5" fontWeight={600}>
//             User Management
//           </Typography>
//           <Button
//             variant="contained"
//             sx={{
//               bgcolor: '#FF6B35',
//               '&:hover': { bgcolor: '#E55A2B' },
//               textTransform: 'none',
//               px: 3,
//             }}
//             onClick={() => router.push('/admin/usermanagement/add')}
//           >
//             + ADD USER
//           </Button>
//         </Box>

//         {/* Error Alert */}
//         {error && (
//           <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
//             {error}
//           </Alert>
//         )}

//         {/* Loading State */}
//         {loading ? (
//           <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
//             <CircularProgress />
//           </Box>
//         ) : (
//           /* Table */
//           <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', overflow: 'hidden' }}>
//             <Box sx={{ overflowX: 'auto' }}>
//               <Table>
//                 <TableHead>
//                   <TableRow sx={{ bgcolor: '#FAFAFA' }}>
//                     <TableCell sx={{ fontWeight: 600 }}>User Name</TableCell>
//                     <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
//                     <TableCell sx={{ fontWeight: 600 }}>Site</TableCell>
//                     <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
//                     <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
//                     <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
//                     <TableCell sx={{ fontWeight: 600 }}>Created At</TableCell>
//                     <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
//                   </TableRow>
//                 </TableHead>

//                 <TableBody>
//                   {users.length === 0 ? (
//                     <TableRow>
//                       <TableCell colSpan={8} align="center" sx={{ py: 4 }}>
//                         <Typography color="text.secondary">
//                           No users found
//                         </Typography>
//                       </TableCell>
//                     </TableRow>
//                   ) : (
//                     users.map((user) => (
//                       <TableRow key={user.id} sx={{ '&:hover': { bgcolor: '#FAFAFA' } }}>
//                         <TableCell>{user.user_name}</TableCell>
//                         <TableCell>{user.user_email}</TableCell>
//                         <TableCell>{user.individual_site}</TableCell>
//                         <TableCell>{user.department}</TableCell>
//                         <TableCell>{user.department_role}</TableCell>
//                         <TableCell>
//                           <Chip
//                             label={user.status}
//                             color={user.status === 'Active' ? 'success' : 'default'}
//                             size="small"
//                             sx={{ fontWeight: 500 }}
//                           />
//                         </TableCell>
//                         <TableCell>{formatDate(user.created_at)}</TableCell>
//                         <TableCell>
//                           <IconButton
//                             size="small"
//                             onClick={() =>
//                               router.push(`/admin/usermanagement/edit/${user.id}`)
//                             }
//                             sx={{ color: '#FF6B35', mr: 1 }}
//                           >
//                             <EditIcon fontSize="small" />
//                           </IconButton>
//                           <IconButton
//                             size="small"
//                             onClick={() => handleDeleteClick(user)}
//                             sx={{ color: '#FF6B35' }}
//                           >
//                             <DeleteIcon fontSize="small" />
//                           </IconButton>
//                         </TableCell>
//                       </TableRow>
//                     ))
//                   )}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Paper>
//         )}
//       </Box>

//       {/* Delete Confirmation Dialog */}
//       <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel} maxWidth="xs" fullWidth>
//         <DialogTitle>Delete User</DialogTitle>
//         <DialogContent>
//           <Typography>
//             Are you sure you want to delete user <strong>{userToDelete?.user_name}</strong>? 
//             This action cannot be undone.
//           </Typography>
//         </DialogContent>
//         <DialogActions sx={{ p: 2 }}>
//           <Button onClick={handleDeleteCancel} disabled={deleting}>
//             Cancel
//           </Button>
//           <Button
//             onClick={handleDeleteConfirm}
//             variant="contained"
//             color="error"
//             disabled={deleting}
//           >
//             {deleting ? 'Deleting...' : 'Delete'}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   )
// }

// 'use client'

// import {
//   Box,
//   Typography,
//   Button,
//   Paper,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
//   Chip,
//   CircularProgress,
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from '@mui/material'
// import { useRouter } from 'next/navigation'
// import Sidebar from '../main/Sidebar'
// import { useState, useEffect } from 'react'
// import EditIcon from '@mui/icons-material/Edit'
// import DeleteIcon from '@mui/icons-material/Delete'
// import { UsersService } from '../../lib/api/services/users.service'
// import type { User } from '../../lib/types/user'

// export default function UserManagementList() {
//   const router = useRouter()
//   const [selectedMenu, setSelectedMenu] = useState('User Management')
//   const [users, setUsers] = useState<User[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
//   const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
//   const [userToDelete, setUserToDelete] = useState<User | null>(null)
//   const [deleting, setDeleting] = useState(false)

//   useEffect(() => {
//     fetchUsers()
//   }, [])

//   const fetchUsers = async () => {
//     try {
//       setLoading(true)
//       setError(null)
//       const data = await UsersService.getUsers()
//       setUsers(data)
//     } catch (err) {
//       console.error('Error fetching users:', err)
//       setError('Failed to load users. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleDeleteClick = (user: User) => {
//     setUserToDelete(user)
//     setDeleteDialogOpen(true)
//   }

//   const handleDeleteConfirm = async () => {
//     if (!userToDelete) return

//     try {
//       setDeleting(true)
//       await UsersService.deleteUser(userToDelete.id)
//       setUsers(users.filter(u => u.id !== userToDelete.id))
//       setDeleteDialogOpen(false)
//       setUserToDelete(null)
//     } catch (err) {
//       console.error('Error deleting user:', err)
//       alert('Failed to delete user. Please try again.')
//     } finally {
//       setDeleting(false)
//     }
//   }

//   const handleDeleteCancel = () => {
//     setDeleteDialogOpen(false)
//     setUserToDelete(null)
//   }

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//     })
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
      
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

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
//                     User Management
//                   </Typography>
//                   <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
//                     Manage system users and permissions
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
//                   onClick={() => router.push('/admin/usermanagement/add')}
//                 >
//                   + ADD USER
//                 </Button>
//               </Box>

//               {/* Error Alert */}
//               {error && (
//                 <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
//                   {error}
//                 </Alert>
//               )}

//               {/* Loading */}
//               {loading ? (
//                 <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
//                   <CircularProgress />
//                 </Box>
//               ) : (
//                 <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', overflow: 'hidden' }}>
//                   <Box sx={{ overflowX: 'auto' }}>
//                     <Table>
//                       <TableHead>
//                         <TableRow sx={{ bgcolor: '#FAFAFA' }}>
//                           <TableCell sx={{ fontWeight: 600 }}>User Name</TableCell>
//                           <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
//                           <TableCell sx={{ fontWeight: 600 }}>Site</TableCell>
//                           <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
//                           <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
//                           <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
//                           <TableCell sx={{ fontWeight: 600 }}>Created At</TableCell>
//                           <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
//                         </TableRow>
//                       </TableHead>

//                       <TableBody>
//                         {users.length === 0 ? (
//                           <TableRow>
//                             <TableCell colSpan={8} align="center" sx={{ py: 4 }}>
//                               <Typography color="text.secondary">
//                                 No users found
//                               </Typography>
//                             </TableCell>
//                           </TableRow>
//                         ) : (
//                           users.map((user) => (
//                             <TableRow key={user.id} sx={{ '&:hover': { bgcolor: '#FAFAFA' } }}>
//                               <TableCell>{user.user_name}</TableCell>
//                               <TableCell>{user.user_email}</TableCell>
//                               <TableCell>{user.individual_site}</TableCell>
//                               <TableCell>{user.department}</TableCell>
//                               <TableCell>{user.department_role}</TableCell>
//                               <TableCell>
//                                 <Chip
//                                   label={user.status}
//                                   color={user.status === 'Active' ? 'success' : 'default'}
//                                   size="small"
//                                   sx={{ fontWeight: 500 }}
//                                 />
//                               </TableCell>
//                               <TableCell>{formatDate(user.created_at)}</TableCell>
//                               <TableCell>
//                                 <IconButton
//                                   size="small"
//                                   onClick={() =>
//                                     router.push(`/admin/usermanagement/edit/${user.id}`)
//                                   }
//                                   sx={{ color: '#F97316', mr: 1 }}
//                                 >
//                                   <EditIcon fontSize="small" />
//                                 </IconButton>

//                                 <IconButton
//                                   size="small"
//                                   onClick={() => handleDeleteClick(user)}
//                                   sx={{ color: '#F97316' }}
//                                 >
//                                   <DeleteIcon fontSize="small" />
//                                 </IconButton>
//                               </TableCell>
//                             </TableRow>
//                           ))
//                         )}
//                       </TableBody>
//                     </Table>
//                   </Box>
//                 </Paper>
//               )}
//             </Paper>
//           </Box>
//         </Box>
//       </Box>

//       {/* Delete Dialog */}
//       <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel} maxWidth="xs" fullWidth>
//         <DialogTitle>Delete User</DialogTitle>
//         <DialogContent>
//           <Typography>
//             Are you sure you want to delete user <strong>{userToDelete?.user_name}</strong>? 
//             This action cannot be undone.
//           </Typography>
//         </DialogContent>
//         <DialogActions sx={{ p: 2 }}>
//           <Button onClick={handleDeleteCancel} disabled={deleting}>
//             Cancel
//           </Button>
//           <Button
//             onClick={handleDeleteConfirm}
//             variant="contained"
//             color="error"
//             disabled={deleting}
//           >
//             {deleting ? 'Deleting...' : 'Delete'}
//           </Button>
//         </DialogActions>
//       </Dialog>

//     </Box>
//   )
// }

'use client'

import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Chip,
  CircularProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  InputAdornment,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import Sidebar from '../main/Sidebar'
import { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'
import { UsersService } from '../../lib/api/services/users.service'
import type { User } from '../../lib/types/user'

const statusOptions = ['All', 'Active', 'Inactive']

export default function UserManagementList() {
  const router = useRouter()
  const [selectedMenu, setSelectedMenu] = useState('User Management')

  const [allUsers,      setAllUsers]      = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [loading,       setLoading]       = useState(true)
  const [error,         setError]         = useState<string | null>(null)

  // Filter state
  const [search,     setSearch]     = useState('')
  const [department, setDepartment] = useState('All')
  const [role,       setRole]       = useState('All')
  const [status,     setStatus]     = useState('All')

  // Delete dialog
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [userToDelete,     setUserToDelete]     = useState<User | null>(null)
  const [deleting,         setDeleting]         = useState(false)

  // ── Fetch ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await UsersService.getUsers()
      setAllUsers(data)
      setFilteredUsers(data)
    } catch (err) {
      console.error('Error fetching users:', err)
      setError('Failed to load users. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // ── Dynamic dropdown options from API data ─────────────────────────────────
  const departmentOptions = ['All', ...Array.from(new Set(allUsers.map((u) => u.department).filter(Boolean)))]
  const roleOptions       = ['All', ...Array.from(new Set(allUsers.map((u) => u.department_role).filter(Boolean)))]

  // ── Filter logic ───────────────────────────────────────────────────────────
  const runFilters = (
    srch: string,
    dept: string,
    rl: string,
    st: string,
    data: User[]
  ) => {
    let result = [...data]

    // Search — name or email
    if (srch.trim()) {
      const lower = srch.toLowerCase()
      result = result.filter(
        (u) =>
          u.user_name?.toLowerCase().includes(lower) ||
          u.user_email?.toLowerCase().includes(lower)
      )
    }

    // Department
    if (dept && dept !== 'All') {
      result = result.filter((u) => u.department === dept)
    }

    // Role
    if (rl && rl !== 'All') {
      result = result.filter((u) => u.department_role === rl)
    }

    // Status
    if (st && st !== 'All') {
      result = result.filter((u) => u.status === st)
    }

    setFilteredUsers(result)
  }

  const handleSearchChange = (val: string) => {
    setSearch(val)
    runFilters(val, department, role, status, allUsers)
  }

  const handleDepartmentChange = (val: string) => {
    setDepartment(val)
    runFilters(search, val, role, status, allUsers)
  }

  const handleRoleChange = (val: string) => {
    setRole(val)
    runFilters(search, department, val, status, allUsers)
  }

  const handleStatusChange = (val: string) => {
    setStatus(val)
    runFilters(search, department, role, val, allUsers)
  }

  const resetFilters = () => {
    setSearch('')
    setDepartment('All')
    setRole('All')
    setStatus('All')
    setFilteredUsers(allUsers)
  }

  // ── Delete ─────────────────────────────────────────────────────────────────
  const handleDeleteClick = (user: User) => {
    setUserToDelete(user)
    setDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = async () => {
    if (!userToDelete) return
    try {
      setDeleting(true)
      await UsersService.deleteUser(userToDelete.id)
      const updated = allUsers.filter((u) => u.id !== userToDelete.id)
      setAllUsers(updated)
      runFilters(search, department, role, status, updated)
      setDeleteDialogOpen(false)
      setUserToDelete(null)
    } catch (err) {
      console.error('Error deleting user:', err)
      alert('Failed to delete user. Please try again.')
    } finally {
      setDeleting(false)
    }
  }

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false)
    setUserToDelete(null)
  }

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
    })

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
                    User Management
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    Manage system users and permissions
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
                  onClick={() => router.push('/admin/usermanagement/add')}
                >
                  + ADD USER
                </Button>
              </Box>

              {/* ── Error ── */}
              {error && (
                <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
                  {error}
                </Alert>
              )}

              {/* ── Filters ── */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                  Filter By
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>

                  {/* Search */}
                  <TextField
                    size="small"
                    placeholder="Search name or email..."
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

                  {/* Department — dynamic from API */}
                  <TextField
                    select size="small" label="Department" value={department}
                    onChange={(e) => handleDepartmentChange(e.target.value)}
                    sx={{ minWidth: 170 }}
                  >
                    {departmentOptions.map((d) => (
                      <MenuItem key={d} value={d}>{d}</MenuItem>
                    ))}
                  </TextField>

                  {/* Role — dynamic from API */}
                  <TextField
                    select size="small" label="Role" value={role}
                    onChange={(e) => handleRoleChange(e.target.value)}
                    sx={{ minWidth: 160 }}
                  >
                    {roleOptions.map((r) => (
                      <MenuItem key={r} value={r}>{r}</MenuItem>
                    ))}
                  </TextField>

                  {/* Status */}
                  <TextField
                    select size="small" label="Status" value={status}
                    onChange={(e) => handleStatusChange(e.target.value)}
                    sx={{ minWidth: 140 }}
                  >
                    {statusOptions.map((s) => (
                      <MenuItem key={s} value={s}>{s}</MenuItem>
                    ))}
                  </TextField>

                  <Button variant="outlined" onClick={resetFilters}>Reset</Button>
                </Box>

                {/* Record count */}
                <Typography variant="caption" sx={{ color: '#888', mt: 1, display: 'block' }}>
                  Showing {filteredUsers.length} of {allUsers.length} users
                </Typography>
              </Box>

              {/* ── Table ── */}
              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                  <CircularProgress sx={{ color: '#F97316' }} />
                </Box>
              ) : (
                <Paper elevation={0} sx={{ border: '1px solid #E0E0E0', overflow: 'hidden' }}>
                  <Box sx={{ overflowX: 'auto' }}>
                    <Table>
                      <TableHead>
                        <TableRow sx={{ bgcolor: '#FAFAFA' }}>
                          <TableCell sx={{ fontWeight: 600 }}>User Name</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Individual Role</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Created At</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {filteredUsers.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={8} align="center" sx={{ py: 4, color: '#888' }}>
                              No records found for the selected filters.
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredUsers.map((user) => (
                            <TableRow key={user.id} sx={{ '&:hover': { bgcolor: '#FAFAFA' } }}>
                              <TableCell>{user.user_name}</TableCell>
                              <TableCell>{user.user_email}</TableCell>
                              <TableCell>{user.individual_role}</TableCell>
                              <TableCell>{user.department}</TableCell>
                              <TableCell>{user.department_role}</TableCell>
                              <TableCell>
                                <Chip
                                  label={user.status}
                                  size="small"
                                  sx={{
                                    fontWeight: 500,
                                    bgcolor: user.status === 'Active' ? '#E8F5E9' : '#F5F5F5',
                                    color:   user.status === 'Active' ? '#4CAF50' : '#757575',
                                  }}
                                />
                              </TableCell>
                              <TableCell>{formatDate(user.created_at)}</TableCell>
                              <TableCell>
                                <IconButton
                                  size="small"
                                  onClick={() => router.push(`/admin/usermanagement/edit/${user.id}`)}
                                  sx={{ color: '#F97316', mr: 1 }}
                                >
                                  <EditIcon fontSize="small" />
                                </IconButton>
                                <IconButton
                                  size="small"
                                  onClick={() => handleDeleteClick(user)}
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
                  </Box>
                </Paper>
              )}

            </Paper>
          </Box>
        </Box>
      </Box>

      {/* ── Delete Confirm Dialog ── */}
      <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel} maxWidth="xs" fullWidth>
        <DialogTitle>Delete User</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete user <strong>{userToDelete?.user_name}</strong>?
            This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleDeleteCancel} disabled={deleting}>Cancel</Button>
          <Button
            onClick={handleDeleteConfirm}
            variant="contained"
            color="error"
            disabled={deleting}
          >
            {deleting ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  )
}