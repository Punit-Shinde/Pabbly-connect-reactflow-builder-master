import { Button } from '@mui/material';

import { Iconify } from 'src/components/iconify';

export default function Buttons() {
  return (
    <>
      {/* Icon Button with text filled */}
      <Button
        size="medium"
        variant="contained"
        color="primary"
        startIcon={<Iconify icon="fa6-solid:plug" />}
      >
        Connect
      </Button>
      {/* Icon Button with text filled */}

      {/* Icon Button with text putlined */}

      <Button
        size="medium"
        variant="outlined"
        color="primary"
        startIcon={<Iconify icon="mdi:refresh" />}
      >
        Refresh Fields
      </Button>
      {/* Icon Button with text outlined */}

      {/* Icon Button  */}
      <Button
        variant="outlined"
        startIcon={
          <Iconify
            sx={{ ml: '10px', width: '24px', height: '24px', color: '#637381' }}
            icon="mdi:refresh"
          />
        }
      />

      {/* Icon Button  */}
    </>
  );
}
