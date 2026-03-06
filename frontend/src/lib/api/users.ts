// lib/api/users.ts
import { apiClient } from './client';
import { User, CreateUserData } from '../types/user';

export const usersAPI = {
  // Get all users
  getAll: async (token: string) => {
    return apiClient.get<{ results: User[] }>('/users', token);
  },

  // Get single user
  getById: async (id: number, token: string) => {
    return apiClient.get<User>(`/users/${id}`, token);
  },

  // Create user
  create: async (data: CreateUserData, token: string) => {
    return apiClient.post<User>('/users', data, token);
  },

  // Update user
  update: async (id: number, data: Partial<CreateUserData>, token: string) => {
    return apiClient.patch<User>(`/users/${id}`, data, token);
  },

  // Delete user
  delete: async (id: number, token: string) => {
    return apiClient.delete(`/users/${id}`, token);
  },
};