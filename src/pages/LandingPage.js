import styled from "@emotion/styled";
import BackgroundAutoplay from "../components/BackgroundAutoplay";
import { PrimaryButton } from "../components/Buttons";
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
  left: 10%;
  margin: 3rem;
  align-items:flex-start;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  ${typography.headline[2]};
  color: ${colors.secondary[200]};
`;

export default function LandingPage() {
  return (
    <MainContainer>
      <BackgroundAutoplay />
      <MainSection>
        <span>Live</span>
        <span>Your</span>
        <span>Dream</span>
        <PrimaryButton>
          Plan your next trip
        </PrimaryButton>
      </MainSection>
    </MainContainer>
  );
}
