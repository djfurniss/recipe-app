import React from "react";
import OneRecipe from "./OneRecipe";

// TODO: Display the list of recipes using the structure of table that is provided.
// TODO: Create at least one additional component that is used by this component.
// TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
//Each recipe passed as a prop to OneReipe will return as a tr to fill in the tbody

export default function RecipeList({recipes, deleteRecipe}) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {recipes.map((recipe, index)=> 
            <OneRecipe key={index} recipe={recipe} deleteRecipe={()=>deleteRecipe(index)}/>)}
        </tbody>
      </table>
    </div>
  );
};

