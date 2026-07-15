 Api.js
[ ] Constructor — recibe { baseUrl, headers }
[ ] Método privado _checkResponse(res) — verifica si la respuesta es ok, si no lanza error
[ ] getUserInfo() — GET al servidor para obtener datos del usuario
[ ] getInitialCards() — GET para obtener las tarjetas iniciales
[ ] editUserInfo(data) — PATCH para actualizar nombre y descripción
[ ] addCard(data) — POST para agregar una nueva tarjeta
[ ] deleteCard(cardId) — DELETE para eliminar una tarjeta
[ ] changeLikeCardStatus(cardId, isLiked) — PUT/DELETE para like/dislike
[ ] updateAvatar(avatar) — PATCH para actualizar el avatar
📁 index.js — Modificaciones principales
[ ] Usar Promise.all() para cargar getUserInfo() y getInitialCards() al mismo tiempo
[ ] Manejar errores con .catch(err => console.error(err))
[ ] Agregar renderLoading() en todos los formularios (estado de carga)
[ ] Actualizar el like de la tarjeta según respuesta del servidor
[ ] Eliminar tarjeta solo si el servidor confirma el DELETE
[ ] Actualizar UserInfo con datos reales del servidor al cargar la página
📁 Card.js — Modificaciones
[ ] Recibir handleDeleteClick y handleLikeClick como callbacks externos
[ ] Método para verificar si el like ya está activo (isLiked)
[ ] Método para actualizar el contador de likes desde el servidor
📁 PopupWithForm.js — Modificaciones
[ ] Cambiar texto del botón submit durante la carga (renderLoading)