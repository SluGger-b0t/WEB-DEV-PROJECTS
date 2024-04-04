import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
function Cuisine(name) {
  const param = useParams();
  const [cuisine, setcuisine] = useState([]);
  const getCuisine = async (name) => {
    const data = await fetch(`//ENTER THE KEY FROM THE API`);
    const recipes = await data.json();
    setcuisine(recipes.results);
  };
  useEffect(() => {
    getCuisine(param.type);
  }, [param.type]);
  return (
    <motion.div>
      <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {cuisine?.map((cus) => {
          return (
            <Card key={cus.id}>
              <Link to={"/recipe/" + cus.id}>
                <img src={cus.image} className="imgg" alt="" />
                <h4>{cus.title}</h4>
              </Link>
            </Card>
          );
        })}
      </Grid>
    </motion.div>
  );
}
const Card = styled.div`
  img {
    border-radius: 2rem;
    margin: 40px 40 px;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: centre;
    padding: 1rem;
  }
`;
const Grid = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
`;
export default Cuisine;
