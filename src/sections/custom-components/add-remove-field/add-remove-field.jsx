import React, { useState, useEffect, useCallback } from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';

import {
  Box,
  Chip,
  List,
  Stack,
  Button,
  Avatar,
  Switch,
  Popover,
  Divider,
  Tooltip,
  ListItem,
  TextField,
  Accordion,
  Typography,
  Autocomplete,
  ListItemText,
  InputAdornment,
  FormHelperText,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';

export default function IntegratedInsertDataField() {
  const { control, setValue } = useForm({
    defaultValues: {
      insertDataField: { tags: [], tagInput: '' },
      attributes: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'attributes',
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [popoverPosition, setPopoverPosition] = useState('bottom');
  const [popoverMaxHeight, setPopoverMaxHeight] = useState(300);
  const [showInsertDataField, setShowInsertDataField] = useState(true);

  const adjustPopoverPosition = useCallback(() => {
    if (!anchorEl) return;
    const viewportHeight = window.innerHeight;
    const rect = anchorEl.getBoundingClientRect();
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;
    if (spaceBelow > spaceAbove) {
      setPopoverMaxHeight(Math.min(spaceBelow - 20, 400));
      setPopoverPosition('bottom');
    } else {
      setPopoverMaxHeight(Math.min(spaceAbove - 20, 400));
      setPopoverPosition('top');
    }
  }, [anchorEl]);

  useEffect(() => {
    if (anchorEl) {
      document.body.style.overflow = 'hidden';
      adjustPopoverPosition();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [anchorEl, adjustPopoverPosition]);

  const handleAddTag = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleSelectAccordionContent = (content) => {
    const currentTags = control._formValues.insertDataField.tags;
    setValue('insertDataField.tags', [...currentTags, content]);
    handleClosePopover();
  };

  const handleAddAttribute = () => {
    append({ attributeName: '', attributeDescription: '' });
  };

  const handleRemoveAttribute = (index) => {
    remove(index);
  };

  const handleRemoveInsertDataField = () => {
    setShowInsertDataField(false);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  return (
    <Box>
      {showInsertDataField && (
        <Box sx={{ position: 'relative' }}>
          <Box display="flex" justifyContent="space-between" mr="6px" alignItems="center">
            <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
              Email Address (Required)
            </Typography>

            <FormControlLabel
              control={<Switch name="small" size="small" />}
              label={
                <Box display="flex" alignItems="center">
                  {/* Replace with desired icon */}
                  <Typography variant="body2" ml={0.5}>
                    Map
                  </Typography>
                </Box>
              }
              labelPlacement="start"
            />
          </Box>

          {/* Box wrapping Autocomplete and Button */}
          <Box
            sx={{
              position: 'relative',
              '&:hover .hover-button': {
                opacity: 1, // Show the button when the Box is hovered
              },
            }}
          >
            <Controller
              name="insertDataField.tags"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  multiple
                  freeSolo
                  options={[]}
                  value={field.value}
                  onChange={(_, newValue) => field.onChange(newValue)}
                  renderTags={(value, getTagProps) =>
                    value.map((option, i) => (
                      <Tooltip key={i} title={option} arrow placement="top">
                        <Chip
                          variant="soft"
                          color="info"
                          size="small"
                          label={option}
                          style={{ minWidth: 'auto', width: 'auto' }}
                          {...getTagProps({ index: i })}
                        />
                      </Tooltip>
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      size="large"
                      placeholder="+ Enter text or map data."
                      onClick={handleAddTag}
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: <InputAdornment position="Start" />,
                      }}
                      sx={{
                        '& .MuiAutocomplete-inputRoot': {
                          minHeight: 'auto',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'start',
                        },
                      }}
                    />
                  )}
                />
              )}
            />

            <Iconify
              className="hover-button"
              onClick={handleRemoveInsertDataField}
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'grey.600',
                opacity: 0,
                transition: 'opacity 0.2s',
              }}
              width={24}
              icon="solar:trash-bin-trash-bold"
            />
          </Box>

          <FormHelperText sx={{ ml: '13px' }}>Enter the email address.</FormHelperText>
        </Box>
      )}

      <Stack mt={2} spacing={3}>
        {fields.map((item, index) => (
          <Stack key={item.id} direction="row" spacing={2} alignItems="center">
            <Controller
              name={`attributes.${index}.attributeName`}
              control={control}
              render={({ field }) => (
                <Box width="100%">
                  <Typography fontSize={14} ml="13px">
                    Label
                  </Typography>
                  <TextField {...field} placeholder="Attribute name" fullWidth />
                </Box>
              )}
            />
            <Controller
              name={`attributes.${index}.attributeDescription`}
              control={control}
              render={({ field }) => (
                <Box width="100%">
                  <Typography fontSize={14} ml="13px">
                    Value
                  </Typography>
                  <TextField {...field} placeholder="Attribute description" fullWidth />
                </Box>
              )}
            />
            <Button
              size="small"
              sx={{ color: 'grey.600', mt: '18px' }}
              onClick={() => handleRemoveAttribute(index)}
            >
              <Iconify width={24} icon="solar:trash-bin-trash-bold" />
            </Button>
          </Stack>
        ))}
      </Stack>

      <Button
        sx={{ mt: 2, mb: 2 }}
        onClick={handleAddAttribute}
        startIcon={<Iconify icon="tabler:plus" />}
      >
        Add Attribute
      </Button>

      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: popoverPosition,
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: popoverPosition === 'bottom' ? 'top' : 'bottom',
          horizontal: 'left',
        }}
        sx={{
          '& .MuiPopover-paper': {
            width: anchorEl ? anchorEl.clientWidth : 'auto',
            maxHeight: popoverMaxHeight,
            overflowY: 'auto',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Insert Data from Previous Step
          </Typography>
          <TextField
            fullWidth
            size="small"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search & Map Data..."
            variant="outlined"
          />
          <Accordion sx={{ mt: '10px' }}>
            <AccordionSummary
              expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar
                  variant="circle"
                  src="https://d23j5fl26hha5c.cloudfront.net/images/1590489835035_1590663162-google-sheets-64.png"
                  sx={{
                    p: 1,
                    width: 36,
                    height: 36,
                    bgcolor: 'background.neutral',
                    border: '1px solid #D4E2FF',
                  }}
                />
                <Typography fontWeight={700}>
                  1. Webhook by Pabbly: Catch Webhook (Preferred)
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <Divider />
                <ListItem
                  button
                  onClick={() =>
                    handleSelectAccordionContent(
                      '1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455'
                    )
                  }
                >
                  <ListItemText primary="1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455" />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
                  <ListItemText primary="Option 2" />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
                  <ListItemText primary="Option 3" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Popover>
    </Box>
  );
}
