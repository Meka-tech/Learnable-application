import { FC, useState } from "react";
import styled from "styled-components";
import { mq } from "../../responsive";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputlabel: string;
  type?: string;
}
export const TextInput: FC<IProps> = ({
  inputlabel,
  type = "text",
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <StyledInputContainer>
      <StyledInputLabel>{inputlabel}</StyledInputLabel>
      <StyledInputElementContainer focused={focused.toString()}>
        <StyledInput
          type={type}
          {...rest}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </StyledInputElementContainer>
    </StyledInputContainer>
  );
};

export const StyledInputContainer = styled.div`
  width: 100%;
  margin-bottom: 2.8rem;
  font-family: "Open Sans", sans-serif;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 2rem;
  }
`;

export const StyledInputLabel = styled.label`
  color: rgba(0, 0, 0, 1);
  font-weight: 400;
  font-size: 1.4rem;
  ${mq["lg"]} {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.6rem;
  }
`;
interface InputContainerStyle {
  focused: string;
}
export const StyledInputElementContainer = styled.div<InputContainerStyle>`
  margin-top: 1rem;
  width: 100%;
  height: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${(props) =>
    props.focused === "true"
      ? "1px solid rgba(29, 41, 57, 1)"
      : "1px solid rgba(208, 213, 221, 1)"};
  border-radius: 30px;
  padding: 0.5rem 2.4rem;
  transition: all ease 0.5s;
  ${mq["lg"]} {
    height: 4.8rem;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    height: 4.4rem;
  }
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-weight: 300;
  font-size: 1.4rem;
  font-family: "Open Sans", sans-serif;
  ${mq["lg"]} {
    font-size: 1.6rem;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.4rem;
  }

  ::placeholder {
    color: rgba(152, 162, 179, 1);
  }
`;
