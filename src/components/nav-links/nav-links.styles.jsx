import styled from "styled-components";
import { motion } from 'framer-motion'

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 1280px) {
    justify-content: center;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
export const Navlink = styled(motion.a)`
  padding: 10px 30px;
  font-size: 16px ;
  font-weight: 700;
  cursor: pointer;
  color: white;
  transition: color 0.4s;

    &:hover {
      color: #856B39;
    }
  
    @media screen and (max-width: 1280px) {
      padding: 10px 15px;
  }
`

export const NavSocialsContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`
  export const NavSocial = styled(motion.a)`
  padding: 10px;
  font-size: 18px ;
  font-weight: 500;
  cursor: pointer;
  color: #ad9a74;
  transition: color 0.4s;

    &:hover {
      color: #856B39;
    }
`
export const NavPhoneNumberContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`
export const NavPhoneNumber = styled(motion.a)`
  padding: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid #856B39;
  color: #856B39;
  transition: color 0.4s, background-color 0.4s;

  &:hover {
    color: black;
    background-color: #856B39;
  }
  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
  }

`