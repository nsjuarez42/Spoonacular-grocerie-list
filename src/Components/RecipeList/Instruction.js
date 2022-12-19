const Instruction = (props) => {
  return (
    <div className="recipeInstruction">
      <div className="recipeInstructionIngr">
          <div>
          <p>{props.number}</p>
          </div>

          <div>
            {props.equipment.map((el) => {
            return <p>{el.name}</p>;
          })}
              {props.ingredients.map((el) => {
            return <p>{el.name}</p>;
          })}
          </div>

      </div>

      <div className="recipeInstrStep">
        <p>{props.step}</p>
      </div>

    </div>
  );
};

export default Instruction;
