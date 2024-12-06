import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Items from "./Item"; // Ensure this is an array of objects with `id`, `name`, and `category`

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h1>Shopping List</h1>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList Items={Items} />
    </div>
  );
}

export default App;
