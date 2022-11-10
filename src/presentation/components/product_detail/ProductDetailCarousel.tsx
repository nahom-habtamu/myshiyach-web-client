import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { PRIMARY_COLOR } from "../../constants/colors";

const ProductDetailCarousel = ({ pictures }: { pictures: string[] }) => {
  return (
    <Carousel
      autoPlay={false}
      swipe={true}
      navButtonsAlwaysVisible={pictures.length != 0}
      className="product-detail-carousel"
      indicatorIconButtonProps={{
        style: {
          padding: "5px",
          color: PRIMARY_COLOR,
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: "white",
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: "-50px",
          textAlign: "center",
          zIndex: 1,
          position: "relative",
        },
      }}
    >
      {pictures.map((image, i) => (
        <ProductCarouselItem key={i} image={image} />
      ))}
    </Carousel>
  );
};

type ProductCarouselItemProps = {
  image: string;
};

const ProductCarouselItem = ({ image }: ProductCarouselItemProps) => {
  return (
    <Paper>
      <img src={image} className="product-detail-carousel-image" />
    </Paper>
  );
};

export default ProductDetailCarousel;
