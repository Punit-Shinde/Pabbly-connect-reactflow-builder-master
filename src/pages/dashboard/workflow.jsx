import React from 'react';

import { Box } from '@mui/material';

import { CONFIG } from 'src/config-global';

import ActionNode from 'src/sections/custom-components/action-node/action-node';
import RouterNode from 'src/sections/custom-components/router-node/router-node';
import TiggerNode from 'src/sections/custom-components/trigger-node/trigger-node';
import AddStepButtonAndEdge from 'src/sections/custom-components/add-step-button-and-edge/add-step-button-and-edge';

// ----------------------------------------------------------------------

const metadata = { title: `Page two | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <Box display="flex" alignItems="center" mt={4} flexDirection="column" gap={0} mb={4}>
      <TiggerNode />
      <AddStepButtonAndEdge />
      <ActionNode />
      <AddStepButtonAndEdge />
      <RouterNode />
    </Box>
  );
}
