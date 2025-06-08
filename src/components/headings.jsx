import styled from "styled-components";
import { theme } from "../theme";

const MOBILE = "@media screen and (max-width: 767px)";

export const Heading1 = styled.h1({
  fontSize: 48,
  fontWeight: 600,
  color: theme.color.heading,
  [MOBILE]: {
    fontSize: 32,
  },
});

export const Heading2 = styled.h2({
  fontSize: 32,
  fontWeight: 600,
  color: theme.color.heading,
  [MOBILE]: {
    fontSize: 28,
  },
});
