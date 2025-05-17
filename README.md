# 52007
ANALIZADOR DE EXPRESIONES LOGICAS CON ANTLR Y JAVASCRIPT:

- Este proyecto permite analizar, interpretar y traducir expresiones lógicas escritas en notación proposicional a código JavaScript. Utiliza ANTLR4 para el análisis léxico y sintáctico, y     cuenta con funcionalidades como:
   1.DETECTAR ERRORES LEXICOS Y SINTACTICOS EN EXPRESIONES LOGICAS. 
   2.GENERAR EL ARBOL DE DERIVACION DE ESA EXPRESION.
   3.GENERA TABLA DONDE SE IDENTIFICA LOS LEXEMAS Y LOS TOKENS. 
   4.TRADUCE LA EXPRESION A SU EQUIVALENCIA EN JAVASCRIPT. 

REQUISITOS PARA QUE FUNCIONE DE MANERA CORRECTA: 
 1. Tener instalado Node.js (16 o superior)
    https://nodejs.org/es
 2. Tener instalado VS Code
    https://code.visualstudio.com/ 
 3. Tener instalado Java 11 o superior
    https://www.oracle.com/java/technologies/downloads/#java11
    (Seleccionar Segun su Sistema Operativo )  
 5. Tener Instalado Antlr como extensión de VS code
   ![Captura de pantalla 2025-05-16 133939](https://github.com/user-attachments/assets/8e696f89-9d85-4469-9834-737c1bcc28ae)


Importante: Luego de instalar la extensión reinicia VS Code para que tome los cambios.

Instalacion del proyecto: Una vez ya instalados los requirimientos previos los siguiente es: 
1.Configurar las preferencias de generación de código de ANTLR: ve al menú
Archivo/Preferencias/Configuración ( CTL + ,) y busca las preferencias de ANTLR. Baja hasta
la sección Antlr4:Generation y edita settings.json. 

![Captura de pantalla 2025-05-16 134954](https://github.com/user-attachments/assets/9c548d40-4ea5-42df-a821-58ab552e8dae)
 
 
 Borrar todo lo que se encuentre y reemplazar por : 
{"antlr4.generation":{
"alternativeJar": "antlr-4.13.2-complete.jar",
 "mode": "external",
 "listeners": true,
 "visitors": true,
 "language": "JavaScript",
 "outputDir": "./generated"
 }}

  Importante: Guarda el archivo de configuración antes de continuar (CTRL+S)

  - Una vez instalado el ANTLR se debe clonar el proyecto desde el comando cmd ejecutando el siguiente comando

    git clone https://github.com/52007/antlr-analyzer.git

    - Una vez clonado cambiamos el directorio raiz del proyecto ejecutando el siguiente comando (CMD O POWERSHELL)
       cd antlr-analyzer
    - Despues ejecutamos el siguiente comando para abrirlo en VS code :
        . code

      ![Captura de pantalla (122)](https://github.com/user-attachments/assets/d8ebca0f-cafe-4da5-9af6-42d4862fa621)


      - Si la instalacion se realizo correctamente se deberian ver el proyecto en VS code.

FUNCIONAMIENTO DEL ANALIZADOR: 
1. Al presionar sobre 


 

 



    
     
