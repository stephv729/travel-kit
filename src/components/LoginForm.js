import { RiUserReceivedLine } from "react-icons/ri";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { typography, colors } from "../styles";
import { boxShadow } from "../styles/utils";
import Input from "./Input";
import LoadingWave from "./Loader";
import { PrimaryButton } from "./Buttons";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24.25rem;
  border: 1px solid ${colors.secondary[600]};
  user-select: none;
  background-color: ${colors.secondary[200]};
  border-radius: 8px;
  ${boxShadow[1]}
`;

const Title = styled.h1`
  ${typography.headline[5]}
  margin: 1rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
`;

const Error = styled.span`
  color: ${colors.error[500]};
`;

function LoginForm({ onLoginClick, handleCloseModal }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  // const { login } = useAuth();

  useEffect(() => {
    setError("");
  }, [onLoginClick]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      console.log("should login");
      setStatus("success");
      handleCloseModal();
    }, 2000);
    // login(formData)
    //   .then(() => {
    //     setStatus("success");
    //     handleCloseModal();
    //   })
    //   .catch((error) => setError(JSON.parse(error.message)));
  }

  return (
    <FormWrapper>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="user@mail.com"
          label="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="*********"
          label="Password"
          onChange={handleChange}
          value={formData.password}
        />
        <Error>{error}</Error>
        {status === "loading" && <LoadingWave />}
        <PrimaryButton type="submit" leftIcon={<RiUserReceivedLine />}>
          Login
        </PrimaryButton>
      </Form>
    </FormWrapper>
  );
}

export default LoginForm;
