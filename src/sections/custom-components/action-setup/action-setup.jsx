import React, { useRef, useState, Fragment, useEffect } from 'react';

import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import {
  Tab,
  Card,
  Tabs,
  Avatar,
  Button,
  Switch,
  Divider,
  Collapse,
  TextField,
  Typography,
  IconButton,
  InputLabel,
  CardContent,
  FormControl,
  Autocomplete,
  FormControlLabel,
} from '@mui/material';

import { useTabs } from 'src/hooks/use-tabs';
import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';

import StepName from '../step-name/step-name';
import ImportantNote from '../important-note/important-note';
import DropdownField from '../dropdown-field/dropdown-field';
import SimpleResponse from '../simple-response/simple-response';
import { FormValidationDialog } from './form-validation-dialog';
import InsertDataField from '../insert-data-field/insert-data-field';

const FixedSizeGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 120px)', // Fixed width for each column
  gap: theme.spacing(2),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing('1px'),
  paddingRight: theme.spacing('1px'),
}));

const AppCard = styled(Card)(({ theme }) => ({
  width: 120, // Fixed width
  height: 120, // Fixed height
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': { outline: '1px solid #078DEE' },
}));

export default function ActionSetup({ onEnableConnectionTab }) {
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

  const formValidationDialog = useBoolean();

  const formvalidationClick = () => formValidationDialog.onTrue();

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
    <FixedSizeGrid  >
      {apps.map((app, index) => (
        <AppCard key={index} onClick={() => handleAppSelect(app)}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              // padding: '8px !important', 
            }}
          >
            <Avatar variant="rounded" src={app.icon} sx={{ width: 40, height: 40 }} />
            <Typography
              textAlign="center"
              variant="caption"
              component="div"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                lineHeight: '1.2em',
                height: '2.4em',
              }}
            >
              {app.name}
            </Typography>
          </CardContent>
        </AppCard>
      ))}
    </FixedSizeGrid>
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

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  // sdsdd
  const [showField, setShowField] = useState(false);

  const handleButtonClick = () => {
    setShowField(true);
  };
  return (
    <Box mt="24px">
      <StepName />
      <Typography fontSize={14} fontWeight={600} mt="24px" mb="8px" ml="13px">
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
            tab.value === basicTabs.value ? <Fragment key={tab.value}>{tab.form}</Fragment> : null
          )}
        </Box>
      </Collapse>

      {showItemDropdown && (
        <Box mt={2}>
          <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
            Action Event
          </Typography>
          <FormControl fullWidth>
            {inputValue === '' && <InputLabel id="item-select-label">Select Event</InputLabel>}
            <Autocomplete
              fullWidth
              options={items}
              getOptionLabel={(option) => option.label}
              value={selectedItem}
              onChange={handleItemChangee}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
              isOptionEqualToValue={(option, value) => option.label === value?.label}
              renderInput={(params) => <TextField {...params} variant="outlined" />}
              renderOption={(props, option) => (
                <li
                  {...props}
                  style={{
                    padding: '8px 8px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '1px',
                  }}
                >
                  <Typography variant="body2" fontWeight={600}>
                    {option.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    fontSize={12}
                    style={{ marginTop: '0px' }}
                  >
                    {option.secondaryLabel}
                  </Typography>
                </li>
              )}
            />
          </FormControl>
          {showButton && (
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
              {isConnected && (
                <Box mt={2}>
                  <Divider sx={{ borderStyle: 'dashed', mb: '24px' }} />
                  <DropdownField />
                  <InsertDataField />
                  <ImportantNote />
                  <Divider sx={{ borderStyle: 'dashed', my: '24px' }} />
                  <FormControlLabel
                    control={<Switch name="small" size="medium" />}
                    label="Simple Response"
                    labelPlacement="start"
                  />
                  <Box mt={3} display="flex" flexDirection="column" gap={2}>
                    <Box display="flex" gap={2} >
                      <Button variant="contained" color="primary" onClick={handleButtonClick}>
                        Save & Send Test Request
                      </Button>
                      <Button onClick={formvalidationClick} variant="outlined" color="primary">
                        Save
                      </Button>
                    </Box>
                    {showField && <SimpleResponse />}
                    <FormValidationDialog
                      open={formValidationDialog.value}
                      onClose={formValidationDialog.onFalse}
                      title="Warning"
                      content="Email is Required"
                      action={
                        <Button variant="contained" color="primary">
                          OK
                        </Button>
                      }
                    />
                  </Box>
                </Box>
              )}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}


