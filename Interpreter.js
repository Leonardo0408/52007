import LogicLexer from "./generated/LogicLexer.js";

export default function Interpreter(tree, context) {
  function visit(node) {
    if (!node) return "";

    if (node.constructor.name === "TerminalNodeImpl") {
      const text = node.getText();
      if (context.hasOwnProperty(text)) {
        return text; // variable literal
      }
      return text;
    }

    switch (node.constructor.name) {
      case "FormulaContext":
        return visit(node.children[0]);

      case "ImplicationContext":
        if (node.children.length === 3) {
          const left = visit(node.children[0]);
          const right = visit(node.children[2]);
          return `(!(${left}) || (${right}))`;
        }
        return visit(node.children[0]);

      case "DisjunctionContext": {
        const disjuncts = [];
        for (let i = 0; i < node.children.length; i++) {
          if (node.children[i].symbol && node.children[i].symbol.type === LogicLexer.OR) continue;
          disjuncts.push(visit(node.children[i]));
        }
        return disjuncts.join(" || ");
      }

      case "ConjunctionContext": {
        const conjuncts = [];
        for (let i = 0; i < node.children.length; i++) {
          if (node.children[i].symbol && node.children[i].symbol.type === LogicLexer.AND) continue;
          conjuncts.push(visit(node.children[i]));
        }
        return conjuncts.join(" && ");
      }

      case "NegationContext":
        if (node.children.length === 2) {
          return "!" + `(${visit(node.children[1])})`;
        }
        return visit(node.children[0]);

      case "PrimaryContext":
        if (node.children.length === 1) {
          return visit(node.children[0]);
        } else if (node.children.length === 3) {
          return "(" + visit(node.children[1]) + ")";
        }
        break;

      case "VariableContext":
        return node.getText();

      default:
        if (node.children && node.children.length > 0) {
          return node.children.map(visit).join("");
        }
        return node.getText();
    }
  }

  const jsCode = visit(tree);

  console.log("Código JS generado para evaluación:");
  console.log(jsCode);

  try {
    const func = new Function(...Object.keys(context), `return ${jsCode};`);
    const result = func(...Object.values(context));
    return { result, code: jsCode };
  } catch (e) {
    console.error("❌ Error al evaluar el código generado:", e.message);
    return { result: null, code: jsCode };
  }
}
