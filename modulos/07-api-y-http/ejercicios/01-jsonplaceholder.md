# Ejercicio 01: Consumir JSONPlaceholder con Axios

**Módulo:** 07 — API y HTTP
**Dificultad:** ⭐⭐ Intermedio
**Tiempo estimado:** 25 minutos

---

## 🎯 Objetivo de Aprendizaje

Consumir una API real (JSONPlaceholder) usando Axios. Practicar GET requests, manejo de loading/error/data, y renderizado de datos obtenidos desde una API externa.

---

## 📋 Requisitos

- Usar Axios (instalar con npm)
- **MUST** consumir el endpoint `https://jsonplaceholder.typicode.com/posts`
- **MUST** mostrar una lista de posts (título + preview del body)
- **MUST** manejar 3 estados: `cargando`, `error`, `datos`
- **SHOULD** mostrar un máximo de 10 posts
- **SHOULD** mostrar "Cargando..." mientras se obtienen datos
- **SHOULD** mostrar "Error al cargar los posts" si falla
- **MAY** permitir ver el post completo al hacer clic (expandir)

---

## ✅ Criterios de Aceptación

### Escenario 1: Carga exitosa
- GIVEN la API responde correctamente
- WHEN el componente se monta
- THEN se muestran los títulos de los posts
- AND no se muestra "Cargando..."

### Escenario 2: Estado de carga
- GIVEN el componente se acaba de montar
- WHEN los datos aún no llegaron
- THEN se muestra "Cargando..."

### Escenario 3: Error en la API
- GIVEN la API no responde (simular con URL inválida)
- WHEN el componente intenta cargar
- THEN se muestra "Error al cargar los posts"

---

## 💡 Pistas

- Usá `https://jsonplaceholder.typicode.com/posts?_limit=10` para limitar resultados
- Accedé a los datos con `res.data`
- Usá `async/await` con `try/catch` para un código más limpio
- Para simular error, cambiá la URL a `https://jsonplaceholder.typicode.com/xyz`
