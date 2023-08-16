import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import { SearchContext } from '../../Contexts/SearchContext/index';

const ProductList = () => {
  const {filteredProducts} = useContext(SearchContext)
  const { includeItem } = useContext(CartContext);
  

  return (
    <>
      {filteredProducts.map((el) => (
        <li key={el.id} id={el.id}>
          <figure>
            <img src={el.img} alt="" />
          </figure>
          <div className="liBottom">
            <p>{el.name}</p>
            <p>{el.category}</p>
            <p className="tagPrice">R$:{el.price}</p>
            <button id={el.id} onClick={(ev) => includeItem(ev, el)}>
              Adicionar
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default ProductList;
