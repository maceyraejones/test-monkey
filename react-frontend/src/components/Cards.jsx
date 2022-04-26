import React, { useState,useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "./Cards.css";
import axios from 'axios';
import { useNavigate} from 'react-router-dom'

const Cards = () => {

  const [loading, setLoading] = useState(true);



  
 

    const [animals, SetAnimals] = useState([0])

     const navigate = useNavigate();
     useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get('/api/animal');
          // console.log(response);
          SetAnimals(response);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }
     
      fetchData();
    }, []);

    const swiped = (direction, nameTodelete) =>{

      if (direction ==="right"){
        // need to navigate like using id
        navigate("/AddCart")

      }
  console.log("receiving" + nameTodelete)

    }
 
    const outOffFrame =(name) =>{

        console.log(name + "left the screen")

    }

  
  return (
    <div className='animalsCards'>
        <div className='animalsCards__container'>
        <h1> out of card</h1>
  
{animals.map((animal)=> 


<TinderCard

className='swipe'
key={animal.id}
preventSwipe={["up", "down"]}
onSwipe={(dir) => swiped(dir, animal.name)}
onCardLeftScreen={()=>outOffFrame(animal.name) }
>

<div
            style={{
              backgroundImage: `url(${animal.image})` /* Add backticks here */,
            
            }}
            className="card"
          >
  <h3 >{animal.name}</h3>
{console.log(animal.image)}
          </div>
       
       

</TinderCard> )}


        </div>




    </div>
  )
          }
        
export default Cards