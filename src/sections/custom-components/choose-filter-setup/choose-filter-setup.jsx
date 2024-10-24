import { useTheme } from '@emotion/react';
import React, { useRef, useState, Fragment, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/system';
import {
  Tab,
  Card,
  Tabs,
  Stack,
  Avatar,
  Button,
  Divider,
  Collapse,
  TextField,
  Typography,
  IconButton,
  InputLabel,
  CardContent,
  FormControl,
  Autocomplete,
} from '@mui/material';

import { useTabs } from 'src/hooks/use-tabs';
import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';

import StepName from '../step-name/step-name';

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

export default function ChooseFilterSetup({ onEnableConnectionTab }) {
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
  const [activeTab, setActiveTab] = useState('one');
  const [sections, setSections] = useState([{ id: 1, fields: [{ id: 1 }] }]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(650);

  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const handleAddField = (sectionIndex) => {
    setSections((prevSections) => {
      const newSections = [...prevSections];
      newSections[sectionIndex].fields.push({ id: newSections[sectionIndex].fields.length + 1 });
      return newSections;
    });
  };

  const handleRemoveField = (sectionIndex, fieldIndex) => {
    setSections((prevSections) => {
      const newSections = [...prevSections];
      if (newSections[sectionIndex].fields.length > 1) {
        newSections[sectionIndex].fields = newSections[sectionIndex].fields.filter(
          (_, i) => i !== fieldIndex
        );
      }
      return newSections;
    });
  };

  const handleAddOrCondition = () => {
    setSections((prevSections) => [
      ...prevSections,
      { id: prevSections.length + 1, fields: [{ id: 1 }] },
    ]);
  };

  const handleRemoveOrCondition = (sectionIndex) => {
    setSections((prevSections) => {
      if (prevSections.length > 1) {
        return prevSections.filter((_, index) => index !== sectionIndex);
      }
      return prevSections;
    });
  };

  const saveAttributes = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = drawerWidth;

    const onMouseMove = (moveEvent) => {
      const newWidth = startWidth - (moveEvent.clientX - startX);
      if (newWidth >= 500 && newWidth <= 900) {
        setDrawerWidth(newWidth);
        document.body.style.cursor = 'ew-resize';
      }
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'default';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const formValidationDialog = useBoolean();

  const formvalidationClick = () => formValidationDialog.onTrue();

  const external_apps = [
    {
      name: 'Filter (Pabbly)',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717070968-Filter--Pabbly-.png',
    },
  ];
  const core_apps = [
    {
      name: 'Filter (Pabbly)',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717070968-Filter--Pabbly-.png',
    },
  ];

  const private_apps = [
    {
      name: 'Filter (Pabbly)',
      icon: 'https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717070968-Filter--Pabbly-.png',
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
    {
      label: 'Filter Values',
      secondaryLabel: 'Set filter conditions based on values.',
    },
  ];

  const handleItemChangee = (event, newValue) => {
    setSelectedItem(newValue);
    setShowButton(newValue !== null);

    if (newValue) {
      setText(newValue.label);
    }
  };

  const renderAppGrid = (apps) => (
    <FixedSizeGrid>
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
              </Box>

              {isConnected && (
                <Box mt={2}>
                  <Divider sx={{ borderStyle: 'dashed', mb: '24px' }} />

                  {/* Route Conditions Interface */}
                  {sections.map((section, sectionIndex) => (
                    <Box key={section.id} sx={{ mt: 3, mb: 3, position: 'relative' }}>
                      {sectionIndex > 0 && (
                        <Box sx={{ position: 'relative' }}>
                          <Divider sx={{ borderStyle: 'dashed', mb: 3 }}>OR</Divider>
                          <IconButton
                            onClick={() => handleRemoveOrCondition(sectionIndex)}
                            sx={{
                              position: 'absolute',
                              right: -8,
                              top: 10,
                              color: 'grey.600',
                            }}
                          >
                            <Iconify icon="mingcute:close-line" />
                          </IconButton>
                        </Box>
                      )}

                      <Box sx={{ mr: 6 }}>
                        {!isTabletOrMobile && (
                          <Box sx={{ display: 'flex', mb: 1 }}>
                            <Box sx={{ mb: { xs: 2, sm: 0 }, width: '33%' }}>
                              <Typography sx={{ mb: 1, fontWeight: 600, fontSize: '14px' }}>
                                Select Label
                              </Typography>
                            </Box>
                            <Box sx={{ ml: 2, width: '33%' }}>
                              <Typography sx={{ mb: 1, fontWeight: 600, fontSize: '14px' }}>
                                Filter Type
                              </Typography>
                            </Box>
                            <Box sx={{ ml: 2, width: '33%' }}>
                              <Typography sx={{ mb: 1, fontWeight: 600, fontSize: '14px' }}>
                                Value
                              </Typography>
                            </Box>
                          </Box>
                        )}
                      </Box>

                      <Stack spacing={3}>
                        {section.fields.map((item, fieldIndex) => (
                          <Stack key={item.id} spacing={isTabletOrMobile ? 1 : 0}>
                            <Stack
                              direction={{ xs: 'column', md: 'row' }}
                              spacing={2}
                              sx={{ width: 1 }}
                              alignItems="center"
                            >
                              <Autocomplete
                                fullWidth
                                // options={connections}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    placeholder="Nothing Selected"
                                    margin="none"
                                  />
                                )}
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
                                    <Typography variant="body2">{option.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                      {option.subtitle}
                                    </Typography>
                                  </li>
                                )}
                              />
                              <Autocomplete
                                fullWidth
                                // options={connections}
                                getOptionLabel={(option) => option.title}
                                renderInput={(params) => (
                                  <TextField {...params} placeholder="Equal to" margin="none" />
                                )}
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
                                    <Typography variant="body2">{option.title}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                      {option.subtitle}
                                    </Typography>
                                  </li>
                                )}
                              />
                              <TextField
                                variant="outlined"
                                fullWidth
                                label="Enter text or map data."
                              />
                              {!isTabletOrMobile && (
                                <Button
                                  size="small"
                                  sx={{ color: 'grey.600', minWidth: 'auto' }}
                                  onClick={() => handleRemoveField(sectionIndex, fieldIndex)}
                                  disabled={section.fields.length === 1}
                                >
                                  <Iconify width={24} icon="solar:trash-bin-trash-bold" />
                                </Button>
                              )}
                            </Stack>
                            {isTabletOrMobile && (
                              <Box
                                sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
                              >
                                <Button
                                  size="small"
                                  sx={{ color: 'grey.600', minWidth: 'auto' }}
                                  onClick={() => handleRemoveField(sectionIndex, fieldIndex)}
                                  disabled={section.fields.length === 1}
                                >
                                  <Iconify width={24} icon="solar:trash-bin-trash-bold" />
                                </Button>
                              </Box>
                            )}
                          </Stack>
                        ))}
                      </Stack>

                      <Button
                        size="small"
                        color="primary"
                        variant="outlined"
                        startIcon={<Iconify icon="mingcute:add-line" />}
                        onClick={() => handleAddField(sectionIndex)}
                        sx={{ mt: 3, alignSelf: 'flex-start' }}
                      >
                        AND Condition
                      </Button>
                    </Box>
                  ))}

                  <Divider sx={{ mt: 3 }} />
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    startIcon={<Iconify icon="mingcute:add-line" />}
                    onClick={handleAddOrCondition}
                    sx={{ mt: 3, alignSelf: 'flex-start' }}
                  >
                    OR Condition
                  </Button>

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
                      The route will be executed based on the filter conditions you have set.
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 3 }}>
                    <Button sx={{ mr: 2 }} variant="contained" color="primary">
                      Save & Send Test Request
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={formValidationDialog.onTrue}
                    >
                      Save
                    </Button>
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
