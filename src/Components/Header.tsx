import styled from "styled-components";
import Dark from "../Assets/dark.svg";

type HeaderProp = {
  text: string;
};

export default function Header({ text }: HeaderProp) {
  return (
    <Wrapper>
      <h1>{text}</h1>
      <img src={Dark} alt="dark-svg" style={{ filter: "invert(100%)" }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 7fr 1fr;
  img {
    place-self: center;
  }
  h1 {
    padding-left: 70px;
  }
  margin-top: 20px;
`;
