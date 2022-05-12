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
        <Navlink to="/menu" initial={animateFrom} animate={animateTo} transition={{delay: 0.1}}>MENU</Navlink>
        <Navlink to="/galerie" initial={animateFrom} animate={animateTo} transition={{delay: 0.2}}>GALERIE</Navlink>
        <Navlink to="/o-restauraci" initial={animateFrom} animate={animateTo} transition={{delay: 0.3}}>O RESTAURACI</Navlink>
      </NavLinksContainer>
      <NavSocialsContainer>
        <NavSocial href="https://www.facebook.com/chilisdolnipoustevna" initial={animateFrom} animate={animateTo} transition={{delay: 0.40}}><FaFacebookF /></NavSocial>
        <NavSocial href="https://www.facebook.com/chilisdolnipoustevna" initial={animateFrom} animate={animateTo} transition={{delay: 0.50}}><FaInstagram /></NavSocial>
        <NavSocial href="https://bit.ly/3P9jgJj" initial={animateFrom} animate={animateTo} transition={{delay: 0.60}}><FiMapPin /></NavSocial>
      </NavSocialsContainer>
      <NavPhoneNumberContainer>
        <NavPhoneNumber href="tel:+420777888999" initial={animateFrom} animate={animateTo} transition={{delay: 0.70}}><FaPhoneAlt /> +420 777888999</NavPhoneNumber>
      </NavPhoneNumberContainer>
    </>
  )
}

export default NavLinks