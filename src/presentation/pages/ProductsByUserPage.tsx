import { useParams } from "react-router-dom";
import MasterComponent from "../components/common/master_component";

const ProductsByUserPage = () => {
  let { id } = useParams<any>();

  return (
    <MasterComponent activePage={ProductsByUserPageRoute}>
      I am ProductsByUserPage {id}
    </MasterComponent>
  );
};

export default ProductsByUserPage;
export const ProductsByUserPageRoute = "/productsByUser/:id";
