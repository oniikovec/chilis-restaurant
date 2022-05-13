import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const GalleryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  background-color: papayawhip;
`


export const GalleryHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 60px;
  padding: 20px 0;
`
export const GalleryHeader = styled(Link)`
  font-family: 'Bitter', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ad9a74;
  z-index: 1;
`


export const GalleryImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 250px;
  padding: 0 40px;
  background-color: lightblue;
`
export const GalleryImage = styled.img`
  height: 200px;
  width: 200px;
  margin: 0 10px;
`

export const OpenGalleryButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: aquamarine;
  margin: 0 40px;
  font-size: 4rem;
  color: burlywood;
`
