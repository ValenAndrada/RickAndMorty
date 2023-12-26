import Card from '../Card1/Card';
import "./Cards.styles.css"

export default function Cards({characters, onClose}) {
   return <div className='contenedorDeCard'>
      {
         characters.map (({id, name, status, species, gender, origin, image} )=> {
            return ( 
               <Card 
               key = {id} 
               id = {id} 
               name={name} 
               status={status} 
               species={species} 
               gender={gender} 
               origin={origin.name} 
               image={image} 
               onClose={onClose}
               >
               </Card>
            )
         })
      }

      </div>;
}
