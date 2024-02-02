import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user)

const { name, city, bio, color, links } = user


function App() {
  return (
    <div>
      <NavBar />
      <Home name = { name } city={ city } color={ color }/>
      <About links = { links } bio ={ bio }/>
    </div>
  );
}

export default App;
