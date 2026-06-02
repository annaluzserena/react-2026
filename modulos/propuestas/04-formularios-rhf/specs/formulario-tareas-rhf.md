# Spec: Formulario de Tareas con React Hook Form

**Change:** `04-formularios-rhf`
**Tipo:** Full spec

---

## Purpose

El formulario de creación de tareas **MUST** usar `react-hook-form` en lugar de `useState` manual. La validación **MUST** ser declarativa usando las reglas de `register()`.

## Requirements

### Requirement: Registrar campos

El sistema **MUST** usar `register()` para conectar el input al formulario.

#### Scenario: Input conectado

- GIVEN un input con `{...register('titulo', { required: true })}`
- WHEN el usuario escribe "Estudiar"
- THEN `handleSubmit` recibe `{ titulo: 'Estudiar' }`

### Requirement: Validar título

El sistema **MUST** validar que el título tenga entre 3 y 50 caracteres.

#### Scenario: Título muy corto

- GIVEN el input con "Es"
- WHEN se intenta enviar
- THEN se muestra "Mínimo 3 caracteres"

#### Scenario: Título válido

- GIVEN el input con "Estudiar useEffect"
- WHEN se envía
- THEN la tarea se agrega correctamente

#### Scenario: Título vacío

- GIVEN el input vacío
- WHEN se intenta enviar
- THEN se muestra "El título es obligatorio"

### Requirement: Validar título único

El sistema **SHOULD** validar que el título no se repita con tareas existentes.

#### Scenario: Título repetido

- GIVEN existe la tarea "Estudiar React"
- WHEN se escribe "Estudiar React" y se intenta enviar
- THEN se muestra "Esta tarea ya existe"

### Requirement: Limpiar formulario

El sistema **MUST** limpiar el formulario después de un envío exitoso.

#### Scenario: Reset post-submit

- GIVEN el formulario completado
- WHEN se envía exitosamente
- THEN todos los campos se vacían
