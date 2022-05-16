import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const GalleryPreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-color: #241f18;
  
  @media screen and (max-width: 1600px) {
    height: 220px;
  }
  @media screen and (max-width: 1366px) {
    height: 210px;
  }
  @media screen and (max-width: 1280px) {
    height: 180px;
  }
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 160px);
    height: 270px;
    
  }
  @media screen and (max-width: 768px) {
    
  }
  @media screen and (max-width: 480px) {
    
  }
  @media screen and (max-width: 290px) {
    
  }
`

export const GalleryThumbnail = styled.img`
  width: 200px;
  height: 150px;
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0px 1px 5px #856B39;

  &:hover {
    transition: box-shadow 0.3s, transform 0.3s;
    box-shadow: 0px 1px 10px #856B39;
    transform: scale(1.05);
  }

  @media screen and (max-width: 1600px) {
    width: 190px;
    height: 143px;
  }
  @media screen and (max-width: 1366px) {
    width: 160px;
    height: 120px;
  }
  @media screen and (max-width: 1280px) {
    width: 130px;
    height: 98px;
  }
  @media screen and (max-width: 1024px) {
    
  }
  @media screen and (max-width: 768px) {
    
  }
  @media screen and (max-width: 480px) {
    
  }
  @media screen and (max-width: 290px) {
    
  }
`

export const OpenGalleryButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  margin: 0 10px;
  opacity: 0.5;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0px 1px 5px #856B39;
  color: #ad9a74;
  transition: color 0.4s, background-color 0.4s;

  &:hover {
    color: black;
    background-color: #856B39;
    border: 1px solid #856B39;
    transition: transform 0.3s;
    transform: scale(1.05);
  }

  @media screen and (max-width: 1600px) {
    width: 190px;
    height: 143px;
  }
  @media screen and (max-width: 1366px) {
    width: 160px;
    height: 120px;
  }
  @media screen and (max-width: 1280px) {
    width: 130px;
    height: 98px;
  }
  @media screen and (max-width: 1024px) {
    
  }
  @media screen and (max-width: 768px) {
    
  }
  @media screen and (max-width: 480px) {
    
  }
  @media screen and (max-width: 290px) {
    
  }
`