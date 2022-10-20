import styled from "@emotion/styled";
import BG1 from "../assets/img/bg-airplane.jpg";

const MainSection = styled.img`
  width: 100%;
`;

export default function LandingPage() {
  return <MainSection src={BG1}></MainSection>;
}
