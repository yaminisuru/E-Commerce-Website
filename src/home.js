import {useContext} from "react"

import TwoUi from "./twoUi";

import Welcome from "./welcome";
import { cardContext } from "./App";


function Home() {


    const { login} = useContext(cardContext);
    
    
    return(
       
     <div>
        {login ? < Welcome /> : <TwoUi />} 
     </div>
     
    );
}
export default Home;