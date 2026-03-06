'use client'

import React from 'react'
import { Box, Typography, Avatar } from '@mui/material'

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        p: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          src="/api/placeholder/40/40"
          sx={{ width: 40, height: 40 }}
        />
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Michael Robinson
          </Typography>
          <Typography variant="caption" color="text.secondary">
            michael.robin@gmail.com
          </Typography>
        </Box>
      </Box>

      <Typography variant="caption" color="text.secondary">
        © 2026 KNBS. All rights reserved.
      </Typography>
    </Box>
  )
}