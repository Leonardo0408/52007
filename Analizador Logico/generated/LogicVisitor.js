// Generated from c:/Users/gamer/antlr-analyzer/Logic.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by LogicParser.

export default class LogicVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by LogicParser#formula.
	visitFormula(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicParser#implication.
	visitImplication(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicParser#disjunction.
	visitDisjunction(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicParser#conjunction.
	visitConjunction(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicParser#negation.
	visitNegation(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicParser#primary.
	visitPrimary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicParser#variable.
	visitVariable(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by LogicParser#variable_char.
	visitVariable_char(ctx) {
	  return this.visitChildren(ctx);
	}



}