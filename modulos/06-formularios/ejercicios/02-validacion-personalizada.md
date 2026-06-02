# Ejercicio 02: Validación Personalizada

**Módulo:** 06 — Formularios
**Dificultad:** ⭐⭐⭐ Avanzado
**Tiempo estimado:** 20 minutos

---

## 🎯 Objetivo de Aprendizaje

Implementar validaciones personalizadas con React Hook Form: validación asíncrona (simulada), validación de título único y validación cruzada entre campos.

---

## 📋 Requisitos

- Partir del TaskForm de Taskify con React Hook Form
- **MUST** validar que el título no esté vacío y tenga al menos 3 caracteres
- **MUST** validar que el título no se repita (comparar con tareas existentes)
- **SHOULD** validar que el título no contenga solo espacios
- **SHOULD** mostrar un contador de caracteres: "0/50"
- **MAY** simular una validación asíncrona (setTimeout que verifique disponibilidad)

---

## ✅ Criterios de Aceptación

### Escenario 1: Título vacío
- GIVEN el campo título vacío
- WHEN se intenta enviar
- THEN se muestra "El título es obligatorio"

### Escenario 2: Título repetido
- GIVEN una tarea "Estudiar React" ya existente
- WHEN se escribe "Estudiar React" en el formulario
- THEN se muestra "Esta tarea ya existe"

### Escenario 3: Solo espacios
- GIVEN "   " en el campo título
- WHEN se intenta enviar
- THEN se muestra "El título no puede ser solo espacios"

### Escenario 4: Límite de caracteres
- GIVEN un título de más de 50 caracteres
- WHEN se intenta escribir más allá de 50
- THEN el input no acepta más caracteres (maxLength) O muestra error

---

## 💡 Pistas

- Para validación personalizada usá `validate`:
  ```js
  validate: (value) => {
    if (tareasExistentes.includes(value)) return 'Esta tarea ya existe';
    if (!value.trim()) return 'El título no puede ser solo espacios';
    return true;
  }
  ```
- Las tareas existentes se pasan por props desde App
- Usá `maxLength: { value: 50, message: 'Máximo 50 caracteres' }` en register
