import { useEffect ,useState } from "react";
import './assgn3.css';
import Nine from './nine';
import Navigation from "./navigation";

function Products() {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchMyData = async ()=> {
        const res = await fetch('https://fakestoreapi.com/products')
        console.log(res.ok);
        const resData = await res.json();
        setData(resData);
        console.log(resData);
        }
        fetchMyData();

    })
    return(
        <div>
            <Navigation/>
            <div className="card-container" style={{display:"flex",flesWrap:"wrap"}}>
              {data.map((dataItem, index) => (
            <div className="card" key={index}>
             
            <img src={dataItem.image} alt={dataItem.title} />
            
            <div className="card-title">{dataItem.title}</div>
            <div className="card-rating">Rating: {dataItem.rating.rate}</div>
            <div className="card-price">Price: {dataItem.price}</div>
            
            <Nine/>
        </div>
        
    ))}
    </div>
</div>


    );
}
export default Products;