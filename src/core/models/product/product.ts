type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  mainCategory: string;
  subCategory: string;
  city: string;
  contactPhone: string;
  contactName: string | undefined | null;
  createdAt: string;
  refreshedAt: string;
  createdBy: string;
  productImages: [string];
  productDetail: Object;
};

export default Product;
