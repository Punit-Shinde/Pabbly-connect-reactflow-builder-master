import React, { useRef, useState, useEffect } from 'react';

import { Box } from '@mui/system';
import {
  Grid,
  Card,
  Avatar,
  Button,
  Switch,
  Divider,
  TextField,
  Typography,
  CardContent,
  FormControlLabel,
} from '@mui/material';

import { useTabs } from 'src/hooks/use-tabs';

import { Iconify } from 'src/components/iconify';

import Image2 from './initial-shape.png';
import ChooseApp from '../custom-components/choose-app/choose-app';
import ActionEvent from '../custom-components/action-event/action-event';
import DropdownField from '../custom-components/dropdown-field/dropdown-field';
import ImportantNote from '../custom-components/important-note/important-note';
import SimpleResponse from '../custom-components/simple-response/simple-response';
import InsertDataField from '../custom-components/insert-data-field/insert-data-field';

export default function DemoActionSetup({ onEnableConnectionTab }) {
  const [selectedApp, setSelectedApp] = useState(null);
  const [showItemDropdown, setShowItemDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('Choose Next Application');
  const textFieldRef = useRef(null);
  const [isTabsOpen, setIsTabsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const basicTabs = useTabs('one');
  const [selectedItem, setSelectedItem] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const autoOptions = [
    { label: 'Magnet Brains Software Technology Pvt. Ltd.', value: 'auto1' },
    { label: 'Pabbly List', value: 'auto2' },
  ];
  const [autoValue, setAutoValue] = useState(autoOptions[0]);

  useEffect(() => {
    if (isEditing) {
      textFieldRef.current.focus();
    }
  }, [isEditing]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

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
    if (app !== selectedApp) {
      setSelectedApp(app);
      setShowItemDropdown(true);
    }
    setIsTabsOpen(false);
    setSearchTerm('');
  };

  const toggleAppDropdown = () => {
    setIsTabsOpen(!isTabsOpen);
    if (!isTabsOpen) {
      setShowItemDropdown(false);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredApps = allApps.filter((app) =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const items = [
    { label: 'Add New Row', secondaryLabel: 'Add New Row' },
    {
      label: 'Add New Row (Shared Drive)',
      secondaryLabel: 'Adds a new row to a Google Sheets document stored in a shared drive.',
    },
    {
      label: 'Add New Row (Shared Drive)',
      secondaryLabel: 'Adds a new row to a Google Sheets document stored in a shared drive.',
    },
    {
      label: 'Add Multiple Rows',
      secondaryLabel: 'Add multiple rows.',
    },
    {
      label: 'Append Values',
      secondaryLabel: 'Append Values',
    },
    {
      label: 'Create a Sheet',
      secondaryLabel: 'Create a Sheet',
    },
    {
      label: 'Create a Spreadsheet',
      secondaryLabel: 'Create a Spreadsheet',
    },
    // Add more items as needed
  ];

  const handleItemChangee = (event, newValue) => {
    setSelectedItem(newValue);
    setShowButton(newValue !== null);

    if (newValue) {
      setText(newValue.label);
    }
  };

  const renderAppGrid = (apps) => (
    <Grid container spacing={2}>
      {apps.map((app, index) => (
        <Grid item xs={2} key={index}>
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

  const handleConnect = () => {
    setIsConnected(true);
    // onEnableConnectionTab();
  };

  const handleRefreshFields = () => {
    // Implement the refresh fields logic here
    console.log('Refreshing fields...');
  };

  // sssdsd
  const [tags, setTags] = useState(['Ayush']);
  const [tagInput, setTagInput] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const handleAddTag = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleSelectAccordionContent = (content) => {
    // Add selected content to tags without checking for duplicates
    setTags([...tags, content]);
    handleClosePopover();
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  // sdsdd
  const [showField, setShowField] = useState(false);

  const handleButtonClick = () => {
    setShowField(true);
  };
  return (
    <Box mt="40px">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap="20px">
          <Avatar
            variant="rounded"
            src={selectedApp ? selectedApp.icon : Image2}
            sx={{
              p: 1,
              width: 48,
              height: 48,
              bgcolor: 'background.neutral',
              border: '1px solid #D4E2FF',
            }}
          />
          <TextField
            size="large"
            variant="standard"
            onClick={handleEditClick}
            inputRef={textFieldRef}
            value={text}
            onChange={handleTextChange}
            onBlur={handleBlur}
            InputProps={{
              readOnly: !isEditing,
              disableUnderline: false,
              style: {
                fontWeight: '700',
                fontSize: '18px',
              },
              sx: {
                '& .MuiInput-underline:before': {
                  borderBottom: '2px solid #D4E2FF',
                },
                '& .MuiInput-underline:hover:before': {
                  borderBottom: '2px solid #078DEE',
                },
                '& .MuiInput-underline:after': {
                  borderBottom: '2px solid #078DEE',
                },
              },
            }}
          />

          <Iconify icon="solar:pen-bold" onClick={handleEditClick} style={{ cursor: 'pointer' }} />
        </Box>
        <Iconify icon="ph:question" />
      </Box>
      <ChooseApp />

      <Box mt={2}>
        <ActionEvent />

        <Box mt={3}>
          <Divider sx={{ borderStyle: 'dashed', mb: '24px' }} />
          <Box display="flex" gap={2}>
            <Button
              size="medium"
              variant={isConnected ? 'outlined' : 'contained'}
              color="primary"
              onClick={handleConnect}
              startIcon={<Iconify icon={isConnected ? 'mdi:check' : 'fa6-solid:plug'} />}
            >
              {isConnected ? 'Connected' : 'Connect'}
            </Button>
            {isConnected && (
              <Button
                size="medium"
                variant="outlined"
                color="primary"
                onClick={handleRefreshFields}
                startIcon={<Iconify icon="mdi:refresh" />}
              >
                Refresh Fields
              </Button>
            )}
          </Box>

          <Box mt={2}>
            <Divider sx={{ borderStyle: 'dashed', mb: '24px' }} />
            <DropdownField />
            <InsertDataField />

            <ImportantNote />
            <Divider sx={{ borderStyle: 'dashed', mt: '24px' }} />
            <FormControlLabel
              control={<Switch name="small" size="medium" />}
              label="Simple Response"
              labelPlacement="start"
            />
            <Box mt={2} display="flex" flexDirection="column" gap={2}>
              <Box display="flex" gap={2}>
                <Button variant="contained" color="primary" onClick={handleButtonClick}>
                  Save & Send Test Request
                </Button>
                <Button variant="outlined" color="primary">
                  Save
                </Button>
              </Box>
              <SimpleResponse />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
