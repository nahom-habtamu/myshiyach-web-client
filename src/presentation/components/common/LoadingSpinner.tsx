import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { PRIMARY_COLOR } from "../../constants/colors";

const override: CSSProperties = {
  display: "block",
  borderColor: PRIMARY_COLOR,
};

const LoadingSpinner = () => {
  return (
    <ClipLoader
      color={"black"}
      loading={true}
      cssOverride={override}
      size={150}
    />
  );
};

export default LoadingSpinner;
