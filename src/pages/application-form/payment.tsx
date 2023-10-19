import {
  MainLayout,
  PrimaryButton,
  Progress,
  Radio,
  TextInput
} from "../../components";
import styled from "styled-components";

import { mq } from "../../responsive";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Payment() {
  const navigate = useNavigate();
  const OnClickNext = () => {
    navigate("/application-form/learning-path");
  };
  const OnClickPrevious = () => {
    navigate(-1);
  };

  const data = [
    {
      catname: "Standard",
      catDetail:
        "This category is for our special applicants who’re registering through the normal process."
    },
    {
      catname: "UpSkill",
      catDetail:
        "This category is for those who have successfully completed the most recent Upskill program."
    },
    {
      catname: "NYSC",
      catDetail:
        "This category is for individuals who are currently participating in the National Youth Service Corps (NYSC)."
    }
  ];

  const [radioSelection, setRadioSelection] = useState(""); //Standard , NYSC , UpSkill
  const [couponCode, setCouponCode] = useState("No"); //Yes or No

  const [couponValue, setCouponValue] = useState("");
  return (
    <MainLayout>
      <Body>
        <Title>Payment</Title>
        <Subtitle>Make your payment</Subtitle>
        <Progress currentStage={3} />
        <CategoryDiv>
          <CategoryHeader>
            What category of applicants do you belong?
          </CategoryHeader>
          <CategoryBody>
            {data.map((datum, index) => {
              return (
                <CategoryItem key={index}>
                  <Radio
                    select={() => {
                      setRadioSelection(datum.catname);
                    }}
                    categoryName={datum.catname}
                    radioOn={radioSelection === datum.catname}
                    categoryDetail={datum.catDetail}
                  />
                </CategoryItem>
              );
            })}
          </CategoryBody>
          <ChosenCategory>
            {radioSelection === "Standard" && (
              <div>
                <CouponHeader>Have a coupon code?</CouponHeader>
                <CouponBody>
                  <CouponItem>
                    <Radio
                      select={() => {
                        setCouponCode("Yes");
                      }}
                      categoryName={"Yes"}
                      radioOn={couponCode === "Yes"}
                      mark={false}
                    />
                  </CouponItem>
                  <CouponItem>
                    <Radio
                      select={() => {
                        setCouponCode("No");
                      }}
                      categoryName={"No"}
                      radioOn={couponCode === "No"}
                      mark={false}
                    />
                  </CouponItem>
                </CouponBody>
                {couponCode === "Yes" && (
                  <CouponInput>
                    <TextInput
                      inputlabel="Coupon code"
                      placeholder="Enter coupon code"
                      value={couponValue}
                      onChange={(e) => setCouponValue(e.target.value)}
                    />
                  </CouponInput>
                )}
              </div>
            )}

            {radioSelection === "UpSkill" && (
              <DisclaimerDiv>
                <Disclaimer>
                  <h2>Disclaimer (for the Upskill Discount): </h2>

                  <h3>
                    By selecting the Upskill discount option, you acknowledge
                    that you participated and completed the Upskill 2023 -
                    Cohort 1. Your eligibility for this discount will be
                    automatically verified. If it is found that you are not
                    eligible, there will be no refund, and you will be asked to
                    pay the full application fee before joining Learnable 23.
                  </h3>
                </Disclaimer>
              </DisclaimerDiv>
            )}

            {radioSelection === "NYSC" && (
              <DisclaimerDiv>
                <Disclaimer>
                  <h2>Disclaimer (for the NYSC Discount): </h2>

                  <h3>
                    By selecting the NYSC discount option, you acknowledge that
                    you are actively serving (2023 Batch A, B or C). Your
                    eligibility for this discount will be automatically
                    verified. To ensure accurate verification, please use the
                    same email address for registration that you used to
                    register for NYSC. If it is found that you are not eligible,
                    there will be no refund, and you will be asked to pay the
                    full application fee before joining Learnable 23..
                  </h3>
                </Disclaimer>
              </DisclaimerDiv>
            )}
          </ChosenCategory>
        </CategoryDiv>

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
    height: 92%;
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
const CategoryDiv = styled.div`
  width: 100%;
  margin-top: 5rem;
  ${mq["lg"]} {
    width: 55rem;
    margin-top: 3.5rem;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    width: 60rem;
    margin-top: 2rem;
  }
`;

const CategoryHeader = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  ${mq["lg"]} {
    font-size: 1.6rem;
  }
`;
const CategoryBody = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 20rem 20rem;
  grid-row-gap: 2rem;
  ${mq["lg"]} {
    display: flex;
    align-items: center;
    margin-top: 0.8rem;
  }
`;
const CategoryItem = styled.div`
  ${mq["lg"]} {
    margin-right: 3rem;
  }
`;

const ChosenCategory = styled.div`
  margin-top: 2.4rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-top: 1.8rem;
  }
`;

const CouponHeader = styled(CategoryHeader)`
  font-size: 1.6rem;
  font-weight: 400;
`;
const CouponBody = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
`;
const CouponItem = styled.div`
  margin-right: 3rem;
`;
const CouponInput = styled.div`
  margin-top: 2.4rem;
  width: 100%;
  ${mq["lg"]} {
    width: 30rem;
  }
`;

const DisclaimerDiv = styled.div``;
const Disclaimer = styled.p`
  h2 {
    color: rgba(225, 63, 41, 1);
    font-size: 1.4rem;
    font-weight: 600;
    display: inline;
    line-height: 2.8rem;
    ${mq["lg"]} {
      font-size: 1.8rem;
    }
    @media screen and (min-width: 1300px) and (max-width: 1600px) {
      font-size: 1.6rem;
    }
  }
  h3 {
    color: rgba(102, 112, 133, 1);
    font-size: 1.4rem;
    font-weight: 400;
    display: inline;
    line-height: 2.8rem;
    ${mq["lg"]} {
      font-size: 1.8rem;
    }
    @media screen and (min-width: 1300px) and (max-width: 1600px) {
      font-size: 1.6rem;
    }
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
