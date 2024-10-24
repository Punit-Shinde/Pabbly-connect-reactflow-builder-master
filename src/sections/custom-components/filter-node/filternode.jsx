import React, { useRef, useState, useEffect } from 'react';

import {
  Box,
  Alert,
  Button,
  Avatar,
  Tooltip,
  Divider,
  Snackbar,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

import { Rename } from 'src/sections/dialogs/rename';
import { AddNoteDialog } from 'src/sections/dialogs/add-note-dialog';
import { CopyStepDialog } from 'src/sections/dialogs/copy-step-dialog';
import { CloneStepDialog } from 'src/sections/dialogs/clone-step-dialog';
import { PasteStepDialog } from 'src/sections/dialogs/paste-step-dialog';
import { DeleteStepDialog } from 'src/sections/dialogs/delete-step-dialog';
import { IgnoreErrorDialog } from 'src/sections/dialogs/ignore-error-dialog';
import { SetTriggerTimeDialog } from 'src/sections/dialogs/set-trigger-time-dialog';

import RouteCondition from '../route-filter-condition-drawer/routefilterconditiondrawer';





// ----------------------------------------------------------------------

export default function FilterNode(sx, ...other) {
  const confirmDelete = useBoolean(); // Rename for clarity
  const popover = usePopover();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef(null);
  const [drawerWidth, setDrawerWidth] = useState(590);

  const appName = 'Filter (Pabbly)';
  const stepName = 'Only Continue If...';

  useEffect(() => {
    if (textRef.current) {
      setIsTruncated(textRef.current.scrollWidth > textRef.current.clientWidth);
    }
  }, [stepName]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };


  // Dialog States
  const renameDialog = useBoolean();
  const addNoteDialog = useBoolean();
  const copyStepDialog = useBoolean();
  const cloneStepDialog = useBoolean();
  const pasteStepDialog = useBoolean();
  const deleteStepDialog = useBoolean();
  const setTriggerTimeDialog = useBoolean();
  const ignoreErrorDialog = useBoolean();

  // Handlers for Dialogs
  const handleRenameClick = () => renameDialog.onTrue();
  const handleAddNoteClick = () => addNoteDialog.onTrue();
  const handleDeleteStepClick = () => deleteStepDialog.onTrue();
  const handleIgnoreErrorClick = () => ignoreErrorDialog.onTrue();
  const handleSetTriggerTimeClick = () => setTriggerTimeDialog.onTrue();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleCopyStepClick = () => {
    setSnackbarMessage('Step copied successfully.');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handleCloneStepClick = () => {
    setSnackbarMessage('Step cloned successfully.');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };

  const handlePasteStepClick = () => {
    setSnackbarMessage('Save this step to paste copied step below it.');
    setSnackbarSeverity('error');
    setSnackbarOpen(true);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Box
        sx={{
          boxShadow: '0px 12px 124px -4px rgba(132, 136, 151, 0.24)',
          width: '350px',
          p: 3,
          gap: '16px',
          borderRadius: 2,
          border: '2px solid #D4E2FF',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          alignItems: 'flex-start',
          color: 'primary.text',
          bgcolor: 'common.white',
          '&:hover': {
            border: '2px solid #078DEE',
          },
          transition: 'all 0.3s ease',
          ...sx,
        }}
        {...other}
      >
        <Tooltip title={appName} arrow placement="top" disableInteractive>
          <Box
            onClick={handleOpenDrawer}
            sx={{
              display: 'flex',
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              variant="rounded"
              src="https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717070968-Filter--Pabbly-.png"
              sx={{
                p: 1,
                width: 48,
                height: 48,
                bgcolor: 'background.neutral',
                border: '1px solid #D4E2FF',
              }}
            />
            <Iconify
              icon="jam:alert-f"
              sx={{
                position: 'absolute',
                top: -8,
                left: -8,
                color: 'error.main',
                bgcolor: 'common.white',
                borderRadius: '50%',
                fontSize: 24,
              }}
            />
          </Box>
        </Tooltip>

        <Box width="100%" display="flex" flexDirection="column" gap="6px">
          <Box display="flex" alignItems="start" justifyContent="space-between">
            <Tooltip title={appName} arrow placement="top" disableInteractive>
              <Typography
                onClick={handleOpenDrawer}
                fontSize={14}
                fontWeight={600}
                sx={{
                  maxWidth: '200px',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  wordBreak: 'break-word',
                }}
              >
                {appName}
              </Typography>
            </Tooltip>
            <Box gap={1} display="flex" alignItems="center">
              <Tooltip title="Note" arrow placement="top" disableInteractive>
                <Iconify icon="gg:notes" sx={{ color: 'grey.600' }} />
              </Tooltip>
              <Tooltip title="Click to see options" arrow placement="top" disableInteractive>
                <Iconify
                  color={popover.open ? 'inherit' : 'default'}
                  onClick={popover.onOpen}
                  icon="charm:menu-kebab"
                  sx={{
                    cursor: 'pointer',
                    color: popover.open ? 'inherit' : 'grey.600',
                    '&:hover': {
                      color: '#1C252E',
                    },
                  }}
                />
              </Tooltip>

              <CustomPopover
                open={popover.open}
                anchorEl={popover.anchorEl}
                onClose={popover.onClose}
                slotProps={{ arrow: { placement: 'left-top' } }}
              >
                <MenuList>
                  <MenuItem onClick={handleAddNoteClick}>
                    <Iconify icon="gg:notes" />
                    Add Note
                  </MenuItem>
                  <MenuItem onClick={handleRenameClick}>
                    <Iconify icon="solar:pen-bold" />
                    Rename
                  </MenuItem>
                  <MenuItem onClick={handleCopyStepClick}>
                    <Iconify icon="solar:copy-bold" />
                    Copy Step
                  </MenuItem>
                  <MenuItem onClick={handleCloneStepClick}>
                    <Iconify sx={{ height: '16.67px' }} icon="fa6-solid:clone" />
                    Clone Step
                  </MenuItem>
                  <MenuItem onClick={handlePasteStepClick}>
                    <Iconify sx={{ height: '16.67px' }} icon="fa6-solid:paste" />
                    Paste Step
                  </MenuItem>
                  <MenuItem onClick={handleSetTriggerTimeClick}>
                    <Iconify sx={{ height: '16.67px' }} icon="icon-park-solid:time" />
                    Set Trigger Time
                  </MenuItem>
                  <MenuItem onClick={handleIgnoreErrorClick}>
                    <Iconify icon="ic:outline-error" />
                    Ignore Error (Enable)
                  </MenuItem>
                  <Divider style={{ borderStyle: 'dashed' }} />
                  <MenuItem onClick={handleDeleteStepClick} sx={{ color: 'error.main' }}>
                    <Iconify icon="solar:trash-bin-trash-bold" />
                    Delete
                  </MenuItem>
                </MenuList>
                <AddNoteDialog open={addNoteDialog.value} onClose={addNoteDialog.onFalse} />
                <Rename open={renameDialog.value} onClose={renameDialog.onFalse} />
                <CopyStepDialog
                  open={copyStepDialog.value}
                  onClose={copyStepDialog.onFalse}
                  title="Successful"
                  content="Step copied Successfully."
                  action={
                    <Button variant="contained" color="primary">
                      OK
                    </Button>
                  }
                />
                <CloneStepDialog
                  open={cloneStepDialog.value}
                  onClose={cloneStepDialog.onFalse}
                  title="Successful"
                  content="Step cloned Successfully."
                  action={
                    <Button variant="contained" color="primary">
                      OK
                    </Button>
                  }
                />
                <PasteStepDialog
                  open={pasteStepDialog.value}
                  onClose={pasteStepDialog.onFalse}
                  title="Error"
                  content="You have not copied any step. Please copy a step and then paste it."
                  action={
                    <Button variant="contained" color="primary">
                      OK
                    </Button>
                  }
                />
                <DeleteStepDialog
                  open={deleteStepDialog.value}
                  onClose={deleteStepDialog.onFalse}
                  title="Delete"
                  content="Are you sure want to remove this contact?"
                  action={
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  }
                />
                <SetTriggerTimeDialog
                  open={setTriggerTimeDialog.value}
                  onClose={setTriggerTimeDialog.onFalse}
                />
                <IgnoreErrorDialog
                  open={ignoreErrorDialog.value}
                  onClose={ignoreErrorDialog.onFalse}
                  title="Do you wish to enable ignoring error for this step?"
                  content="Enabling it means the step will continue to execute even if there is an error."
                  action={
                    <Button variant="contained" color="primary">
                      Yes, Enable it!
                    </Button>
                  }
                />
              </CustomPopover>
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                sx={{
                  '& .MuiPaper-root': {
                    boxShadow: '0px 8px 16px 0px rgba(145, 158, 171, 0.16)',
                  },
                }}
              >
                <Alert
                  onClose={handleSnackbarClose}
                  severity={snackbarSeverity}
                  sx={{
                    width: '100%',
                    fontSize: '14px',
                    fontWeight: '500',
                    backgroundColor: '#ffffff',
                    color: '#212B36',
                  }}
                >
                  {snackbarMessage}
                </Alert>
              </Snackbar>
            </Box>
          </Box>
          <Box display="flex" alignItems="end" justifyContent="space-between">
            <Tooltip title={stepName} arrow placement="top" disableInteractive>
              <Typography
                onClick={handleOpenDrawer}
                ref={textRef}
                fontSize={14}
                fontWeight={600}
                sx={{
                  maxWidth: '200px',
                  whiteSpace: isExpanded ? 'normal' : 'nowrap',
                  overflow: isExpanded ? 'visible' : 'hidden',
                  textOverflow: isExpanded ? 'clip' : 'ellipsis',
                }}
              >
                {stepName}
              </Typography>
            </Tooltip>
            {isTruncated && (
              <Tooltip title="Click to see full step name" arrow placement="top" disableInteractive>
                <Iconify
                  icon={isExpanded ? 'mingcute:up-fill' : 'mingcute:down-fill'}
                  sx={{
                    color: 'grey.600',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                  onClick={toggleExpand}
                />
              </Tooltip>
            )}
          </Box>
        </Box>
      </Box>

      <RouteCondition open={openDrawer} onClose={handleCloseDrawer} />
    </Box>
  );
}
