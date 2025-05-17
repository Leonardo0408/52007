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

Instalacion del proyecto: Una vez ya instalados los requirimientos previos los siguiente es

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

     git clone https://github.com/LIbanez04/52007.git

    - Una vez clonado cambiamos el directorio raiz del proyecto ejecutando el siguiente comando (CMD O POWERSHELL):

      cd antlr-analyzer
    - Despues ejecutamos el siguiente comando para abrirlo en VS code :

       . code

      ![Captura de pantalla (122)](https://github.com/user-attachments/assets/d8ebca0f-cafe-4da5-9af6-42d4862fa621)


      - Si la instalacion se realizo correctamente se deberian ver el proyecto en VS code.

FUNCIONAMIENTO DEL ANALIZADOR: 
1. Al presionar sobre el archivo Logic.g4 se podra observar la gramatica propuesta para el caso que estudia el analizador
2. La gramatica se divide en:

    . SINTAXIS (PARSER): En donde se define la combinacion de los tokens para generar cadenas validas

    . LEXICO (LEXER) : Aqui se define los elementos basicos del lenguaje como los operadores y parentesis

3. Para probar una entrada se necesita editar el archivo input.txt e ingresar una cadena o entrada (ej: p v q) y guardar los cambios (CTRL+S) 
4. Utilizando el Plugin ANTLR4 para construir el arbol de sintaxis para la cadena ingresada en el archivo input.txt se debe presionar F5.
5. Para ver el analizador funcionar concretamente nos vamos al directorio raiz del proyecto y abrimos el terminal

    ![Captura de pantalla (123)](https://github.com/user-attachments/assets/0fa41148-1d6d-4940-912f-7336d5a2c7aa)


6. Una vez abierto el terminal debemos ejecutar el siguiente comando: npm start

   (Esto dara la instruccion de arranque al programa)

7. Una vez ejecutado el comando mostrara lo siguiente si entrada asignada en el input.txt es valida ( En este caso utilice la entrada ( p v q )

    a. Tabla de Tokens donde identificara cual es el Lexema y cual es el toquen asociado:


    ![Captura de pantalla 2025-05-16 223634](https://github.com/user-attachments/assets/09791943-d56c-42a4-8c30-a6825583a1d5)


    b. Arbol de analisis sintactico:


   ![Captura de pantalla 2025-05-16 223910](https://github.com/user-attachments/assets/896f42f1-1b51-40ed-8a03-88a30e9ef009)

   
    c . La traduccion de la entrada al Lenguaje de Programacion JAVASCRPT:


    ![Captura de pantalla 2025-05-16 224021](https://github.com/user-attachments/assets/cb3de902-66a6-4145-a5c1-6318f0af8625)

   d. El analisis respecto a la entrada, es decir determina si la entrada es valida o no y nos arrojara un "true" si la entrada es valida

    ![Captura de pantalla 2025-05-16 224119](https://github.com/user-attachments/assets/57c7ba11-aab8-495e-ac72-f82cd4faefdc)
  ![Captura de pantalla 2025-05-16 224126](https://github.com/user-attachments/assets/4e1bd1ee-1a41-4b3f-9d2a-5642335e94d9)

9. En caso de ser una entrada invalida(Lexica o sintacticamente) puesta previamente en el acrhivo input.txt.

   (En este caso utilice la cadena p # q) debiendo mostrar lo siguiente:

    a. Tipo de Error Detectado (LEXICO O SINTACTICO) 

      ![Captura de pantalla 2025-05-16 224724](https://github.com/user-attachments/assets/511b9e06-8d72-42bd-918f-582b176f9e3c)


     b. Linea donde se produce el error


      ![Captura de pantalla 2025-05-16 224816](https://github.com/user-attachments/assets/d0de621d-954f-4ab4-aad8-e54a3ab8df1f)

    c. El motivo del Error
  
      ![image](https://github.com/user-attachments/assets/e741ac31-ecbc-427f-b4b9-69007ceb5c41)


 



    
     
