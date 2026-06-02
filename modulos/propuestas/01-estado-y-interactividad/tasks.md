# Tasks: Estado e Interactividad en Taskify

**Change:** `01-estado-y-interactividad`

---

## Phase 1: Fundamentos (componentes hoja)

- [ ] 1.1 Crear `src/components/TaskForm.jsx` — input controlado + botón Agregar + `onSubmit` que llama a `onAgregar`
- [ ] 1.2 Modificar `src/components/TaskCard.jsx` — agregar checkbox (`onChange → onToggle(id)`), botón ✕ (`onClick → onBorrar(id)`)

## Phase 2: Estado y lógica (App.jsx)

- [ ] 2.1 Modificar `src/App.jsx` — importar `useState`, migrar `tareasIniciales` a `const [tareas, setTareas] = useState([...])`
- [ ] 2.2 Agregar función `agregarTarea(nuevaTarea)` en App — `setTareas([...tareas, nuevaTarea])`
- [ ] 2.3 Agregar función `toggleTarea(id)` en App — `setTareas(tareas.map(t => t.id === id ? {...t, completada: !t.completada} : t))`
- [ ] 2.4 Agregar función `borrarTarea(id)` en App — `setTareas(tareas.filter(t => t.id !== id))`
- [ ] 2.5 Agregar `const [filtro, setFiltro] = useState('todas')` + función `cambiarFiltro(nuevoFiltro)` en App
- [ ] 2.6 Calcular `tareasFiltradas` con `.filter()` según valor de `filtro`

## Phase 3: Integración (conectar componentes)

- [ ] 3.1 Pasar `onAgregar={agregarTarea}` a `<TaskForm />` desde App
- [ ] 3.2 Pasar `onToggle={toggleTarea}` y `onBorrar={borrarTarea}` a `<TaskList />` desde App
- [ ] 3.3 Pasar `tareasFiltradas` en lugar de `tareas` a `<TaskList />`
- [ ] 3.4 Modificar `src/components/TaskList.jsx` — agregar botones de filtro (Todas/Activas/Completadas) + pasar `onToggle` y `onBorrar` a `TaskCard`
- [ ] 3.5 Pasar `tareasPendientes={tareas.filter(t => !t.completada).length}` dinámico a `<Header />`

## Phase 4: Estilos

- [ ] 4.1 Agregar estilos para `.task-form` (layout input + botón, gap)
- [ ] 4.2 Agregar estilos para `.task-card__checkbox` y `.task-card__borrar` (botón rojo hover)
- [ ] 4.3 Agregar estilos para `.filtros` (botones en fila, activo resaltado con color)

## Phase 5: Verificación

- [ ] 5.1 Verificar build: `npm run build` sin errores
- [ ] 5.2 Probar escenarios: crear tarea, toggle completada, borrar, filtrar, contador dinámico
