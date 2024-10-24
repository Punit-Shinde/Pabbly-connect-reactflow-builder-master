import React, { useRef, useState } from 'react';

import { Box, Avatar, Tooltip, MenuItem, MenuList, Typography, IconButton } from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

import FilterNode from '../filter-node/filternode';
import InitialActionNode from '../initial-action-node/initial-action-node';
import ChooseAppFilterNode from '../choose-app-filter-node/chooseappfilternode';
import AddStepButtonAndEdge from '../add-step-button-and-edge/add-step-button-and-edge';

export default function RouterNode({ sx, ...other }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const steppopover = usePopover();
  const routepopover = usePopover();
  const textRef = useRef(null);

  const appName = 'Router';
  const stepName = '3. Split into Routes';
  const [isOpen, setIsOpen] = useState(false);
  const [isRouterOpen, setIsRouterOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleRouterToggle = () => {
    setIsRouterOpen((prev) => !prev);
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
            sx={{
              display: 'flex',
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              variant="rounded"
              src="https://s3.us-west-2.amazonaws.com/connect.pabbly/images/1717503844-Router--Pabbly-.png"
              sx={{
                p: 1,
                width: 48,
                height: 48,
                bgcolor: 'background.neutral',
                border: '1px solid #D4E2FF',
              }}
            />
          </Box>
        </Tooltip>

        <Box width="100%" display="flex" flexDirection="column" gap="6px">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Tooltip title={appName} arrow placement="top" disableInteractive>
              <Typography
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
              <Tooltip title="Click to see options" arrow placement="top" disableInteractive>
                <Iconify
                  color={steppopover.open ? 'inherit' : 'default'}
                  onClick={steppopover.onOpen}
                  icon="charm:menu-kebab"
                  sx={{
                    cursor: 'pointer',
                    color: steppopover.open ? 'inherit' : 'grey.600',
                    '&:hover': {
                      color: '#1C252E',
                    },
                  }}
                />
              </Tooltip>

              <CustomPopover
                open={steppopover.open}
                anchorEl={steppopover.anchorEl}
                onClose={steppopover.onClose}
                slotProps={{ arrow: { placement: 'left-top' } }}
              >
                <MenuList>
                  <MenuItem>
                    <Iconify icon="gg:notes" />
                    Add Note
                  </MenuItem>
                  <MenuItem>
                    <Iconify icon="solar:pen-bold" />
                    Rename
                  </MenuItem>
                  <MenuItem>
                    <Iconify icon="solar:copy-bold" />
                    Copy Step
                  </MenuItem>
                  <MenuItem>
                    <Iconify sx={{ height: '16.67px' }} icon="fa6-solid:clone" />
                    Clone Step
                  </MenuItem>
                  <MenuItem>
                    <Iconify sx={{ height: '16.67px' }} icon="fa6-solid:paste" />
                    Paste Step
                  </MenuItem>
                  <MenuItem>
                    <Iconify icon="solar:trash-bin-trash-bold" />
                    Delete
                  </MenuItem>
                  <MenuItem>
                    <Iconify sx={{ height: '16.67px' }} icon="icon-park-solid:time" />
                    Set Trigger Time
                  </MenuItem>
                  <MenuItem>
                    <Iconify icon="ic:outline-error" />
                    Ignore Error (Enable)
                  </MenuItem>
                </MenuList>
              </CustomPopover>
            </Box>
          </Box>
          <Box display="flex" alignItems="end" justifyContent="space-between">
            <Tooltip title={stepName} arrow placement="top" disableInteractive>
              <Typography
                ref={textRef}
                fontSize={14}
                fontWeight={600}
                sx={{
                  maxWidth: '350px',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  wordBreak: 'break-word',
                }}
              >
                {stepName}
              </Typography>
            </Tooltip>

            <Tooltip title="Click to toggle visibility" arrow placement="top" disableInteractive>
              <Iconify
                className="router"
                icon={isRouterOpen ? 'mingcute:up-fill' : 'mingcute:down-fill'}
                onClick={handleRouterToggle}
                sx={{
                  color: 'grey.600',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  transform: isRouterOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                }}
              />
            </Tooltip>
          </Box>
        </Box>
      </Box>

      {isRouterOpen && (
        <>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Iconify icon="vaadin:line-v" sx={{ color: '#84889780' }} />
            <Tooltip title="Add Route" arrow placement="right">
              <IconButton
                size="small"
                color="primary"
                sx={{
                  boxShadow: '0px 8px 16px 0px rgba(132, 136, 151, 0.24)',
                  backgroundColor: 'common.white',
                  '&:hover': {
                    color: 'common.white',
                    backgroundColor: '#078DEE',
                  },
                }}
              >
                <Iconify icon="ph:plus-bold" />
              </IconButton>
            </Tooltip>
            <Iconify icon="vaadin:line-v" sx={{ color: '#84889780' }} />
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: '5px',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '40px',
              padding: '0 12px',
              border: '2px solid',
              borderColor: 'primary.main',
              borderRadius: '6px',
              color: 'primary.main',
              cursor: 'pointer',
            }}
          >
            <Typography fontSize="14px" fontWeight="700">
              Route 1
            </Typography>
            <Iconify
              onClick={handleToggle}
              icon={isOpen ? 'mingcute:up-fill' : 'mingcute:down-fill'}
            />
            <Iconify
              color={routepopover.open ? 'inherit' : 'default'}
              onClick={routepopover.onOpen}
              icon="charm:menu-kebab"
              sx={{
                width: '15px',
                cursor: 'pointer',
                '&:hover': {
                  color: '#0351AB',
                },
              }}
            />

            <CustomPopover
              open={routepopover.open}
              anchorEl={routepopover.anchorEl}
              onClose={routepopover.onClose}
              slotProps={{ arrow: { placement: 'left-top' } }}
            >
              <MenuList>
                <MenuItem>
                  <Iconify icon="solar:pen-bold" />
                  Rename
                </MenuItem>
                <MenuItem>
                  <Iconify sx={{ height: '16.67px' }} icon="fa6-solid:clone" />
                  Clone Step
                </MenuItem>
                <MenuItem>
                  <Iconify icon="solar:trash-bin-trash-bold" />
                  Delete
                </MenuItem>
              </MenuList>
            </CustomPopover>
          </Box>

          <Box
            className="route1"
            sx={{
              display: isOpen ? 'flex' : 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Iconify icon="vaadin:line-v" sx={{ color: '#84889780' }} />
            <Iconify icon="bxs:down-arrow" sx={{ mt: '-4px', color: '#84889780' }} />
            <FilterNode />
            <AddStepButtonAndEdge />
            <InitialActionNode />
            <AddStepButtonAndEdge />
            <ChooseAppFilterNode />
          </Box>
        </>
      )}
    </Box>
  );
}
