import React,{useState}from 'react'

const TemperatureControler = () => {
 
    const [temperatureValue,setTemperatureValue] =useState(10);
    const [temperatureColor,setTemperatureColor] =useState("cold")
    
    const increaseTemperature =()=>{
       if(temperatureValue === 30) return;
        const newTemperature =temperatureValue + 1;

        if(newTemperature >= 15){
            setTemperatureColor("hot")
        }
      setTemperatureValue(newTemperature)
    }
    
    const decreaseTemperature =()=>{
        if(temperatureValue === 0) return;
        const newTemperature =temperatureValue - 1;
        
        if(newTemperature < 15){
            setTemperatureColor("cold")
        }
        setTemperatureValue(newTemperature)
    }
    

  return (
    <div>
      <div>
          <h1>Temperature Control App</h1>
          <p>This is a simple  a temperature control app where users can increment/decrement temperature and the background color changes based on temperature.</p>
     </div>
      <div className="app-container">
     <div className="temperature-display-container">
       <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}&#176;C </div>
     </div>
       <div className="button-container">
         <button onClick={decreaseTemperature}>-</button>
         <button onClick={increaseTemperature}>+</button>
       </div>
     </div>
  
    </div>
  )
}

export default TemperatureControler
