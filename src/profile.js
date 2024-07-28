
import { useContext } from "react";
import { cardContext } from "./App";
import Navigation from "./navigation";

function Profile() {
    const {userDetails} = useContext(cardContext);
    return(
        <div>
         <Navigation/>
         <h1>Profile</h1>
         <div>
         <p>College Id: {userDetails.id}</p>
         <p>Password : {userDetails.pwd}</p>
         <p>Email : {userDetails.email}</p>
         <p>Branch :{userDetails.branch}</p>
         <p>Year : {userDetails.year}</p>
         <p> Gender : {userDetails.gender}</p>
         </div>
        </div>
    );

}export default Profile;