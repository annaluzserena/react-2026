# Ejercicio 01: Tema Claro/Oscuro

**Módulo:** 05 — Contexto Global
**Dificultad:** ⭐⭐ Intermedio
**Tiempo estimado:** 25 minutos

---

## 🎯 Objetivo de Aprendizaje

Implementar un sistema de tema claro/oscuro usando `useContext`. Este es el caso de uso más común y práctico para Context, y los alumnos pueden ver el resultado visual inmediatamente.

---

## 📋 Requisitos

- Crear el contexto en `src/context/TemaContext.jsx`
- **MUST** tener 2 temas: `'claro'` y `'oscuro'`
- **MUST** tener un botón o toggle para cambiar entre temas
- **MUST** aplicar clases CSS diferentes según el tema en toda la app
- **SHOULD** persistir el tema elegido en `localStorage`
- **SHOULD** tener un custom hook `useTema` que encapsule `useContext`
- **MAY** incluir animación suave en la transición de temas

---

## ✅ Criterios de Aceptación

### Escenario 1: Cambio de tema
- GIVEN la app en modo claro
- WHEN se hace clic en "Cambiar tema"
- THEN la app cambia a modo oscuro
- AND el fondo y el texto se actualizan

### Escenario 2: Persistencia del tema
- GIVEN la app en modo oscuro
- WHEN se recarga la página
- THEN la app sigue en modo oscuro

### Escenario 3: Toggle funciona desde cualquier componente
- GIVEN el botón de cambio de tema en el Header
- WHEN se hace clic
- THEN todos los componentes reflejan el cambio (Header, lista, formulario, etc.)

---

## 💡 Pistas

- El Provider envuelve todo en `main.jsx`
- Usá `className` dinámico: `className={tema === 'oscuro' ? 'dark' : 'light'}`
- Las variables CSS (`--bg-color`, `--text-color`) facilitan el cambio de tema
- Para persistir, usá `useEffect` que escuche cambios en el tema y lo guarde en localStorage
