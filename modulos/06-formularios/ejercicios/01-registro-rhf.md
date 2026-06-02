# Ejercicio 01: Formulario de Registro con React Hook Form

**Módulo:** 06 — Formularios
**Dificultad:** ⭐⭐ Intermedio
**Tiempo estimado:** 25 minutos

---

## 🎯 Objetivo de Aprendizaje

Migrar el formulario de registro del Módulo 02 a React Hook Form. El objetivo es comparar ambos enfoques y ver cómo RHF simplifica el manejo de formularios.

---

## 📋 Requisitos

- Usar `react-hook-form` (instalar con npm)
- **MUST** tener campos: nombre, email, contraseña, confirmar contraseña
- **MUST** validar:
  - Nombre: requerido, mínimo 2 caracteres
  - Email: requerido, formato válido
  - Contraseña: requerida, mínimo 6 caracteres
  - Confirmar: debe coincidir con contraseña (validación custom)
- **MUST** mostrar mensajes de error debajo de cada campo
- **MUST** limpiar el formulario al enviar con éxito
- **SHOULD** mostrar los datos ingresados en una tarjeta al hacer submit

---

## ✅ Criterios de Aceptación

### Escenario 1: Registro exitoso
- GIVEN todos los campos válidos
- WHEN se hace clic en "Registrarse"
- THEN se muestran los datos en una tarjeta
- AND el formulario se limpia

### Escenario 2: Contraseñas no coinciden
- GIVEN "password123" en contraseña y "password456" en confirmar
- WHEN se hace clic en "Registrarse"
- THEN se muestra "Las contraseñas no coinciden"

### Escenario 3: Email inválido
- GIVEN "email-invalido" en el campo email
- WHEN se hace clic en "Registrarse"
- THEN se muestra "Email inválido"

---

## 💡 Pistas

- Para la validación de confirmar contraseña, usá `validate`:
  ```js
  {...register('confirmar', {
    validate: (value) => value === password || 'Las contraseñas no coinciden'
  })}
  ```
- Para obtener el valor de password desde otro campo, necesitás usar `watch()`:
  ```js
  const password = watch('password');
  ```
- `handleSubmit` maneja automáticamente `e.preventDefault()`
