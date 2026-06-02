---
marp: true
theme: default
paginate: true
backgroundColor: #fff
---

# **Módulo 03: Interactividad y Listas**

Desarrollo de Software — Clase #10

---

# Renderizado de Listas con `.map()`

```jsx
function ListaTareas({ tareas }) {
  return (
    <ul>
      {tareas.map(tarea => (
        <li key={tarea.id}>
          {tarea.titulo}
        </li>
      ))}
    </ul>
  );
}
```

> **Cada elemento en una lista necesita una `key` única.** Ayuda a React a identificar qué cambió.

---

# ¿Qué es `key`?

- `key` le dice a React qué elemento es cada uno
- Si no hay `key`, React re-renderiza TODO
- Con `key`, React solo actualiza el que cambió
- Usá el `id` del dato, **nunca** el índice del array

```jsx
// ✅ Correcto
{tareas.map(t => <li key={t.id}>{t.titulo}</li>)}

// ❌ Incorrecto (solo si la lista es estática y no cambia)
{tareas.map((t, i) => <li key={i}>{t.titulo}</li>)}
```

---

# Marcar tarea como completada

```jsx
function App() {
  const [tareas, setTareas] = useState(tareasIniciales);

  const toggleTarea = (id) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  return (
    <TaskList tareas={tareas} onToggle={toggleTarea} />
  );
}
```

---

# TaskCard con checkbox

```jsx
function TaskCard({ tarea, onToggle, onBorrar }) {
  return (
    <div className={`tarea ${tarea.completada ? 'completada' : ''}`}>
      <input
        type='checkbox'
        checked={tarea.completada}
        onChange={() => onToggle(tarea.id)}
      />
      <span>{tarea.titulo}</span>
      <button onClick={() => onBorrar(tarea.id)}>✕</button>
    </div>
  );
}
```

---

# Borrar tareas con `.filter()`

```jsx
const borrarTarea = (id) => {
  setTareas(tareas.filter(t => t.id !== id));
};
```

> `.filter()` devuelve un **nuevo array** sin el elemento eliminado. No muta el original ✅

---

# Filtros: Todas / Activas / Completadas

```jsx
const [filtro, setFiltro] = useState('todas'); // 'todas' | 'activas' | 'completadas'

const tareasFiltradas = tareas.filter(t => {
  if (filtro === 'activas') return !t.completada;
  if (filtro === 'completadas') return t.completada;
  return true; // 'todas'
});
```

---

# Taskify — Flujo completo

```
App
 ├── TaskForm       → agrega tareas (onAgregar)
 ├── Filtros        → cambia el filtro (onCambiarFiltro)
 └── TaskList       → muestra tareas filtradas
      └── TaskCard  → toggle / borrar (onToggle, onBorrar)
```

**Estado en App:** `tareas`, `filtro`
**Los datos fluyen hacia abajo, los eventos hacia arriba.**

---

# Ejercicios

**Ejercicio 1:** Lista de compras — agregar items, marcar como comprados, borrar.

**Ejercicio 2:** Buscador — input que filtra una lista en tiempo real mientras escribís.
