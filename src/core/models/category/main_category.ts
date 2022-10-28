import RequiredFeild from "./required_feild";
import SubCategory from "./sub_category";

type MainCategory = {
  _id: string;
  title: string;
  subCategories: [SubCategory];
  requiredFeilds: [RequiredFeild];
};

export default MainCategory;
