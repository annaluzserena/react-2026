# Tasks: Formularios con React Hook Form

**Change:** `04-formularios-rhf`

---

## Phase 1: Instalación

- [ ] 1.1 `npm install react-hook-form`

## Phase 2: Migración

- [ ] 2.1 Modificar `src/components/TaskForm.jsx` — importar `useForm`, migrar de useState a register/handleSubmit/reset
- [ ] 2.2 Agregar reglas de validación en register: required, minLength(3), maxLength(50)
- [ ] 2.3 Agregar validación personalizada `validate` para título único (comparar con tareas existentes que llegan por props)
- [ ] 2.4 Renderizar `errors.titulo.message` debajo del input cuando haya error

## Phase 3: Integración

- [ ] 3.1 Pasar `tareas` como prop a `<TaskForm tareas={tareas} />` desde App

## Phase 4: Verificación

- [ ] 4.1 Probar: enviar vacío → error, "Es" → error minLength, repetido → error único
- [ ] 4.2 Probar: título válido → agrega tarea y limpia formulario
- [ ] 4.3 `npm run build` sin errores
