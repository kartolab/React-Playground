const PageTitle=(props)=>{
    const headingStyle={
        textAlign:'left',
        marginBottom:'20px',
        marginTop:'20px',
        textTransform:'uppercase'
    }
    return( 
        <h1 style={headingStyle}>{props.heading}</h1>
    )
}
export default PageTitle;