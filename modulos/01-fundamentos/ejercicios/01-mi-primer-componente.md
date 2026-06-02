# Ejercicio 01: Mi Primer Componente

**Módulo:** 01 — Fundamentos de React
**Dificultad:** ⭐ Básico
**Tiempo estimado:** 15 minutos

---

## 🎯 Objetivo de Aprendizaje

Crear un componente funcional que reciba props y renderice JSX. Este es el bloque fundamental de toda aplicación React.

---

## 📋 Requisitos

- Crear un componente `TarjetaPersonal` en `src/components/TarjetaPersonal.jsx`
- El componente **MUST** recibir al menos 3 props: `nombre`, `edad`, `ciudad`
- El componente **MUST** mostrar los datos en una tarjeta con estilo
- El componente **MUST** ser importado y usado en `App.jsx`
- El componente **SHOULD** mostrar la edad en formato "X años"
- El componente **MAY** incluir un emoji o icono representativo

---

## ✅ Criterios de Aceptación

### Escenario 1: Renderizado correcto
- GIVEN un componente `TarjetaPersonal`
- WHEN se usa con `<TarjetaPersonal nombre="Ana" edad={25} ciudad="Buenos Aires" />`
- THEN se ve en pantalla una tarjeta que muestra "Ana", "25 años", "Buenos Aires"

### Escenario 2: Reutilización
- GIVEN el componente `TarjetaPersonal`
- WHEN se usa 3 veces con diferentes datos
- THEN se ven 3 tarjetas distintas en pantalla

---

## 💡 Pistas

- Recordá que los nombres de componentes van en **PascalCase**
- Las props se reciben como **parámetro del componente**: `function TarjetaPersonal({ nombre, edad, ciudad })`
- Para mostrar variables en JSX usá **llaves** `{ }`
- El archivo debe exportar el componente: `export default TarjetaPersonal`

---

## 📁 Estructura esperada

```
src/
├── components/
│   └── TarjetaPersonal.jsx    ← crearlo
├── App.jsx                     ← importarlo y usarlo
└── main.jsx
```
