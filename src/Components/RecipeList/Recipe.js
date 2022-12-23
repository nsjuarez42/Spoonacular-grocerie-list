import PTitle from "../Common/PTitle";
import RecipeBtn from "./RecipeBtn";
import RecipeImg from "./RecipeImg";
import axios from "axios";
import apikey from "../Common/Apikey";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import '../Styling/Recipe.css'

function Recipe(props) {
  const { recipeSelected, setRecipeSelected } = props;
  const { recipeId, setRecipeId } = props;
  const { recipeData, setRecipeData } = props;

  const Api_url =
    "https://api.spoonacular.com/recipes/" +
    `${props.id}/information/?apiKey=${apikey}`;

  //switch recipes
  const SearchRecipe = () => {
    const response = axios.get(Api_url);
    return response;
  };

  const onClickBtn = async (e) => {
    console.log(e.target.id);
    const { id } = e.target; //if current id is not equal to pressed btn id
    if (
      (recipeSelected === false && Object.keys(recipeData).length == 0) ||
      (recipeSelected == false && recipeId !== id)
    ) {
      const recipe = await SearchRecipe();
      setRecipeData(recipe.data);
      setRecipeSelected(true);
      setRecipeId(recipe.data.id);
    } else if (recipeSelected === false && Object.keys(recipeData).length > 0) {
      setRecipeSelected(true);
    } else {
      setRecipeSelected(false);
    }
  };

  if (!recipeSelected) {
    return (
      <div className="recipe">
        <PTitle title={props.title} />
        <RecipeImg imgSrc={props.imgSrc} />
        <RecipeBtn onClick={onClickBtn} id={props.id} clicked={false} />
      </div>
    );
  } else {
    console.log(recipeData);
    //grocerie list
    const {
      title,
      pricePerServing,
      servings,
      image,
      extendedIngredients,
      analyzedInstructions,
      id,
    } = recipeData;
    const totalPrice = pricePerServing * servings;

    const ingredients = extendedIngredients.map((el) => {
      return (
        <Ingredient
          name={el.name}
          amount={el.amount}
          unit={el.unit}
          key={el.id}
        />
      );
    });

    const instructions = analyzedInstructions[0].steps.map((el) => {
      return (
        <Instruction
          number={el.number}
          equipment={el.equipment}
          ingredients={el.ingredients}
          step={el.step}
          key={el.number}
        />
      );
    });

    console.log(analyzedInstructions[0].steps)
    return (
      <div className="recipeSelected">
        <div className="recipeTitleImg">
          <PTitle title={title} />
          <RecipeImg imgSrc={image} />
        </div>

        <div className="recipeGroList">
          <PTitle title={`Price per serving: $${pricePerServing}`} />
          <PTitle title={`Servings: ${servings}`} />
          <PTitle title={`Total price: $${totalPrice}`} />
          <RecipeBtn onClick={onClickBtn} id={props.id} clicked={true} />
        </div>

        <div className="recipeIns">
        
          <div className="recipeInstr">
            <PTitle title="Instructions"/>
          {instructions}
          </div>
          <div className="recipeIngr">
          <PTitle className="recipeIngrTitle" title="Ingredients"/>
            <ul>
            {ingredients}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
