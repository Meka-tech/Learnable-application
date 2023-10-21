import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../images/arrow-left.png";
import { mq } from "../../responsive";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(-1)}>
      <img src={LeftArrow} alt="arrow-left" />
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid rgba(29, 41, 57, 1);
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover {
    border: 1px solid rgba(245, 119, 47, 1);
    transform: scale(1.05);
  }
  transition: all ease 0.1s;
  ${mq["lg"]} {
    width: 5.6rem;
    height: 5.6rem;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    width: 4rem;
    height: 4rem;
  }
  img {
    width: 80%;
    height: auto;
    ${mq["lg"]} {
      width: 50%;
      height: auto;
    }
  }
`;
