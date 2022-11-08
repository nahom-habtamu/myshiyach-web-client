import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { PRIMARY_COLOR } from "../../constants/colors";

const ProductDetailCarousel = () => {
  let images = [
    "https://images.unsplash.com/photo-1667857481501-b447de8ed0c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1661347333279-66f30d127efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ];

  return (
    <Carousel
      autoPlay={false}
      swipe={true}
      navButtonsAlwaysVisible={true}
      next={(next, active) =>
        console.log(`we left ${active}, and are now at ${next}`)
      }
      prev={(prev, active) =>
        console.log(`we left ${active}, and are now at ${prev}`)
      }
      className="product-detail-carousel"
      indicatorIconButtonProps={{
        style: {
          padding: "5px", // 1
          color: PRIMARY_COLOR, // 3
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: "white", // 2
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
      {images.map((image, i) => (
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
