import {
  Dropdown,
  MainLayout,
  PrimaryButton,
  Progress
} from "../../components";
import styled from "styled-components";

import { mq } from "../../responsive";
import { useNavigate } from "react-router-dom";

export default function LearningPath() {
  const navigate = useNavigate();
  const OnClickNext = () => {
    navigate("/application-form/payment");
  };
  const OnClickPrevious = () => {
    navigate(-1);
  };
  const Dropdata = ["Frontend", "Backend", "Product design", "Web 3"];
  return (
    <MainLayout>
      <Body>
        <Title>Learning path</Title>
        <Subtitle>Select learning path</Subtitle>
        <Progress currentStage={2} />
        <DropdowContainer>
          <DropdowText>Select your learning track</DropdowText>
          <Dropdown options={Dropdata} />
        </DropdowContainer>
        <Buttons>
          <ButtonContainer>
            <PrimaryButton
              text="Previous"
              arrow={true}
              arrowPosition="left"
              onClick={OnClickPrevious}
              variant={true}
            />
          </ButtonContainer>
          <ButtonContainer>
            <PrimaryButton
              text="Next"
              arrow={true}
              arrowPosition="right"
              onClick={OnClickNext}
            />
          </ButtonContainer>
        </Buttons>
      </Body>
    </MainLayout>
  );
}

const Body = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 90%;
  position: relative;
  min-height: max-content;

  ${mq["lg"]} {
    height: 90%;
    width: 80%;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    height: 90%;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
  color: #1d2939;
  text-align: center;
  ${mq["lg"]} {
    font-size: 3rem;
    text-align: left;
  }
`;
const Subtitle = styled.h3`
  margin-top: 0.8 rem;
  font-size: 3.6rem;
  font-weight: 600;
  color: #1d2939;
  margin-bottom: 2rem;
  text-align: center;
  ${mq["lg"]} {
    font-size: 6rem;
    text-align: left;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 5rem;
  }
`;
const DropdowContainer = styled.div`
  width: 100%;
  margin-top: 4.8rem;
  ${mq["lg"]} {
    width: 37.6rem;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-top: 3rem;
  }
`;
const DropdowText = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 0.8rem;
  ${mq["lg"]} {
    font-size: 1.8rem;
  }
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 16rem;
  ${mq["lg"]} {
    width: 27.6rem;
  }
`;
