import styled from "styled-components";
import { Link } from "react-router-dom";

export const MobileNavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #181818;
  width: 40%;
  top: 110px;
  right: 5px;
  z-index: 5;

  @media screen and (min-width: 900px) {
    display: none;
  }
`
export const MobileNavlink = styled(Link)`
  padding: 15px;
  font-size: 16px ;
  font-weight: 700;
  cursor: pointer;
  color: white;
  transition: color 0.4s;

  &:hover {
    color: #856B39;
  }
`

export const MobileNavSocialsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`
export const MobileNavSocial = styled(Link)`
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
  justify-content: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`
export const NavPhoneNumber = styled(Link)`
  padding: 10px;
  font-size: 18px ;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid #856B39;
  color: #856B39;
  transition: color 0.4s, background-color 0.4s;

  &:hover {
    color: black;
    background-color: #856B39;
  }
`