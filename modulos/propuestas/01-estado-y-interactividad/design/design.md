# Design: Estado e Interactividad en Taskify

**Change:** `01-estado-y-interactividad`

---

## Technical Approach

Migrar de datos estáticos a estado dinámico con `useState` en `App.jsx`. Las funciones de modificación del estado (agregar, toggle, borrar) viven en `App` y se pasan como props a los componentes hijos. El filtro se implementa con un estado adicional (`filtro`) y un `.filter()` antes de renderizar.

**Lema:** Los datos fluen hacia abajo (props), los eventos fluyen hacia arriba (callbacks).

---

## Architecture Decisions

### Decision: Estado en App.jsx (Lifting State Up)

| Opción | Tradeoff | Decisión |
|--------|----------|----------|
| Estado en App.jsx | Todos los componentes acceden por props. Es el approach más simple y pedagógico. | ✅ Elegido |
| Estado en TaskList | Más encapsulado, pero Header no puede mostrar contador. | ❌ Descartado |
| Estado global (Context) | Sobredimensionado para 2 niveles de profundidad. | ❌ Descartado |

**Rationale:** Para alumnos sin experiencia, el patrón más claro es tener el estado en el componente raíz y pasarlo hacia abajo. Context se introduce en el Módulo 05.

### Decision: IDs con Date.now()

| Opción | Tradeoff | Decisión |
|--------|----------|----------|
| `Date.now()` | Simple, suficientemente único para un workshop. No requiere librerías. | ✅ Elegido |
| `crypto.randomUUID()` | Más único, pero disponible desde Node 19+. | ❌ Descartado |
| Contador incremental | Propenso a bugs al eliminar/agregar. | ❌ Descartado |

**Rationale:** `Date.now()` es simple de explicar y entender. Para los fines del workshop es suficiente.

### Decision: CSS plano con clases dinámicas

| Opción | Tradeoff | Decisión |
|--------|----------|----------|
| CSS plano + className condicional | Sin dependencias, fácil de entender. | ✅ Elegido |
| Módulos CSS | Más encapsulado, pero requiere explicar el sistema de módulos. | ❌ Descartado |
| Tailwind | Curva de aprendizaje extra. | ❌ Descartado |

**Rationale:** CSS plano mantiene el stack mínimo. Las clases dinámicas se explican con el operador ternario que ya conocen de JS.

---

## Data Flow

```
App  (useState: tareas[], filtro)
 │
 ├── Header ← props: { tareasPendientes }
 │
 ├── TaskForm ← props: { onAgregar }
 │    Evento: usuario escribe y submit → onAgregar(nuevaTarea)
 │
 ├── [Botones Filtro] ← props: { filtro, onCambiarFiltro }
 │    Evento: clic en "Activas" → onCambiarFiltro('activas')
 │
 └── TaskList ← props: { tareasFiltradas, onToggle, onBorrar }
      │
      └── TaskCard ← props: { titulo, completada, onToggle, onBorrar }
           Evento: clic checkbox → onToggle(id)
           Evento: clic borrar → onBorrar(id)
```

**Flujo de filtrado:**

```
tareas ──→ según filtro ──→ tareasFiltradas ──→ TaskList
  │          │
  │          ├── 'todas' → sin filtro
  │          ├── 'activas' → .filter(t => !t.completada)
  │          └── 'completadas' → .filter(t => t.completada)
```

---

## File Changes

| File | Acción | Descripción |
|------|--------|-------------|
| `src/App.jsx` | Modificar | Agregar useState para tareas y filtro. Funciones: agregarTarea, toggleTarea, borrarTarea |
| `src/components/TaskForm.jsx` | **Crear** | Input controlado + botón Agregar. Props: onAgregar |
| `src/components/TaskCard.jsx` | Modificar | Agregar checkbox y botón borrar. Props nuevas: onToggle, onBorrar |
| `src/components/TaskList.jsx` | Modificar | Agregar botones de filtro. Pasar onToggle y onBorrar a TaskCard |
| `src/index.css` | Modificar | Agregar estilos para formulario, filtros, checkbox, botón borrar |

---

## Interfaces / Contracts

```js
// Estructura de una tarea
{
  id: number,          // Date.now()
  titulo: string,      // texto ingresado por el usuario
  completada: boolean  // false al crear, toggle con checkbox
}

// Callbacks que fluyen de App → componentes hijos:
// onAgregar:  (nuevaTarea) => void
// onToggle:   (id) => void
// onBorrar:   (id) => void
// onCambiarFiltro: (filtro) => void  // 'todas' | 'activas' | 'completadas'
```

---

## Testing Strategy

No aplica — el proyecto no tiene test runner configurado. La verificación será manual siguiendo los escenarios de los specs.

---

## Open Questions

- None
