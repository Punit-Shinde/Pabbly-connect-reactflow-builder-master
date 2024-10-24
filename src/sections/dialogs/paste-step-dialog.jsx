import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function PasteStepDialog({ title, content, action, open, onClose, ...other }) {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose} {...other}>
      <DialogTitle sx={{ pb: 2, display:'flex', alignItems:'center', gap:1}}><Iconify sx={{color:'red', width:'24px', height:'24px'}} icon="ic:outline-error" />{title}</DialogTitle>

      {content && <DialogContent sx={{ typography: 'body2' }}> {content} </DialogContent>}

      <DialogActions>
        {action}

        {/* <Button variant="outlined" color="primary" onClick={onClose}>
          Cancel
        </Button>
         */}
      </DialogActions>
    </Dialog>
  );
}

