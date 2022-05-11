import { MobileNavLinksContainer, MobileNavlink, MobileNavSocialsContainer, MobileNavSocial, NavPhoneNumberContainer, NavPhoneNumber } from './mobile-nav-links.styles'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { FaPhoneAlt } from 'react-icons/fa'

const MobileNavLinks = () => {

  return (
    <>
      <MobileNavLinksContainer>
        <MobileNavlink to="/">MENU</MobileNavlink>
        <MobileNavlink to="/">GALERIE</MobileNavlink>
        <MobileNavlink to="/">O RESTAURACI</MobileNavlink>
        <MobileNavSocialsContainer>
          <MobileNavSocial to="/"><FaFacebookF /></MobileNavSocial>
          <MobileNavSocial to="/"><FaInstagram /></MobileNavSocial>
          <MobileNavSocial to="/"><FiMapPin /></MobileNavSocial>
        </MobileNavSocialsContainer>
        <NavPhoneNumberContainer>
          <NavPhoneNumber to="/"><FaPhoneAlt /> 777888999</NavPhoneNumber>
        </NavPhoneNumberContainer>
      </MobileNavLinksContainer>
    </>
  )
}

export default MobileNavLinks