// lib/api/client.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
console.log(API_BASE_URL,"API_BASE_URL");

interface RequestOptions extends RequestInit {
  token?: string;
}

export class APIClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  // Generic request method
  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const { token, ...fetchOptions } = options;

    // Set headers
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    };

    // Add Authorization if token exists
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // Make fetch request
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      ...fetchOptions,
      headers,
    });

    // Handle errors
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || 'API request failed');
    }

    // Return JSON response
    return response.json();
  }

  // GET request
  async get<T>(endpoint: string, token?: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET', token });
  }

  // POST request
  async post<T>(endpoint: string, data: any, token?: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      token,
    });
  }

  // PATCH request (for updates)
  async patch<T>(endpoint: string, data: any, token?: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
      token,
    });
  }

  // DELETE request
  async delete<T>(endpoint: string, token?: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE', token });
  }

  // File upload (multipart/form-data)
  async uploadFile<T>(endpoint: string, file: File, token?: string): Promise<T> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: formData,
    });

    if (!response.ok) throw new Error('Upload failed');
    return response.json();
  }
}

// Export singleton instance
export const apiClient = new APIClient();