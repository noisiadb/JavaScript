var ventana = window.open()
var direccion = ventana.prompt("Escribe una url")
ventana.location.replace("https://" + direccion)