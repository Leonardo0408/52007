function printTree(node, parser, indent = "", isLast = true) {
    if (!node.children) return;

    const pointer = isLast ? "└── " : "├── ";

    for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        const isChildLast = i === node.children.length - 1;

        if (child.symbol) {
            // Es un nodo hoja (token)
            console.log(indent + pointer + child.symbol.text);
        } else {
            // Es una regla (nodo no terminal)
            const ruleName = parser.ruleNames[child.ruleIndex];
            console.log(indent + pointer + ruleName);

            const newIndent = indent + (isLast ? "    " : "│   ");
            printTree(child, parser, newIndent, isChildLast);
        }
    }
}

export default printTree;
