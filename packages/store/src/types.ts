export interface Item {
  product: string;
  description: string;
  price: number;
  imageLink: string;
  published: boolean;
}

export interface User {
  isLoading: boolean;
  userEmail: string | null;
  purchasedItems?: Item[];
}
