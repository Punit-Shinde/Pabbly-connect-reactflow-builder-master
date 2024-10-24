import React, { useState } from 'react';

import { styled } from '@mui/system';
import {
  Box,
  Divider,
  Accordion,
  TextField,
  IconButton,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';

const ResizableTextarea = styled('textarea')({
  width: '100%',
  resize: 'vertical',
  minHeight: '38px',
  maxHeight: '200px',
  padding: '8.5px 14px',
  fontFamily: 'inherit',
  fontSize: '15px',
  color: '#1c252e',
  border: '1px solid rgba(145, 158, 171, 0.2)',
  borderRadius: '8px',
  '&:hover': {
  outline: 'none',
  border: '1px solid #1c252e',
},
 
  '&:focus': {
    outline: 'none',
    border: '2px solid #1c252e',
  },
});

export default function SimpleResponse() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = (event) => {
    // Prevent event bubbling so that the Accordion toggles only on the button click
    event.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded} onChange={handleToggle} disableGutters>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          '&.Mui-expanded': {
            backgroundColor: 'transparent',
          },
          display: 'flex',
          alignItems: 'center', // Ensure text and button are aligned vertically
          gap: 0, // Remove gap between elements
        }}
      >
        <Typography sx={{ marginRight: 1 }}>Response Received</Typography>
        <IconButton
          onClick={handleToggle}
          sx={{
            padding: 0, // Remove padding around the button
            marginLeft: '4px', // Make the button closer to the text
            // border: '1px solid grey',
          }}
        >
          <Iconify icon="jam:chevron-down" />
        </IconButton>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Divider sx={{ borderStyle: 'dashed', mb: '24px' }} />
          <Box display="flex">
            <Box width="50%">
              <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
                Label
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
                Value
              </Typography>
            </Box>
          </Box>
          {[1, 2, 3, 4].map((_, index) => (
            <Box display="flex" gap={2} mb={2} key={index}>
              <Box width="50%">
                <TextField size="small" value="Id" variant="outlined" fullWidth />
              </Box>
              <Box width="50%">
                <ResizableTextarea defaultValue="504445fcbe519cee6097d9d92ef8da9d" rows={1} />
              </Box>
            </Box>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
