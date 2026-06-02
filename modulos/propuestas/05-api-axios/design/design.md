# Design: API con Axios + json-server

**Change:** `05-api-axios`

---

## Technical Approach

1. Instalar `axios` y `json-server`
2. Crear `src/services/api.js` con instancia configurada
3. Migrar `App.jsx` de persistencia localStorage a llamadas API
4. Reemplazar las 4 funciones de estado por versiones async que llaman a la API

## Architecture Decisions

### Decision: Instancia de Axios vs fetch nativo

| Opción | Tradeoff | Decisión |
|--------|----------|----------|
| Instancia Axios | baseURL centralizado, errores HTTP automáticos, timeout configurable | ✅ Elegido |
| fetch nativo | Sin dependencia extra, pero más código repetitivo | ❌ Descartado |

### Decision: json-server vs mock manual

| Opción | Tradeoff | Decisión |
|--------|----------|----------|
| json-server | API REST real con 0 configuración. Ideal para aprendizaje. | ✅ Elegido |
| Mock manual | Más control pero requiere escribir endpoints falsos. | ❌ Descartado |

## Data Flow

```
App (mount) → useEffect → api.get('/tareas') → setTareas(res.data)
                                                      ↓
Usuario: agregar → api.post('/tareas', tarea) → setTareas(prev => [...prev, res.data])
Usuario: toggle → api.patch(`/tareas/${id}`, {completada}) → actualiza UI
Usuario: borrar → api.delete(`/tareas/${id}`) → setTareas(prev => prev.filter(t => t.id !== id))
```

## File Changes

| File | Acción |
|------|--------|
| `package.json` | Modified — agregar axios, json-server + script "server" |
| `src/services/api.js` | New — instancia Axios |
| `src/db.json` | New — datos iniciales de json-server |
| `src/App.jsx` | Modified — reemplazar localStorage por API calls |

## Contratos

```js
// src/services/api.js
import axios from 'axios'
const api = axios.create({ baseURL: 'http://localhost:3001', timeout: 5000 })
export default api

// src/db.json
{ "tareas": [] }

// Script en package.json
"server": "json-server --watch src/db.json --port 3001"
```

```js
// App.jsx — patrón para cada operación
// GET al montar
useEffect(() => {
  api.get('/tareas').then(res => setTareas(res.data)).catch(() => setError(true))
}, [])

// POST
const agregarTarea = async (tarea) => {
  const res = await api.post('/tareas', tarea)
  setTareas(prev => [...prev, res.data])
}
```
