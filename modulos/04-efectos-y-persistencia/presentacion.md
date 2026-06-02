---
marp: true
theme: default
paginate: true
backgroundColor: #fff
---

# **Módulo 04: Efectos y Persistencia**

Desarrollo de Software — Clase #11

---

# ¿Qué es un Efecto Secundario?

> Todo lo que React no maneja automáticamente.

Ejemplos:
- 🌐 Llamadas a APIs (`fetch`, `axios`)
- 💾 Leer/escribir en `localStorage`
- ⏰ Timers (`setInterval`, `setTimeout`)
- 📡 Suscripciones a eventos
- 🧹 Limpieza al desmontar

---

# Las 3 formas de useEffect

```jsx
// ① Sin array → se ejecuta en CADA render
useEffect(() => {
  console.log('El componente se renderizó');
});

// ② Array vacío [] → se ejecuta UNA SOLA VEZ al montar
useEffect(() => {
  console.log('Componente montado');
}, []);

// ③ Con dependencias → se ejecuta cuando cambian
useEffect(() => {
  console.log('La búsqueda cambió:', busqueda);
}, [busqueda]);
```

---

# Persistir en localStorage

```jsx
useEffect(() => {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}, [tareas]);
```

```jsx
// Al inicializar el estado, leer de localStorage
const [tareas, setTareas] = useState(() => {
  const guardadas = localStorage.getItem('tareas');
  return guardadas ? JSON.parse(guardadas) : [];
});
```

---

# Loader: Los 3 estados del fetch

```jsx
function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => { setUsuarios(data); setCargando(false); })
      .catch(err => { setError('Error al cargar'); setCargando(false); });
  }, []);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p style={{color: 'red'}}>{error}</p>;
  return <ul>{usuarios.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

---

# Cleanup: Evitar memory leaks

```jsx
function Temporizador() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSegundos(s => s + 1);
    }, 1000);

    // Se ejecuta al desmontar el componente
    return () => clearInterval(timer);
  }, []);
}
```

> **Todo efecto que persista** (timer, suscripción, listener) **debe tener cleanup**.

---

# Taskify: Persistencia

```jsx
// Leer al iniciar
const [tareas, setTareas] = useState(() => {
  const data = localStorage.getItem('taskify-tareas');
  return data ? JSON.parse(data) : [];
});

// Guardar cuando cambien
useEffect(() => {
  localStorage.setItem('taskify-tareas', JSON.stringify(tareas));
}, [tareas]);
```

---

# Ejercicios

**Ejercicio 1:** Persistir el estado de la lista de compras del módulo anterior en localStorage.

**Ejercicio 2:** Cronómetro con botones start/stop/reset usando setInterval con cleanup.
