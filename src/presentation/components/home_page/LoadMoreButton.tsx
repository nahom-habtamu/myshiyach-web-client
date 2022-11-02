import {
  HomePageLoadMoreButtonStyled,
  HomePageLoadMoreButtonWrapperStyled,
} from "../../styled_components/home/HomePageLoadMoreButtonStyled";

type LoadMoreButtonProps = {
  onPressed: Function;
};

const LoadMoreButton = ({ onPressed }: LoadMoreButtonProps) => {
  return (
    <HomePageLoadMoreButtonWrapperStyled>
      <HomePageLoadMoreButtonStyled onClick={() => onPressed()}>
        Load More
      </HomePageLoadMoreButtonStyled>
    </HomePageLoadMoreButtonWrapperStyled>
  );
};

export default LoadMoreButton;
