// lib/types/user.types.ts
export interface User {
  id: number;
  user_name: string;
  user_email: string;
  individual_site: string;
  department: string;
  department_role: string;
  status: 'Active' | 'Inactive';
  created_at: string;
  updated_at: string;
}

export interface UserManagementResponse {
  results?: User[];  // For paginated response
  users?: User[];     // For simple array response
  count?: number;
  next?: string | null;
  previous?: string | null;
}
export interface CreateUserInput {
  user_name: string;
  user_email: string;
  user_password: string;  // Added password field
  individual_site: string;
  department: string;
  department_role: string;
  status: 'Active' | 'Inactive';
}
export interface UpdateUserInput {
  user_name?: string;
  user_email?: string;
  individual_site?: string;
  department?: string;
  department_role?: string;
  status?: 'Active' | 'Inactive';
  // Password optional for update
  user_password?: string;
}


export type DelegationStatus = 'active' | 'inactive' | 'pending' | string;

export interface UserDelegation {
  id: number;
  user_name: string;
  delegate_to: string;
  status: DelegationStatus;
  from_date: string | null; // ISO string from backend
  to_date: string | null;
  remarks: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreateUserDelegationInput {
  user_name: string;
  user_password: string;
  delegate_to: string;
  status: DelegationStatus;
  from_date: string | null;
  to_date: string | null;
  remarks: string;
}

export type UpdateUserDelegationInput =
  Partial<CreateUserDelegationInput>;