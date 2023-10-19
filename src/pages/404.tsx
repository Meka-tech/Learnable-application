import styled from "styled-components";
import ErrorImage from "../images/404.png";

import { PrimaryButton } from "../components";

import { mq } from "../responsive";
import { Link } from "react-router-dom";

export default function Custom404() {
  return (
    <>
      <head>
        <title>404: Page not found</title>
      </head>
      <Container>
        <Body>
          <BigImg src={ErrorImage} alt="404" />
          <h2>Page not found</h2>
          <ButtonContainer>
            <Link to={"/"}>
              <PrimaryButton text="Go to home page" arrow={true} />
            </Link>
          </ButtonContainer>
        </Body>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${mq["lg"]} {
    width: 50%;
  }
  h2 {
    color: #344054;
    margin: 3rem 0;
    font-size: 3.6rem;
    font-weight: 600;
    ${mq["lg"]} {
      font-size: 4.8rem;
      margin: 2rem 0;
    }
  }
`;
const BigImg = styled.img`
  width: 35rem;
  height: auto;
`;
const ButtonContainer = styled.div`
  width: 24rem;
`;
