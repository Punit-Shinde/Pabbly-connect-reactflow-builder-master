// import { useState } from 'react';

// import { TextField, InputLabel, Typography, FormControl, Autocomplete } from '@mui/material';

// export default function RouterEvent() {
//   const [inputValue, setInputValue] = useState('');
//   const [selectedItem, setSelectedItem] = useState(null);
//   const items = [
//     { label: 'Conditionally Run', secondaryLabel: 'Execute different routes of workflow based on filter.' },
//     {
//       label: 'Filter Values',
//       secondaryLabel: 'Set filter conditions based on values.',
//     },
//   ];
//   const handleItemChangee = (event, newValue) => {
//     setSelectedItem(newValue);
//   };
//   return (
//     <>
//       <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
//         Action Event
//       </Typography>
//       <FormControl fullWidth>
//         {inputValue === '' && <InputLabel id="item-select-label">Select Event</InputLabel>}
//         <Autocomplete
//           fullWidth
//           options={items}
//           getOptionLabel={(option) => option.label}
//           value={selectedItem}
//           onChange={handleItemChangee}
//           inputValue={inputValue}
//           onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
//           isOptionEqualToValue={(option, value) => option.label === value?.label}
//           renderInput={(params) => <TextField {...params} variant="outlined" />}
//           renderOption={(props, option) => (
//             <li
//               {...props}
//               style={{
//                 padding: '8px 8px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'flex-start',
//                 alignItems: 'flex-start',
//                 gap: '1px',
//               }}
//             >
//               <Typography variant="body2" fontWeight={600}>
//                 {option.label}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 color="textSecondary"
//                 fontSize={12}
//                 style={{ marginTop: '0px' }}
//               >
//                 {option.secondaryLabel}
//               </Typography>
//             </li>
//           )}
//         />
//       </FormControl>
//     </>
//   );
// }

// import React from 'react';

// import { Box, Typography } from '@mui/material';

// export default function RouterEvent() {
//   return (
//     <>
//       <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
//         Action Event
//       </Typography>
//       <Box
//         sx={{
//           border: '1px solid #e0e0e0',
//           borderRadius: '4px',
//           padding: '13px 14px',
//           display: 'flex',
//           alignItems: 'center',
//           backgroundColor: '#fff',
//         }}
//       >
//         <Typography>Conditionally Run</Typography>
//       </Box>
//     </>
//   );
// }

import React from 'react';

import { TextField, Typography } from '@mui/material';

export default function RouterEvent() {
  return (
    <>
      <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
        Action Event
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value="Conditionally Run"
        InputProps={{
          readOnly: true,
          endAdornment: null,
          style: { cursor: 'default' },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#e0e0e0',
            },
            '&:hover fieldset': {
              borderColor: '#e0e0e0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#e0e0e0',
            },
          },
        }}
      />
    </>
  );
}
