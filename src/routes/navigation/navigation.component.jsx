import { useState, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import chilisLogo from '../../assets/logo.png'

import NavLinks from '../../components/nav-links/nav-links.component'
import MobileNavLinks from '../../components/mobile-nav-links/mobile-nav-links.component'

import { Squash as Hamburger } from 'hamburger-react'

import { LogoContainer, NavigationContainer, HamburgerContainer, Logo } from './navigation.styles'
import './navigation.styles'


const Navigation = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'><Logo src={chilisLogo} alt='logo'/></LogoContainer>
        { isOpen ? <MobileNavLinks /> : <NavLinks /> }
        <HamburgerContainer>
          <Hamburger toggled={isOpen} toggle={setOpen} rounded color='white' />
        </HamburgerContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation