import { FC } from "react";
import styled from "styled-components";
import PersonalActive from "../../images/progressIcons/personalActive.png";
import LearnActive from "../../images/progressIcons/learnActive.png";
import LearnInactive from "../../images/progressIcons/learnInactive.png";
import PaymentInactive from "../../images/progressIcons/paymentInactive.png";
import PaymentActive from "../../images/progressIcons/paymentActive.png";
import Tick from "../../images/progressIcons/tick-circle.png";

import { mq } from "../../responsive";

interface IProps {
  currentStage: number;
}

export const Progress: FC<IProps> = ({ currentStage = 1 }) => {
  const ProgressData = [
    {
      stageName: "Personal data",
      activeIcon: PersonalActive,
      inactiveIcon: ""
    },
    {
      stageName: "Learning path",
      activeIcon: LearnActive,
      inactiveIcon: LearnInactive
    },
    {
      stageName: "Payment",
      activeIcon: PaymentActive,
      inactiveIcon: PaymentInactive
    }
  ];
  return (
    <Container>
      {ProgressData.map((data, index) => {
        return (
          <Stage key={index}>
            <ProgressItem>
              <Circle currentstage={currentStage} index={index}>
                <img
                  src={
                    currentStage > index + 1
                      ? Tick
                      : currentStage >= index + 1
                      ? data.activeIcon
                      : data.inactiveIcon
                  }
                  alt={data.stageName}
                />
              </Circle>
              <StageName>{data.stageName}</StageName>
            </ProgressItem>
            {index !== 2 && (
              <ConnectionLine currentstage={currentStage} index={index} />
            )}
          </Stage>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  ${mq["lg"]} {
    font-size: 1.8rem;
    text-align: left;
    margin-left: 0;
  }
`;
const Stage = styled.div`
  display: flex;
  align-items: center;
`;
const ProgressItem = styled.div`
  width: 4rem;
  ${mq["lg"]} {
    width: 5.5rem;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    width: 5rem;
  }
`;
interface IProgressItem {
  currentstage: number;
  index: number;
}
const Circle = styled.div<IProgressItem>`
  border: ${(props) =>
    props.currentstage > props.index + 1 ? "" : "1px solid #2d1e2f"};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.currentstage > props.index + 1
      ? "#03CEA4"
      : props.currentstage >= props.index + 1
      ? "#2d1e2f"
      : ""};

  ${mq["lg"]} {
    width: 5.5rem;
    height: 5.5rem;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    width: 5rem;
    height: 5rem;
  }
`;
const StageName = styled.h3`
  color: #475467;
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 0.8rem;
  height: 3rem;
`;
const ConnectionLine = styled.div<IProgressItem>`
  height: 0.4rem;
  width: 4.8rem;
  transform: translateY(-1.8rem);
  background-color: ${(props) =>
    props.currentstage > props.index + 1 ? "#03CEA4" : "#dfd0e1"};
  ${mq["lg"]} {
    width: 7.2rem;
  }
`;
