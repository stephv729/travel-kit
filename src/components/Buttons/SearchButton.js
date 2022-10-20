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
  overflow: hidden;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function SearchButton({ onClick, style , route}) {
  return (
    <StyledNavLink to={route}>
      <StyledButton onClick={onClick} style={style}>
        <StyledButtonWrapper>
          <FiSearch />
          SEARCH
        </StyledButtonWrapper>
      </StyledButton>
    </StyledNavLink>
  );
}

export default SearchButton;
