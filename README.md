# 🗒️ Taskify — Workshop React

**Materia:** Desarrollo de Software | **Comisión:** 08 | **Año:** 2026

Proyecto práctico del taller de React. Vas a construir una aplicación web paso a paso mientras aprendés los fundamentos de la biblioteca más popular del frontend.

---

## 📋 Requisitos previos

Antes de arrancar, necesitás tener instalado:

| Herramienta | Versión mínima | Para qué sirve |
|-------------|---------------|----------------|
| [Node.js](https://nodejs.org/) | 18+ | Ejecutar JavaScript fuera del navegador |
| [VS Code](https://code.visualstudio.com/) | Cualquiera | Editor de código recomendado |
| [Git](https://git-scm.com/) | Cualquiera | Control de versiones |

**Extensiones de VS Code recomendadas:**
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) (extensión de Chrome)

> ¿No sabés si tenés Node.js instalado? Abrí una terminal y ejecutá `node --version`.
> Si ves un número como `v18.0.0` o superior, estás listo.

---

## 🚀 Primeros pasos

### 1. Clonar el repositorio

Abrí una terminal y ejecutá:

```bash
git clone https://github.com/desasoftfrlptn/react-2026.git
cd react-2026
```

### 2. Instalar dependencias

```bash
npm install
```

Este comando descarga todas las librerías necesarias (React, Vite, etc.) y crea la carpeta `node_modules`.

> Ejecutalo una sola vez. Si volvés a clonar el proyecto en otra máquina, tenés que repetirlo.

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Esto arranca Vite y abre la aplicación en tu navegador. Por defecto en:
```
http://localhost:5173
```

> Dejá esta terminal abierta. Cada vez que guardes un archivo, el navegador se actualiza solo (HMR — Hot Module Replacement).

### 4. Verificar que funciona

Si ves una pantalla con el título **"Taskify"** y una lista de tareas mockeadas, ¡todo está andando!

---

## 📁 Estructura del proyecto

```
react-2026/
├── docs/
│   ├── project.md                          ← Visión general del proyecto
│   └── apuntes/                            ← Material teórico (PDF)
├── modulos/
│   ├── 01-fundamentos/                     ← README, presentación y ejercicios
│   ├── 02-estado-y-eventos/
│   ├── 03-interactividad/
│   ├── 04-efectos-y-persistencia/
│   ├── 05-contexto-global/
│   ├── 06-formularios/
│   ├── 07-api-y-http/
│   └── propuestas/                         ← Plan de trabajo (SDD)
├── src/                                    ← Código de la aplicación
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskCard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

### ¿Qué va en cada carpeta?

| Carpeta | Contenido |
|---------|-----------|
| `docs/` | Material de estudio y guías |
| `modulos/` | Contenido de cada clase: presentaciones (Marp), ejercicios, y plan de trabajo |
| `src/` | **Acá trabajás vos** — el código fuente de Taskify |
| `src/components/` | Componentes de React |
| `src/context/` | Contextos globales (tema, etc.) |

---

## 📚 Cómo navegar el taller

Cada clase tiene su carpeta en `modulos/`:

```
modulos/01-fundamentos/
├── README.md           ← Objetivos, actividades, criterios de evaluación
├── presentacion.md     ← Slides de la clase (formato Marp)
└── ejercicios/         ← Ejercicios para practicar (formato spec)
    ├── 01-mi-primer-componente.md
    └── 02-props-y-reutilizacion.md
```

### Para cada clase:

1. **Leé el `README.md`** del módulo — tiene los objetivos y actividades
2. **Seguí la presentación** en clase (el docente la proyecta)
3. **Codificá** los cambios en `src/` siguiendo las tareas del plan de trabajo
4. **Resolvé los ejercicios** para practicar

---

## 🗺️ Plan de trabajo (SDD)

Cada etapa del proyecto está documentada en `modulos/propuestas/`:

```
modulos/propuestas/
├── 01-estado-y-interactividad/    ← useState, eventos, CRUD, filtros
├── 02-persistencia-localstorage/  ← useEffect + localStorage
├── 03-contexto-tema/              ← Tema claro/oscuro con Context
├── 04-formularios-rhf/            ← React Hook Form
└── 05-api-axios/                  ← Axios + json-server
```

Cada propuesta tiene:
- `proposal.md` — Qué vamos a hacer y por qué
- `specs/` — Requerimientos detallados con escenarios
- `design/` — Decisiones técnicas y flujo de datos
- `tasks.md` — Lista de tareas para implementar

> Seguí las tareas en orden. Cada tarea tiene todo lo que necesitás para implementarla.

---

## 🛠️ Comandos útiles

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila la app para producción |
| `npm run preview` | Previsualiza la compilación de producción |
| `npm run server` | Inicia json-server (Etapa 5) |

---

## ❓ Preguntas frecuentes

**"No veo los cambios en el navegador"**
→ Asegurate de tener `npm run dev` corriendo y guardá el archivo (`Ctrl+S`).

**"Me da error `command not found: npm`"**
→ No tenés Node.js instalado. Descargalo de [nodejs.org](https://nodejs.org/).

**"No entiendo un ejercicio"**
→ Releé la sección correspondiente de la guía didáctica en `docs/apuntes/`.

---

## 📖 Recursos

- [React.dev — Learn](https://react.dev/learn) — Documentación oficial de React
- [Vite — Guía](https://vitejs.dev/guide/) — Cómo funciona Vite
- [React Hook Form](https://react-hook-form.com/) — Documentación de RHF
- [Axios](https://axios-http.com/) — Documentación de Axios
