type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  mainCategory: string;
  subCategory: string;
  city: string;
  contactPhone: string;
  createdAt: string;
  refreshedAt: string;
  createdBy: string;
  productImages: [string];
  productDetail: Object;
};

export default Product;
