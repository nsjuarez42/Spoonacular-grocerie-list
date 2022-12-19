import Recipe from "./Recipe"
import {useState} from 'react'
import '../Styling/RecipeList.css'


function RecipeList(props){
    const {list} = props
    const [recipeSelected,setRecipeSelected] = useState(false)
    const [recipeId,setRecipeId] = useState(undefined)
    const [recipeData,setRecipeData] = useState({})

const recipes = list.map(el=>{
    return(<Recipe className="recipe"
        title={el.title} 
        key={el.id} 
        imgSrc={el.image} 
        id={el.id} 
        setRecipeSelected={setRecipeSelected} 
        recipeSelected={recipeSelected} 
        recipeId = {recipeId}
        setRecipeId={setRecipeId}
        recipeData={recipeData}
        setRecipeData={setRecipeData}/>)
})
    if(recipeSelected && recipeId !== undefined){
        const recipe = list.find(el=>el.id == recipeId)

      return(<Recipe
      title = {recipe.title}
      key={recipe.id}
      imgSrc={recipe.image}
      id={recipe.id}
      setRecipeSelected={setRecipeSelected} 
      recipeSelected={recipeSelected} 
      recipeId= {recipeId}
      setRecipeId={setRecipeId}
      recipeData={recipeData}
      setRecipeData={setRecipeData}
      />)
    }else{
  
        return(<div className="recipeList">
            {recipes}
         </div>)
    }

}

export default RecipeList