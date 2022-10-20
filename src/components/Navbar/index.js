import styled from "@emotion/styled";
import Logo from "../assets/icons/logo.png";
import { fonts, typography } from "../../styles/typography";
import { boxShadow } from "../../styles/utils";
import LandLordLayout from "./LandLordLayout";
import UnauthNavbar from "./UnauthNavbar";
import { NavLink } from "react-router-dom";
// import { useAuth } from "../context/auth-context";

const NavBarContainer = styled.div`
  position: relative;
  ${boxShadow[1]};
  z-index: 1;
`;

const ContainerNavBar = styled.div`
  font-family: ${fonts.secondary};
  ${typography.button};
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  gap: 0.625rem;
  justify-content: space-between;
  align-items: center;
`;

function Navbar({ onLoginClick }) {
  const user = {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    avatar: "https://randomuser.me/api/portraits/m/1.jpg",
    role: "Homeseeker",
  };

  // const { user } = useAuth();

  return (
    <NavBarContainer>
      <ContainerNavBar>
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
        {user ? (
          <LandLordLayout />
        ) : (
          <UnauthNavbar onLoginClick={onLoginClick} />
        )}
      </ContainerNavBar>
    </NavBarContainer>
  );
}

export default Navbar;
