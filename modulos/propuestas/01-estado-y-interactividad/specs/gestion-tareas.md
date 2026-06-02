# Spec: Gestión de Tareas

**Change:** `01-estado-y-interactividad`
**Tipo:** Full spec (nuevo dominio)

---

## Purpose

La aplicación **MUST** permitir a los usuarios gestionar una lista de tareas con operaciones CRUD básicas: crear, leer, actualizar (marcar como completada/no completada) y eliminar. El estado **MUST** ser manejado con `useState` y los datos **MUST** fluir de padre a hijo mediante props.

---

## Requirements

### Requirement: Crear Tarea

El sistema **MUST** permitir al usuario crear una nueva tarea mediante un formulario controlado.

#### Scenario: Crear tarea exitosamente

- GIVEN un formulario con un campo de texto vacío
- WHEN el usuario escribe "Estudiar useEffect" y presiona Enter o hace clic en "Agregar"
- THEN la tarea "Estudiar useEffect" aparece en la lista de tareas
- AND el campo de texto se limpia

#### Scenario: No crear tarea vacía

- GIVEN el formulario con el campo vacío o solo espacios
- WHEN el usuario intenta enviar
- THEN no se agrega ninguna tarea
- AND el campo de texto permanece vacío

### Requirement: Leer Lista de Tareas

El sistema **MUST** mostrar todas las tareas existentes en una lista.

#### Scenario: Lista con tareas

- GIVEN 3 tareas en el estado
- WHEN el componente se renderiza
- THEN se muestran 3 tareas en pantalla

#### Scenario: Lista vacía

- GIVEN 0 tareas en el estado
- WHEN el componente se renderiza
- THEN se muestra el mensaje "No hay tareas todavía"

### Requirement: Actualizar Estado de Tarea

El sistema **MUST** permitir al usuario marcar una tarea como completada o no completada mediante un checkbox.

#### Scenario: Marcar como completada

- GIVEN una tarea "Aprender JSX" no completada
- WHEN el usuario hace clic en el checkbox de esa tarea
- THEN la tarea se muestra como completada (texto tachado, estilo diferente)

#### Scenario: Desmarcar tarea

- GIVEN una tarea completada "Crear componente"
- WHEN el usuario hace clic en el checkbox nuevamente
- THEN la tarea se muestra como no completada

### Requirement: Eliminar Tarea

El sistema **MUST** permitir al usuario eliminar una tarea de la lista mediante un botón.

#### Scenario: Eliminar tarea existente

- GIVEN una tarea "Estudiar useState" en la lista
- WHEN el usuario hace clic en el botón de eliminar (✕)
- THEN la tarea "Estudiar useState" desaparece de la lista
- AND las demás tareas permanecen intactas
