import React from 'react';
import { AppBar, Box , Button, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Counter app using Recoil
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Header;