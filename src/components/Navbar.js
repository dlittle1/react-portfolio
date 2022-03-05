import { TabsContext } from '@mui/base'
import { AppBar, Toolbar, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

const Navbar = () => {
  const [value, setValue] = useState('1')

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const tabMargin = { marginRight: { xs: '0px', sm: '15px', md: '40px' } }
  const tabsGroup = {
    marginLeft: { xs: '0px', sm: '30px', md: '60px' },
    marginTop: '15px',
    position: 'fixed',
  }
  return (
    <>
      <Toolbar>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='secondary'
          TabIndicatorProps={{
            style: {
              display: 'none',
            },
          }}
          aria-label='tabs'
          sx={tabsGroup}
        >
          <Tab label='Home' value='1' sx={tabMargin} />
          <Tab label='Projects' value='2' sx={tabMargin} />
          <Tab label='About Me' value='3' sx={tabMargin} />
          <Tab label='Contact' value='4' />
        </Tabs>
      </Toolbar>
    </>
  )
}

export default Navbar
