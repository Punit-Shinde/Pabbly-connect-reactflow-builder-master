import React from 'react';

import { Box } from '@mui/material';

import { CONFIG } from 'src/config-global';

import InitialActionNode from 'src/sections/custom-components/initial-action-node/initial-action-node';
import InitialTriggerNode from 'src/sections/custom-components/initial-trigger-node/initial-trigger-node';
import AddStepButtonAndEdge from 'src/sections/custom-components/add-step-button-and-edge/add-step-button-and-edge';

// ----------------------------------------------------------------------

const metadata = { title: `Page two | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <Box display="flex" alignItems="center" mt={4} flexDirection="column" gap={0}>
      <InitialTriggerNode />
      <AddStepButtonAndEdge />
      <InitialActionNode/>
      <AddStepButtonAndEdge />
    </Box>
  );
}
