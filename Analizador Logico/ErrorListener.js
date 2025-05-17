import antlr4 from 'antlr4';

class ErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        const errorMsg = `❌ Error en línea ${line}, columna ${column}: ${msg}`;
        this.errors.push(errorMsg);
    }

    hasErrors() {
        return this.errors.length > 0;
    }

    printErrors() {
        console.error("Se encontraron errores de sintaxis:");
        this.errors.forEach(err => console.error(err));
    }
}

export default ErrorListener;
