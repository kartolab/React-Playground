

const Square=(props)=>{
    
    
    return(
    <button className="btn-tic-tac" onClick={props.onClick}>{props.value}</button>
    )
}
 export default Square;