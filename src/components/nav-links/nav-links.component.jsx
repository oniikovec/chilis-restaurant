import { NavLinksContainer, Navlink, NavSocialsContainer, NavSocial, NavPhoneNumberContainer, NavPhoneNumber } from './nav-links.styles'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { FaPhoneAlt } from 'react-icons/fa'

const NavLinks = () => {

  return (
    <>
      <NavLinksContainer>
        <Navlink to="/">MENU</Navlink>
        <Navlink to="/">GALERIE</Navlink>
        <Navlink to="/">O RESTAURACI</Navlink>
      </NavLinksContainer>
      <NavSocialsContainer>
        <NavSocial to="/"><FaFacebookF /></NavSocial>
        <NavSocial to="/"><FaInstagram /></NavSocial>
        <NavSocial to="/"><FiMapPin /></NavSocial>
      </NavSocialsContainer>
      <NavPhoneNumberContainer>
        <NavPhoneNumber to="/"><FaPhoneAlt /> 777888999</NavPhoneNumber>
      </NavPhoneNumberContainer>
    </>
  )
}

export default NavLinks