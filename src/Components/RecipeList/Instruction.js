const Instruction = (props)=>{
    return(<div>
      <p>{props.number}</p>
      {props.equipment.map(el=>{
        return(<p>{el.name}</p>)
      })}
      {props.ingredients.map(el=>{
        return(<p>{el.name}</p>)
      })}
      <p>{props.step}</p>
    </div>)
}

export default Instruction