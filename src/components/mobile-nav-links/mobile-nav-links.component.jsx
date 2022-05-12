import { MobileNavLinksContainer, MobileNavlink, MobileNavSocialsContainer, MobileNavSocial, NavPhoneNumberContainer, NavPhoneNumber } from './mobile-nav-links.styles'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { FaPhoneAlt } from 'react-icons/fa'

const MobileNavLinks = (props) => {

  const onClickHandler = () => {
    props.isMobile && props.closeHamburgerMenu()
  }

  const animateFrom = { opacity: 0, y: -40 }
  const animateTo = { opacity: 1, y: 0 }
  

  return (
    <>
      <MobileNavLinksContainer initial={{opacity: 0}} animate={{opacity: 1}}>
        <MobileNavlink to="/menu" initial={animateFrom} animate={animateTo} transition={{delay: 0.05}} onClick={onClickHandler}>MENU</MobileNavlink>
        <MobileNavlink to="/galerie" initial={animateFrom} animate={animateTo} transition={{delay: 0.10}} onClick={onClickHandler}>GALERIE</MobileNavlink>
        <MobileNavlink to="/o-restauraci" initial={animateFrom} animate={animateTo} transition={{delay: 0.20}} onClick={onClickHandler}>O RESTAURACI</MobileNavlink>
        <NavPhoneNumberContainer>
          <NavPhoneNumber href="tel:+420777888999" initial={animateFrom} animate={animateTo} transition={{delay: 0.30}} onClick={onClickHandler}><FaPhoneAlt /> +420 777888999</NavPhoneNumber>
        </NavPhoneNumberContainer>
        <MobileNavSocialsContainer>
          <MobileNavSocial href="https://www.facebook.com/chilisdolnipoustevna" initial={animateFrom} animate={animateTo} transition={{delay: 0.40}} onClick={onClickHandler}><FaFacebookF /></MobileNavSocial>
          <MobileNavSocial href="https://www.facebook.com/chilisdolnipoustevna" initial={animateFrom} animate={animateTo} transition={{delay: 0.40}} onClick={onClickHandler}><FaInstagram /></MobileNavSocial>
          <MobileNavSocial href="https://bit.ly/3P9jgJj" initial={animateFrom} animate={animateTo} transition={{delay: 0.40}} onClick={onClickHandler}><FiMapPin /></MobileNavSocial>
        </MobileNavSocialsContainer>
      </MobileNavLinksContainer>
    </>
  )
}

export default MobileNavLinks