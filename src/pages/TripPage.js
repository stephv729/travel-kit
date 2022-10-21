import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import PostCardDetail from "../components/PostCardDetail";
import { useTrips } from "../context/trips-context";
import { showTrip } from "../services/trips-service";
import { colors, typography } from "../styles";

const Wrapper = styled.div`
  min-height: inherit;
  max-width: 52rem;
  margin: 2rem 0;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.span`
  ${typography.headline[4]};
  padding: 1rem 0;
`;

const AddPost = styled.div`
  width: 18.75rem;
  height: 20rem;
  border: 3px dashed ${colors.secondary[500]};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & svg {
    color: ${colors.secondary[300]};
  }
  &:hover {
    background-color: ${colors.secondary[300]};
    border: 3px dashed ${colors.primary[300]};
    & svg {
      color: ${colors.primary[300]};
    }
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.secondary[100]};
  cursor: pointer;
`;

export default function TripPage() {
  const { id } = useParams();
  const { posts } = useTrips();
  const [tripData, setTripData] = useState([]);
  useEffect(() => {
    showTrip(id).then((data) => setTripData(data));
  }, [id]);
  const post = posts.find((post) => post.TripId === +id);
  return (
    <Wrapper>
      <Title>{tripData.place}</Title>
      {post ? (
        <PostCardDetail post={post}></PostCardDetail>
      ) : (
        <StyledNavLink to={"/addpost/" + id}>
          <AddPost> Add a Blog Post </AddPost>
        </StyledNavLink>
      )}
    </Wrapper>
  );
}
