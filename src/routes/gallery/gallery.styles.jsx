import styled from 'styled-components'

export const GalleryContainer = styled.div`
  padding-top: 110px;
  color: papayawhip;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #ad9a74;
  }
  `
  export const GalleryImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 200px);
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
  
    @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(5, 200px);
    }
    @media screen and (max-width: 1366px) {
      grid-template-columns: repeat(5, 200px);
    }
    @media screen and (max-width: 1280px) {
      grid-template-columns: repeat(4, 200px);
    }
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 200px);
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(3, 140px);
      grid-gap: 10px;
    }
    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(3, 100px);
    }
    @media screen and (max-width: 330px) {
      grid-template-columns: repeat(2, 100px);
    }
  `

  export const GalleryThumbnail = styled.img`
    width: 200px;
    height: 150px;
    cursor: pointer;
    box-shadow: 0px 1px 5px #856B39;

    &:hover {
      transition: box-shadow 0.3s, transform 0.3s;
      box-shadow: 0px 1px 10px #856B39;
      transform: scale(1.05);
    }

    @media screen and (max-width: 768px) {
      width: 140px;
      height: 105px;
    }
    @media screen and (max-width: 480px) {
      width: 100px;
      height: 75px;
    }
  `