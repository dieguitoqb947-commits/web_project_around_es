# Around The U.S.

Aplicación web interactiva para explorar y compartir fotografías de lugares. Permite editar el perfil, cambiar el avatar, agregar tarjetas, dar y quitar me gusta, eliminar tarjetas y ver imágenes en tamaño ampliado.

## Funcionalidades

- Edición de perfil con nombre y descripción.
- Cambio de avatar.
- Creación de nuevas tarjetas.
- Eliminación de tarjetas propias con confirmación.
- Sistema de me gusta por tarjeta.
- Vista previa de imágenes en popup.
- Cierre de popups con botón, clic fuera del contenido y tecla `Esc`.
- Validación de formularios con una clase reutilizable.

## Tecnologías

- HTML5
- CSS3
- TypeScript
- JavaScript modular
- BEM

## Arquitectura

El proyecto está organizado con clases en `src/components/`:

- `Api` para centralizar las solicitudes al servidor.
- `Card` para renderizar y gestionar cada tarjeta.
- `FormValidator` para validar formularios.
- `Popup` como clase base de popups.
- `PopupWithForm` para popups con formulario.
- `PopupWithImage` para la vista ampliada de imágenes.
- `PopupWithConfirmation` para confirmar eliminación de tarjetas.
- `Section` para renderizar listas de elementos.
- `UserInfo` para manejar la información del perfil.

El punto de entrada principal está en `src/index.ts`.

## Integración con API

La aplicación consume la API de Around para:

- obtener los datos del usuario;
- cargar las tarjetas iniciales;
- actualizar información del perfil;
- actualizar el avatar;
- crear tarjetas nuevas;
- eliminar tarjetas;
- alternar el estado de me gusta.

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

El archivo `public/index.html` carga `public/index.js` como módulo.

## Proyecto en vivo

https://web-project-around-es-pi.vercel.app/
