// lib/api/services/users.service.ts
import { apiClient } from '../client';
import type { User, UserManagementResponse, CreateUserInput,UserDelegation,CreateUserDelegationInput,UpdateUserDelegationInput } from '../../types/user';


export class UsersService {
  // Get all users
  static async getUsers(): Promise<User[]> {
    const response = await apiClient.get<User[] | UserManagementResponse>('/api/v1/users/users/');
    
    // Handle both array and paginated responses
    if (Array.isArray(response)) {
      return response;
    }
    return response.results || response.users || [];
  }

  // Get single user
  static async getUser(id: number): Promise<User> {
    return apiClient.get<User>(`/api/v1/users/users/${id}/`);
  }

  // Create user
  static async createUser(data: CreateUserInput): Promise<User> {
    return apiClient.post<User>('/api/v1/users/users/', data);
  }

  // Update user
  static async updateUser(id: number, data: Partial<CreateUserInput>): Promise<User> {
    return apiClient.patch<User>(`/api/v1/users/users/${id}/`, data);
  }

  // Delete user
  static async deleteUser(id: number): Promise<void> {
    return apiClient.delete<void>(`/api/v1/users/users/${id}/`);
  }
}


export class UserDelegationService {
  static async getDelegations(): Promise<UserDelegation[]> {
    const response = await apiClient.get<
      UserDelegation[] | { results?: UserDelegation[] }
    >('/api/v1/users/delegations/');

    if (Array.isArray(response)) {
      return response;
    }

    return response.results || [];
  }

  static async getDelegation(id: number): Promise<UserDelegation> {
    return apiClient.get<UserDelegation>(
      `/api/v1/users/delegations/${id}/`
    );
  }

  static async createDelegation(
    data: CreateUserDelegationInput
  ): Promise<UserDelegation> {
    return apiClient.post<UserDelegation>(
      '/api/v1/users/delegations/',
      data
    );
  }

  static async updateDelegation(
    id: number,
    data: UpdateUserDelegationInput
  ): Promise<UserDelegation> {
    return apiClient.patch<UserDelegation>(
      `/api/v1/users/delegations/${id}/`,
      data
    );
  }

  static async deleteDelegation(id: number): Promise<void> {
    return apiClient.delete<void>(
      `/api/v1/users/delegations
      /${id}/`
    );
  }
}



