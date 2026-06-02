# Spec: Tema de la Aplicación

**Change:** `03-contexto-tema`
**Tipo:** Full spec

---

## Purpose

La aplicación **MUST** proveer un sistema de tema (claro/oscuro) accesible desde cualquier componente mediante Context API. El tema **SHOULD** persistirse en `localStorage`.

## Requirements

### Requirement: Cambiar tema

El sistema **MUST** permitir al usuario alternar entre tema claro y oscuro.

#### Scenario: Cambiar a oscuro

- GIVEN la app en tema claro
- WHEN el usuario hace clic en el botón "🌙 Modo oscuro"
- THEN el fondo cambia a oscuro y el texto a claro
- AND el botón muestra "☀️ Modo claro"

#### Scenario: Cambiar a claro

- GIVEN la app en tema oscuro
- WHEN el usuario hace clic en el botón "☀️ Modo claro"
- THEN el fondo cambia a claro y el texto a oscuro

### Requirement: Persistir tema

El sistema **SHOULD** recordar el tema elegido entre recargas.

#### Scenario: Persistencia al recargar

- GIVEN la app en modo oscuro
- WHEN se recarga la página
- THEN la app sigue en modo oscuro

### Requirement: Acceso global

El tema **MUST** ser accesible desde cualquier componente sin prop drilling.

#### Scenario: Header usa el tema

- GIVEN el Header usa `useTema()`
- WHEN el tema cambia
- THEN el Header muestra el botón con el texto correcto

#### Scenario: Provider envuelve la app

- GIVEN `main.jsx` tiene `<TemaProvider><App /></TemaProvider>`
- WHEN cualquier componente hijo llama a `useTema()`
- THEN obtiene el tema y la función para cambiarlo
