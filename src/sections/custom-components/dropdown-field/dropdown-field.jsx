import { useState } from 'react';

import {
  Box,
  Button,
  Switch,
  TextField,
  Typography,
  FormControl,
  Autocomplete,
  FormHelperText,
  FormControlLabel,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';

export default function DropdownField() {
  const autoOptions = [
    { label: 'Magnet Brains Software Technology Pvt. Ltd.', value: 'auto1' },
    { label: 'Pabbly List', value: 'auto2' },
  ];
  const [autoValue, setAutoValue] = useState(autoOptions[0]);
  return (
    <>
      <Box display="flex" justifyContent="space-between" mr="6px" alignItems="center">
        <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
          Choose Audience List (Required)
        </Typography>
        <FormControlLabel
          control={<Switch name="small" size="small" />}
          label="Map"
          labelPlacement="start"
        />
      </Box>
      <FormControl fullWidth>
        <Box display="flex" gap="5px">
          <Autocomplete
            options={autoOptions}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => <TextField {...params} variant="outlined" />}
            value={autoValue}
            onChange={(event, newValue) => {
              setAutoValue(newValue);
            }}
            disablePortal
            fullWidth
          />

          <Button
            variant="outlined"
            startIcon={
              <Iconify
                sx={{ ml: '10px', width: '24px', height: '24px', color: '#637381' }}
                icon="mdi:refresh"
              />
            }
          />
        </Box>
        <FormHelperText>Choose the audience list id of Mailchimp.</FormHelperText>
      </FormControl>
    </>
  );
}
