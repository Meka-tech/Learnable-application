import {
  BackButton,
  Checkbox,
  MainLayout,
  PasswordInput,
  PrimaryButton,
  TextInput
} from "../../components";
import styled from "styled-components";
import { mq } from "../../responsive";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <MainLayout pageTitle="Login">
      <BackButton />
      <Body>
        <Title>Start your journey</Title>
        <Subtitle>Gain access to your Profile, Resources and Test.</Subtitle>
        <Form>
          <TextInput
            inputlabel="Email address"
            placeholder="Enter your Email"
          />
          <PasswordInput
            inputlabel="Password"
            placeholder="Enter your password"
          />
          <BelowInputs>
            <RemeberMe>
              <Checkbox />
              <h3>Remember me</h3>
            </RemeberMe>
            <Link to={"/auth/forgot-password"}>
              <ForgotPassword>Forgot password?</ForgotPassword>
            </Link>
          </BelowInputs>
          <ButtonContainer>
            <PrimaryButton
              text="Start journey"
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

const BelowInputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-bottom: 3rem;
  }
`;

const RemeberMe = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin-left: 1rem;
    font-size: 1.2rem;
    color: rgba(152, 162, 179, 1);
    font-weight: 400;
    ${mq["lg"]} {
      margin-left: 1.2rem;
      font-size: 1.4rem;
    }
  }
`;
const ForgotPassword = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(102, 112, 133, 1);
  ${mq["lg"]} {
    font-size: 1.4rem;
  }
`;
const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${mq["lg"]} {
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
