import { useTheme } from '@emotion/react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import {
  Divider,
  Tooltip,
  TextField,
  Typography,
  useMediaQuery,
  DialogContent,
  InputAdornment,
} from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';

export function SharePopover({ title, content, action, open, onClose, ...other }) {
  const theme = useTheme();
  const isWeb = useMediaQuery(theme.breakpoints.up('sm'));
  const dialog = useBoolean();
 
  return (
      <Dialog
        open={open}
        onClose={onClose}
        {...other}
        PaperProps={isWeb ? { style: { minWidth: '600px' } } : { style: { minWidth: '330px' } }}
      >
        <DialogTitle
          sx={{ fontWeight: '700', display: 'flex', justifyContent: 'space-between' }}
          onClick={dialog.onFalse}
        >
          Share Workflow{' '}
          <Iconify
            onClick={onClose}
            icon="uil:times"
            style={{ width: 20, height: 20, cursor: 'pointer', color: '#637381' }}
          />
        </DialogTitle>
        <Divider sx={{ mb: '16px', borderStyle: 'dashed' }} />
        <DialogContent>
          <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
            Share Link
          </Typography>
          <TextField
            sx={{ width: '100%' }}
            variant="outlined"
            fullWidth
            value="https://connect.pabbly.com/workflow/share/C0MCMFMEB2RWHAFrAV5TdFhMAgYBWAlrV05WRF1SAHgDTVYDAEFcNg5CBScAT1c2URgGbAZaUW1bT1VRAlQBcl1EUm4GBVIoAUwBMlAVADMLVQIqUzI#"
            helperText="When sharing the workflow, the account credentials and task history will not be shared under any circumstances. However, the mapped data used in the workflow will be made available to the user to allow for a better understanding of the workflow's setup."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip
                    title="Copy your link here."
                    arrow
                    placement="top"
                    sx={{
                      fontSize: '16px', // Adjust the font size as needed
                    }}
                  >
                    <Iconify
                      icon="solar:copy-bold"
                      style={{ width: 20, height: 20, cursor: 'pointer' }}
                    />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          {action}
          <Button onClick={onClose} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
  );
}
