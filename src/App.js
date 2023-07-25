import './App.css';
import Banner from './Components/Banner';
import SearchRecipe from './Components/SearchRecipe/SearchRecipe';
import RandomRecipes from './Components/RandomRecipes/RandomRecipes';

function App() {
  return (
    <div className="App">
     <Banner/>
     <SearchRecipe/>
     <RandomRecipes/>
    </div>
  );
}

export default App;
