import styled from "@emotion/styled";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { TripsProvider } from "./context/trips-context";
import LandingPage from "./pages/LandingPage";
import PostsPage from "./pages/PostsPage";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
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
    <TripsProvider>
      <MainContainer>
        {isModalOpen && (
          <Modal onModalClose={handleCloseModal}>
            <LoginForm handleCloseModal={() => setIsModalOpen(false)} />
          </Modal>
        )}
        <Navbar onLoginClick={() => setIsModalOpen(true)} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog_posts" element={<PostsPage />} />
        </Routes>
      </MainContainer>
    </TripsProvider>
  );
}

export default App;
