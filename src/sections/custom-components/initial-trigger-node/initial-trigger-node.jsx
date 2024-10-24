import React, { useRef, useState, useEffect } from 'react';

import { Box, Avatar, Tooltip, MenuItem, MenuList, Typography } from '@mui/material';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

import Image2 from './initial-shape.png'

// ----------------------------------------------------------------------

export default function InitialTriggerNode(sx, ...other) {
  const popover = usePopover();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef(null);

  const appName = 'Trigger : When this happens';
  const stepName =
    '1. Choose First Application';

  useEffect(() => {
    if (textRef.current) {
      setIsTruncated(textRef.current.scrollWidth > textRef.current.clientWidth);
    }
  }, [stepName]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
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
              src={Image2}
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
          <Box display="flex" alignItems="start" justifyContent="space-between">
            <Tooltip title={appName} arrow placement="top" disableInteractive>
              <Typography
                fontSize={14}
                fontWeight={600}
                sx={{
                  maxWidth: '200px',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1, // Limit to 2 lines
                  overflow: 'hidden', // Hide overflow
                  textOverflow: 'ellipsis', // Ellipsis for overflow
                  wordBreak: 'break-word', // Allow word breaking
                }}
              >
                {appName}
              </Typography>
            </Tooltip>
            <Box gap={1} display="flex" alignItems="center">
              <Tooltip title="Free task" arrow placement="top" disableInteractive>
                <Label color="success" variant="soft" sx={{ height: '18px', borderRadius: '4px' }}>
                  Free
                </Label>
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
                  <MenuItem>
                    <Iconify icon="gg:notes" />
                    Add Note
                  </MenuItem>
                  <MenuItem>
                    <Iconify icon="solar:pen-bold" />
                    Rename
                  </MenuItem>
                  <MenuItem>
                    <Iconify icon="fa6-solid:paste" sx={{height:'16.67px'}} />
                    Paste Step
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
    </Box>
  );
}
