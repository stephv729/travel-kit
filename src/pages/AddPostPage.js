import styled from "@emotion/styled";
import Input from "../components/Input";
import { colors, typography } from "../styles";
import { RiUploadLine } from "react-icons/ri";
import { fonts } from "../styles/typography";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { submitImages } from "../utils";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { createPost } from "../services/posts-service";

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

const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 1px solid ${colors.primary[300]};
  font-family: ${fonts.secondary};
  min-height: 4.75rem;
  ${typography.body[2]};
  &::placeholder {
    color: ${colors.secondary[500]};
  }
`;

const PhotoSectionContainer = styled.div`
  & h3 {
    ${typography.headline[6]}
    font-weight: 500;
  }
  & p {
    font-family: ${fonts.secondary};
    ${typography.caption}
    color: ${colors.secondary[500]};
  }
`;

const PhotoUploader = styled.div`
  & h4 {
    ${typography.overline}
  }
`;

const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const UploadedBoxContainer = styled.div`
  display: flex;
  gap: 1rem;
  background-color: ${colors.secondary[300]};
  padding: 0.5rem;
`;

const UploadedBox = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 0.5rem;
  background-color: ${colors.secondary[400]};
  display: flex;
  justify-content: center;
  align-items: center;
  ${typography.caption}
`;

const ImgBox = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgDeleteBtn = styled.button`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.25rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background-color: ${colors.primary[300]};
  color: ${colors.secondary[200]};
  position: absolute;
  top: 15px;
  right: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary[400]};
  }
`;
const default_data = {
  title: "",
  body: "",
};

export default function AddPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [postData, setPostData] = useState(default_data);
  const [error, setError] = useState("");

  const changeInput = (e) => {
    let indexImg;
    if (images.length > 0) {
      indexImg = images[images.length - 1].index + 1;
    } else {
      indexImg = 0;
    }

    let newImgsToState = readMultiFiles(e, indexImg);
    let newImgsState = [...images, ...newImgsToState];
    setImages(newImgsState);

    console.log(newImgsState);
  };

  function readMultiFiles(e, indexInicial) {
    const files = e.currentTarget.files;
    const arrayImages = [];
    Object.keys(files).forEach((i) => {
      const file = files[i];
      let url = URL.createObjectURL(file);
      arrayImages.push({
        index: indexInicial,
        name: file.name,
        url,
        file,
      });
      indexInicial++;
    });
    return arrayImages;
  }

  function deleteImg(indice) {
    const newImgs = images.filter(function (element) {
      return element.index !== indice;
    });
    console.log(newImgs);
    setImages(newImgs);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    Promise.all(submitImages(images))
      .then((urls) => {
        const newPhotoUrls = [postData.photoUrl, ...urls];
        const newPostData = {
          ...postData,
          TripId: id,
          photoUrl: newPhotoUrls[0],
        };
        createPost(newPostData)
          .then(() => {
            navigate("/trips/" + id);
          })
          .catch((e) => {
            console.log(e);
            setError(
              "Please, complete all the form. Only photos are optional."
            );
          });
      })
      .catch((_e) =>
        setError("Your photos couldn't be uploaded. Please, try again.")
      );
  }

  function handleChange(e) {
    const input = e.target;
    setPostData({
      ...postData,
      [input.name]: input.value,
    });
  }

  return (
    <MainContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Create a post about your trip</h2>

        <>
          <div>
            <Input
              name="title"
              placeholder="My last adventure in South Africa"
              width="50%"
              onChange={handleChange}
              value={postData.title}
              label="Title"
            />
          </div>
        </>

        <InputWrapper>
          <h4>Describe your trip</h4>
          <StyledTextArea
            name="body"
            onChange={handleChange}
            value={postData.body}
            placeholder="My trip started when ..."
          />
          <p>Share any info you consider that would be useful for others.</p>
        </InputWrapper>
        <PhotoSectionContainer>
          <h3>Photos</h3>
          <PhotoUploader>
            <h4>
              Please just upload one photo.( Soon you will be able to upload
              more photos)
            </h4>
            <SecondaryButton
              lefticon={<RiUploadLine size="1.25rem" />}
              style={{ position: "relative" }}
            >
              Choose a file
              <InputFile type="file" onChange={changeInput} />
            </SecondaryButton>

            <input type="file" style={{ display: "none" }} />
          </PhotoUploader>
          <p>Only images, max 5MB</p>
        </PhotoSectionContainer>
        <UploadedBoxContainer>
          {images.length === 0 ? (
            <UploadedBox>No photos yet</UploadedBox>
          ) : (
            images.map((image) => (
              <UploadedBox key={image.index}>
                <ImgBox>
                  <ImgDeleteBtn onClick={deleteImg.bind(this, image.index)}>
                    X
                  </ImgDeleteBtn>
                  <img
                    alt="new_pic"
                    src={image.url}
                    data-toggle="modal"
                    data-target="#ModalPreViewImg"
                    style={{ height: "80%" }}
                  />
                </ImgBox>
              </UploadedBox>
            ))
          )}
        </UploadedBoxContainer>
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
