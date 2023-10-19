import { FC } from "react";

import styled from "styled-components";
import BGImage from "../../../images/Bg.png";
import { mq } from "../../../responsive";

interface IProps {
  children?: React.ReactNode;
}

export const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <Container>
      <Body>{children}</Body>
      <BackGroundImage>
        <img src={BGImage} alt="Background_image" />
      </BackGroundImage>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  position: relative;
  box-sizing: border-box;
`;
const Body = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 1.6rem;
  padding-left: 1.55rem;
  padding-right: 1.55rem;
  max-width: 150rem;

  ${mq["lg"]} {
    padding-left: 12rem;
    padding-right: 28rem;
    padding-top: 4rem;
    width: 87%;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    padding-left: 8rem;
    padding-right: 28rem;
    padding-top: 3rem;
  }
`;

const BackGroundImage = styled.div`
  display: none;
  height: 100%;
  width: 13%;
  position: relative;
  margin-left: auto;
  img {
    width: 100%;
  }
  ${mq["lg"]} {
    display: flex;
  }
`;
