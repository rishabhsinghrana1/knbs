// // // 'use client'

// // // import React, { useState } from 'react'
// // // import {
// // //   Box,
// // //   Paper,
// // //   Typography,
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableContainer,
// // //   TableHead,
// // //   TableRow,
// // //   Button,
// // //   TextField,
// // //   MenuItem,
// // //   Chip,
// // //   IconButton,
// // //   Menu,
// // //   MenuItem as MenuItemComponent,
// // // } from '@mui/material'
// // // import {
// // //   MoreVert as MoreVertIcon,
// // //   Visibility as ViewIcon,
// // //   Edit as EditIcon,
// // //   Delete as DeleteIcon,
// // // } from '@mui/icons-material'
// // // import Sidebar from '../main/Sidebar'
// // // import Header from '../main/Header'
// // // import { useRouter } from 'next/navigation'

// // // const requestTypes = [
// // //   { label: 'My Pending Surrender', color: '#FF6B35', selected: true },
// // //   { label: 'My Completed Surrender', color: '#4CAF50', selected: false },
// // // ]

// // // const years = ['2024', '2025', '2026']
// // // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// // // const departments = ['Finance', 'HR', 'Marketing', 'Software']
// // // const statuses = ['On Hold', 'Pending', 'Accepted', 'Rejected', 'Verifying']

// // // const tableData = [
// // //   { imprestNumber: 'Finance Department', reqDate: '01/01/26', userRequested: 'Finance', userEntered: 'John Doe', status: 'Verifying', department: 'Finance' },
// // //   { imprestNumber: 'Finance Department', reqDate: '01/01/26', userRequested: 'Finance', userEntered: 'John Doe', status: 'Verifying', department: 'Finance' },
// // //   { imprestNumber: 'Finance Department', reqDate: '01/01/26', userRequested: 'Finance', userEntered: 'John Doe', status: 'Verifying', department: 'Finance' },
// // //   { imprestNumber: 'Finance Department', reqDate: '01/01/26', userRequested: 'Finance', userEntered: 'John Doe', status: 'Verifying', department: 'Finance' },
// // //   { imprestNumber: 'Finance Department', reqDate: '01/01/26', userRequested: 'Finance', userEntered: 'John Doe', status: 'Verifying', department: 'Finance' },
// // //   { imprestNumber: 'Finance Department', reqDate: '01/01/26', userRequested: 'Finance', userEntered: 'John Doe', status: 'Verifying', department: 'Finance' },
// // // ]

// // // export default function SurrenderRequestPage() {
// // //     const router = useRouter()

// // //   const [selectedMenu, setSelectedMenu] = useState('Surrender')
// // //   const [selectedType, setSelectedType] = useState(0)
// // //   const [year, setYear] = useState('2026')
// // //   const [month, setMonth] = useState('April')
// // //   const [department, setDepartment] = useState('Finance')
// // //   const [status, setStatus] = useState('On Hold')
// // //   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
// // //   const [selectedRow, setSelectedRow] = useState<number | null>(null)

// // //   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
// // //     setAnchorEl(event.currentTarget)
// // //     setSelectedRow(index)
// // //   }

// // //   const handleMenuClose = () => {
// // //     setAnchorEl(null)
// // //     setSelectedRow(null)
// // //   }

// // //   const handleView = () => {
// // //     console.log('View row:', selectedRow)
// // //     handleMenuClose()
// // //   }

// // //   const handleEdit = () => {
// // //     console.log('Edit row:', selectedRow)
// // //     handleMenuClose()
// // //   }

// // //   const handleDelete = () => {
// // //     console.log('Delete row:', selectedRow)
// // //     handleMenuClose()
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
// // //             <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
// // //               {/* Header with Title and Create Button */}
// // //               <Box sx={{ 
// // //                 display: 'flex', 
// // //                 justifyContent: 'space-between', 
// // //                 alignItems: 'center',
// // //                 mb: 3,
// // //     background: 'linear-gradient(90deg, #FF6B35 0%, #000000 100%)',
// // //                 p: 2.5,
// // //                 borderRadius: 1,
// // //                 mx: -3,
// // //                 mt: -3,
// // //               }}>
// // //                 <Box>
// // //                   <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', mb: 0.5 }}>
// // //                     Create surrender request
// // //                   </Typography>
// // //                   <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
// // //                     Track your requests here
// // //                   </Typography>
// // //                 </Box>
// // //                 <Button
// // //                   variant="contained"
// // //                   sx={{
// // //                     bgcolor: 'white',
// // //                     color: '#1A1A1A',
// // //                     textTransform: 'none',
// // //                     fontWeight: 600,
// // //                     px: 3,
// // //                     boxShadow: 'none',
// // //                     '&:hover': {
// // //                       bgcolor: '#F5F5F5',
// // //                       boxShadow: 'none',
// // //                     }
// // //                   }}
// // //                                     onClick={() => router.push('/surrender/create')}

// // //                 >
// // //                   Create request +
// // //                 </Button>
// // //               </Box>

// // //               {/* Select Type */}
// // //               <Box sx={{ mb: 3, mt: 3 }}>
// // //                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5, color: '#1A1A1A' }}>
// // //                   Select Type
// // //                 </Typography>
// // //                 <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
// // //                   {requestTypes.map((type, index) => (
// // //                     <Button
// // //                       key={index}
// // //                       variant={selectedType === index ? 'contained' : 'outlined'}
// // //                       onClick={() => setSelectedType(index)}
// // //                       sx={{
// // //                         textTransform: 'none',
// // //                         borderRadius: 1.5,
// // //                         px: 2.5,
// // //                         py: 0.8,
// // //                         fontSize: '0.875rem',
// // //                         fontWeight: 500,
// // //                         ...(selectedType === index ? {
// // //                           bgcolor: type.color,
// // //                           color: 'white',
// // //                           border: 'none',
// // //                           '&:hover': {
// // //                             bgcolor: type.color,
// // //                             opacity: 0.9,
// // //                           }
// // //                         } : {
// // //                           borderColor: type.color,
// // //                           color: type.color,
// // //                           bgcolor: 'transparent',
// // //                           '&:hover': {
// // //                             borderColor: type.color,
// // //                             bgcolor: `${type.color}10`,
// // //                           }
// // //                         })
// // //                       }}
// // //                     >
// // //                       {type.label}
// // //                     </Button>
// // //                   ))}
// // //                 </Box>
// // //               </Box>

// // //               {/* Filter By */}
// // //               <Box sx={{ mb: 3 }}>
// // //                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5, color: '#1A1A1A' }}>
// // //                   Filter By
// // //                 </Typography>
// // //                 <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end', flexWrap: 'wrap' }}>
// // //                   <Box sx={{ flex: '1 1 200px' }}>
// // //                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}>
// // //                       Year
// // //                     </Typography>
// // //                     <TextField
// // //                       select
// // //                       fullWidth
// // //                       size="small"
// // //                       value={year}
// // //                       onChange={(e) => setYear(e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     >
// // //                       {years.map((y) => (
// // //                         <MenuItem key={y} value={y}>{y}</MenuItem>
// // //                       ))}
// // //                     </TextField>
// // //                   </Box>

// // //                   <Box sx={{ flex: '1 1 200px' }}>
// // //                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}>
// // //                       Month
// // //                     </Typography>
// // //                     <TextField
// // //                       select
// // //                       fullWidth
// // //                       size="small"
// // //                       value={month}
// // //                       onChange={(e) => setMonth(e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     >
// // //                       {months.map((m) => (
// // //                         <MenuItem key={m} value={m}>{m}</MenuItem>
// // //                       ))}
// // //                     </TextField>
// // //                   </Box>

// // //                   <Box sx={{ flex: '1 1 200px' }}>
// // //                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}>
// // //                       Department
// // //                     </Typography>
// // //                     <TextField
// // //                       select
// // //                       fullWidth
// // //                       size="small"
// // //                       value={department}
// // //                       onChange={(e) => setDepartment(e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     >
// // //                       {departments.map((d) => (
// // //                         <MenuItem key={d} value={d}>{d}</MenuItem>
// // //                       ))}
// // //                     </TextField>
// // //                   </Box>

// // //                   <Box sx={{ flex: '1 1 200px' }}>
// // //                     <Typography variant="caption" sx={{ display: 'block', mb: 0.5, color: '#6B7280', fontWeight: 500 }}>
// // //                       Status
// // //                     </Typography>
// // //                     <TextField
// // //                       select
// // //                       fullWidth
// // //                       size="small"
// // //                       value={status}
// // //                       onChange={(e) => setStatus(e.target.value)}
// // //                       sx={{ bgcolor: 'white' }}
// // //                     >
// // //                       {statuses.map((s) => (
// // //                         <MenuItem key={s} value={s}>{s}</MenuItem>
// // //                       ))}
// // //                     </TextField>
// // //                   </Box>

// // //                   <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
// // //                     <Button
// // //                       variant="outlined"
// // //                       sx={{
// // //                         textTransform: 'none',
// // //                         color: '#6B7280',
// // //                         borderColor: '#E5E7EB',
// // //                         px: 3,
// // //                         '&:hover': {
// // //                           borderColor: '#D1D5DB',
// // //                           bgcolor: '#F9FAFB'
// // //                         }
// // //                       }}
// // //                     >
// // //                       Reset
// // //                     </Button>
// // //                     <Button
// // //                       variant="contained"
// // //                       sx={{
// // //                         textTransform: 'none',
// // //                         bgcolor: '#FF6B35',
// // //                         px: 3,
// // //                         '&:hover': {
// // //                           bgcolor: '#FF5722'
// // //                         }
// // //                       }}
// // //                     >
// // //                       Search Results
// // //                     </Button>
// // //                   </Box>
// // //                 </Box>
// // //               </Box>

// // //               {/* Dashboard Table */}
// // //               <Box>
// // //                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#1A1A1A' }}>
// // //                   Dashboard
// // //                 </Typography>
// // //                 <TableContainer>
// // //                   <Table>
// // //                     <TableHead sx={{ bgcolor: '#F9FAFB' }}>
// // //                       <TableRow>
// // //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Imprest Number</TableCell>
// // //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Request Date</TableCell>
// // //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>User Requested</TableCell>
// // //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>User Entered</TableCell>
// // //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Status</TableCell>
// // //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Department</TableCell>
// // //                         <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Actions</TableCell>
// // //                       </TableRow>
// // //                     </TableHead>
// // //                     <TableBody>
// // //                       {tableData.map((row, index) => (
// // //                         <TableRow key={index} hover>
// // //                           <TableCell sx={{ fontSize: '0.875rem', py: 2 }}>{row.imprestNumber}</TableCell>
// // //                           <TableCell sx={{ fontSize: '0.875rem', py: 2 }}>{row.reqDate}</TableCell>
// // //                           <TableCell sx={{ fontSize: '0.875rem', py: 2 }}>{row.userRequested}</TableCell>
// // //                           <TableCell sx={{ fontSize: '0.875rem', py: 2 }}>{row.userEntered}</TableCell>
// // //                           <TableCell sx={{ py: 2 }}>
// // //                             <Chip
// // //                               label={row.status}
// // //                               size="small"
// // //                               sx={{
// // //                                 bgcolor: '#E8F5E9',
// // //                                 color: '#4CAF50',
// // //                                 fontWeight: 500,
// // //                                 fontSize: '0.75rem',
// // //                                 height: '24px'
// // //                               }}
// // //                             />
// // //                           </TableCell>
// // //                           <TableCell sx={{ fontSize: '0.875rem', py: 2 }}>{row.department}</TableCell>
// // //                           <TableCell sx={{ py: 2 }}>
// // //                             <IconButton
// // //                               size="small"
// // //                               onClick={(e) => handleMenuOpen(e, index)}
// // //                             >
// // //                               <MoreVertIcon fontSize="small" />
// // //                             </IconButton>
// // //                           </TableCell>
// // //                         </TableRow>
// // //                       ))}
// // //                     </TableBody>
// // //                   </Table>
// // //                 </TableContainer>

// // //                 {/* Actions Menu */}
// // //                 <Menu
// // //                   anchorEl={anchorEl}
// // //                   open={Boolean(anchorEl)}
// // //                   onClose={handleMenuClose}
// // //                   PaperProps={{
// // //                     sx: {
// // //                       boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// // //                       borderRadius: 2,
// // //                       minWidth: 150,
// // //                     }
// // //                   }}
// // //                 >
// // //                   <MenuItemComponent onClick={handleView} sx={{ fontSize: '0.875rem', py: 1 }}>
// // //                     <ViewIcon sx={{ fontSize: '1rem', mr: 1, color: '#6B7280' }} />
// // //                     View
// // //                   </MenuItemComponent>
// // //                   <MenuItemComponent onClick={handleEdit} sx={{ fontSize: '0.875rem', py: 1 }}>
// // //                     <EditIcon sx={{ fontSize: '1rem', mr: 1, color: '#6B7280' }} />
// // //                     Edit
// // //                   </MenuItemComponent>
// // //                   <MenuItemComponent onClick={handleDelete} sx={{ fontSize: '0.875rem', py: 1, color: '#EF5350' }}>
// // //                     <DeleteIcon sx={{ fontSize: '1rem', mr: 1 }} />
// // //                     Delete
// // //                   </MenuItemComponent>
// // //                 </Menu>
// // //               </Box>
// // //             </Paper>
// // //           </Box>
// // //         </Box>
// // //       </Box>
// // //     </Box>
// // //   )
// // // }

// // // 'use client'

// // // import React, { useEffect, useState } from 'react'
// // // import {
// // //   Box,
// // //   Paper,
// // //   Typography,
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableContainer,
// // //   TableHead,
// // //   TableRow,
// // //   Button,
// // //   TextField,
// // //   MenuItem,
// // //   Chip,
// // //   IconButton,
// // //   Menu,
// // //   MenuItem as MenuItemComponent,
// // //   CircularProgress,
// // // } from '@mui/material'
// // // import {
// // //   MoreVert as MoreVertIcon,
// // //   Visibility as ViewIcon,
// // //   Edit as EditIcon,
// // //   Delete as DeleteIcon,
// // // } from '@mui/icons-material'
// // // import Sidebar from '../main/Sidebar'
// // // import Header from '../main/Header'
// // // import { useRouter } from 'next/navigation'

// // // const requestTypes = [
// // //   { label: 'My Pending Surrender', color: '#FF6B35' },
// // //   { label: 'My Completed Surrender', color: '#4CAF50' },
// // // ]

// // // const years = ['2024', '2025', '2026']
// // // const months = ['January', 'February', 'March', 'April']
// // // const departments = ['Finance', 'HR', 'Marketing', 'Software']
// // // const statuses = ['On Hold', 'Pending', 'Accepted', 'Rejected', 'Verifying']

// // // export default function SurrenderRequestPage() {
// // //   const router = useRouter()

// // //   const [selectedMenu, setSelectedMenu] = useState('Surrender')
// // //   const [selectedType, setSelectedType] = useState(0)
// // //   const [year, setYear] = useState('2026')
// // //   const [month, setMonth] = useState('April')
// // //   const [department, setDepartment] = useState('Finance')
// // //   const [status, setStatus] = useState('On Hold')

// // //   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
// // //   const [selectedRow, setSelectedRow] = useState<any>(null)

// // //   const [imprests, setImprests] = useState<any[]>([])
// // //   const [loading, setLoading] = useState(false)

// // //   // ✅ Fetch Imprest API
// // //   useEffect(() => {
// // //     const fetchImprests = async () => {
// // //       try {
// // //         setLoading(true)
// // //         const res = await fetch('http://localhost:8000/api/v1/imprest/')
// // //         const data = await res.json()
// // //         setImprests(data)
// // //       } catch (error) {
// // //         console.error('Error fetching imprests:', error)
// // //       } finally {
// // //         setLoading(false)
// // //       }
// // //     }

// // //     fetchImprests()
// // //   }, [])

// // //   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, row: any) => {
// // //     setAnchorEl(event.currentTarget)
// // //     setSelectedRow(row)
// // //   }

// // //   const handleMenuClose = () => {
// // //     setAnchorEl(null)
// // //     setSelectedRow(null)
// // //   }

// // //   const handleView = () => {
// // //     router.push(`/surrender/view/${selectedRow.imprest_id}`)
// // //     handleMenuClose()
// // //   }

// // //   const handleEdit = () => {
// // //     router.push(`/surrender/edit/${selectedRow.imprest_id}`)
// // //     handleMenuClose()
// // //   }

// // //   const handleDelete = () => {
// // //     console.log('Delete:', selectedRow)
// // //     handleMenuClose()
// // //   }

// // //   return (
// // //     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
// // //       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

// // //       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
// // //         <Header />

// // //         <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
// // //           <Box sx={{ p: 3 }}>
// // //             <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>

// // //               {/* HEADER */}
// // //               {/* <Box sx={{
// // //                 display: 'flex',
// // //                 justifyContent: 'space-between',
// // //                 alignItems: 'center',
// // //                 mb: 3,
// // //                 background: 'linear-gradient(90deg, #FF6B35 0%, #000000 100%)',
// // //                 p: 2.5,
// // //                 borderRadius: 1,
// // //                 mx: -3,
// // //                 mt: -3,
// // //               }}>
// // //                 <Typography variant="h6" sx={{ color: 'white' }}>
// // //                   Create Surrender Request
// // //                 </Typography>

// // //                 <Button
// // //                   variant="contained"
// // //                   sx={{ bgcolor: 'white', color: '#000' }}
// // //                   onClick={() => router.push('/surrender/create')}
// // //                 >
// // //                   Create Request +
// // //                 </Button>
// // //               </Box> */}

// // //               {/* TABLE */}
// // //               <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
// // //                 Surrender
// // //               </Typography>

// // //               <TableContainer>
// // //                 <Table>
// // //                   <TableHead sx={{ bgcolor: '#F9FAFB' }}>
// // //                     <TableRow>
// // //                       <TableCell>Imprest Number</TableCell>
// // //                       <TableCell>Request Date</TableCell>
// // //                       <TableCell>User Requested</TableCell>
// // //                       <TableCell>User Entered</TableCell>
// // //                       <TableCell>Status</TableCell>
// // //                       <TableCell>Department</TableCell>
// // //                       <TableCell>Actions</TableCell>
// // //                     </TableRow>
// // //                   </TableHead>

// // //                   <TableBody>
// // //                     {loading ? (
// // //                       <TableRow>
// // //                         <TableCell colSpan={7} align="center">
// // //                           <CircularProgress size={24} />
// // //                         </TableCell>
// // //                       </TableRow>
// // //                     ) : imprests.length === 0 ? (
// // //                       <TableRow>
// // //                         <TableCell colSpan={7} align="center">
// // //                           No Records Found
// // //                         </TableCell>
// // //                       </TableRow>
// // //                     ) : (
// // //                       imprests.map((row) => (
// // //                         <TableRow key={row.imprest_id} hover>
// // //                           <TableCell>{row.request_no}</TableCell>
// // //                           <TableCell>
// // //                             {new Date(row.created_on).toLocaleDateString()}
// // //                           </TableCell>
// // //                           <TableCell>{row.user_requested_name}</TableCell>
// // //                           <TableCell>{row.user_entered_name}</TableCell>
// // //                           <TableCell>
// // //                             <Chip
// // //                               label={row.status_display}
// // //                               size="small"
// // //                               sx={{
// // //                                 bgcolor: '#E8F5E9',
// // //                                 color: '#4CAF50',
// // //                                 fontWeight: 500,
// // //                               }}
// // //                             />
// // //                           </TableCell>
// // //                           <TableCell>{row.department_name}</TableCell>
// // //                           <TableCell>
// // //                             <IconButton
// // //                               size="small"
// // //                               onClick={(e) => handleMenuOpen(e, row)}
// // //                             >
// // //                               <MoreVertIcon fontSize="small" />
// // //                             </IconButton>
// // //                           </TableCell>
// // //                         </TableRow>
// // //                       ))
// // //                     )}
// // //                   </TableBody>
// // //                 </Table>
// // //               </TableContainer>

// // //               {/* ACTION MENU */}
// // //               <Menu
// // //                 anchorEl={anchorEl}
// // //                 open={Boolean(anchorEl)}
// // //                 onClose={handleMenuClose}
// // //               >
// // //                 <MenuItemComponent onClick={handleView}>
// // //                   <ViewIcon sx={{ mr: 1 }} /> View
// // //                 </MenuItemComponent>
// // //                 <MenuItemComponent onClick={handleEdit}>
// // //                   <EditIcon sx={{ mr: 1 }} /> Edit
// // //                 </MenuItemComponent>
// // //                 <MenuItemComponent onClick={handleDelete}>
// // //                   <DeleteIcon sx={{ mr: 1 }} /> Delete
// // //                 </MenuItemComponent>
// // //               </Menu>

// // //             </Paper>
// // //           </Box>
// // //         </Box>
// // //       </Box>
// // //     </Box>
// // //   )
// // // }

// // 'use client'

// // import React, { useEffect, useState } from 'react'
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
// //   CircularProgress,
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

// // // ─── Types ────────────────────────────────────────────────────────────────────
// // interface SurrenderRow {
// //   imprest_id: number
// //   request_no: string
// //   user_requested: number
// //   user_requested_name: string
// //   user_entered_name: string
// //   department: number
// //   department_name: string
// //   project_name: string
// //   status: string         // raw: "Pending_HOD", "Approved", etc.
// //   status_display: string // human: "Pending HOD"
// //   created_on: string     // ISO
// // }

// // interface LoggedInUser {
// //   user_id: number
// //   department_id: number
// //   department_name: string
// //   name: string
// // }

// // // ─── Constants ────────────────────────────────────────────────────────────────
// // const requestTypes = [
// //   { label: 'My Pending Surrender', color: '#FF6B35', key: 'pending-my' },
// //   { label: 'My Completed Surrender', color: '#4CAF50', key: 'completed-my' },
// // ]

// // const years = ['2024', '2025', '2026']
// // const months = [
// //   'January', 'February', 'March', 'April', 'May', 'June',
// //   'July', 'August', 'September', 'October', 'November', 'December',
// // ]

// // const PENDING_STATUSES = ['Draft', 'Surrendered', 'DGApproved']
// // const COMPLETED_STATUSES = ['Completed']

// // // ─── Chip colour ──────────────────────────────────────────────────────────────
// // const statusChipStyle = (status: string) => {
// //   if (COMPLETED_STATUSES.includes(status)) {
// //     return { bgcolor: '#E8F5E9', color: '#4CAF50' }
// //   }
// //   return { bgcolor: '#FFF3E0', color: '#FF9800' }
// // }

// // const getDisplayStatus = (status: string) => {
// //   if (COMPLETED_STATUSES.includes(status)) {
// //     return 'Completed'
// //   }
// //   return 'Pending'
// // }
// // // ─── Role-based type filter ───────────────────────────────────────────────────
// // const applyTypeFilter = (
// //   data: SurrenderRow[],
// //   typeKey: string,
// //   user: LoggedInUser
// // ): SurrenderRow[] => {
// //   switch (typeKey) {
// //     case 'pending-my':
// //       return data.filter(
// //         (r) => r.user_requested === user.user_id && PENDING_STATUSES.includes(r.status)
// //       )
// //     case 'completed-my':
// //       return data.filter(
// //         (r) => r.user_requested === user.user_id && COMPLETED_STATUSES.includes(r.status)
// //       )
// //     default:
// //       return data
// //   }
// // }

// // // ─── Component ────────────────────────────────────────────────────────────────
// // export default function SurrenderRequestPage() {
// //   const router = useRouter()

// //   const [allData, setAllData] = useState<SurrenderRow[]>([])
// //   const [filteredData, setFilteredData] = useState<SurrenderRow[]>([])
// //   const [loading, setLoading] = useState(false)
// //   const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null)

// //   const [selectedMenu, setSelectedMenu] = useState('Surrender')
// //   const [selectedType, setSelectedType] = useState(0)

// //   const [year, setYear] = useState('2026')
// //   const [month, setMonth] = useState('')
// //   const [department, setDepartment] = useState('')

// //   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
// //   const [selectedRow, setSelectedRow] = useState<SurrenderRow | null>(null)

// //   // ── Temp hardcoded user — replace with real auth later ────────────────────
// //   // TODO: jab login ban jaye to ye hatao aur real user data lagao
// //   useEffect(() => {
// //     const storedUser = localStorage.getItem('user')

// //     if (storedUser) {
// //       const user = JSON.parse(storedUser)

// //       setLoggedInUser({
// //         user_id: user.id,
// //         department_id: user.department_id || user.department,
// //         department_name: user.department,
// //         name: user.user_name,
// //       })
// //     }
// //   }, [])

// //   // ── Fetch data ─────────────────────────────────────────────────────────────
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         setLoading(true)
// //         const res = await fetch('http://localhost:8000/api/v1/imprest/')
// //         const data = await res.json()
// //         setAllData(data)
// //       } catch (err) {
// //         console.error('Error fetching surrender data:', err)
// //       } finally {
// //         setLoading(false)
// //       }
// //     }
// //     fetchData()
// //   }, [])

// //   // ── Re-apply when data or user loads ──────────────────────────────────────
// //   useEffect(() => {
// //     if (!loggedInUser) return
// //     runFilters(selectedType, year, month, department, allData, loggedInUser)
// //   }, [allData, loggedInUser])

// //   // ── Core filter function ───────────────────────────────────────────────────
// //   const runFilters = (
// //     typeIndex: number,
// //     yr: string,
// //     mn: string,
// //     dept: string,
// //     data: SurrenderRow[],
// //     user: LoggedInUser
// //   ) => {
// //     // 1. Role-based type filter
// //     let result = applyTypeFilter(data, requestTypes[typeIndex].key, user)

// //     // 2. Year
// //     if (yr) {
// //       result = result.filter(
// //         (r) => new Date(r.created_on).getFullYear().toString() === yr
// //       )
// //     }

// //     // 3. Month
// //     if (mn) {
// //       const monthIndex = months.indexOf(mn)
// //       result = result.filter(
// //         (r) => new Date(r.created_on).getMonth() === monthIndex
// //       )
// //     }

// //     // 4. Department (extra sub-filter)
// //     if (dept) {
// //       result = result.filter(
// //         (r) => r.department_name.toLowerCase() === dept.toLowerCase()
// //       )
// //     }

// //     setFilteredData(result)
// //   }

// //   const applyFilters = () => {
// //     if (!loggedInUser) return
// //     runFilters(selectedType, year, month, department, allData, loggedInUser)
// //   }

// //   const resetFilters = () => {
// //     setYear('2026')
// //     setMonth('')
// //     setDepartment('')
// //     if (loggedInUser) runFilters(selectedType, '2026', '', '', allData, loggedInUser)
// //   }

// //   const handleTypeChange = (index: number) => {
// //     setSelectedType(index)
// //     if (loggedInUser) runFilters(index, year, month, department, allData, loggedInUser)
// //   }

// //   // ── Department dropdown built from API data ────────────────────────────────
// //   const departmentOptions = Array.from(new Set(allData.map((r) => r.department_name)))

// //   // ── Menu helpers ───────────────────────────────────────────────────────────
// //   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, row: SurrenderRow) => {
// //     setAnchorEl(event.currentTarget)
// //     setSelectedRow(row)
// //   }

// //   const handleMenuClose = () => {
// //     setAnchorEl(null)
// //     setSelectedRow(null)
// //   }

// //   const handleView = () => {
// //     if (!selectedRow) return
// //     router.push(`/surrender/view/${selectedRow.imprest_id}`)
// //     handleMenuClose()
// //   }

// //   const handleEdit = () => {
// //     if (!selectedRow) return
// //     router.push(`/surrender/edit/${selectedRow.imprest_id}`)
// //     handleMenuClose()
// //   }

// //   const handleDelete = () => {
// //     console.log('Delete:', selectedRow)
// //     handleMenuClose()
// //   }

// //   // ── Render ─────────────────────────────────────────────────────────────────
// //   return (
// //     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
// //       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

// //       <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
// //         <Header />

// //         <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
// //           <Box sx={{ p: 3 }}>
// //             <Paper elevation={0} sx={{ p: 3, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>

// //               {/* ── Gradient Header ── */}
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
// //                     Surrender Requests
// //                   </Typography>
// //                   <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
// //                     {loggedInUser
// //                       ? `Logged in as: ${loggedInUser.name} — ${loggedInUser.department_name}`
// //                       : 'Loading...'}
// //                   </Typography>
// //                 </Box>
// //                 {/* <Button
// //                   variant="contained"
// //                   sx={{
// //                     bgcolor: 'white',
// //                     color: '#1A1A1A',
// //                     textTransform: 'none',
// //                     fontWeight: 600,
// //                     '&:hover': { bgcolor: '#F5F5F5' },
// //                   }}
// //                   onClick={() => router.push('/surrender/create')}
// //                 >
// //                   Create Surrender +
// //                 </Button> */}
// //               </Box>

// //               {/* ── Select Type ── */}
// //               <Box sx={{ mb: 3 }}>
// //                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
// //                   Select Type
// //                 </Typography>
// //                 <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
// //                   {requestTypes.map((type, index) => (
// //                     <Button
// //                       key={index}
// //                       variant={selectedType === index ? 'contained' : 'outlined'}
// //                       onClick={() => handleTypeChange(index)}
// //                       sx={{
// //                         textTransform: 'none',
// //                         borderRadius: 1.5,
// //                         px: 2.5,
// //                         py: 0.8,
// //                         fontSize: '0.875rem',
// //                         fontWeight: 500,
// //                         ...(selectedType === index
// //                           ? { bgcolor: type.color, color: 'white', '&:hover': { bgcolor: type.color, opacity: 0.9 } }
// //                           : { borderColor: type.color, color: type.color, '&:hover': { bgcolor: `${type.color}10` } }),
// //                       }}
// //                     >
// //                       {type.label}
// //                     </Button>
// //                   ))}
// //                 </Box>
// //               </Box>

// //               {/* ── Filter By ── */}
// //               <Box sx={{ mb: 3 }}>
// //                 <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
// //                   Filter By
// //                 </Typography>

// //                 <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>

// //                   {/* Year */}
// //                   <TextField
// //                     select size="small" label="Year" value={year}
// //                     onChange={(e) => setYear(e.target.value)}
// //                     sx={{ minWidth: 140 }}
// //                   >
// //                     {years.map((y) => <MenuItem key={y} value={y}>{y}</MenuItem>)}
// //                   </TextField>

// //                   {/* Month */}
// //                   <TextField
// //                     select size="small" label="Month" value={month}
// //                     onChange={(e) => setMonth(e.target.value)}
// //                     sx={{ minWidth: 150 }}
// //                   >
// //                     <MenuItem value="">All Months</MenuItem>
// //                     {months.map((m) => <MenuItem key={m} value={m}>{m}</MenuItem>)}
// //                   </TextField>

// //                   {/* Department — dynamic from API */}
// //                   <TextField
// //                     select size="small" label="Department" value={department}
// //                     onChange={(e) => setDepartment(e.target.value)}
// //                     sx={{ minWidth: 170 }}
// //                   >
// //                     <MenuItem value="">All Departments</MenuItem>
// //                     {departmentOptions.map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}
// //                   </TextField>

// //                   <Box sx={{ display: 'flex', gap: 1 }}>
// //                     <Button variant="outlined" onClick={resetFilters}>Reset</Button>
// //                     <Button
// //                       variant="contained"
// //                       sx={{ bgcolor: '#FF6B35', '&:hover': { bgcolor: '#e55a25' } }}
// //                       onClick={applyFilters}
// //                     >
// //                       Search
// //                     </Button>
// //                   </Box>
// //                 </Box>

// //                 {/* Record count */}
// //                 <Typography variant="caption" sx={{ color: '#888', mt: 1, display: 'block' }}>
// //                   Showing {filteredData.length} of {allData.length} records
// //                   &nbsp;·&nbsp; Type: <strong>{requestTypes[selectedType].label}</strong>
// //                 </Typography>
// //               </Box>

// //               {/* ── Table ── */}
// //               <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
// //                 Dashboard
// //               </Typography>

// //               <TableContainer>
// //                 <Table>
// //                   <TableHead sx={{ bgcolor: '#F9FAFB' }}>
// //                     <TableRow>
// //                       <TableCell sx={{ fontWeight: 600 }}>Imprest Number</TableCell>
// //                       <TableCell sx={{ fontWeight: 600 }}>Request Date</TableCell>
// //                       <TableCell sx={{ fontWeight: 600 }}>Requested By</TableCell>
// //                       <TableCell sx={{ fontWeight: 600 }}>Entered By</TableCell>
// //                       <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
// //                       <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
// //                       <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
// //                     </TableRow>
// //                   </TableHead>

// //                   <TableBody>
// //                     {loading ? (
// //                       <TableRow>
// //                         <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
// //                           <CircularProgress size={24} sx={{ color: '#FF6B35' }} />
// //                         </TableCell>
// //                       </TableRow>
// //                     ) : filteredData.length === 0 ? (
// //                       <TableRow>
// //                         <TableCell colSpan={7} align="center" sx={{ py: 4, color: '#888' }}>
// //                           No records found for the selected filters.
// //                         </TableCell>
// //                       </TableRow>
// //                     ) : (
// //                       filteredData.map((row) => (
// //                         <TableRow key={row.imprest_id} hover>
// //                           <TableCell>{row.request_no}</TableCell>
// //                           <TableCell>
// //                             {new Date(row.created_on).toLocaleDateString('en-GB', {
// //                               day: '2-digit', month: 'short', year: 'numeric',
// //                             })}
// //                           </TableCell>
// //                           <TableCell>{row.user_requested_name}</TableCell>
// //                           <TableCell>{row.user_entered_name}</TableCell>
// //                           <TableCell>{row.department_name}</TableCell>
// //                           <TableCell>
// //                             <Chip
// //                               label={getDisplayStatus(row.status)}
// //                               size="small"
// //                               sx={{
// //                                 ...statusChipStyle(row.status),
// //                                 fontWeight: 500,
// //                                 fontSize: '0.75rem'
// //                               }}
// //                             />
// //                           </TableCell>
// //                           <TableCell>
// //                             <IconButton size="small" onClick={(e) => handleMenuOpen(e, row)}>
// //                               <MoreVertIcon fontSize="small" />
// //                             </IconButton>
// //                           </TableCell>
// //                         </TableRow>
// //                       ))
// //                     )}
// //                   </TableBody>
// //                 </Table>
// //               </TableContainer>

// //               {/* ── Action Menu ── */}
// //               <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
// //                 <MenuItemComponent onClick={handleView}>
// //                   <ViewIcon sx={{ fontSize: 18, mr: 1 }} /> View
// //                 </MenuItemComponent>
// //                 <MenuItemComponent onClick={handleEdit}>
// //                   <EditIcon sx={{ fontSize: 18, mr: 1 }} /> Edit
// //                 </MenuItemComponent>
// //                 <MenuItemComponent onClick={handleDelete} sx={{ color: '#EF5350' }}>
// //                   <DeleteIcon sx={{ fontSize: 18, mr: 1 }} /> Delete
// //                 </MenuItemComponent>
// //               </Menu>

// //             </Paper>
// //           </Box>
// //         </Box>
// //       </Box>
// //     </Box>
// //   )
// // }

// 'use client'

// import { useState, useEffect, useRef } from "react"
// import { useRouter } from "next/navigation"
// import Sidebar from "../main/Sidebar"
// import Header from "../main/Header"

// const API_BASE = "http://localhost:8000/api/v1"

// const MONTHS = [
//   "January","February","March","April","May","June",
//   "July","August","September","October","November","December",
// ]
// const YEARS = ["2024","2025","2026"]

// // ─────────────────────────────────────────────────────────────────────────────
// //  Surrender workflow statuses (imprest API ka "status" field)
// //  Draft → Submitted → FinanceManagerApproved → DirectorApproved → Completed
// //  Rejected: Finance ya Director ne reject kiya → wapis user ke paas
// // ─────────────────────────────────────────────────────────────────────────────
// const STATUS_CFG = {
//   Draft:                  { label: "Draft",             bg: "#F3F4F6", color: "#6B7280", dot: "#9CA3AF" },
//   Submitted:              { label: "Submitted",          bg: "#FFF7ED", color: "#C2410C", dot: "#F97316" },
//   FinanceManagerApproved: { label: "Finance Approved",   bg: "#ECFDF5", color: "#065F46", dot: "#10B981" },
//   DirectorApproved:       { label: "Director Approved",  bg: "#EFF6FF", color: "#1D4ED8", dot: "#3B82F6" },
//   Completed:              { label: "Completed",          bg: "#F0FDF4", color: "#166534", dot: "#22C55E" },
//   Rejected:               { label: "Rejected",           bg: "#FEF2F2", color: "#991B1B", dot: "#EF4444" },
// }

// const PENDING_STATUSES  = ["Draft","Submitted","FinanceManagerApproved","DirectorApproved","Rejected"]
// const COMPLETE_STATUSES = ["Completed"]

// // ── Role-based tab visibility ─────────────────────────────────────────────────
// const tabsForRole = (role) => {
//   const base = [
//     { key: "my-pending",   label: "My Pending" },
//     { key: "my-completed", label: "My Completed" },
//   ]
//   if (["manager","department"].includes(role))
//     return [...base, { key: "dept", label: "Department" }]
//   if (["admin","finance","finance_manager","director"].includes(role))
//     return [...base, { key: "dept", label: "Department" }, { key: "all", label: "All" }]
//   return base
// }

// // ── Tab filtering logic ───────────────────────────────────────────────────────
// const filterByTab = (data, tabKey, user) => {
//   switch (tabKey) {
//     case "my-pending":
//       return data.filter(r => r.user_requested === user.user_id && PENDING_STATUSES.includes(r.status))
//     case "my-completed":
//       return data.filter(r => r.user_requested === user.user_id && COMPLETE_STATUSES.includes(r.status))
//     case "dept":
//       return data.filter(r => r.department === user.department_id || r.department_name === user.department_name)
//     case "all":
//       return data
//     default:
//       return data
//   }
// }

// // ── Status Badge ──────────────────────────────────────────────────────────────
// function StatusBadge({ status }) {
//   const cfg = STATUS_CFG[status] || { label: status, bg: "#F3F4F6", color: "#6B7280", dot: "#9CA3AF" }
//   return (
//     <span style={{
//       display: "inline-flex", alignItems: "center", gap: 5,
//       padding: "3px 11px", borderRadius: 20,
//       background: cfg.bg, color: cfg.color,
//       fontSize: 12, fontWeight: 600,
//       border: `1px solid ${cfg.color}28`,
//     }}>
//       <span style={{ width: 6, height: 6, borderRadius: "50%", background: cfg.dot, flexShrink: 0 }} />
//       {cfg.label}
//     </span>
//   )
// }

// // ── Menu item style ───────────────────────────────────────────────────────────
// const menuItemSx = (danger = false) => ({
//   display: "flex", alignItems: "center", gap: 8,
//   width: "100%", padding: "10px 16px",
//   background: "none", border: "none",
//   fontSize: 13, fontWeight: 500, cursor: "pointer",
//   color: danger ? "#EF4444" : "#374151", textAlign: "left",
// })

// // ─────────────────────────────────────────────────────────────────────────────
// export default function SurrenderListPage() {
//   const router = useRouter()

//   const [user,         setUser]         = useState(null)
//   const [allData,      setAllData]      = useState([])
//   const [filtered,     setFiltered]     = useState([])
//   const [loading,      setLoading]      = useState(true)
//   const [deleting,     setDeleting]     = useState(null)

//   const [tab,    setTab]    = useState("my-pending")
//   const [year,   setYear]   = useState("2026")
//   const [month,  setMonth]  = useState("")
//   const [dept,   setDept]   = useState("")
//   const [search, setSearch] = useState("")

//   const [menuOpen,     setMenuOpen]     = useState(null)
//   const [toast,        setToast]        = useState(null)
//   const [selectedMenu, setSelectedMenu] = useState("Surrender")
//   const menuRef = useRef(null)

//   // ── Load user from localStorage ───────────────────────────────────────────
//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem("user")
//       console.log(stored,"stored");
      
//       if (stored) {
//         const u = JSON.parse(stored)
//         setUser({
//           user_id:         u.id,
//           name:            u.user_name || u.name || "User",
//           role:            (u.role || "user").toLowerCase(),
//           department_id:   u.department_id || u.department,
//           department_name: u.department_name || u.department || "",
//         })
//       }
//     } catch {}
//   }, [])

//   // ── Fetch imprest data ────────────────────────────────────────────────────
//   useEffect(() => { fetchData() }, [])

//   useEffect(() => {
//     if (user) runFilters(tab, year, month, dept, search, allData, user)
//   }, [allData, user])

//   // ── Close menu on outside click ───────────────────────────────────────────
//   useEffect(() => {
//     const h = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(null) }
//     document.addEventListener("mousedown", h)
//     return () => document.removeEventListener("mousedown", h)
//   }, [])

//   const fetchData = async () => {
//     setLoading(true)
//     try {
//       const res  = await fetch(`${API_BASE}/imprest/`)
//       const data = await res.json()
//       console.log(data,"data");
      
//       setAllData( data)
//     } catch {
//       showToast("Data load karne mein error aaya", "error")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const runFilters = (t, y, m, d, s, data, usr) => {
//     let res = filterByTab(data, t, usr)
//     if (y) res = res.filter(r => (r.created_on || "").startsWith(y))
//     if (m) res = res.filter(r => new Date(r.created_on).getMonth() === MONTHS.indexOf(m))
//     if (d) res = res.filter(r => (r.department_name || "").toLowerCase() === d.toLowerCase())
//     if (s) {
//       const sl = s.toLowerCase()
//       res = res.filter(r =>
//         (r.request_no          || "").toLowerCase().includes(sl) ||
//         (r.user_requested_name || "").toLowerCase().includes(sl) ||
//         (r.project_name        || "").toLowerCase().includes(sl) ||
//         (r.department_name     || "").toLowerCase().includes(sl)
//       )
//     }
//     setFiltered(res)
//   }

//   const handleTabChange = (t) => { setTab(t); if (user) runFilters(t, year, month, dept, search, allData, user) }
//   const handleSearch    = () => { if (user) runFilters(tab, year, month, dept, search, allData, user) }
//   const handleReset     = () => {
//     setYear("2026"); setMonth(""); setDept(""); setSearch("")
//     if (user) runFilters(tab, "2026", "", "", "", allData, user)
//   }

//   const handleDelete = async (row) => {
//     if (!window.confirm(`"${row.request_no}" delete karna chahte hain?`)) return
//     setDeleting(row.imprest_id); setMenuOpen(null)
//     try {
//       await fetch(`${API_BASE}/imprest/${row.imprest_id}/`, { method: "DELETE" })
//       const updated = allData.filter(r => r.imprest_id !== row.imprest_id)
//       setAllData(updated)
//       runFilters(tab, year, month, dept, search, updated, user)
//       showToast(`${row.request_no} delete ho gaya`)
//     } catch {
//       showToast("Delete karne mein error aaya", "error")
//     } finally {
//       setDeleting(null)
//     }
//   }

//   const showToast = (msg, type = "success") => {
//     setToast({ msg, type })
//     setTimeout(() => setToast(null), 3200)
//   }

//   const deptOptions = [...new Set(allData.map(r => r.department_name).filter(Boolean))]
//   const tabs = user ? tabsForRole(user.role) : [
//     { key: "my-pending", label: "My Pending" },
//     { key: "my-completed", label: "My Completed" },
//   ]

//   // ─────────────────────────────────────────────────────────────────────────
//   return (
//     <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#F5F7FA", fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

//       <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
//         <Header />

//         <div style={{ flexGrow: 1, overflow: "auto", padding: "24px 28px" }}>

//           {/* ── Header ── */}
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
//             <div>
//               <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#F97316", textTransform: "uppercase", marginBottom: 3 }}>Finance Module</div>
//               <h1 style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#111827" }}>Surrender Requests</h1>
//               {user && (
//                 <p style={{ margin: "3px 0 0", fontSize: 13, color: "#6B7280" }}>
//                   Logged in as <strong style={{ color: "#374151" }}>{user.name}</strong>
//                   {user.department_name ? ` · ${user.department_name}` : ""}
//                 </p>
//               )}
//             </div>
//             <button
//               onClick={() => router.push("/surrender/create")}
//               style={{
//                 background: "linear-gradient(135deg,#F97316,#EA580C)",
//                 color: "white", border: "none", borderRadius: 10,
//                 padding: "10px 20px", fontSize: 13, fontWeight: 700,
//                 cursor: "pointer", display: "flex", alignItems: "center", gap: 7,
//                 boxShadow: "0 4px 12px rgba(249,115,22,0.3)",
//               }}
//             >
//               <span style={{ fontSize: 17 }}>+</span> New Surrender
//             </button>
//           </div>

//           {/* ── Tabs ── */}
//           <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
//             {tabs.map(t => (
//               <button key={t.key} onClick={() => handleTabChange(t.key)}
//                 style={{
//                   padding: "8px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer",
//                   border: tab === t.key ? "none" : "1.5px solid #E5E7EB",
//                   background: tab === t.key ? "linear-gradient(135deg,#F97316,#EA580C)" : "white",
//                   color: tab === t.key ? "white" : "#374151",
//                   boxShadow: tab === t.key ? "0 4px 10px rgba(249,115,22,0.27)" : "0 1px 3px rgba(0,0,0,0.05)",
//                   transition: "all 0.15s",
//                 }}
//               >
//                 {t.label}
//               </button>
//             ))}
//           </div>

//           {/* ── Filters ── */}
//           <div style={{ background: "white", borderRadius: 12, padding: "18px 22px", marginBottom: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.05)", border: "1px solid #F3F4F6" }}>
//             <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: "#9CA3AF", textTransform: "uppercase", marginBottom: 12 }}>Filter By</div>
//             <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
//               <div style={{ position: "relative", flex: "1 1 200px" }}>
//                 <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }}>🔍</span>
//                 <input value={search} onChange={e => setSearch(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSearch()}
//                   placeholder="Request no, project, user..."
//                   style={{ width: "100%", padding: "8px 10px 8px 32px", borderRadius: 8, border: "1.5px solid #E5E7EB", fontSize: 13, background: "#F9FAFB", color: "#374151", outline: "none", boxSizing: "border-box", fontFamily: "inherit" }}
//                 />
//               </div>
//               <select value={year} onChange={e => setYear(e.target.value)}
//                 style={{ padding: "8px 12px", borderRadius: 8, border: "1.5px solid #E5E7EB", fontSize: 13, background: "#F9FAFB", color: "#374151", minWidth: 100, fontFamily: "inherit" }}>
//                 <option value="">All Years</option>
//                 {YEARS.map(y => <option key={y}>{y}</option>)}
//               </select>
//               <select value={month} onChange={e => setMonth(e.target.value)}
//                 style={{ padding: "8px 12px", borderRadius: 8, border: "1.5px solid #E5E7EB", fontSize: 13, background: "#F9FAFB", color: "#374151", minWidth: 130, fontFamily: "inherit" }}>
//                 <option value="">All Months</option>
//                 {MONTHS.map(m => <option key={m}>{m}</option>)}
//               </select>
//               <select value={dept} onChange={e => setDept(e.target.value)}
//                 style={{ padding: "8px 12px", borderRadius: 8, border: "1.5px solid #E5E7EB", fontSize: 13, background: "#F9FAFB", color: "#374151", minWidth: 150, fontFamily: "inherit" }}>
//                 <option value="">All Departments</option>
//                 {deptOptions.map(d => <option key={d}>{d}</option>)}
//               </select>
//               <button onClick={handleSearch}
//                 style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: "#F97316", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
//                 Search
//               </button>
//               <button onClick={handleReset}
//                 style={{ padding: "8px 16px", borderRadius: 8, border: "1.5px solid #E5E7EB", background: "white", color: "#374151", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
//                 Reset
//               </button>
//             </div>
//             <div style={{ marginTop: 10, fontSize: 12, color: "#9CA3AF" }}>
//               Showing <strong style={{ color: "#374151" }}>{filtered.length}</strong> of <strong style={{ color: "#374151" }}>{allData.length}</strong> records
//             </div>
//           </div>

//           {/* ── Table ── */}
//           <div style={{ background: "white", borderRadius: 12, boxShadow: "0 1px 4px rgba(0,0,0,0.05)", border: "1px solid #F3F4F6", overflow: "hidden" }}>
//             <div style={{ padding: "14px 22px", borderBottom: "1px solid #F3F4F6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <span style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>Dashboard</span>
//               <button onClick={fetchData}
//                 style={{ background: "none", border: "1px solid #E5E7EB", borderRadius: 6, padding: "5px 12px", cursor: "pointer", fontSize: 12, color: "#6B7280" }}>
//                 🔄 Refresh
//               </button>
//             </div>

//             <div style={{ overflowX: "auto" }}>
//               <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
//                 <thead>
//                   <tr style={{ background: "#F9FAFB" }}>
//                     {["Request No","Date","Requested By","Entered By","Department","Project","Status","Actions"].map(h => (
//                       <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontWeight: 700, color: "#374151", fontSize: 11, letterSpacing: 0.3, borderBottom: "1px solid #F3F4F6", whiteSpace: "nowrap" }}>
//                         {h}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {loading ? (
//                     <tr><td colSpan={8} style={{ textAlign: "center", padding: "52px", color: "#9CA3AF", fontSize: 13 }}>
//                       ⏳ Loading...
//                     </td></tr>
//                   ) : filtered.length === 0 ? (
//                     <tr><td colSpan={8} style={{ textAlign: "center", padding: "52px" }}>
//                       <div style={{ fontSize: 32, marginBottom: 8 }}>📂</div>
//                       <div style={{ fontWeight: 600, color: "#374151", fontSize: 14 }}>Koi record nahi mila</div>
//                       <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 4 }}>Filter ya tab change karein</div>
//                     </td></tr>
//                   ) : filtered.map((row, idx) => (
//                     <tr key={row.imprest_id}
//                       style={{ borderBottom: "1px solid #F9FAFB", background: idx % 2 === 0 ? "white" : "#FAFAFA", transition: "background 0.12s" }}
//                       onMouseEnter={e => e.currentTarget.style.background = "#FFF7ED"}
//                       onMouseLeave={e => e.currentTarget.style.background = idx % 2 === 0 ? "white" : "#FAFAFA"}
//                     >
//                       <td style={{ padding: "12px 16px", fontWeight: 700, color: "#F97316" }}>{row.request_no}</td>
//                       <td style={{ padding: "12px 16px", color: "#6B7280", whiteSpace: "nowrap" }}>
//                         {row.created_on ? new Date(row.created_on).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "—"}
//                       </td>
//                       <td style={{ padding: "12px 16px" }}>
//                         <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
//                           <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#F97316,#EA580C)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
//                             {(row.user_requested_name || "U").charAt(0).toUpperCase()}
//                           </div>
//                           <span style={{ color: "#374151", fontWeight: 500 }}>{row.user_requested_name || "—"}</span>
//                         </div>
//                       </td>
//                       <td style={{ padding: "12px 16px", color: "#6B7280" }}>{row.user_entered_name || "—"}</td>
//                       <td style={{ padding: "12px 16px", color: "#6B7280" }}>{row.department_name || "—"}</td>
//                       <td style={{ padding: "12px 16px", color: "#374151", maxWidth: 140, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.project_name || "—"}</td>
//                       <td style={{ padding: "12px 16px" }}><StatusBadge status={row.status} /></td>

//                       {/* Action menu */}
//                       <td style={{ padding: "12px 16px", position: "relative" }} ref={menuOpen === row.imprest_id ? menuRef : null}>
//                         <button
//                           onClick={() => setMenuOpen(menuOpen === row.imprest_id ? null : row.imprest_id)}
//                           style={{ background: "none", border: "1.5px solid #E5E7EB", borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontSize: 16, color: "#6B7280" }}>
//                           ⋮
//                         </button>
//                         {menuOpen === row.imprest_id && (
//                           <div style={{ position: "absolute", right: 10, top: 38, background: "white", border: "1px solid #E5E7EB", borderRadius: 10, boxShadow: "0 8px 24px rgba(0,0,0,0.12)", zIndex: 100, minWidth: 150, overflow: "hidden" }}>
//                             <button onClick={() => { setMenuOpen(null); router.push(`/surrender/view/${row.imprest_id}`) }}
//                               style={menuItemSx()}
//                               onMouseEnter={e => e.currentTarget.style.background = "#F9FAFB"}
//                               onMouseLeave={e => e.currentTarget.style.background = "none"}>
//                               👁 &nbsp;View
//                             </button>
//                             {row.status !== "Completed" && (
//                               <button onClick={() => { setMenuOpen(null); router.push(`/surrender/edit/${row.imprest_id}`) }}
//                                 style={menuItemSx()}
//                                 onMouseEnter={e => e.currentTarget.style.background = "#F9FAFB"}
//                                 onMouseLeave={e => e.currentTarget.style.background = "none"}>
//                                 ✏️ &nbsp;Edit
//                               </button>
//                             )}
//                             {["Draft","Rejected"].includes(row.status) && user && (row.user_requested === user.user_id || user.role === "admin") && (
//                               <button
//                                 onClick={() => handleDelete(row)}
//                                 disabled={deleting === row.imprest_id}
//                                 style={menuItemSx(true)}
//                                 onMouseEnter={e => e.currentTarget.style.background = "#FEF2F2"}
//                                 onMouseLeave={e => e.currentTarget.style.background = "none"}>
//                                 🗑 &nbsp;{deleting === row.imprest_id ? "Deleting..." : "Delete"}
//                               </button>
//                             )}
//                           </div>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* ── Workflow legend ── */}
//           <div style={{ marginTop: 14, background: "white", borderRadius: 10, padding: "14px 20px", border: "1px solid #F3F4F6" }}>
//             <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: "#9CA3AF", textTransform: "uppercase", marginBottom: 8 }}>Surrender Workflow</div>
//             <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
//               {[
//                 { l: "Draft",            c: "#6B7280" }, { a: true },
//                 { l: "Submitted",        c: "#C2410C" }, { a: true },
//                 { l: "Finance Approved", c: "#065F46" }, { a: true },
//                 { l: "Director Approved",c: "#1D4ED8" }, { a: true },
//                 { l: "Completed 🔒",     c: "#166534" },
//               ].map((x, i) => x.a
//                 ? <span key={i} style={{ color: "#D1D5DB" }}>→</span>
//                 : <span key={i} style={{ padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, background: x.c + "14", color: x.c, border: `1px solid ${x.c}28` }}>{x.l}</span>
//               )}
//               <span style={{ fontSize: 11, color: "#9CA3AF", marginLeft: 6 }}>· Rejection sends back to user for resubmit</span>
//             </div>
//           </div>

//         </div>
//       </div>

//       {toast && (
//         <div style={{
//           position: "fixed", bottom: 24, right: 24, zIndex: 9999,
//           background: toast.type === "error" ? "#FEF2F2" : "#F0FDF4",
//           border: `1px solid ${toast.type === "error" ? "#FCA5A5" : "#86EFAC"}`,
//           color: toast.type === "error" ? "#991B1B" : "#166534",
//           padding: "11px 18px", borderRadius: 10, fontSize: 13, fontWeight: 600,
//           boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
//         }}>
//           {toast.type === "error" ? "❌" : "✅"} {toast.msg}
//         </div>
//       )}

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
//         * { box-sizing: border-box; }
//         input, select { font-family: inherit; }
//       `}</style>
//     </div>
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
  status: string
  status_display: string
  created_on: string
}

interface LoggedInUser {
  user_id: number
  department_id: number
  department_name: string
  name: string
  role: string // 'user' | 'department' | 'manager' | 'admin' | 'finance' | 'finance_manager' | 'director'
}

// ─── Constants ────────────────────────────────────────────────────────────────
// Docs: Surrender list shows imprests that are FinanceApproved
// Status flow: FinanceApproved → Surrendered → FMApproved → Completed / Rejected
const SURRENDER_VISIBLE_STATUSES = [
  'FinanceApproved',
  'Draft',
  'Surrendered',
  'FMApproved',
  'Completed',
  'Rejected',
]

const PENDING_STATUSES = ['FinanceApproved', 'Draft', 'Surrendered', 'FMApproved']
const COMPLETED_STATUSES = ['Completed']

// Roles that can see ALL imprests (docs: Admin, Finance, Finance Manager, Director)
const ALL_ACCESS_ROLES = ['admin', 'finance', 'finance_manager', 'director']

const requestTypes = [
  { label: 'My Pending Surrender', color: '#FF6B35', key: 'pending-my' },
  { label: 'My Completed Surrender', color: '#4CAF50', key: 'completed-my' },
]

const years = ['2024', '2025', '2026']
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

// ─── Chip colour ──────────────────────────────────────────────────────────────
const statusChipStyle = (status: string) => {
  if (COMPLETED_STATUSES.includes(status)) {
    return { bgcolor: '#E8F5E9', color: '#4CAF50' }
  }
  if (status === 'Rejected') {
    return { bgcolor: '#FEECEC', color: '#EF5350' }
  }
  if (status === 'FMApproved') {
    return { bgcolor: '#E3F2FD', color: '#1976D2' }
  }
  if (status === 'Surrendered') {
    return { bgcolor: '#FFF8E1', color: '#FF9800' }
  }
  return { bgcolor: '#FFF3E0', color: '#FF9800' }
}

const getDisplayStatus = (status: string) => {
  const map: Record<string, string> = {
    FinanceApproved: 'Finance Approved',
    Draft: 'Draft',
    Surrendered: 'Surrendered',
    FMApproved: 'FM Approved',
    Completed: 'Completed',
    Rejected: 'Rejected',
  }
  return map[status] || status
}

// ─── Role-based visibility filter (per docs) ─────────────────────────────────
// i.   User who requested → sees his imprests
// ii.  Department role → sees department imprests
// iii. Manager → sees his department imprests
// iv.  Admin, Finance, Finance Manager, Director → see all
const applyRoleVisibilityFilter = (
  data: SurrenderRow[],
  user: LoggedInUser
): SurrenderRow[] => {
  // Only show imprests that are in surrender workflow
  const visible = data.filter((r) => SURRENDER_VISIBLE_STATUSES.includes(r.status))

  if (ALL_ACCESS_ROLES.includes(user.role)) {
    return visible
  }

  if (user.role === 'department' || user.role === 'manager') {
    return visible.filter((r) => r.department === user.department_id)
  }

  // Default: regular user sees only his own
  return visible.filter((r) => r.user_requested === user.user_id)
}

// ─── Type filter (Pending / Completed) ───────────────────────────────────────
const applyTypeFilter = (
  data: SurrenderRow[],
  typeKey: string,
  user: LoggedInUser
): SurrenderRow[] => {
  const roleFiltered = applyRoleVisibilityFilter(data, user)

  switch (typeKey) {
    case 'pending-my':
      return roleFiltered.filter((r) => PENDING_STATUSES.includes(r.status))
    case 'completed-my':
      return roleFiltered.filter((r) => COMPLETED_STATUSES.includes(r.status))
    default:
      return roleFiltered
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function SurrenderRequestPage() {
  const router = useRouter()

  const [allData, setAllData] = useState<SurrenderRow[]>([])
  const [filteredData, setFilteredData] = useState<SurrenderRow[]>([])
  const [loading, setLoading] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null)

  const [selectedMenu, setSelectedMenu] = useState('Surrender')
  const [selectedType, setSelectedType] = useState(0)

  const [year, setYear] = useState('2026')
  const [month, setMonth] = useState('')
  const [department, setDepartment] = useState('')

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedRow, setSelectedRow] = useState<SurrenderRow | null>(null)

  // ── Load logged in user from localStorage ─────────────────────────────────
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

  // ── Fetch imprest data ─────────────────────────────────────────────────────
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch('http://localhost:8000/api/v1/imprest/')
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

  // ── Re-apply filters when data or user loads ──────────────────────────────
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
    let result = applyTypeFilter(data, requestTypes[typeIndex].key, user)

    if (yr) {
      result = result.filter(
        (r) => new Date(r.created_on).getFullYear().toString() === yr
      )
    }

    if (mn) {
      const monthIndex = months.indexOf(mn)
      result = result.filter(
        (r) => new Date(r.created_on).getMonth() === monthIndex
      )
    }

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

  // ── Department dropdown built from role-filtered data ─────────────────────
  const departmentOptions = loggedInUser
    ? Array.from(
        new Set(
          applyRoleVisibilityFilter(allData, loggedInUser).map((r) => r.department_name)
        )
      )
    : []

  // ── Action menu helpers ────────────────────────────────────────────────────
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

  const handleDelete = async () => {
    if (!selectedRow) return
    if (!window.confirm('Are you sure you want to delete this surrender?')) return
    try {
      await fetch(`http://localhost:8000/api/v1/imprest/${selectedRow.imprest_id}/`, {
        method: 'DELETE',
      })
      setAllData((prev) => prev.filter((r) => r.imprest_id !== selectedRow.imprest_id))
    } catch (err) {
      console.error('Delete failed:', err)
    }
    handleMenuClose()
  }

  // ── Can user edit? Only Draft or Rejected can be edited by requester ──────
  const canEdit = (row: SurrenderRow): boolean => {
    if (!loggedInUser) return false
    // Completed → no changes allowed (docs: After Completed no change anywhere)
    if (row.status === 'Completed') return false
    // Finance Manager approval page for Surrendered status
    if (row.status === 'Surrendered' && loggedInUser.role === 'finance_manager') return true
    // Director approval page for FMApproved status
    if (row.status === 'FMApproved' && loggedInUser.role === 'director') return true
    // User can edit Draft or Rejected (sent back to them)
    if (
      (row.status === 'Draft' || row.status === 'Rejected') &&
      row.user_requested === loggedInUser.user_id
    ) return true
    // FinanceApproved → user can create surrender (treated as edit/create)
    if (row.status === 'FinanceApproved' && row.user_requested === loggedInUser.user_id) return true
    return false
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
                  <TextField
                    select size="small" label="Year" value={year}
                    onChange={(e) => setYear(e.target.value)}
                    sx={{ minWidth: 140 }}
                  >
                    {years.map((y) => <MenuItem key={y} value={y}>{y}</MenuItem>)}
                  </TextField>

                  <TextField
                    select size="small" label="Month" value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    sx={{ minWidth: 150 }}
                  >
                    <MenuItem value="">All Months</MenuItem>
                    {months.map((m) => <MenuItem key={m} value={m}>{m}</MenuItem>)}
                  </TextField>

                  {/* Department filter — only shown to roles that can see multiple depts */}
                  {loggedInUser && (ALL_ACCESS_ROLES.includes(loggedInUser.role) || loggedInUser.role === 'manager' || loggedInUser.role === 'department') && (
                    <TextField
                      select size="small" label="Department" value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      sx={{ minWidth: 170 }}
                    >
                      <MenuItem value="">All Departments</MenuItem>
                      {departmentOptions.map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}
                    </TextField>
                  )}

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
                              label={getDisplayStatus(row.status)}
                              size="small"
                              sx={{
                                ...statusChipStyle(row.status),
                                fontWeight: 500,
                                fontSize: '0.75rem',
                              }}
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

                {/* Edit only shown if allowed per workflow */}
                {selectedRow && canEdit(selectedRow) && (
                  <MenuItemComponent onClick={handleEdit}>
                    <EditIcon sx={{ fontSize: 18, mr: 1 }} /> Edit
                  </MenuItemComponent>
                )}

                {/* Delete only for Draft status by the requester */}
                {selectedRow &&
                  selectedRow.status === 'Draft' &&
                  loggedInUser &&
                  selectedRow.user_requested === loggedInUser.user_id && (
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