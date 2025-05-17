import LogicListener from "./generated/LogicListener.js";

class CustomLogicListener extends LogicListener {
    enterFormula(ctx) {
        console.log("Entrando a una fórmula");
    }

    exitFormula(ctx) {
        console.log("Saliendo de una fórmula");
    }

    // Agrega más métodos según tus reglas en Logic.g4
}

export default CustomLogicListener;
