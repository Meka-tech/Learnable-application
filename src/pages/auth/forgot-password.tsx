import {
  BackButton,
  Checkbox,
  MainLayout,
  PrimaryButton,
  TextInput
} from "../../components";
import styled from "styled-components";
import { useRef, useEffect } from "react";

import { mq } from "../../responsive";

export default function ForgotPassword() {
  return (
    <MainLayout pageTitle="Forgot Password">
      <BackButton />
      <Body>
        <Title>Forgot Password</Title>
        <Subtitle>Reset password to gain access to your profile.</Subtitle>
        <Form>
          <TextInput
            inputlabel="Email address"
            placeholder="Enter your Email"
          />

          <ButtonContainer>
            <PrimaryButton
              text="Send reset link"
              type="submit"
              onClick={() => {}}
            />
          </ButtonContainer>
        </Form>
        <ContactUs>
          Experiencing Issues?
          <span>
            <a href=""> Contact support</a>
          </span>
        </ContactUs>
      </Body>
    </MainLayout>
  );
}

const Body = styled.div`
  margin-top: 5rem;
  width: 100%;
  ${mq["lg"]} {
    width: 53.3rem;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-top: 3rem;
    width: 50rem;
  }
`;
const Title = styled.h2`
  color: rgba(29, 41, 57, 1);
  font-weight: 600;
  font-size: 2rem;
  padding: 0;
  margin: 0;
  text-align: center;
  ${mq["lg"]} {
    font-size: 6rem;
    text-align: left;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 4.5rem;
    text-align: left;
  }
`;

const Subtitle = styled.h4`
  margin-top: 0.8rem;
  color: rgba(152, 162, 179, 1);
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  ${mq["lg"]} {
    font-size: 1.6rem;
    text-align: left;
    margin-top: 1.6rem;
  }

  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.4rem;
    text-align: left;
    margin-top: 1rem;
  }
`;

const Form = styled.form`
  margin-top: 6.4rem;
  ${mq["lg"]} {
    margin-top: 5rem;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-top: 4rem;
  }
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  width: 100%;
  ${mq["lg"]} {
    margin-top: 5rem;
    width: 34.3rem;
  }
`;

const ContactUs = styled.h3`
  text-align: center;
  margin-top: 4rem;
  font-weight: 400;
  font-size: 1.4rem;
  color: rgba(89, 98, 117, 1);
  a {
    color: rgba(245, 119, 47, 1);
  }
`;
