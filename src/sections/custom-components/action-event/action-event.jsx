import { useState } from 'react';

import { TextField, InputLabel, Typography, FormControl, Autocomplete } from '@mui/material';

export default function ActionEvent() {
  const [inputValue, setInputValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    { label: 'Add New Row', secondaryLabel: 'Add New Row' },
    {
      label: 'Add New Row (Shared Drive)',
      secondaryLabel: 'Adds a new row to a Google Sheets document stored in a shared drive.',
    },
    {
      label: 'Add New Row (Shared Drive)',
      secondaryLabel: 'Adds a new row to a Google Sheets document stored in a shared drive.',
    },
    {
      label: 'Add Multiple Rows',
      secondaryLabel: 'Add multiple rows.',
    },
    {
      label: 'Append Values',
      secondaryLabel: 'Append Values',
    },
    {
      label: 'Create a Sheet',
      secondaryLabel: 'Create a Sheet',
    },
    {
      label: 'Create a Spreadsheet',
      secondaryLabel: 'Create a Spreadsheet',
    },
    // Add more items as needed
  ];
  const handleItemChangee = (event, newValue) => {
    setSelectedItem(newValue);
  };
  return (
    <>
      <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
        Action Event
      </Typography>
      <FormControl fullWidth>
        {inputValue === '' && <InputLabel id="item-select-label">Select Event</InputLabel>}
        <Autocomplete
          fullWidth
          options={items}
          getOptionLabel={(option) => option.label}
          value={selectedItem}
          onChange={handleItemChangee}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
          isOptionEqualToValue={(option, value) => option.label === value?.label}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
          renderOption={(props, option) => (
            <li
              {...props}
              style={{
                padding: '8px 8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '1px',
              }}
            >
              <Typography variant="body2" fontWeight={600}>
                {option.label}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                fontSize={12}
                style={{ marginTop: '0px' }}
              >
                {option.secondaryLabel}
              </Typography>
            </li>
          )}
        />
      </FormControl>
    </>
  );
}
