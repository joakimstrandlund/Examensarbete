import styled from "styled-components";
import { theme } from "../theme";

export const List = styled.ul({
  margin: 0,
  padding: 0,
  paddingLeft: theme.space(4),
  display: "flex",
  flexDirection: "column",
  gap: theme.space(6),
});

export const ListItem = styled.li({
  color: theme.color.body,
  fontSize: 16,
  fontWeight: 400,
});
