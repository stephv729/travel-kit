import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const MainContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
