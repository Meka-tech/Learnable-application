import {
  BackButton,
  MainLayout,
  PrimaryButton,
  Progress,
  TextInput
} from "../../components";

import styled from "styled-components";

import { mq } from "../../responsive";
import { useNavigate } from "react-router-dom";

export default function PersonalData() {
  const navigate = useNavigate();
  const OnClickNext = () => {
    navigate("/application-form/learning-path");
  };

  return (
    <MainLayout>
      <BackButton />
      <Body>
        <Title>Personal data</Title>
        <Subtitle>Tell us a little about you</Subtitle>
        <Progress currentStage={1} />
        <FormGrid>
          <TextInput
            inputlabel="First name"
            placeholder="Enter your first name"
          />
          <TextInput
            inputlabel="Last name"
            placeholder="Enter your Last name"
          />
          <TextInput
            inputlabel="Phone number"
            placeholder="+234 803 000 0000"
            type="tel"
          />
          <TextInput
            inputlabel="Email address"
            placeholder="example@gmail.com"
            type="email"
          />
        </FormGrid>
        <ButtonContainer>
          <PrimaryButton
            text="Next"
            arrow={true}
            arrowPosition="right"
            onClick={OnClickNext}
          />
        </ButtonContainer>
      </Body>
    </MainLayout>
  );
}

const Body = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: auto;
  position: relative;
  min-height: max-content;
  ${mq["lg"]} {
    width: max-content;
    height: 80%;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    height: 85%;
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

const FormGrid = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mq["lg"]} {
    margin-top: 4.8rem;
    display: grid;
    grid-template-columns: 37.6rem 37.6rem;
    grid-column-gap: 3.2rem;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-top: 3rem;
  }
`;

const ButtonContainer = styled.div`
  width: 15rem;
  margin-top: 1.5rem;
  margin-left: auto;
  position: relative;
  ${mq["lg"]} {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 27.6rem;
  }
`;
