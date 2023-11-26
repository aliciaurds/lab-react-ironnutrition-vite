//import antd
import { Card, Col, Button } from "antd";

function FoodBox(props) {
  const { id, name, calories, image, servings } = props.food; //lo que pone en el App en el prop es food
  const { foods, setFoods } = props; 
  //o ...
  //const {food, foods, setFoods} = props;
  //const {id, name, calories, image, servings} = food //aqui desgloso directamente el props de food

  const handleDelete = (idToDelete) => {
    const newFoods = foods.filter((eachFood) => {
      if (eachFood.id !== idToDelete) {
        return true; //si el id del food a analizar es diferente al id a eliminar, lo incluimos en el newFoods. Si es diferente, no eliminamos.
      } else {
        return false; // si el id del food a analizar es igual al id a eliminar, no lo incluimos en el newFoods
      }
      // return eachFood.id !== idToDelete //forma corta
    });
    setFoods(newFoods); //actualizamos el nuevo array de foods
  };

 
  const totalCalories = calories * servings;
  return (
    //* ITERATION 3 */}
    //  Recorro el array => creando componente para cada elemento, paso eachFood e index para la key (que sea unico) como en App la propiedad se llama foodsProp es lo que mapeo
    <Col>      
      <Card title= {name} style={{ width: 230, height: 300, margin: 10 }}>        
     <img src={image} alt="foodPic" height={60} />
      <p>
        <b>Calories: </b>
        {calories}
      </p>
      <p>
        <b>Servings: </b>
        {servings}
      </p>
      {/* <p>Total Calories: {calories}*{servings}</p> */}
      <p>
        <b>Total Calories: </b>
        {totalCalories} kcal
      </p>
      <Button type="primary" onClick={() => handleDelete(id)}>Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
