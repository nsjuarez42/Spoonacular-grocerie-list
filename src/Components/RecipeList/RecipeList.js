import Recipe from "./Recipe"

function RecipeList(props){
    const {list} = props

    const recipes = list.map(el=>{
        return(<Recipe title={el.title} key={el.id} imgSrc={el.image}/>)
    })
 return(<div>
    {recipes}
 </div>)
}

export default RecipeList