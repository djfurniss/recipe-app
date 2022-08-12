import React from "react"
export default function OneRecipe({recipe}){
    

//---return---
    return(
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} alt=""/></td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <td><button name="delete">Delete</button></td>
        </tr>
    )
}