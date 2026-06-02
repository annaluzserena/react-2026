# Propuesta: Estado e Interactividad en Taskify

**Change name:** `01-estado-y-interactividad`
**Fecha:** 2026-06-02

---

## Intent

Taskify actualmente muestra una lista estática de tareas con datos mockeados. Los alumnos necesitan aprender a manejar estado dinámico con `useState`, eventos del usuario y renderizado condicional. Este cambio agrega interactividad real a la app.

---

## Scope

### In Scope
- Migrar datos mockeados a estado dinámico con `useState`
- Agregar formulario controlado para crear nuevas tareas
- Poder marcar tareas como completadas/no completadas
- Poder eliminar tareas
- Filtrar tareas: todas / activas / completadas
- Mostrar contador de tareas pendientes actualizado en tiempo real
- Persistencia inicial en memoria (sin localStorage todavía)

### Out of Scope
- Persistencia en localStorage (próximo cambio: `02-persistencia`)
- Tema claro/oscuro (próximo cambio: `03-contexto-tema`)
- Formularios con React Hook Form (próximo cambio: `04-formularios-rhf`)
- API con Axios (próximo cambio: `05-api-axios`)

---

## Capabilities

### New Capabilities
- `gestion-tareas`: CRUD completo de tareas (crear, leer, actualizar, borrar) con estado local
- `filtro-tareas`: Filtrar lista de tareas por estado (todas/activas/completadas)

### Modified Capabilities
- None (primera iteración, no hay specs previas)

---

## Approach

1. Agregar `useState` en `App.jsx` para manejar el array de tareas
2. Crear `TaskForm.jsx` con input controlado + `onSubmit` para agregar tareas
3. Modificar `TaskCard.jsx` para recibir `onToggle` y `onBorrar` como props
4. Agregar botones de filtro (Todas / Activas / Completadas) en `TaskList.jsx`
5. El estado fluye siempre de padre a hijo, los eventos fluyen de hijo a padre (lifting state up)

---

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/App.jsx` | Modified | Agregar useState, funciones toggle/borrar/agregar/filtrar |
| `src/components/Header.jsx` | Modified | Recibir tareasPendientes desde estado dinámico |
| `src/components/TaskList.jsx` | Modified | Agregar filtros, pasar eventos a TaskCard |
| `src/components/TaskCard.jsx` | Modified | Agregar props onToggle y onBorrar |
| `src/components/TaskForm.jsx` | New | Formulario controlado para nueva tarea |
| `src/index.css` | Modified | Agregar estilos para formulario y filtros |

---

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Alumnos mutan estado directamente (push en lugar de spread) | High | Enfatizar inmutabilidad en teoría + ejemplos |
| Confusión con lifting state up | Medium | Diagrama claro de flujo de datos en presentación |
| Key duplicada al generar IDs con Date.now() | Low | Explicar limitación y alternativa con crypto.randomUUID() |

---

## Rollback Plan

Revertir los cambios en `src/App.jsx`, `src/components/` y `src/index.css` al estado de la Etapa 1 (commit actual). Si no hay git, restaurar archivos desde el backup de Etapa 1.

---

## Dependencies

- Ninguna. Todo es React puro con `useState` — sin librerías externas.

---

## Success Criteria

- [ ] Se pueden agregar tareas desde un formulario
- [ ] Se pueden marcar tareas como completadas con un checkbox
- [ ] Se pueden eliminar tareas con un botón
- [ ] Los filtros (todas/activas/completadas) funcionan correctamente
- [ ] El contador de tareas pendientes se actualiza en tiempo real
- [ ] `npm run build` compila sin errores
