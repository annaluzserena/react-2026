/* =========================================================
   Header — Barra superior de la aplicación
   
   Props:
   - titulo: string → nombre de la app
   - subtitulo: string → descripción breve
   - tareasPendientes: number → cantidad de tareas sin completar
   
   Ejemplo de uso:
   <Header
     titulo="Taskify"
     subtitulo="Workshop React"
     tareasPendientes={3}
   />
   ========================================================= */

function Header({ titulo, subtitulo, tareasPendientes }) {
  return (
    <header className="header">
      <h1>{titulo}</h1>
      <p className="subtitulo">{subtitulo}</p>
      <p className="contador">
        Tareas pendientes: <strong>{tareasPendientes}</strong>
      </p>
    </header>
  )
}

export default Header
