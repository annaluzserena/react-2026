---
marp: true
theme: default
paginate: true
backgroundColor: #fff
---

# **Módulo 05: Contexto Global**

Desarrollo de Software — Clase #12

---

# Prop Drilling

> Pasar datos a través de múltiples niveles de componentes **solo porque un componente en lo profundo los necesita**.

```jsx
<App>
  <Layout>
    <Sidebar>
      <NavItem>   ← acá necesito el usuario
```

Para llegar a NavItem, cada nivel intermedio debe recibir y pasar la prop.
**Esto es prop drilling** → tedioso, difícil de mantener.

---

# useContext — La solución

```
❌ Prop drilling:          ✅ Contexto:
App                         App crea un contexto
└─ Layout pasa usuario     └─ Layout (no sabe nada)
   └─ Sidebar pasa usuario     └─ Sidebar (no sabe nada)
      └─ NavItem USUARIO         └─ NavItem LEE el contexto
```

> Los componentes intermedios **no necesitan saber** que existe el dato.

---

# createContext + Provider

```jsx
// src/context/TemaContext.jsx
import { createContext, useContext, useState } from 'react';

const TemaContext = createContext(null);

export function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');

  const cambiarTema = () => {
    setTema(t => t === 'claro' ? 'oscuro' : 'claro');
  };

  return (
    <TemaContext.Provider value={{ tema, cambiarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export function useTema() {
  return useContext(TemaContext);
}
```

---

# Envolver la App con el Provider

```jsx
// src/main.jsx
import { TemaProvider } from './context/TemaContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TemaProvider>
    <App />
  </TemaProvider>
);
```

---

# Consumir el contexto

```jsx
// CUALQUIER componente
import { useTema } from '../context/TemaContext';

function BotonCambiarTema() {
  const { tema, cambiarTema } = useTema();

  return (
    <button onClick={cambiarTema}>
      Tema actual: {tema}
    </button>
  );
}
```

> No importa qué tan profundo esté el componente en el árbol. **Siempre puede acceder al contexto.**

---

# Taskify: Tema claro/oscuro

```jsx
// App.jsx
<div className={`app ${tema}`}>
  <Header />
  <TaskForm />
  <TaskList />
</div>
```

```css
.app.claro  { background: white; color: black; }
.app.oscuro { background: #1a1a2e; color: white; }
```

---

# ¿Cuándo usar Context?

**Usá Context para:**
- Tema (claro/oscuro)
- Usuario logueado / autenticación
- Idioma / localización
- Configuración global

**NO uses Context para:**
- Estado que solo usa 1 o 2 componentes → mejor props
- Datos que cambian muy rápido (cada keystroke)

---

# Ejercicios

**Ejercicio 1:** Agregar tema claro/oscuro a la lista de compras con useContext.

**Ejercicio 2:** Carrito de compras con Context — agregar/quitar productos, mostrar total.
