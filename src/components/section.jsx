import styled from "styled-components";
import { Heading2 } from "./headings";
import { theme } from "../theme";

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Heading2>{title}</Heading2>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: theme.space(6),
  textAlign: "left",
  maxWidth: 640,
});
