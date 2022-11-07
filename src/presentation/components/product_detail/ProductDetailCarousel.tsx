import styled, { css } from "styled-components";

const makeCarousel = require("react-reveal/makeCarousel");
const Slide = require("react-reveal/Slide");

const height = "500px";
const width = "1000px";

const Container = styled.div`
  border: 1px solid black;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 2px;
`;

const Children = styled.div`
  width: ${width};
  height: ${height};
  position: relative;
`;

const Arrow = styled.div<{ right: boolean }>`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  line-height: ${height};
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${(props) =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`;

const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
  color: white !important;
`;

const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
  color: white !important;
  position: border;
`;

type CarouselUIProps = {
  position: number;
  total: number;
  handleClick: Function;
  children: any;
};

const CarouselUI = ({
  position,
  total,
  handleClick,
  children,
}: CarouselUIProps) => (
  <Container>
    <Children>
      {children}
      <Arrow
        right={false}
        onClick={() => handleClick()}
        data-position={position - 1}
      >
        {"<"}
      </Arrow>
      <Arrow
        right={true}
        onClick={() => handleClick()}
        data-position={position + 1}
      >
        {">"}
      </Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={() => handleClick()} data-position={index}>
          {index === position ? "● " : "○ "}
        </Dot>
      ))}
    </Dots>
  </Container>
);

const Carousel = makeCarousel(CarouselUI);

export default function App() {
  return (
    <div className="App">
      <Carousel>
        <Slide right>
          <img src="https://images.unsplash.com/photo-1667666111099-07b0a9ee4f30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1394&q=80" />
        </Slide>
        <Slide right>
          <img src="https://images.unsplash.com/photo-1667733807474-b53ebc043054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        </Slide>
        <Slide right>
          <img src="https://plus.unsplash.com/premium_photo-1663047726632-4e56b16b75a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        </Slide>
      </Carousel>
    </div>
  );
}
