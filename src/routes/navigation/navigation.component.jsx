import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import chilisLogo from '../../assets/logo.png'
import { LogoContainer, NavigationContainer, NavLinks, Navlink, NavSocials, NavSocial, NavPhoneNumberContainer, NavPhoneNumber } from './navigation.styles'
import { FaInstagram, FaFacebookF, FaPhoneAlt } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'


const Navigation = () => {

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer className='logo-container' to='/'>
          <img src={chilisLogo} alt='logo'/>
        </LogoContainer>
        <NavLinks>
          <Navlink to="/">MENU</Navlink>
          <Navlink to="/">O RESTAURACI</Navlink>
          <Navlink to="/">GALERIE</Navlink>
          <Navlink to="/">KDE NÁS NAJDETE</Navlink>
        </NavLinks>
        <NavSocials>
          <NavSocial to="/"><FaFacebookF /></NavSocial>
          <NavSocial to="/"><FaInstagram /></NavSocial>
          <NavSocial to="/"><FiMapPin /></NavSocial>
        </NavSocials>
        <NavPhoneNumberContainer>
          <NavPhoneNumber to="/"><FaPhoneAlt /> +420 777888999</NavPhoneNumber>
        </NavPhoneNumberContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation