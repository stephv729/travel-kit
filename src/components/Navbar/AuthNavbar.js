import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { RiHome8Line } from "react-icons/ri";
import { PrimaryButton, SearchButton, SecondaryButton } from "../Buttons";
// import { useAuth } from "../context/auth-context";

const ButtonsNavBar = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  align-items: center;
`;

function AuthNavbar() {
  // const { logout } = useAuth();

  return (
    <ButtonsNavBar>
      <SearchButton route="/blog_posts" />
      <SecondaryButton
        onClick={() => console.log("Should logout")}
        leftIcon={<AiOutlineLogout />}
      >
        LOGOUT
      </SecondaryButton>

      <StyledNavLink to="/my_trips" leftIcon={<RiHome8Line />}>
        <PrimaryButton>MY PROPERTIES</PrimaryButton>
      </StyledNavLink>

      {/* <StyledNavLink to="/profile">
        <PrimaryButton leftIcon={<AiOutlineUser />}>PROFILE</PrimaryButton>
      </StyledNavLink> */}
    </ButtonsNavBar>
  );
}

export default AuthNavbar;
