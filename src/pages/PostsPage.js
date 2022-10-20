import styled from "@emotion/styled";
import { useTrips } from "../context/trips-context";
import PaginationBar from "../components/PaginationBar";
import PostsList from "../components/PostsList";
import { useState } from "react";

const Wrapper = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  min-height: 80vh;
  padding: 1.5rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  min-height: inherit;
`;

function PostsPage() {
  const { posts } = useTrips();
  const totalPages = posts.length !== 0 ? Math.ceil(posts.length / 6) : 1;
  const [page, setPage] = useState(1);
  const postsToShow = posts.slice((page - 1) * 6, page * 6);

  return (
    <Wrapper>
      <p>{posts.length} posts found</p>
      <ListContainer>
        <PostsList posts={postsToShow} />
        <PaginationBar total={totalPages} page={page} onChangePage={setPage} />
      </ListContainer>
    </Wrapper>
  );
}

export default PostsPage;
