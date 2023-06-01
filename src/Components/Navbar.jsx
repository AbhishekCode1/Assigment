import React, { useContext } from "react";
import {Link } from "react-router-dom";
import { ThemeContext } from "../Context/ContextProvider";

const Navbar = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        setTheme(!theme)
    }
    console.log("test", theme)
    return (
        <div style={{width:"100%",margin:"auto",justifyContent:"space-evenly", height:"50px", backgroundColor:"teal",color:"white",display:"flex"}}>
        <Link style={{color:"white"}} to="/">Home</Link>
        <Link style={{color:"white"}} to="/counter">Counter</Link>
        <Link style={{color:"white"}} to="/greet">Greeting</Link>
        <div>
        <button onClick={toggleTheme}> {`Make ${
      theme ? "Dark" : "Light"
      }`}</button>
        </div>
        </div>
    )
}
export default Navbar