import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const GalleryPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 200px);
  grid-gap: 20px;
  padding: 20px;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #241f18;
  
  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(6, 180px);
    grid-gap: 15px;
  }
  @media screen and (max-width: 1366px) {
    grid-template-columns: repeat(6, 160px);
  }
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(6, 130px);
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 150px);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 130px);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 130px);
  }
`

export const GalleryThumbnail = styled(motion.img)`
  width: 200px;
  height: 150px;
  cursor: pointer;
  box-shadow: 0px 1px 5px #856B39;

  &:hover {
    transition: box-shadow 0.3s, transform 0.3s;
    box-shadow: 0px 1px 10px #856B39;
    transform: scale(1.05);
  }

  @media screen and (max-width: 1600px) {
    width: 180px;
    height: 136px;
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
    width: 150px;
    height: 112px;
  }
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 98px;
  }
`

export const OpenGalleryButton = styled(Link)`
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
  transition: color 0.4s, background-color 0.4s;

  &:hover {
    color: black;
    background-color: #856B39;
    border: 1px solid #856B39;
    transition: transform 0.3s;
    transform: scale(1.05);
  }

  @media screen and (max-width: 1600px) {
    width: 180px;
    height: 136px;
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
    width: 150px;
    height: 112px;
  }
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 98px;
  }
`