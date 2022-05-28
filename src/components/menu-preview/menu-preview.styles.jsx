import styled from 'styled-components'
import menuPreviewImage from '../../assets/menu-preview-image4.jpg'
import { Link } from 'react-router-dom'

export const MenuPreviewContainer = styled.div`
  background-image: url(${menuPreviewImage});
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: 50%;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;


  h1 {
    text-align: center;
    width: 50%;
    max-width: 850px;
    margin: 25px auto;
    font-size: 2.4rem;
    padding-bottom: 30px;
  }

  p {
    width: 60%;
    max-width: 850px;
    margin: 0px auto;
    margin-bottom: 30px;
    font-size: 1.7rem;
    line-height: 1.5;
  }

  @media screen and (max-width: 1366px) {
    h1 {
      width: 70%;
    }
    p {
      width: 70%;
    }
  }
  @media screen and (max-width: 1024px) {
    h1 {
      width: 75%;
    }
    p {
      width: 75%;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 50px 0;
    h1 {
      width: 80%;
      font-size: 2rem;
    }
    p {
      width: 80%;
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 480px) {
    
    h1 {
      width: 85%;
      font-size: 1.8rem;
    }
    p {
      width: 85%;
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 333px) {
    
    h1 {
      width: 90%;
      font-size: 1.6rem;
    }
    p {
      width: 90%;
      font-size: 1.2rem;
    }
  }
`

export const MenuLink = styled(Link)`
  color: #ad9a74;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #856B39;
  }
`