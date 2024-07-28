import {useState} from "react";
import Navigation from "./navigation";


function Product() {
   const [inputValue , setInputValue] = useState("");
   const [arr, setArr] = useState([])
    

   const inputChange = (event) => {
    setInputValue(event.target.value);
    
   };


    const display = () => {
       setArr([...arr,inputValue]);
       setInputValue("");
    };


    return (
        <div>
        <Navigation/>
        <div style={{ padding: "20px"}}>
            <h1>Product Name</h1>
            <div className="row" style={{border: "1px solid #ddd" }}>
                <div className="col-4" style={{ padding: 0 }}>
                    <img src="/product.jpeg" style={{ width: "100%", height: "100%", display: "block" }} />
                </div>
                <div className="col-8"  style={{ padding: "10px" }}>
                    <div className="fluid-container d-flex justify-content-between align-items-center" style={{ margin: 0 }}>
                        <h2>Product Name</h2>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                    <p style={{ paddingBottom: "80px" }}>
                        Description Description Description Description Description Description Description Description Description Description Description Description
                        Description Description Description Description Description Description Description Description Description Description
                    </p>
                    <p style={{fontWeight:"bold"}}><i className="fa-solid fa-indian-rupee-sign"></i>500.00</p>
                    <button className="btn btn-success" style={{ marginBottom: "0" }}>Add to cart</button>
                    
                </div>
            </div>
            <div className="row" style={{ padding: "10px" , border: "1px solid #ddd"}}>
                <p style={{fontWeight:"bold"}}>Product specifications</p>
                <p>
                        Description Description Description Description Description Description Description Description Description Description Description Description
                        Description Description Description Description Description Description Description Description Description Description
                </p>
            </div>
            <div className="row" style={{ padding: "10px" , border: "1px solid #ddd"}}>
                <h2>Reviews</h2>
                <div className = "d-flex flex-row">
                <input
                 style={{borderRadius:"5px", border: "1px solid #ddd" , width : "80%" }}  
                 type="text" 
                 placeholder="Type to review" 
                 onChange = {inputChange}
                 value={inputValue}/>
                <button className = "btn btn-dark" style = {{margin:"5px"}} onClick={display}>Add review</button>
               </div>
               <h6 style = {{padding:"10px"}}>Reviews</h6>
               
               {
                
                arr.map((v1,index)=>(
                <p style = {{padding:"5px"}} key = {index}>Reviewer name <br/> {v1}</p>
                ))
                }
            
            </div>
        </div>
        </div>
    );
}

export default Product;
