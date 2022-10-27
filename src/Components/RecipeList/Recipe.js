import PTitle from "../Common/PTitle"
import RecipeBtn from "./RecipeBtn"
import RecipeImg from "./RecipeImg"
import { useState } from "react"
import axios from "axios"
import apikey from "../Common/Apikey"



function Recipe(props){
 const [recipeBtn,setRecipeBtn] = useState(false)
 const [recipeData,setRecipeData] = useState({})

 const Api_url = "https://api.spoonacular.com/recipes/"+ `${props.id}/information/?apiKey=${apikey}`

const SearchRecipe = ()=>{
  const response = axios.get(Api_url)
  return response
}

 const onClickBtn = async ()=>{
  if(recipeBtn ===false && Object.keys(recipeData).length==0){
    const recipe = await SearchRecipe()
    setRecipeData(recipe.data)
    setRecipeBtn(true)  
  }else if(recipeBtn ===false && Object.keys(recipeData).length > 0){
    setRecipeBtn(true) 
  }
  else{
    setRecipeBtn(false)
  }
 }

 if(!recipeBtn){
  return(<div>
    <PTitle title={props.title}/>
    <RecipeImg imgSrc={props.imgSrc}/>
    <RecipeBtn onClick={onClickBtn} clicked={false}/>
  </div>)
 }else{
  console.log(recipeData)
  //grocerie list 
  const {title,pricePerServing,servings,image,extendedIngredients,analyzedInstructions} = recipeData
  const totalPrice = pricePerServing * servings
  const ingredients =extendedIngredients.map(el=>{
  return(<li><div>
    <PTitle title={el.name}/>
    <PTitle title={`Amount: ${el.amount} ${el.unit}`}/>
    </div>
    </li>)
  })
  const instructions =analyzedInstructions[0].steps.map(el=>{
    return(<div>
      <p>{el.number}</p>
      {el.equipment.map(equip=>{
        return(<p>{equip.name}</p>)
      })}
      {el.ingredients.map(ingredient=>{
        return(<p>{ingredient.name}</p>)
      })}
<p>{el.step}</p>

    </div>)
  })
  return(<div>
   <PTitle title={title}/>
   <RecipeImg imgSrc={image}/>
   {/*Instructions*/}
  {instructions}
   {/*Ingredients list*/}
   <ul>
   {ingredients}
   </ul>

   <PTitle title={`Price per serving: ${pricePerServing}`}/>
   <PTitle title={`Servings: ${servings}`}/>
   <PTitle title={`Total price: ${totalPrice}`}/>

   <RecipeBtn onClick={onClickBtn} clicked={true}/>

  </div>)
 }


}

export default Recipe