import {useContext,useRef, useEffect,useState} from "react";
import { cardContext } from "./App";
function Login() {

    const collegeRef = useRef(null);
    const pwdRef = useRef(null);
    const [loginMessage , setLoginMessage] = useState("");

    const {login,setLogin} = useContext(cardContext);
    const { userDetails, setUserDetails } = useContext(cardContext);

    useEffect(()=>{
        collegeRef.current.focus();
        
    },[]);
     
     const formValidation = (event) => {
        event.preventDefault();// prevent reload
        
        const enteredId = collegeRef.current.value;
        const enteredPwd = pwdRef.current.value;
        if (userDetails.id == enteredId && userDetails.pwd == enteredPwd){
            setLoginMessage("successful")
            setLogin(true);
            
        }
        else {
            setLoginMessage("unsuccessful")
        }
        collegeRef.current.value = "";
        pwdRef.current.value = "";

     }

    return(
        <div className = "d-flex flex-row justify-content-center">
        <form onSubmit = {formValidation} >
        <div className="card"  style = {{border: "1px solid #ddd", padding:"20px", width:"500px"}} >
            <h3>Login</h3>
            <p style={{paddingBottom:"20px"}}>Provide your details to login</p>
            <h5>College id</h5>
            <input  type = "text" placeholder="College id" style = {{padding:"10px", border: "1px solid #ddd",borderRadius:"5px", marginBottom:"15px"}} ref = {collegeRef}/>
            <h5>Password</h5>
            <input type = "password" placeholder="Password" style = {{padding:"10px", border: "1px solid #ddd",borderRadius:"5px", marginBottom:"15px"}} ref = {pwdRef}/>
            <div style = {{textAlign:"right"}}>
            <button className = "btn btn-dark">Login</button>
            </div>
        </div>
        </form>
        <p>{loginMessage}</p>
        </div>
    );
}
export default Login;