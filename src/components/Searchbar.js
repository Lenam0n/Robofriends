
const Searchbar = ({searchfield, searchChange}) =>{
    return(
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="serach" 
                placeholder="Search for Robots"
                value={searchfield}
                onChange={searchChange}/>
        </div>
    );
} 
export default Searchbar;