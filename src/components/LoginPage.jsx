import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Container, 
  TextField, 
  Typography, 
  Link, 
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { useRole } from '../context/RoleContext';

function LoginPage() {
  const navigate = useNavigate();
  const { selectedRole, setSelectedRole } = useRole();

  const handleLogin = () => {
    // Perform login logic here (e.g., authentication)
    // Navigate based on selected role
    if (selectedRole === 'issuer') {
      navigate('/issuer');
    } else {
      navigate('/home');
    }
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
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
          <FormControl fullWidth margin="normal">
            <InputLabel id="role-select-label">Select Role</InputLabel>
            <Select
              labelId="role-select-label"
              value={selectedRole}
              label="Select Role"
              onChange={handleRoleChange}
            >
              <MenuItem value="issuer">Issuer</MenuItem>
              <MenuItem value="owner">Credentials Owner</MenuItem>
              <MenuItem value="verifier">Verifier</MenuItem>
            </Select>
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleLogin}
            disabled={!selectedRole}
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
