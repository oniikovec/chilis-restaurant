import styled from 'styled-components'

export const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0,3);
`

export const BackdropImage = styled.img`
  display: block;
  max-width: 60%;
  max-height: 80%;
  margin: 60px auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0,5);
  border: 3px solid black;
`