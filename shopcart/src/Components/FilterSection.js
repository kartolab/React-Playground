

const FilterSection = (props) => {
    return (
        <div className="text-start filter-contiainer">
            <h6 style={{marginBottom:'0',position:'relative',marginRight:'10px',top:'6px',textTransform:"uppercase",fontWeight:'500'}}>Filters</h6>
            <div className="filter-items ">
                {props.FiterProdArr.map(c=>
                        <div className="form-switch" style={{marginRight:'15px'}}>
                        <input className="form-check-input" type="checkbox" checked={c.isChecked}  name={c.categoryname} onChange={(e) => props.HandleFilterByCategory(c, e)} />
                        <label className="form-check-label" style={{width:'max-content',top: '3px',fontWeight:'700',fontSize:'12px', textTransform:'uppercase',position: 'relative',paddingLeft: '5px'}}>{c.categoryname}</label>
                       
                             </div>
                )}    
            </div>
            

      
        </div>
    )
}


export default FilterSection