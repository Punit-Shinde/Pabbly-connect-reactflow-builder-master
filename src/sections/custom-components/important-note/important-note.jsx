import { Box, Typography } from '@mui/material';

export default function ImportantNote() {
  return (
    <Box
      sx={{
        borderLeft: '3px solid #078DEE',
        borderRight: '1px solid #919EAB33',
        borderTop: '1px solid #919EAB33',
        borderBottom: '1px solid #919EAB33',
        borderRadius: '8px',
      }}
      p={2}
      mt={3}
    >
      <Typography fontSize={14} fontWeight={700} color="grey.600">
        Important Note:
      </Typography>
      <Typography fontSize={15} fontWeight={400} color="grey.600">
        If your Google Sheets contain more than 52 columns, it is recommended to use the
        &quot;Append Value&quot; action step.
      </Typography>
    </Box>
  );
}
