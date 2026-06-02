---
marp: true
theme: default
paginate: true
backgroundColor: #fff
---

# **Módulo 06: Formularios con React Hook Form**

Desarrollo de Software — Clase #13

---

# ¿Por qué React Hook Form?

| Con useState | Con React Hook Form |
|---|---|
| Estado para cada campo | Un solo `useForm()`
| onChange para cada input | `{...register('campo')}`
| Validación manual | Validación declarativa
| Muchos re-renders | Mínimos re-renders
| Mucho código repetitivo | Código limpio y conciso

---

# Instalación

```bash
npm install react-hook-form
```

---

# Uso básico

```jsx
import { useForm } from 'react-hook-form';

function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Datos:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('nombre', { required: true })} />
      {errors.nombre && <p>Este campo es obligatorio</p>}
      <button type='submit'>Enviar</button>
    </form>
  );
}
```

---

# Validación avanzada

```jsx
<input
  {...register('email', {
    required: 'El email es obligatorio',
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: 'Email inválido'
    }
  })}
/>
{errors.email && <p>{errors.email.message}</p>}
```

---

# Taskify: Refactorizar TaskForm

```jsx
function TaskForm({ onAgregarTarea }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onAgregarTarea({
      id: Date.now(),
      titulo: data.titulo,
      completada: false
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('titulo', {
          required: 'El título es obligatorio',
          minLength: { value: 3, message: 'Mínimo 3 caracteres' }
        })}
        placeholder='Nueva tarea...'
      />
      {errors.titulo && <p>{errors.titulo.message}</p>}
      <button type='submit'>Agregar</button>
    </form>
  );
}
```

---

# Ejercicios

**Ejercicio 1:** Formulario de registro con nombre, email, contraseña y confirmación. Validar que las contraseñas coincidan.

**Ejercicio 2:** Formulario de tarea con validación personalizada (título único, sin repetir).
