import { FC } from "react";
import styled from "styled-components";
import ArrowLeftWhite from "../../images/arrow-left-white.png";
import ArrowLeftVarinat from "../../images/arrow-left.png";
import ArrowRightWhite from "../../images/arrow-right-white.png";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: boolean;
  arrow?: boolean;
  arrowPosition?: string; //left or right
}
export const PrimaryButton: FC<IProps> = ({
  text,
  variant,
  arrow,
  arrowPosition = "left",
  ...rest
}) => {
  return (
    <Container {...rest} variant={variant?.toString()}>
      {arrowPosition === "left" && arrow && (
        <Icon iconposition={arrowPosition}>
          {variant ? (
            <img src={ArrowLeftVarinat} alt="arrow" />
          ) : (
            <img src={ArrowLeftWhite} alt="arrow" />
          )}
        </Icon>
      )}
      <Text variant={variant?.toString()}>{text}</Text>
      {arrowPosition === "right" && arrow && (
        <Icon iconposition={arrowPosition}>
          {variant ? (
            <img src={ArrowLeftVarinat} alt="arrow" />
          ) : (
            <img src={ArrowRightWhite} alt="arrow" />
          )}
        </Icon>
      )}
    </Container>
  );
};

interface IButton {
  variant?: string;
}
const Container = styled.button<IButton>`
  all: unset;
  background-color: ${(props) =>
    props.variant === "true" ? "" : "rgba(245, 119, 47, 1)"};
  box-sizing: border-box;
  padding: 1.6rem;
  width: 100%;
  border-radius: 999px;
  cursor: pointer;
  border: ${(props) =>
    props.variant ? "1px solid rgba(245, 119, 47, 1)" : ""};

  &:hover {
    transform: scale(1.02);
  }
  transition: all ease 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    padding: 1rem;
  }
`;

const Text = styled.h3<IButton>`
  color: ${(props) =>
    props.variant === "true" ? "rgba(245, 119, 47, 1)" : "white"};
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;

  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.6rem;
  }
`;

interface IIcon {
  iconposition?: string;
}
const Icon = styled.div<IIcon>`
  width: 2.5rem;
  height: auto;
  position: relative;
  margin-right: ${(props) => (props.iconposition === "left" ? "1rem" : "")};
  margin-left: ${(props) => (props.iconposition === "right" ? "1rem" : "")};
  img {
    width: 100%;
    object-fit: contain;
  }
`;
