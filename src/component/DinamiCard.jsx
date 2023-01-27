import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { RiLoader4Fill } from "react-icons/ri";
import {
  Button,
} from "@material-tailwind/react";
import { BsFillCircleFill } from "react-icons/bs";

const DinamiCard = () => {
  const { id } = useParams();
  const baseUrl = `https://rickandmortyapi.com/api/character/${id}`;
  const get = async () => {
    try {
      const datos = await axios.get(baseUrl);
      setData(datos.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    get();
  }, []);
  const [loader, setLoader] = useState(true);
  return (
    <>
      {loader ? (
        <RiLoader4Fill className="animate-spin text-8xl text-sky-300 z-50 mx-auto  mt-28" />
      ) : (
        <div className="flex justify-center gap-x-3 mt-28">
          <img src={data.image} alt={data.name} />
          <div className="space-y-2">
            <h2 className="text-base font-bold text-green-500">
              <span className="text-lg font-medium font-rubik text-white">
                nombre :
              </span>
              {data.name}
            </h2>
            <h2 className="text-base  text-green-500 font-bold ">
              <span className="text-lg font-medium font-rubik text-white">
                especie :
              </span>
              {data.species}
            </h2>
            <h2 className="text-base  text-green-500 font-bold ">
              <span className="text-lg font-medium font-rubik text-white">
                genero :
              </span>
              {data.gender}
            </h2>
            <h2 className="text-base  text-green-500 font-bold flex items-center gap-x-2">
              <span className="text-lg font-medium font-rubik text-white">
                estado :
              </span>
              <span>
                <BsFillCircleFill
                  className={`h-3 w-3 mr-2 ${
                    data.status === "Alive"
                      ? "text-green-800 animate-pulse"
                      : "text-red-500 animate-pulse"
                  } ${
                    data.status === "unknown"
                      ? "text-gray-400 animate-pulse"
                      : ""
                  }`}
                />
              </span>
              {data.status}
            </h2>
            <h2 className="text-base  text-green-500 font-bold ">
              <span className="text-lg font-medium font-rubik text-white">
                origen :
              </span>
              {data.origin.name}
            </h2>
            <h2 className="text-base  text-green-500 font-bold ">
              <span className="text-lg font-medium font-rubik text-white">
                localizacion :
              </span>
              {data.location.name}
            </h2>
            <h2 className="text-base  text-green-500 font-bold ">
              <span className="text-lg font-medium font-rubik text-white">
                episodio en los que a estado :
              </span>
              {data.episode.length}
            </h2>
            <h2 className="text-base text-green-500 font-bold ">
              <span className="text-lg font-medium font-rubik text-white">
                tipo :
              </span>
              {data.type === "" ? "sin tipo" : data.type}
            </h2>
          </div>
        </div>
      )}
      <div className="justify-center flex mt-8">
      <Link to={"/"} className="py-2 px-5 rounded hover:shadow-md duration-300 hover:shadow-indigo-500 bg-indigo-500">regresar</Link>
      </div>
    </>
  );
};

export default DinamiCard;
