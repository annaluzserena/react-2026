# Spec: Persistencia de Tareas

**Change:** `02-persistencia-localstorage`
**Tipo:** Full spec

---

## Purpose

La aplicación **MUST** persistir las tareas en `localStorage` para que los datos sobrevivan a recargas del navegador. La lectura inicial **MUST** usar la forma función de `useState`. La escritura **MUST** usar `useEffect` con las dependencias correctas.

## Requirements

### Requirement: Recuperar tareas al iniciar

El sistema **MUST** leer las tareas guardadas de `localStorage` al montar el componente.

#### Scenario: Datos existentes en localStorage

- GIVEN localStorage tiene `[{"id":1,"titulo":"Estudiar","completada":false}]`
- WHEN la app se inicia
- THEN la tarea "Estudiar" aparece en la lista

#### Scenario: localStorage vacío

- GIVEN localStorage no tiene datos guardados
- WHEN la app se inicia
- THEN la lista comienza vacía

#### Scenario: localStorage corrupto

- GIVEN localStorage tiene un string inválido (`"not-json"`)
- WHEN la app se inicia
- THEN la app no se rompe
- AND la lista comienza vacía

### Requirement: Guardar tareas al cambiar

El sistema **MUST** guardar las tareas en `localStorage` cada vez que la lista se modifique.

#### Scenario: Guardar al agregar

- GIVEN una lista vacía en localStorage
- WHEN se agrega una tarea "Nueva"
- THEN localStorage contiene `[{"id":...,"titulo":"Nueva","completada":false}]`

#### Scenario: Guardar al toggle

- GIVEN una tarea en la lista
- WHEN se marca como completada
- THEN localStorage refleja `completada: true`

#### Scenario: Guardar al borrar

- GIVEN 2 tareas en la lista
- WHEN se borra una
- THEN localStorage contiene solo la tarea restante
