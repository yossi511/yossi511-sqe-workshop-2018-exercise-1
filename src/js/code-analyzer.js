import * as esprima from 'esprima';
import * as escodegen from 'escodegen';
const parseCode = (codeToParse) => {
    return esprima.parseScript(codeToParse, {loc: true});
};

let tuples = [];
let elseSymbol = false;

function init() {
    tuples = [];
}

class tuple {
    constructor(Line, Type, Name, Condition, Value) {
        this._line = Line;
        this._type = Type;
        this._name = Name;
        this._condition = Condition;
        this._value = Value;
    }
}

function parseCodeIntoTuples(codeBody) {
    for (let i = 0; i < codeBody.length; i++) {
        parseCodeElement(codeBody[i]);
    }
    return tuples;
}

function parseCodeElement(codeElement) {
    let dec_or_state = {
        'FunctionDeclaration' : FunctionDeclaration,
        'VariableDeclaration' : VariableDeclaration,
        'BlockStatement' : BlockStatement,
        'IfStatement' : IfStatement,
        'ForStatement' : ForStatement,
        'WhileStatement' : WhileStatement,
        'ReturnStatement' : ReturnStatement};
    let expr = {
        'UpdateExpression' : UpdateExpression,
        'AssignmentExpression' : AssignmentExpression};

    if (dec_or_state.hasOwnProperty(codeElement.type))
        dec_or_state[codeElement.type](codeElement);
    else
        expr[codeElement.expression.type](codeElement.expression);
}

function FunctionDeclaration(codePiece) {
    tuples.push(new tuple(codePiece.loc.start.line, 'function declaration', codePiece.id.name, null, null));
    let paramList = codePiece.params;
    for (let i = 0; i < paramList.length; i++) {
        tuples.push(new tuple(paramList[i].loc.start.line, 'variable declaration', escodegen.generate(paramList[i]), null, null));
    }
    let body = codePiece.body.body;
    parseCodeIntoTuples(body);
}

function VariableDeclaration(codePiece) {
    let declList = codePiece.declarations;
    let name;
    let value;
    for (let i = 0; i < declList.length; i++) {
        name = declList[i].id.name;
        if (declList[i].init !== null) {
            value = escodegen.generate(declList[i].init);
            tuples.push(new tuple(codePiece.loc.start.line, 'variable declaration', name, null, value));
        } else
            tuples.push(new tuple(codePiece.loc.start.line, 'variable declaration', name, null, null));
    }
}

function BlockStatement(codePiece) {
    for (let i = 0; i < codePiece.body.length; i++) {
        parseCodeElement(codePiece.body[i]);
    }
}

function IfStatement(codePiece) {
    if (elseSymbol) {
        tuples.push(new tuple(codePiece.test.loc.start.line, 'else if statement', null, escodegen.generate(codePiece.test), null));
    } else {
        tuples.push(new tuple(codePiece.test.loc.start.line, 'if statement', null, escodegen.generate(codePiece.test), null));
    }
    parseCodeElement(codePiece.consequent);
    if (codePiece.alternate !== null) {
        elseSymbol = true;
        parseCodeElement(codePiece.alternate);
        elseSymbol = false;
    }
}

function ForStatement(codePiece) {
    let condition = '';
    if (codePiece.init !== null)
        condition = escodegen.generate(codePiece.init) + escodegen.generate(codePiece.test) + ';' + escodegen.generate(codePiece.update);
    else {
        condition = ';' + escodegen.generate(codePiece.test) + ';' + escodegen.generate(codePiece.update);
    }
    tuples.push(new tuple(codePiece.loc.start.line, 'for statement', null, condition, null));
    parseCodeIntoTuples(codePiece.body.body);
}

function WhileStatement(codePiece) {
    let testName = escodegen.generate(codePiece.test);
    tuples.push(new tuple(codePiece.loc.start.line, 'while statement', null, testName, null));
    let body = codePiece.body.body;
    parseCodeIntoTuples(body);
}

function ReturnStatement(codePiece) {
    tuples.push(new tuple(codePiece.loc.start.line, 'return statement', null, null, escodegen.generate(codePiece.argument)));
}

function UpdateExpression(codePiece) {
    tuples.push(new tuple(codePiece.loc.start.line, 'update expression', escodegen.generate(codePiece), null, null));
}

function AssignmentExpression(codePiece) {
    tuples.push(new tuple(codePiece.loc.start.line, 'assignment expression', escodegen.generate(codePiece.left), null, escodegen.generate(codePiece.right)));
}

export {parseCode, parseCodeIntoTuples, tuple, init};