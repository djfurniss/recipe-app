import React from "react";
import OneRecipe from "./OneRecipeBlip";
import {AiFillCaretRight} from "react-icons/ai"

// TODO: Display the list of recipes using the structure of table that is provided.
// TODO: Create at least one additional component that is used by this component.
// TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
//Each recipe passed as a prop to OneReipe will return as a tr to fill in the tbody

export default function RecipeList({recipes, deleteRecipe}) {
  
  return (
    <div className="recipe-list-div">
      <div className="category-name">
        <p>All Recipes</p>
      </div>
        <div className="row">
          <div className="recipe-list-carasol">
            {recipes.length && recipes.map((recipe, idx) => <OneRecipe recipe={recipe} deleteRecipe={deleteRecipe} key={idx}/>)}
          </div>
          <div id="transp"></div>
          <AiFillCaretRight
            id="right-arrow"
            size={30}
            onClick={(e)=>{
              // console.log(e.target.parentElement.children[0].scrollLeft)
              e.target.parentElement.parentElement.children[0].scrollLeft += 270 * 5;
              // console.log(window.innerWidth)
                  // one blip client width is 270
              // ^ at 1500 and above, innerWidth - scroll by 5 blips
              // below 1500 scroll by 4s
              // below 1220, scroll by 3s
              // below 950 scroll by 2s
              // below 680 scroll by 1
              }}/>
        </div>
    </div>
  );
};
