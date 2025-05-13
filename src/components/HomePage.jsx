import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
//import event from '../model/event'
//import vc from '../model/vc'

const HomePage = () => {
  // Sample data for events
  const events = [
    { name: "Birthday Party", ownerId: "user-123", accessIds: ["user-456", "user-789"] },
    { name: "Wedding", ownerId: "user-456", accessIds: ["user-123", "user-789"] },
    { name: "Conference", ownerId: "user-789", accessIds: ["user-123", "user-456"] },
  ]

  // Sample data for verified credentials
  const verifiedCredentials = [
    { id: "vc-123", issuer: "did:example:issuer-1", issuanceDate: "2025-05-01" },
    { id: "vc-456", issuer: "did:example:issuer-2", issuanceDate: "2025-05-05" },
    { id: "vc-789", issuer: "did:example:issuer-3", issuanceDate: "2025-05-10" },
  ]

  return (
    <div style={{ padding: '20px' }}>
      <h2>Home Page</h2>

      {/* Events Table */}
      <h2>Events</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Owner ID</strong></TableCell>
              <TableCell><strong>Access IDs</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index}>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.ownerId}</TableCell>
                <TableCell>{event.accessIds.join(", ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Verified Credentials Table */}
      <h2 style={{ marginTop: '40px' }}>Verified Credentials</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Issuer</strong></TableCell>
              <TableCell><strong>Issuance Date</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {verifiedCredentials.map((vc, index) => (
              <TableRow key={index}>
                <TableCell>{vc.id}</TableCell>
                <TableCell>{vc.issuer}</TableCell>
                <TableCell>{vc.issuanceDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default HomePage