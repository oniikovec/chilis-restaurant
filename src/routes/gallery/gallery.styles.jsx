import styled from 'styled-components'

export const GalleryContainer = styled.div`
  width: 80%;
  padding-top: 110px;
  margin: 0 auto;
  h1 {
    color: #ad9a74;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
    @media screen and (max-width: 480px) {
      
  }
    @media screen and (max-width: 330px) {

  }
`

export const GalleryHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    padding: 50px 0;
  }
  p {
    font-size: 1rem;
  }
`

  export const GalleryImagesContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
  `

  export const GalleryThumbnail = styled.img`
    /* width: 200px;
    height: 150px; */
    cursor: pointer;
    box-shadow: 0px 1px 5px #856B39;

    &:hover {
      transition: box-shadow 0.3s, transform 0.3s;
      box-shadow: 0px 1px 10px #856B39;
      transform: scale(1.05);
    }
  `