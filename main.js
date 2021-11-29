//Vue es reactive, cuando un valor cambia, cualquier cosa que depende de el cambia automáticamente.

const app = Vue.createApp({//Options Object: No es opcional, pero permite añadir propiedades opcionales para configurar la app. Siempre tiene que estar, aunque sea vacío.
    data: function(){//Option: propiedad del Option Object. Objeto con la data a utilizar.
        return {
            product: 'Socks',
            description: 'A lovely pair of socks'
        }
    }
})
