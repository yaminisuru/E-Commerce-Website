
import {Link } from "react-router-dom";
import { useContext } from "react";
import { cardContext } from "./App";

function Navigation(){

    const {globalCount, setGlobalCount} = useContext(cardContext);
    return(
        <div style = {{display:"flex",flexDirection:"row",justifyContent:"space-between",background:"blue",padding:"10px"}}>
            <div style = {{display:"flex",gap:"10px",cursor:"pointer"}}>
            <Link to="/" style={{color:"white",textDecoration:"0"}}>Home</Link>
            <Link to="/products" style={{color:"white",textDecoration:"0"}}>Products {globalCount}</Link>
            </div>
            <div style = {{display:"flex",gap:"10px",cursor:"pointer"}}>
            <Link to="/product" style={{color:"white",textDecoration:"0"}}>AboutProduct</Link>
            <Link to="/profile" style={{color:"white",textDecoration:"0"}}>Profile</Link>
            </div>
        </div>
    )
}
export default Navigation;