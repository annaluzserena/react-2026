import TaskCard from './TaskCard'

/* =========================================================
   TaskList — Lista de tareas
   
   Recibe un array de tareas y renderiza una TaskCard
   por cada una usando .map().
   
   Props:
   - tareas: array de objetos { id, titulo, completada }
   
   Cada elemento necesita una "key" única para que React
   pueda identificar qué cambió (y no re-renderizar todo).
   ========================================================= */

function TaskList({ tareas }) {
  return (
    <section className="task-list">
      <h2>Mis tareas</h2>

      {tareas.length === 0 ? (
        <p className="vacio">No hay tareas todavía.</p>
      ) : (
        <ul>
          {tareas.map((tarea) => (
            <TaskCard
              key={tarea.id}
              titulo={tarea.titulo}
              completada={tarea.completada}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default TaskList
