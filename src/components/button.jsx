import styled from "styled-components";
import { theme } from "../theme";

export const Button = ({ children, ...props }) => {
  return (
    <ButtonStyle {...props}>
      {children}{" "}
      <svg
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.1527 1.66736L9.84729 2.97279L15.4541 8.5796H2.93505V10.4203H15.4541L9.84729 16.0271L11.1527 17.3325L18.9853 9.49993L11.1527 1.66736Z"
          fill="#3A3200"
        />
      </svg>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button({
  backgroundColor: theme.color.accent,
  color: theme.color.chipBg,
  fontSize: 16,
  fontWeight: 500,
  paddingBlock: theme.space(4),
  paddingInline: theme.space(6),
  borderRadius: theme.space(1),
  appearance: "none",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.space(2),
  ["&:hover"]: {
    backgroundColor: theme.color.hover,
  },
});
