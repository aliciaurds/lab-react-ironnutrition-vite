//import states
import { useState } from "react";
//import data
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
function FoodList() {
    const [foods, setFoods] = useState(foodsJson);
  return (
    <div>
         <AddFoodForm foods={foods} setFoods={setFoods} />
      {foods.map((eachFood, index) => {
        return (
          <FoodBox
            key={index}
            food={eachFood}
            foods={foods}
            setFoods={setFoods}
          />
        );
      })}
    </div>
  )
}

export default FoodList