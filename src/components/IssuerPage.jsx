import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Button, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function IssuerPage() {
  const navigate = useNavigate();

  const handleNavigateToCredentialManager = () => {
    navigate('/credential-manager');
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4" color="primary">
            Issuer Dashboard
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleNavigateToCredentialManager}
          >
            Create New Credential
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default IssuerPage; 