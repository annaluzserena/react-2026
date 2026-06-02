# Ejercicio 02: Carrito de Compras con Context

**Módulo:** 05 — Contexto Global
**Dificultad:** ⭐⭐⭐ Avanzado
**Tiempo estimado:** 35 minutos

---

## 🎯 Objetivo de Aprendizaje

Implementar un carrito de compras global usando `useContext`. Este ejercicio simula un escenario real de e-commerce donde múltiples componentes necesitan acceder al mismo estado (agregar al carrito, ver carrito, total).

---

## 📋 Requisitos

- Crear `src/context/CarritoContext.jsx` con `CarritoProvider` y `useCarrito`
- **MUST** permitir agregar productos al carrito
- **MUST** permitir quitar productos del carrito
- **MUST** mostrar la cantidad de items en el Header (badge)
- **MUST** mostrar el total del carrito ($)
- **SHOULD** mostrar un listado del carrito con cantidad y subtotal por producto
- **SHOULD** evitar duplicados: si se agrega el mismo producto, aumentar la cantidad
- **MAY** persistir el carrito en localStorage

---

## ✅ Criterios de Aceptación

### Escenario 1: Agregar al carrito
- GIVEN un producto "Notebook $850000"
- WHEN se hace clic en "Agregar al carrito"
- THEN el badge del Header muestra 1
- AND el total muestra $850000

### Escenario 2: Acumular producto
- GIVEN "Mouse $15000" ya en el carrito
- WHEN se vuelve a hacer clic en "Agregar al carrito" para el Mouse
- THEN la cantidad de Mouse en el carrito es 2
- AND el badge muestra la cantidad total de items (no de productos distintos)

### Escenario 3: Quitar del carrito
- GIVEN un producto en el carrito
- WHEN se hace clic en "Quitar"
- THEN el producto se elimina del carrito
- AND el total se actualiza

### Escenario 4: Carrito vacío
- GIVEN el carrito sin productos
- THEN se muestra "Carrito vacío" y el total es $0

---

## 💡 Pistas

- Estructura del carrito: `{ items: [{ id, nombre, precio, cantidad }], total: number }`
- Usá `.findIndex()` para encontrar si el producto ya existe en el carrito
- El badge puede ser un `<span>` con posición absoluta sobre un ícono de carrito
- Los datos de productos pueden ser un array mockeado dentro del mismo componente
