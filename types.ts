export type Billboard = {
  id: string;
  label: string;
  imageUrl: string;
};

export type Category = {
  id: string;
  name: string;
  billboard: Billboard;
};

export type Product = {
  id: string;
  category: Category;
  name: string;
  price: string;
  description: string;
  isFeatured: boolean;
  gender: Gender;
  color: Color;
  images: Image[];
};

export type Image = {
  id: string;
  url: string;
};

export type Gender = {
  id: string;
  name: string;
  value: string;
};

export type Color = {
  id: string;
  name: string;
  value: string;
};
