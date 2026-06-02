# Propuesta: Formularios con React Hook Form

**Change name:** `04-formularios-rhf`

---

## Intent

El formulario de Taskify usa `useState` manual. Los alumnos necesitan aprender `react-hook-form` para manejar formularios con validación declarativa. Este cambio migra `TaskForm` a RHF.

## Scope

### In Scope
- Instalar `react-hook-form`
- Migrar TaskForm a `useForm` con `register`, `handleSubmit`, `errors`
- Validación: título requerido, mínimo 3 caracteres, máximo 50
- Validación personalizada: título único (no repetido)
- Mostrar mensajes de error por campo
- Limpiar formulario con `reset()` al enviar

### Out of Scope
- Validación asíncrona
- Schema validation con Zod/Yup

## New Capabilities
- `formulario-tareas-rhf`: Formulario de tareas con React Hook Form

## Modified Capabilities
- `gestion-tareas`: TaskForm migrado de useState a RHF

## Approach

1. `npm install react-hook-form`
2. Migrar `TaskForm.jsx` de useState a `useForm`
3. Agregar reglas de validación en `register()`
4. Mostrar `errors` con mensajes descriptivos

## Affected Areas

| Area | Impact |
|------|--------|
| `package.json` | Modified — nueva dependencia |
| `src/components/TaskForm.jsx` | Modified — migrar a RHF |

## Rollback

Revetir TaskForm.jsx al estado anterior y `npm uninstall react-hook-form`.

## Success Criteria

- [ ] Formulario funciona sin onChange manual
- [ ] Validación: título requerido, minLength, maxLength
- [ ] Mensajes de error visibles debajo de cada campo
- [ ] Formulario se limpia al enviar
