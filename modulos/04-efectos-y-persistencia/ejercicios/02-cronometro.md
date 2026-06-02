# Ejercicio 02: Cronómetro con Cleanup

**Módulo:** 04 — Efectos y Persistencia
**Dificultad:** ⭐⭐⭐ Avanzado
**Tiempo estimado:** 25 minutos

---

## 🎯 Objetivo de Aprendizaje

Implementar un cronómetro usando `setInterval` dentro de `useEffect` con su correspondiente función de cleanup. Este es el patrón clásico para evitar memory leaks en React.

---

## 📋 Requisitos

- Crear un componente `Cronometro` en `src/components/Cronometro.jsx`
- **MUST** mostrar el tiempo transcurrido en formato `MM:SS:ss` (minutos:segundos:centésimas)
- **MUST** tener botones: Iniciar, Pausar, Reiniciar
- **MUST** usar `setInterval` dentro de `useEffect`
- **MUST** limpiar el intervalo con la función de cleanup
- **SHOULD** deshabilitar "Iniciar" mientras el cronómetro está corriendo
- **SHOULD** deshabilitar "Pausar" mientras está pausado
- **MAY** cambiar el color del tiempo cuando está corriendo (verde) vs pausado (rojo)

---

## ✅ Criterios de Aceptación

### Escenario 1: Iniciar cronómetro
- GIVEN el cronómetro en 00:00:00
- WHEN se hace clic en "Iniciar"
- THEN el tiempo comienza a correr
- AND el botón "Iniciar" se deshabilita

### Escenario 2: Pausar y reanudar
- GIVEN el cronómetro corriendo en 00:05:30
- WHEN se hace clic en "Pausar"
- THEN el tiempo se detiene en 00:05:30
- WHEN se hace clic en "Iniciar" de nuevo
- THEN el tiempo continúa desde 00:05:30

### Escenario 3: Reiniciar
- GIVEN el cronómetro en 01:23:45
- WHEN se hace clic en "Reiniciar"
- THEN el cronómetro vuelve a 00:00:00
- AND se detiene (sin seguir corriendo)

### Escenario 4: Cleanup (sin memory leaks)
- GIVEN el cronómetro corriendo
- WHEN el componente se desmonta
- THEN el intervalo se limpia (no hay `setInterval` ejecutándose en memoria)

---

## 💡 Pistas

- El estado del cronómetro debería tener: `{ corriendo: false, tiempo: 0 }`
- El tiempo en milisegundos es más fácil de manejar, después lo formateás
- Para formatear: `padStart(2, '0')`
  ```js
  const centesimas = Math.floor((tiempo % 1000) / 10);
  const segundos = Math.floor((tiempo / 1000) % 60);
  const minutos = Math.floor(tiempo / 60000);
  ```
- El intervalo se ejecuta cada 10ms para capturar centésimas
- El cleanup es `return () => clearInterval(intervalId)`
