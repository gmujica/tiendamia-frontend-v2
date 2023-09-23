import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tiendamia Challenge
          </Typography>
          <Link to={'/'} style={{ textDecoration: "none" }}> <Button color="inherit">Orders</Button></Link>
          <Link to={'/items'} style={{ textDecoration: "none" }}> <Button color="inherit">Items</Button></Link>
          <Link to={'/reports'} style={{ textDecoration: "none" }}><Button color="inherit">Report 1</Button></Link>
          <Link to={'/reports'} style={{ textDecoration: "none" }}><Button color="inherit">Report 2</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}