# Tasks: Tema Claro/Oscuro con Context

**Change:** `03-contexto-tema`

---

## Phase 1: Contexto

- [ ] 1.1 Crear `src/context/TemaContext.jsx` — `createContext`, `TemaProvider`, `useTema`, useState para tema, persistencia en localStorage
- [ ] 1.2 Modificar `src/main.jsx` — importar `TemaProvider` y envolver `<App />`

## Phase 2: Integración

- [ ] 2.1 Modificar `src/components/Header.jsx` — importar `useTema`, agregar botón con texto dinámico "🌙 Modo oscuro" / "☀️ Modo claro"
- [ ] 2.2 Modificar `src/App.jsx` — agregar `className` dinámico: `app claro` o `app oscuro`

## Phase 3: Estilos

- [ ] 3.1 Modificar `src/index.css` — agregar variables CSS para `.claro` y `.oscuro`
- [ ] 3.2 Refactorizar colores hardcodeados en la hoja de estilos para que usen variables CSS

## Phase 4: Verificación

- [ ] 4.1 Probar toggle entre temas
- [ ] 4.2 Verificar persistencia al recargar
- [ ] 4.3 `npm run build` sin errores
