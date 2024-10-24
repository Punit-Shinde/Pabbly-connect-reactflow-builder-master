import { useRef, useState } from 'react';

import { Box, Avatar, TextField } from '@mui/material';

import { Iconify } from 'src/components/iconify';

import Image from 'src/sections/custom-components/step-name/initial-shape.png';

export default function StepName() {
  const [isEditing, setIsEditing] = useState(false);
  const textFieldRef = useRef(null);
  const [text, setText] = useState('Choose Next Application');

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleBlur = () => {
    setIsEditing(false);
  };
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center" gap="20px">
        <Avatar
          variant="rounded"
          src={Image}
          sx={{
            p: 1,
            width: 48,
            height: 48,
            bgcolor: 'background.neutral',
            border: '1px solid #D4E2FF',
          }}
        />
        <TextField
          size="large"
          variant="standard"
          onClick={handleEditClick}
          inputRef={textFieldRef}
          value={text}
          onChange={handleTextChange}
          onBlur={handleBlur}
          InputProps={{
            readOnly: !isEditing,
            disableUnderline: false,
            style: {
              fontWeight: '700',
              fontSize: '18px',
            },
            sx: {
              '& .MuiInput-underline:before': {
                borderBottom: '2px solid #D4E2FF',
              },
              '& .MuiInput-underline:hover:before': {
                borderBottom: '2px solid #078DEE',
              },
              '& .MuiInput-underline:after': {
                borderBottom: '2px solid #078DEE',
              },
            },
          }}
        />

        <Iconify icon="solar:pen-bold" onClick={handleEditClick} style={{ cursor: 'pointer' }} />
      </Box>
      <Iconify icon="ph:question" />
    </Box>
  );
}
