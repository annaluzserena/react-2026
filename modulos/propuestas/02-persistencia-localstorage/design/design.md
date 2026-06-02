# Design: Persistencia con localStorage

**Change:** `02-persistencia-localstorage`

---

## Technical Approach

Dos cambios en `App.jsx`:
1. Inicializar `useState` con **lazy initializer** que lee de localStorage
2. Agregar `useEffect` con `[tareas]` como dependencia para persistir

## Architecture Decisions

### Decision: Lazy initializer vs useEffect para carga

| Opción | Tradeoff | Decisión |
|--------|----------|----------|
| Lazy initializer + useEffect | Clara separación: init (leer) + efecto (escribir). Pedagógica. | ✅ Elegido |
| Solo useEffect | Lee en efecto, pero hay flicker porque arranca con default. | ❌ Descartado |

## Data Flow

```
App monta → useState(lazyInit) → lee localStorage → estado inicial
                                               ↓
Usuario interactúa → setTareas → re-render → useEffect → escribe localStorage
```

## File Changes

| File | Acción | Descripción |
|------|--------|-------------|
| `src/App.jsx` | Modified | Lazy init + useEffect para persistencia |

## Contratos

```js
// Clave en localStorage
const STORAGE_KEY = 'taskify-tareas'

// Lazy initializer
const [tareas, setTareas] = useState(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
})

// Persistencia
useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tareas))
}, [tareas])
```
