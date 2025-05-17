grammar Logic;

// === SINTAXIS (Parser) ===
formula
    : implication
    ;

implication
    : disjunction (IMPLIES disjunction)?
    ;

disjunction
    : conjunction (OR conjunction)*
    ;

conjunction
    : negation (AND negation)*
    ;

negation
    : NOT negation
    | primary
    ;

primary
    : variable
    | LPAREN formula RPAREN
    ;


variable
    : LETTER variable_char*
    ;
 variable_char
    : LETTER
    | DIGIT
    ;
// === LÉXICO (Lexer) ===
IMPLIES : '->' ;
OR      : 'v' ;
AND     : '^' ;
NOT     : '~' ;

LPAREN  : '(' ;
RPAREN  : ')' ;
LETTER: [a-zA-Z];
DIGIT : [0-9];

WS : [ \t\r\n]+ -> skip ;
