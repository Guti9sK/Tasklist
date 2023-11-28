import React from "react";

function TarjetaTareas({ info, eliminarTarea }) {
  return (
    <div className=" bg-dark-purple text-white p-4 rounded-md shadow-lg" >
      <h1 className="text-xl font-bold capitalize">{info.nombre}</h1>
      <p className=" text-gray-200 text-sm mt-2"> {info.descripción} </p>
      <button className="bg-red-intense rounded-md px-2 py-1 mt-4 hover:bg-red-800 shadow-md" onClick={() => eliminarTarea(info.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TarjetaTareas;
