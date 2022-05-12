import styled from "styled-components";
import { motion } from 'framer-motion'
import nachosImage from '../../assets/about-nachos.jpg'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top: 110px;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    top: 60px;
  }
`

export const HeaderTextContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  margin: 0 50px;

  @media screen and (max-width: 1280px) {
    margin: 0 35px;
  }
  @media screen and (max-width: 1024px) {
    margin: 0 10px;
  }
  @media screen and (max-width: 768px) {
    order: 2;
    padding: 0;
    margin: 0;
  }
`
export const HeaderH1 = styled(motion.h1)`
  font-family: 'Bitter', serif;
  color: #ad9a74;
  font-size: 4.5rem;
  font-weight: 900;
  margin: 0;

  @media screen and (max-width: 1280px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
  
`
export const HeaderH2 = styled(HeaderH1)`
  padding-bottom: 30px;
  font-size: 3rem;
  
  @media screen and (max-width: 1280px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`


export const HeaderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const HeaderInfoRow = styled.div`
  font-family: 'Bitter', serif;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  padding: 15px 0;
  line-height: 1.5rem;
  
  p {
    margin: 0;
  }

`

export const HeaderInfoRowLeft = styled.div`
  color: #856B39;
  font-size: 1.5rem;
  flex: 1;
  margin-right: 10px;
  
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-right: 30px;
  }
`
export const HeaderInfoRowRight= styled.div`
  flex: 10;

  span {
    color: #ad9a74;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2rem;
  }
`

export const HeaderImageContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin: 50px;
  @media screen and (max-width: 768px) {
    order: 1;
}
`
export const HeaderImage = styled(motion.div)`
  background-image: url(${nachosImage});
  position: relative;
	overflow: hidden;
	background-size: cover;
	background-position: 50%;
  height: 35vh;
  width: 100%;
  
  @media screen and (max-width: 768px) {
    height: 30vh;
    width: 100vw;
  }
`

