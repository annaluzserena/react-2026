# Propuesta: Tema Claro/Oscuro con Context

**Change name:** `03-contexto-tema`

---

## Intent

Taskify no tiene personalización visual. Los alumnos necesitan aprender `useContext` para compartir estado global sin prop drilling. Este cambio agrega tema claro/oscuro usando Context API.

## Scope

### In Scope
- Crear `TemaContext` con Provider y custom hook `useTema`
- Botón toggle en Header para cambiar tema
- Aplicar clases CSS dinámicas según el tema
- Persistir tema elegido en localStorage

### Out of Scope
- Múltiples temas (solo claro/oscuro)
- Temas por componente (global)

## New Capabilities
- `tema-app`: Contexto de tema claro/oscuro con persistencia

## Modified Capabilities
- Ninguno

## Approach

1. Crear `TemaContext.jsx` con `createContext`, `TemaProvider` y `useTema`
2. Envolver `<App />` en `<TemaProvider>` desde `main.jsx`
3. Botón toggle en Header que usa `useTema`
4. Clases CSS dinámicas según tema

## Affected Areas

| Area | Impact |
|------|--------|
| `src/context/TemaContext.jsx` | New |
| `src/main.jsx` | Modified |
| `src/components/Header.jsx` | Modified |
| `src/App.jsx` | Modified |
| `src/index.css` | Modified |

## Rollback

Revertir archivos modificados y eliminar `src/context/TemaContext.jsx`.

## Success Criteria

- [ ] Botón en Header cambia entre claro/oscuro
- [ ] Tema se persiste al recargar página
- [ ] Todos los componentes reflejan el tema actual
