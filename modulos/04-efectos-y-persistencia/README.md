# Módulo 04: Efectos Secundarios y Persistencia

**Clase:** #11
**Duración estimada:** 120 minutos

---

## 🎯 Objetivos

- Entender qué son los efectos secundarios en React
- Usar `useEffect` para sincronizar con sistemas externos
- Implementar persistencia local con `localStorage`
- Manejar los 3 estados de carga: loading, error, data
- Usar la función de cleanup para evitar memory leaks

## 📚 Secciones de la Guía

| Sección | Tema | Estado |
|---------|------|--------|
| 08 | useEffect | ✅ Teoría + Práctica |

## 🛠️ Prerrequisitos

- useState (Módulo 02)
- Manejo de eventos y listas (Módulo 03)

## 📋 Actividades en Clase

| # | Actividad | Tipo | Duración |
|---|-----------|------|----------|
| 1 | ¿Qué es useEffect? Las 3 variantes | Teoría | 15 min |
| 2 | Persistir tareas en localStorage | Coding | 30 min |
| 3 | Cargar datos simulados con setTimeout | Coding | 25 min |
| 4 | Cleanup: timers y suscripciones | Teoría | 10 min |
| 5 | Ejercicios prácticos | Coding | 40 min |

## 🏠 Ejercicios para Casa

- Ejercicio 01: Persistencia con localStorage (obligatorio)
- Ejercicio 02: Temporizador con cleanup (obligatorio)

## 📝 Criterios de Evaluación

- [ ] Usa `useEffect` con array de dependencias correcto
- [ ] Persiste y recupera datos de `localStorage`
- [ ] Maneja loading, error y datos en componentes
- [ ] Implementa función de cleanup cuando es necesaria
- [ ] No provoca loops infinitos (dependencias correctas)
