# Around The U.S. - Alrededor de los EE. UU.

## Descripción
**Around The U.S.** es una aplicación web interactiva para explorar y compartir fotografías de lugares.

Permite editar el perfil del usuario, agregar nuevas tarjetas, eliminar tarjetas, marcar tarjetas como favoritas y ver imágenes en tamaño ampliado.

## Funcionalidades
- Edición de perfil con nombre y descripción.
- Renderizado inicial de 6 tarjetas.
- Creación de nuevas tarjetas desde el formulario "Nuevo lugar".
- Eliminación de tarjetas.
- Sistema de "me gusta" por tarjeta.
- Vista previa de imagen en popup.
- Cierre de popups con botón, clic fuera del contenido y tecla `Escape`.
- Validación de formularios con mensajes personalizados.
- Deshabilitación del botón de envío mientras haya campos inválidos.

## Tecnologías utilizadas
- HTML5
- CSS3
- TypeScript
- JavaScript modular
- BEM
- Diseño responsivo

## Arquitectura
El proyecto está organizado con clases reutilizables en `src/components/`:

- `Card`
- `FormValidator`
- `Popup`
- `PopupWithForm`
- `PopupWithImage`
- `Section`
- `UserInfo`

El punto de entrada principal está en `src/index.ts`.

## Estructura del proyecto
```txt
web_project_around_es/
├── public/
│   ├── index.html
│   ├── index.js
│   ├── pages/
│   ├── blocks/
│   ├── images/
│   └── vendor/
├── src/
│   ├── components/
│   ├── utils/
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Desarrollo
El proyecto compila TypeScript a JavaScript en la carpeta `public/`.
El archivo `public/index.html` carga `public/index.js` como módulo.

## Proyecto en vivo
https://web-project-around-es-pi.vercel.app/
