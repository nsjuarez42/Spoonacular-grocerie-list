import PTitle from "../Common/PTitle"
import SearchRecipeBar from "./SearchRecipeBar"
import SearchRecipeBtn from "./SearchRecipeBtn"
import axios from "axios"

const Api_url = "https://api.spoonacular.com/recipes/complexSearch"

const Search = async(text)=>{
  const response = await axios.get(Api_url,{params:{query:text}})
  return response
}

function SearchRecipe(){
  const onSubmit =(e)=>{
    e.preventDefault()
    const text = e.target[0].value
    const response = Search(text)
    console.log(response)
  }

  return(<div>
   <PTitle title="Search recipe"/>
   <form onSubmit={onSubmit}>
   <SearchRecipeBar/>
   <SearchRecipeBtn/>
    </form>
  </div>)
}

export default SearchRecipe