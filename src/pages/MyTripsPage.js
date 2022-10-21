import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { getTrips } from "../services/trips-service";
import { colors, typography } from "../styles";

const Wrapper = styled.div`
  min-height: inherit;
  max-width: 52rem;
  margin: 2rem 0;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Title = styled.span`
  ${typography.headline[4]};
  padding: 1rem 0;
`;

const TripsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  background: ${colors.primary[400]};
  ${typography.overline}
  color: ${colors.primary[100]};
  cursor: pointer;
  &:hover {
    background: ${colors.primary[300]};
  }
`;
const AddTrip = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  background: ${colors.primary[200]};
  border-width: 1px;
  border-style: dashed;
  ${typography.overline}
  color: ${colors.secondary[100]};
  cursor: pointer;
  &:hover {
    background: ${colors.primary[300]};
  }
`;

export default function MyTripsPage() {
  // const { myTrips } = useTrips();
  const { user } = useAuth();
  const [allTrips, setAllTrips] = useState([]);

  const myTrips = allTrips.filter((trip) => trip.UserId === user?.id);

  useEffect(() => {
    getTrips()
      .then((data) => setAllTrips(data))
      .catch(console.log);
  }, []);

  return (
    <Wrapper>
      <Title>My trips</Title>
      <TripsList>
        {myTrips.length !== 0 &&
          myTrips.map((trip) => (
            <StyledNavLink key={trip.id} to={`/trips/${trip.id}`}>
              {trip.place}
            </StyledNavLink>
          ))}
      </TripsList>
      <AddTrip to="/addtrip"> Add a new trip </AddTrip>
    </Wrapper>
  );
}
