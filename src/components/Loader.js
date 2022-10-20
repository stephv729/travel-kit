import styled from "@emotion/styled";
import { RaceBy } from "@uiball/loaders";
import { colors } from "../styles";

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export default function Loader({ color }) {
  return (
    <StyledLoading>
      <RaceBy size={47} speed={1} color={color || colors.primary[300]} />
    </StyledLoading>
  );
}
