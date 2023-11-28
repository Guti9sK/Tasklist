import { useState } from "react";

export function TaskForm({ crearTarea }) {
  const [nombre, setNombre] = useState("");
  const [descripción, setDescripción] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    crearTarea({
      nombre,
      descripción,
    });
    setNombre("");
    setDescripción("");
  };

  return (
    <div className=" max-w-md mx-auto">
      <form onSubmit={handleSubmit} className=" bg-green-jade mb-4 p-10 rounded-md shadow-md">
        <h1 className="font-bold text-white text-2xl mb-3">Añade tu tarea</h1>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
        className="w-full p-3 mb-2 bg-light-gray placeholder-gray-500 rounded-md shadow-md"
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripción de la tarea"
        onChange={(e) => setDescripción(e.target.value)}
        value={descripción}
        className="w-full p-3 mb-2 bg-light-gray  placeholder-gray-500 rounded-md shadow-md"
      ></textarea>
      <button className="px-5 py-2  text-white bg-dark-blue hover:bg-sky-800 rounded-md  shadow-sm">Agregar</button>
      
    </form>
    </div>
  );
}
