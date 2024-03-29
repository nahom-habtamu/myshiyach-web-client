import { CSSProperties } from "react";
import { BounceLoader } from "react-spinners";
import { PRIMARY_COLOR } from "../../constants/colors";
import { LoadingSpinnerWrapperStyled } from "../../styled_components/common/LoadingSpinnerWrapperStyled";

const override: CSSProperties = {
  display: "block",
  borderColor: "grey",
};

const LoadingSpinner = ({ size, fullHeightAndWidth }: { size?: number, fullHeightAndWidth?: boolean }) => {
  return (
    <LoadingSpinnerWrapperStyled fullHeightAndWidth={fullHeightAndWidth}>
      <BounceLoader
        color={PRIMARY_COLOR}
        loading={true}
        cssOverride={override}
        size={size ?? 80}
      />
    </LoadingSpinnerWrapperStyled>
  );
};

export default LoadingSpinner;
