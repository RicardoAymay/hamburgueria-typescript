import { createContext, useState, useContext, useEffect } from 'react';
import { iSearchValues, iSearchProvider } from "./searchContextTypes";

import { UserContext } from '../UserContext/UserContext';

export const SearchContext = createContext({} as iSearchValues);

export const SearchProvider = ({ children }: iSearchProvider) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const {products} = useContext(UserContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchValue(ev.target.value)
    let currentSearchValue = ev.target.value;
    if (currentSearchValue !== ''){
      let newFilteredProducts = products.filter((product) => {
          return product.name.toLowerCase().includes(currentSearchValue.toLowerCase())
      })
      setFilteredProducts(newFilteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }
  
  return (
    <SearchContext.Provider value={{searchValue, setSearchValue, handleSearch, filteredProducts }}>
      {children}
    </SearchContext.Provider>
  );
};
