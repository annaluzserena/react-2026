# Propuesta: API con Axios + json-server

**Change name:** `05-api-axios`

---

## Intent

Taskify actualmente persiste solo en localStorage. Los alumnos necesitan aprender a consumir APIs con Axios. Este cambio conecta Taskify con una API REST local usando `json-server`.

## Scope

### In Scope
- Instalar `axios` y `json-server`
- Crear instancia de Axios en `src/services/api.js`
- Cargar tareas desde la API al montar (GET)
- Crear tareas en la API (POST)
- Actualizar estado completada (PATCH)
- Eliminar tareas (DELETE)
- Manejar loading/error/data en cada operación
- Script `"server"` en package.json

### Out of Scope
- Autenticación
- Paginación
- API remota (solo local con json-server)

## New Capabilities
- `api-tareas`: CRUD contra API REST usando Axios

## Modified Capabilities
- `gestion-tareas`: Persistencia ahora es contra API (no localStorage)
- `persistencia-tareas`: Reemplazada por API (localStorage ya no es necesario)

## Approach

1. Instalar dependencias
2. Crear instancia de Axios con baseURL
3. Reemplazar persistencia de localStorage por llamadas API
4. Manejar loading/error en cada operación

## Affected Areas

| Area | Impact |
|------|--------|
| `package.json` | Modified — dependencias + script server |
| `src/services/api.js` | New — instancia Axios |
| `src/App.jsx` | Modified — reemplazar localStorage por API calls |

## Rollback

Revertir App.jsx a persistencia localStorage, eliminar src/services/api.js, npm uninstall axios json-server.

## Success Criteria

- [ ] Tareas se cargan desde la API al iniciar
- [ ] Crear tarea persiste en db.json via API
- [ ] Toggle completado persiste via API
- [ ] Borrar tarea persiste via API
- [ ] Loading indicator mientras se cargan datos
