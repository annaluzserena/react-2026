# Design: Tema Claro/Oscuro con Context

**Change:** `03-contexto-tema`

---

## Technical Approach

1. Crear `TemaContext.jsx` con `createContext`, `TemaProvider` y custom hook `useTema`
2. Envolver App en `main.jsx` con el Provider
3. Botón toggle en Header usando `useTema()`
4. Clases CSS: `.app.claro` y `.app.oscuro` con variables de color

## Architecture Decisions

### Decision: Context API vs props drilling

| Opción | Tradeoff | Decisión |
|--------|----------|----------|
| Context API | Ideal para tema: se necesita en muchos componentes. Pedagógico. | ✅ Elegido |
| Props drilling | Posible pero tedioso (Header → TaskList → TaskCard). | ❌ Descartado |

### Decision: Estado del tema en Context vs App

| Opción | Tradeoff | Decisión |
|--------|----------|----------|
| Estado en Context | El Provider maneja el estado. Un solo lugar. Custom hook. | ✅ Elegido |
| Estado en App | Funciona, pero no muestra el patrón Context completo. | ❌ Descartado |

## Data Flow

```
main.jsx
  └── TemaProvider (useState: 'claro' | 'oscuro')
       └── App
            ├── Header (useTema() → botón toggle)
            ├── TaskForm
            └── TaskList
                 └── TaskCard
```

## File Changes

| File | Acción |
|------|--------|
| `src/context/TemaContext.jsx` | New — createContext, TemaProvider, useTema |
| `src/main.jsx` | Modified — envolver App con TemaProvider |
| `src/components/Header.jsx` | Modified — agregar botón de cambio de tema |
| `src/App.jsx` | Modified — agregar className dinámico según tema |
| `src/index.css` | Modified — variables CSS para claro/oscuro |

## Contratos

```js
// TemaContext.jsx
const TemaContext = createContext(null)

function TemaProvider({ children }) {
  const [tema, setTema] = useState(() => localStorage.getItem('taskify-tema') || 'claro')
  
  const cambiarTema = () => {
    setTema(t => {
      const nuevo = t === 'claro' ? 'oscuro' : 'claro'
      localStorage.setItem('taskify-tema', nuevo)
      return nuevo
    })
  }

  return (
    <TemaContext.Provider value={{ tema, cambiarTema }}>
      {children}
    </TemaContext.Provider>
  )
}

function useTema() { return useContext(TemaContext) }
```

```css
/* Variables CSS */
.app.claro  { --bg: #ffffff; --text: #1a1a2e; }
.app.oscuro { --bg: #1a1a2e; --text: #e2e8f0; }
```
