import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField, Typography, Link, Paper } from '@mui/material';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here (e.g., authentication)
    // On successful login, navigate to HomePage
    navigate('/home');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 10 }}>
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          Short Lived Verified Credentials
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Phone, email, or username"
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            variant="outlined"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Box>
        <Box textAlign="center" mt={2}>
          <Link href="#" variant="body2" sx={{ mr: 1 }}>
            Forgot password?
          </Link>
          <Link href="#" variant="body2">
            Sign up
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}

export default LoginPage;
