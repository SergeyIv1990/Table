
const Search = ({setsearchTerm}) => {
    return (
        <div className="Search">
        <input type="text" 
        placeholder="Search in Name and Month" 
        onChange={(e)=>{setsearchTerm(e.target.value)}}
        />
      </div>
    )
  };
  
  export default Search;
  