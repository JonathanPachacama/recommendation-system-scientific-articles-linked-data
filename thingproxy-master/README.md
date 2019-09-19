## Comando para levatar proxy

Comando para crear modelos

```
> sudo node server

```


## Información thingproxy
==========================

thingproxy es un servidor proxy directo simple para procesar llamadas API a servidores que no envían encabezados CORS o admiten HTTPS.

### ¿Que hace?

thingproxy permite que el código javascript en su sitio acceda a recursos en otros dominios que normalmente estarían bloqueados debido a la [Política del mismo origen](http://en.wikipedia.org/wiki/Same_origin_policy). Actúa como un proxy entre su navegador y un servidor remoto y agrega los encabezados CORS adecuados a la respuesta.

Además, algunos navegadores no permiten solicitudes de datos HTTP no cifrados si la página misma se carga desde HTTPS. thingproxy también le permite acceder a API HTTP no seguras desde una URL HTTPS segura.

Se recomenda que ejecute el servidor thingproxy con este código fuente, pero freeboard.io ofrece un proxy gratuito disponible en:

http://thingproxy.freeboard.io y https://thingproxy.freeboard.io



### ¿Por qué?

Los paneles creados con freeboard normalmente acceden a las API directamente desde llamadas ajax desde javascript. Muchos proveedores de API no proporcionan los encabezados CORS adecuados o no admiten HTTPS; se proporciona thingproxy para superar estas limitaciones.

### ¿Cómo?

Simplemente anteponer cualquier url con http (s): //thingproxy.freeboard.io/fetch/

For example:

```
https://thingproxy.freeboard.io/fetch/http://my.api.com/get/stuff
```

Cualquier método HTTP, encabezados y cuerpo que envíe, se enviará a la URL que especifique y se le enviará la respuesta con los encabezados CORS correspondientes adjuntos.

### Advertencias

No abuse del servidor thingproxy.freeboard.io: está destinado a llamadas API relativamente pequeñas y no como un servidor proxy para ocultar su identidad. En este momento, se limita las solicitudes y respuestas a 100,000 caracteres cada una (lo siento, no hay descargas de archivos), y limitamos cada IP a 10 solicitudes / segundo.

### Privacidad

thingproxy.freeboard.io registra la fecha, la dirección IP del solicitante y la URL de cada solicitud que se le envía. No registramos encabezados ni solicitamos cuerpos. No compartiremos ni venderemos estos datos a nadie, punto.