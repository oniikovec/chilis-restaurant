import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import chilisLogo from '../../assets/logo.png'
import useClickOutside from '../../hooks/useClickOutside'

import NavLinks from '../../components/nav-links/nav-links.component'
import MobileNavLinks from '../../components/mobile-nav-links/mobile-nav-links.component'


import { Squash as Hamburger } from 'hamburger-react'

import { LogoContainer, NavigationContainer, HamburgerContainer, Logo } from './navigation.styles'
import './navigation.styles'



const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false)

  const closeHamburgerMenu = () => {
    setIsOpen(false)
  }
  // close hamburger on click outside
  const domNode = useClickOutside(() => {
    setIsOpen(false);
  });


  return (
    <>
      <NavigationContainer ref={domNode}>
        <LogoContainer to='/'><Logo src={chilisLogo} alt='logo'/></LogoContainer>
        { isOpen ? (
            <MobileNavLinks isMobile={true} closeHamburgerMenu={closeHamburgerMenu}/>
          ) : (
            <NavLinks isMobile={true} closeHamburgerMenu={closeHamburgerMenu}/>
          )
        }
        <HamburgerContainer>
          <Hamburger toggled={isOpen} toggle={setIsOpen} rounded color='#ad9a74' label="Show menu"/>
        </HamburgerContainer>
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation