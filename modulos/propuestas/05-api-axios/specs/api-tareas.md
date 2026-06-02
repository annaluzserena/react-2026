# Spec: API de Tareas con Axios

**Change:** `05-api-axios`
**Tipo:** Full spec

---

## Purpose

La aplicación **MUST** sincronizar las tareas con una API REST usando Axios. La API corre localmente con `json-server` en el puerto 3001. Cada operación CRUD **MUST** persistir en el servidor.

## Requirements

### Requirement: Cargar tareas (GET)

El sistema **MUST** cargar las tareas desde la API al montar la aplicación.

#### Scenario: Carga exitosa

- GIVEN json-server corriendo con 3 tareas en db.json
- WHEN la app se inicia
- THEN se muestran las 3 tareas
- AND no se muestra indicador de carga

#### Scenario: Error de red

- GIVEN json-server no está corriendo
- WHEN la app se inicia
- THEN se muestra "Error al cargar las tareas"
- AND la lista se muestra vacía

### Requirement: Crear tarea (POST)

El sistema **MUST** enviar una petición POST al crear una tarea.

#### Scenario: Creación exitosa

- GIVEN el formulario con "Nueva tarea"
- WHEN se envía
- THEN la tarea aparece en la lista
- AND aparece en db.json

### Requirement: Actualizar tarea (PATCH)

El sistema **MUST** enviar una petición PATCH al marcar/desmarcar tarea.

#### Scenario: Marcar completada

- GIVEN una tarea no completada
- WHEN se hace clic en el checkbox
- THEN se envía PATCH con `{ completada: true }`
- AND la UI refleja el cambio

### Requirement: Eliminar tarea (DELETE)

El sistema **MUST** enviar una petición DELETE al borrar una tarea.

#### Scenario: Eliminar exitoso

- GIVEN una tarea existente
- WHEN se hace clic en borrar
- THEN la tarea desaparece de la lista
- AND se elimina de db.json
