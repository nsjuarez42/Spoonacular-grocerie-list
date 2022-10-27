function RecipeBtn(props){
    const {clicked} = props
    if(!clicked){
        return(<div>
            <button onClick={props.onClick}>Grocerie list</button>
        </div>)
    }else{
        return(<div>
            <button onClick={props.onClick}>Back to list</button>
        </div>)
    }
 
}

export default RecipeBtn