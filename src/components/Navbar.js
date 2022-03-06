import { TabsContext } from '@mui/base'
import { AppBar, Toolbar, Tab, Tabs } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Navbar = (props) => {
  const [value, setValue] = useState('1')

  const handleChange = (e, newValue) => {
    setValue(newValue)

    if (newValue === '1') {
      props.homeRefProp.current.scrollIntoView()
    } else if (newValue === '2') {
      props.projectsRefProp.current.scrollIntoView()
    } else {
      props.aboutRefProp.current.scrollIntoView()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkViewport)

    return () => {
      window.removeEventListener('scroll', checkViewport)
    }
  })

  const tabMargin = { marginRight: { xs: '0px', sm: '15px', md: '40px' } }
  const tabsGroup = {
    marginLeft: { xs: '0px', sm: '30px', md: '60px' },
    marginTop: '15px',
    position: 'fixed',
  }

  function checkViewport(e) {
    const homePage = document.querySelector('#home')
    const projectsPage = document.querySelector('#projects')
    const aboutPage = document.querySelector('#about')
    const rectHome = homePage.getBoundingClientRect()
    const rectProjects = projectsPage.getBoundingClientRect()
    const rectAbout = aboutPage.getBoundingClientRect()

    if (isInViewport(rectHome)) {
      setValue('1')
    } else if (isInViewport(rectProjects)) {
      setValue('2')
    } else if (isInViewport(rectAbout)) {
      setValue('3')
    }
  }

  function isInViewport(rect) {
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight + 2000 ||
          document.documentElement.clientHeight + 2000) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  return (
    <>
      <Toolbar sx={{ zIndex: 105 }}>
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
        </Tabs>
      </Toolbar>
    </>
  )
}

export default Navbar
