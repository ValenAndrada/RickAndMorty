import { useState } from "react";
import "./SearchBar.styles.css";


export default function SearchBar( {onSearch} ) {


   const [id , setId] = useState("");      //creo un estado q se inicializa como str vacio. 

   const handleChange = (event) => {        //creo una funcion "handle change": modifico el valor del estado: 
                                            //con el valor que esta escribiendo el usuario en tiempo real.
                     //=
      setId( event.target.value )         //cada vez q el usuario escriba algo en el input, esto se guerda en el estado local.
   }


   return (
         <div className="div">
            <input type='search' onChange={handleChange} value={id} className="buscador" placeholder="Caca" />
            <button onClick={()=> {onSearch(id); setId("")}} className="boton">AGREGAR</button> 
         </div>        //cuando se ejecute cb click. Invoco onSearch con el argumento id.
                       // y luego seteo el id como str vacio (limpio el input)
      
   );
}
// input type= "search* : el input es de tipo search.}

//onChange={handleChange} : atributo : cuando haya un cambio ejecuta la funcion (lo mismo del addEventListener).

//value={id} : el value (lo q esta ecribiendo el usuario) del input. tiene que ser = al estado local (id)

// classname = "buscador" : para el css.

// placeholder ="caca" : str del input.

// button onClick= {onSearch} : el boton tiene el event q dispara la funcion onSearch.


