import { FC } from "react";
import styled from "styled-components";
import { mq } from "../../responsive";

interface IProps {
  children: React.ReactNode;
  right?: string;
}
export const DialogBox: FC<IProps> = ({ children, right = "false" }) => {
  return (
    <Container>
      <Triangle right={right} />

      <Body>
        <Text>{children}</Text>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
interface ITriangle {
  right: string;
}
const Triangle = styled.div<ITriangle>`
  width: 0;
  height: 0;
  border-left: 15px solid white;
  border-right: 15px solid white;
  border-bottom: 15px solid #faf7f7;
  align-self: ${(props) => (props.right === "true" ? "flex-end" : " ")};
  ${mq["lg"]} {
    align-self: flex-start;
  }
`;
const Body = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 16px;
  width: 25rem;
  box-shadow: 0px 0px 1px 0px rgba(9, 30, 66, 0.31);
  box-shadow: 0px 8px 12px 0px rgba(9, 30, 66, 0.15);
  margin-left: -2rem;
  ${mq["lg"]} {
    width: 30rem;
  }
`;
const Text = styled.h3`
  color: rgba(71, 84, 103, 1);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  ${mq["lg"]} {
    font-size: 1.4rem;
  }
`;
