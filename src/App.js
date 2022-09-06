
import React,{useState,useEffect} from "react";


import {
  Alert,
  Button,
  Card,

} from 'react-bootstrap'




function App() {

  const [temp, setTemp] = useState("0")
  const [result, setResult] = useState("0");
  const [show, setShow] = useState(true);
  const [status, setStatus ] = useState("")
  useEffect(()=>{
    if(result>15){
      return setStatus("warning")
    }
    return setStatus("primary")
  })
  const configTemp = (stat) =>{
    setTemp(temp + (stat.bt + 1))
    setResult(eval(temp))
  }
  const Buttons = [
    "+",
    "-"
  ]
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <main>
        
        <div className="Header">
          <p className="h1">Temperature Control App</p>
        </div>
        <Card className="p-5" style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        }}>
          
          <Card.Header 
          className={"showTemp text-center d-flex justify-content-center align-items-center text-white mb-3  bg-"+status}
          
          
          style={{borderRadius:"75%",
          width:"250px",
          height:"250px"
          }}>
            <h1 className="display-4">{result}°C</h1>
          </Card.Header>
          <Card.Body className="d-flex justify-content-center mb-3">
            {Buttons.map((bt)=>{
              return(
                <>
                <Button className="py-2 px-4 m-3" 
                style={{borderRadius:"75%"}} key={bt} 
                variant="primary" 
                onClick={()=>{
                  configTemp({bt})
                }}>
                  <h4 className="display-4">{bt}</h4>
                </Button>
                </>
              )
            })}
          </Card.Body>
          
        </Card>

      </main>

    </div>

  );
}

export default App;
