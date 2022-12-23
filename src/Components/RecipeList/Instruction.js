const Instruction = (props) => {
  const {equipment,ingredients} = props

  var equipmentStr = "";
if(equipment !== undefined && equipment.length !==0){
  equipmentStr = equipment.map(el=>{
    return el.name
  }).join()
}
 
var ingredientStr = "";
if(ingredients !== undefined && ingredients.length !==0){
   ingredientStr =ingredients.map(el=>{
    return el.name
  }).join()
}
 
var equipmentDiv,ingredientsDiv =undefined

if(equipmentStr){
  equipmentDiv =<div><p>{equipmentStr}</p></div>
}

if(ingredientStr){
  ingredientsDiv = <div><p>{ingredientStr}</p></div>
}




  console.log(equipmentStr,ingredientStr)
  return (
    <div className="recipeInstruction">
          <div>
          <p>{props.number}</p>
          </div>

         {equipmentDiv}
         {ingredientsDiv}
         
        
      <div className="recipeInstrStep">
        <p>{props.step}</p>
      </div>

    </div>
  );
};

export default Instruction;
