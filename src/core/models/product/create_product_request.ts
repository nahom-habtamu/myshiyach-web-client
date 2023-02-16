type CreateProductRequest = {
  title: string;
  description: string;
  price: number;
  mainCategory: string;
  subCategory: string;
  city: string;
  contactPhone: string;
  contactName: string;
  createdBy: string;
  productImages: string[];
  productDetail: Object;
};

export default CreateProductRequest;
