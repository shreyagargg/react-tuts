import './App.css';
import { useState } from 'react';



function Card() {
  // const head = "heading"
  const para = "This para is written using pros from parent to child component"
  const [head, setTitle] = useState("original heading");
  const [btn, setBtn] = useState("Click Me");
  const [bgClr, setBgClr] = useState('var(--beige)');

  function clicks(){
    alert("button clicked")
    setTitle("new heading")
    setBtn("state changed")
    setBgClr('var(--pastel-yellow)')
}

  return (
    <div className='container' style={{backgroundColor:bgClr}}>
      <h1 className="title">Example for basic pros and useState</h1>
      <div className="card">
        <CardBaby 
        title = {head}
        desc = {para}        
        />
      <button onClick={clicks}>{btn}</button>
      </div>
    </div>

  );
}

export default Card;


function CardBaby({desc, title}) {
  return(
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}

