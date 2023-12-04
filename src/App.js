import React, { createContext, useState } from "react";
import AppRouter from "./router/AppRouter";
import axios from "axios";

export const RecipeContext = createContext();
const APP_ID = "bfbb3efc";

const APP_KEY = "43faeee790f26cd82b28050d3031619d";

const App = () => {
  //! login ve privateRouter için
  const [name, setName] = useState(localStorage.getItem("username") || "");
  const [pass, setPass] = useState(localStorage.getItem("password") || "");

  //!home header ve recipeCard için
  const [recipes, setRecipes] = useState([]);

  const [query, setQuery] = useState("");
  const [ögün, setOgun] = useState("Breakfast");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`;

  const getData = async () => {
    const { data } = await axios.get(url);
    console.log(data.hits);
    setRecipes(data.hits);
  };
const logout=()=>{
  setName("")
  setPass("")
  localStorage.clear()
}
  return (
    <RecipeContext.Provider
      value={{
        name,
        pass,
        setName,
        setPass,
        setQuery,
        setOgun,
        getData,
        recipes,
        logout,
      }}
    >
      <AppRouter />
    </RecipeContext.Provider>

    // <div>
    //   <AppRouter/>
    // </div>
  );
};

export default App;
