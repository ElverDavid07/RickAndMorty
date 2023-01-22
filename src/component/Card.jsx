import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, IconButton, } from "@material-tailwind/react";
import { FaCodeBranch, FaRegStar } from 'react-icons/fa';
import { AiOutlineRight, AiOutlineLeft, } from 'react-icons/ai'
import { RiLoader4Fill } from 'react-icons/ri'
import { BsFillCircleFill } from 'react-icons/bs'



const CardApi = () => {
  const [aumentar, setaumentar] = useState(1);
  const url = `https://rickandmortyapi.com/api/character/?page=${aumentar}`;
  const api = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data.results);
      setLoader(false);

    } catch (error) {
      console.log(error);
    }
  };

  const [users, setUsers] = useState([]);


  useEffect(() => {
    api();
  }, [aumentar]);
  const sumar = () => () => setaumentar(aumentar + 1);
  const restar = () => {
    aumentar > 1 ? setaumentar(aumentar - 1) : " ";
  };
  const [loader, setLoader] = useState(true);

  return (
    <>
      <img src="rickAndMorty.png" alt="logo" width={360} height={120} className="mx-auto pt-5"/>

      <div className="text-center flex flex-col justify-center md:flex-row lg:flex-row md:justify-between items-center lg:justify-between lg:mx-5 md:mx-5 ">
        <Typography
          variant="h4"
          color="blue"
          className="mx-4 my-5 font-cursive2 text-4xl"
        >
          <span className=" text-sky-600 text-3xl">pagina</span> {aumentar}
        </Typography>
        <div className="flex items-center  pr-3">
          <IconButton
            variant="text"
            className="self-end mb-10 mx-1 text-start text-xl flex"
            onClick={restar}
          >
            <AiOutlineLeft />
          </IconButton>

          <IconButton
            variant="text"
            className="self-end mb-10 mx-1 text-xl text-start flex"
            onClick={sumar()}
          >
            <AiOutlineRight />
          </IconButton>
        </div>
      </div>

      {loader ? (
        <div>
          <RiLoader4Fill className="animate-spin text-8xl text-sky-300 z-50 text-center container" />
        </div>
      ) : (
        <div className="flex flex-wrap lg:gap-8 md:gap-5 gap-y-6   justify-center ">
          {users.map((user) => (
            <Card className="w-96 pt-16" key={user.id}>
              <Typography variant="h5" className="mb-7 self-center font-marker">
                <span className="uppercase text-black font-rubik text-base">
                  Nombre:{" "}
                </span>
                {user.name}
              </Typography>
              <Typography
                variant="h5"
                className="mb-16 self-center  flex items-center font-marker "
              >
                <span className='uppercase text-black font-rubik text-base mr-1'>estado :</span>
                <BsFillCircleFill
                  className={`h-3 w-3 mr-2 ${user.status === "Alive" ? "text-green-800 animate-pulse" : "text-red-500 animate-pulse"
                    } ${user.status === "unknown" ? "text-gray-400 animate-pulse" : ""}`}
                />{" "}
                {user.status}
              </Typography>
              <CardHeader
                color="blue"
                className="relative h-56 w-56 rounded-full flex self-center"
              >
                <img
                  src={ user.image}
                  alt="img"
                  className="object-cover "
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h6" className="font-marker">
                  <span className="uppercase text-black font-rubik text-sm">
                    especie :{" "}
                  </span>
                  {user.species}
                </Typography>
              </CardBody>
              <CardFooter
                divider
                className="flex items-center  self-center py-3 pb-16 "
              >
                <Typography variant="small" className="font-marker text-base">
                  <span className="uppercase text-black font-bold font-rubik text-sm">
                    origen :
                  </span>
                  {user.origin.name}
                </Typography>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
      <div className="text-center md:flex md:justify-between lg:flex lg:justify-between ">
        <Typography
          variant="h4"
          color="blue"
          className="mx-4 my-5 font-cursive2"
        >
          <span className=" text-sky-600 ">pagina</span> {aumentar}
        </Typography>
        <div className="flex pr-3">
          <IconButton
            variant="text"
            className="self-end mb-10 mx-1 text-start flex"
            onClick={restar}
          >
            <AiOutlineLeft />
          </IconButton>

          <IconButton
            variant="text"
            className="self-end mb-10 mx-1 text-start flex"
            onClick={sumar()}
          >
            <AiOutlineRight />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default CardApi;