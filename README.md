# Around The U.S. - Alrededor de los EE. UU.

## Descripción
**Around The U.S.** es una aplicación web interactiva para explorar y compartir fotografías de lugares.  
Permite editar el perfil, crear nuevas tarjetas, dar "me gusta", eliminar tarjetas y ver imágenes en tamaño ampliado.

## Funcionalidades
- Edición de perfil (nombre y descripción).
- Renderizado de tarjetas iniciales desde JavaScript.
- Creación de nuevas tarjetas desde el formulario "Nuevo lugar".
- Eliminación de tarjetas.
- Sistema de likes por tarjeta.
- Vista previa de imagen en popup.
- Cierre de popups con botón, clic en overlay y tecla `Escape`.
- Validación de formularios con mensajes personalizados en español.
- Botón de envío deshabilitado mientras existan campos inválidos.
- Restablecimiento de validación al cerrar popups de formulario.

## Mejoras Implementadas
- Se añadieron `span` de error para todos los inputs de ambos formularios:
  - `#name-input-error`
  - `#description-input-error`
  - `#place-name-input-error`
  - `#link-input-error`
- Se agregaron `id` únicos a cada input para mapear mensajes de error correctamente.
- Se normalizaron clases de estado de validación:
  - `.popup__input_invalid`
  - `.popup__input-error_visible`
- Se implementó validación modular en `scripts/validate.js`:
  - `showInputError`
  - `hideInputError`
  - `checkInputValidity`
  - `hasInvalidInput`
  - `toggleButtonState`
  - `setEventListeners`
  - `enableValidation`
  - `resetValidation`
- Se exportó `enableValidation` e integración por módulo en `scripts/index.js`.
- Se importó y ejecutó `resetValidation` al cerrar cualquier popup con formulario.

## Tecnologías Utilizadas
- HTML5
- CSS3 (BEM)
- JavaScript (ES Modules)
- Diseño responsivo

## Estructura del Proyecto
```txt
web_project_around_es/
├── index.html
├── README.md
├── scripts/
│   ├── index.js
│   └── validate.js
├── pages/
│   └── index.css
├── blocks/
├── images/
└── vendor/
```

## Proyecto en Vivo
https://web-project-around-es-pi.vercel.app/
