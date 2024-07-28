import {useEffect, useState} from 'react';

import { useContext } from "react";

import { cardContext } from "./App";
function Nine()
{
    //const count=0;
    const [count,setCount] = useState(0);
    const {globalCount, setGlobalCount} = useContext(cardContext);

    useEffect(() => {
        console.log("Use effect is called");
    },[count]);

    const btnInccount = () =>
    {
        setCount(count+1);
        setGlobalCount(globalCount+1)
    }

    const btnDeccount = () =>
        {
            setCount(count-1);
            setGlobalCount(globalCount-1)
        }

        const btnAddToCart = () =>
            {
                setCount(1);
                setGlobalCount(globalCount+1);
            }

    
    return(
        count === 0 ? <button className="btn btn-success" style={{margin:"2px" ,fontSize:"20px"}} onClick={btnAddToCart}><b>Add to cart</b></button>:
        <div style = {{display:'flex', flexwrap:'wrap'}}>
            <button className="btn btn-light" style={{margin:"10px" ,fontSize:"20px"}} onClick={btnDeccount}><b>-</b></button>
            <h1 style={{margin:"10px"}}>{count}</h1>
            <button className="btn btn-light" style={{margin:"10px",fontSize:"20px"}} onClick={btnInccount}><b>+</b></button>
        </div>
    );
}
export default Nine;