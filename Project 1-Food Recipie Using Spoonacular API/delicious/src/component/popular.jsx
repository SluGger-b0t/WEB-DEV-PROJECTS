import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {Splide,SplideSlide} from "@splidejs/react-splide"
import "@splidejs/react-splide/css/sea-green";
function Popular() {
  const [popular,setpopular]=useState([]);
  useEffect(() => {
    getPopular();
  },[]);
  const getPopular = async () => {
    const check=localStorage.getItem("popular");
    if(check){
      setpopular(JSON.parse(check))
    }else
    {
       const api = await fetch(
         `https://api.spoonacular.com/recipes/random?apiKey=b05ae809d9cd4264b44b48cb2c25d90b&number=9`
       );
    const data = await api.json();
    
    setpopular(data.recipes)
    localStorage.setItem("popular",JSON.stringify(data.recipes)); console.log(data);
    }
  
  };
  return (
    <Wrapper>
      {" "}
      <h3>Popular Picks</h3>
      <Splide options={{ perPage: 4, drag: "free", gap: "5rem" }}>
        {popular.map((people) => {
          return (
            <SplideSlide key={people.id}>
              <Card key={people.id}>
                <Link to={"/recipe/"+people.id}>
                <p>{people.title}</p>

                <img src={people.image} alt={people.title} />
                <Gradient /></Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};
const Wrapper =styled.div` 
margin:4rem 0rem `;
const Card =styled.div`
min-height :25 rem;
border-radius:2rem;
overflow:hidden;
img {
  min-height:50px;
  
  border-radius:2rem;
  
  width:100%;
  height:100%;
  object-fit:cover;

}
p {
  position:absolute;
  z-index:10;
  left:60%;
  bottom:-30%;
  transform:translate(-50%,0%);
  color:white;
  width:100%;
  text-align:cente;
  font-weight:600;
  font-size:20px;
  height:40%;
  display:flex;
  justify-content:centre;
  align-items:centre
  
}
`;
const Gradient=styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,00),rgba(0,0,0,0.5))


`;
export default Popular;
