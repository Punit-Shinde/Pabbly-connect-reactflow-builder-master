import React, { useRef, useState, useEffect } from 'react';

import { Box } from '@mui/system';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

import ConnectionName from '../connection-name/connection-name';
import AddNewConnection from './add-new-connection/add-new-connection';
import SelectExistingConnection from './existing-connection/select-existing-connection';

export default function ConnectionSetup() {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('Connection Name');
  const textFieldRef = useRef(null);
  const [textFieldWidth, setTextFieldWidth] = useState(130);

  useEffect(() => {
    if (isEditing) {
      textFieldRef.current.focus();
    }
  }, [isEditing]);

  const truncateText = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return `${str.slice(0, num)}...`;
  };

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);

    const visibleText = truncateText(newText, 50);
    const newWidth = Math.min(30 + visibleText.length * 8, 550);
    setTextFieldWidth(newWidth);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const [messageType, setMessageType] = useState('g');

  const handleRadioChange = (event) => {
    setMessageType(event.target.value);
  };

  return (
    <Box mt="24px">
      <ConnectionName />
      <Box sx={{ padding: '24px 1px 0px 2px' }}>
        <RadioGroup row value={messageType} onChange={handleRadioChange}>
          <FormControlLabel value="g" control={<Radio size="small" />} label="Add New Connection" />
          <FormControlLabel
            value="p"
            control={<Radio size="small" />}
            label="Select Existing Connection"
          />
        </RadioGroup>
        {messageType === 'g' && (
          <form>
            <AddNewConnection />
          </form>
        )}

        {messageType === 'p' && (
          <form>
            <SelectExistingConnection />
          </form>
        )}
      </Box>
    </Box>
  );
}
