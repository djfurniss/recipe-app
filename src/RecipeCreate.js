import React, { useState } from "react";

// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
// TODO: Add the required input and textarea form elements.
// TODO: Add the required submit and change handlers

export default function RecipeCreate({addRecipe}) {
//---state declaration---
  const INITIAL_STATE = {name: "", cuisine: "", photo: "", ingredients: "", preparation: ""};
  const [recipeFormData, setRecipeFormData] = useState(INITIAL_STATE);
//---event handlers---
  const inputChangeHandler = ({target}) =>{
    setRecipeFormData({...recipeFormData, [target.name]: target.value});
  };

  const formClearer = () => setRecipeFormData(INITIAL_STATE);
  
  const submitHandler = (event) =>{
    event.preventDefault();
    addRecipe(recipeFormData);
    formClearer();
  }
//---return---  
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Name" 
                  onChange={inputChangeHandler} 
                  value={recipeFormData.name}/>
            </td>
            <td>
                <input 
                  name="cuisine" 
                  type="text" 
                  placeholder="Cuisine"
                  onChange={inputChangeHandler}
                  value={recipeFormData.cuisine}/>

            </td>
            <td>
                <input 
                  name="photo" 
                  type="text" 
                  placeholder="URL"
                  onChange={inputChangeHandler}
                  value={recipeFormData.photo}/>
            </td>
            <td>
                <textarea 
                  name="ingredients" 
                  placeholder="Ingredients"
                  onChange={inputChangeHandler}
                  value={recipeFormData.ingredients}/>
            </td>
            <td>
                <textarea 
                  name="preparation" 
                  placeholder="Preparation"
                  onChange={inputChangeHandler}
                  value={recipeFormData.preparation}/>
            </td>
            <td>
              <button type="submit">Post Recipe</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
