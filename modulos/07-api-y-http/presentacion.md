---
marp: true
theme: default
paginate: true
backgroundColor: #fff
---

# **Módulo 07: APIs y HTTP con Axios**

Desarrollo de Software — Clase #14

---

# fetch vs Axios

| fetch (nativo) | Axios (librería) |
|---|---|
| Hay que llamar `.json()` manual | Parsea JSON automáticamente (`res.data`)
| Errores 4xx no van al catch | Errores 4xx y 5xx se capturan en catch
| Sin configuración global | Se puede crear instancia con baseURL
| No necesita instalación | `npm install axios`

---

# Instalación

```bash
npm install axios
```

---

# GET con Axios

```jsx
import axios from 'axios';
import { useState, useEffect } from 'react';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsuarios(res.data))
      .catch(err => setError('Error al cargar'))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p style={{color: 'red'}}>{error}</p>;
  return <ul>{usuarios.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

---

# Con async/await

```jsx
useEffect(() => {
  const cargarDatos = async () => {
    try {
      const res = await axios.get('/api/usuarios');
      setUsuarios(res.data);
    } catch (err) {
      setError(err.response?.data?.mensaje || 'Error');
    } finally {
      setCargando(false);
    }
  };
  cargarDatos();
}, []);
```

---

# POST / PUT / DELETE

```jsx
// POST - crear
const res = await axios.post('/api/tareas', {
  titulo: 'Nueva tarea',
  completada: false
});

// PUT - actualizar
const res = await axios.put(`/api/tareas/${id}`, {
  titulo: 'Actualizado',
  completada: true
});

// DELETE - borrar
const res = await axios.delete(`/api/tareas/${id}`);
```

---

# Instancia de Axios

```jsx
// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000
});

export default api;
```

```jsx
// En cualquier componente
import api from '../services/api';
const res = await api.get('/tareas');
```

---

# Taskify: Conectar con json-server

```bash
# Instalar json-server
npm install json-server

# Agregar script en package.json
"server": "json-server --watch src/db.json --port 3000"
```

```json
// src/db.json
{
  "tareas": [
    { "id": 1, "titulo": "Aprender React", "completada": false }
  ]
}
```

---

# json-server + Taskify

```jsx
// Taskify sincronizado con API
useEffect(() => {
  const cargarTareas = async () => {
    const res = await api.get('/tareas');
    setTareas(res.data);
  };
  cargarTareas();
}, []);

const agregarTarea = async (tarea) => {
  const res = await api.post('/tareas', tarea);
  setTareas(prev => [...prev, res.data]);
};

const borrarTarea = async (id) => {
  await api.delete(`/tareas/${id}`);
  setTareas(prev => prev.filter(t => t.id !== id));
};
```

---

# ¡Proyecto completo!

Taskify ahora es una app full-stack:
- ✅ Componentes y JSX
- ✅ Estado con useState
- ✅ Interactividad: agregar, toggle, borrar
- ✅ Persistencia con localStorage
- ✅ Tema claro/oscuro con Context
- ✅ Formularios con React Hook Form
- ✅ API con Axios + json-server

---

# Ejercicios

**Ejercicio 1:** Consumir JSONPlaceholder (posts, albums, photos) con Axios + loading/error.

**Ejercicio 2:** Integrar Taskify completamente con json-server (GET + POST + PUT + DELETE).
