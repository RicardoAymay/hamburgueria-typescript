

export interface iLoginData {
  email: string;
  password: string;
}

export interface iResponseData {
  accessToken: string;
  user: string;
  name: string;
  id: string;
}

export interface iUserValues {
  submitLogin: (loginData: iLoginData) => void;
  user: boolean;
  products: iProductList[];
  loading: boolean;
  setProducts:React.Dispatch<React.SetStateAction<iProductList[]>>;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iProductList {
  id: string;
  img: string;
  name: string;
  category: string;
  price: number;
}
