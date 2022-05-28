import styled from "styled-components";

export const AboutRestaurantContainer = styled.div`
  width: 60%;
  max-width: 850px;
  margin: 0 auto;
  padding-bottom: 40px;

  h1 {
    font-size: 2.4rem;
    color: #856B39;
    text-align: center;
    padding-bottom: 30px;
    word-spacing: 5px;
  }
  p {
    font-size: 1.7rem;
    margin: 0;
    color: #ad9a74;
    line-height: 1.5;
  }

  @media screen and (max-width: 1366px) {
    width: 70%;
  }
  @media screen and (max-width: 1024px) {
    width: 75%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 480px) {
    width: 85%;
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 333px) {
    width: 90%;
    h1 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.2rem;
    }
  }


`