# Ejercicio 01: Persistencia con localStorage

**Módulo:** 04 — Efectos y Persistencia
**Dificultad:** ⭐⭐ Intermedio
**Tiempo estimado:** 20 minutos

---

## 🎯 Objetivo de Aprendizaje

Agregar persistencia a la lista de compras del Módulo 03 usando `localStorage`. Los datos deben sobrevivir al cerrar y abrir el navegador.

---

## 📋 Requisitos

- Partir del componente `ListaCompras` del Módulo 03 (o crearlo si no existe)
- **MUST** guardar los items en `localStorage` cada vez que cambien
- **MUST** recuperar los items de `localStorage` al iniciar el componente
- **SHOULD** usar un `useEffect` con la dependencia correcta para guardar
- **SHOULD** usar la función inicializadora de `useState` para leer
- **MAY** manejar el caso en que `localStorage` esté corrupto (try/catch)

---

## ✅ Criterios de Aceptación

### Escenario 1: Persistencia al recargar
- GIVEN una lista con "Leche", "Pan", "Huevos"
- WHEN se recarga la página (F5)
- THEN la lista sigue mostrando "Leche", "Pan", "Huevos"

### Escenario 2: Persistencia al cerrar y abrir
- GIVEN una lista con datos guardados en localStorage
- WHEN se cierra y vuelve a abrir el navegador
- THEN los datos se recuperan correctamente

### Escenario 3: Estado vacío
- GIVEN localStorage vacío o sin datos
- WHEN el componente se monta
- THEN la lista comienza vacía

---

## 💡 Pistas

- Usá la forma función de `useState` para la inicialización:
  ```js
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('compras');
    return saved ? JSON.parse(saved) : [];
  });
  ```
- El `useEffect` solo debe ejecutarse cuando `items` cambie: `[items]`
- `JSON.stringify` convierte el array a string, `JSON.parse` lo recupera
- Usá `try/catch` en el parse por si el localStorage está corrupto
