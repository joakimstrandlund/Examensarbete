import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./routes";
import Examensarbete from "./routes/examensarbete/index";
import { theme } from "./theme";

function App() {
  return (
    <Router>
      <Wrapper>
        <Nav>
          <NavLogo to="/">JS</NavLogo>
          <NavLink to="/examensarbete">Examensarbete</NavLink>
        </Nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/examensarbete" element={<Examensarbete />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div({
  backgroundColor: theme.color.primaryBg,
  height: "100%",
  paddingInline: "5%",
});

const Nav = styled.nav({
  paddingBlock: theme.space(4),
  paddingInline: theme.space(16),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: theme.color.primaryBg,
});

const NavLogo = styled(Link)({
  fontSize: 36,
  color: theme.color.heading,
  fontWeight: 500,
  textDecoration: "none",
  transition: "color 0.3s ease",
  ["&:hover"]: {
    color: theme.color.accent,
  },
});

const NavLink = styled(Link)({
  color: theme.color.heading,
  fontSize: 16,
  fontWeight: 500,
  textDecoration: "none",
  paddingInline: theme.space(4),
  paddingBlock: theme.space(3),
  borderRadius: theme.space(1),
  backgroundColor: "transparent",
  transition: "background-color 0.3s ease",
  ["&:hover"]: {
    backgroundColor: `${theme.color.hover}1A`,
    color: theme.color.accent,
  },
});

export default App;
