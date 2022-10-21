import styled from "@emotion/styled";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import LoginForm from "./components/LoginForm";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/auth-context";
import { TripsProvider } from "./context/trips-context";
import LandingPage from "./pages/LandingPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostsPage from "./pages/PostsPage";
import SignupPage from "./pages/SignupPage";
import { colors } from "./styles";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;
const NotFoundContainer = styled.div`
  text-align: center;
  margin: 7.5rem;
`;

function App() {
  const { user, status } = useAuth();
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
          <Route path="/blog_posts/" element={<PostsPage />} />
          {!user && <Route path="/signup" element={<SignupPage />} />}
          <Route path="/blog_posts/:id" element={<PostDetailPage />} />
          <Route
            path="*"
            element={
              <NotFoundContainer>
                {status === "loading" ? (
                  <Loader color={colors.secondary[500]} />
                ) : (
                  <>
                    <h1>There's nothing on here</h1>
                  </>
                )}
              </NotFoundContainer>
            }
          />
        </Routes>
      </MainContainer>
    </TripsProvider>
  );
}

export default App;
