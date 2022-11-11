import PTitle from "../Common/PTitle"

const Ingredient = (props)=>{
    return(<li>
     <div>
        <PTitle title={props.name}/>
        <PTitle title={`Amount: ${props.amount} ${props.unit}`}/>
     </div>
    </li>)
}

export default Ingredient