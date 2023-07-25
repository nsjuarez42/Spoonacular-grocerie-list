import { useEffect,useState } from "react";
import axios from "axios";
import apikey from "../Common/Apikey";
import RecipeList from "../RecipeList/RecipeList";
import Header from "./Header";

const API_URL = 'https://api.spoonacular.com/recipes/random' + `?apiKey=${apikey}&number=6`

function RandomRecipes(){
 const [random_recipes,set_random_recipes] = useState([])

 const get_random_recipes = async()=>{
  const response = await axios.get(API_URL)
  set_random_recipes(response.data.recipes)
 }

 useEffect(()=>{
    if(random_recipes.length == 0){
     get_random_recipes()
    }
 })

 console.log(random_recipes)

 if(random_recipes.length ==0){
    return(<div>

        </div>)
 }else{
    return(<div>
      <Header/>
        <RecipeList list={random_recipes}/>
       </div>)
 }
 
}

export default RandomRecipes