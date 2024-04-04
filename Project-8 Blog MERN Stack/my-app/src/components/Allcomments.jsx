import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getaccessToken } from '../utils/common-utils'
import Singlepost from './posts/Singlepost'
import { useParams } from 'react-router-dom'
const Allcomments = ({ setToggle, toggle }) => {
  const params = useParams();
  const id = params.id;
  const [value, setValue] = useState([]);
  useEffect(() => {
    const Comments = async () => {
      try {
        const token = getaccessToken();
        const config = {
          headers: { authorization: `${token}}` },
        };
        const response = await axios.get(
          "http://localhost:8000/allcomments",
          config
        );
        const data = response.data?.filter((data) => data.postid === params.id);
        setValue(data);
      } catch (error) {
        console.log(error);
      }
    };
    Comments();
  }, [toggle]);
  return (
    <div>
      {value?.map((postt) => (
        <div className="border-2 flex sm:justify-center  ">
          {/* {console.log(postt,"hehe")} */}
          <div className="w-[30%] sm:w-[30%] lg:w-[20%] xl:w[10%] ml-6 sm:ml-3  rounded-xl border-[#E7D5C7] border-4 p-2 font-bold text-base md:text-xl text-center text-[#BBADA1]">
            User: {postt.name}
          </div>
          <textarea className=" ml-2 w-[50%] rounded-xl border-[#E7D5C7] border-4 p-2 font-bold text-base md:text-xl  text-[#BBADA1]">
            {postt.comments}
          </textarea>
        </div>
      ))}
    </div>
  );
};

export default Allcomments
