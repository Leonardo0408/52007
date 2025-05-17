import fs from "fs";
import antlr4 from "antlr4";

import LogicLexer from "./generated/LogicLexer.js";
import LogicParser from "./generated/LogicParser.js";
import printTokens from "./TokenTable.js";
import TreePrinter from "./TreePrinter.js";
import Interpreter from "./Interpreter.js";

// Clase para manejar errores léxicos
class LexerErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push({ line, column, msg });
  }
}

// Clase para manejar errores sintácticos
class ParserErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push({ line, column, msg });
  }
}

async function main() {
  const input = fs.readFileSync("input.txt", "utf8");

  // Flujo de entrada y lexer
  const chars = new antlr4.InputStream(input);
  const lexer = new LogicLexer(chars);

  // Captura errores léxicos
  const lexerErrors = new LexerErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(lexerErrors);

  const tokens = new antlr4.CommonTokenStream(lexer);

  // Parser y captura errores sintácticos
  const parser = new LogicParser(tokens);
  const parserErrors = new ParserErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(parserErrors);

  tokens.fill();

  if (lexerErrors.errors.length > 0) {
    console.error("Errores léxicos detectados:");
    lexerErrors.errors.forEach(e =>
      console.error(`  Línea ${e.line}, Columna ${e.column}: ${e.msg}`)
    );
    return;
  }

  // Parseamos la entrada
  const tree = parser.formula();

  if (parserErrors.errors.length > 0) {
    console.error("Errores sintácticos detectados:");
    parserErrors.errors.forEach(e =>
      console.error(`  Línea ${e.line}, Columna ${e.column}: ${e.msg}`)
    );
    return;
  }

  // Imprimir tabla de tokens
  printTokens(tokens, lexer);

  // Imprimir árbol sintáctico
  console.log("\n Árbol de análisis sintáctico:");
  TreePrinter(tree, parser);

  // Definir contexto con valores booleanos para variables
  const context = {
    p: true,
    q: false,
    r: true,
    s: false,
  };

  // Interpretar y evaluar
  const { result, code } = Interpreter(tree, context);

  if (result === null) {
    console.error("\n❌ No se pudo evaluar el código generado.");
    console.log("Código JS generado:");
    console.log(code);
  } else {
    console.log("\n✅ Entrada válida.");
    console.log("\n Código JS generado:");
    console.log(code);
    console.log("\n Resultado de la evaluación:", result);
  }
}

main().catch(console.error);
