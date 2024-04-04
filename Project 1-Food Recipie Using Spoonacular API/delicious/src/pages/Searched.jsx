import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
function Searched() {
  const param = useParams();
  const [result, setresult] = useState([]);
  const getresult = async (name) => {
    const data = await fetch(`ENTER THE KEY FROM THE SERVER`);
    const recipes = await data.json();
    setresult(recipes.results);
  };
  useEffect(() => {
    getresult(param.search);
  }, [param.search]);
  return (
    <Grid>
      {result.map((cus) => {
        return (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Card key={cus.id}>
              <Link to={"/recipe/" + cus.id}>
                <img src={cus.image} className="imgg" alt="" />
                <h4>{cus.title}</h4>
              </Link>
            </Card>
          </motion.div>
        );
      })}
    </Grid>
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
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
`;
export default Searched;
