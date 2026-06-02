import Header from './components/Header'
import TaskList from './components/TaskList'

/* =========================================================
   Taskify — App principal (Etapa 1)
   
   Por ahora usamos datos mockeados (hardcodeados).
   En etapas siguientes:
   - Etapa 2: useState para estado dinámico
   - Etapa 3: agregar, toggle, borrar tareas
   - Etapa 4: persistencia con localStorage
   - Etapa 5: tema claro/oscuro con Context
   - Etapa 6: formularios con React Hook Form
   - Etapa 7: API con Axios + json-server
   ========================================================= */

// Datos de ejemplo — simulando tareas de un alumno
const tareasIniciales = [
  { id: 1, titulo: 'Aprender JSX', completada: false },
  { id: 2, titulo: 'Crear mi primer componente', completada: true },
  { id: 3, titulo: 'Entender las props', completada: false },
  { id: 4, titulo: 'Practicar composición', completada: false },
]

function App() {
  return (
    <div className="app">
      <Header
        titulo="Taskify"
        subtitulo="Workshop React — Desarrollo de Software 2026"
        tareasPendientes={tareasIniciales.filter(t => !t.completada).length}
      />

      <TaskList tareas={tareasIniciales} />
    </div>
  )
}

export default App
