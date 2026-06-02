# Ejercicio 02: CRUD Completo con json-server

**Módulo:** 07 — API y HTTP
**Dificultad:** ⭐⭐⭐⭐ Proyecto Integrador
**Tiempo estimado:** 45 minutos

---

## 🎯 Objetivo de Aprendizaje

Integrar Taskify completamente con una API local usando json-server. Implementar las 4 operaciones CRUD (GET, POST, PUT, DELETE) y entender cómo una app React se comunica con un backend.

---

## 📋 Requisitos

- Configurar `json-server` con un archivo `src/db.json`
- **MUST** tener una instancia de Axios configurada en `src/services/api.js`
- **MUST** cargar tareas desde la API al montar la app (GET)
- **MUST** crear tareas en la API (POST)
- **MUST** actualizar el estado de completada en la API (PATCH)
- **MUST** eliminar tareas de la API (DELETE)
- **SHOULD** manejar errores de red en cada operación
- **SHOULD** mostrar feedback visual (toast o notificación) al crear/borrar
- **MAY** agregar un botón de "sincronizar" manual

---

## ✅ Criterios de Aceptación

### Escenario 1: Cargar tareas desde la API
- GIVEN json-server corriendo con 3 tareas en db.json
- WHEN la app se inicia
- THEN las 3 tareas se muestran en pantalla

### Escenario 2: Crear tarea
- GIVEN el formulario de Taskify
- WHEN se envía "Estudiar Axios"
- THEN la tarea aparece en la lista
- AND aparece en db.json (persistida)

### Escenario 3: Marcar como completada
- GIVEN una tarea existente
- WHEN se hace clic en el checkbox
- THEN el estado completada se actualiza en la API
- AND la UI refleja el cambio

### Escenario 4: Eliminar tarea
- GIVEN una tarea existente
- WHEN se hace clic en borrar
- THEN la tarea desaparece de la lista
- AND se elimina de db.json

---

## 💡 Pistas

- Script en package.json: `"server": "json-server --watch src/db.json --port 3001"`
- Corré la API en una terminal y Vite en otra
- Usá PATCH para actualizar solo la propiedad `completada`: `api.patch(url, { completada: true })`
- El `baseURL` de la instancia debe apuntar a `http://localhost:3001`
- `.finally()` es útil para ocultar el loading tanto en éxito como en error

---

## 🏁 Proyecto Completo

Al terminar este ejercicio, Taskify es una aplicación **full-stack** con:

```
React (frontend) ←→ Axios (HTTP) ←→ json-server (API) ←→ db.json (datos)
```

¡Felicitaciones por completar el workshop de React! 🚀
