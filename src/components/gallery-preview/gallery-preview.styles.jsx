import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const GalleryPreviewContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 15px;
  margin-bottom: 200px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 250px);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 220px);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 150px);
  }
  @media screen and (max-width: 333px) {
    grid-template-columns: repeat(2, 120px);
  }
`

export const GalleryThumbnail = styled(motion.img)`
  
  cursor: pointer;
  box-shadow: 1px 1px 3px #856B39;

  &:hover {
    transition: box-shadow 0.3s, transform 0.3s;
    box-shadow: 1px 1px 7px #856B39;
    transform: scale(1.03);
  }

  @media screen and (max-width: 1280px) {
    width: 180px;
    height: 135px;
  } 
  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 112px;
  }
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 188px;
  }
  @media screen and (max-width: 600px) {
    width: 220px;
    height: 165px;
  }
  @media screen and (max-width: 480px) {
    width: 150px;
    height: 113px;
  }
  @media screen and (max-width: 333px) {
    width: 120px;
    height: 90px;
  }
`

export const OpenGalleryButton = styled(motion(Link))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 150px;
  opacity: 0.5;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0px 1px 5px #856B39;
  color: #ad9a74;

  &:hover {
    color: black;
    background-color: #856B39;
    transition: color 0.4s, background-color 0.4s;
  }
  &:active {
    background-color: #57492b;
  }

  @media screen and (max-width: 1280px) {
    width: 180px;
    height: 135px;
  }
  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 112px;
  }
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 188px;
  }
  @media screen and (max-width: 600px) {
    width: 220px;
    height: 165px;
  }
  @media screen and (max-width: 480px) {
    width: 150px;
    height: 113px;
  }
  @media screen and (max-width: 333px) {
    width: 120px;
    height: 90px;
  }
`