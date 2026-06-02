# Workshop React — Desarrollo de Software 2026 (Comisión 08)

## Contexto

Materia **"Desarrollo de Software"** — Clase #08 (2 de junio de 2026).
Primera clase de React para alumnos que vienen con JavaScript vanilla.

## Perfil del alumno

- Sin experiencia en React
- Conocen JavaScript básico (variables, funciones, arrays, objetos, DOM manipulation)
- No conocen herramientas de build (Vite, Webpack, etc.)
- No conocen TypeScript

## Objetivo del Workshop

Que los alumnos construyan una aplicación web funcional paso a paso mientras cursan las 10 secciones de la guía didáctica. El foco está en los **4 conceptos clave**: JSX, Componentes, Props y Estado.

## Proyecto: Taskify (Gestor de Tareas)

App de gestión de tareas que los alumnos construyen incrementalmente.

### Funcionalidades por etapa

| Etapa | Conceptos | Funcionalidad |
|-------|-----------|---------------|
| 1 | Componentes, JSX, Props | Mostrar lista de tareas estática |
| 2 | useState | Agregar tareas con formulario controlado |
| 3 | useState avanzado | Marcar como completada, borrar tareas |
| 4 | useEffect | Persistencia en localStorage |
| 5 | useContext | Tema claro/oscuro |
| 6 | React Hook Form | Formulario con validación |
| 7 | Axios | Sincronizar con API externa |

### Stack Tecnológico

- **React 18+** con Vite
- **JavaScript** (sin TypeScript — reducir curva de aprendizaje)
- **CSS plano** o módulos CSS
- Sin librerías externas de estado ni routing

## Metodología

1. El docente explica el concepto (apoyado en la guía)
2. Los alumnos codifican el ejercicio en vivo
3. Cada clase deja una funcionalidad funcionando
4. Workshop 100% práctico — aprender haciendo

## Estructura del proyecto

```
workshop-react/
├── docs/
│   ├── project.md                  # Este archivo (alcance y visión)
│   └── apuntes/                    # Material didáctico PDF
│       ├── Introduccion_ReactJS - DS - C08.pdf
│       └── Desarrollo Frontend Moderno_ Introducción a React - DS - C08.pdf
├── src/                            # Código fuente de la app
│   ├── components/                 # Componentes de la app
│   ├── context/                    # Contextos (tema, etc.)
│   └── App.jsx                     # Componente raíz
├── index.html
├── package.json
└── vite.config.js
```
