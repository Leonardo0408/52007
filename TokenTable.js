import Table from 'cli-table3';

export default function printTokens(tokens, lexer) {
    tokens.fill();

    const table = new Table({
        head: ['Lexema', 'Token'],
        colWidths: [10, 20],
    });

    const symbolicNames = lexer.constructor?.symbolicNames || [];

    tokens.tokens.forEach(token => {
        if (token.type !== -1) {
            const typeName = symbolicNames[token.type] || token.type;
            table.push([token.text, typeName]);
        }
    });

    console.log('Tabla de Tokens:\n');
    console.log(table.toString());
}
