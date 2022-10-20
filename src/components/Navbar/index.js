import styled from "@emotion/styled";
import { NavLink, useLocation } from "react-router-dom";
import { fonts, typography } from "../../styles/typography";
import { boxShadow } from "../../styles/utils";
import Logo from "../../assets/img/logo.png";
import UnauthNavbar from "./UnauthNavbar";
import AuthNavbar from "./AuthNavbar";
import { colors } from "../../styles";
import { useEffect, useState } from "react";
// import { useAuth } from "../context/auth-context";

const NavBarContainer = styled.div`
  position: ${({ isRoot }) => (isRoot ? "absolute" : "static")};
  top: 0;
  width: 100%;
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

const LogoImg = styled.img`
  height: 5rem;
  object-fit: contain;
  filter: drop-shadow(0px 0px 2px ${colors.primary[300]});
`;

function Navbar({ onLoginClick }) {
  const [isRoot, setIsRoot] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      setIsRoot(false);
    } else {
      setIsRoot(true);
    }
  }, [location]);
  let user;
  // const user = {
  //   id: 1,
  //   name: "John Doe",
  //   email: "johndoe@gmail.com",
  //   avatar: "https://randomuser.me/api/portraits/m/1.jpg",
  //   role: "Homeseeker",
  // };

  // const { user } = useAuth();

  return (
    <NavBarContainer isRoot={isRoot}>
      <ContainerNavBar>
        <NavLink to="/">
          <LogoImg src={Logo} alt="Logo" />
        </NavLink>
        {user ? <AuthNavbar /> : <UnauthNavbar onLoginClick={onLoginClick} />}
      </ContainerNavBar>
    </NavBarContainer>
  );
}

export default Navbar;
