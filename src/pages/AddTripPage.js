import styled from "@emotion/styled";
import Input from "../components/Input";
import { colors, typography } from "../styles";
import { fonts } from "../styles/typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import { useAuth } from "../context/auth-context";
import { createTrip } from "../services/trips-service";

const MainContainer = styled.div`
  min-height: inherit;
  padding: 2rem;
  margin: 0 7.5rem;
`;

const FormContainer = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & p {
    font-family: ${fonts.secondary};
    ${typography.caption}
    color: ${colors.secondary[600]};
  }
`;

const InputWrapper = styled.div`
  & h4,
  h5 {
    ${typography.overline};
    margin: 0;
  }
  & h5 {
    text-transform: uppercase;
  }
  p {
    ${typography.caption};
    margin: 0;
  }
`;

const default_data = {
  place: "",
  startDate: "",
  endDate: "",
};

export default function AddTripPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [tripData, setTripData] = useState(default_data);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    createTrip({ ...tripData, UserId: user.id })
      .then(() => {
        navigate("/my_trips");
      })
      .catch((e) => {
        console.log(e);
        setError(
          JSON.parse(e.message)?.error || "Please, complete all the form."
        );
      });
  }

  function handleChange(e) {
    const input = e.target;
    setTripData({
      ...tripData,
      [input.name]: input.value,
    });
  }

  return (
    <MainContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Create a new trip</h2>

        <>
          <div>
            <Input
              name="place"
              placeholder="South Africa"
              width="50%"
              onChange={handleChange}
              value={tripData.title}
              label="Destination"
            />
          </div>
        </>

        <InputWrapper>
          <h4>Set time period</h4>
          <Input
            type="date"
            label="Start Date"
            name="startDate"
            onChange={handleChange}
            value={tripData.startDate}
          />
          <Input
            type="date"
            label="End Date"
            name="endDate"
            onChange={handleChange}
            value={tripData.endDate}
          />
        </InputWrapper>
        {error && <span style={{ color: colors.error[500] }}>{error}</span>}
        <PrimaryButton
          type="submit"
          style={{ width: "fit-content", padding: "1rem 1.5rem" }}
        >
          Submit
        </PrimaryButton>
      </FormContainer>
    </MainContainer>
  );
}
