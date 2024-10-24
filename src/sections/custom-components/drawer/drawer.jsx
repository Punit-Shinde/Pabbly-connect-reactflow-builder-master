// import React, { Fragment, useState } from 'react';

// import { Box, Tab, Tabs, Drawer, IconButton, Backdrop as MuiBackdrop } from '@mui/material';

// import { Iconify } from 'src/components/iconify';

// import ActionSetup from '../action-setup/action-setup';
// import ConnectionSetup from '../connection-setup/connection-setup';

// const CustomBackdrop = (props) => (
//   <MuiBackdrop {...props} sx={{ backgroundColor: 'transparent' }} />
// );

// const ConfigurationDrawer1 = ({ open, onClose }) => {
//   const [activeTab, setActiveTab] = useState('one');
//   const [isConnectionTabEnabled, setIsConnectionTabEnabled] = useState(false);
//   const [drawerWidth, setDrawerWidth] = useState(400); // Initial drawer width

//   const handleBackdropClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   const enableConnectionTab = () => {
//     setIsConnectionTabEnabled(true);
//     setActiveTab('two');
//   };

//   const handleMouseDown = (e) => {
//     const startX = e.clientX;
//     const startWidth = drawerWidth;

//     const onMouseMove = (f) => {
//       const newWidth = startWidth - (f.clientX - startX);
//       if (newWidth > 400 && newWidth < 700) {
//         setDrawerWidth(newWidth);
//         document.body.style.cursor = 'ew-resize'; // Set cursor during resize
//       }
//     };

//     const onMouseUp = () => {
//       document.removeEventListener('mousemove', onMouseMove);
//       document.removeEventListener('mouseup', onMouseUp);
//       document.body.style.cursor = 'default'; // Reset cursor when done
//     };

//     document.addEventListener('mousemove', onMouseMove);
//     document.addEventListener('mouseup', onMouseUp);
//   };

//   const TABS = [
//     {
//       value: 'one',
//       icon: <Iconify icon="hugeicons:setup-01" width={24} />,
//       label: 'Action Setup',
//       form: <ActionSetup onEnableConnectionTab={enableConnectionTab} />,
//     },
//     {
//       value: 'two',
//       icon: <Iconify icon="icon-park-solid:circular-connection" width={24} />,
//       label: 'Connections',
//       form: <ConnectionSetup />,
//     },
//   ];

//   return (
//     <>
//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={onClose}
//         PaperProps={{
//           sx: {
//             p: 2,
//             display: 'flex',
//             flexDirection: 'column',
//             width: {
//               xs: '300px', // Fixed width for mobile screens
//               sm: '400px', // Fixed width for tablet screens
//               md: `${drawerWidth}px`, // Dynamic width for larger screens
//             },
//           },
//         }}
//         ModalProps={{
//           BackdropComponent: CustomBackdrop,
//         }}
//       >
//         <Box onClick={handleBackdropClick} display="flex" flexDirection="column">
//           <Box display="flex" justifyContent="space-between" alignItems="center">
//             <Tabs value={activeTab} onChange={handleTabChange} sx={{ mt: '0px' }}>
//               {TABS.map((tab) => (
//                 <Tab
//                   key={tab.value}
//                   icon={tab.icon}
//                   label={tab.label}
//                   value={tab.value}
//                   disabled={tab.disabled}
//                 />
//               ))}
//             </Tabs>
//             <IconButton onClick={onClose} sx={{ mt: '0px' }}>
//               <Iconify icon="mingcute:close-line" />
//             </IconButton>
//           </Box>
//           {TABS.map((tab) =>
//             tab.value === activeTab ? <Fragment key={tab.value}>{tab.form}</Fragment> : null
//           )}
//         </Box>
//         {/* Resizable handle */}
//         <Box
//           sx={{
//             width: '10px', // Wider hit area
//             cursor: 'ew-resize',
//             position: 'absolute',
//             left: 0,
//             top: 0,
//             bottom: 0,
//             zIndex: 1000,
//           }}
//           onMouseDown={handleMouseDown}
//         />
//       </Drawer>
//       {open && <CustomBackdrop open={open} onClick={handleBackdropClick} />}
//     </>
//   );
// };

// export { ConfigurationDrawer1 };


import React, { Fragment, useState } from 'react';

import { Box, Tab, Tabs, Drawer, IconButton, Backdrop as MuiBackdrop } from '@mui/material';

import { Iconify } from 'src/components/iconify';

import ActionSetup from '../action-setup/action-setup';
import ConnectionSetup from '../connection-setup/connection-setup';

const CustomBackdrop = (props) => (
  <MuiBackdrop {...props} sx={{ backgroundColor: 'transparent' }} />
);

const ConfigurationDrawer1 = ({ open, onClose }) => {
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
      if (newWidth > 590 && newWidth < 900) { // Adjusted min and max width
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
      form: <ActionSetup onEnableConnectionTab={enableConnectionTab} />,
    },
    {
      value: 'two',
      icon: <Iconify icon="icon-park-solid:circular-connection" width={24} />,
      label: 'Connections',
      form: <ConnectionSetup />,
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

export { ConfigurationDrawer1 };

// import React, { Fragment, useState, useEffect, useCallback  } from 'react';

// import { Box, Tab, Tabs, Drawer, IconButton, Backdrop as MuiBackdrop } from '@mui/material';

// import { Iconify } from 'src/components/iconify';

// import ActionSetup from '../action-setup/action-setup';
// import ConnectionSetup from '../connection-setup/connection-setup';

// const CustomBackdrop = (props) => (
//   <MuiBackdrop {...props} sx={{ backgroundColor: 'transparent' }} />
// );

// const ConfigurationDrawer1 = ({ open, onClose }) => {
//   const [activeTab, setActiveTab] = useState('one');
//   const [isConnectionTabEnabled, setIsConnectionTabEnabled] = useState(false);
//   const [drawerWidth, setDrawerWidth] = useState(590);
//   const [drawerHeight, setDrawerHeight] = useState('1000px');

//   const minHeight = 400; // Minimum height in pixels
//   const [maxHeight, setMaxHeight] = useState(window.innerHeight - 50); // Maximum height (50px less than window height)

//   useEffect(() => {
//     const handleResize = () => {
//       setMaxHeight(window.innerHeight - 50);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleBackdropClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   const enableConnectionTab = () => {
//     setIsConnectionTabEnabled(true);
//     setActiveTab('two');
//   };

//   const handleHorizontalResize = useCallback((e) => {
//     const startX = e.clientX;
//     const startWidth = drawerWidth;

//     const onMouseMove = (f) => {
//       const newWidth = startWidth - (f.clientX - startX);
//       if (newWidth > 590 && newWidth < 900) {
//         setDrawerWidth(newWidth);
//         document.body.style.cursor = 'ew-resize';
//       }
//     };

//     const onMouseUp = () => {
//       document.removeEventListener('mousemove', onMouseMove);
//       document.removeEventListener('mouseup', onMouseUp);
//       document.body.style.cursor = 'default';
//     };

//     document.addEventListener('mousemove', onMouseMove);
//     document.addEventListener('mouseup', onMouseUp);
//   }, [drawerWidth]);

//   const handleVerticalResize = useCallback((e) => {
//     e.preventDefault();
//     const startY = e.clientY;
//     const startHeight = document.querySelector('.MuiDrawer-paper').offsetHeight;

//     const onMouseMove = (f) => {
//       const newHeight = startHeight + (f.clientY - startY);
//       if (newHeight >= minHeight && newHeight <= maxHeight) {
//         setDrawerHeight(`${newHeight}px`);
//         document.body.style.cursor = 'ns-resize';
//       }
//     };

//     const onMouseUp = () => {
//       document.removeEventListener('mousemove', onMouseMove);
//       document.removeEventListener('mouseup', onMouseUp);
//       document.body.style.cursor = 'default';
//     };

//     document.addEventListener('mousemove', onMouseMove);
//     document.addEventListener('mouseup', onMouseUp);
//   }, [maxHeight, minHeight]);

//   const TABS = [
//     {
//       value: 'one',
//       icon: <Iconify icon="hugeicons:setup-01" width={24} />,
//       label: 'Action Setup',
//       form: <ActionSetup onEnableConnectionTab={enableConnectionTab} />,
//     },
//     {
//       value: 'two',
//       icon: <Iconify icon="icon-park-solid:circular-connection" width={24} />,
//       label: 'Connections',
//       form: <ConnectionSetup />,
//     },
//   ];

//   return (
//     <>
//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={onClose}
//         PaperProps={{
//           sx: {
//             p: 2,
//             display: 'flex',
//             flexDirection: 'column',
//             width: {
//               xs: '300px',
//               sm: '400px',
//               md: `${drawerWidth}px`,
//               paddingBottom:'16px'
//             },
//             height: drawerHeight,
//             maxHeight: `${maxHeight}px`,
//             minHeight: `${minHeight}px`,
//           },
//         }}
//         ModalProps={{
//           BackdropComponent: CustomBackdrop,
//         }}
//       >
//         <Box onClick={handleBackdropClick} display="flex" flexDirection="column" height="100%">
//           <Box display="flex" justifyContent="space-between" alignItems="center">
//             <Tabs value={activeTab} onChange={handleTabChange} sx={{ mt: '0px' }}>
//               {TABS.map((tab) => (
//                 <Tab
//                   key={tab.value}
//                   icon={tab.icon}
//                   label={tab.label}
//                   value={tab.value}
//                   // disabled={tab.value === 'two' && !isConnectionTabEnabled}
//                 />
//               ))}
//             </Tabs>
//             <IconButton onClick={onClose} sx={{ mt: '0px' }}>
//               <Iconify icon="mingcute:close-line" />
//             </IconButton>             
//           </Box>
//           <Box flexGrow={1} >
//             {TABS.map((tab) =>
//               tab.value === activeTab ? <Fragment key={tab.value}>{tab.form}</Fragment> : null
//             )}
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             width: '10px',
//             cursor: 'ew-resize',
//             position: 'absolute',
//             left: 0,
//             top: 0,
//             bottom: 0,
//             zIndex: 1000,
//           }}
//           onMouseDown={handleHorizontalResize}
//         />
//         <Box
//           sx={{
//             height: '10px',
//             cursor: 'ns-resize',
//             position: 'absolute',
//             left: 0,
//             right: 0,
//             bottom: 0,
//             zIndex: 1000,
//           }}
//           onMouseDown={handleVerticalResize}
//         />
//       </Drawer>
//       {open && <CustomBackdrop open={open} onClick={handleBackdropClick} />}
//     </>
//   );
// };

// export { ConfigurationDrawer1 };