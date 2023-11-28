import TarjetaTareas from "./TarjetaTareas";

export function TaskList({ tareas, eliminarTarea }) {
  if (tareas.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tareas.map((info) => (
        <TarjetaTareas
          key={info.id}
          info={info}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </div>
  );
}
