---
marp: true
theme: default
paginate: true
backgroundColor: #fff
---

# **Módulo 02: Estado y Eventos**

Desarrollo de Software — Clase #09

---

# ¿Qué son los Hooks?

> Funciones especiales de React (empiezan con `use`) que permiten agregar estado y otras funcionalidades a componentes funcionales.

**Antes de hooks (2013-2018):**
- Clases con `this`, métodos de ciclo de vida, herencia
- Código verboso y difícil de seguir

**Con hooks (2019+):**
- Todo funciones → más simple y legible
- Estado, efectos, contexto en componentes funcionales

---

# Reglas de los Hooks

1. **Solo se llaman al nivel raíz** del componente (no dentro de `if`, `for`, funciones anidadas)
2. **Solo se llaman desde componentes funcionales** de React (no desde JavaScript común)

```jsx
// ✅ Correcto
function Componente() {
  const [valor, setValor] = useState(0);
  if (condicion) { /* ... */ }
}

// ❌ Incorrecto
function Componente({ condicion }) {
  if (condicion) {
    const [valor, setValor] = useState(0);
  }
}
```

---

# useState — La base del estado

```jsx
const [valor, setValor] = useState(valorInicial);
//    ↑        ↑              ↑
//   leer   actualizar      inicial
```

---

# useState: Contador

```jsx
import { useState } from 'react';

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div>
      <p>Clicks: {cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>+1</button>
      <button onClick={() => setCuenta(cuenta - 1)}>-1</button>
      <button onClick={() => setCuenta(0)}>Reiniciar</button>
    </div>
  );
}
```

---

# useState: Toggle (booleano)

```jsx
function Toggle() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Ocultar' : 'Mostrar'} mensaje
      </button>
      {visible && <p>¡Hola! Estoy visible</p>}
    </div>
  );
}
```

---

# useState: Input controlado

```jsx
function FormNombre() {
  const [nombre, setNombre] = useState('');

  return (
    <div>
      <input
        type='text'
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder='Ingresá tu nombre'
      />
      {nombre && <p>Hola, {nombre}!</p>}
    </div>
  );
}
```

> Input + estado = **componente controlado**. React controla el valor del input.

---

# Inmutabilidad: ¡NUNCA mutar el estado!

```jsx
// ❌ INCORRECTO — muta el array original
items.push(nuevoItem);
setItems(items);

// ✅ CORRECTO — spread crea un array nuevo
setItems([...items, nuevoItem]);
```

```jsx
// ❌ INCORRECTO — muta el objeto original
usuario.nombre = 'Juan';
setUsuario(usuario);

// ✅ CORRECTO — spread crea un objeto nuevo
setUsuario({ ...usuario, nombre: 'Juan' });
```

---

# Taskify: Formulario para agregar tareas

```jsx
function TaskForm({ onAgregarTarea }) {
  const [titulo, setTitulo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    onAgregarTarea({ id: Date.now(), titulo, completada: false });
    setTitulo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder='Nueva tarea...'
      />
      <button type='submit'>Agregar</button>
    </form>
  );
}
```

---

# Ejercicios

**Ejercicio 1:** Contador con límite mínimo (0) y máximo (10), botones deshabilitados en los extremos.

**Ejercicio 2:** Formulario de registro con nombre, email y contraseña. Validar que ningún campo esté vacío al submit.
