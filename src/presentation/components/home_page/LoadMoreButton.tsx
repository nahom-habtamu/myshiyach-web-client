import {
  HomePageLoadMoreButtonStyled,
  HomePageLoadMoreButtonWrapperStyled,
} from "../../styled_components/home/HomePageLoadMoreButtonStyled";

type LoadMoreButtonProps = {
  onPressed: Function;
  text: string;
};

const LoadMoreButton = ({ onPressed, text }: LoadMoreButtonProps) => {
  return (
    <HomePageLoadMoreButtonWrapperStyled>
      <HomePageLoadMoreButtonStyled onClick={() => onPressed()}>
        {text}
      </HomePageLoadMoreButtonStyled>
    </HomePageLoadMoreButtonWrapperStyled>
  );
};

export default LoadMoreButton;
