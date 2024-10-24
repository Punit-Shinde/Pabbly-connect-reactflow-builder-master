import React from 'react';

import {
  Box,
  Button,
  Tooltip,
  MenuList,
  MenuItem,
  TextField,
  Typography,
  Autocomplete,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

export default function SelectExistingConnection() {
  const popover = usePopover();
  const connections = [
    { title: 'Google Sheet #1', subtitle: 'Created at : 2024-05-02 05:06:13' },
    { title: 'Google Sheet #2', subtitle: 'Created at : 2024-05-10 06:06:20' },
    { title: 'Google Sheet #3', subtitle: 'Created at : 2024-05-25 08:06:30' },
  ];

  return (
    <Box sx={{ mt: '24px' }}>
      <Box display="flex" flexDirection="row" width="100%">
        <Box width="100%">
          <Typography
            sx={{
              ml: '13px',
              fontSize: '14px',
              fontWeight: '600',
              width: '100%',
            }}
          >
            Select Connections
          </Typography>
          <Box display="flex" alignItems="center">
            <Autocomplete
              sx={{ mt: '8px' }}
              fullWidth
              options={connections}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select existing connections"
                  margin="none"
                  helperText="Select an existing connection from the list or type to search"
                />
              )}
              renderOption={(props, option) => (
                <li
                  {...props}
                  key={option.title}
                  style={{
                    padding: '8px 8px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '1px',
                  }}
                >
                  <Typography variant="body2">{option.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {option.subtitle}
                  </Typography>
                </li>
              )}
            />
            <Tooltip title="Click to see options" arrow placement="top" disableInteractive>
              <Iconify
                color={popover.open ? 'inherit' : 'default'}
                onClick={popover.onOpen}
                icon="charm:menu-kebab"
                sx={{
                  width: 40,
                  height: 24,
                  mb: '12px',
                  cursor: 'pointer',
                  color: popover.open ? 'inherit' : 'grey.600',
                  '&:hover': {
                    color: '#1C252E',
                  },
                }}
              />
            </Tooltip>
            <CustomPopover
              open={popover.open}
              anchorEl={popover.anchorEl}
              onClose={popover.onClose}
              slotProps={{ arrow: { placement: 'right-top' } }}
            >
              <MenuList>
                <MenuItem>
                  <Iconify icon="solar:pen-bold" />
                  Update Conection
                </MenuItem>
                <MenuItem>
                  <Iconify icon="material-symbols:settings" />
                  Manage All Connection
                </MenuItem>
                <MenuItem>
                  <Iconify icon="solar:trash-bin-trash-bold" />
                  Delete Connection
                </MenuItem>
              </MenuList>
            </CustomPopover>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 6 }}>
        <Button sx={{ mr: '12px' }} variant="contained" color="primary" size="large">
          Save
        </Button>
        <Button variant="outlined" color="primary" size="large">
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
