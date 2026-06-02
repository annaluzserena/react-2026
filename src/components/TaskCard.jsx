/* =========================================================
   TaskCard — Tarea individual
   
   Muestra una tarea con su título y estado (completada o no).
   
   Props:
   - titulo: string → texto de la tarea
   - completada: boolean → true si está completada
   
   En etapas siguientes este componente recibirá también
   funciones para:
   - onToggle: marcar como completada/no completada
   - onBorrar: eliminar la tarea
   ========================================================= */

function TaskCard({ titulo, completada }) {
  return (
    <li className={`task-card ${completada ? 'task-card--completada' : ''}`}>
      <span className="task-card__estado">
        {completada ? '✅' : '⬜'}
      </span>
      <span className="task-card__titulo">
        {titulo}
      </span>
    </li>
  )
}

export default TaskCard
