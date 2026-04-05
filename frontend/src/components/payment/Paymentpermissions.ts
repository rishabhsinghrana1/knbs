// ─── Payment Module — Role Based Permissions ─────────────────────────────────
// Based on docs:
// Admin          - Full control
// Finance        - Create payment, process
// Finance Manager - Create / Approve / Process payment
// Director       - Full control
// Manager        - No payment access
// User           - No payment access
// Viewer         - View only, no actions

export function getLoggedInUser() {
  try {
    const raw = localStorage.getItem('user')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function getPaymentPermissions(user: any) {
  const role: string = user?.role_details?.role_name || ''

  return {
    // Can view the payment list
    canView:    ['Admin', 'Finance', 'Finance Manager', 'Director', 'Viewer'].includes(role),

    // Can create a new payment (show Add button)
    canCreate:  ['Admin', 'Finance', 'Finance Manager', 'Director'].includes(role),

    // Can submit a Draft payment
    canSubmit:  ['Admin', 'Finance', 'Finance Manager', 'Director'].includes(role),

    // Can approve a Submitted payment (Finance Manager + Admin + Director only)
    canApprove: ['Admin', 'Finance Manager', 'Director'].includes(role),

    // Can process a FinanceApproved payment
    canProcess: ['Admin', 'Finance', 'Finance Manager', 'Director'].includes(role),

    // Can delete a Draft payment
    canDelete:  ['Admin', 'Finance Manager', 'Director'].includes(role),

    // Can cancel a Draft or Submitted payment
    canCancel:  ['Admin', 'Finance Manager', 'Director'].includes(role),
  }
}