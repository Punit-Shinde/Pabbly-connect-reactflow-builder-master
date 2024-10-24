import React, { useState } from 'react';

import {
  Box,
  Tab,
  Tabs,
  Grid,
  Card,
  Avatar,
  Collapse,
  TextField,
  Typography,
  IconButton,
  CardContent,
} from '@mui/material';

import { useTabs } from 'src/hooks/use-tabs';

import { Iconify } from 'src/components/iconify';

export default function ChooseApp() {
  const [selectedApp, setSelectedApp] = useState(null);
  const [isTabsOpen, setIsTabsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const basicTabs = useTabs('one');

  const external_apps = [
    {
      name: 'Annature',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1611236137587_1626158489-annature.png',
    },
    {
      name: 'ChargeOver',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717494873-ChargeOver.png',
    },
    {
      name: '123Formbuilder',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1591774916-123FormBuilder.png',
    },
    {
      name: '360 Dialog (Cloud)',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1642563579878_1653308257-360-Dialog.png',
    },
    {
      name: '360 Dialog (On-Premise)',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1642563579878_1653308257-360-Dialog.png',
    },
    {
      name: 'Adyen',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1603100395158_1605873194-adyen.png',
    },
    {
      name: 'ActiveTrail',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1597145299-ActiveTrail.png',
    },
    {
      name: 'AnnounceKit',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717572942-AnnounceKit.png',
    },
    {
      name: 'Campaign Monitor',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1598084818603_1599215654-Campaign-Monitor.png',
    },
    {
      name: '8x8',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717572958-8x8.png',
    },
    {
      name: 'Alchemer',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717567705-Alchemer.png',
    },
    {
      name: 'BigCommerce',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1592046278-bigcommerce-64.png',
    },
    {
      name: 'Albacross',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717502343-Albacross.png',
    },
    {
      name: 'Brilliant Directory',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1642563579878_1667028056-brilliant-directories.png',
    },
    {
      name: 'Heights Platform',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1592396845-heightsplatform.png',
    },
  ];
  const core_apps = [
    {
      name: 'Email Parser (Pabbly)',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1719902117-Pabbly-Email-Parser.png',
    },
    {
      name: 'Schedule (Pabbly)',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1590489835035_1590663807-pabbly.png',
    },
    {
      name: 'Filter (Pabbly)',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717070968-Filter--Pabbly-.png',
    },
    {
      name: 'Router (Pabbly)',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717503844-Router--Pabbly-.png',
    },
    {
      name: 'Iterator (Pabbly)',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717057453-Iterator--Pabbly-.png',
    },
    {
      name: 'Delay (Pabbly)',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717070803-Delay--Pabbly-.png',
    },
    {
      name: 'API (Pabbly)',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717652425-API--Pabbly-.png',
    },
    {
      name: 'Pabbly Email Marketing',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1590489835035_1590663807-pabbly.png',
    },
  ];

  const private_apps = [
    {
      name: 'Annaturedfdfd',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1611236137587_1626158489-annature.png',
    },
    {
      name: 'ChargeOver',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717494873-ChargeOver.png',
    },
    {
      name: '123Formbuilder',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1591774916-123FormBuilder.png',
    },
    {
      name: '360 Dialog (Cloud)',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1642563579878_1653308257-360-Dialog.png',
    },
    {
      name: '360 Dialog (On-Premise)',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1642563579878_1653308257-360-Dialog.png',
    },
    {
      name: 'Adyen',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1603100395158_1605873194-adyen.png',
    },
    {
      name: 'ActiveTrail',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1597145299-ActiveTrail.png',
    },
    {
      name: 'AnnounceKit',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717572942-AnnounceKit.png',
    },
    {
      name: 'Campaign Monitor',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1598084818603_1599215654-Campaign-Monitor.png',
    },
    {
      name: '8x8',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717572958-8x8.png',
    },
    {
      name: 'Alchemer',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717567705-Alchemer.png',
    },
    {
      name: 'BigCommerce',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1592046278-bigcommerce-64.png',
    },
    {
      name: 'Albacross',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717502343-Albacross.png',
    },
    {
      name: 'Brilliant Directory',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1642563579878_1667028056-brilliant-directories.png',
    },
    {
      name: 'Heights Platform',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1592396845-heightsplatform.png',
    },
    {
      name: 'Heights Platform',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1592396845-heightsplatform.png',
    },
    {
      name: 'Heights Platform',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1592396845-heightsplatform.png',
    },
    {
      name: 'Heights Platform',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1592396845-heightsplatform.png',
    },
    {
      name: 'Heights Platform',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1592396845-heightsplatform.png',
    },
    {
      name: 'Heights Platform',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1592396845-heightsplatform.png',
    },
    {
      name: 'Heights Platform',
      icon: 'https://d23j5fl26hha5c.cloudfront.net/images/1591083099349_1592396845-heightsplatform.png',
    },
  ];

  const allApps = [...external_apps, ...core_apps, ...private_apps];

  const handleAppSelect = (app) => {
    setSelectedApp(app);
    setIsTabsOpen(false);
    setSearchTerm('');
  };

  const toggleAppDropdown = () => {
    setIsTabsOpen(!isTabsOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderAppGrid = (apps) => (
    <Grid container spacing={2}>
      {apps.map((app, index) => (
        <Grid
          item
          key={index}
          xs={6} // 2 cards per row on extra small screens
          sm={4} // 3 cards per row on small screens
          md={3} // 4 cards per row on medium screens
          lg={2.4} // 5 cards per row on large screens
          xl={2.4} // 5 cards per row on extra large screens
        >
          <Card
            sx={{
              height: 108,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              '&:hover': { outline: '1px solid #078DEE' },
            }}
            onClick={() => handleAppSelect(app)}
          >
            <CardContent
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
            >
              <Avatar variant="rounded" src={app.icon} sx={{ width: 30, height: 30 }} />
              <Typography textAlign="center" variant="caption" component="div">
                {app.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const TABS = [
    {
      value: 'one',
      icon: <Iconify icon="gridicons:external" width={20} />,
      label: 'External Apps',
      form: (
        <Box
          sx={{
            height: 420,
            overflowY: 'auto',
            overflowX: 'hidden',
            pt: 2,
            pl: '2px',
            pr: '12px',
            pb: 2,
          }}
        >
          {renderAppGrid(
            external_apps.filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))
          )}
        </Box>
      ),
    },
    {
      value: 'two',
      icon: <Iconify icon="mdi:star-four-points-circle-outline" width={20} />,
      label: 'Core Apps',
      form: (
        <Box
          sx={{
            height: 420,
            overflowY: 'auto',
            overflowX: 'hidden',
            pt: 2,
            pl: '2px',
            pr: '12px',
            pb: 2,
          }}
        >
          {renderAppGrid(
            core_apps.filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))
          )}
        </Box>
      ),
    },
    {
      value: 'three',
      icon: <Iconify icon="material-symbols-light:private-connectivity-outline" width={30} />,
      label: 'Private Apps',
      form: (
        <Box
          sx={{
            height: 420,
            overflowY: 'auto',
            overflowX: 'hidden',
            pt: 2,
            pl: '2px',
            pr: '12px',
            pb: 2,
          }}
        >
          {renderAppGrid(
            private_apps.filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))
          )}
        </Box>
      ),
    },
  ];

  return (
    <Box mt="40px">
      <Typography fontSize={14} fontWeight={600} mt="40px" mb="8px" ml="13px">
        Choose App
      </Typography>

      <Box
        onClick={toggleAppDropdown}
        sx={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          '&:hover': {
            border: '1px solid #1C252E',
          },
        }}
      >
        {isTabsOpen ? (
          <TextField
            fullWidth
            variant="standard"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <Iconify icon="mingcute:search-line" sx={{ color: 'text.secondary', mr: 1 }} />
              ),
            }}
            onClick={(e) => e.stopPropagation()}
          />
        ) : selectedApp ? (
          <Box display="flex" alignItems="center">
            <Avatar
              variant="rounded"
              src={selectedApp.icon}
              sx={{ mr: 1, width: 24, height: 24 }}
            />
            <Typography>{selectedApp.name}</Typography>
          </Box>
        ) : (
          <Typography color="text.secondary">Choose App</Typography>
        )}
        <IconButton size="small" onClick={(e) => e.stopPropagation()}>
          <Iconify icon={isTabsOpen ? 'jam:chevron-up' : 'jam:chevron-down'} />
        </IconButton>
      </Box>

      <Collapse in={isTabsOpen}>
        <Box mt={2}>
          <Tabs value={basicTabs.value} onChange={basicTabs.onChange}>
            {TABS.map((tab) => (
              <Tab key={tab.value} icon={tab.icon} label={tab.label} value={tab.value} />
            ))}
          </Tabs>

          {TABS.map((tab) =>
            tab.value === basicTabs.value ? (
              <React.Fragment key={tab.value}>{tab.form}</React.Fragment>
            ) : null
          )}
        </Box>
      </Collapse>
    </Box>
  );
}
