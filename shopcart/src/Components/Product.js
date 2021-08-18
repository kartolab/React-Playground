import { Link } from "react-router-dom";

const Product =({id,category,image,title,price,addItem})=>{
  
    return(
    <div className="col-3 d-flex mb-4 product-item" key={id}>
    <div className="card">
        <div className="Card-body">
            <div className="d-flex">
    <div className="category">{category}</div>
    <Link to={"/productdetails/"+id}>&#128269;</Link>
    </div>
   <div className="img-container"> <img src={image}/></div>
    <div className="card-title">{title}</div>
    {/* <div className="card-text"> {item.description}</div> */}
    <div className="mb-2"><p>${price}</p></div>
    </div>
    
    <button className="btn-primary mt-3 align-btm" onClick={()=>addItem({id,category,image,title,price})}>Add to Cart</button>
</div>
</div>
)
}

export default Product;