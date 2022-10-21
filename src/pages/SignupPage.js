import SignUpForm from "../components/SignUpForm";
import { colors } from "../styles";
import styled from "@emotion/styled";

const StyledSignUpPage = styled.div`
  min-height: inherit;
`;

const StyledHeader = styled.header`
  height: 22rem;
  background-color: ${colors.primary[100]};
`;

function SignupPage() {
  return (
    <StyledSignUpPage>
      <StyledHeader>
          <SignUpForm />
      </StyledHeader>
    </StyledSignUpPage>
  );
}

export default SignupPage;
