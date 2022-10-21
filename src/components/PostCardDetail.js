import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { BsCalendarCheck } from "react-icons/bs";
import { boxShadow } from "../styles/utils";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import noImageAvailable from "../assets/img/no-image-available.png";
import { shortDate } from "../utils";

const Wrapper = styled.div`
  position: relative;
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  ${boxShadow[1]};
  border-radius: 0.5rem;
  background-color: ${colors.primary[400]};
  cursor: pointer;
  user-select: none;
`;

const CardImg = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ShowCaseImg = styled.img`
  width: 100%;
  height: 12.5rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const ShowCaseData = styled.div`
  width: 100%;
  height: 7.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

const LastUpdate = styled.div`
  position: absolute;
  width: 8rem;
  height: 1.75rem;
  border-top-right-radius: 0.5rem;
  background: ${colors.primary[100]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.5rem;
  color: ${colors.secondary[200]};
`;

const TitleContainer = styled.div`
  color: ${colors.secondary[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  ${typography.headline[5]}
  padding: 1.5rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.secondary[100]};
  cursor: pointer;
`;

function PostCardDetail({ post }) {
  const { id, title, photoUrl, updatedAt } = post;

  return (
    <Wrapper>
      <StyledNavLink to={`/blog_posts/${id}`}>
        <CardImg>
          <LastUpdate>
            <BsCalendarCheck />
            {shortDate(updatedAt)}
          </LastUpdate>
          <ShowCaseImg
            src={photoUrl || noImageAvailable}
            alt="post-thumbnail"
          />
        </CardImg>
      </StyledNavLink>
      <ShowCaseData>
        <StyledNavLink to={`/blog_posts/${id}`}>
          <TitleContainer>
            <span>{title}</span>
          </TitleContainer>
        </StyledNavLink>
      </ShowCaseData>
    </Wrapper>
  );
}

export default PostCardDetail;
