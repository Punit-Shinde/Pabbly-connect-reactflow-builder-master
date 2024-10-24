import React, { useState } from 'react';

import {
  Tab,
  Box,
  Tabs,
  Stack,
  Alert,
  Button,
  Drawer,
  Tooltip,
  Divider,
  useTheme,
  Snackbar,
  // TextField,
  IconButton,
  Typography,
  // Autocomplete,
  useMediaQuery,
  Backdrop as MuiBackdrop,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';

import Value from '../value/value';
import RouterApp from '../router-app/router-app';
import FilterType from '../filter-type/filter-type';
import RouterEvent from '../router-event/router-event';
import SelectLabel from '../select-label/select-label';

const CustomBackdrop = (props) => (
  <MuiBackdrop {...props} sx={{ backgroundColor: 'transparent' }} />
);

const RouteCondition = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState('one');
  const [sections, setSections] = useState([{ id: 1, fields: [{ id: 1 }] }]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(650);
  const [inputValue, setInputValue] = useState('');

  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const connections = [
    { title: 'Google Sheet #1', subtitle: 'Created at : 2024-05-02 05:06:13' },
    { title: 'Google Sheet #2', subtitle: 'Created at : 2024-05-10 06:06:20' },
    { title: 'Google Sheet #3', subtitle: 'Created at : 2024-05-25 08:06:30' },
  ];

  const TABS = [
    {
      value: 'one',
      icon: <Iconify icon="hugeicons:setup-01" width={24} />,
      label: 'Action Setup',
    },
  ];

  return (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            width: {
              xs: '300px',
              sm: '400px',
              md: `${drawerWidth}px`,
            },
            right: 0,
            left: 'auto',
            position: 'fixed',
            height: '100%',
            overflowY: 'auto',
          },
        }}
        ModalProps={{
          BackdropComponent: CustomBackdrop,
        }}
      >
        <Box sx={{ overflowX: 'hidden' }}>
          <Box>
            <Box sx={{ p: 2 }}>
              <Box display="flex" flexDirection="column">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Tabs value={activeTab} sx={{ mt: '0px' }}>
                    {TABS.map((tab) => (
                      <Tab
                        key={tab.value}
                        icon={tab.icon}
                        label={tab.label}
                        value={tab.value}
                        disabled={tab.disabled}
                      />
                    ))}
                  </Tabs>
                  <IconButton onClick={onClose} sx={{ mt: '0px' }}>
                    <Iconify icon="mingcute:close-line" />
                  </IconButton>
                </Box>
              </Box>
              <Box sx={{ mt: 3, mb: 3 }}>
                <RouterApp />
              </Box>
              <Box sx={{ mb: 3 }}>
                <RouterEvent />
              </Box>
              <Divider sx={{ borderStyle: 'dashed' }} />
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={1}
                sx={{
                  width: 1,
                  mt: 3,
                  // px: isTabletOrMobile ? 0 : 1,
                  // mr:3,
                }}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  sx={{
                    width: isTabletOrMobile ? '100%' : '30%',
                    color: 'primary',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  Select Label
                </Typography>
                <Typography
                  sx={{
                    width: isTabletOrMobile ? '95%' : '30%',
                    color: 'primary',
                    fontSize: '14px',
                    fontWeight: '600',
                    pl: '4px',
                  }}
                >
                  Filter Type
                </Typography>
                <Typography
                  sx={{
                    width: isTabletOrMobile ? '95%' : '30%',
                    color: 'primary',
                    fontSize: '14px',
                    fontWeight: '600',
                    pl: '8px',
                  }}
                >
                  Value
                </Typography>
                {!isTabletOrMobile && <Box sx={{ width: 40 }} />}{' '}
                {/* Spacer for delete button column */}
              </Stack>
              {sections.map((section, sectionIndex) => (
                <Box key={section.id} sx={{ mt: 1, mb: 3, position: 'relative' }}>
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
                  <Stack spacing={3}>
                    {section.fields.map((item, fieldIndex) => (
                      <Stack key={item.id} spacing={isTabletOrMobile ? 1 : 0}>
                        <Stack
                          direction={{ xs: 'column', md: 'row' }}
                          spacing={1}
                          sx={{ width: 1 }}
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <SelectLabel />
                          <FilterType />
                          <Value />
                          {!isTabletOrMobile && (
                            <Tooltip title="Delete attribute" placement="top" arrow>
                              <Button
                                size="small"
                                sx={{ color: 'grey.600', minWidth: 'auto' }}
                                onClick={() => handleRemoveField(sectionIndex, fieldIndex)}
                                disabled={section.fields.length === 1}
                              >
                                <Iconify width={24} icon="solar:trash-bin-trash-bold" />
                              </Button>
                            </Tooltip>
                          )}
                        </Stack>
                        {isTabletOrMobile && (
                          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
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
                <Button sx={{ mr: 2 }} onClick={saveAttributes} variant="contained" color="primary">
                  Save & Send Test Request
                </Button>
                <Button onClick={saveAttributes} variant="outlined" color="primary">
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{
            boxShadow: '0px 8px 16px 0px rgba(145, 158, 171, 0.16)',
          }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{
              width: '100%',
              fontSize: '14px',
              fontWeight: 'bold',
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
            }}
          >
            Attributes Saved Successfully!
          </Alert>
        </Snackbar>
        <Box
          sx={{
            width: '10px',
            cursor: 'ew-resize',
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 1000,
          }}
          onMouseDown={handleMouseDown}
        />
      </Drawer>
      {open && <CustomBackdrop open={open} onClick={onClose} />}
    </>
  );
};

export default RouteCondition;
