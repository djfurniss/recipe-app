import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  const INITIAL_STATE = {name: "", cuisine: "", photo: "", ingredients: "", preparation: ""}
  const [newRecipeData, setNewRecipeData] = useState(INITIAL_STATE)

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  function inputChangeHandler (event){
    setNewRecipeData({...newRecipeData, [event.target.name]: event.target.value})
  }

  function formClearer(){
    setNewRecipeData(INITIAL_STATE)
  }
  
  function submitHandler (event){
    event.preventDefault()
    console.log("Submitted")
    console.log(newRecipeData)
    addRecipe(newRecipeData)
    formClearer();
  }

//---return---  
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Name" 
                  onChange={inputChangeHandler} 
                  value={newRecipeData.name}/>
            </td>
            <td>
              <label htmlFor="cuisine"></label>
                <input 
                  name="cuisine" 
                  type="text" placeholder="Cuisine"
                  onChange={inputChangeHandler}
                  value={newRecipeData.cuisine}/>

            </td>
            <td>
              <label htmlFor="photo"></label>
                <input 
                  name="photo" 
                  type="text" 
                  placeholder="URL"
                  onChange={inputChangeHandler}
                  value={newRecipeData.photo}/>
            </td>
            <td>
              <label htmlFor="ingredients"></label>
                <textarea 
                  name="ingredients" placeholder="Ingredients"
                  onChange={inputChangeHandler}
                  value={newRecipeData.ingredients}/>
            </td>
            <td>
              <label htmlFor="preparation"></label>
                <textarea 
                  name="preparation" placeholder="Preparation"
                  onChange={inputChangeHandler}
                  value={newRecipeData.preparation}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
