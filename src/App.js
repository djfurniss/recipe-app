import React, { useState } from "react";
import RecipeData from "./RecipeData";
// import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import "./styles/App.css";

/*
TODO: recipe is a card, card is clicked and goes to different full page, recipe page
  card is just the image with name underneath.. carasol style ? 
TODO: favorite a recipe and have a separte section to list the favorited recipes

? use bootstrap??
? mobile first development??

* Random features I want to implement in the long run:
  - be able to search for a recipe by name, cuisine, and ingredients; search bar at top
  - in each strip, load the first 25 recipes then when they get to the end, have a 'show all' option that opens another page or just expands all the recipes in that category down
 */

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
        {/* favorite recipes */}
      {/* <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/> */}
      {/* <RecipeCreate addRecipe={addRecipe}/> */}
    </div>
  );
};
