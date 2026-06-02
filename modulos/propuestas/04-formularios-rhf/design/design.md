# Design: Formularios con React Hook Form

**Change:** `04-formularios-rhf`

---

## Technical Approach

1. Instalar `react-hook-form`
2. Reemplazar `useState` + `onChange` manual por `useForm()` con `register`, `handleSubmit`, `formState: { errors }`, `reset`
3. Las validaciones se declaran como reglas en `register`
4. La validación de título único recibe `tareas` como prop desde App

## Architecture Decisions

### Decision: RHF vs useState manual

| Opción | Tradeoff | Decisión |
|--------|----------|----------|
| React Hook Form | Menos código, validación declarativa, mínimos re-renders | ✅ Elegido |
| useState manual | Ya implementado, alumnos lo conocen | ❌ Descartado |

### Decision: Validación única con validate vs watch

| Opción | Tradeoff | Decisión |
|--------|----------|----------|
| validate + prop tareas | Simple, sin lógica extra en el formulario | ✅ Elegido |
| watch + titulos en estado | Más complejo, requiere useEffect extra | ❌ Descartado |

## Data Flow

```
App → TaskForm (props: onAgregar, tareas existentes)
                   │
          useForm({ defaultValues })
                   │
     register → conecta input
     handleSubmit → valida + llama onAgregar
     errors → muestra validación
     reset → limpia después de submit
```

## File Changes

| File | Acción |
|------|--------|
| `package.json` | Modified — agregar `react-hook-form` |
| `src/components/TaskForm.jsx` | Modified — migrar a useForm |

## Contratos

```js
import { useForm } from 'react-hook-form'

function TaskForm({ onAgregar, tareas }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    onAgregar({ id: Date.now(), titulo: data.titulo, completada: false })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('titulo', {
        required: 'El título es obligatorio',
        minLength: { value: 3, message: 'Mínimo 3 caracteres' },
        maxLength: { value: 50, message: 'Máximo 50 caracteres' },
        validate: (value) =>
          tareas.some(t => t.titulo.toLowerCase() === value.toLowerCase())
            ? 'Esta tarea ya existe'
            : true
      })} />
      {errors.titulo && <p className="error">{errors.titulo.message}</p>}
      <button type="submit">Agregar</button>
    </form>
  )
}
```
