import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import { showPost } from "../services/posts-service";
import defaultImg from "../assets/img/no-image-available.png";
import { shortDate } from "../components/utils";
import Loader from "../components/Loader";

const Wrapper = styled.div`
  min-height: inherit;
  max-width: 52rem;
  margin: 2rem 0;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const TitleContainer = styled.div`
  color: ${colors.primary[100]};
  & h2 {
    ${typography.headline[4]}
  }
  & h4 {
    ${typography.subtitle[1]}
    color: ${colors.secondary[600]};
  }
`;

const BodyContainer = styled.div`
  padding: 1.5rem 0;
  & h3 {
    color: ${colors.secondary[100]};
    font-weight: 500;
  }
`;

export default function PostDetailPage() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const { body, title, updatedAt, photoUrl, userDetails } = post;

  useEffect(() => {
    setLoading(true);
    showPost(id)
      .then((data) => {
        setLoading(false);
        console.log(data);
        setPost(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {" "}
      {loading ? (
        <Loader />
      ) : (
        <Wrapper>
          <ImageContainer>
            <img src={photoUrl || defaultImg} alt="blog-post" />
          </ImageContainer>

          <TitleContainer>
            <h2>{title}</h2>
            <h4>
              Last Updated on {shortDate(updatedAt)} by @{userDetails?.username}
            </h4>
          </TitleContainer>
          <BodyContainer>
            <h3>{body}</h3>
          </BodyContainer>
        </Wrapper>
      )}
    </>
  );
}
