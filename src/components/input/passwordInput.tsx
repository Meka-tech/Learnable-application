import { FC, useState } from "react";
import styled from "styled-components";
import { mq } from "../../responsive";
import EyeOpen from "../../images/eyeOpen.png";
import EyeClose from "../../images/eyeClose.png";
import {
  StyledInput,
  StyledInputContainer,
  StyledInputElementContainer,
  StyledInputLabel
} from ".";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputlabel: string;
}
export const PasswordInput: FC<IProps> = ({ inputlabel, ...rest }) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <StyledInputContainer>
      <StyledInputLabel>{inputlabel}</StyledInputLabel>
      <StyledInputElementContainer focused={focused.toString()}>
        <ExtendInput
          type={showPassword ? "text" : "password"}
          {...rest}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
        <EyeDiv onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <img src={EyeOpen} alt="show password" />
          ) : (
            <img src={EyeClose} alt="hide password" />
          )}
        </EyeDiv>
      </StyledInputElementContainer>
    </StyledInputContainer>
  );
};

const ExtendInput = styled(
  (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <StyledInput {...props} />
  )
)`
  width: 90%;
`;
const EyeDiv = styled.div`
  cursor: pointer;
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all ease 0.1s;
  img {
    width: 100%;
    height: auto;
  }
`;
