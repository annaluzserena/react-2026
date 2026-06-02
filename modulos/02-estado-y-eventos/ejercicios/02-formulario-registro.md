# Ejercicio 02: Formulario de Registro

**Módulo:** 02 — Estado y Eventos
**Dificultad:** ⭐⭐ Intermedio
**Tiempo estimado:** 25 minutos

---

## 🎯 Objetivo de Aprendizaje

Implementar un formulario controlado con múltiples campos y validación. Practicar el patrón input controlado (value + onChange), manejo de `onSubmit` y validación de datos.

---

## 📋 Requisitos

- Crear un componente `FormularioRegistro` en `src/components/FormularioRegistro.jsx`
- **MUST** tener 3 campos controlados: nombre, email, contraseña
- **MOST** mostrar los datos ingresados debajo del formulario al hacer submit
- **MUST** evitar el envío del formulario si hay campos vacíos
- **SHOULD** mostrar un mensaje de error debajo de cada campo vacío
- **SHOULD** limpiar el formulario después de un submit exitoso
- **MAY** validar que el email contenga "@" y "."

---

## ✅ Criterios de Aceptación

### Escenario 1: Submit exitoso
- GIVEN todos los campos completos
- WHEN se hace clic en "Registrarse"
- THEN se muestran los datos ingresados debajo del formulario
- AND los campos se limpian

### Escenario 2: Campos vacíos
- GIVEN el formulario sin completar
- WHEN se hace clic en "Registrarse"
- THEN se muestran mensajes de error en los campos vacíos
- AND el formulario no se envía

### Escenario 3: Email inválido
- GIVEN el campo email con "correo-invalido"
- WHEN se hace clic en "Registrarse"
- THEN se muestra "Email inválido" como error

---

## 💡 Pistas

- Usá `e.preventDefault()` en el submit para evitar recargar la página
- Cada input necesita: `value` + `onChange`
- Para mostrar/ocultar errores, mantené un objeto de errores en el estado
- Estructura sugerida del estado:
  ```js
  const [formData, setFormData] = useState({ nombre: '', email: '', password: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);
  ```
