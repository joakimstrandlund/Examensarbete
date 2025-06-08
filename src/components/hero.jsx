import styled from "styled-components";
import { theme } from "../theme";

export const Hero = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const Container = styled.div({
  maxWidth: 640,
  width: "100%",
  textAlign: "center",
  display: "flex",
  gap: theme.space(6),
  flexDirection: "column",
  alignItems: "center",
});
