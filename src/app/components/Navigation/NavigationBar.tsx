import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useLocation, useNavigate } from 'react-router-dom';
import { pages } from '../../models/pages';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff1744',
    },
  },
});

const NavigationBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const lastPathNode =
    location.pathname.split('/').pop()?.replace(/_/g, ' ') || '';

  const currentPageTitle = (currentPage: string) => {
    if (pages[currentPage]) {
      return pages[currentPage];
    } else if (currentPage) {
      return currentPage;
    } else {
      return 'Home';
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary" sx={{ borderRadius: '16px' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {currentPageTitle(lastPathNode)}
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => navigate('/Home')}
          >
            <HomeIcon />
          </IconButton>
        </Toolbar>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          autoFocus={false}
        >
          {Object.keys(pages).map((page) => (
            <MenuItem
              key={page}
              component="a"
              href={
                location.pathname.split('/').includes('preflop-range-solver')
                  ? `/${page}`
                  : `/preflop-range-solver/${page}`
              }
              onClick={handleClose}
            >
              <ListItemIcon>
                <Typography variant="inherit" color="inherit">
                  {pages[page]}
                </Typography>
              </ListItemIcon>
            </MenuItem>
          ))}
        </Menu>
      </AppBar>
    </ThemeProvider>
  );
};
export default NavigationBar;
