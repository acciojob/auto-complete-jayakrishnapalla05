
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const totalFruits=["apple", "banana", "cherry", "date", "elderberry", "fig"];

  const [fruits,setFruits]=useState(totalFruits);

  const ShowSuggestions=(e)=>{
    const arr=[];
    const result=totalFruits.filter((value)=>{
      return value.toLowerCase().includes(e.target.value);
    })
    setFruits(result);
  }






  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search item</h1>
        <input type="text" value={fruits} onChange={(e)=>ShowSuggestions(e)}/>
        <ul>
          {
            totalFruits.map((item,index)=>{
              <li key={index}>{item}</li>
            })
          }
        </ul>
    </div>
  )
}

export default App
