import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card'
import axios from 'axios'

import './index.css'



export default function TinderCardCop () {
    const [people, setPeople] = useState([])
    const [lastDirection, setLastDirection] = useState()
  
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get("http://localhost:3002/api/card")
            setPeople(request.data.tinderCard)
        }
        fetchData();
    }, [])

    const swiped = (direction , nameToDelete) => {
        console.log('remove :'+ nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
             console.log(name+ "left the screen!")
    }

    return(
        <div className="card-container">
           {people.map((person) => (
               <TinderCard 
                  key={person.id}
                  className="swipe-card"
                onSwipe = {(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
               >
                   <div
                     style={{backgroundImage : "url(" + person.imgUrl + ")" }}
                     className="tinder-card"
                    >
                       <h4>{person.name}</h4>
                   </div>
               </TinderCard>
           ))}
        </div>
    )
}