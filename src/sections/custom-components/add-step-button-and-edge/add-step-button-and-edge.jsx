import React from 'react';

import { Box, Tooltip, IconButton } from '@mui/material';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function AddStepButtonAndEdge() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Iconify icon="vaadin:line-v" sx={{ color: '#84889780' }} />
      <Tooltip title="Add Step" arrow placement="right">
        <IconButton
          size="small"
          color="primary"
          sx={{
            boxShadow: '0px 8px 16px 0px rgba(132, 136, 151, 0.24)',
            backgroundColor: 'common.white',
            '&:hover': {
              color: 'common.white',
              backgroundColor: '#078DEE',
            },
          }}
        >
          <Iconify icon="ph:plus-bold" />
        </IconButton>
      </Tooltip>
      <Iconify icon="vaadin:line-v" sx={{ color: '#84889780' }} />
      <Iconify icon="bxs:down-arrow" sx={{ mt: '-4px', color: '#84889780' }} />
    </Box>
  );
}
