import React, { useState } from "react";
import "./App.css";
import RecipeData from "./RecipeData";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";

// TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
// TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

export default function App() {
//---state declaration---
  const [recipes, setRecipes] = useState(RecipeData);
//---state change handlers---
  const addRecipe = (newRecipe) => {setRecipes([...recipes, newRecipe])};

  const deleteRecipe = (indexToDel) => {
    //the nonDelRecipes arr keeps the recipes that aren't to be deleted so they can be rerendered
    const nonDelRecipes = recipes.filter((_, index)=> index !== indexToDel)
    setRecipes(nonDelRecipes)
  };
//---return---
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe}/>
    </div>
  );
};
