
const Scroll = (prop) =>{
    return(
        <div style={{
                        overflow: 'scroll', 
                        border:'5px solid black', 
                        height: '800px', 
                        marginInline:'10px',
                        marginTop:'30px', 
                        borderRadius:'20px'}}
        >
            {prop.children}

        </div>
    );
}
export default Scroll;