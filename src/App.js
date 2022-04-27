import './App.css';
import { useEffect } from 'react'
import axios from 'axios';


function App() {
  useEffect(() => {
    axios({
      url: "http://taco-randomizer.herokuapp.com/",
      method: "GET",
      dataResponse: "json",
    
    }).then((res) => {
      console.log(res);
    });
  }, [])
  return (
    <div className="App">
    <h1>STONKS ONLY GO UP</h1>
    </div>
  );
}

export default App;
