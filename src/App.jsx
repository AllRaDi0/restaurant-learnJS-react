import React from "react";
import Restaurants from "./components/Restaurants/Restaurants";
import { restaurants } from "./fixtures";

const App = () => {
  return (
    <div>
      <Restaurants restaurants={restaurants} />
    </div>
  );
};

export default App;
