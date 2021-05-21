import React from 'react';
import './Topbar.css';
import { AppBar, Toolbar, Button } from '@material-ui/core'

export default function Topbar() {
  return (
    <>
      <AppBar position="relative" >
        <Toolbar>
          <Button variant="contained" color="primary">Info</Button>
          <Button variant="contained" color="secondary">Limpar</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
