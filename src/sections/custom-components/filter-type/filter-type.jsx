import React from 'react';

import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

const options = [
  { title: 'Equal to' },
  { title: 'Not equal to' },
  { title: 'Contains' },
  { title: 'Exists' },
  { title: 'Does not exists' },
  { title: 'is empty' },
  { title: 'is not empty' },
];

function FilterType() {
  return (
    <div style={{ width :'100%' }}>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params}  variant="outlined" />
        )}
        onChange={(event, value) => {
          console.log(value); // Handle the selected value
        }}
      />
    </div>
  );
}

export default FilterType;




// import React, { useState, useEffect, useCallback } from 'react';

// import {
//   Box,
//   Chip,
//   List,
//   Avatar,
//   Switch,
//   Popover,
//   Divider,
//   Tooltip,
//   ListItem,
//   TextField,
//   Accordion,
//   Typography,
//   Autocomplete,
//   ListItemText,
//   InputAdornment,
//   FormHelperText,
//   AccordionSummary,
//   AccordionDetails,
//   FormControlLabel,
// } from '@mui/material';

// import { Iconify } from 'src/components/iconify';

// export default function FilterType() {
//   const [tags, setTags] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [searchInput, setSearchInput] = useState('');
//   const [popoverPosition, setPopoverPosition] = useState('bottom');
//   const [popoverMaxHeight, setPopoverMaxHeight] = useState(300);

//   const adjustPopoverPosition = useCallback(() => {
//     if (!anchorEl) return;

//     const viewportHeight = window.innerHeight;
//     const rect = anchorEl.getBoundingClientRect();

//     const spaceBelow = viewportHeight - rect.bottom;
//     const spaceAbove = rect.top;

//     if (spaceBelow > spaceAbove) {
//       setPopoverMaxHeight(Math.min(spaceBelow - 20, 400));
//       setPopoverPosition('bottom');
//     } else {
//       setPopoverMaxHeight(Math.min(spaceAbove - 20, 400));
//       setPopoverPosition('top');
//     }
//   }, [anchorEl]);

//   useEffect(() => {
//     if (anchorEl) {
//       document.body.style.overflow = 'hidden';
//       adjustPopoverPosition();
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [anchorEl, adjustPopoverPosition]);

//   const handleAddTag = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClosePopover = () => {
//     setAnchorEl(null);
//   };

//   const handleSelectAccordionContent = (content) => {
//     setTags((prevTags) => {
//       const customTags = prevTags.filter((tag) => tag.type === 'custom');
//       const newTags = prevTags.filter((tag) => tag.type !== 'custom');
//       newTags.push({ type: 'tag', value: content });
//       return [...newTags, ...customTags];
//     });
//     handleClosePopover();
//   };

//   const handleInputChange = (event, newInputValue) => {
//     setInputValue(newInputValue);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter' && inputValue.trim()) {
//       setTags((prevTags) => [...prevTags, { type: 'custom', value: inputValue.trim() }]);
//       setInputValue('');
//       event.preventDefault();
//     }
//   };

//   const open = Boolean(anchorEl);
//   const popoverId = open ? 'simple-popover' : undefined;

//   return (
//     <Box  width='100%'>
//       {/* <Box display="flex" justifyContent="space-between" mr="6px" alignItems="center">
//         <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
//           FilterType
//         </Typography>
//       </Box> */}
//       <Autocomplete
//         multiple
//         freeSolo
//         options={[]}
//         value={tags}
//         inputValue={inputValue}
//         onInputChange={handleInputChange}
//         onChange={(event, newValue) => {
//           const customTags = newValue.filter((tag) => tag.type === 'custom');
//           const otherTags = newValue.filter((tag) => tag.type !== 'custom');
//           setTags([...otherTags, ...customTags]);
//         }}
//         onKeyDown={handleKeyDown}
//         renderTags={(value, getTagProps) =>
//           value.map((option, index) => (
//             <Tooltip key={index} title={option.value} arrow placement="top">
//               <Chip
//                 variant="soft"
//                 color={option.type === 'custom' ? 'default' : 'info'}
//                 size="small"
//                 label={option.value}
//                 style={{ minWidth: 'auto', width: 'auto' }}
//                 {...getTagProps({ index })}
//               />
//             </Tooltip>
//           ))
//         }
//         renderInput={(params) => (
//           <TextField
//             onClick={handleAddTag}
//             {...params}
//             variant="outlined"
//             size="large"
//             placeholder="+ Enter text or map data."
//             InputProps={{
//               ...params.InputProps,
//               endAdornment: <InputAdornment position="Start" />,
//             }}
//             sx={{
//               '& .MuiAutocomplete-inputRoot': {
//                 minHeight: 'auto',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'start',
//               },
//             }}
//           />
//         )}
//       />
//       <Popover
//         id={popoverId}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClosePopover}
//         anchorOrigin={{
//           vertical: popoverPosition,
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: popoverPosition === 'bottom' ? 'top' : 'bottom',
//           horizontal: 'left',
//         }}
//         sx={{
//           '& .MuiPopover-paper': {
//             width: anchorEl ? anchorEl.clientWidth : 'auto',
//             maxHeight: popoverMaxHeight,
//             overflowY: 'auto',
//           },
//         }}
//       >
//         <Box sx={{ p: 2 }}>
//           <Typography variant="subtitle1" sx={{ mb: 1 }}>
//             Insert Data from Previous Step
//           </Typography>
//           <TextField
//             fullWidth
//             size="small"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             placeholder="Search & Map Data..."
//             variant="outlined"
//           />
//           <Accordion sx={{ mt: '10px' }}>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1590489835035_1590663162-google-sheets-64.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   1. Webhook by Pabbly: Catch Webhook (Preferred)
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 1')}>
//                   <ListItemText primary="Option 1" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1642563579878_1663756758-OpenAI.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   2. OpenAI (ChatGPT, DALL-E, Whisper): ChatGPT
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 1')}>
//                   <ListItemText primary="Option 1" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </Box>
//       </Popover>
//       {/* <FormHelperText sx={{ ml: '13px' }}>Enter the email address.</FormHelperText> */}
//     </Box>
//   );
// }

// import React, { useState, useEffect, useCallback } from 'react';

// import {
//   Box,
//   Chip,
//   List,
//   Avatar,
//   Switch,
//   Popover,
//   Divider,
//   Tooltip,
//   ListItem,
//   TextField,
//   Accordion,
//   Typography,
//   ListItemText,
//   InputAdornment,
//   FormHelperText,
//   AccordionSummary,
//   AccordionDetails,
//   FormControlLabel,
// } from '@mui/material';

// import { Iconify } from 'src/components/iconify';

// export default function InsertDataField() {
//   const [tags, setTags] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [searchInput, setSearchInput] = useState('');
//   const [popoverPosition, setPopoverPosition] = useState('bottom');
//   const [popoverMaxHeight, setPopoverMaxHeight] = useState(300);

//   const adjustPopoverPosition = useCallback(() => {
//     if (!anchorEl) return;

//     const viewportHeight = window.innerHeight;
//     const rect = anchorEl.getBoundingClientRect();

//     const spaceBelow = viewportHeight - rect.bottom;
//     const spaceAbove = rect.top;

//     if (spaceBelow > spaceAbove) {
//       setPopoverMaxHeight(Math.min(spaceBelow - 20, 400));
//       setPopoverPosition('bottom');
//     } else {
//       setPopoverMaxHeight(Math.min(spaceAbove - 20, 400));
//       setPopoverPosition('top');
//     }
//   }, [anchorEl]);

//   useEffect(() => {
//     if (anchorEl) {
//       document.body.style.overflow = 'hidden';
//       adjustPopoverPosition();
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [anchorEl, adjustPopoverPosition]);

//   const handleAddTag = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClosePopover = () => {
//     setAnchorEl(null);
//   };

//   const handleSelectAccordionContent = (content) => {
//     setTags(prevTags => {
//       const customTags = prevTags.filter(tag => tag.type === 'custom');
//       const newTags = prevTags.filter(tag => tag.type !== 'custom');
//       newTags.push({ type: 'tag', value: content });
//       return [...newTags, ...customTags];
//     });
//     handleClosePopover();
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter' && inputValue.trim()) {
//       setTags(prevTags => [...prevTags, { type: 'custom', value: inputValue.trim() }]);
//       setInputValue('');
//       event.preventDefault();
//     }
//   };

//   const handleDeleteTag = (indexToDelete) => {
//     setTags(prevTags => prevTags.filter((_, index) => index !== indexToDelete));
//   };

//   const open = Boolean(anchorEl);
//   const popoverId = open ? 'simple-popover' : undefined;

//   return (
//     <Box sx={{ mt: 4 }}>
//       <Box display="flex" justifyContent="space-between" mr="6px" alignItems="center">
//         <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
//           Email Address (Required)
//         </Typography>
//         <FormControlLabel
//           control={<Switch name="small" size="small" />}
//           label="Map"
//           labelPlacement="start"
//         />
//       </Box>
//       <Box
//         sx={{
//           border: '1px solid rgba(0, 0, 0, 0.23)',
//           borderRadius: '4px',
//           padding: '4px',
//           minHeight: '56px',
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '4px',
//           alignItems: 'center',
//           '&:hover': {
//             borderColor: 'rgba(0, 0, 0, 0.87)',
//           },
//         }}
//         onClick={handleAddTag}
//       >
//         {tags.map((tag, index) => (
//           <Tooltip key={index} title={tag.value} arrow placement="top">
//             <Chip
//               variant="soft"
//               color={tag.type === 'custom' ? 'default' : 'info'}
//               size="small"
//               label={tag.value}
//               onDelete={() => handleDeleteTag(index)}
//               style={{ minWidth: 'auto', width: 'auto' }}
//             />
//           </Tooltip>
//         ))}
//         <TextField
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyDown={handleKeyDown}
//           placeholder={tags.length === 0 ? "+ Enter text or map data." : ""}
//           variant="standard"
//           InputProps={{
//             disableUnderline: true,
//             endAdornment: <InputAdornment position="Start" />,
//           }}
//           sx={{
//             flex: 1,
//             '& input': {
//               padding: '4px',
//               fontSize: '1rem',
//             },
//           }}
//         />
//       </Box>
//       <Popover
//         id={popoverId}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClosePopover}
//         anchorOrigin={{
//           vertical: popoverPosition,
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: popoverPosition === 'bottom' ? 'top' : 'bottom',
//           horizontal: 'left',
//         }}
//         sx={{
//           '& .MuiPopover-paper': {
//             width: anchorEl ? anchorEl.clientWidth : 'auto',
//             maxHeight: popoverMaxHeight,
//             overflowY: 'auto',
//           },
//         }}
//       >
//         <Box sx={{ p: 2 }}>
//           <Typography variant="subtitle1" sx={{ mb: 1 }}>
//             Insert Data from Previous Step
//           </Typography>
//           <TextField
//             fullWidth
//             size="small"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             placeholder="Search & Map Data..."
//             variant="outlined"
//           />
//           <Accordion sx={{ mt: '10px' }}>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1590489835035_1590663162-google-sheets-64.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   1. Webhook by Pabbly: Catch Webhook (Preferred)
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() =>
//                     handleSelectAccordionContent(
//                       '1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455'
//                     )
//                   }
//                 >
//                   <ListItemText primary="1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1642563579878_1663756758-OpenAI.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   2. OpenAI (ChatGPT, DALL-E, Whisper): ChatGPT
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() =>
//                     handleSelectAccordionContent(
//                       '1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455'
//                     )
//                   }
//                 >
//                   <ListItemText primary="1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </Box>
//       </Popover>
//       <FormHelperText sx={{ ml: '13px' }}>Enter the email address.</FormHelperText>
//     </Box>
//   );
// }

// import React, { useState, useEffect, useCallback } from 'react';

// import {
//   Box,
//   Chip,
//   List,
//   Avatar,
//   Switch,
//   Popover,
//   Divider,
//   Tooltip,
//   ListItem,
//   TextField,
//   Accordion,
//   Typography,
//   ListItemText,
//   InputAdornment,
//   FormHelperText,
//   AccordionSummary,
//   AccordionDetails,
//   FormControlLabel,
// } from '@mui/material';

// import { Iconify } from 'src/components/iconify';

// export default function InsertDataField() {
//   const [tags, setTags] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [searchInput, setSearchInput] = useState('');
//   const [popoverPosition, setPopoverPosition] = useState('bottom');
//   const [popoverMaxHeight, setPopoverMaxHeight] = useState(300);

//   const adjustPopoverPosition = useCallback(() => {
//     if (!anchorEl) return;

//     const viewportHeight = window.innerHeight;
//     const rect = anchorEl.getBoundingClientRect();

//     const spaceBelow = viewportHeight - rect.bottom;
//     const spaceAbove = rect.top;

//     if (spaceBelow > spaceAbove) {
//       setPopoverMaxHeight(Math.min(spaceBelow - 20, 400));
//       setPopoverPosition('bottom');
//     } else {
//       setPopoverMaxHeight(Math.min(spaceAbove - 20, 400));
//       setPopoverPosition('top');
//     }
//   }, [anchorEl]);

//   useEffect(() => {
//     if (anchorEl) {
//       document.body.style.overflow = 'hidden';
//       adjustPopoverPosition();
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [anchorEl, adjustPopoverPosition]);

//   const handleAddTag = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClosePopover = () => {
//     setAnchorEl(null);
//   };

//   const handleSelectAccordionContent = (content) => {
//     setTags(prevTags => {
//       const newTag = { type: 'tag', value: content };
//       // Find the last custom tag's index
//       const lastCustomTagIndex = prevTags.map(tag => tag.type).lastIndexOf('custom');

//       if (lastCustomTagIndex === -1) {
//         // If no custom tags exist, append the new tag at the end
//         return [...prevTags, newTag];
//       } {
//         // Insert the new tag after the last custom tag
//         const result = [...prevTags];
//         result.splice(lastCustomTagIndex + 1, 0, newTag);
//         return result;
//       }
//     });
//     handleClosePopover();
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter' && inputValue.trim()) {
//       setTags(prevTags => [...prevTags, { type: 'custom', value: inputValue.trim() }]);
//       setInputValue('');
//       event.preventDefault();
//     }
//   };

//   const handleDeleteTag = (indexToDelete) => {
//     setTags(prevTags => prevTags.filter((_, index) => index !== indexToDelete));
//   };

//   const open = Boolean(anchorEl);
//   const popoverId = open ? 'simple-popover' : undefined;

//   return (
//     <Box sx={{ mt: 4 }}>
//       <Box display="flex" justifyContent="space-between" mr="6px" alignItems="center">
//         <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
//           Email Address (Required)
//         </Typography>
//         <FormControlLabel
//           control={<Switch name="small" size="small" />}
//           label="Map"
//           labelPlacement="start"
//         />
//       </Box>
//       <Box
//         sx={{
//           border: '1px solid rgba(0, 0, 0, 0.23)',
//           borderRadius: '4px',
//           padding: '4px',
//           minHeight: '56px',
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '4px',
//           alignItems: 'center',
//           cursor: 'text',
//           '&:hover': {
//             borderColor: 'rgba(0, 0, 0, 0.87)',
//           },
//         }}
//         onClick={handleAddTag}
//       >
//         {tags.map((tag, index) => (
//           <Tooltip key={index} title={tag.value} arrow placement="top">
//             <Chip
//               variant="soft"
//               color={tag.type === 'custom' ? 'default' : 'info'}
//               size="small"
//               label={tag.value}
//               onDelete={() => handleDeleteTag(index)}
//               style={{ minWidth: 'auto', width: 'auto' }}
//             />
//           </Tooltip>
//         ))}
//         <TextField
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyDown={handleKeyDown}
//           placeholder={tags.length === 0 ? "+ Enter text or map data." : ""}
//           variant="standard"
//           InputProps={{
//             disableUnderline: true,
//             endAdornment: <InputAdornment position="Start" />,
//           }}
//           sx={{
//             flex: 1,
//             '& input': {
//               padding: '4px',
//               fontSize: '1rem',
//             },
//           }}
//         />
//       </Box>
//       <Popover
//         id={popoverId}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClosePopover}
//         anchorOrigin={{
//           vertical: popoverPosition,
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: popoverPosition === 'bottom' ? 'top' : 'bottom',
//           horizontal: 'left',
//         }}
//         sx={{
//           '& .MuiPopover-paper': {
//             width: anchorEl ? anchorEl.clientWidth : 'auto',
//             maxHeight: popoverMaxHeight,
//             overflowY: 'auto',
//           },
//         }}
//       >
//         <Box sx={{ p: 2 }}>
//           <Typography variant="subtitle1" sx={{ mb: 1 }}>
//             Insert Data from Previous Step
//           </Typography>
//           <TextField
//             fullWidth
//             size="small"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             placeholder="Search & Map Data..."
//             variant="outlined"
//           />
//           <Accordion sx={{ mt: '10px' }}>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1590489835035_1590663162-google-sheets-64.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   1. Webhook by Pabbly: Catch Webhook (Preferred)
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() =>
//                     handleSelectAccordionContent(
//                       '1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455'
//                     )
//                   }
//                 >
//                   <ListItemText primary="1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1642563579878_1663756758-OpenAI.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   2. OpenAI (ChatGPT, DALL-E, Whisper): ChatGPT
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() =>
//                     handleSelectAccordionContent(
//                       '1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455'
//                     )
//                   }
//                 >
//                   <ListItemText primary="1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </Box>
//       </Popover>
//       <FormHelperText sx={{ ml: '13px' }}>Enter the email address.</FormHelperText>
//     </Box>
//   );
// }

// import React, { useRef, useState, useEffect, useCallback } from 'react';

// import {
//   Box,
//   Chip,
//   List,
//   Avatar,
//   Switch,
//   Popover,
//   Divider,
//   Tooltip,
//   ListItem,
//   TextField,
//   Accordion,
//   Typography,
//   ListItemText,
//   InputAdornment,
//   FormHelperText,
//   AccordionSummary,
//   AccordionDetails,
//   FormControlLabel,
// } from '@mui/material';

// import { Iconify } from 'src/components/iconify';

// export default function InsertDataField() {
//   const [tags, setTags] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [searchInput, setSearchInput] = useState('');
//   const [popoverPosition, setPopoverPosition] = useState('bottom');
//   const [popoverMaxHeight, setPopoverMaxHeight] = useState(300);
//   const [editingIndex, setEditingIndex] = useState(-1);
//   const editInputRef = useRef(null);

//   const adjustPopoverPosition = useCallback(() => {
//     if (!anchorEl) return;

//     const viewportHeight = window.innerHeight;
//     const rect = anchorEl.getBoundingClientRect();

//     const spaceBelow = viewportHeight - rect.bottom;
//     const spaceAbove = rect.top;

//     if (spaceBelow > spaceAbove) {
//       setPopoverMaxHeight(Math.min(spaceBelow - 20, 400));
//       setPopoverPosition('bottom');
//     } else {
//       setPopoverMaxHeight(Math.min(spaceAbove - 20, 400));
//       setPopoverPosition('top');
//     }
//   }, [anchorEl]);

//   useEffect(() => {
//     if (anchorEl) {
//       document.body.style.overflow = 'hidden';
//       adjustPopoverPosition();
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [anchorEl, adjustPopoverPosition]);

//   useEffect(() => {
//     if (editingIndex !== -1 && editInputRef.current) {
//       editInputRef.current.focus();
//     }
//   }, [editingIndex]);

//   const handleAddTag = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClosePopover = () => {
//     setAnchorEl(null);
//   };

//   const handleSelectAccordionContent = (content) => {
//     setTags((prevTags) => [...prevTags, { type: 'tag', value: content }]);
//     handleClosePopover();
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter' && inputValue.trim()) {
//       setTags((prevTags) => [...prevTags, { type: 'custom', value: inputValue.trim() }]);
//       setInputValue('');
//       event.preventDefault();
//     }
//   };

//   const handleDeleteTag = (indexToDelete) => {
//     setTags((prevTags) => prevTags.filter((_, index) => index !== indexToDelete));
//   };

//   const handleEditTag = (index) => {
//     setEditingIndex(index);
//   };

//   const handleEditInputChange = (event, index) => {
//     const newTags = [...tags];
//     newTags[index].value = event.target.value;
//     setTags(newTags);
//   };

//   const handleEditInputKeyDown = (event, index) => {
//     if (event.key === 'Enter') {
//       setEditingIndex(-1);
//     }
//   };

//   const handleEditInputBlur = () => {
//     setEditingIndex(-1);
//   };

//   const open = Boolean(anchorEl);
//   const popoverId = open ? 'simple-popover' : undefined;

//   return (
//     <Box sx={{ mt: 4 }}>
//       <Box display="flex" justifyContent="space-between" mr="6px" alignItems="center">
//         <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
//           Email Address (Required)
//         </Typography>
//         <FormControlLabel
//           control={<Switch name="small" size="small" />}
//           label="Map"
//           labelPlacement="start"
//         />
//       </Box>
//       <Box
//         sx={{
//           border: '1px solid #919EAB33',
//           borderRadius: '8px',
//           padding: '4px',
//           minHeight: '56px',
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '4px',
//           alignItems: 'center',
//           cursor: 'text',
//           '&:hover': {
//             borderColor: 'rgba(0, 0, 0, 0.87)',
//           },
//         }}
//         onClick={handleAddTag}
//       >
//         {tags.map((tag, index) =>
//           tag.type === 'custom' ? (
//             editingIndex === index ? (
//               <TextField
//                 key={index}
//                 value={tag.value}
//                 onChange={(e) => handleEditInputChange(e, index)}
//                 onKeyDown={(e) => handleEditInputKeyDown(e, index)}
//                 onBlur={handleEditInputBlur}
//                 variant="standard"
//                 size="small"
//                 inputRef={editInputRef}
//                 sx={{ fontSize: '0.8125rem', padding: '3px 6px' }}
//               />
//             ) : (
//               <Typography
//                 key={index}
//                 component="span"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleEditTag(index);
//                 }}
//                 sx={{
//                   fontSize: '0.8125rem',
//                   padding: '3px 6px',
//                   cursor: 'text',
//                   '&:hover': {
//                     backgroundColor: 'rgba(0, 0, 0, 0.04)',
//                   },
//                 }}
//               >
//                 {tag.value}
//               </Typography>
//             )
//           ) : (
//             <Tooltip key={index} title={tag.value} arrow placement="top">
//               <Chip
//                 variant="soft"
//                 color="info"
//                 size="small"
//                 label={tag.value}
//                 onDelete={() => handleDeleteTag(index)}
//                 style={{ minWidth: 'auto', width: 'auto' }}
//               />
//             </Tooltip>
//           )
//         )}
//         <TextField
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyDown={handleKeyDown}
//           placeholder={tags.length === 0 ? '+ Enter text or map data.' : ''}
//           variant="standard"
//           InputProps={{
//             disableUnderline: true,
//             endAdornment: <InputAdornment position="Start" />,
//           }}
//           sx={{
//             flex: 1,
//             '& input': {
//               padding: '4px',
//               fontSize: '1rem',
//             },
//           }}
//         />
//       </Box>
//       <Popover
//         id={popoverId}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClosePopover}
//         anchorOrigin={{
//           vertical: popoverPosition,
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: popoverPosition === 'bottom' ? 'top' : 'bottom',
//           horizontal: 'left',
//         }}
//         sx={{
//           '& .MuiPopover-paper': {
//             width: anchorEl ? anchorEl.clientWidth : 'auto',
//             maxHeight: popoverMaxHeight,
//             overflowY: 'auto',
//           },
//         }}
//       >
//         <Box sx={{ p: 2 }}>
//           <Typography variant="subtitle1" sx={{ mb: 1 }}>
//             Insert Data from Previous Step
//           </Typography>
//           <TextField
//             fullWidth
//             size="small"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             placeholder="Search & Map Data..."
//             variant="outlined"
//           />
//           <Accordion sx={{ mt: '10px' }}>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1590489835035_1590663162-google-sheets-64.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   1. Webhook by Pabbly: Catch Webhook (Preferred)
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() =>
//                     handleSelectAccordionContent(
//                       '1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455'
//                     )
//                   }
//                 >
//                   <ListItemText primary="1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1642563579878_1663756758-OpenAI.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   2. OpenAI (ChatGPT, DALL-E, Whisper): ChatGPT
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() =>
//                     handleSelectAccordionContent(
//                       '1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455'
//                     )
//                   }
//                 >
//                   <ListItemText primary="1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </Box>
//       </Popover>
//       <FormHelperText sx={{ ml: '13px' }}>Enter the email address.</FormHelperText>
//     </Box>
//   );
// }

// import React, { useRef, useState, useEffect, useCallback } from 'react';

// import {
//   Box,
//   Chip,
//   List,
//   Avatar,
//   Switch,
//   Popover,
//   Divider,
//   Tooltip,
//   ListItem,
//   TextField,
//   Accordion,
//   Typography,
//   ListItemText,
//   InputAdornment,
//   FormHelperText,
//   AccordionSummary,
//   AccordionDetails,
//   FormControlLabel,
// } from '@mui/material';

// import { Iconify } from 'src/components/iconify';

// export default function InsertDataField() {
//   const [tags, setTags] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [searchInput, setSearchInput] = useState('');
//   const [popoverPosition, setPopoverPosition] = useState('bottom');
//   const [popoverMaxHeight, setPopoverMaxHeight] = useState(300);
//   const [editingIndex, setEditingIndex] = useState(-1);
//   const [cursorPosition, setCursorPosition] = useState(0);
//   const editInputRef = useRef(null);
//   const inputRef = useRef(null);

//   const adjustPopoverPosition = useCallback(() => {
//     if (!anchorEl) return;

//     const viewportHeight = window.innerHeight;
//     const rect = anchorEl.getBoundingClientRect();

//     const spaceBelow = viewportHeight - rect.bottom;
//     const spaceAbove = rect.top;

//     if (spaceBelow > spaceAbove) {
//       setPopoverMaxHeight(Math.min(spaceBelow - 20, 400));
//       setPopoverPosition('bottom');
//     } else {
//       setPopoverMaxHeight(Math.min(spaceAbove - 20, 400));
//       setPopoverPosition('top');
//     }
//   }, [anchorEl]);

//   useEffect(() => {
//     if (anchorEl) {
//       document.body.style.overflow = 'hidden';
//       adjustPopoverPosition();
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [anchorEl, adjustPopoverPosition]);

//   useEffect(() => {
//     if (editingIndex !== -1 && editInputRef.current) {
//       editInputRef.current.focus();
//     }
//   }, [editingIndex]);

//   const handleAddTag = (event) => {
//     setAnchorEl(event.currentTarget);
//     if (inputRef.current) {
//       setCursorPosition(inputRef.current.selectionStart || 0);
//     }
//   };

//   const handleClosePopover = () => {
//     setAnchorEl(null);
//   };

//   const handleSelectAccordionContent = (content) => {
//     const before = inputValue.slice(0, cursorPosition);
//     const after = inputValue.slice(cursorPosition);

//     setTags((prevTags) => {
//       const customTextBefore = before.trim();
//       const customTextAfter = after.trim();
//       const result = [...prevTags];

//       let insertAt = result.length;
//       for (let i = 0; i < result.length; i += 1) {
//         if (result[i].type === 'custom') {
//           insertAt = i;
//           break;
//         }
//       }

//       if (customTextBefore) {
//         result.splice(insertAt, 0, { type: 'custom', value: customTextBefore });
//         insertAt += 1;
//       }

//       result.splice(insertAt, 0, { type: 'tag', value: content });

//       if (customTextAfter) {
//         const afterIndex = insertAt + 1;
//         result.splice(afterIndex, 0, { type: 'custom', value: customTextAfter });
//       }

//       return result;
//     });

//     setInputValue('');
//     handleClosePopover();

//     setTimeout(() => {
//       if (inputRef.current) {
//         inputRef.current.focus();
//       }
//     }, 0);
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter' && inputValue.trim()) {
//       setTags((prevTags) => [...prevTags, { type: 'custom', value: inputValue.trim() }]);
//       setInputValue('');
//       event.preventDefault();
//     }
//   };

//   const handleDeleteTag = (indexToDelete) => {
//     setTags((prevTags) => prevTags.filter((_, index) => index !== indexToDelete));
//   };

//   const handleEditTag = (index) => {
//     setEditingIndex(index);
//   };

//   const handleEditInputChange = (event, index) => {
//     setTags((prevTags) => {
//       const newTags = [...prevTags];
//       newTags[index] = { ...newTags[index], value: event.target.value };
//       return newTags;
//     });
//   };

//   const handleEditInputKeyDown = (event, index) => {
//     if (event.key === 'Enter') {
//       setEditingIndex(-1);
//     }
//   };

//   const handleEditInputBlur = () => {
//     setEditingIndex(-1);
//   };

//   const handleInputFocus = (event) => {
//     setCursorPosition(event.target.selectionStart || 0);
//   };

//   const handleInputClick = (event) => {
//     setCursorPosition(event.target.selectionStart || 0);
//   };

//   const open = Boolean(anchorEl);
//   const popoverId = open ? 'simple-popover' : undefined;

//   return (
//     <Box sx={{ mt: 4 }}>
//       <Box display="flex" justifyContent="space-between" mr="6px" alignItems="center">
//         <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
//           Email Address (Required)
//         </Typography>
//         <FormControlLabel
//           control={<Switch name="small" size="small" />}
//           label="Map"
//           labelPlacement="start"
//         />
//       </Box>
//       <Box
//         sx={{
//           border: '1px solid #919EAB33',
//           borderRadius: '8px',
//           padding: '4px',
//           minHeight: '56px',
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '4px',
//           alignItems: 'center',
//           cursor: 'text',
//           '&:hover': {
//             borderColor: 'rgba(0, 0, 0, 0.87)',
//           },
//         }}
//         onClick={handleAddTag}
//       >
//         {tags.map((tag, index) =>
//           tag.type === 'custom' ? (
//             editingIndex === index ? (
//               <TextField
//                 key={index}
//                 value={tag.value}
//                 onChange={(e) => handleEditInputChange(e, index)}
//                 onKeyDown={(e) => handleEditInputKeyDown(e, index)}
//                 onBlur={handleEditInputBlur}
//                 variant="standard"
//                 size="small"
//                 inputRef={editInputRef}
//                 sx={{ fontSize: '0.8125rem', padding: '3px 6px' }}
//               />
//             ) : (
//               <Typography
//                 key={index}
//                 component="span"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleEditTag(index);
//                 }}
//                 sx={{
//                   fontSize: '0.8125rem',
//                   padding: '3px 6px',
//                   cursor: 'text',
//                   '&:hover': {
//                     backgroundColor: 'rgba(0, 0, 0, 0.04)',
//                   },
//                 }}
//               >
//                 {tag.value}
//               </Typography>
//             )
//           ) : (
//             <Tooltip key={index} title={tag.value} arrow placement="top">
//               <Chip
//                 variant="soft"
//                 color="info"
//                 size="small"
//                 label={tag.value}
//                 onDelete={() => handleDeleteTag(index)}
//                 style={{ minWidth: 'auto', width: 'auto' }}
//               />
//             </Tooltip>
//           )
//         )}
//         <TextField
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyDown={handleKeyDown}
//           onFocus={handleInputFocus}
//           onClick={handleInputClick}
//           inputRef={inputRef}
//           placeholder={tags.length === 0 ? '+ Enter text or map data.' : ''}
//           variant="standard"
//           InputProps={{
//             disableUnderline: true,
//             endAdornment: <InputAdornment position="Start" />,
//           }}
//           sx={{
//             flex: 1,
//             '& input': {
//               padding: '4px',
//               fontSize: '1rem',
//             },
//           }}
//         />
//       </Box>
//       <Popover
//         id={popoverId}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClosePopover}
//         anchorOrigin={{
//           vertical: popoverPosition,
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: popoverPosition === 'bottom' ? 'top' : 'bottom',
//           horizontal: 'left',
//         }}
//         sx={{
//           '& .MuiPopover-paper': {
//             width: anchorEl ? anchorEl.clientWidth : 'auto',
//             maxHeight: popoverMaxHeight,
//             overflowY: 'auto',
//           },
//         }}
//       >
//         <Box sx={{ p: 2 }}>
//           <Typography variant="subtitle1" sx={{ mb: 1 }}>
//             Insert Data from Previous Step
//           </Typography>
//           <TextField
//             fullWidth
//             size="small"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             placeholder="Search & Map Data..."
//             variant="outlined"
//           />
//           <Accordion sx={{ mt: '10px' }}>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1590489835035_1590663162-google-sheets-64.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   1. Webhook by Pabbly: Catch Webhook (Preferred)
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() =>
//                     handleSelectAccordionContent(
//                       '1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455'
//                     )
//                   }
//                 >
//                   <ListItemText primary="1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1642563579878_1663756758-OpenAI.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   2. OpenAI (ChatGPT, DALL-E, Whisper): ChatGPT
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() =>
//                     handleSelectAccordionContent(
//                       '1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455'
//                     )
//                   }
//                 >
//                   <ListItemText primary="1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 4')}>
//                   <ListItemText primary="Option 4" />
//                 </ListItem>
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 5')}>
//                   <ListItemText primary="Option 5" />
//                 </ListItem>
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 6')}>
//                   <ListItemText primary="Option 6" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </Box>
//       </Popover>
//       <FormHelperText sx={{ ml: '13px' }}>Enter the email address.</FormHelperText>
//     </Box>
//   );
// }

// import React, { useRef, useState, useEffect, useCallback } from 'react';
// import {
//   Box,
//   Chip,
//   List,
//   Avatar,
//   Switch,
//   Popover,
//   Divider,
//   Tooltip,
//   ListItem,
//   TextField,
//   Accordion,
//   Typography,
//   ListItemText,
//   InputAdornment,
//   FormHelperText,
//   AccordionSummary,
//   AccordionDetails,
//   FormControlLabel,
// } from '@mui/material';
// import { Iconify } from 'src/components/iconify';

// export default function InsertDataField() {
//   const [tags, setTags] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [searchInput, setSearchInput] = useState('');
//   const [popoverPosition, setPopoverPosition] = useState('bottom');
//   const [popoverMaxHeight, setPopoverMaxHeight] = useState(300);
//   const [editingIndex, setEditingIndex] = useState(-1);
//   const [cursorPosition, setCursorPosition] = useState(0);
//   const editInputRef = useRef(null);
//   const inputRef = useRef(null);
//   const containerRef = useRef(null);

//   const adjustPopoverPosition = useCallback(() => {
//     if (!anchorEl) return;

//     const viewportHeight = window.innerHeight;
//     const rect = anchorEl.getBoundingClientRect();

//     const spaceBelow = viewportHeight - rect.bottom;
//     const spaceAbove = rect.top;

//     if (spaceBelow > spaceAbove) {
//       setPopoverMaxHeight(Math.min(spaceBelow - 20, 400));
//       setPopoverPosition('bottom');
//     } else {
//       setPopoverMaxHeight(Math.min(spaceAbove - 20, 400));
//       setPopoverPosition('top');
//     }
//   }, [anchorEl]);

//   useEffect(() => {
//     if (anchorEl) {
//       document.body.style.overflow = 'hidden';
//       adjustPopoverPosition();
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [anchorEl, adjustPopoverPosition]);

//   useEffect(() => {
//     if (editingIndex !== -1 && editInputRef.current) {
//       editInputRef.current.focus();
//     }
//   }, [editingIndex]);

//   const handleContainerClick = (event) => {
//     const rect = containerRef.current.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     let accumulatedWidth = 0;
//     let newCursorPosition = tags.length;

//     containerRef.current.childNodes.forEach((child, index) => {
//       if (child.nodeType === Node.ELEMENT_NODE) {
//         const childWidth = child.offsetWidth;
//         if (accumulatedWidth + childWidth / 2 > x) {
//           newCursorPosition = index;
//           return;
//         }
//         accumulatedWidth += childWidth;
//       }
//     });

//     setCursorPosition(newCursorPosition);
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   const handleAddTag = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClosePopover = () => {
//     setAnchorEl(null);
//   };

//   const handleSelectAccordionContent = (content) => {
//     const newTag = { type: 'tag', value: content };
//     setTags((prevTags) => {
//       const newTags = [...prevTags];
//       newTags.splice(cursorPosition, 0, newTag);
//       return newTags;
//     });
//     setCursorPosition(cursorPosition + 1);
//     handleClosePopover();

//     setTimeout(() => {
//       if (inputRef.current) {
//         inputRef.current.focus();
//       }
//     }, 0);
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter' && inputValue.trim()) {
//       const newTag = { type: 'custom', value: inputValue.trim() };
//       setTags((prevTags) => {
//         const newTags = [...prevTags];
//         newTags.splice(cursorPosition, 0, newTag);
//         return newTags;
//       });
//       setCursorPosition(cursorPosition + 1);
//       setInputValue('');
//       event.preventDefault();
//     }
//   };

//   const handleDeleteTag = (indexToDelete) => {
//     setTags((prevTags) => prevTags.filter((_, index) => index !== indexToDelete));
//     if (indexToDelete < cursorPosition) {
//       setCursorPosition(cursorPosition - 1);
//     }
//   };

//   const handleEditTag = (index) => {
//     setEditingIndex(index);
//   };

//   const handleEditInputChange = (event, index) => {
//     setTags((prevTags) => {
//       const newTags = [...prevTags];
//       newTags[index] = { ...newTags[index], value: event.target.value };
//       return newTags;
//     });
//   };

//   const handleEditInputKeyDown = (event, index) => {
//     if (event.key === 'Enter') {
//       setEditingIndex(-1);
//     }
//   };

//   const handleEditInputBlur = () => {
//     setEditingIndex(-1);
//   };

//   const handleInputFocus = (event) => {
//     // Keep the cursor position when focusing on the input
//   };

//   const open = Boolean(anchorEl);
//   const popoverId = open ? 'simple-popover' : undefined;

//   return (
//     <Box sx={{ mt: 4 }}>
//       <Box display="flex" justifyContent="space-between" mr="6px" alignItems="center">
//         <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
//           Email Address (Required)
//         </Typography>
//         <FormControlLabel
//           control={<Switch name="small" size="small" />}
//           label="Map"
//           labelPlacement="start"
//         />
//       </Box>
//       <Box
//         ref={containerRef}
//         onClick={handleContainerClick}
//         sx={{
//           border: '1px solid #919EAB33',
//           borderRadius: '8px',
//           padding: '4px',
//           minHeight: '56px',
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '4px',
//           alignItems: 'center',
//           cursor: 'text',
//           '&:hover': {
//             borderColor: 'rgba(0, 0, 0, 0.87)',
//           },
//           backgroundColor: '#F4F6F8',
//         }}
//       >
//         {tags.map((tag, index) =>
//           tag.type === 'custom' ? (
//             editingIndex === index ? (
//               <TextField
//                 key={index}
//                 value={tag.value}
//                 onChange={(e) => handleEditInputChange(e, index)}
//                 onKeyDown={(e) => handleEditInputKeyDown(e, index)}
//                 onBlur={handleEditInputBlur}
//                 variant="standard"
//                 size="small"
//                 inputRef={editInputRef}
//                 sx={{ fontSize: '0.8125rem', padding: '3px 6px' }}
//               />
//             ) : (
//               <Typography
//                 key={index}
//                 component="span"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleEditTag(index);
//                 }}
//                 sx={{
//                   fontSize: '0.8125rem',
//                   padding: '3px 6px',
//                   cursor: 'text',
//                   '&:hover': {
//                     backgroundColor: 'rgba(0, 0, 0, 0.04)',
//                   },
//                 }}
//               >
//                 {tag.value}
//               </Typography>
//             )
//           ) : (
//             <Tooltip key={index} title={tag.value} arrow placement="top">
//               <Chip
//                 variant="soft"
//                 color="info"
//                 size="small"
//                 label={tag.value}
//                 onDelete={() => handleDeleteTag(index)}
//                 style={{ minWidth: 'auto', width: 'auto' }}
//               />
//             </Tooltip>
//           )
//         )}
//         <TextField
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyDown={handleKeyDown}
//           onFocus={handleInputFocus}
//           inputRef={inputRef}
//           placeholder={tags.length === 0 ? '+ Enter text or map data.' : ''}
//           variant="standard"
//           InputProps={{
//             disableUnderline: true,
//             endAdornment: <InputAdornment position="Start" />,
//           }}
//           sx={{
//             flex: 1,
//             '& input': {
//               padding: '4px',
//               fontSize: '1rem',
//               backgroundColor: 'transparent',
//             },
//           }}
//         />
//       </Box>
//       <Popover
//         id={popoverId}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClosePopover}
//         anchorOrigin={{
//           vertical: popoverPosition,
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: popoverPosition === 'bottom' ? 'top' : 'bottom',
//           horizontal: 'left',
//         }}
//         sx={{
//           '& .MuiPopover-paper': {
//             width: anchorEl ? anchorEl.clientWidth : 'auto',
//             maxHeight: popoverMaxHeight,
//             overflowY: 'auto',
//           },
//         }}
//       >
//         <Box sx={{ p: 2 }}>
//           <Typography variant="subtitle1" sx={{ mb: 1 }}>
//             Insert Data from Previous Step
//           </Typography>
//           <TextField
//             fullWidth
//             size="small"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             placeholder="Search & Map Data..."
//             variant="outlined"
//           />
//           <Accordion sx={{ mt: '10px' }}>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1590489835035_1590663162-google-sheets-64.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   1. Webhook by Pabbly: Catch Webhook (Preferred)
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() =>
//                     handleSelectAccordionContent(
//                       '1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455'
//                     )
//                   }
//                 >
//                   <ListItemText primary="1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1642563579878_1663756758-OpenAI.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   2. OpenAI (ChatGPT, DALL-E, Whisper): ChatGPT
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() =>
//                     handleSelectAccordionContent(
//                       '1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455'
//                     )
//                   }
//                 >
//                   <ListItemText primary="1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </Box>
//       </Popover>
//       <FormHelperText sx={{ ml: '13px' }}>Enter the email address.</FormHelperText>
//     </Box>
//   );
// }

// import React, { useState, useEffect, useRef } from 'react';

// const DataField = () => {
//   const [chips, setChips] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [searchValue, setSearchValue] = useState('');
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false);
//   const [isMapEnabled, setIsMapEnabled] = useState(false);
//   const fieldRef = useRef(null);
//   const inputRef = useRef(null);
//   const popoverRef = useRef(null);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' && inputValue.trim()) {
//       setChips([...chips, { type: 'custom', value: inputValue.trim() }]);
//       setInputValue('');
//       e.preventDefault();
//     } else if (e.key === 'Backspace' && inputValue === '' && chips.length > 0) {
//       setChips(chips.slice(0, -1));
//     }
//   };

//   const handleChipDelete = (indexToDelete, e) => {
//     e.stopPropagation();
//     setChips(chips.filter((_, index) => index !== indexToDelete));
//   };

//   const handleItemSelect = (content) => {
//     setChips([...chips, { type: 'mapped', value: content }]);
//     setIsPopoverOpen(false);
//     inputRef.current?.focus();
//   };

//   const handleFieldClick = () => {
//     inputRef.current?.focus();
//     setIsPopoverOpen(true);
//   };

//   // Keyboard navigation for popover
//   const handlePopoverKeyDown = (e) => {
//     if (e.key === 'Escape') {
//       setIsPopoverOpen(false);
//       inputRef.current?.focus();
//     }
//   };

//   // Close popover when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popoverRef.current && !popoverRef.current.contains(event.target) &&
//           fieldRef.current && !fieldRef.current.contains(event.target)) {
//         setIsPopoverOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-sm border">
//       <div className="flex justify-between items-center mb-2">
//         <span className="text-sm font-semibold" id="field-label">Alt Text (Optional)</span>
//         <div className="flex items-center gap-2">
//           <span className="text-sm" id="switch-label">Map</span>
//           <button
//             type="button"
//             role="switch"
//             aria-checked={isMapEnabled}
//             aria-labelledby="switch-label"
//             onClick={() => setIsMapEnabled(!isMapEnabled)}
//             onKeyDown={(e) => {
//               if (e.key === 'Enter' || e.key === ' ') {
//                 e.preventDefault();
//                 setIsMapEnabled(!isMapEnabled);
//               }
//             }}
//             className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//               isMapEnabled ? 'bg-blue-600' : 'bg-gray-200'
//             }`}
//           >
//             <span
//               className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                 isMapEnabled ? 'translate-x-5' : 'translate-x-1'
//               }`}
//             />
//           </button>
//         </div>
//       </div>

//       <div className="relative">
//         <div
//           ref={fieldRef}
//           onClick={handleFieldClick}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter' || e.key === ' ') {
//               e.preventDefault();
//               handleFieldClick();
//             }
//           }}
//           role="textbox"
//           tabIndex={0}
//           aria-labelledby="field-label"
//           aria-expanded={isPopoverOpen}
//           className="min-h-[56px] p-2 border rounded-md flex flex-wrap gap-2 items-center cursor-text hover:border-gray-400 focus-within:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           {chips.map((chip, index) => (
//             <div
//               key={index}
//               className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
//                 chip.type === 'mapped' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
//               }`}
//             >
//               <span className="max-w-[200px] truncate">{chip.value}</span>
//               <button
//                 type="button"
//                 onClick={(e) => handleChipDelete(index, e)}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter' || e.key === ' ') {
//                     e.preventDefault();
//                     handleChipDelete(index, e);
//                   }
//                 }}
//                 aria-label={`Remove ${chip.value}`}
//                 className="hover:bg-gray-200 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 ×
//               </button>
//             </div>
//           ))}
//           <input
//             ref={inputRef}
//             value={inputValue}
//             onChange={handleInputChange}
//             onKeyDown={handleKeyDown}
//             aria-label="Enter text or select mapped data"
//             className="flex-1 outline-none bg-transparent min-w-[100px]"
//             placeholder={chips.length === 0 ? "+ Enter text or map data" : ""}
//           />
//         </div>

//         {isPopoverOpen && (
//           <div
//             ref={popoverRef}
//             role="dialog"
//             aria-label="Insert Data from Previous Step"
//             onKeyDown={handlePopoverKeyDown}
//             className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-lg z-10 max-h-[400px] overflow-auto"
//           >
//             <div className="p-4">
//               <h3 className="font-semibold mb-4">Insert Data from Previous Step</h3>

//               <div className="relative mb-4">
//                 <input
//                   type="text"
//                   placeholder="Search & Map Data..."
//                   value={searchValue}
//                   onChange={(e) => setSearchValue(e.target.value)}
//                   className="w-full pl-8 pr-4 py-2 border rounded-md"
//                   aria-label="Search mapped data"
//                 />
//                 <span className="absolute left-2 top-2.5 text-gray-500">🔍</span>
//               </div>

//               <div className="border rounded-md">
//                 <div className="border-b">
//                   <button
//                     type="button"
//                     aria-expanded="true"
//                     className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                       <img
//                         src="/api/placeholder/32/32"
//                         alt=""
//                         className="w-6 h-6"
//                       />
//                     </div>
//                     <span className="flex-1 text-left">1. Pinterest: New Pin (For Specific Board)</span>
//                     <span aria-hidden="true">▼</span>
//                   </button>
//                 </div>

//                 <div role="listbox">
//                   {[
//                     "1. Pin Metrics : dfbdfbdfbdfbvd",
//                     "1. Media Media Type : image kjhsabvxkjhasvclavs",
//                     "1. Parent Pin Id : sojdvcbskjvboisdbvkjbv"
//                   ].map((item, index) => (
//                     <button
//                       key={index}
//                       type="button"
//                       role="option"
//                       onClick={() => handleItemSelect(item)}
//                       onKeyDown={(e) => {
//                         if (e.key === 'Enter' || e.key === ' ') {
//                           e.preventDefault();
//                           handleItemSelect(item);
//                         }
//                       }}
//                       className="w-full py-2 px-4 text-left hover:bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <p className="text-sm text-gray-500 mt-1 ml-1" id="field-help">
//         Enter the alt text for your pin
//       </p>
//     </div>
//   );
// };

// export default DataField;

// import React, { useRef, useState, useEffect, useCallback } from 'react';

// import {
//   Box,
//   Chip,
//   List,
//   Avatar,
//   Switch,
//   Popover,
//   Divider,
//   Tooltip,
//   ListItem,
//   TextField,
//   Accordion,
//   Typography,
//   ListItemText,
//   InputAdornment,
//   FormHelperText,
//   AccordionSummary,
//   AccordionDetails,
//   FormControlLabel,
// } from '@mui/material';

// import { Iconify } from 'src/components/iconify';

// export default function InsertDataField() {
//   const [tags, setTags] = useState([]);

//   const [inputValue, setInputValue] = useState(''); // Handle as a single string
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [searchInput, setSearchInput] = useState('');
//   const [popoverPosition, setPopoverPosition] = useState('bottom');
//   const [popoverMaxHeight, setPopoverMaxHeight] = useState(300);
//   const inputRef = useRef(null); // To track cursor position

//   const adjustPopoverPosition = useCallback(() => {
//     if (!anchorEl) return;

//     const viewportHeight = window.innerHeight;
//     const rect = anchorEl.getBoundingClientRect();

//     const spaceBelow = viewportHeight - rect.bottom;
//     const spaceAbove = rect.top;

//     if (spaceBelow > spaceAbove) {
//       setPopoverMaxHeight(Math.min(spaceBelow - 20, 400));
//       setPopoverPosition('bottom');
//     } else {
//       setPopoverMaxHeight(Math.min(spaceAbove - 20, 400));
//       setPopoverPosition('top');
//     }
//   }, [anchorEl]);

//   useEffect(() => {
//     if (anchorEl) {
//       document.body.style.overflow = 'hidden';
//       adjustPopoverPosition();
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [anchorEl, adjustPopoverPosition]);

//   const handleAddTag = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClosePopover = () => {
//     setAnchorEl(null);
//   };

//   const handleSelectAccordionContent = (content) => {
//     const cursorPosition = inputRef.current.selectionStart;
//     const newValue =
//       inputValue.slice(0, cursorPosition) + content + inputValue.slice(cursorPosition);

//     setInputValue(newValue);
//     handleClosePopover();
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };
//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter' && inputValue.trim()) {
//       event.preventDefault(); // Prevent form submission or any default behavior
//     }
//   };

//   const handleDeleteTag = (indexToDelete) => {
//     setTags((prevTags) => prevTags.filter((_, index) => index !== indexToDelete));
//   };

//   const open = Boolean(anchorEl);
//   const popoverId = open ? 'simple-popover' : undefined;

//   return (
//     <Box sx={{ mt: 4 }}>
//       <Box display="flex" justifyContent="space-between" mr="6px" alignItems="center">
//         <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
//           Email Address (Required)
//         </Typography>
//         <FormControlLabel
//           control={<Switch name="small" size="small" />}
//           label="Map"
//           labelPlacement="start"
//         />
//       </Box>
//       <Box
//         sx={{
//           border: '1px solid rgba(0, 0, 0, 0.23)',
//           borderRadius: '4px',
//           padding: '4px',
//           minHeight: '56px',
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '4px',
//           alignItems: 'center',
//           '&:hover': {
//             borderColor: 'rgba(0, 0, 0, 0.87)',
//           },
//         }}
//         onClick={handleAddTag}
//       >
//         {tags.map((tag, index) => (
//           <Tooltip key={index} title={tag.value} arrow placement="top">
//             <Chip
//               variant="soft"
//               color={tag.type === 'custom' ? 'default' : 'info'}
//               size="small"
//               label={tag.value}
//               onDelete={() => handleDeleteTag(index)}
//               style={{ minWidth: 'auto', width: 'auto' }}
//             />
//           </Tooltip>
//         ))}
//         <TextField
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyDown={handleKeyDown}
//           placeholder="+ Enter text or map data."
//           variant="standard"
//           inputRef={inputRef} // Attach the ref to track cursor position
//           InputProps={{
//             disableUnderline: true,
//             endAdornment: <InputAdornment position="Start" />,
//           }}
//           sx={{
//             flex: 1,
//             '& input': {
//               padding: '4px',
//               fontSize: '1rem',
//             },
//           }}
//         />
//       </Box>
//       <Popover
//         id={popoverId}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClosePopover}
//         anchorOrigin={{
//           vertical: popoverPosition,
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: popoverPosition === 'bottom' ? 'top' : 'bottom',
//           horizontal: 'left',
//         }}
//         sx={{
//           '& .MuiPopover-paper': {
//             width: anchorEl ? anchorEl.clientWidth : 'auto',
//             maxHeight: popoverMaxHeight,
//             overflowY: 'auto',
//           },
//         }}
//       >
//         <Box sx={{ p: 2 }}>
//           <Typography variant="subtitle1" sx={{ mb: 1 }}>
//             Insert Data from Previous Step
//           </Typography>
//           <TextField
//             fullWidth
//             size="small"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             placeholder="Search & Map Data..."
//             variant="outlined"
//           />
//           <Accordion sx={{ mt: '10px' }}>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1590489835035_1590663162-google-sheets-64.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   1. Webhook by Pabbly: Catch Webhook (Preferred)
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() =>
//                     handleSelectAccordionContent(
//                       '1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455'
//                     )
//                   }
//                 >
//                   <ListItemText primary="1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//           <Accordion>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel2a-content"
//               id="panel2a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1642563579878_1663756758-OpenAI.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   2. OpenAI (ChatGPT, DALL-E, Whisper): ChatGPT
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() =>
//                     handleSelectAccordionContent(
//                       '1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455'
//                     )
//                   }
//                 >
//                   <ListItemText primary="1. Text : And we are going to dictate some text so I just met a person named as demo Pabbly he is a business owner of Xyz company and he has a email address at demo@xyzcompany.com now let me tell you his mobile number is 1122334455" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 2')}>
//                   <ListItemText primary="Option 2" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem button onClick={() => handleSelectAccordionContent('Option 3')}>
//                   <ListItemText primary="Option 3" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </Box>
//       </Popover>
//       <FormHelperText sx={{ ml: '13px' }}>Enter the email address.</FormHelperText>
//     </Box>
//   );
// }

// import React, { useRef, useState, useEffect, useCallback } from 'react';

// import {
//   Box,
//   Chip,
//   List,
//   Avatar,
//   Switch,
//   Popover,
//   Divider,
//   Tooltip,
//   ListItem,
//   TextField,
//   Accordion,
//   Typography,
//   ListItemText,
//   InputAdornment,
//   FormHelperText,
//   AccordionSummary,
//   AccordionDetails,
//   FormControlLabel,
// } from '@mui/material';

// import { Iconify } from 'src/components/iconify';

// // Utility function to convert keys to readable format
// const convertToReadable = key => key.split('_')
//   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(' ');

// export default function InsertDataField() {
//   const [tags, setTags] = useState([]);
//   const [tagInput, setTagInput] = useState('');
//   const [inputValue, setInputValue] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [searchInput, setSearchInput] = useState('');
//   const [popoverPosition, setPopoverPosition] = useState('bottom');
//   const [popoverMaxHeight, setPopoverMaxHeight] = useState(300);
//   const inputRef = useRef(null);

//   const adjustPopoverPosition = useCallback(() => {
//     if (!anchorEl) return;

//     const viewportHeight = window.innerHeight;
//     const rect = anchorEl.getBoundingClientRect();

//     const spaceBelow = viewportHeight - rect.bottom;
//     const spaceAbove = rect.top;

//     if (spaceBelow > spaceAbove) {
//       setPopoverMaxHeight(Math.min(spaceBelow - 20, 400));
//       setPopoverPosition('bottom');
//     } else {
//       setPopoverMaxHeight(Math.min(spaceAbove - 20, 400));
//       setPopoverPosition('top');
//     }
//   }, [anchorEl]);

//   useEffect(() => {
//     if (anchorEl) {
//       document.body.style.overflow = 'hidden';
//       adjustPopoverPosition();
//     } else {
//       document.body.style.overflow = '';
//     }

//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [anchorEl, adjustPopoverPosition]);

//   const handleAddTag = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClosePopover = () => {
//     setAnchorEl(null);
//   };

//   const handleSelectAccordionContent = (content) => {
//     // Create the display tag and the actual tag value
//     const displayTag = `${content.key} : ${content.value}`;
//     const tag = `{{${content.id}<=-+*/@/*+-=>${content.key}}}`;

//     // Update tags state with the display version
//     setTags((prevTags) => [...prevTags, {
//       value: displayTag,
//       type: 'custom',
//       actualValue: tag
//     }]);

//     // Insert the actual tag value at cursor position
//     const cursorPosition = inputRef.current.selectionStart;
//     const newValue = tagInput.slice(0, cursorPosition) + tag + tagInput.slice(cursorPosition);
//     console.log(' mapping sentence - ',newValue);
//     setTagInput(newValue);

//     // handleClosePopover();
//   };

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//     setTagInput(event.target.value);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter' && inputValue.trim()) {
//       event.preventDefault();
//       setTags((prevTags) => [...prevTags, {
//         value: inputValue.trim(),
//         type: 'custom',
//         actualValue: inputValue.trim()
//       }]);
//       setInputValue('');
//       setTagInput('');
//     }
//   };

//   const handleDeleteTag = (indexToDelete) => {
//     setTags((prevTags) => prevTags.filter((_, index) => index !== indexToDelete));
//   };

//   const open = Boolean(anchorEl);
//   const popoverId = open ? 'simple-popover' : undefined;

//   return (
//     <Box sx={{ mt: 4 }}>
//       <Box display="flex" justifyContent="space-between" mr="6px" alignItems="center">
//         <Typography fontSize={14} fontWeight={600} mb="8px" ml="13px">
//           Email Address (Required)
//         </Typography>
//         <FormControlLabel
//           control={<Switch name="small" size="small" />}
//           label="Map"
//           labelPlacement="start"
//         />
//       </Box>
//       <Box
//         sx={{
//           border: '1px solid rgba(0, 0, 0, 0.23)',
//           borderRadius: '4px',
//           padding: '4px',
//           minHeight: '56px',
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '4px',
//           alignItems: 'center',
//           '&:hover': {
//             borderColor: 'rgba(0, 0, 0, 0.87)',
//           },
//         }}
//         onClick={handleAddTag}
//       >
//         {tags.map((tag, index) => (
//           <Tooltip key={index} title={tag.actualValue} arrow placement="top">
//             <Chip
//               variant="soft"
//               color={tag.type === 'custom' ? 'default' : 'info'}
//               size="small"
//               label={tag.value}
//               onDelete={() => handleDeleteTag(index)}
//               style={{ minWidth: 'auto', width: 'auto' }}
//             />
//           </Tooltip>
//         ))}
//         <TextField
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyDown={handleKeyDown}
//           placeholder="+ Enter text or map data."
//           variant="standard"
//           inputRef={inputRef}
//           InputProps={{
//             disableUnderline: true,
//             endAdornment: <InputAdornment position="Start" />,
//           }}
//           sx={{
//             flex: 1,
//             '& input': {
//               padding: '4px',
//               fontSize: '1rem',
//             },
//           }}
//         />
//       </Box>
//       <Popover
//         id={popoverId}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClosePopover}
//         anchorOrigin={{
//           vertical: popoverPosition,
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: popoverPosition === 'bottom' ? 'top' : 'bottom',
//           horizontal: 'left',
//         }}
//         sx={{
//           '& .MuiPopover-paper': {
//             width: anchorEl ? anchorEl.clientWidth : 'auto',
//             maxHeight: popoverMaxHeight,
//             overflowY: 'auto',
//           },
//         }}
//       >
//         <Box sx={{ p: 2 }}>
//           <Typography variant="subtitle1" sx={{ mb: 1 }}>
//             Insert Data from Previous Step
//           </Typography>
//           <TextField
//             fullWidth
//             size="small"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//             placeholder="Search & Map Data..."
//             variant="outlined"
//           />
//           <Accordion sx={{ mt: '10px' }}>
//             <AccordionSummary
//               expandIcon={<Iconify icon="jam:chevron-down" width={16} />}
//               aria-controls="panel1a-content"
//               id="panel1a-header"
//             >
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Avatar
//                   variant="circle"
//                   src="https://d23j5fl26hha5c.cloudfront.net/images/1590489835035_1590663162-google-sheets-64.png"
//                   sx={{
//                     p: 1,
//                     width: 36,
//                     height: 36,
//                     bgcolor: 'background.neutral',
//                     border: '1px solid #D4E2FF',
//                   }}
//                 />
//                 <Typography fontWeight={700}>
//                   1. Webhook by Pabbly: Catch Webhook (Preferred)
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <List>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() => handleSelectAccordionContent({
//                     key: 'webhook_data',
//                     value: 'Sample webhook response',
//                     id: 'webhook1'
//                   })}
//                 >
//                   <ListItemText primary="Webhook Data" />
//                 </ListItem>
//                 <Divider />
//                 <ListItem
//                   button
//                   onClick={() => handleSelectAccordionContent({
//                     key: 'response_body',
//                     value: 'Response content',
//                     id: 'webhook2'
//                   })}
//                 >
//                   <ListItemText primary="Response Body" />
//                 </ListItem>
//               </List>
//             </AccordionDetails>
//           </Accordion>
//         </Box>
//       </Popover>
//       <FormHelperText sx={{ ml: '13px' }}>Enter the email address.</FormHelperText>
//     </Box>
//   );
// }
