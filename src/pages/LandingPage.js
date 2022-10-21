import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import BackgroundAutoplay from "../components/BackgroundAutoplay";
import { PrimaryButton } from "../components/Buttons";
import { useAuth } from "../context/auth-context";
import { colors, typography } from "../styles";

const MainContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
`;
const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 15rem;
  left: 10rem;
  margin: 3rem;
  align-items: flex-start;
  transform: translate(-50%, -50%);
  ${typography.headline[2]};
  color: ${colors.secondary[200]};
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export default function LandingPage({ onLoginClick }) {
  const { user } = useAuth();
  return (
    <MainContainer>
      <BackgroundAutoplay />
      <MainSection>
        <span>Share</span>
        <span>Read</span>
        <span>Connect</span>
        {user ? (
          <StyledNavLink to="/my_trips">
            <PrimaryButton>Tell us about your last trip</PrimaryButton>
          </StyledNavLink>
        ) : (
          <PrimaryButton onClick={onLoginClick}>Login</PrimaryButton>
        )}
      </MainSection>
    </MainContainer>
  );
}
