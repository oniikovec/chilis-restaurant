import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  font-family: 'Arvo', serif;
  height: 15vh;
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
}`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 20%;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`
export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`
export const Navlink = styled(Link)`
  padding: 10px 30px;
  font-size: 16px ;
  font-weight: 700;
  cursor: pointer;
  color: white;
  transition: color 0.4s;

    &:hover {
      color: #856B39;
    }
`

export const NavSocials = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`
export const NavSocial = styled(Link)`
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
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`
export const NavPhoneNumber = styled(NavSocial)`
  border: 1px solid #856B39;
  color: #856B39;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: black;
    background-color: #856B39;
  }
`

