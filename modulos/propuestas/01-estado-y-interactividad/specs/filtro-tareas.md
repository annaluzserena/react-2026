# Spec: Filtro de Tareas

**Change:** `01-estado-y-interactividad`
**Tipo:** Full spec (nuevo dominio)

---

## Purpose

La aplicación **MUST** permitir al usuario filtrar la lista de tareas por su estado: mostrar todas, solo las activas (no completadas), o solo las completadas. El filtro **MUST** actualizarse en tiempo real sin recargar la página.

---

## Requirements

### Requirement: Filtrar por Estado

El sistema **SHOULD** proveer botones o un control para seleccionar el filtro activo.

#### Scenario: Mostrar todas las tareas

- GIVEN 2 tareas activas y 1 completada
- WHEN el usuario selecciona el filtro "Todas"
- THEN se muestran las 3 tareas

#### Scenario: Mostrar solo activas

- GIVEN 2 tareas activas y 1 completada
- WHEN el usuario selecciona el filtro "Activas"
- THEN solo se muestran las 2 tareas no completadas

#### Scenario: Mostrar solo completadas

- GIVEN 1 tarea activa y 2 completadas
- WHEN el usuario selecciona el filtro "Completadas"
- THEN solo se muestran las 2 tareas completadas

#### Scenario: Sin tareas en el filtro activo

- GIVEN todas las tareas completadas
- WHEN el usuario selecciona "Activas"
- THEN se muestra "No hay tareas todavía"

### Requirement: Indicar filtro activo

El sistema **SHOULD** indicar visualmente cuál filtro está activo (ej: botón resaltado).

#### Scenario: Filtro activo visible

- GIVEN el filtro "Activas" seleccionado
- THEN el botón "Activas" se ve diferente (color, subrayado, etc.)
- AND los botones "Todas" y "Completadas" se ven normales
