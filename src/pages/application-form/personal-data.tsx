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
        <Buttons>
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
  position: relative;
  min-height: max-content;
  height: calc(90% - 2.4rem);
  ${mq["lg"]} {
    width: 80%;
    height: calc(89.8% - 5.6rem); //height of back button
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    width: 100%;
    height: calc(91.8% - 4rem); //height of back button
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

const Buttons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 16rem;
  ${mq["lg"]} {
    width: 27.6rem;
  }
`;
