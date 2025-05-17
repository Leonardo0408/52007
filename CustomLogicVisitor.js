import LogicVisitor from "./generated/LogicVisitor.js";

class CustomLogicVisitor extends LogicVisitor {
    visitFormula(ctx) {
        console.log("Visitando fórmula");

        // Ejemplo de visita recursiva
        return this.visitChildren(ctx);
    }

    // Agrega más métodos según las reglas de tu gramática
}

export default CustomLogicVisitor;
