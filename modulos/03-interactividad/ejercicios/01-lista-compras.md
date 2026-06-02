# Ejercicio 01: Lista de Compras Interactiva

**Módulo:** 03 — Interactividad y Listas
**Dificultad:** ⭐⭐ Intermedio
**Tiempo estimado:** 30 minutos

---

## 🎯 Objetivo de Aprendizaje

Implementar una lista de compras completamente funcional con CRUD básico: agregar items, marcarlos como comprados y eliminarlos. Practicar el manejo de estado de arrays complejos y eventos.

---

## 📋 Requisitos

- Crear los componentes en `src/components/`
- **MUST** tener un formulario para agregar items (input + botón)
- **MUST** mostrar la lista de items
- **MUST** permitir marcar un item como "comprado" (toggle con checkbox)
- **MUST** permitir eliminar un item
- **SHOULD** mostrar los items comprados con estilo diferente (tachado, opacidad)
- **SHOULD** mostrar el total de items y cuántos están comprados
- **MAY** tener un botón "Limpiar comprados" que elimine todos los items marcados

---

## ✅ Criterios de Aceptación

### Escenario 1: Agregar item
- GIVEN el formulario vacío
- WHEN se escribe "Leche" y se hace clic en "Agregar"
- THEN aparece "Leche" en la lista

### Escenario 2: Marcar como comprado
- GIVEN un item "Leche" en la lista
- WHEN se hace clic en el checkbox
- THEN el item se muestra tachado

### Escenario 3: Eliminar item
- GIVEN un item "Pan" en la lista
- WHEN se hace clic en el botón de eliminar
- THEN el item "Pan" desaparece de la lista

### Escenario 4: Contador actualizado
- GIVEN 3 items en la lista, 2 comprados
- THEN se muestra "3 items | 2 comprados"

---

## 💡 Pistas

- Estructura de cada item: `{ id: Date.now(), nombre: '...', comprado: false }`
- Usá `.map()` con el `id` como `key`
- Para tachar usá CSS: `text-decoration: line-through`
- El estado vive en el componente padre, las funciones de cambio se pasan como props a los hijos
