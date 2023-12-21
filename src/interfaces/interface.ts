export interface ProductsOfCart {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
}
export interface Cart {
  id: number;
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface UsersInfo {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string; // Optional property
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  ip: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
}

export interface PostInfo {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}
export interface QuoteInfo {
  id: number;
  quote: string;
  author: string;
}
export interface CommentsInfo {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

export interface CartsInfo {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}