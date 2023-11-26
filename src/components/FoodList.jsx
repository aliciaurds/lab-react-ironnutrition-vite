//import states
import { useState } from "react";
//import data
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
//import antd
import { Row, Divider } from "antd";
import Search from "./Search";

//aplico los estilos de antd a food list porque en la interacción 6 trajimos toda la info aqui
function FoodList() {
    const [foods, setFoods] = useState(foodsJson);
    const [query, setQuery] = useState("")
    //Con el search yo lo que quiero es filtrar todos los elementos que me da el .map, pues esto me devuelve el array que quiero renderizar en jsx. Pero esto tambien lo puedo conseguir con el filter y ademas puedo encadenar.
    //1. filtro elementos que quiero mostras => primero voy a filtrarlas por el query 
    //2. Despues de filtrarLo mapeo y genero el jsx
  return (
    <div>
         <AddFoodForm 
         foods={foods} 
         setFoods={setFoods} />
      <Divider  style={{color: "white", fontSize: "40px"}}>Food List</Divider>
      < Search query={query} setQuery={setQuery}/>

      <Row style={{width: "100%", justifyContent: "center"}}>
      {foods
      .filter((eachFood) => eachFood.name.includes(query) )
      .map((eachFood, index) => {
        return (
          <FoodBox
            key={index}
            index={index}
            food={eachFood}
            foods={foods}
            setFoods={setFoods}
          />
        );
      })}

      </Row>
    </div>
  )
}

export default FoodList