# Ejercicio 01: Contador con Límites

**Módulo:** 02 — Estado y Eventos
**Dificultad:** ⭐ Básico
**Tiempo estimado:** 15 minutos

---

## 🎯 Objetivo de Aprendizaje

Practicar `useState` con un contador que tiene límites. Esto introduce validación de estado: el componente debe decidir cuándo permitir o no un cambio.

---

## 📋 Requisitos

- Crear un componente `ContadorLimitado` en `src/components/ContadorLimitado.jsx`
- **MUST** tener un valor inicial de 0
- **MUST** tener un límite mínimo de 0 y máximo de 10
- **MUST** tener botones "+" y "-" que incrementan/decrementan
- **SHOULD** deshabilitar el botón "-" cuando el contador está en 0
- **SHOULD** deshabilitar el botón "+" cuando el contador está en 10
- **MAY** cambiar el color del número según se acerque al límite (verde < 5, amarillo 5-8, rojo 9-10)

---

## ✅ Criterios de Aceptación

### Escenario 1: Incremento normal
- GIVEN el contador en 3
- WHEN se hace clic en "+"
- THEN el contador muestra 4

### Escenario 2: Límite mínimo alcanzado
- GIVEN el contador en 0
- WHEN se hace clic en "-"
- THEN el contador sigue en 0
- AND el botón "-" está deshabilitado

### Escenario 3: Límite máximo alcanzado
- GIVEN el contador en 10
- WHEN se hace clic en "+"
- THEN el contador sigue en 10
- AND el botón "+" está deshabilitado

---

## 💡 Pistas

- Usá la prop `disabled` en los botones: `<button disabled={cuenta === 0}>-</button>`
- Para el color condicional, usá un operador ternario en el `style` o `className`
