function RecipeBtn(props){
    const {clicked} = props
    if(!clicked){
        return(<div className="recipeBtn">
            <button onClick={props.onClick} id={props.id}>Grocerie list</button>
        </div>)
    }else{
        return(<div className="recipeBtn">
            <button onClick={props.onClick} id={props.id}>Back to list</button>
        </div>)
    }
 
}

export default RecipeBtn