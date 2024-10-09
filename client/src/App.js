
import './App.css';
import { useState } from "react"
function App() {
  const [nombre,setNombre] = useState("");
  const [edad,setEdad] = useState(0);
  const [pais,setPais] = useState("");
  const [cargo,setCargo] = useState("");
  const [anios,setAnios] = useState(0);
  return (
    <div className="App">
      <div className= "datos">
        <label>Nombre: <input 
        onChange={(event)=>{
          setNombre(event.target.value);
        }}
        type="text"/></label>
        <label>Edad: <input type="number"/></label>
        <label>Pais: <input type="text"/></label>
        <label>Cargo: <input type="text"/></label>
        <label>Años: <input type="number"/></label>
        <button>Registrar</button>
      </div>
    </div>
  );
}

export default App;
