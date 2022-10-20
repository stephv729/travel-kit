import styled from "@emotion/styled";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

const MainContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleCloseModal(e) {
    if (e.target.dataset.type === "modal") {
      setIsModalOpen(false);
    }
  }

  return (
    <MainContainer>
      {isModalOpen && (
            <Modal onModalClose={handleCloseModal}>
              <LoginForm handleCloseModal={() => setIsModalOpen(false)} />
            </Modal>
          )}
          <Navbar onLoginClick={() => setIsModalOpen(true)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
