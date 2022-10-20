import { colors } from "../../styles/colors";
import styled from "@emotion/styled";
import { typography } from "../../styles/typography";

const StyledButton = styled.button`
  ${typography.button};
  background: ${colors.primary[500]};
  border-radius: 1rem;
  border: none;
  color: ${colors.secondary[200]};
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary[400]};
    border: 1px solid ${colors.primary[400]};
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function PrimaryButton({ children, hasIcon, Icon, lefticon, onClick, style }) {
  return (
    <StyledButton onClick={onClick} style={style}>
      <StyledButtonWrapper>
        {lefticon}
        {children}
        {hasIcon && <Icon />}
      </StyledButtonWrapper>
    </StyledButton>
  );
}

export default PrimaryButton;
