import PTitle from "../Common/PTitle"
import SearchRecipeBar from "./SearchRecipeBar"
import SearchRecipeBtn from "./SearchRecipeBtn"
import axios from "axios"
import apikey from "../Common/Apikey"
import { useState } from "react"
import RecipeList from "../RecipeList/RecipeList"

const Api_url = "https://api.spoonacular.com/recipes/complexSearch" + `?apiKey=${apikey}`

const Search = (text)=>{
  const response = axios.get(Api_url,{params:{query:text}})
  return response
}

function SearchRecipe(){
  const [list,setList] = useState([])

  const onSubmit = async (e)=>{
    e.preventDefault()
    const text = e.target[0].value
    const response = await Search(text)
    setList(response.data.results)
  }
   if(list.length == 0){
    return(<div>
      <PTitle title="Search recipe"/>
      <form onSubmit={onSubmit}>
      <SearchRecipeBar/>
      <SearchRecipeBtn/>
       </form>
     </div>)
   }else{
    console.log(list)
    return(<div>
      <PTitle title="Search recipe"/>
      <form onSubmit={onSubmit}>
      <SearchRecipeBar/>
      <SearchRecipeBtn/>
      <RecipeList list={list}/>
       </form>
     </div>)
   }

}

export default SearchRecipe