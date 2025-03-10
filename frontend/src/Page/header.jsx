import * as React from 'react';
import { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Avatar, Button, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const pages = ['Home', 'Services', 'About', 'Contact'];
const serviceOptions = ['Air Freight', 'Sea Freight', 'Land Transport', 'Warehousing'];
const settings = ['Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const location = useLocation();

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleOpenServicesMenu = (event) => setAnchorElServices(event.currentTarget);
  const handleCloseServicesMenu = () => setAnchorElServices(null);

  const getButtonStyle = (page) => ({
    color: location.pathname === `/${page.toLowerCase()}` ? '#ff5d1b' : 'white',
    textTransform: 'none',
    padding: '5px 16px',
    borderBottom: location.pathname === `/${page.toLowerCase()}` ? '2px solid #ff5d1b' : 'none',
    fontSize: 'medium',
    fontFamily: '"Changa", sans-serif',
  });

  return (
    <AppBar position="sticky" sx={{ background: "#000", fontFamily: '"Changa", sans-serif' }}>
      <Container maxWidth="xl" sx={{ paddingTop: '5px', paddingBottom: '5px' }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://i.ibb.co/gMKsF5Fd/image-1.webp" alt="Logo" 
              style={{ height: '70px', marginRight: '10px', padding: '15px' }} />

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 3 }}>
              {pages.map((page) => (
                page === 'Services' ? (
                  <Box key={page} onMouseEnter={handleOpenServicesMenu} onMouseLeave={handleCloseServicesMenu}>
                    <Button sx={getButtonStyle(page)}>Services</Button>
                    <Menu anchorEl={anchorElServices} open={Boolean(anchorElServices)}
                      onClose={handleCloseServicesMenu} MenuListProps={{ onMouseLeave: handleCloseServicesMenu }} 
                      sx={{ mt: '10px' }}>
                      {serviceOptions.map((service) => (
                        <MenuItem key={service} onClick={handleCloseServicesMenu}>
                          <Link to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                            style={{ color: 'inherit', textDecoration: 'none', fontFamily: '"Changa", sans-serif' }}>
                            {service}
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button key={page} sx={getButtonStyle(page)}>
                    <Link to={`/${page.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none', fontFamily: '"Changa", sans-serif' }}>
                      {page}
                    </Link>
                  </Button>
                )
              ))}
            </Box>
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton size="large" aria-label="menu" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
              {pages.map((page) => (
                page === 'Services' ? (
                  <MenuItem key={page} onClick={handleOpenServicesMenu}>
                    <Typography sx={{ fontFamily: '"Changa", sans-serif' }}>Services</Typography>
                  </MenuItem>
                ) : (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={`/${page.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none', fontFamily: '"Changa", sans-serif' }}>
                      <Typography>{page}</Typography>
                    </Link>
                  </MenuItem>
                )
              ))}
            </Menu>
          </Box>

          {/* Right Section - Track Order & Profile */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button sx={{
                backgroundColor: '#ff5d1b',
                borderRadius: '35px',
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'none',
                padding: '8px 40px',
                marginRight: 4,
                '&:hover': { backgroundColor: '#ff5d1b' },
                display: { xs: 'none', sm: 'inline-flex' },
                fontSize: 'smaller',
                fontFamily: '"Changa", sans-serif',
              }} component={Link} to="/track-order">
              TRACK ORDER
            </Button>

            {/* User Profile */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="https://i.ibb.co/Rk2BPS67/ssmvtnogc7ue0jufjd03h6mj89.png" />
              </IconButton>
            </Tooltip>
            <Menu anchorEl={anchorElUser} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link to={`/${setting.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none', fontFamily: '"Changa", sans-serif' }}>
                    <Typography>{setting}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
