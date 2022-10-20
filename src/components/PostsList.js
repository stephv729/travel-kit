import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { TbMoodEmpty } from "react-icons/tb";
import PostCardDetail from "./PostCardDetail";

const ListContainer = styled.div`
  display: grid;
  place-items: center;
  margin-top: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  row-gap: 3rem;
`;

const NotFoundContainer = styled.div`
  height: 40rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${typography.headline[3]}
  color: ${colors.secondary[500]};
`;

function PostsList({ posts }) {
  return (
    <div>
      <ListContainer>
        {posts.map((item) => (
          <PostCardDetail post={item} key={item.id} />
        ))}
      </ListContainer>
      {posts.length === 0 && (
        <NotFoundContainer>
          No results found
          <TbMoodEmpty size="4rem" />
        </NotFoundContainer>
      )}
    </div>
  );
}

export default PostsList;
