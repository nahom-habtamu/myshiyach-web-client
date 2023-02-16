type EditProductRequest = {
  title: string;
  description: string;
  price: number;
  mainCategory: string;
  subCategory: string;
  city: string;
  contactPhone: string;
  contactName: string;
  productImages: string[];
  productDetail: Object;
};

export default EditProductRequest;
