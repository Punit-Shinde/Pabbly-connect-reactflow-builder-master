import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { Iconify } from 'src/components/iconify';

// Mock data for edit logs
const editLogs = [
  { date: 'Sep 13, 2024 13:05:58', action: 'Edited by Ankit Mandli.' },
  { date: 'Sep 13, 2024 12:59:44', action: 'Edited by Ankit Mandli.' },
  { date: 'Sep 06, 2024 13:29:22', action: 'Workflow disabled by Ankit Mandli.' },
  { date: 'Sep 06, 2024 13:29:19', action: 'Workflow enabled by Ankit Mandli.' },
  { date: 'Sep 02, 2024 16:13:16', action: 'Edited by Ankit Mandli.' },
  { date: 'Aug 22, 2024 10:50:58', action: 'Edited by Ankit Mandli.' },
  { date: 'Aug 22, 2024 10:50:58', action: 'Edited by Ankit Mandli.' },
  { date: 'Aug 22, 2024 10:50:58', action: 'Edited by Ankit Mandli.' },
  { date: 'Aug 22, 2024 10:50:58', action: 'Edited by Ankit Mandli.' },
];

export function EditLogPopover({ title, open, onClose, ...other }) {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose} {...other}>
      <DialogTitle sx={{ pb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Iconify
          sx={{ color: 'green', width: '24px', height: '24px' }}
          icon="lets-icons:check-fill"
        />
        {title}
      </DialogTitle>
        
      <DialogContent>
        <Typography variant="body2" gutterBottom>
          View workflow edit log for last 30 days.
        </Typography>
        <Box
          sx={{
            maxHeight: 400,
            overflowY: 'auto',
            mt: 2,
            border: '1px solid #919eab33',
            borderRadius: 1,
          }}
        >
          {editLogs.map((log, index) => (
            <React.Fragment key={index}>
              <Box sx={{ p: 1.5 }}>
                <Typography
                  display="flex"
                  fontSize="14px"
                  color="text.secondary"
                  alignItems="center"
                >
                  <Iconify
                    icon="icon-park-solid:time"
                    sx={{ width: '15px', height: '15px', mr: '5px' }}
                  />
                  {log.date}
                </Typography>
                <Typography fontSize="12px" color="text.secondary" sx={{ ml: '20px' }}>
                  {log.action}
                </Typography>
              </Box>
              {index < editLogs.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Box>
      </DialogContent>

      <DialogActions>
        <Button variant="contained" onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
