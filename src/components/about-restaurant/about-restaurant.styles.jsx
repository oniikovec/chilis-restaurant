import styled from "styled-components";

export const AboutRestaurantContainer = styled.div`
  background-color: papayawhip;
  margin: 150px 100px;

  @media screen and (max-width: 1280px) {
    margin: 0 35px;
  }
  @media screen and (max-width: 1024px) {
    margin: 0 10px;
  }
  @media screen and (max-width: 768px) {
    order: 2;
    padding: 0;
    margin: 0;
  }
`