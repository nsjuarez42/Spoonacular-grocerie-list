import PTitle from "../Common/PTitle"

const Ingredient = (props)=>{
    return(<div><li>
        <PTitle title={`${props.amount} ${props.unit} of ${props.name}`}/>
    </li></div>)
}

export default Ingredient