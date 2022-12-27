import RequiredFeild from "./required_feild";
import SubCategory from "./sub_category";

type MainCategory = {
  _id: string;
  title: string;
  subCategories: SubCategory[];
  requiredFields: RequiredFeild[];
};

export default MainCategory;
