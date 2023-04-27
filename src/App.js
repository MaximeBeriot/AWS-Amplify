// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Hello from V2</h1>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { createContext, useState } from "react";
import { RecoilRoot } from "recoil";
import "./styles.css";
import TestRecoil from "./Component/TestRecoil";

export default function App() {
  return (
    <div className="App">
      <h1>Compteur avec React</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png"
        alt="Logo React"
        width={400}
      />
      <hr />
      <RecoilRoot>
        <TestRecoil />
      </RecoilRoot>
    </div>
  );
}

