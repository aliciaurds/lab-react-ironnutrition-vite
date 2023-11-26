//import hook
import { useState } from "react"
//import antd
import { Divider, Input, Button } from "antd";

function AddFoodForm(props) {
    const [nameValue, setNameValue] = useState("");
    const [imageValue, setImageValue] = useState("");
    const [caloriesValue, setCaloriesValue] = useState(0);
    const [servingsValue, setServingsValue] = useState(0);

    //*Forma de hacerlo en sola una funcion 
    // const [formValue, setFormValue] = useState({
    //     name: "",
    //     image: "",
    //     calories: 0,
    //     servings: 0,
    // });
  //* Video de la mañana del 23/11

    const handleNameChange = (event) => {
        // console.log("typing name", event.target.value);
        setNameValue(event.target.value);
    }
    //igual que forzabamos que el input fuera en mayusculas, puedo forzar que sea un url valido con método test de las expresiones regulares para comprobar si el valor introducido coincide con el patrón definido en la expresión regular (RegEx)
    const handleImageChange = (event) => {
        // console.log("typing image", event.target.value);
        const validUrl = /^(ftp|http|https):\/\/[^ "]+$/
        if (validUrl.test(event.target.value)) {
        setImageValue(event.target.value);
    }else{
        setImageValue("your link is not a valid url");
        // console.log("invalid url");
    }
    } 
    const handleCaloriesChange = (event) => {
        // console.log("typing calories", event.target.value);
        setCaloriesValue(event.target.value);
    }
    const handleServingsChange = (event) => {
        // console.log("typing servings", event.target.value);
        const intNumber = parseInt(event.target.value);
        setServingsValue(intNumber);
    }
    const handleSubmit = (event) => {
        // console.log("submiting");
        event.preventDefault();
        //sacar info de formulario
        const newFood = {
            name: nameValue,
            image: imageValue,
            calories: caloriesValue,
            servings: servingsValue,
        }
        // console.log(newFood);
        //!la info donde quiero añadir esto esta en App => pasando todos los alimentos como un props, y la funcion tambien. Asi tenemos que pasar props a AddFoodForm
        //para mover la informacion:
        const clone = JSON.parse(JSON.stringify(props.foods)); //props.foods es todo el array de foods
        clone.unshift(newFood); //agregamos el nuevo food al array de foods
        props.setFoods(clone); //actualizamos el estado
         
    }

    

  //onsubmit puede ir o en el form o en el boton
  return (
    <form onSubmit={handleSubmit} >
        <Divider style={{color: "white", fontSize: "40px"}}>Add Food</Divider>
        <label htmlFor="name">Name: </label>
        {/* //actualizar el estado cada vez que cambie el campo */}
        <Input type="text" name="name" onChange={handleNameChange} value={nameValue}/>
        
        <label htmlFor="image">Image: </label>
        <Input type="text" name="image" onChange={handleImageChange} value={imageValue} />
        
        <label htmlFor="calories">Calories:</label>
        <Input type="number" name="calories" onChange={handleCaloriesChange} value={caloriesValue}/>
        
        <label htmlFor="servings">Servings:</label>
        <Input type="number" name="servings" onChange={handleServingsChange} value={servingsValue}/>
        
        <button>Create</button>
        
    </form>
  )
}

export default AddFoodForm