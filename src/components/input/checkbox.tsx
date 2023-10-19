import { useState } from "react";
import styled from "styled-components";
import Check from "../../images/check.png";

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Container checked={checked} onClick={() => setChecked(!checked)}>
      {checked && <img src={Check} alt="check" />}
    </Container>
  );
};

interface IContainer {
  checked: boolean;
}
const Container = styled.div<IContainer>`
  background-color: ${(props) =>
    props.checked ? "rgba(245, 119, 47, 1)" : ""};
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.checked ? "" : "1px solid rgba(208, 213, 221, 1)"};
  &:hover {
    border: ${(props) =>
      props.checked ? "" : "1px solid rgba(245, 119, 47, 1)"};
  }
  transition: all ease 0.2s;
`;
