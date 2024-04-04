import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
function Search() {
    const navigate=useNavigate();
    const [value,setvalue]=useState("");
    const Submithandler=(e)=>{
        e.preventDefault();
        navigate("/searched/"+ value);
    }
  return (
    <form className="search" onSubmit={Submithandler}><Link to={"/"}>
      <GiKnifeFork className="logo" ></GiKnifeFork><h2 className="log" >Recipies</h2></Link>
      <div className="icon">
        {" "}
        <FaSearch className="ll"></FaSearch>
      </div>

      <input
        className="inp"
        onChange={(e) => setvalue(e.target.value)}
        type="text"
        name=""
        id=""
        value={value}
      />
    </form>
  );
}

export default Search
