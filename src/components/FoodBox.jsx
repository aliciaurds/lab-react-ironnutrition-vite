function FoodBox({ foodsProp, setFoodsProp}) {
  
  const handleDelete = (id) => {
    const newFoods = foodsProp.filter((food) => {
        if(food.id!== id){
            return true; //si el id del food a analizar es diferente al id a eliminar, lo incluimos en el newFoods. Si es diferente, no eliminamos.
        }else{
            return false; // si el id del food a analizar es igual al id a eliminar, no lo incluimos en el newFoods
        }
    });
    setFoodsProp(newFoods); //actualizamos el nuevo array de foods
}
  
  
  const cardStyle = {
    width: "200px",
  };
  return (
    //* ITERATION 3 */}
    //  Recorro el array => creando componente para cada elemento, paso eachFood e index para la key (que sea unico) como en App la propiedad se llama foodsProp es lo que mapeo
    <div>
      {foodsProp.map((eachFood, index) => {
        const totalCalories = eachFood.calories * eachFood.servings;
           return (
          <div key={index}>
            <hr />
            <img style={cardStyle} src={eachFood.image} alt="foodPic" />
            <h2>{eachFood.name}</h2>
            <p><b>Calories: </b>{eachFood.calories}</p>
            <p><b>Servings:  </b>{eachFood.servings}</p>
            {/* <p>Total Calories: {eachFood.calories}*{eachFood.servings}</p> */}
            <p><b>Total Calories: </b>{totalCalories} kcal</p>
            <button onClick={()=>handleDelete(eachFood.id)}>Delete</button>
          </div>
        );
      })}
    
    </div>
  );
}

export default FoodBox;
