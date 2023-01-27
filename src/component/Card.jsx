import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { RiLoader4Fill, RiArrowRightLine, RiImage2Line } from "react-icons/ri";
import { BsFillCircleFill, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

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
    setaumentar(aumentar - 1);
  };
  const [loader, setLoader] = useState(true);
  const [loaderImage, setLoaderImage] = useState(false);

  return (
    <>
      <img
        src="rickAndMorty.png"
        alt="logo"
        width={360}
        height={120}
        className="mx-auto pt-5"
      />

      <div className="text-center flex flex-col justify-center md:flex-row lg:flex-row md:justify-between items-center lg:justify-between lg:mx-5 md:mx-5 ">
        <Typography
          variant="h4"
          className="mx-4 text-[#02B1C8]  my-5 font-cursive2 text-4xl"
        >
          <span className="text-4xl">pagina</span> {aumentar}
        </Typography>
        <div className="flex items-center  pr-3">
          <Tooltip content="atras">
            <IconButton
              variant="text"
              className="self-end mb-10 mx-1 text-start text-xl flex"
              disabled={aumentar === 1}
              onClick={restar}
            >
              <BsArrowLeft className="text-sky-500 text-2xl" />
            </IconButton>
          </Tooltip>

          <Tooltip content="siguiente">
            <IconButton
              variant="text"
              className="self-end mb-10 mx-1 text-xl text-start flex"
              disabled={aumentar === 42}
              onClick={sumar()}
            >
              <BsArrowRight />
            </IconButton>
          </Tooltip>
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
                <span className="uppercase text-black font-rubik text-base mr-1">
                  estado :
                </span>
                <BsFillCircleFill
                  className={`h-3 w-3 mr-2 ${
                    user.status === "Alive"
                      ? "text-green-800 animate-pulse"
                      : "text-red-500 animate-pulse"
                  } ${
                    user.status === "unknown"
                      ? "text-gray-400 animate-pulse"
                      : ""
                  }`}
                />{" "}
                {user.status}
              </Typography>
              <CardHeader
                color="blue"
                className="relative h-56 w-56 rounded-full flex self-center"
              >
                {!loaderImage && (
                  <div className="animate-pulse text-gray-100 h4-40 w-40 z-50">
                    loading... <RiImage2Line />
                  </div>
                )}
                <img
                  onLoad={() => setLoaderImage(true)}
                  src={user.image}
                  alt={user.name}
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
                className="flex items-center flex-col gap-y-5 self-center py-3 pb-16 "
              >
                <Typography variant="small" className="font-marker text-base">
                  <span className="uppercase text-black font-bold font-rubik text-sm">
                    origen :
                  </span>
                  {user.origin.name}
                </Typography>
                <Link
                  to={`/params/${user.id}`}
                  className="pt-4 text-blue-400 flex gap-x-1 items-center cursor-pointer"
                >
                  ver mas{" "}
                  <RiArrowRightLine className="hover:translate-x-1 duration-500" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
      {/* ----------- */}

      <div className="text-center flex flex-col justify-center md:flex-row lg:flex-row md:justify-between items-center lg:justify-between lg:mx-5 md:mx-5 ">
        <Typography
          variant="h4"
          
          className="mx-4 my-5 font-cursive2 text-4xl text-[#02B1C8] "
        >
          <span className=" text-4xl">pagina</span> {aumentar}
        </Typography>
        <div className="flex items-center  pr-3">
          <Tooltip content="atras">
            <IconButton
              variant="text"
              className="self-end mb-10 mx-1 text-start text-xl flex"
              disabled={aumentar === 1}
              onClick={restar}
            >
              <BsArrowLeft className="text-sky-500 text-2xl" />
            </IconButton>
          </Tooltip>

          <Tooltip content="siguiente">
            <IconButton
              variant="text"
              className="self-end mb-10 mx-1 text-xl text-start flex"
              disabled={aumentar === 42}
              onClick={sumar()}
            >
              <BsArrowRight />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default CardApi;
