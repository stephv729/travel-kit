import { colors } from "../../styles/colors";
import styled from "@emotion/styled";
import { typography } from "../../styles/typography";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  align-items: center;
`;

const StyledButton = styled.button`
  ${typography.button};
  background-color: transparent;
  overflow: hidden;
  border-top: none;
  border-bottom: none;
  border-left: none;
  border-right: 0.15em solid ${colors.primary[100]};
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${colors.primary[100]};
    }
  }
`;

const StyledButtonWrapper = styled.div`
  height: 100%;
  border-radius: 1rem;
  border: none;
  color: ${colors.secondary[100]};
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${colors.secondary[700]};
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary[400]};
    border: 1px solid ${colors.primary[400]};
  }
`;

function SearchButton({ onClick, style, route }) {
  return (
    <StyledNavLink to={route}>
      <StyledButtonWrapper>
        <FiSearch />
        <StyledButton onClick={onClick} style={style}>
          EXPLORE
        </StyledButton>
      </StyledButtonWrapper>
    </StyledNavLink>
  );
}

export default SearchButton;
