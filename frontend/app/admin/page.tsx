'use client'
import React, { useState } from 'react'
import { Box, Typography, Paper, List, ListItemButton, ListItemText, Avatar } from '@mui/material'
import { useRouter } from 'next/navigation'
import Sidebar from '../../src/components/main/Sidebar'  // sidebar import karna zaruri hai

export default function AdminPage() {
  const router = useRouter()
  const [selectedMenu, setSelectedMenu] = React.useState('Admin')

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
      {/* Sidebar */}
      <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

      {/* Main content */}
      <Box sx={{ flex: 1, p: 4, overflowY: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
          {/* Dummy Avatar image */}
          <Avatar sx={{ bgcolor: '#FF6B35', width: 56, height: 56 }}>K</Avatar>

          <Typography variant="h5">Admin Panel</Typography>
        </Box>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Manage users
          </Typography>
          <List>
            <ListItemButton onClick={() => router.push('/admin/userdelegation')}>
              <ListItemText primary="User delegation" secondary="Change roles and access" /> 
                <Box sx={{ ml: 1 }}>›</Box>
            </ListItemButton>
            <ListItemButton onClick={() => router.push('/admin/usermanagement')}>
              <ListItemText primary="User Management" secondary="Manage users and their roles" />
              <Box sx={{ ml: 1 }}>›</Box>
            </ListItemButton>
          </List>
        </Paper>
      </Box>
    </Box>
  )
}
