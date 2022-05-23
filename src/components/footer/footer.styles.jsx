import styled from 'styled-components'

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: black;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #856B39;
  }
  a {
    color: #ad9a74;
    transition: color 0.3s;

    &:hover {
      color: #856B39
    }
  }
`