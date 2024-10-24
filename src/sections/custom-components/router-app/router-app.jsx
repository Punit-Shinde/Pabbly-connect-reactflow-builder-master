// import React, { useState } from 'react';

// import {
//   Box,
//   Tab,
//   Tabs,
//   Grid,
//   Card,
//   Avatar,
//   Collapse,
//   TextField,
//   Typography,
//   IconButton,
//   CardContent,
// } from '@mui/material';

// import { useTabs } from 'src/hooks/use-tabs';

// import { Iconify } from 'src/components/iconify';

// export default function RouterApp() {
//   const [selectedApp, setSelectedApp] = useState(null);
//   const [isTabsOpen, setIsTabsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const basicTabs = useTabs('one');

//   const external_apps = [
//     {
//       name: 'Router (Pabbly)',
//       icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717503844-Router--Pabbly-.png',
//     },
//     {
//       name: 'Filter (Pabbly)',
//       icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717070968-Filter--Pabbly-.png',
//     },
//   ];
//   const core_apps = [
//     {
//       name: 'Router (Pabbly)',
//       icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1611236137587_1626158489-annature.png',
//     },
//     {
//       name: 'Filter (Pabbly)',
//       icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717494873-ChargeOver.png',
//     },
//   ];

//   const private_apps = [
//     {
//       name: 'Router (Pabbly)',
//       icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1611236137587_1626158489-annature.png',
//     },
//     {
//       name: 'Filter (Pabbly)',
//       icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717494873-ChargeOver.png',
//     },
//   ];

//   const allApps = [...external_apps, ...core_apps, ...private_apps];

//   const handleAppSelect = (app) => {
//     setSelectedApp(app);
//     setIsTabsOpen(false);
//     setSearchTerm('');
//   };

//   const toggleAppDropdown = () => {
//     setIsTabsOpen(!isTabsOpen);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const renderAppGrid = (apps) => (
//     <Grid container spacing={2}>
//       {apps.map((app, index) => (
//         <Grid
//           item
//           key={index}
//           xs={6} // 2 cards per row on extra small screens
//           sm={4} // 3 cards per row on small screens
//           md={3} // 4 cards per row on medium screens
//           lg={2.4} // 5 cards per row on large screens
//           xl={2.4} // 5 cards per row on extra large screens
//         >
//           <Card
//             sx={{
//               height: 108,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               cursor: 'pointer',
//               '&:hover': { outline: '1px solid #078DEE' },
//             }}
//             onClick={() => handleAppSelect(app)}
//           >
//             <CardContent
//               sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
//             >
//               <Avatar variant="rounded" src={app.icon} sx={{ width: 30, height: 30 }} />
//               <Typography textAlign="center" variant="caption" component="div">
//                 {app.name}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );

//   const TABS = [
//     {
//       value: 'one',
//       icon: <Iconify icon="gridicons:external" width={20} />,
//       label: 'External Apps',
//       form: (
//         <Box
//           sx={{
//             height: 'auto',
//             overflowY: 'auto',
//             overflowX: 'hidden',
//             pt: 2,
//             pl: '2px',
//             pr: '12px',
//             pb: 2,
//           }}
//         >
//           {renderAppGrid(
//             external_apps.filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))
//           )}
//         </Box>
//       ),
//     },
//     {
//       value: 'two',
//       icon: <Iconify icon="mdi:star-four-points-circle-outline" width={20} />,
//       label: 'Core Apps',
//       form: (
//         <Box
//           sx={{
//             height: 'auto',
//             overflowY: 'auto',
//             overflowX: 'hidden',
//             pt: 2,
//             pl: '2px',
//             pr: '12px',
//             pb: 2,
//           }}
//         >
//           {renderAppGrid(
//             core_apps.filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))
//           )}
//         </Box>
//       ),
//     },
//     {
//       value: 'three',
//       icon: <Iconify icon="material-symbols-light:private-connectivity-outline" width={30} />,
//       label: 'Private Apps',
//       form: (
//         <Box
//           sx={{
//             height: 'auto',
//             overflowY: 'auto',
//             overflowX: 'hidden',
//             pt: 2,
//             pl: '2px',
//             pr: '12px',
//             pb: 2,
//           }}
//         >
//           {renderAppGrid(
//             private_apps.filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))
//           )}
//         </Box>
//       ),
//     },
//   ];

//   return (
//     <Box>
//       <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
//         Choose App
//       </Typography>

//       <Box
//         onClick={toggleAppDropdown}
//         sx={{
//           border: '1px solid #e0e0e0',
//           borderRadius: '8px',
//           padding: '10px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           cursor: 'pointer',
//           '&:hover': {
//             border: '1px solid #1C252E',
//           },
//         }}
//       >
//         {isTabsOpen ? (
//           <TextField
//             fullWidth
//             variant="standard"
//             placeholder="Search apps..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//             InputProps={{
//               disableUnderline: true,
//               startAdornment: (
//                 <Iconify icon="mingcute:search-line" sx={{ color: 'text.secondary', mr: 1 }} />
//               ),
//             }}
//             onClick={(e) => e.stopPropagation()}
//           />
//         ) : selectedApp ? (
//           <Box display="flex" alignItems="center">
//             <Avatar
//               variant="rounded"
//               src={selectedApp.icon}
//               sx={{ mr: 1, width: 24, height: 24 }}
//             />
//             <Typography>{selectedApp.name}</Typography>
//           </Box>
//         ) : (
//           <Typography color="text.secondary">Choose App</Typography>
//         )}
//         <IconButton size="small" onClick={(e) => e.stopPropagation()}>
//           <Iconify icon={isTabsOpen ? 'jam:chevron-up' : 'jam:chevron-down'} />
//         </IconButton>
//       </Box>

//       <Collapse in={isTabsOpen}>
//         <Box mt={2}>
//           <Tabs value={basicTabs.value} onChange={basicTabs.onChange}>
//             {TABS.map((tab) => (
//               <Tab key={tab.value} icon={tab.icon} label={tab.label} value={tab.value} />
//             ))}
//           </Tabs>

//           {TABS.map((tab) =>
//             tab.value === basicTabs.value ? (
//               <React.Fragment key={tab.value}>{tab.form}</React.Fragment>
//             ) : null
//           )}
//         </Box>
//       </Collapse>
//     </Box>
//   );
// }

// import React from 'react';

// import {
//   Box,
//   Avatar,
//   Typography,
// } from '@mui/material';

// export default function RouterApp() {
//   const filterApp = {
//     name: 'Filter (Pabbly)',
//     icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717070968-Filter--Pabbly-.png',
//   };

//   return (
//     <Box>
//       <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
//         Choose App
//       </Typography>

//       <Box
//         sx={{
//           border: '1px solid #e0e0e0',
//           borderRadius: '8px',
//           padding: '10px',
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <Box display="flex" alignItems="center">
//           <Avatar
//             variant="rounded"
//             src={filterApp.icon}
//             sx={{ mr: 1, width: 24, height: 24 }}
//           />
//           <Typography>{filterApp.name}</Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

import React from 'react';

import { Box, Avatar, TextField, Typography } from '@mui/material';

export default function RouterApp() {
  const filterApp = {
    name: 'Filter (Pabbly)',
    icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717070968-Filter--Pabbly-.png',
  };

  return (
    <Box>
      <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
        Choose App
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={filterApp.name}
        InputProps={{
          readOnly: true,
          startAdornment: (
            <Avatar variant="rounded" src={filterApp.icon} sx={{ width: 24, height: 24, mr: 1 }} />
          ),
          endAdornment: null,
          style: { cursor: 'default' },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#e0e0e0',
            },
            '&:hover fieldset': {
              borderColor: '#e0e0e0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#e0e0e0',
            },
          },
        }}
      />
    </Box>
  );
}
