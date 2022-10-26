import PTitle from "../Common/PTitle"
import RecipeBtn from "./RecipeBtn"
import RecipeImg from "./RecipeImg"
import { useState } from "react"

function Recipe(props){
 const [recipeBtn,setRecipeBtn] = useState(false)

 const onClickBtn = ()=>{
  setRecipeBtn(!recipeBtn)
 }

 if(!recipeBtn){
  return(<div>
    <PTitle title={props.title}/>
    <PTitle title={props.servings}/>
    <PTitle title={props.pricePerServing}/>
    <RecipeImg imgSrc={props.imgSrc}/>
    <RecipeBtn onClick={onClickBtn}/>
  </div>)
 }else{
  //grocerie list 
  return(<div>

  </div>)
 }


}

export default Recipe