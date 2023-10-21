import { FC, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Arrow from "../../images/arrow-down.png";

interface IProps {
  options: string[];
}

/**
 * Hook that alerts clicks outside of the passed ref
 */

export const Dropdown: FC<IProps> = ({ options }) => {
  function useClickOutside(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: { target: any }) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef(null);

  useClickOutside(ref);
  return (
    <Container ref={ref}>
      <Body
        onClick={() => {
          setOpen(!open);
        }}
      >
        <BodyText>{selected === "" ? "Select" : selected}</BodyText>
        <BodyIcon open={open}>
          <img src={Arrow} alt="arrow" />
        </BodyIcon>
      </Body>
      <DropContainer open={open}>
        {options.map((op, i) => {
          return (
            <DropItem
              key={i}
              onClick={() => {
                setSelected(op);
                setOpen(false);
              }}
            >
              <h3>{op}</h3>
            </DropItem>
          );
        })}
      </DropContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Body = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  border: 1px solid #d0d5dd;
  height: 4.8rem;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.4rem;
  z-index: 100;
  background-color: white;

  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    height: 3.5rem;
    padding: 0 2rem;
    width: 80%;
  }
`;
const BodyText = styled.h2`
  width: 95%;
  color: #667085;
  font-weight: 400;
  font-size: 1.8rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.4rem;
  }
`;
interface IDrop {
  open: boolean;
}
const BodyIcon = styled.div<IDrop>`
  width: 5%;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all ease-out 0.1s;
`;

const DropContainer = styled.div<IDrop>`
  z-index: 0;
  width: 100%;
  border-radius: 30px;
  border: 1px solid #d0d5dd;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top: none;
  margin-top: -2.4rem;
  transform: ${(props) => (props.open ? "ScaleY(1)" : "ScaleY(0)")};
  transform-origin: top;
  transition: all ease-out 0.1s;
  padding-top: 2.4rem;
  padding-bottom: 1rem;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    width: 80%;
    margin-top: -2rem;
  }
`;
const DropItem = styled.div`
  width: 100%;
  height: 4.8rem;
  padding: 0 2.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    height: 3.5rem;
    padding: 0 2rem;
  }
  h3 {
    color: #475467;
    font-weight: 400;
    font-size: 1.8rem;
    @media screen and (min-width: 1300px) and (max-width: 1600px) {
      font-size: 1.4rem;
    }
  }
  &:hover {
    background-color: #f4f6f8;
  }
`;
