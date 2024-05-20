import React from "react";
import Product from "../Product";

const Menu = ({ menu }) => {
  return (
    <div>
      {menu.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          ingredients={product.ingredients}
        />
      ))}
    </div>
  );
};

export default Menu;
