import React from "react";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";


const App=()=>{
  return(
    <div className="container">
        <Home/>
        <Contact/>
        <About/>
    </div>
  )
}
export default App;