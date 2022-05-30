import styled from 'styled-components'

export const MenuContainer = styled.div`
  width: 60%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 110px;
  padding-bottom: 60px;
  color: #ad9a74;

  @media screen and (max-width: 1024px) {
    width: 75%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const Desserts = styled.span`
  color: white;
`

export const MenuSection = styled.div`
  padding-bottom: 40px;

  h2, h3 {
    margin: 10px 0;
  }
`