import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from './img/logo.png';
import Cities from './Cities';
import Call from './Calls' ;
import Conect from './Conect';
import { Grid } from '@mui/material';



function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" color='' elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Box sx={{display:{xs: 'none', md: 'flex', sm:'none'}}}>
        <img src={logo} alt='' style={{width:'50px', }}/>
        </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex',  sm:'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft:'10px'
            }}
          >

             أسامه نبيل البلعوط 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',  sm:'flex' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', sm:'block' },
              }}
            >
              <Box>
                <Grid  sx={{marginBottom:'1rem', marginTop:'3rem'}}><Cities/></Grid>
                <Grid  sx={{marginBottom:'3rem',textAlign:'center' , marginTop:'3rem'}}><Call/></Grid>
               
               
              </Box>
             
            </Menu>
          </Box>
          <Box sx={{display:{xs: 'flex', md: 'none',  sm:'flex'}}}>
        <img src={logo} alt="" style={{width:'50px', }}/>
        </Box>  
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none', sm:'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft:'10px'
            }}
          >
                
           <h6>   أسامه نبيل البلعوط </h6>
          </Typography>
        
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', sm:'flex'  }}}>
            <Box sx={{marginLeft:'auto',display: { xs: 'none', md: 'flex', sm:'flex'  } }}>
              <Cities />
              <Box sx={{marginLeft:'auto',marginLeft:'0.5rem',display: { xs: 'none', md: 'flex', sm:'flex'  }}}>
              <Call/>
              </Box>
              
              </Box>
                
              
          
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Cities/>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
