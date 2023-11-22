//import states
import { useState } from "react";
//import data
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
//import estilos
import "./App.css";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  return (
    <div className="App">
      <h1>IronNutrition</h1>
      {/* //* ITERATION 2: 
       <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1,
        }}
      /> */}
      
      <AddFoodForm foods={foods} setFoods={setFoods}/>
      <FoodBox foodsProp={foods} setFoodsProp = {setFoods} />
      
    </div>
  );
}

export default App;
