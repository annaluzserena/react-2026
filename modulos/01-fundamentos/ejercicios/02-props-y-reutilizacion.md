# Ejercicio 02: Props y Reutilización

**Módulo:** 01 — Fundamentos de React
**Dificultad:** ⭐⭐ Intermedio
**Tiempo estimado:** 25 minutos

---

## 🎯 Objetivo de Aprendizaje

Aplicar el concepto de composición de componentes: crear un componente que recibe un array de datos y renderiza múltiples componentes hijos. Entender cómo fluyen los datos de padre a hijo.

---

## 📋 Requisitos

- Crear un componente `ProductoItem` en `src/components/ProductoItem.jsx`
  - **MUST** recibir props: `nombre`, `precio`, `disponible`
  - **MUST** mostrar nombre y precio formateado
  - **SHOULD** mostrar "Agotado" si `disponible` es `false`
- Crear un componente `ListaProductos` en `src/components/ListaProductos.jsx`
  - **MUST** recibir un array de productos por props
  - **MUST** usar `.map()` para renderizar un `ProductoItem` por cada producto
  - **MUST** pasar la prop `key` con un identificador único
- En `App.jsx`, **MUST** usar `ListaProductos` con datos mockeados (array hardcodeado)

---

## ✅ Criterios de Aceptación

### Escenario 1: Lista de productos
- GIVEN un array de 3 productos (con nombre, precio, disponible)
- WHEN se pasa a `<ListaProductos productos={...} />`
- THEN se ven 3 productos en pantalla con su nombre y precio

### Escenario 2: Producto agotado
- GIVEN un producto con `disponible: false`
- WHEN `ProductoItem` lo recibe
- THEN se muestra "Agotado" visiblemente (color rojo o texto destacado)

### Escenario 3: Lista vacía
- GIVEN un array vacío `[]`
- WHEN se pasa a `ListaProductos`
- THEN se muestra un mensaje "No hay productos disponibles"

---

## 💡 Pistas

- Usá `.map()` para recorrer el array y retornar JSX por cada elemento
- Cada hijo en una lista **MUST** tener `key` única (usá el `id` del producto)
- Para mostrar "Agotado" condicionalmente, usá el operador ternario `{condicion ? 'Sí' : 'No'}`
- Formateá el precio con `toLocaleString()` o template strings: `$ {precio}`

---

## 📊 Datos de ejemplo (para copiar en App.jsx)

```js
const productos = [
  { id: 1, nombre: 'Notebook', precio: 850000, disponible: true },
  { id: 2, nombre: 'Mouse', precio: 15000, disponible: false },
  { id: 3, nombre: 'Teclado', precio: 35000, disponible: true },
];
```
