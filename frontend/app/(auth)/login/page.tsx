// app/(auth)/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Link,
  InputAdornment,
  IconButton,
  Alert,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.string().min(1, 'Please select a role'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'johnbob@gmail.com',
      password: '12345678',
      role: 'Managing Director',
    },
  });

  // const onSubmit = async (data: LoginFormData) => {
  //   setIsLoading(true);
  //   setError('');

  //   try {
  //     const result = await signIn('credentials', {
  //       redirect: false,
  //       email: data.email,
  //       password: data.password,
  //       role: data.role,
  //     });

  //     if (result?.error) {
  //       setError('Invalid email or password');
  //     } else {
  //       router.push('/dashboard');
  //     }
  //   } catch (err) {
  //     setError('An error occurred. Please try again.');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
const onSubmit = async (data: LoginFormData) => {
  setIsLoading(true);
  setError('');

  try {
    const response = await fetch(
      'http://127.0.0.1:8000/api/v1/users/auth/login/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          role: data.role,
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      // token save
      localStorage.setItem('token', result.token);

      // user info save
      localStorage.setItem('user', JSON.stringify(result.user));

      router.push('/dashboard');
    } else {
      setError(result.message || 'Login failed');
    }
  } catch (err) {
    setError('Server error. Please try again.');
  } finally {
    setIsLoading(false);
  }
};
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Left Side - Gradient Background with Image */}
      <Box
        sx={{
          flex: 1,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            fontWeight: 300,
            zIndex: 1,
          }}
        >
          Image
        </Typography>
      </Box>

      {/* Right Side - Login Form */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
          backgroundColor: 'white',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          {/* Header */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              marginBottom: 1,
              textAlign: 'center',
            }}
          >
            Welcome to KNBS!
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              marginBottom: 4,
              textAlign: 'center',
            }}
          >
            Today is a new day. It's your day. You shape it.
            <br />
            Sign in to start managing your projects.
          </Typography>

          {/* Error Alert */}
          {error && (
            <Alert severity="error" sx={{ marginBottom: 2 }}>
              {error}
            </Alert>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <TextField
              fullWidth
              label="Email"
              type="email"
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ marginBottom: 2 }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ marginBottom: 2 }}
            />

            {/* Role Selection */}
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel>Sign in as</InputLabel>
              <Select
                label="Sign in as"
                defaultValue="Managing Director"
                {...register('role')}
                error={!!errors.role}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Staff">Staff</MenuItem>
                <MenuItem value="HOD">Head of Department</MenuItem>
                <MenuItem value="Financial Controller">Financial Controller</MenuItem>
                <MenuItem value="Director General">Director General</MenuItem>
              </Select>
            </FormControl>

            {/* Forgot Password Link */}
            <Box sx={{ textAlign: 'right', marginBottom: 3 }}>
              <Link
                href="#"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Forgot Password?
              </Link>
            </Box>

            {/* Sign In Button */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              disabled={isLoading}
              sx={{
                backgroundColor: '#ff6b35',
                padding: '12px',
                fontSize: '1rem',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#ff5722',
                },
              }}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          {/* Footer */}
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              textAlign: 'center',
              marginTop: 4,
              color: 'text.secondary',
            }}
          >
            © 2026 ALL RIGHTS RESERVED
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}