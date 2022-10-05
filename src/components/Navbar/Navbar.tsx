import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Modal } from '../Modal'
import { modalOpenSubject$ } from '../Modal/Modal'
import { FavoriteTable } from './FavoriteTable'

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {

  const handleClick = () => {
    modalOpenSubject$.setSubject = true
  }
  
  return (
    <>
    <Modal>
      <FavoriteTable />
    </Modal>
     <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Top Scorer Challenge
          </Typography>
          <Button 
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
          Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar