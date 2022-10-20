import styled from "@emotion/styled";
import { RiUserReceivedLine } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { PrimaryButton, SearchButton, SecondaryButton } from "../Buttons";

const ButtonsNavBar = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  align-items: center;
`;

function UnauthNavbar({ onLoginClick }) {
  return (
    <ButtonsNavBar>
      <SearchButton route="/blog_posts" />
      <StyledNavLink to="/signup">
        <SecondaryButton lefticon={<AiOutlineUserAdd />}>JOIN</SecondaryButton>
      </StyledNavLink>
      <PrimaryButton onClick={onLoginClick} lefticon={<RiUserReceivedLine />}>
        LOGIN
      </PrimaryButton>
    </ButtonsNavBar>
  );
}

export default UnauthNavbar;
