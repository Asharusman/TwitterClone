import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
const Centrebar = () => {
  return (
    <Paper
    //   component="form"
      sx={{ display:'flex',justifyContent:'center' , p: '2px 4px',  width: 700 }}
    > 
    <Box sx={{borderRadius:20 ,width:500,height:50, backgroundColor:'#EFF3F4'}}><IconButton type="button" sx={{ p: '10px' }} aria-label="search">
    <SearchIcon />
  </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Twitter"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      </Box>
      <ListItemIcon sx={{mt:1,ml:2}}>
              <SettingsIcon />
            </ListItemIcon>
    </Paper>
  )
}

export default Centrebar
