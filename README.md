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
 



    
     
