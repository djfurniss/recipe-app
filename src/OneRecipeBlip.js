import React from "react"

//This component is responsible for the rendering of one singe recipe as a tr
export default function OneRecipe({recipe, deleteRecipe}){
    return(
        <div className="one-recipe">
            <img src={recipe.photo} alt=""/>
            <p>{recipe.name}</p>
        </div>
    );
};