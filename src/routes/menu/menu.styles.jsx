import styled from 'styled-components'

export const MenuContainer = styled.div`
  width: 60%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 110px;
  color: #ad9a74;

  @media screen and (max-width: 1024px) {
    width: 75%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

