import FoodList from "./components/FoodList";
//import estilos
import "./App.css";


function App() {
  
  return (
    <div className="App">
      
      {/* //* ITERATION 2: 
       <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1,
        }}
      /> */}
      <FoodList />

     
    </div>
  );
}

export default App;
