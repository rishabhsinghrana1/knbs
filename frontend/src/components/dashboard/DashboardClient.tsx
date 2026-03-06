'use client'

import React, { useState } from 'react'
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
  Chip,
  Button,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from '@mui/material'
import {
  FilterList as FilterIcon,
  Description as DocumentIcon,
  Payment as PaymentIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material'
import Sidebar from '../main/Sidebar'
import Header from '../main/Header'
import Footer from '../main/Footer'

// Sample data
const pendingApprovals = [
  { id: 'O9429892', date: '01/01/26', department: 'Finance Department', amount: '$12,000', status: 'Accepted' },
  { id: 'O9429891', date: '02/01/26', department: 'HR Department', amount: '$5,000', status: 'On-Hold' },
  { id: 'O9429893', date: '03/01/26', department: 'Marketing Department', amount: '$32,000', status: 'Pending' },
  { id: 'O9429894', date: '04/01/26', department: 'Software Department', amount: '$12,000', status: 'Rejected' },
]

const departmentPending = [
  { id: 'O9429892', date: '01/01/26', department: 'Finance Department', amount: '$12,000', status: 'Accepted' },
  { id: 'O9429891', date: '02/01/26', department: 'HR Department', amount: '$5,000', status: 'On-Hold' },
  { id: 'O9429893', date: '03/01/26', department: 'Marketing Department', amount: '$32,000', status: 'Accepted' },
  { id: 'O9429894', date: '04/01/26', department: 'Software Department', amount: '$12,000', status: 'Pending' },
]

const budgetData = [
  { department: 'Finance Department', code: 'O9429892', name: 'Finance', budget: '$12,000', committed: '$12,000' },
  { department: 'HR Department', code: 'O9429891', name: 'HR', budget: '$12,000', committed: '$12,000' },
  { department: 'Marketing Department', code: 'O9429893', name: 'Marketing', budget: '$12,000', committed: '$12,000' },
  { department: 'Software Department', code: 'O9429894', name: 'Software', budget: '$12,000', committed: '$12,000' },
]

const statusColors: { [key: string]: string } = {
  'Accepted': '#4CAF50',
  'On-Hold': '#FFA726',
  'Pending': '#5B7FFF',
  'Rejected': '#EF5350'
}

const departments = [
  'Finance Department',
  'HR Department',
  'Marketing Department',
  'Software Department'
]

const years = ['2024', '2025', '2026']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function DashboardPage() {
  const [selectedMenu, setSelectedMenu] = useState('Dashboard')
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedDept, setSelectedDept] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')

  const handleFilterOpen = () => {
    setFilterOpen(true)
  }

  const handleFilterClose = () => {
    setFilterOpen(false)
  }

  const handleSearch = () => {
    console.log('Searching with filters:', { selectedDept, selectedYear, selectedMonth })
    setFilterOpen(false)
  }

  const handleCancel = () => {
    setSelectedDept('')
    setSelectedYear('')
    setSelectedMonth('')
    setFilterOpen(false)
  }

  const getStatusChip = (status: string) => (
    <Chip
      label={status}
      size="small"
      sx={{
        backgroundColor: `${statusColors[status]}20`,
        color: statusColors[status],
        fontWeight: 500,
        border: 'none',
        fontSize: '0.75rem',
        height: '24px'
      }}
    />
  )

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>
      {/* Sidebar */}
      <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Header */}
        <Header />

        {/* Dashboard Content - Scrollable */}
        <Box sx={{ 
          flexGrow: 1, 
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}>
          <Box sx={{ p: 3, minHeight: '100%' }}>
            <Grid container spacing={3}>
              {/* Left Side - Tables */}
              <Grid item xs={12} lg={8}>
                {/* My Pending Approvals */}
                <Paper elevation={0} sx={{ mb: 3, borderRadius: 2, overflow: 'hidden' }}>
                  <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '1.125rem' }}>
                      My pending approvals
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button 
                        size="small" 
                        startIcon={<FilterIcon sx={{ fontSize: '16px !important' }} />}
                        onClick={handleFilterOpen}
                        sx={{ textTransform: 'none', fontSize: '0.875rem', color: '#6B7280' }}
                      >
                        Filter
                      </Button>
                      <Button 
                        size="small"
                        sx={{ textTransform: 'none', fontSize: '0.875rem', color: '#6B7280' }}
                      >
                        View all
                      </Button>
                    </Box>
                  </Box>
                  <TableContainer>
                    <Table>
                      <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Req. No.</TableCell>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Req. Date</TableCell>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Department</TableCell>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Req. Amount</TableCell>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {pendingApprovals.map((row) => (
                          <TableRow key={row.id} hover sx={{ '&:last-child td': { border: 0 } }}>
                            <TableCell sx={{ fontSize: '0.875rem', py: 2.5 }}>{row.id}</TableCell>
                            <TableCell sx={{ fontSize: '0.875rem', py: 2.5 }}>{row.date}</TableCell>
                            <TableCell sx={{ fontSize: '0.875rem', py: 2.5 }}>{row.department}</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem', py: 2.5 }}>{row.amount}</TableCell>
                            <TableCell sx={{ py: 2.5 }}>{getStatusChip(row.status)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>

                {/* Department Pending Approvals */}
                <Paper elevation={0} sx={{ mb: 3, borderRadius: 2, overflow: 'hidden' }}>
                  <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '1.125rem' }}>
                      Department Pending approvals
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button 
                        size="small" 
                        startIcon={<FilterIcon sx={{ fontSize: '16px !important' }} />}
                        onClick={handleFilterOpen}
                        sx={{ textTransform: 'none', fontSize: '0.875rem', color: '#6B7280' }}
                      >
                        Filter
                      </Button>
                      <Button 
                        size="small"
                        sx={{ textTransform: 'none', fontSize: '0.875rem', color: '#6B7280' }}
                      >
                        View all
                      </Button>
                    </Box>
                  </Box>
                  <TableContainer>
                    <Table>
                      <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Req. No.</TableCell>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Req. Date</TableCell>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Department</TableCell>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Req. Amount</TableCell>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {departmentPending.map((row) => (
                          <TableRow key={row.id} hover sx={{ '&:last-child td': { border: 0 } }}>
                            <TableCell sx={{ fontSize: '0.875rem', py: 2.5 }}>{row.id}</TableCell>
                            <TableCell sx={{ fontSize: '0.875rem', py: 2.5 }}>{row.date}</TableCell>
                            <TableCell sx={{ fontSize: '0.875rem', py: 2.5 }}>{row.department}</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem', py: 2.5 }}>{row.amount}</TableCell>
                            <TableCell sx={{ py: 2.5 }}>{getStatusChip(row.status)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>

                {/* Budget Utilization */}
                <Paper elevation={0} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                  <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '1.125rem' }}>
                      Budget Utilization
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button 
                        size="small" 
                        startIcon={<FilterIcon sx={{ fontSize: '16px !important' }} />}
                        onClick={handleFilterOpen}
                        sx={{ textTransform: 'none', fontSize: '0.875rem', color: '#6B7280' }}
                      >
                        Filter
                      </Button>
                      <Button 
                        size="small"
                        sx={{ textTransform: 'none', fontSize: '0.875rem', color: '#6B7280' }}
                      >
                        View all
                      </Button>
                    </Box>
                  </Box>
                  <TableContainer>
                    <Table>
                      <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Department</TableCell>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Account Code</TableCell>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Account Name</TableCell>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Budget Amount</TableCell>
                          <TableCell sx={{ fontWeight: 600, color: '#6B7280', fontSize: '0.875rem', py: 2 }}>Committed amount</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {budgetData.map((row, index) => (
                          <TableRow key={index} hover sx={{ '&:last-child td': { border: 0 } }}>
                            <TableCell sx={{ fontSize: '0.875rem', py: 2.5 }}>{row.department}</TableCell>
                            <TableCell sx={{ fontSize: '0.875rem', py: 2.5 }}>{row.code}</TableCell>
                            <TableCell sx={{ fontSize: '0.875rem', py: 2.5 }}>{row.name}</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem', py: 2.5 }}>{row.budget}</TableCell>
                            <TableCell sx={{ fontWeight: 600, fontSize: '0.875rem', py: 2.5 }}>{row.committed}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>

              {/* Right Side - Chart and Quick Actions */}
            {/* Right Side - Chart and Quick Actions */}
<Grid item xs={12} lg={4}>
  {/* Donut Chart */}
  <Paper elevation={0} sx={{ p: 2, mb: 3, borderRadius: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
      <Button 
        size="small" 
        startIcon={<FilterIcon sx={{ fontSize: '16px !important' }} />}
        onClick={handleFilterOpen}
        sx={{ textTransform: 'none', fontSize: '0.875rem', color: '#6B7280' }}
      >
        Filter
      </Button>
    </Box>
    
    {/* Donut Chart SVG - Reduced Size */}
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
      <svg width="180" height="180" viewBox="0 0 180 180">
        {/* Blue - Pending */}
        <circle 
          cx="90" 
          cy="90" 
          r="60" 
          fill="none" 
          stroke="#5B7FFF" 
          strokeWidth="28"
          strokeDasharray="258 377"
          transform="rotate(-90 90 90)"
        />
        {/* Green - Approved */}
        <circle 
          cx="90" 
          cy="90" 
          r="60" 
          fill="none" 
          stroke="#4CAF50" 
          strokeWidth="28"
          strokeDasharray="91 377"
          strokeDashoffset="-258"
          transform="rotate(-90 90 90)"
        />
        {/* Orange - On Hold */}
        <circle 
          cx="90" 
          cy="90" 
          r="60" 
          fill="none" 
          stroke="#FFA726" 
          strokeWidth="28"
          strokeDasharray="45 377"
          strokeDashoffset="-349"
          transform="rotate(-90 90 90)"
        />
        {/* Red - Rejected */}
        <circle 
          cx="90" 
          cy="90" 
          r="60" 
          fill="none" 
          stroke="#EF5350" 
          strokeWidth="28"
          strokeDasharray="15 377"
          strokeDashoffset="-394"
          transform="rotate(-90 90 90)"
        />
      </svg>
    </Box>

    {/* Legend - Compact */}
    <Grid container spacing={1.5}>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4CAF50', flexShrink: 0 }} />
          <Box>
            <Typography variant="caption" sx={{ color: '#6B7280', fontSize: '0.7rem', display: 'block', lineHeight: 1.2 }}>
              Approved
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1rem', color: '#1A1A1A', lineHeight: 1.2 }}>
              89
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#5B7FFF', flexShrink: 0 }} />
          <Box>
            <Typography variant="caption" sx={{ color: '#6B7280', fontSize: '0.7rem', display: 'block', lineHeight: 1.2 }}>
              Pending
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1rem', color: '#1A1A1A', lineHeight: 1.2 }}>
              12
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FFA726', flexShrink: 0 }} />
          <Box>
            <Typography variant="caption" sx={{ color: '#6B7280', fontSize: '0.7rem', display: 'block', lineHeight: 1.2 }}>
              On Hold
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1rem', color: '#1A1A1A', lineHeight: 1.2 }}>
              24
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#EF5350', flexShrink: 0 }} />
          <Box>
            <Typography variant="caption" sx={{ color: '#6B7280', fontSize: '0.7rem', display: 'block', lineHeight: 1.2 }}>
              Rejected
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '1rem', color: '#1A1A1A', lineHeight: 1.2 }}>
              4
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Paper>

  {/* Quick Actions */}
  <Paper elevation={0} sx={{ p: 2, borderRadius: 2 }}>
    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, fontSize: '1rem' }}>
      Quick Actions
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      <Card 
        elevation={0}
        sx={{ 
          bgcolor: '#FFF4F0', 
          borderRadius: 2, 
          cursor: 'pointer',
          transition: 'all 0.2s',
          '&:hover': { 
            bgcolor: '#FFE8DF',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(255,107,53,0.15)'
          } 
        }}
      >
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, '&:last-child': { pb: 2 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ bgcolor: '#FF6B35', p: 1.2, borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <DocumentIcon sx={{ color: 'white', fontSize: '1.1rem' }} />
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
              Imprest Request
            </Typography>
          </Box>
          <ChevronRightIcon sx={{ color: '#FF6B35', fontSize: '1.1rem' }} />
        </CardContent>
      </Card>

      <Card 
        elevation={0}
        sx={{ 
          bgcolor: '#FFF4F0', 
          borderRadius: 2, 
          cursor: 'pointer',
          transition: 'all 0.2s',
          '&:hover': { 
            bgcolor: '#FFE8DF',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(255,107,53,0.15)'
          } 
        }}
      >
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, '&:last-child': { pb: 2 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ bgcolor: '#FF6B35', p: 1.2, borderRadius: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PaymentIcon sx={{ color: 'white', fontSize: '1.1rem' }} />
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
              Payment Authorization
            </Typography>
          </Box>
          <ChevronRightIcon sx={{ color: '#FF6B35', fontSize: '1.1rem' }} />
        </CardContent>
      </Card>
    </Box>
  </Paper>
</Grid>
            </Grid>
          </Box>
        </Box>

        {/* Footer */}
        {/* <Footer /> */}
      </Box>

      {/* Filter Dialog */}
      <Dialog 
        open={filterOpen} 
        onClose={handleFilterClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
          }
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Filter Results
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 1 }}>
            <TextField
              select
              fullWidth
              label="Department"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              placeholder="Select Department"
            >
              {departments.map((dept) => (
                <MenuItem key={dept} value={dept}>
                  {dept}
                </MenuItem>
              ))}
            </TextField>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                select
                fullWidth
                label="Year"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                placeholder="Select Year"
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                fullWidth
                label="Month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                placeholder="Select Month"
              >
                {months.map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button 
            onClick={handleCancel}
            sx={{ 
              textTransform: 'none',
              color: '#6B7280',
              fontWeight: 500
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSearch}
            variant="contained"
            sx={{ 
              textTransform: 'none',
              bgcolor: '#FF6B35',
              fontWeight: 600,
              px: 3,
              '&:hover': {
                bgcolor: '#FF5722'
              }
            }}
          >
            Search Results
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}