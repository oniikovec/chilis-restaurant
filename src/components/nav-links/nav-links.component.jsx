import { NavLinksContainer, Navlink, NavSocialsContainer, NavSocial, NavPhoneNumberContainer, NavPhoneNumber } from './nav-links.styles'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { FaPhoneAlt } from 'react-icons/fa'


const NavLinks = () => {

  const animateFrom = { opacity: 0, y: -20 }
  const animateTo = { opacity: 1, y: 0 }

  return (
    <>
      <NavLinksContainer>
        <Navlink to="/menu" initial={animateFrom} animate={animateTo} transition={{delay: 0.3}}>MENU</Navlink>
        <Navlink to="/galerie" initial={animateFrom} animate={animateTo} transition={{delay: 0.4}}>GALERIE</Navlink>
      </NavLinksContainer>
      <NavSocialsContainer>
        <NavSocial href="https://www.facebook.com/chilisdolnipoustevna" initial={animateFrom} animate={animateTo} transition={{delay: 0.6}}><FaFacebookF /></NavSocial>
        <NavSocial href="https://www.facebook.com/chilisdolnipoustevna" initial={animateFrom} animate={animateTo} transition={{delay: 0.6}}><FaInstagram /></NavSocial>
        <NavSocial href="https://bit.ly/3P9jgJj" initial={animateFrom} animate={animateTo} transition={{delay: 0.6}}><FiMapPin /></NavSocial>
      </NavSocialsContainer>
      <NavPhoneNumberContainer>
        <NavPhoneNumber href="tel:+420777888999" initial={animateFrom} animate={animateTo} transition={{delay: 0.6}}><FaPhoneAlt /> +420 777888999</NavPhoneNumber>
      </NavPhoneNumberContainer>
    </>
  )
}

export default NavLinks