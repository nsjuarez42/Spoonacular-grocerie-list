import PTitle from "../Common/PTitle"

function Recipe(props){
  return(<div>
    <PTitle title={props.title}/>
    <PTitle title={props.servings}/>
    <PTitle title={props.pricePerServing}/>
    <RecipeImg imgSrc={props.imgSrc}/>
    <RecipeBtn/>
  </div>)
}

export default Recipe