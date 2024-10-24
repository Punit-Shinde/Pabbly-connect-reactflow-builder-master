import { Box, Link, Button, Tooltip, TextField, Typography, InputAdornment } from '@mui/material';

import { Iconify } from 'src/components/iconify';

export default function AddNewConnection() {
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
            Token
          </Typography>
          <TextField
            sx={{ mt: '8px' }}
            fullWidth
            type="text"
            margin="dense"
            variant="outlined"
            placeholder="Token"
            helperText={
              <>
                Enter your API Key. You can find the above Key by login to your Mailchimp Account
                &gt; click on profile picture &gt; click on profile &gt; Extras &gt; API Keys.{' '}
                <Link
                  href="https://mailchimp.com/developer/marketing/guides/quick-start/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </Link>
              </>
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip
                    title="Enter your API Key"
                    arrow
                    placement="top"
                    sx={{
                      fontSize: '16px',
                    }}
                  >
                    <Iconify
                      icon="material-symbols:info-outline"
                      style={{ width: 20, height: 20 }}
                    />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
          <Typography
            sx={{
              ml: '13px',
              fontSize: '14px',
              fontWeight: '600',
              width: '100%',
              mt: '24px',
            }}
          >
            Data Center
          </Typography>
          <TextField
            sx={{ mt: '8px' }}
            fullWidth
            type="text"
            margin="dense"
            variant="outlined"
            placeholder="Enter the data center"
            helperText="Enter the data center  e.g. “us19” which appears as a subdomain in your Mailchimp account URL e.g. https://us19.api.mailchimp.com"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip
                    title="Enter the data center"
                    arrow
                    placement="top"
                    sx={{
                      fontSize: '16px',
                    }}
                  >
                    <Iconify
                      icon="material-symbols:info-outline"
                      style={{ width: 20, height: 20 }}
                    />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
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
