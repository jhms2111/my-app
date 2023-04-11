import { useState } from 'react'

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import HomeIcon from '@mui/icons-material/Home'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

import { useHistory } from 'react-router-dom'



const Header = () => {
  
  const history = useHistory()

  const [ menuOpen, setMenuOpen ] = useState(false)

  const handleToggMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = route => {
    handleToggMenu()
    history.push(route)
  }


    return (
      <>
        <AppBar position="static" >
        <Toolbar >
          <IconButton  onClick={() => handleToggMenu()}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={() => handleToggMenu()}>
        <List>
          <ListItem button onClick={() => handleMenuClick('/')} >
            <ListItemIcon >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('customers')}>
            <ListItemIcon >
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText>Cadastro de clientes</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      </>
    )
}

export default Header