import React, { useState } from "react";
import Menu from "../Menu";
import Navbar from "../Navbar";

const Restaurants = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    (restaurant) => restaurant.id === activeRestaurantId
  );

  return (
    <div>
      id: {activeRestaurantId}
      <Navbar
        restaurants={restaurants}
        setActiveRestaurantId={setActiveRestaurantId}
      />
      <Menu menu={activeRestaurant.menu} />
    </div>
  );
};

export default Restaurants;
