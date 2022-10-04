import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comp1 from './component/Comp1';
import InputScree from './Component2/InputScree';
import DispalyScreen from './Component2/DispalyScreen';


function App() {
  return (
    <div style={{ display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} >
      {/* <Comp1/> */}
      <InputScree />
      <br/>
      <br/>
      <br />
      <DispalyScreen/>

    </div>
  );
}

export default App;
