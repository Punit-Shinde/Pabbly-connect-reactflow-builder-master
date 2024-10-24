import React, { Fragment, useState } from 'react';

import { Box, Tab, Tabs, Drawer, IconButton, Backdrop as MuiBackdrop } from '@mui/material';

import { Iconify } from 'src/components/iconify';

import ChooseFilterSetup from '../choose-filter-setup/choose-filter-setup';

const CustomBackdrop = (props) => (
  <MuiBackdrop {...props} sx={{ backgroundColor: 'transparent' }} />
);

const ChooseFilterAppDrawer = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState('one');
  const [isConnectionTabEnabled, setIsConnectionTabEnabled] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(590); // Increased initial drawer width

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const enableConnectionTab = () => {
    setIsConnectionTabEnabled(true);
    setActiveTab('two');
  };

  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const startWidth = drawerWidth;

    const onMouseMove = (f) => {
      const newWidth = startWidth - (f.clientX - startX);
      if (newWidth > 590 && newWidth < 900) {
        // Adjusted min and max width
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

  const TABS = [
    {
      value: 'one',
      icon: <Iconify icon="hugeicons:setup-01" width={24} />,
      label: 'Action Setup',
      form: <ChooseFilterSetup onEnableConnectionTab={enableConnectionTab} />,
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
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            width: {
              xs: '300px',
              sm: '400px',
              md: `${drawerWidth}px`, // Dynamic width for larger screens
            },
          },
        }}
        ModalProps={{
          BackdropComponent: CustomBackdrop,
        }}
      >
        <Box onClick={handleBackdropClick} display="flex" flexDirection="column">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Tabs value={activeTab} onChange={handleTabChange} sx={{ mt: '0px' }}>
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
          {TABS.map((tab) =>
            tab.value === activeTab ? <Fragment key={tab.value}>{tab.form}</Fragment> : null
          )}
        </Box>
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
      {open && <CustomBackdrop open={open} onClick={handleBackdropClick} />}
    </>
  );
};

export { ChooseFilterAppDrawer };
