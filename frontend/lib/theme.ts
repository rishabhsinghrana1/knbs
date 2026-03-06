'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6b35',
    },
    secondary: {
      main: '#667eea',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;