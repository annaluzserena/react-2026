---
marp: true
theme: default
paginate: true
backgroundColor: #fff
---

<!-- 
  Para mostrar esta presentación:
  npx @marp-team/marp-cli modulos/01-fundamentos/presentacion.md -w
  
  O instalar la extensión Marp para VS Code y abrir con "Markdown Marp: Export Slide Deck..."
-->

# **Módulo 01: Fundamentos de React**

Desarrollo de Software — Clase #08
02 de junio de 2026

---

# ¿Qué es React?

> **React** es una biblioteca de JavaScript para construir interfaces de usuario interactivas.

- Creada por **Meta (Facebook)** en 2013
- Open source — mantenida por Meta + comunidad
- No es un framework (como Angular), es una **biblioteca**
- Se enfoca en UNA cosa: la UI

---

# React en la industria

Usado por empresas como:

- **Netflix**, **Airbnb**, **Uber**, **Mercado Libre**
- **Instagram**, **WhatsApp Web**, **Facebook**
- ~70% de ofertas laborales frontend en Argentina requieren React

---

# Imperativo vs Declarativo

| JavaScript puro (Imperativo) | React (Declarativo) |
|---|---|
| Le decís al navegador **CÓMO** cambiar cada elemento | Describís **QUÉ** querés mostrar según el estado |
| Usás `getElementById`, `addEventListener`, `innerHTML`... | React decide por sí solo qué partes actualizar |
| El código se vuelve difícil de mantener | El código escala mejor |

---

# Ejemplo: Contador

**JavaScript puro:**
```js
let count = 0;
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  count++;
  document.getElementById('display').innerText = count;
});
```

**React:**
```jsx
function Contador() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

# Virtual DOM

Cuando el estado cambia:

1. React genera un nuevo **Virtual DOM** (en memoria)
2. Compara con la versión anterior (**diffing**)
3. Aplica **SOLO los cambios mínimos** al DOM real

> Resultado: interfaz fluida, sin parpadeos, eficiente.

---

# MPA vs SPA

| MPA (Multi Page Application) | SPA (Single Page Application) |
|---|---|
| Cada clic → recarga completa de página | Carga UNA vez, navegación instantánea |
| Modelo tradicional (PHP, WordPress) | Modelo moderno (React, Vue, Angular) |
| Más carga en el servidor | El servidor solo entrega datos (API) |

---

# JSX — HTML dentro de JavaScript

```jsx
const elemento = <h1 className='titulo'>Hola Mundo</h1>;
```

JSX **NO es HTML**. Es JavaScript con azúcar sintáctico.

**Reglas:**
1. Un solo elemento raíz (usar `<>...</>` fragment)
2. `className` en lugar de `class`
3. Expresiones JS con `{ }`
4. Todas las etiquetas deben cerrarse

---

# JSX — Reglas en código

```jsx
function Saludo() {
  const nombre = 'Ana';
  return (
    <>
      <h1 className='titulo'>Hola {nombre}</h1>
      <p>Edad: {20 + 5}</p>
      <input type='text' />
    </>
  );
}
```

---

# Componentes: Los bloques de React

> **Componente** = función JavaScript que retorna JSX.

```jsx
function Saludo() {
  return <h2>¡Hola, bienvenido!</h2>;
}
```

**Reglas:**
- Nombre en **PascalCase** → `MiComponente`
- Se usan como etiquetas HTML → `<Saludo />`
- Se pueden **reutilizar** y **componer**

---

# Composición de componentes

```jsx
function App() {
  return (
    <div>
      <Header />
      <main>
        <Sidebar />
        <Contenido />
      </main>
      <Footer />
    </div>
  );
}
```

> Cada componente hace UNA cosa.

---

# Props — Pasando datos

```jsx
function TarjetaUsuario({ nombre, email }) {
  return (
    <div className='tarjeta'>
      <h3>{nombre}</h3>
      <p>{email}</p>
    </div>
  );
}

// Uso:
<TarjetaUsuario nombre='Ana García' email='ana@email.com' />
<TarjetaUsuario nombre='Luis Pérez' email='luis@email.com' />
```

---

# Props: datos de solo lectura

- Las props las **recibe** el componente hijo
- El hijo **nunca modifica** las props
- Los datos fluyen de **padre a hijo** (unidirectional data flow)

---

# Configuración del entorno

```bash
# 1. Crear proyecto con Vite
npm create vite@latest taskify -- --template react
cd taskify

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

---

# Estructura del proyecto Vite

```
taskify/
├── index.html          # Punto de entrada HTML
├── src/
│   ├── main.jsx        # Conecta React con el DOM
│   ├── App.jsx         # Componente raíz
│   └── App.css         # Estilos
├── package.json
└── vite.config.js
```

---

# ¡A codificar!

**Hoy construimos:**
1. Configurar Vite + React
2. Crear componente `Header` con props
3. Crear componente `TaskCard` con props
4. Crear componente `TaskList` que compone TaskCard
5. Armar la estructura de Taskify

---

# Ejercicios

**Ejercicio 1:** Crear un componente `TarjetaPersonal` que reciba nombre, edad y ciudad como props y los muestre en una tarjeta.

**Ejercicio 2:** Crear un componente `ListaProductos` que reciba un array de productos (nombre, precio) y muestre cada uno con un componente `ProductoItem`.

---

# Recursos

- **react.dev/learn** — Documentación oficial
- **Vite + React** — vite.new/react (sandbox online)
- **Guía didáctica** — PDF en `docs/apuntes/`
- Extensión Chrome: **React Developer Tools**

---

# ¿Preguntas?
