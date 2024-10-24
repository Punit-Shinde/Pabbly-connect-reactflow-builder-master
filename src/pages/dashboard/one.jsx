import React from 'react';

import { Box } from '@mui/material';

import FlowChart from 'src/sections/reactflow/reactflow';
import WorkflowNameHeader from 'src/sections/custom-components/workflow-name-header/workflow-name-header';


export default function Page() {
  return (
    <>
    <Box>

      <WorkflowNameHeader />
      <FlowChart/>
   
    </Box>
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 64px)', // Adjust this value based on your header height
        }}
      >
        <CircularProgress size={48} color="primary" />
      </Box> */}
    </>
  );
}

