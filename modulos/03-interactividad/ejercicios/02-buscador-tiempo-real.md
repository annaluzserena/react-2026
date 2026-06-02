# Ejercicio 02: Buscador con Filtro en Tiempo Real

**Módulo:** 03 — Interactividad y Listas
**Dificultad:** ⭐⭐ Intermedio
**Tiempo estimado:** 20 minutos

---

## 🎯 Objetivo de Aprendizaje

Implementar un buscador que filtre una lista mientras el usuario escribe. Practicar el filtrado de arrays con `filter()` e `includes()` en tiempo real, combinado con inputs controlados.

---

## 📋 Requisitos

- Crear un componente `BuscadorPaises` en `src/components/BuscadorPaises.jsx`
- **MUST** tener un array de países hardcodeado (20 países)
- **MUST** tener un input de búsqueda
- **MUST** filtrar la lista mientras el usuario escribe (case insensitive)
- **SHOULD** mostrar "No se encontraron resultados" si el filtro no coincide
- **MAY** resaltar el texto coincidente en cada resultado
- **MAY** ordenar los resultados alfabéticamente

---

## ✅ Criterios de Aceptación

### Escenario 1: Filtro activo
- GIVEN la lista de países
- WHEN se escribe "ar" en el buscador
- THEN solo se muestran países que contengan "ar" (Argentina, Francia, etc.)

### Escenario 2: Sin resultados
- GIVEN la lista de países
- WHEN se escribe "xyz"
- THEN se muestra "No se encontraron resultados"

### Escenario 3: Case insensitive
- GIVEN la lista de países
- WHEN se escribe "ARG" en mayúsculas
- THEN se muestra "Argentina" en los resultados

---

## 💡 Pistas

- Usá `.filter()` + `.toLowerCase()` + `.includes()`:
  ```js
  paises.filter(p => p.toLowerCase().includes(busqueda.toLowerCase()))
  ```
- El estado de búsqueda se actualiza en cada `onChange`
- Para el resaltado, podés dividir el texto y usar `<mark>` o un `<span>` con estilo
