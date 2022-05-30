import styled from 'styled-components'

export const GalleryContainer = styled.div`
  width: 80%;
  min-width: 260px;
  padding-top: 110px;
  padding-bottom: 100px;
  margin: 0 auto;

  @media screen and (max-width: 1366px) {
    width: 85%;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`

export const GalleryHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    padding-top: 50px;
    margin: 0;
    color: #ad9a74;
  }
  p {
    font-size: 1.5rem;
    color: #ad9a74;
    margin: 10px 0;
    padding-bottom: 50px;
  }
`

  export const GalleryImagesContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 20px;

    @media screen and (max-width: 1366px) {
      grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
    }
    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(auto-fill, 300px);
    }
  `

  export const GalleryThumbnail = styled.img`
    width: 300px;
    height: 225px;
    cursor: pointer;
    box-shadow: 0px 1px 5px #856B39;

    &:hover {
      transition: box-shadow 0.3s, transform 0.3s;
      box-shadow: 0px 1px 10px #856B39;
      transform: scale(1.03);
    }

    @media screen and (max-width: 1366px) {
      width: 200px;
      height: 150px;
    }
    @media screen and (max-width: 768px) {
      
    }
    @media screen and (max-width: 480px) {
      width: 300px;
      height: 225px;
    }
    @media screen and (max-width: 350px) {
      width: 250px;
      height: 188px;
    }
  `