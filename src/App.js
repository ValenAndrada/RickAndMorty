import './App.css';
import Cards from './components/Cards1/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';      //p. APPI CONECCTION
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';


function App() {

   const[characters, setCharacters] = useState([]);   //estado

   const onSearch=(id) => {     //funcion q busca personajes en la API d RyM. 
                                 //recibe id, q es el estado local, lo q escribe el usuario.

//p. hacer una peticion: axios, le paso entre parentesis la URL y al final concateno id (q lo escribe el usuario)
      axios(`https://rickandmortyapi.com/api/character/${id}`)
//desp. de la peticion : axios devuelve un obj gigante (RESPONSE) y me quedo con DATA (q guarda la respuesta de la API)
      
      .then(({ data }) => {
         if (data.name) {   //Si hay un DATA.NAME, me setea el estado 
            setCharacters((characters) => [...characters, data]);
           
         } else {
          window.alert("No hay personajes con este ID");
         }
      });
   }



   const onClose = (id) =>{
      const charactersfiltered = characters.filter(character =>
      character.id !== Number(id) )
      setCharacters(charactersfiltered);
      }
   

   return (
      <BrowserRouter>  
         {/* renderizo Nav y paso la funcion onSearch*/}
         < Nav onSearch= {onSearch}/> 
         <Routes>
            
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/> }>
            </Route>
               
            <Route path='/about' element={<About/>}/>

            <Route path='/detail/:id' element= {<Detail/>}/>

         </Routes>

                  
      </BrowserRouter>
   );
}

export default App;





