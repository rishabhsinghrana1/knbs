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

// const roles = ['Admin', 'User', 'Manager', 'Supervisor']
// const departments = ['Finance', 'HR', 'Marketing', 'Software']

// export default function AddUser() {
//   const router = useRouter()
//   const [selectedMenu, setSelectedMenu] = useState('Admin')

//   const [formData, setFormData] = useState({
//     userName: '',
//     userEmail: '',
//     userPassword: '',
//     individualSite: '',
//     department: '',
//     departmentRole: '',
//     status: 'Active',
//   })

//   const handleChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }))
//   }

//   const handleSave = () => {
//     console.log('Add user:', formData)
//     // API call for adding user
//   }

//   const handleCancel = () => {
//     router.push('/admin/user-management/list')
//   }

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
//       <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />
//       <Box sx={{ flex: 1, p: 4, overflowY: 'auto' }}>
//         <Typography variant="h5" sx={{ mb: 3 }}>Add User</Typography>
//         <Paper sx={{ p: 3 }}>
//           <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
//             <TextField label="User Name" size="small" value={formData.userName} onChange={(e) => handleChange('userName', e.target.value)} />
//             <TextField label="User Email" size="small" value={formData.userEmail} onChange={(e) => handleChange('userEmail', e.target.value)} />
//             <TextField label="User Password" type="password" size="small" value={formData.userPassword} onChange={(e) => handleChange('userPassword', e.target.value)} />
//             <TextField label="Individual Site" select size="small" value={formData.individualSite} onChange={(e) => handleChange('individualSite', e.target.value)}>
//               <MenuItem value="Site 1">Site 1</MenuItem>
//               <MenuItem value="Site 2">Site 2</MenuItem>
//             </TextField>
//             <TextField label="Department" select size="small" value={formData.department} onChange={(e) => handleChange('department', e.target.value)}>
//               {departments.map((dept) => (<MenuItem key={dept} value={dept}>{dept}</MenuItem>))}
//             </TextField>
//             <TextField label="Department Role" select size="small" value={formData.departmentRole} onChange={(e) => handleChange('departmentRole', e.target.value)}>
//               {roles.map((role) => (<MenuItem key={role} value={role}>{role}</MenuItem>))}
//             </TextField>
//             <TextField label="Status" select size="small" value={formData.status} onChange={(e) => handleChange('status', e.target.value)}>
//               <MenuItem value="Active">Active</MenuItem>
//               <MenuItem value="Inactive">Inactive</MenuItem>
//             </TextField>
//           </Box>

//           <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
//             <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
//             <Button variant="contained" onClick={handleSave} sx={{ bgcolor: '#FF6B35' }}>Save</Button>
//           </Box>
//         </Paper>
//       </Box>
//     </Box>
//   )
// }

'use client'

import React, { useState } from 'react'
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Alert,
  CircularProgress,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import Sidebar from '../main/Sidebar'
import { UsersService } from '../../lib/api/services/users.service'
import type { CreateUserInput } from '../../lib/types/user'
import { toast } from 'react-toastify'  // Import toast

const roles = ['Admin', 'User', 'Manager', 'Supervisor']
const departments = ['Finance', 'HR', 'Marketing', 'Software', 'IT']
const sites = ['Delhi Office', 'Mumbai Office', 'Bangalore Office', 'Kolkata Office']

export default function AddUser() {
  const router = useRouter()
  const [selectedMenu, setSelectedMenu] = useState('User Management')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    individualSite: '',
    department: '',
    departmentRole: '',
    status: 'Active' as 'Active' | 'Inactive',
  })

  const [errors, setErrors] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    individualSite: '',
    department: '',
    departmentRole: '',
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user types
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
    setError(null)
  }

  const validateForm = (): boolean => {
    const newErrors = {
      userName: '',
      userEmail: '',
      userPassword: '',
      individualSite: '',
      department: '',
      departmentRole: '',
    }

    let isValid = true

    if (!formData.userName.trim()) {
      newErrors.userName = 'User name is required'
      isValid = false
    }

    if (!formData.userEmail.trim()) {
      newErrors.userEmail = 'Email is required'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.userEmail)) {
      newErrors.userEmail = 'Invalid email format'
      isValid = false
    }

    if (!formData.userPassword.trim()) {
      newErrors.userPassword = 'Password is required'
      isValid = false
    } else if (formData.userPassword.length < 6) {
      newErrors.userPassword = 'Password must be at least 6 characters'
      isValid = false
    }

    if (!formData.individualSite) {
      newErrors.individualSite = 'Site is required'
      isValid = false
    }

    if (!formData.department) {
      newErrors.department = 'Department is required'
      isValid = false
    }

    if (!formData.departmentRole) {
      newErrors.departmentRole = 'Role is required'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

const handleSave = async () => {
  // Validate form
  if (!validateForm()) {
    // setError('Please fill in all required fields correctly')
    return
  }

  setLoading(true)
  setError(null)
  setSuccess(false)

  try {
    // Prepare data for API (match API field names)
    const userData: CreateUserInput = {
      user_name: formData.userName,
      user_email: formData.userEmail,
      user_password: formData.userPassword,  // Added password
      individual_site: formData.individualSite,
      department: formData.department,
      department_role: formData.departmentRole,
      status: formData.status,
    }

    // Call API
    await UsersService.createUser(userData)

    setSuccess(true)
    toast.success('User created successfully!')
    // Redirect after 1.5 seconds
    setTimeout(() => {
      router.push('/admin/usermanagement')
    }, 1500)
  } catch (err: any) {
    console.error('Error creating user:', err)
      toast.error(err.message || 'Failed to create user. Please try again.')
    setError(err.message || 'Failed to create user. Please try again.')
  } finally {
    setLoading(false)
  }
}

  const handleCancel = () => {
    router.push('/admin/usermanagement')
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
      <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />
      
      <Box sx={{ flex: 1, p: 4, overflowY: 'auto' }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          Add User
        </Typography>

        {/* Success Alert */}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            User created successfully! Redirecting...
          </Alert>
        )}

        {/* Error Alert */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
            {/* User Name */}
            <TextField
              label="User Name"
              size="small"
              value={formData.userName}
              onChange={(e) => handleChange('userName', e.target.value)}
              error={!!errors.userName}
              helperText={errors.userName}
              required
              disabled={loading}
            />

            {/* User Email */}
            <TextField
              label="User Email"
              type="email"
              size="small"
              value={formData.userEmail}
              onChange={(e) => handleChange('userEmail', e.target.value)}
              error={!!errors.userEmail}
              helperText={errors.userEmail}
              required
              disabled={loading}
            />

            {/* User Password */}
            <TextField
              label="User Password"
              type="password"
              size="small"
              value={formData.userPassword}
              onChange={(e) => handleChange('userPassword', e.target.value)}
              error={!!errors.userPassword}
              helperText={errors.userPassword}
              required
              disabled={loading}
            />

            {/* Individual Site */}
            <TextField
              label="Individual Site"
              select
              size="small"
              value={formData.individualSite}
              onChange={(e) => handleChange('individualSite', e.target.value)}
              error={!!errors.individualSite}
              helperText={errors.individualSite}
              required
              disabled={loading}
            >
              {sites.map((site) => (
                <MenuItem key={site} value={site}>
                  {site}
                </MenuItem>
              ))}
            </TextField>

            {/* Department */}
            <TextField
              label="Department"
              select
              size="small"
              value={formData.department}
              onChange={(e) => handleChange('department', e.target.value)}
              error={!!errors.department}
              helperText={errors.department}
              required
              disabled={loading}
            >
              {departments.map((dept) => (
                <MenuItem key={dept} value={dept}>
                  {dept}
                </MenuItem>
              ))}
            </TextField>

            {/* Department Role */}
            <TextField
              label="Department Role"
              select
              size="small"
              value={formData.departmentRole}
              onChange={(e) => handleChange('departmentRole', e.target.value)}
              error={!!errors.departmentRole}
              helperText={errors.departmentRole}
              required
              disabled={loading}
            >
              {roles.map((role) => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </TextField>

            {/* Status */}
            <TextField
              label="Status"
              select
              size="small"
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value)}
              disabled={loading}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </TextField>
          </Box>

          {/* Buttons */}
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button
              variant="outlined"
              onClick={handleCancel}
              disabled={loading}
              sx={{ minWidth: 100 }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSave}
              disabled={loading}
              sx={{
                bgcolor: '#FF6B35',
                '&:hover': { bgcolor: '#E55A2B' },
                minWidth: 100,
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Save'}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}