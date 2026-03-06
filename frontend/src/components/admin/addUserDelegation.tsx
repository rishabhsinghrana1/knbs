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

// const users = ['John Doe', 'Jane Smith', 'Mike Johnson']
// const statuses = ['Scheduled', 'Active', 'Archived']

// export default function AddUserDelegation() {
//   const router = useRouter()

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
//     setFormData({ ...formData, [field]: value })
//   }

//   const handleSave = () => {
//     console.log('ADD DATA =>', formData)
//     // 🔗 API CALL HERE (POST)
//     router.push('/admin/user-delegation')
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh' }}>
//       <Sidebar selectedMenu="Admin" onMenuSelect={() => {}} />

//       <Box sx={{ flex: 1, p: 4 }}>
//         <Typography variant="h5" sx={{ mb: 3 }}>
//           Add User Delegation
//         </Typography>

//         <Paper sx={{ p: 3 }}>
//           <Box
//             sx={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(3, 1fr)',
//               gap: 3,
//             }}
//           >
//             <TextField
//               label="User Name"
//               size="small"
//               value={formData.userName}
//               onChange={(e) => handleChange('userName', e.target.value)}
//             />

//             <TextField
//               label="User Password"
//               type="password"
//               size="small"
//               value={formData.userPassword}
//               onChange={(e) => handleChange('userPassword', e.target.value)}
//             />

//             <TextField
//               label="Delegate To"
//               select
//               size="small"
//               value={formData.delegateTo}
//               onChange={(e) => handleChange('delegateTo', e.target.value)}
//             >
//               {users.map((u) => (
//                 <MenuItem key={u} value={u}>
//                   {u}
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
//               {statuses.map((s) => (
//                 <MenuItem key={s} value={s}>
//                   {s}
//                 </MenuItem>
//               ))}
//             </TextField>

//             <TextField
//               label="From Date"
//               type="date"
//               size="small"
//               InputLabelProps={{ shrink: true }}
//               value={formData.fromDate}
//               onChange={(e) => handleChange('fromDate', e.target.value)}
//             />

//             <TextField
//               label="To Date"
//               type="date"
//               size="small"
//               InputLabelProps={{ shrink: true }}
//               value={formData.toDate}
//               onChange={(e) => handleChange('toDate', e.target.value)}
//             />

//             <TextField
//               label="Remarks"
//               multiline
//               rows={3}
//               sx={{ gridColumn: 'span 3' }}
//               value={formData.remarks}
//               onChange={(e) => handleChange('remarks', e.target.value)}
//             />
//           </Box>

//           <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
//             <Button onClick={() => router.push('/admin/userdelegation')}>
//               Cancel
//             </Button>
//             <Button variant="contained" sx={{ bgcolor: '#FF6B35' }} onClick={handleSave}>
//               Save
//             </Button>
//           </Box>
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
//   TextField,
//   MenuItem,
//   Button,
//   Paper,
//   CircularProgress,
// } from '@mui/material'
// import { useRouter } from 'next/navigation'
// import Sidebar from '../main/Sidebar'
// import { toast } from 'react-toastify'

// import { UserDelegationService, UsersService } from '../../lib/api/services/users.service'
// import { User, CreateUserDelegationInput } from '../../lib/types/user'

// const statuses = ['Scheduled', 'Active', 'Archived']

// export default function AddUserDelegation() {
//   const router = useRouter()

//   const [saving, setSaving] = useState(false)
//   const [loadingUsers, setLoadingUsers] = useState(false)
//   const [users, setUsers] = useState<User[]>([])

//   const [formData, setFormData] = useState<CreateUserDelegationInput>({
//     user_name: '',
//     user_password: '',
//     delegate_to: '',
//     status: 'Scheduled',
//     from_date: null,
//     to_date: null,
//     remarks: '',
//   })

//   const [errors, setErrors] = useState({
//     user_name: '',
//     user_password: '',
//     delegate_to: '',
//     from_date: '',
//     to_date: '',
//   })

//   // Fetch Users
//   const fetchUsers = async () => {
//     try {
//       setLoadingUsers(true)
//       const data = await UsersService.getUsers()
//       setUsers(data)
//     } catch (err) {
//       console.error('Error fetching users:', err)
//       toast.error('Failed to load users ❌')
//     } finally {
//       setLoadingUsers(false)
//     }
//   }

//   useEffect(() => {
//     fetchUsers()
//   }, [])

//   const handleChange = <K extends keyof CreateUserDelegationInput>(field: K, value: string) => {
//     setFormData({
//       ...formData,
//       [field]: value || null,
//     })
//     setErrors({ ...errors, [field]: '' }) // clear error on change
//   }

//   // ===============================
//   // Form Validation (required fields)
//   // ===============================
//   const validateForm = (): boolean => {
//     const newErrors = {
//       user_name: '',
//       user_password: '',
//       delegate_to: '',
//       from_date: '',
//       to_date: '',
//     }

//     let isValid = true

//     if (!formData.user_name?.trim()) {
//       newErrors.user_name = 'User name is required'
//       isValid = false
//     }

//     if (!formData.user_password?.trim()) {
//       newErrors.user_password = 'Password is required'
//       isValid = false
//     } else if (formData.user_password.length < 6) {
//       newErrors.user_password = 'Password must be at least 6 characters'
//       isValid = false
//     }

//     if (!formData.delegate_to) {
//       newErrors.delegate_to = 'Delegate To is required'
//       isValid = false
//     }

//     if (!formData.from_date) {
//       newErrors.from_date = 'From date is required'
//       isValid = false
//     }

//     if (!formData.to_date) {
//       newErrors.to_date = 'To date is required'
//       isValid = false
//     }

//     setErrors(newErrors)
//     return isValid
//   }

//   // ===============================
//   // Save Delegation
//   // ===============================
//   const handleSave = async () => {
//     if (!validateForm()) return // stop if form invalid

//     try {
//       setSaving(true)
//       await UserDelegationService.createDelegation(formData)
//       toast.success('User delegation added successfully ✅')
//       router.push('/admin/userdelegation')
//     } catch (error) {
//       console.error('Create delegation failed', error)
//       toast.error('Failed to add user delegation ❌')
//     } finally {
//       setSaving(false)
//     }
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh' }}>
//       <Sidebar selectedMenu="Admin" onMenuSelect={() => {}} />

//       <Box sx={{ flex: 1, p: 4 }}>
//         <Typography variant="h5" sx={{ mb: 3 }}>
//           Add User Delegation
//         </Typography>

//         <Paper sx={{ p: 3 }}>
//           <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
//             {/* User Name */}
//             <TextField
//               label="User Name"
//               size="small"
//               value={formData.user_name}
//               onChange={(e) => handleChange('user_name', e.target.value)}
//               required
//               error={!!errors.user_name}
//               helperText={errors.user_name}
//             />

//             {/* User Password */}
//             <TextField
//               label="User Password"
//               type="password"
//               size="small"
//               value={formData.user_password}
//               onChange={(e) => handleChange('user_password', e.target.value)}
//               required
//               error={!!errors.user_password}
//               helperText={errors.user_password}
//             />

//             {/* Delegate To */}
//             <TextField
//               label="Delegate To"
//               select
//               size="small"
//               value={formData.delegate_to}
//               onChange={(e) => handleChange('delegate_to', e.target.value)}
//               required
//               error={!!errors.delegate_to}
//               helperText={errors.delegate_to}
//             >
//               {loadingUsers ? (
//                 <MenuItem disabled>
//                   <CircularProgress size={18} /> &nbsp; Loading users...
//                 </MenuItem>
//               ) : (
//                 users.map((user) => (
//                   <MenuItem key={user.id} value={user.user_name}>
//                     {user.user_name}
//                   </MenuItem>
//                 ))
//               )}
//             </TextField>

//             {/* Status */}
//             <TextField
//               label="Status"
//               select
//               size="small"
//               value={formData.status}
//               onChange={(e) => handleChange('status', e.target.value)}
//             >
//               {statuses.map((s) => (
//                 <MenuItem key={s} value={s}>
//                   {s}
//                 </MenuItem>
//               ))}
//             </TextField>

//             {/* From Date */}
//             <TextField
//               label="From Date"
//               type="date"
//               size="small"
//               InputLabelProps={{ shrink: true }}
//               value={formData.from_date || ''}
//               onChange={(e) => handleChange('from_date', e.target.value)}
//               required
//               error={!!errors.from_date}
//               helperText={errors.from_date}
//             />

//             {/* To Date */}
//             <TextField
//               label="To Date"
//               type="date"
//               size="small"
//               InputLabelProps={{ shrink: true }}
//               value={formData.to_date || ''}
//               onChange={(e) => handleChange('to_date', e.target.value)}
//               required
//               error={!!errors.to_date}
//               helperText={errors.to_date}
//             />

//             {/* Remarks */}
//             <TextField
//               label="Remarks"
//               multiline
//               rows={3}
//               sx={{ gridColumn: 'span 3' }}
//               value={formData.remarks}
//               onChange={(e) => handleChange('remarks', e.target.value)}
//             />
//           </Box>

//           {/* Actions */}
//           <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
//             <Button onClick={() => router.push('/admin/userdelegation')} disabled={saving}>
//               Cancel
//             </Button>
//             <Button
//               variant="contained"
//               sx={{ bgcolor: '#FF6B35' }}
//               onClick={handleSave}
//               disabled={saving}
//             >
//               {saving ? 'Saving...' : 'Save'}
//             </Button>
//           </Box>
//         </Paper>
//       </Box>
//     </Box>
//   )
// }

'use client'

import React, { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  CircularProgress,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import Sidebar from '../main/Sidebar'
import { toast } from 'react-toastify'

import {
  UserDelegationService,
  UsersService,
} from '../../lib/api/services/users.service'
import { User, CreateUserDelegationInput } from '../../lib/types/user'

const statuses = ['Scheduled', 'Active', 'Archived']

export default function AddUserDelegation() {
  const router = useRouter()

  const today = new Date().toISOString().split('T')[0]

  const [saving, setSaving] = useState(false)
  const [loadingUsers, setLoadingUsers] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  const [formData, setFormData] = useState<CreateUserDelegationInput>({
    user_name: '',
    user_email: '',
    user_password: '',
    delegate_to: '', // 🔥 now this will store USER ID
    status: 'Scheduled',
    from_date: null,
    to_date: null,
    remarks: '',
  })

  const [errors, setErrors] = useState({
    user_name: '',
    user_email: '',
    user_password: '',
    delegate_to: '',
    from_date: '',
    to_date: '',
  })

  // ================= Fetch Users =================
  const fetchUsers = async () => {
    try {
      setLoadingUsers(true)
      const data = await UsersService.getUsers()
      setUsers(data)
    } catch (err) {
      console.error('Error fetching users:', err)
      toast.error('Failed to load users ❌')
    } finally {
      setLoadingUsers(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleChange = <K extends keyof CreateUserDelegationInput>(
    field: K,
    value: any
  ) => {
    setFormData({
      ...formData,
      [field]: value || null,
    })
    setErrors({ ...errors, [field]: '' })
  }

  // ================= Validation =================
  const validateForm = (): boolean => {
    const newErrors = {
      user_name: '',
          user_email: '',

      user_password: '',
      delegate_to: '',
      from_date: '',
      to_date: '',
    }

    let isValid = true

    if (!formData.user_name?.trim()) {
      newErrors.user_name = 'User name is required'
      isValid = false
    }

    if (!formData.user_password?.trim()) {
      newErrors.user_password = 'Password is required'
      isValid = false
    } else if (formData.user_password.length < 6) {
      newErrors.user_password = 'Password must be at least 6 characters'
      isValid = false
    }

    if (!formData.delegate_to) {
      newErrors.delegate_to = 'Delegate To is required'
      isValid = false
    }

    if (!formData.from_date) {
      newErrors.from_date = 'From date is required'
      isValid = false
    }

    if (!formData.to_date) {
      newErrors.to_date = 'To date is required'
      isValid = false
    }

    // 🔥 To Date must be >= From Date
    if (formData.from_date && formData.to_date) {
      if (formData.to_date < formData.from_date) {
        newErrors.to_date = 'To date must be after From date'
        isValid = false
      }
    }
    if (!formData.user_email?.trim()) {
      newErrors.user_email = 'Email is required'
      isValid = false
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.user_email)
    ) {
      newErrors.user_email = 'Invalid email format'
      isValid = false
    }
    setErrors(newErrors)
    return isValid
  }

  // ================= Save =================
  const handleSave = async () => {
    if (!validateForm()) return

    try {
      setSaving(true)

      await UserDelegationService.createDelegation(formData)

      toast.success('User delegation added successfully ✅')
      router.push('/admin/userdelegation')
    } catch (error) {
      console.error('Create delegation failed', error)
      toast.error('Failed to add user delegation ❌')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA' }}>
      <Sidebar selectedMenu="User Delegation" onMenuSelect={() => { }} />

      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Add User Delegation
        </Typography>

        <Paper sx={{ p: 3 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 3,
            }}
          >
            {/* User Name */}
            <TextField
              label="User Name"
              size="small"
              value={formData.user_name || ''}
              onChange={(e) =>
                handleChange('user_name', e.target.value)
              }
              required
              error={!!errors.user_name}
              helperText={errors.user_name}
            />
            {/* User Email */}
            <TextField
              label="User Email"
              type="email"
              size="small"
              value={formData.user_email || ''}
              onChange={(e) =>
                handleChange('user_email', e.target.value)
              }
              required
              error={!!errors.user_email}
              helperText={errors.user_email}
            />

            {/* Password */}
            <TextField
              label="User Password"
              type="password"
              size="small"
              value={formData.user_password || ''}
              onChange={(e) =>
                handleChange('user_password', e.target.value)
              }
              required
              error={!!errors.user_password}
              helperText={errors.user_password}
            />

            {/* Delegate To (ID sent to backend) */}
            <TextField
              label="Delegate To"
              select
              size="small"
              value={formData.delegate_to || ''}
              onChange={(e) =>
                handleChange('delegate_to', Number(e.target.value))
              }
              required
              error={!!errors.delegate_to}
              helperText={errors.delegate_to}
            >
              {loadingUsers ? (
                <MenuItem disabled>
                  <CircularProgress size={18} /> &nbsp; Loading users...
                </MenuItem>
              ) : (
                users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.user_name}
                  </MenuItem>
                ))
              )}
            </TextField>

            {/* Status */}
            <TextField
              label="Status"
              select
              size="small"
              value={formData.status}
              onChange={(e) =>
                handleChange('status', e.target.value)
              }
            >
              {statuses.map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </TextField>

            {/* From Date */}
            <TextField
              label="From Date"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={formData.from_date || ''}
              onChange={(e) =>
                handleChange('from_date', e.target.value)
              }
              inputProps={{ min: today }} // 🔥 no past dates
              required
              error={!!errors.from_date}
              helperText={errors.from_date}
            />

            {/* To Date */}
            <TextField
              label="To Date"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={formData.to_date || ''}
              onChange={(e) =>
                handleChange('to_date', e.target.value)
              }
              inputProps={{
                min: formData.from_date || today,
              }}
              disabled={!formData.from_date} // 🔥 disabled until start selected
              required
              error={!!errors.to_date}
              helperText={errors.to_date}
            />

            {/* Remarks */}
            <TextField
              label="Remarks"
              multiline
              rows={3}
              sx={{ gridColumn: 'span 3' }}
              value={formData.remarks || ''}
              onChange={(e) =>
                handleChange('remarks', e.target.value)
              }
            />
          </Box>

          {/* Actions */}
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 2,
            }}
          >
            <Button
              onClick={() =>
                router.push('/admin/userdelegation')
              }
              disabled={saving}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: 'white',
                color: '#1A1A1A',
                fontWeight: 600,
                '&:hover': { bgcolor: '#F5F5F5' },
              }}
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save'}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}