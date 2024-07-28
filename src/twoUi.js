import {  useState} from "react"
import Login from './login';
import Register from './register';


function TwoUi() {
   
    //const loginRef = useRef("");
    //const registerRef = useRef("");
    const [login, setLogin] = useState(true)

    
    const loginMethod = () => {
        
        setLogin(true);
        
    }
    const registerMethod = () => {
        setLogin(false);
        
    }

    return(
      <div style={{margin:"30px"}}>
        <div className="d-flex flex-row justify-content-center" >
        <button  
        onClick = {loginMethod} 
        style={{
            margin:"10px",
            border:"0",
            background:"#fff" , 
            fontSize: "20px" , 
            fontWeight: login ? "bold" : "normal",
            borderBottom: login ? "2px solid black" : "none",
            }}>
                Login
                </button>
        <button  
        onClick = {registerMethod} 
        style={{
            margin:"10px",
            border:"0",
            background:"#fff" , 
            fontSize: "20px" , 
            fontWeight: !login ? "bold" : "normal",
            borderBottom: !login ? "2px solid black" : "none",
            }}>
                Register
                </button>
        </div>
         {login ? < Login  /> : <Register /> } 
        </div>
    );
}
export default TwoUi;