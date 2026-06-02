Como su docente senior, he sintetizado las lecciones del curso **"React de 0 a Experto 2025"** impartido por Gentleman Programming. Estas notas están diseñadas para capturar no solo la sintaxis, sino la **filosofía de ingeniería** y los patrones avanzados que separan a un desarrollador junior de uno senior.

---

### 1. Fundamentos y Arquitectura de React
*   **React como Librería:** A diferencia de frameworks como Angular, React es una **librería liviana** centrada en la interfaz. Su potencia radica en ser "opinada" por el desarrollador, permitiendo construir aplicaciones a medida.
*   **El Cambio de Paradigma:** React rompe con el esquema tradicional de Model-View-Controller (MVC) puro para usar una combinación que permite a la **vista modificar el modelo de forma bidireccional (Dual Concept)**.
*   **Detección de Cambios (Virtual DOM):** React utiliza un **DOM Virtual** para comparar cambios (proceso de *diffing*) y solo aplica los cambios mínimos necesarios al DOM real mediante un **Commit**.

### 2. Entorno de Desarrollo Profesional
*   **Adiós a Create React App (CRA):** El ecosistema moderno utiliza **Vite** (que usa Rollup por detrás) por su velocidad y sistema de plugins.
*   **Bun como aliado:** Se recomienda el uso de **Bun** no solo como bundler, sino como un gestor de paquetes extremadamente rápido.
*   **Bundling y Optimización:** Los procesos de **minificación, uglify y tree shaking** son esenciales para que el código en producción sea ligero y seguro.

### 3. Anatomía del Componente
*   **Unidad Mínima de Lógica:** Un componente debe ser la **mínima unidad lógica posible** y contener solo la lógica que le pertenece.
*   **Smart vs. Dumb Components:** 
    *   **Componentes Tontos (Presentacionales):** No tienen estado propio; reciben datos y emiten eventos al padre.
    *   **Componentes Inteligentes:** Manejan la lógica de negocio y el estado.
*   **JSX/TSX:** Es la capacidad de mezclar HTML con lógica de JavaScript. El uso de la extensión `.tsx` indica que el archivo retorna elementos de React procesados por TypeScript.

### 4. Gestión del Estado y Hooks Fundamentales
*   **useState:** Vincula una variable al renderizado. Es fundamental entender el **Batching**: React agrupa múltiples actualizaciones de estado para ejecutarlas al final de la lógica, optimizando el rendimiento.
*   **useEffect:** Su uso correcto es para **sincronizar con entidades externas** (APIs, timers, suscripciones), no para lógica interna del componente. Siempre debe incluir su **arreglo de dependencias** para evitar bucles infinitos.
*   **useRef:** Crea una referencia mutable que **persiste sin causar re-renders**. Es útil para almacenar valores internos o acceder directamente a elementos del DOM.

### 5. Optimización y Rendimiento (Hooks de Memoria)
*   **useMemo:** Memoriza el **resultado de una función costosa**. Debe usarse solo cuando el beneficio de no recalcular supera el costo de mantener el valor en memoria.
*   **useCallback:** Memoriza la **instancia de una función**. Es vital para evitar que componentes hijos se rendericen innecesariamente cuando se les pasa una función por props.

### 6. Patrones Avanzados
*   **Composition Pattern:** En lugar de pasar props a través de múltiples niveles (*prop drilling*), se utiliza la **proyección de contenido mediante `children`**. Esto desacopla los componentes y mejora la reutilización.
*   **Context API:** Crea un canal de comunicación global. Se recomienda envolverlo en un **Custom Hook** (ej. `useGlobalContext`) que valide si el contexto está siendo usado dentro de su Provider para evitar errores silenciosos.
*   **Custom Hooks:** Permiten **atomizar la lógica** (ej. un `useFetch` que maneje carga, errores y cancelación de peticiones mediante `AbortController`) separándola de la vista.

### 7. Formas, Rutas y Robustez
*   **React Hook Form + Zod:** La mejor forma de manejar formularios es mediante esquemas de validación con **Zod**, lo que permite inferir tipos de TypeScript automáticamente y evitar lógica de validación manual extensa.
*   **React Router Dom:** Implementación de rutas orgánicas. Se destaca el patrón de **Private Guards** usando el componente `<Outlet />` para proteger rutas que requieren autenticación.
*   **Error Boundaries:** Uso de componentes de clase para capturar excepciones en el árbol de renderizado, evitando que toda la aplicación se caiga por un error puntual.
*   **Interceptores de Axios:** Permiten centralizar la configuración de peticiones, como la inyección automática de tokens de autorización en las cabeceras.

### 8. Portals
*   **Portales de React:** Permiten renderizar componentes (como modales) **fuera del nodo raíz del DOM**, generalmente en un `div` específico en el `index.html`, manteniendo la jerarquía lógica de React pero no la física en el HTML.