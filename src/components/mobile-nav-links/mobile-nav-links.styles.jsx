import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

export const MobileNavLinksContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: rgb(24, 24, 24, 0.9);
  width: 100%;
  height: 430px;
  padding-top: 110px;
  top: 0;
  right: 0;
  z-index: 1;

  @media screen and (min-width: 900px) {
    display: none;
  }
`
export const MobileNavlink = styled(motion(Link))`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 45px;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  color: white;
  
  &:hover {
    color: #856B39;
  }
  @media screen and (min-width: 300px) {
    font-size: 1rem;
  }
`

export const MobileNavSocialsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MobileNavSocial = styled(motion.a)`
  padding: 10px 60px;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  color: #ad9a74;
  
  &:hover {
    color: #856B39;
  }
  @media screen and (max-width: 330px) {
    font-size: 1rem;
    padding: 10px 30px;
  }
`

export const NavPhoneNumberContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`
export const NavPhoneNumber = styled(motion.a)`
  padding: 10px 50px;
  margin: 25px;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid #856B39;
  color: #856B39;

  &:hover {
    color: black;
    background-color: #856B39;
  }

  @media screen and (max-width: 300px) {
    font-size: 0.9rem;
    padding: 10px 40px;
    margin: 0;
  }
`