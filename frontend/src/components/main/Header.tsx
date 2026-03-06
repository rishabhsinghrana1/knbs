'use client'

import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
} from '@mui/material'
import {
  Notifications as NotificationsIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material'

export default function Header() {
  const [notifAnchor, setNotifAnchor] = useState<null | HTMLElement>(null)
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null)

  const handleNotifClick = (event: React.MouseEvent<HTMLElement>) => {
    setNotifAnchor(event.currentTarget)
  }

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchor(event.currentTarget)
  }

  const handleClose = () => {
    setNotifAnchor(null)
    setProfileAnchor(null)
  }

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        color: '#1A1A1A',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Dashboard
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Notifications */}
          {/* <IconButton onClick={handleNotifClick} sx={{ color: '#6B7280' }}>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}

          {/* <Menu
            anchorEl={notifAnchor}
            open={Boolean(notifAnchor)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>New approval pending</MenuItem>
            <MenuItem onClick={handleClose}>Payment processed</MenuItem>
            <MenuItem onClick={handleClose}>Budget alert</MenuItem>
          </Menu> */}

          {/* User Profile */}
       

          <Menu
            anchorEl={profileAnchor}
            open={Boolean(profileAnchor)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}