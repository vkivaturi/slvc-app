import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Divider,
  CircularProgress,
  Alert
} from '@mui/material';

function CredentialManagerPage() {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:3000/event/list');
        if (response.data.status === 'success') {
          setEvents(response.data.data);
        } else {
          setError('Failed to fetch events');
        }
      } catch (err) {
        setError(err.message || 'Failed to fetch events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
    // Find the selected event and set expiry date to its valid_to date
    const selectedEventData = events.find(e => e.id === event.target.value);
    if (selectedEventData) {
      setExpiryDate(selectedEventData.valid_to);
    }
  };

  const handleDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Credential Manager
        </Typography>

        {/* Section 1 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Section 1: Event Details
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="event-select-label">Select Event</InputLabel>
            <Select
              labelId="event-select-label"
              value={selectedEvent}
              label="Select Event"
              onChange={handleEventChange}
              disabled={loading}
            >
              {loading ? (
                <MenuItem disabled>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
                  Loading events...
                </MenuItem>
              ) : (
                events.map((event) => (
                  <MenuItem key={event.id} value={event.id}>
                    {event.name} ({event.valid_from} to {event.valid_to})
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>
          
          <TextField
            fullWidth
            type="date"
            label="Expiry Date"
            value={expiryDate}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Section 2 */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Section 2
          </Typography>
          <Typography variant="body1">
            Hello World!
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default CredentialManagerPage; 