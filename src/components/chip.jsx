import styled from "styled-components";
import { theme } from "../theme";

export const Chip = styled.div({
  backgroundColor: theme.color.chipBg,
  color: theme.color.chipText,
  fontSize: 13,
  fontWeight: 500,
  padding: theme.space(2),
  borderRadius: theme.space(2),
});
