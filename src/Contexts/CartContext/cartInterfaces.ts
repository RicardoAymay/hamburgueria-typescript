import { iProductList } from '../UserContext/userInterfaces';
export interface iCartValues {
  includeItem: (ev: any, el: iCartItem) => void;
  reduceItem: (itemId: string) => void;
  itemOperation: (event: React.MouseEvent<HTMLButtonElement>, item: iCartItem) => void;
  cartItems: iCartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<iCartItem[]>>;
  sumItems: (cartItems: iCartItem[]) => number;
  modalCart: boolean;
  setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  total: number;
  excludeItemOnclick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export interface iCartItem extends iProductList {
  quantity?: number
}


export interface iCartProvider {
  children: React.ReactNode;
}
