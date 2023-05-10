# Pasos del proyecto

1. npm init -y
    Iniciamos proyecto de node 
2. npm install express
    Instalamos dependencia para crear un servidor en Node
3. mkdir src
    Creamos carpeta scr en la que estara la logica del proyecto
4. Creamos una pequeña API con express

## Docker
Su utilizacion se lleva a cabo ya que estamos en un entorno de desarrollo local en el cual sabemos que versiones tenemos ya sea de Node, o los requerimientos necesita nuestra aplicacion.
Pero que pasa si crece la APP y se le deben ir agregando herramientas o programas para que funcione.
Docker sera una especie de package.json pero para la aplicacion entera que contendra la informacion de la base de datos, interprete , IDE, etc

1. Ejecutamos Docker Window

2. Creamos una Imagen: Todo el proyecto guardado con todos los requerimientos, comandos para que funcione.
    Creamos archivo Dockerfile, en el se especifica lo que necesita la aplicacion para que funcione en cualquier sistema. Nos podemos ir ayudando de dockerhub que es una especie de npm que instalara todos las dependencias necesarias o tambien se considera una especie de GitHub que almacena puros contenedores

3. Comandos 
    - docker build -t "nombre-imagen" "archivos que va a contener (En este caso todo lo de la carpeta y ponemos un '.')"

    - docker images  <- Muestra todas las imagenes

    - docker run -it -p 4000:3000 node-restapi  <- Inicia dentro de un contenedor el proyecto, -it: modo interactivo para ir viendo en cada momento   -p 4000:3000: De por si la aplicacion de express inicia en el puerto 3000, pero esto sera dentro del contenedor, entonces para visitar le decimos que la ejecute en el puerto 4000

    - docker run -d -p 4000: 3000 node-restapi  <- La ejecuta como un proceso en el contenedor
    - docker ps  <- Nos muestra todos los procesos ejecutandose
    - docker stop <CONTAINER ID> <- Parar un proceso 
    - docker ps -a   <- Listado de todos los procesos que hayan sido ejecutado
