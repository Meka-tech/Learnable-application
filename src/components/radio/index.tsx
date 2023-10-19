import { FC, useState } from "react";
import styled from "styled-components";
import Mark from "../../images/question-mark.png";
import { DialogBox } from "./dialogBox";
import { mq } from "../../responsive";

interface IProps {
  categoryName: string;
  categoryDetail?: string;
  select: () => void;
  radioOn?: boolean;
  mark?: boolean;
}
export const Radio: FC<IProps> = ({
  categoryName,
  categoryDetail,
  select,
  radioOn,
  mark = true
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Container>
      <RadioDiv onClick={() => select()}>{radioOn && <RadioOn />}</RadioDiv>
      <Name>{categoryName}</Name>
      <IconDiv>
        {mark && (
          <Icon
            src={Mark}
            alt="question-mark"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        )}
        {hover && (
          <InfoDiv right={(categoryName === "UpSkill").toString()}>
            <DialogBox right={(categoryName === "UpSkill").toString()}>
              {categoryDetail}
            </DialogBox>
          </InfoDiv>
        )}
      </IconDiv>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const RadioDiv = styled.div`
  border: 1px solid #f5772f;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mq["lg"]} {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
const RadioOn = styled.div`
  background-color: #f5772f;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  ${mq["lg"]} {
    width: 0.85rem;
    height: 0.85rem;
  }
`;
const Name = styled.h3`
  color: #1d2939;
  font-weight: 400;
  font-size: 1.4rem;
  margin-left: 0.8rem;
  ${mq["lg"]} {
    font-size: 1.8rem;
  }
`;
const IconDiv = styled.div`
  position: relative;
`;
const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;
  cursor: pointer;
  position: relative;
  ${mq["lg"]} {
    width: 2.2rem;
    height: 2.2rem;
    margin-left: 0.8rem;
  }
`;
interface IInfoDiv {
  right?: string;
}
const InfoDiv = styled.div<IInfoDiv>`
  position: absolute;
  z-index: 10;
  right: ${(props) => (props.right === "true" ? "0" : "")};
  ${mq["lg"]} {
    left: 0;
  }
`;
