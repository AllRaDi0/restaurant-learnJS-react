import React from "react";

const Navbar = ({ restaurants, setActiveRestaurantId }) => {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li
          key={restaurant.id}
          onClick={() => setActiveRestaurantId(restaurant.id)}
        >
          {restaurant.name}
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
