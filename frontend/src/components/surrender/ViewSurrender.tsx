'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Box,
  Paper,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Breadcrumbs,
  Link,
  Button,
  CircularProgress,
  Chip,
  Divider,
} from '@mui/material'
import {
  NavigateNext as NavigateNextIcon,
  CloudUpload as UploadIcon,
  Edit as EditIcon,
  Download as DownloadIcon,
} from '@mui/icons-material'
import Sidebar from '../main/Sidebar'
import Header from '../main/Header'
import { useRouter, useParams } from 'next/navigation'

const API_BASE_URL = 'http://localhost:8000/api/v1'

// ─── Types ────────────────────────────────────────────────────────────────────
interface SurrenderLine {
  breakdown_id?: number
  srNo: string
  debtor_code?: number | string
  debtor_name?: string
  description: string
  gl_account: string
  account_name: string
  estimated_amount: string
  approved_amount?: string
  spent_amount?: string
  surrendered_amount?: string
  supplier_no: string
}

interface Attachment {
  attachment_id: number
  file_name: string
  file_path: string
  file_size: number
  attachment_type: string
}

interface LoggedInUser {
  user_id: number
  department_id: number
  name: string
  role: string
}

// ─── Status config ────────────────────────────────────────────────────────────
const statusConfig: Record<string, { label: string; bgcolor: string; color: string }> = {
  FinanceApproved: { label: 'Finance Approved', bgcolor: '#EDE9FE', color: '#7C3AED' },
  Draft:           { label: 'Draft',            bgcolor: '#F3F4F6', color: '#6B7280' },
  Surrendered:     { label: 'Surrendered',       bgcolor: '#FFF8E1', color: '#FF9800' },
  FMApproved:      { label: 'FM Approved',       bgcolor: '#E3F2FD', color: '#1976D2' },
  Completed:       { label: 'Completed',         bgcolor: '#E8F5E9', color: '#4CAF50' },
  Rejected:        { label: 'Rejected',          bgcolor: '#FEECEC', color: '#EF5350' },
}

// ─── Read-only field ──────────────────────────────────────────────────────────
const ReadField = ({ label, value }: { label: string; value?: string | number }) => (
  <Box>
    <Typography variant="caption" sx={{ color: '#9CA3AF', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ mt: 0.3, fontWeight: 500, color: value ? '#111827' : '#9CA3AF' }}>
      {value || '—'}
    </Typography>
  </Box>
)

// ─── Component ────────────────────────────────────────────────────────────────
export default function ViewSurrenderPage() {
  const router = useRouter()
  const { id } = useParams()

  const [selectedMenu, setSelectedMenu] = useState('Surrender')
  const [loading, setLoading] = useState(true)
  const [loggedInUser, setLoggedInUser] = useState<LoggedInUser | null>(null)

  const [formData, setFormData] = useState({
    surrenderNumber: '',
    imprestNumber: '',
    requestNo: '',
    userRequesterName: '',
    userEnteredName: '',
    projectName: '',
    departmentName: '',
    purpose: '',
    surrender_date: '',
    remarks: '',
    status: '',
    created_on: '',
  })

  const [surrenderLines, setSurrenderLines] = useState<SurrenderLine[]>([])
  const [attachments, setAttachments] = useState<Attachment[]>([])

  // ── Load user ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const user = JSON.parse(storedUser)
      setLoggedInUser({
        user_id: user.id,
        department_id: user.department_id || user.department,
        name: user.user_name,
        role: user.role || 'user',
      })
    }
  }, [])

  // ── Fetch surrender ────────────────────────────────────────────────────────
  useEffect(() => {
    if (id) fetchSurrender()
  }, [id])

  const fetchSurrender = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/imprest/${id}/`)
      const data = res.data

      setFormData({
        surrenderNumber: data.imprest_id || '',
        imprestNumber: data.request_no || '',
        requestNo: data.request_no || '',
        userRequesterName: data.user_requested_name || '',
        userEnteredName: data.user_entered_name || '',
        projectName: data.project_name || '',
        departmentName: data.department_name || '',
        purpose: data.purpose || '',
        surrender_date: data.surrender_date || '',
        remarks: data.remarks || '',
        status: data.status || '',
        created_on: data.created_on || '',
      })

      setSurrenderLines(
        (data.surrender_lines || data.request_lines || []).map(
          (line: any, index: number) => ({
            breakdown_id: line.breakdown_id,
            srNo: String(index + 1),
            debtor_code: line.debtor_code || '',
            debtor_name: line.debtor_name || '',
            description: line.description || '',
            gl_account: line.gl_account || '',
            account_name: line.account_name || '',
            estimated_amount: line.estimated_amount?.toString() || '',
            approved_amount: line.approved_amount?.toString() || '',
            spent_amount: line.spent_amount?.toString() || '',
            surrendered_amount: line.surrendered_amount?.toString() || '',
            supplier_no: line.supplier_no || '',
          })
        )
      )

      setAttachments(data.attachments || [])
    } catch (err) {
      console.error('Error fetching surrender:', err)
    } finally {
      setLoading(false)
    }
  }

  // ── Can user edit this record? ─────────────────────────────────────────────
  const canEdit = () => {
    if (!loggedInUser) return false
    if (formData.status === 'Completed') return false
    if (formData.status === 'Surrendered' && loggedInUser.role === 'finance_manager') return true
    if (formData.status === 'FMApproved' && loggedInUser.role === 'director') return true
    if (
      (formData.status === 'Draft' ||
        formData.status === 'FinanceApproved' ||
        formData.status === 'Rejected') &&
      loggedInUser.role === 'user'
    ) return true
    return false
  }

  // ── Totals ─────────────────────────────────────────────────────────────────
  const totalEstimated = surrenderLines.reduce((s, l) => s + parseFloat(l.estimated_amount || '0'), 0)
  const totalApproved  = surrenderLines.reduce((s, l) => s + parseFloat(l.approved_amount  || '0'), 0)
  const totalSpent     = surrenderLines.reduce((s, l) => s + parseFloat(l.spent_amount     || '0'), 0)
  const totalReturned  = surrenderLines.reduce((s, l) => s + parseFloat(l.surrendered_amount || '0'), 0)

  const fmt = (n: number) =>
    n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  const status = statusConfig[formData.status] || { label: formData.status, bgcolor: '#F3F4F6', color: '#6B7280' }

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#F5F7FA', overflow: 'hidden' }}>
      <Sidebar selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header />

        <Box sx={{ flexGrow: 1, overflow: 'auto', p: 3 }}>
          {/* ── Breadcrumb ── */}
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 2 }}>
            <Link
              underline="hover"
              sx={{ cursor: 'pointer', fontSize: '0.875rem' }}
              onClick={() => router.push('/surrender')}
            >
              Surrender
            </Link>
            <Typography fontSize="0.875rem" color="text.primary">
              View Surrender
            </Typography>
          </Breadcrumbs>

          <Paper sx={{ borderRadius: 2, overflow: 'hidden' }}>

            {/* ── Gradient Header ── */}
            <Box
              sx={{
                background: 'linear-gradient(90deg, #F97316 0%, #000000 100%)',
                p: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'white' }}>
                  Surrender Details
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  {formData.imprestNumber} &nbsp;·&nbsp;
                  {formData.created_on
                    ? new Date(formData.created_on).toLocaleDateString('en-GB', {
                        day: '2-digit', month: 'short', year: 'numeric',
                      })
                    : ''}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Chip
                  label={status.label}
                  size="small"
                  sx={{
                    bgcolor: status.bgcolor,
                    color: status.color,
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    border: `1px solid ${status.color}40`,
                  }}
                />
                {canEdit() && (
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<EditIcon />}
                    onClick={() => router.push(`/surrender/edit/${id}`)}
                    sx={{
                      bgcolor: 'white',
                      color: '#F97316',
                      textTransform: 'none',
                      fontWeight: 600,
                      '&:hover': { bgcolor: '#FFF7ED' },
                    }}
                  >
                    Edit
                  </Button>
                )}
              </Box>
            </Box>

            <Box sx={{ p: 4 }}>

              {/* ── Summary Cards ── */}
              {formData.status !== 'Draft' && formData.status !== 'FinanceApproved' && (
                <Grid container spacing={2} mb={4}>
                  {[
                    { label: 'Total Estimated', value: fmt(totalEstimated), color: '#6B7280' },
                    { label: 'Total Approved',  value: fmt(totalApproved),  color: '#1976D2' },
                    { label: 'Total Spent',     value: fmt(totalSpent),     color: '#FF9800' },
                    { label: 'Total Returned',  value: fmt(totalReturned),  color: '#4CAF50' },
                  ].map((card) => (
                    <Grid item xs={6} md={3} key={card.label}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: '1px solid #E5E7EB',
                          bgcolor: 'white',
                          textAlign: 'center',
                        }}
                      >
                        <Typography variant="caption" sx={{ color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                          {card.label}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: card.color, mt: 0.5 }}>
                          {card.value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}

              {/* ── Form Info ── */}
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: '#374151' }}>
                Request Information
              </Typography>

              <Grid container spacing={3} mb={4}>
                <Grid item xs={12} sm={6} md={3}>
                  <ReadField label="Surrender Number" value={formData.surrenderNumber} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ReadField label="Imprest Number" value={formData.imprestNumber} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ReadField
                    label="Surrender Date"
                    value={
                      formData.surrender_date
                        ? new Date(formData.surrender_date).toLocaleDateString('en-GB', {
                            day: '2-digit', month: 'short', year: 'numeric',
                          })
                        : ''
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ReadField label="Status" value={status.label} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ReadField label="Requested By" value={formData.userRequesterName} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ReadField label="Entered By" value={formData.userEnteredName} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ReadField label="Department" value={formData.departmentName} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ReadField label="Project" value={formData.projectName} />
                </Grid>
                <Grid item xs={12} md={8}>
                  <ReadField label="Purpose" value={formData.purpose} />
                </Grid>
                {formData.remarks && (
                  <Grid item xs={12} md={8}>
                    <ReadField label="Remarks" value={formData.remarks} />
                  </Grid>
                )}
              </Grid>

              <Divider sx={{ mb: 3 }} />

              {/* ── Surrender Lines ── */}
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: '#374151' }}>
                Surrender Lines
              </Typography>

              <TableContainer sx={{ border: '1px solid #E5E7EB', borderRadius: 2, overflowX: 'auto', mb: 4 }}>
                <Table sx={{ minWidth: 1200 }} size="small">
                  <TableHead sx={{ bgcolor: '#F9FAFB' }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Sr No</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Debtor Code</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Debtor Name</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>GL Account</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Account Name</TableCell>
                      <TableCell sx={{ fontWeight: 600 }} align="right">Est. Amt</TableCell>
                      <TableCell sx={{ fontWeight: 600 }} align="right">Appr. Amt</TableCell>
                      <TableCell sx={{ fontWeight: 600 }} align="right">Spent Amt</TableCell>
                      <TableCell sx={{ fontWeight: 600 }} align="right">Returned Amt</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Supplier</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {surrenderLines.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={11} align="center" sx={{ py: 4, color: '#9CA3AF' }}>
                          No surrender lines found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      surrenderLines.map((row, i) => (
                        <TableRow key={i} hover>
                          <TableCell>{row.srNo}</TableCell>
                          <TableCell>{row.debtor_code || '—'}</TableCell>
                          <TableCell>{row.debtor_name || '—'}</TableCell>
                          <TableCell>{row.description || '—'}</TableCell>
                          <TableCell>{row.gl_account || '—'}</TableCell>
                          <TableCell>{row.account_name || '—'}</TableCell>
                          <TableCell align="right">{row.estimated_amount  ? fmt(parseFloat(row.estimated_amount))  : '—'}</TableCell>
                          <TableCell align="right">{row.approved_amount   ? fmt(parseFloat(row.approved_amount))   : '—'}</TableCell>
                          <TableCell align="right">{row.spent_amount      ? fmt(parseFloat(row.spent_amount))      : '—'}</TableCell>
                          <TableCell align="right">{row.surrendered_amount ? fmt(parseFloat(row.surrendered_amount)) : '—'}</TableCell>
                          <TableCell>{row.supplier_no || '—'}</TableCell>
                        </TableRow>
                      ))
                    )}

                    {/* Totals row */}
                    {surrenderLines.length > 0 && (
                      <TableRow sx={{ bgcolor: '#F9FAFB' }}>
                        <TableCell colSpan={6} sx={{ fontWeight: 700, color: '#374151' }}>
                          Total
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: 700 }}>{fmt(totalEstimated)}</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 700 }}>{fmt(totalApproved)}</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 700, color: '#FF9800' }}>{fmt(totalSpent)}</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 700, color: '#4CAF50' }}>{fmt(totalReturned)}</TableCell>
                        <TableCell />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* ── Attachments ── */}
              {attachments.length > 0 && (
                <>
                  <Divider sx={{ mb: 3 }} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: '#374151' }}>
                    Attachments
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    {attachments.map((file) => (
                      <Box
                        key={file.attachment_id}
                        sx={{
                          width: 130,
                          border: '1px solid #E5E7EB',
                          borderRadius: 2,
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          bgcolor: 'white',
                          gap: 0.5,
                        }}
                      >
                        <UploadIcon sx={{ fontSize: 36, color: '#FF6B35' }} />
                        <Typography
                          variant="caption"
                          sx={{ textAlign: 'center', wordBreak: 'break-all', fontSize: '0.7rem', color: '#6B7280' }}
                        >
                          {file.file_name.length > 16
                            ? file.file_name.substring(0, 13) + '...'
                            : file.file_name}
                        </Typography>
                        <Typography variant="caption" sx={{ fontSize: '0.65rem', color: '#9CA3AF' }}>
                          {(file.file_size / 1024).toFixed(2)} KB
                        </Typography>
                        <Button
                          size="small"
                          startIcon={<DownloadIcon sx={{ fontSize: 14 }} />}
                          href={`${API_BASE_URL}/imprest/attachments/${file.attachment_id}/download/`}
                          target="_blank"
                          sx={{ textTransform: 'none', fontSize: '0.7rem', p: 0.5, minWidth: 'unset', color: '#FF6B35' }}
                        >
                          Download
                        </Button>
                      </Box>
                    ))}
                  </Box>
                </>
              )}

              {/* ── Bottom Actions ── */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
                {canEdit() && (
                  <Button
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={() => router.push(`/surrender/edit/${id}`)}
                    sx={{
                      bgcolor: '#FF6B35',
                      '&:hover': { bgcolor: '#e55a25' },
                      textTransform: 'none',
                      fontWeight: 600,
                    }}
                  >
                    Edit Surrender
                  </Button>
                )}
                <Button
                  variant="outlined"
                  onClick={() => router.push('/surrender')}
                  sx={{ textTransform: 'none' }}
                >
                  Back to List
                </Button>
              </Box>

            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}