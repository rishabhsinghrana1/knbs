// 'use client'

// import React, { useEffect, useState } from 'react'
// import {
//   Box,
//   Typography,
//   TextField,
//   MenuItem,
//   Button,
//   Paper,
// } from '@mui/material'
// import { useRouter, useSearchParams } from 'next/navigation'
// import Sidebar from '../main/Sidebar'

// const users = ['John Doe', 'Jane Smith', 'Mike Johnson']
// const statuses = ['Scheduled', 'Active', 'Archived']

// export default function EditUserDelegation() {
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const id = searchParams.get('id')

//   const [formData, setFormData] = useState({
//     userName: '',
//     userPassword: '',
//     delegateTo: '',
//     status: '',
//     fromDate: '',
//     toDate: '',
//     remarks: '',
//   })

//   useEffect(() => {
//     // 🔗 API CALL HERE (GET BY ID)
//     const apiResponse = {
//       userName: 'John Doe',
//       delegateTo: 'Jane Smith',
//       status: 'Active',
//       fromDate: '2026-02-04',
//       toDate: '2026-02-10',
//       remarks: 'Temporary access',
//     }
//     setFormData((prev) => ({ ...prev, ...apiResponse }))
//   }, [id])

//   const handleChange = (field: string, value: string) => {
//     setFormData({ ...formData, [field]: value })
//   }

//   const handleUpdate = () => {
//     console.log('UPDATE ID =>', id, formData)
//     // 🔗 API CALL HERE (PUT)
//     router.push('/admin/userdelegation')
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh' }}>
//       <Sidebar selectedMenu="Admin" onMenuSelect={() => {}} />

//       <Box sx={{ flex: 1, p: 4 }}>
//         <Typography variant="h5" sx={{ mb: 3 }}>
//           Edit User Delegation
//         </Typography>

//         <Paper sx={{ p: 3 }}>
//           <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
//             <TextField label="User Name" size="small" value={formData.userName} disabled />

//             <TextField
//               label="New Password (optional)"
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
//             <Button variant="contained" color="primary" onClick={handleUpdate}>
//               Update
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
import { useRouter, useParams } from 'next/navigation'
import Sidebar from '../main/Sidebar'
import { toast } from 'react-toastify'

import { UserDelegationService, UsersService } from '../../lib/api/services/users.service'
import { User, CreateUserDelegationInput } from '../../lib/types/user'

const statuses = ['Scheduled', 'Active', 'Archived']

export default function EditUserDelegation() {
  const router = useRouter()

    const params = useParams()
    const id = params.id as string
//   const id = searchParams.get('id')
console.log(id,"idididid");

  const [loadingUsers, setLoadingUsers] = useState(false)
  const [saving, setSaving] = useState(false)
  const [users, setUsers] = useState<User[]>([])

  const [formData, setFormData] = useState<CreateUserDelegationInput>({
    user_name: '',
    user_password: '',
    delegate_to: '',
    status: 'Scheduled',
    from_date: null,
    to_date: null,
    remarks: '',
  })

  const [errors, setErrors] = useState({
    user_name: '',
    user_password: '',
    delegate_to: '',
    from_date: '',
    to_date: '',
  })

  // Fetch users for delegate dropdown
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

  // Fetch existing delegation by ID
  const fetchDelegation = async (id: number) => {
    console.log(id,4545665456465454654);
    
    try {
      const data = await UserDelegationService.getDelegation(id)
      setFormData({
        user_name: data.user_name,
        user_password: '', // keep empty for optional password change
        delegate_to: data.delegate_to,
        status: data.status,
        from_date: data.from_date,
        to_date: data.to_date,
        remarks: data.remarks || '',
      })
    } catch (err) {
      console.error('Error fetching delegation:', err)
      toast.error('Failed to load delegation ❌')
    }
  }

  useEffect(() => {
    fetchUsers()
    if (id) fetchDelegation(id)
  }, [id])

  const handleChange = <K extends keyof CreateUserDelegationInput>(field: K, value: string) => {
    setFormData({
      ...formData,
      [field]: value || null,
    })
    setErrors({ ...errors, [field]: '' }) // clear error on change
  }

  // Form validation
  const validateForm = (): boolean => {
    const newErrors = {
      user_name: '',
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

    if (formData.user_password && formData.user_password.length < 6) {
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

    setErrors(newErrors)
    return isValid
  }

  // Update delegation
  const handleUpdate = async () => {
    if (!validateForm()) return

    try {
      setSaving(true)
      await UserDelegationService.updateDelegation(id!, formData)
      toast.success('User delegation updated successfully ✅')
      router.push('/admin/userdelegation')
    } catch (err) {
      console.error('Update delegation failed', err)
      toast.error('Failed to update user delegation ❌')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar selectedMenu="Admin" onMenuSelect={() => {}} />

      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Edit User Delegation
        </Typography>

        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
            {/* User Name */}
            <TextField
              label="User Name"
              size="small"
              value={formData.user_name}
              disabled
              error={!!errors.user_name}
              helperText={errors.user_name}
            />

            {/* Password */}
            <TextField
              label="New Password (optional)"
              type="password"
              size="small"
              value={formData.user_password}
              onChange={(e) => handleChange('user_password', e.target.value)}
              error={!!errors.user_password}
              helperText={errors.user_password || 'Leave blank to keep current password'}
            />

            {/* Delegate To */}
            <TextField
              label="Delegate To"
              select
              size="small"
              value={formData.delegate_to}
              onChange={(e) => handleChange('delegate_to', e.target.value)}
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
              onChange={(e) => handleChange('status', e.target.value)}
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
              onChange={(e) => handleChange('from_date', e.target.value)}
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
              onChange={(e) => handleChange('to_date', e.target.value)}
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
              value={formData.remarks}
              onChange={(e) => handleChange('remarks', e.target.value)}
            />
          </Box>

          {/* Actions */}
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button onClick={() => router.push('/admin/userdelegation')} disabled={saving}>
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: '#FF6B35' }}
              onClick={handleUpdate}
              disabled={saving}
            >
              {saving ? 'Updating...' : 'Update'}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}
