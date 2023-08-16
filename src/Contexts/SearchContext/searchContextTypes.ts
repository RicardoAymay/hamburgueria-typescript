import { iProductList } from '../UserContext/userInterfaces';
export interface iSearchValues{
searchValue: string,
setSearchValue: React.Dispatch<React.SetStateAction<string>>
handleSearch: (ev: React.ChangeEvent<HTMLInputElement>) => void;
filteredProducts: iProductList[]
}

export interface iSearchProvider{
    children: React.ReactNode
}