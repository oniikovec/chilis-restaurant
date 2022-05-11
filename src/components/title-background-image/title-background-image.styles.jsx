import styled from 'styled-components'
import titleBackgroundImage from '../../assets/title-background-image.jpg'

export const TitleImageContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 50vh;
`

export const TitleImage = styled.div`
  background-image: url(${titleBackgroundImage});
  position: absolute;
	background-size: cover;
	background-position: 50%;
  width: 50vw;
  height: 50vh;
  right: 130px;
`