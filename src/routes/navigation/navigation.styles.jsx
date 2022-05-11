import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  font-family: 'Arvo', serif;
  height: 110px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  `

export const LogoContainer = styled(Link)`
  order: 0;
  height: 100%;
  width: 20%;
  padding: 20px 10px;
  z-index: 10;

  @media screen and (max-width: 300px) {
    padding: 15px 5px;
  }
`

export const Logo = styled.img`

  @media screen and (max-width: 300px) {
    height: 85%;
    padding: 5px 0px;
  }
`

export const HamburgerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 30%;
  order: 2;
  z-index: 10;

  @media screen and (min-width: 901px) {
    display: none;  
  }

`