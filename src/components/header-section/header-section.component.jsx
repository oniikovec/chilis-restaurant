import { HeaderContainer, HeaderImageContainer, HeaderTextContainer, HeaderImage, HeaderInfoContainer, HeaderInfo, HeaderH1, HeaderH2, HeaderInfoRow, HeaderInfoRowLeft, HeaderInfoRowRight } from './header-section.styles'
import { BsPinMapFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'


const HeaderSection = () => {

  return (
    <>
      <HeaderContainer>
        <HeaderImageContainer>
          <HeaderImage />
        </HeaderImageContainer>
        <HeaderTextContainer>
          <HeaderInfoContainer>
            <HeaderH1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.6, duration: 2}}>CHUŤ <span style={{color: "green" }}>ME</span><span style={{color: "white" }}>XI</span><span style={{color: "red" }}>KA</span></HeaderH1>
            <HeaderH2 initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.6, duration: 2}}>V DOLNÍ POUSTEVNĚ</HeaderH2>
            <HeaderInfo>
              <HeaderInfoRow>
                <HeaderInfoRowLeft>
                  <i><BsPinMapFill/></i>
                </HeaderInfoRowLeft>
                <HeaderInfoRowRight>
                  <p>LOBENDAVSKÁ 184</p>
                  <p>407 82 DOLNÍ POUSTEVNA</p>
                  <a href="tel:+420777888999"><span>+420 777 888 999</span></a>
                  <br/>
                  <a href="mailto:chilisrestaurant@seznam.cz"><span>chilisrestaurant@seznam.cz</span></a>
                </HeaderInfoRowRight>
              </HeaderInfoRow>
              <HeaderInfoRow>
                <HeaderInfoRowLeft>
                  <i><AiOutlineClockCircle/></i>
                </HeaderInfoRowLeft>
                <HeaderInfoRowRight>
                  <p><span>PO:</span> ZAVŘENO</p>
                  <p><span>ÚT:</span> ZAVŘENO</p>
                  <p><span>ST:</span> 11:00-22:00</p>
                  <p><span>ČT:</span> 11:00-22:00</p>
                  <p><span>PÁ:</span> 11:00-0:00</p>
                  <p><span>SO:</span> 11:00-0:00</p>
                  <p><span>NE:</span> 11:00-22:00</p>
                </HeaderInfoRowRight>
              </HeaderInfoRow>
            </HeaderInfo>
          </HeaderInfoContainer>
        </HeaderTextContainer>
      </HeaderContainer>
    </>
  )
}

export default HeaderSection