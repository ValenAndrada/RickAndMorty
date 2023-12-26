 import './Card.styles.css'
 import { Link } from 'react-router-dom';

 function Card({id, name, status, species, gender, origin, image,  onClose}) {
   return (

      <div className='container'>
         
         <button className= "x" onClick={()=> onClose(id)}> x </button>
        
        <Link to= {`/detail/${id}`} >
         <h2 className='nombre'> {name}</h2>
        </Link>
        
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <img src={image} alt='imagen' className='img' /> 
      
      </div>
   );
}
export default Card;