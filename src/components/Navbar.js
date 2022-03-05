import { TabsContext } from '@mui/base'
import { AppBar, Box, Toolbar, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

const Navbar = () => {
  const [value, setValue] = useState('one')

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor='secondary'
            indicatorColor='secondary'
            aria-label='tabs'
          >
            <Tab label='Projects' value='1' />
            <Tab label='About Me' value='2' />
            <Tab label='Contact' value='3' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
