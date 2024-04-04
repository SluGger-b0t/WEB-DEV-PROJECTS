import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
function Recipe() {
  const [active, setactive] = useState("Instructions");
  const [details, setdetails] = useState({});

  const params = useParams();
  const fetchDetails = async () => {
    const data = await fetch(`ENTER THE KEY FROM THE SERVER`);
    const detaildata = await data.json();

    setdetails(detaildata);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="ingrid">
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <div className="info">
        <button
          className={active === "Instructions" ? "btn1 " : "btn"}
          onClick={() => setactive("Instructions")}
        >
          Instructions
        </button>
        <button
          className={active === "Ingredients" ? "btn1" : "btn"}
          onClick={() => setactive("Ingredients")}
        >
          Ingredients
        </button>
        {active === "Instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {active === "Ingredients" && (
          <ul>
            {details.extendedIngredients?.map((ing) => {
              return <li>{ing.original}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
const DetaileWrapper = styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex;
.active{
    background:linear-gradient(35deg,#494949,#313131);
    color:white;
}
h2{
    margin bottom:2rem;

}
li{
    font-size:1.2rem;
    line-height:2.5rem;
}
ul{
    margin-top:2rem;

}
`;
const Button = styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border 2px solid black;
margin-rught:2rem;
font-weight:600;
`;
const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;
