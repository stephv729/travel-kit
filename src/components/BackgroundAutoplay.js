import BG1 from "../assets/img/bg-airplane.jpg";
import BG2 from "../assets/img/bg-mountain.jpg";
import BG3 from "../assets/img/bg-beach.jpg";
import BG4 from "../assets/img/bg-temple.jpg";
import styled from "@emotion/styled";
import { colors } from "../styles";
import { useEffect, useState } from "react";

const backgrounds = [BG1, BG2, BG3, BG4];

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  position: relative;
`;
const Slider = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

const Slides = styled.div`
  width: ${(backgrounds.length+1)*100}%;
  display: flex;

  input {
    display: none;
  }
`;

const Slide = styled.div`
  width: 20%;
  transition-duration: 2s;
  margin-left: ${({ step }) => step};
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Navigation = styled.div`
  position: absolute;
  right: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
`;

const Btn = styled.label`
  border: 2px solid ${colors.primary[300]};
  padding: 0.5rem;
  border-radius: 100%;
  cursor: pointer;
  transition: 1s;
  ${({ type, id, chosen }) => {
    return type === "auto"
      ? `background:  ${id === chosen ? colors.primary[300] : "transparent"};
        `
      : `&:hover {
    background: ${colors.primary[300]};
  }`;
  }}
`;

export default function BackgroundAutoplay() {
  const [chosen, setChosen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newChosen = chosen >= backgrounds.length - 1 ? 0 : chosen + 1;
      setChosen(newChosen);
    }, 5000);
    return () => clearInterval(interval);
  }, [chosen]);

  function Play(e) {
    const key = e.target.id.split("-")[1];
    setChosen(+key);
  }

  const step = (100 / (backgrounds.length + 1)) * chosen;

  return (
    <Wrapper>
      <Slider>
        <Slides>
          {backgrounds.map((_bg, index) => {
            return (
              <input
                type="radio"
                name="radio-btn"
                id={`radio-${index}`}
                key={index}
                onClick={Play}
              />
            );
          })}

          {backgrounds.map((bg, index) => {
            return (
              <Slide key={index} step={index === 0 ? `-${step}%` : ""}>
                <img src={bg} alt={`background-${index}`}></img>
              </Slide>
            );
          })}

          <Navigation>
            {backgrounds.map((_bg, index) => (
              <Btn type="auto" key={index} id={index} chosen={chosen} />
            ))}
          </Navigation>

          <Navigation>
            {backgrounds.map((_bg, index) => (
              <Btn key={index} htmlFor={`radio-${index}`} />
            ))}
          </Navigation>
        </Slides>
      </Slider>
    </Wrapper>
  );
}
