import React from "react";
import { useAmount } from "../../hooks/useAmount";

const Product = ({ name, price, ingredients }) => {
  const { count, increment, decrement } = useAmount();
  return (
    <>
      <h3>{name}</h3>
      <span>Price: {price}</span>
      <ul>
        <b>Ingredients:</b>
        {ingredients.map((ingredient, indx) => (
          <li key={indx}>{ingredient}</li>
        ))}
      </ul>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement} disabled={count <= 0}>
        -
      </button>
      <hr />
    </>
  );
};

export default Product;
