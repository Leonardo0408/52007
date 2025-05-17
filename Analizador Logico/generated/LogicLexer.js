// Generated from c:/Users/gamer/antlr-analyzer/Logic.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,9,43,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,
1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,4,8,38,8,8,11,8,12,8,39,1,8,1,8,0,0,
9,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,1,0,3,2,0,65,90,97,122,1,0,48,
57,3,0,9,10,13,13,32,32,43,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,
0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,
0,0,0,3,22,1,0,0,0,5,24,1,0,0,0,7,26,1,0,0,0,9,28,1,0,0,0,11,30,1,0,0,0,
13,32,1,0,0,0,15,34,1,0,0,0,17,37,1,0,0,0,19,20,5,45,0,0,20,21,5,62,0,0,
21,2,1,0,0,0,22,23,5,118,0,0,23,4,1,0,0,0,24,25,5,94,0,0,25,6,1,0,0,0,26,
27,5,126,0,0,27,8,1,0,0,0,28,29,5,40,0,0,29,10,1,0,0,0,30,31,5,41,0,0,31,
12,1,0,0,0,32,33,7,0,0,0,33,14,1,0,0,0,34,35,7,1,0,0,35,16,1,0,0,0,36,38,
7,2,0,0,37,36,1,0,0,0,38,39,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,41,1,
0,0,0,41,42,6,8,0,0,42,18,1,0,0,0,2,0,39,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LogicLexer extends antlr4.Lexer {

    static grammarFileName = "Logic.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'->'", "'v'", "'^'", "'~'", "'('", "')'" ];
	static symbolicNames = [ null, "IMPLIES", "OR", "AND", "NOT", "LPAREN", 
                          "RPAREN", "LETTER", "DIGIT", "WS" ];
	static ruleNames = [ "IMPLIES", "OR", "AND", "NOT", "LPAREN", "RPAREN", 
                      "LETTER", "DIGIT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

LogicLexer.EOF = antlr4.Token.EOF;
LogicLexer.IMPLIES = 1;
LogicLexer.OR = 2;
LogicLexer.AND = 3;
LogicLexer.NOT = 4;
LogicLexer.LPAREN = 5;
LogicLexer.RPAREN = 6;
LogicLexer.LETTER = 7;
LogicLexer.DIGIT = 8;
LogicLexer.WS = 9;



