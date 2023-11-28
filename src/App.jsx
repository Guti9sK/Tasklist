import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { tareas as info } from "./info/TaskItem";
import { useState, useEffect } from "react";

import React from "react";

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    setTareas(info);
  }, []);

  function crearTarea(tarea) {
    setTareas([
      ...tareas,
      {
        nombre: tarea.nombre,
        id: tareas.length,
        descripción: tarea.descripción,
      },
    ]);
    alert("Se agregó la tarea");
  }

  function eliminarTarea(tareaId) {
    setTareas(tareas.filter((tarea) => tarea.id !== tareaId));
  }

  return (
    <main className= " bg-gray-dark h-screen">
     <div className="container mx-auto p-10">
     <TaskForm crearTarea={crearTarea} />
      <TaskList tareas={tareas} eliminarTarea={eliminarTarea} />
     </div>
    </main>
  );
}

export default App;
