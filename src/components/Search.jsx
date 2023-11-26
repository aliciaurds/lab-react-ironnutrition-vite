import { Input } from "antd";

//info recibida por props, ya no tengo que crearlo de este lado. El estado se encuentra en el componente padre.
function Search({query, setQuery}) {

  // const [ query, setQuery ] = useState("")

  return (
    <div>
      
      <Input value={query} name="query" onChange={(e) => setQuery(e.target.value)}/>

    </div>
  )
}

export default Search