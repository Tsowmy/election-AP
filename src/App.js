
import './App.css';
import Number from "./Number.js";

function App() {
  return (
    <>
   
        <p className="App">General election to assembly constituencies:Trends & Results june-2024</p>
        <h2 className="Heading">Andhra Pradesh</h2>
      
      <div className="container">
        
          <div className="color4"><Number text={"TDP"}/><h2>136</h2></div>
          <div className="color1"><Number text={"JNP"}/><h2>21</h2></div>
          <div className="color2"><Number text={"BJP"}/><h2>8</h2></div>
          <div className="color3"><Number text={"YSRCP"}/><h2>10</h2></div>
        </div>
     
    </>
   
   
  );
}

export default App;
