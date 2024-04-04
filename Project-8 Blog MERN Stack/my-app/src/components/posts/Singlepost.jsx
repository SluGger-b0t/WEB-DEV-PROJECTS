import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Divider, Text, Heading, Stack, Image } from "@chakra-ui/react";
import { addEllipse } from '../../utils/common-utils';
import Postdetail from '../Postdetail';
import { useNavigate } from 'react-router-dom';
const Singlepost = ({postt}) => {
const navigate=useNavigate()
  return (
    <div className="mx-auto md:mx-4 lg:mx-4 my-4 text-center hover:scale-105 duration-200 border-4 border-[#D2C1B3] rounded-xl ">
      <Card
        maxW={{ base: "56", md: "64", lg: "72", xl: "sm" }}
        height={{ base: "base", md: "full" }}
        rounded={"3xl"}
      >
        <CardBody>
          <Image
            width={"full"}
            height={{ base: "24", md: "64" }}
            src={postt?.picture}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <div
              className="text-[#BBADA1] md:xl xl:text-3xl font-bold "
              size="md"
            >
              {addEllipse(postt?.title, 30)}
            </div>
            <div className="md:text-base xl:text-xl font-bold h-24 break-all text-[#BBADA1]">
              {addEllipse(postt?.description, 100)}
            </div>
            <div
              className=" text-[15px] mt-2 md:text-base xl:text-xl uppercase font-bold text-[#BBADA1]"
              textTransform={"uppercase"}
              color="blue.600"
              fontSize="xl"
            >
              {postt?.category}
            </div>
          </Stack>
        </CardBody>
        <hr className="border-[#D2C1B3]" />
        <CardFooter>
          <ButtonGroup spacing="2">
            <div className="sm:-my-4 -my-2 md:my-0">
              <button
                onClick={() => navigate(`/detail/${postt._id}`)}
                className="border-2  xl:p-2 bg-[#D2C1B3] mx-4 rounded-xl text-white text-base sm:text-sm md:text-lg xl:text-2xl font-bold"
              >
                Read More
              </button>
              <button className="border-2 xl:p-2 bg-[#D2C1B3] xl:mx-4 rounded-xl text-white  md:text-lg xl:text-2xl font-bold">
                Delete
              </button>
            </div>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Singlepost
