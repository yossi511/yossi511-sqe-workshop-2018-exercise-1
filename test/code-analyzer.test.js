import assert from 'assert';
import {parseCodeIntoTuples, tuple, init, parseCode} from '../src/js/code-analyzer';


let varDeclInput  = {
    'type': 'Program',
    'body': [
        {
            'type': 'VariableDeclaration',
            'declarations': [
                {
                    'type': 'VariableDeclarator',
                    'id': {
                        'type': 'Identifier',
                        'name': 'x',
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 4
                            },
                            'end': {
                                'line': 1,
                                'column': 5
                            }
                        }
                    },
                    'init': null,
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 4
                        },
                        'end': {
                            'line': 1,
                            'column': 5
                        }
                    }
                },
                {
                    'type': 'VariableDeclarator',
                    'id': {
                        'type': 'Identifier',
                        'name': 'y',
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 8
                            },
                            'end': {
                                'line': 1,
                                'column': 9
                            }
                        }
                    },
                    'init': null,
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 8
                        },
                        'end': {
                            'line': 1,
                            'column': 9
                        }
                    }
                },
                {
                    'type': 'VariableDeclarator',
                    'id': {
                        'type': 'Identifier',
                        'name': 'z',
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 11
                            },
                            'end': {
                                'line': 1,
                                'column': 12
                            }
                        }
                    },
                    'init': null,
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 11
                        },
                        'end': {
                            'line': 1,
                            'column': 12
                        }
                    }
                }
            ],
            'kind': 'let',
            'loc': {
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 14
                }
            }
        }
    ],
    'sourceType': 'script',
    'loc': {
        'start': {
            'line': 1,
            'column': 0
        },
        'end': {
            'line': 1,
            'column': 14
        }
    }
};
let varDeclOutput = [new tuple (1, 'variable declaration', 'x', null,null) ,new tuple (1, 'variable declaration', 'y', null,null), new tuple (1, 'variable declaration', 'z', null,null) ];

let functionWithBody = {
    'type': 'Program',
    'body': [
        {
            'type': 'FunctionDeclaration',
            'id': {
                'type': 'Identifier',
                'name': 'identityFunction',
                'loc': {
                    'start': {
                        'line': 1,
                        'column': 9
                    },
                    'end': {
                        'line': 1,
                        'column': 17
                    }
                }
            },
            'params': [
                {
                    'type': 'Identifier',
                    'name': 'num',
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 19
                        },
                        'end': {
                            'line': 1,
                            'column': 25
                        }
                    }
                }
            ],
            'body': {
                'type': 'BlockStatement',
                'body': [
                    {
                        'type': 'ReturnStatement',
                        'argument': {
                            'type': 'Identifier',
                            'name': 'num',
                            'loc': {
                                'start': {
                                    'line': 2,
                                    'column': 7
                                },
                                'end': {
                                    'line': 2,
                                    'column': 13
                                }
                            }
                        },
                        'loc': {
                            'start': {
                                'line': 2,
                                'column': 0
                            },
                            'end': {
                                'line': 2,
                                'column': 14
                            }
                        }
                    }
                ],
                'loc': {
                    'start': {
                        'line': 1,
                        'column': 27
                    },
                    'end': {
                        'line': 3,
                        'column': 1
                    }
                }
            },
            'generator': false,
            'expression': false,
            'async': false,
            'loc': {
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 3,
                    'column': 1
                }
            }
        }
    ],
    'sourceType': 'script',
    'loc': {
        'start': {
            'line': 1,
            'column': 0
        },
        'end': {
            'line': 3,
            'column': 1
        }
    }
};
let functionWithBodyOutput = [ new tuple(1,'function declaration','identityFunction',null,null) , new tuple(1,'variable declaration','num',null,null)
    ,new tuple(2,'return statement',null,null,'num')];

let ifElseInput = {
    'type': 'Program',
    'body': [
        {
            'type': 'FunctionDeclaration',
            'id': {
                'type': 'Identifier',
                'name': 'equalToFive',
                'loc': {
                    'start': {
                        'line': 1,
                        'column': 9
                    },
                    'end': {
                        'line': 1,
                        'column': 16
                    }
                }
            },
            'params': [],
            'body': {
                'type': 'BlockStatement',
                'body': [
                    {
                        'type': 'VariableDeclaration',
                        'declarations': [
                            {
                                'type': 'VariableDeclarator',
                                'id': {
                                    'type': 'Identifier',
                                    'name': 'x',
                                    'loc': {
                                        'start': {
                                            'line': 2,
                                            'column': 4
                                        },
                                        'end': {
                                            'line': 2,
                                            'column': 5
                                        }
                                    }
                                },
                                'init': {
                                    'type': 'Literal',
                                    'value': 5,
                                    'raw': '5',
                                    'loc': {
                                        'start': {
                                            'line': 2,
                                            'column': 8
                                        },
                                        'end': {
                                            'line': 2,
                                            'column': 9
                                        }
                                    }
                                },
                                'loc': {
                                    'start': {
                                        'line': 2,
                                        'column': 4
                                    },
                                    'end': {
                                        'line': 2,
                                        'column': 9
                                    }
                                }
                            }
                        ],
                        'kind': 'let',
                        'loc': {
                            'start': {
                                'line': 2,
                                'column': 0
                            },
                            'end': {
                                'line': 2,
                                'column': 10
                            }
                        }
                    },
                    {
                        'type': 'IfStatement',
                        'test': {
                            'type': 'BinaryExpression',
                            'operator': '<',
                            'left': {
                                'type': 'Identifier',
                                'name': 'x',
                                'loc': {
                                    'start': {
                                        'line': 3,
                                        'column': 5
                                    },
                                    'end': {
                                        'line': 3,
                                        'column': 6
                                    }
                                }
                            },
                            'right': {
                                'type': 'Literal',
                                'value': 5,
                                'raw': '5',
                                'loc': {
                                    'start': {
                                        'line': 3,
                                        'column': 9
                                    },
                                    'end': {
                                        'line': 3,
                                        'column': 10
                                    }
                                }
                            },
                            'loc': {
                                'start': {
                                    'line': 3,
                                    'column': 5
                                },
                                'end': {
                                    'line': 3,
                                    'column': 10
                                }
                            }
                        },
                        'consequent': {
                            'type': 'BlockStatement',
                            'body': [
                                {
                                    'type': 'ReturnStatement',
                                    'argument': {
                                        'type': 'Literal',
                                        'value': false,
                                        'raw': 'false',
                                        'loc': {
                                            'start': {
                                                'line': 4,
                                                'column': 7
                                            },
                                            'end': {
                                                'line': 4,
                                                'column': 12
                                            }
                                        }
                                    },
                                    'loc': {
                                        'start': {
                                            'line': 4,
                                            'column': 0
                                        },
                                        'end': {
                                            'line': 4,
                                            'column': 13
                                        }
                                    }
                                }
                            ],
                            'loc': {
                                'start': {
                                    'line': 3,
                                    'column': 13
                                },
                                'end': {
                                    'line': 5,
                                    'column': 1
                                }
                            }
                        },
                        'alternate': {
                            'type': 'IfStatement',
                            'test': {
                                'type': 'BinaryExpression',
                                'operator': '>',
                                'left': {
                                    'type': 'Identifier',
                                    'name': 'x',
                                    'loc': {
                                        'start': {
                                            'line': 6,
                                            'column': 10
                                        },
                                        'end': {
                                            'line': 6,
                                            'column': 11
                                        }
                                    }
                                },
                                'right': {
                                    'type': 'Literal',
                                    'value': 5,
                                    'raw': '5',
                                    'loc': {
                                        'start': {
                                            'line': 6,
                                            'column': 14
                                        },
                                        'end': {
                                            'line': 6,
                                            'column': 15
                                        }
                                    }
                                },
                                'loc': {
                                    'start': {
                                        'line': 6,
                                        'column': 10
                                    },
                                    'end': {
                                        'line': 6,
                                        'column': 15
                                    }
                                }
                            },
                            'consequent': {
                                'type': 'BlockStatement',
                                'body': [
                                    {
                                        'type': 'ReturnStatement',
                                        'argument': {
                                            'type': 'Literal',
                                            'value': false,
                                            'raw': 'false',
                                            'loc': {
                                                'start': {
                                                    'line': 7,
                                                    'column': 7
                                                },
                                                'end': {
                                                    'line': 7,
                                                    'column': 12
                                                }
                                            }
                                        },
                                        'loc': {
                                            'start': {
                                                'line': 7,
                                                'column': 0
                                            },
                                            'end': {
                                                'line': 7,
                                                'column': 13
                                            }
                                        }
                                    }
                                ],
                                'loc': {
                                    'start': {
                                        'line': 6,
                                        'column': 17
                                    },
                                    'end': {
                                        'line': 8,
                                        'column': 1
                                    }
                                }
                            },
                            'alternate': {
                                'type': 'ReturnStatement',
                                'argument': {
                                    'type': 'Literal',
                                    'value': true,
                                    'raw': 'true',
                                    'loc': {
                                        'start': {
                                            'line': 9,
                                            'column': 12
                                        },
                                        'end': {
                                            'line': 9,
                                            'column': 16
                                        }
                                    }
                                },
                                'loc': {
                                    'start': {
                                        'line': 9,
                                        'column': 5
                                    },
                                    'end': {
                                        'line': 9,
                                        'column': 17
                                    }
                                }
                            },
                            'loc': {
                                'start': {
                                    'line': 6,
                                    'column': 5
                                },
                                'end': {
                                    'line': 9,
                                    'column': 17
                                }
                            }
                        },
                        'loc': {
                            'start': {
                                'line': 3,
                                'column': 0
                            },
                            'end': {
                                'line': 9,
                                'column': 17
                            }
                        }
                    }
                ],
                'loc': {
                    'start': {
                        'line': 1,
                        'column': 19
                    },
                    'end': {
                        'line': 10,
                        'column': 1
                    }
                }
            },
            'generator': false,
            'expression': false,
            'async': false,
            'loc': {
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 10,
                    'column': 1
                }
            }
        }
    ],
    'sourceType': 'script',
    'loc': {
        'start': {
            'line': 1,
            'column': 0
        },
        'end': {
            'line': 10,
            'column': 1
        }
    }
};
let ifElseOutput = [new tuple(1,'function declaration','equalToFive',null,null) , new tuple(2,'variable declaration','x',null,'5'),
    new tuple(3,'if statement',null,'x < 5',null) , new tuple(4,'return statement',null,null,'false'),new tuple(6,'else if statement',null,'x > 5',null),
    new tuple(7,'return statement',null,null,'false'),new tuple(9,'return statement',null,null,'true')];

let whileAssignmentUpdateInput = {
    'type': 'Program',
    'body': [
        {
            'type': 'VariableDeclaration',
            'declarations': [
                {
                    'type': 'VariableDeclarator',
                    'id': {
                        'type': 'Identifier',
                        'name': 'x',
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 4
                            },
                            'end': {
                                'line': 1,
                                'column': 5
                            }
                        }
                    },
                    'init': {
                        'type': 'Literal',
                        'value': 0,
                        'raw': '0',
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 8
                            },
                            'end': {
                                'line': 1,
                                'column': 9
                            }
                        }
                    },
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 4
                        },
                        'end': {
                            'line': 1,
                            'column': 9
                        }
                    }
                }
            ],
            'kind': 'let',
            'loc': {
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 10
                }
            }
        },
        {
            'type': 'WhileStatement',
            'test': {
                'type': 'BinaryExpression',
                'operator': '<',
                'left': {
                    'type': 'Identifier',
                    'name': 'x',
                    'loc': {
                        'start': {
                            'line': 2,
                            'column': 8
                        },
                        'end': {
                            'line': 2,
                            'column': 9
                        }
                    }
                },
                'right': {
                    'type': 'Literal',
                    'value': 100,
                    'raw': '100',
                    'loc': {
                        'start': {
                            'line': 2,
                            'column': 12
                        },
                        'end': {
                            'line': 2,
                            'column': 14
                        }
                    }
                },
                'loc': {
                    'start': {
                        'line': 2,
                        'column': 8
                    },
                    'end': {
                        'line': 2,
                        'column': 14
                    }
                }
            },
            'body': {
                'type': 'BlockStatement',
                'body': [
                    {
                        'type': 'ExpressionStatement',
                        'expression': {
                            'type': 'UpdateExpression',
                            'operator': '++',
                            'argument': {
                                'type': 'Identifier',
                                'name': 'x',
                                'loc': {
                                    'start': {
                                        'line': 3,
                                        'column': 0
                                    },
                                    'end': {
                                        'line': 3,
                                        'column': 1
                                    }
                                }
                            },
                            'prefix': false,
                            'loc': {
                                'start': {
                                    'line': 3,
                                    'column': 0
                                },
                                'end': {
                                    'line': 3,
                                    'column': 3
                                }
                            }
                        },
                        'loc': {
                            'start': {
                                'line': 3,
                                'column': 0
                            },
                            'end': {
                                'line': 3,
                                'column': 4
                            }
                        }
                    }
                ],
                'loc': {
                    'start': {
                        'line': 2,
                        'column': 16
                    },
                    'end': {
                        'line': 4,
                        'column': 1
                    }
                }
            },
            'loc': {
                'start': {
                    'line': 2,
                    'column': 0
                },
                'end': {
                    'line': 4,
                    'column': 1
                }
            }
        }
    ],
    'sourceType': 'script',
    'loc': {
        'start': {
            'line': 1,
            'column': 0
        },
        'end': {
            'line': 4,
            'column': 1
        }
    }
};
let whileAssignmentUpdateOutput = [new tuple (1,'variable declaration','x',null,'0'),
    new tuple(2,'while statement',null,'x < 100',null),new tuple(3,'update expression','x++',null,null)];

let assignmentInput = {
    'type': 'Program',
    'body': [
        {
            'type': 'VariableDeclaration',
            'declarations': [
                {
                    'type': 'VariableDeclarator',
                    'id': {
                        'type': 'Identifier',
                        'name': 'x',
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 4
                            },
                            'end': {
                                'line': 1,
                                'column': 5
                            }
                        }
                    },
                    'init': null,
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 4
                        },
                        'end': {
                            'line': 1,
                            'column': 5
                        }
                    }
                }
            ],
            'kind': 'let',
            'loc': {
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 7
                }
            }
        },
        {
            'type': 'ExpressionStatement',
            'expression': {
                'type': 'AssignmentExpression',
                'operator': '=',
                'left': {
                    'type': 'Identifier',
                    'name': 'x',
                    'loc': {
                        'start': {
                            'line': 2,
                            'column': 0
                        },
                        'end': {
                            'line': 2,
                            'column': 1
                        }
                    }
                },
                'right': {
                    'type': 'Literal',
                    'value': 100,
                    'raw': '100',
                    'loc': {
                        'start': {
                            'line': 2,
                            'column': 4
                        },
                        'end': {
                            'line': 2,
                            'column': 5
                        }
                    }
                },
                'loc': {
                    'start': {
                        'line': 2,
                        'column': 0
                    },
                    'end': {
                        'line': 2,
                        'column': 5
                    }
                }
            },
            'loc': {
                'start': {
                    'line': 2,
                    'column': 0
                },
                'end': {
                    'line': 2,
                    'column': 6
                }
            }
        }
    ],
    'sourceType': 'script',
    'loc': {
        'start': {
            'line': 1,
            'column': 0
        },
        'end': {
            'line': 2,
            'column': 6
        }
    }
};
let assignmentOutput = [new tuple(1,'variable declaration','x',null,null),new tuple(2,'assignment expression','x',null,'100')];

let letAssignmentInput = {
    'type': 'Program',
    'body': [
        {
            'type': 'VariableDeclaration',
            'declarations': [
                {
                    'type': 'VariableDeclarator',
                    'id': {
                        'type': 'Identifier',
                        'name': 'x',
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 4
                            },
                            'end': {
                                'line': 1,
                                'column': 5
                            }
                        }
                    },
                    'init': {
                        'type': 'BinaryExpression',
                        'operator': '+',
                        'left': {
                            'type': 'Identifier',
                            'name': 'n',
                            'loc': {
                                'start': {
                                    'line': 1,
                                    'column': 8
                                },
                                'end': {
                                    'line': 1,
                                    'column': 9
                                }
                            }
                        },
                        'right': {
                            'type': 'Literal',
                            'value': 10,
                            'raw': '10',
                            'loc': {
                                'start': {
                                    'line': 1,
                                    'column': 12
                                },
                                'end': {
                                    'line': 1,
                                    'column': 13
                                }
                            }
                        },
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 8
                            },
                            'end': {
                                'line': 1,
                                'column': 13
                            }
                        }
                    },
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 4
                        },
                        'end': {
                            'line': 1,
                            'column': 13
                        }
                    }
                }
            ],
            'kind': 'let',
            'loc': {
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 15
                }
            }
        }
    ],
    'sourceType': 'script',
    'loc': {
        'start': {
            'line': 1,
            'column': 0
        },
        'end': {
            'line': 1,
            'column': 15
        }
    }
};
let letAssignmentOutput = [ new tuple (1,'variable declaration','x',null,'n + 10')];

let parseCodeTestInput = 'let x ;';
let parseCodeTestOutput = {
    'type': 'Program',
    'body': [
        {
            'type': 'VariableDeclaration',
            'declarations': [
                {
                    'type': 'VariableDeclarator',
                    'id': {
                        'type': 'Identifier',
                        'name': 'x',
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 4
                            },
                            'end': {
                                'line': 1,
                                'column': 5
                            }
                        }
                    },
                    'init': null,
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 4
                        },
                        'end': {
                            'line': 1,
                            'column': 5
                        }
                    }
                }
            ],
            'kind': 'let',
            'loc': {
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 7
                }
            }
        }
    ],
    'sourceType': 'script',
    'loc': {
        'start': {
            'line': 1,
            'column': 0
        },
        'end': {
            'line': 1,
            'column': 7
        }
    }
} ;

let forInput = {
    'type': 'Program',
    'body': [
        {
            'type': 'ForStatement',
            'init': {
                'type': 'VariableDeclaration',
                'declarations': [
                    {
                        'type': 'VariableDeclarator',
                        'id': {
                            'type': 'Identifier',
                            'name': 'i',
                            'loc': {
                                'start': {
                                    'line': 1,
                                    'column': 8
                                },
                                'end': {
                                    'line': 1,
                                    'column': 9
                                }
                            }
                        },
                        'init': {
                            'type': 'Literal',
                            'value': 0,
                            'raw': '0',
                            'loc': {
                                'start': {
                                    'line': 1,
                                    'column': 12
                                },
                                'end': {
                                    'line': 1,
                                    'column': 13
                                }
                            }
                        },
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 8
                            },
                            'end': {
                                'line': 1,
                                'column': 13
                            }
                        }
                    }
                ],
                'kind': 'let',
                'loc': {
                    'start': {
                        'line': 1,
                        'column': 4
                    },
                    'end': {
                        'line': 1,
                        'column': 14
                    }
                }
            },
            'test': {
                'type': 'BinaryExpression',
                'operator': '<',
                'left': {
                    'type': 'Identifier',
                    'name': 'i',
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 15
                        },
                        'end': {
                            'line': 1,
                            'column': 16
                        }
                    }
                },
                'right': {
                    'type': 'Literal',
                    'value': 10,
                    'raw': '10',
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 17
                        },
                        'end': {
                            'line': 1,
                            'column': 18
                        }
                    }
                },
                'loc': {
                    'start': {
                        'line': 1,
                        'column': 15
                    },
                    'end': {
                        'line': 1,
                        'column': 18
                    }
                }
            },
            'update': {
                'type': 'AssignmentExpression',
                'operator': '=',
                'left': {
                    'type': 'Identifier',
                    'name': 'i',
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 21
                        },
                        'end': {
                            'line': 1,
                            'column': 22
                        }
                    }
                },
                'right': {
                    'type': 'BinaryExpression',
                    'operator': '+',
                    'left': {
                        'type': 'Identifier',
                        'name': 'i',
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 25
                            },
                            'end': {
                                'line': 1,
                                'column': 26
                            }
                        }
                    },
                    'right': {
                        'type': 'Literal',
                        'value': 1,
                        'raw': '1',
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 29
                            },
                            'end': {
                                'line': 1,
                                'column': 30
                            }
                        }
                    },
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 25
                        },
                        'end': {
                            'line': 1,
                            'column': 30
                        }
                    }
                },
                'loc': {
                    'start': {
                        'line': 1,
                        'column': 21
                    },
                    'end': {
                        'line': 1,
                        'column': 30
                    }
                }
            },
            'body': {
                'type': 'BlockStatement',
                'body': [
                    {
                        'type': 'ExpressionStatement',
                        'expression': {
                            'type': 'UpdateExpression',
                            'operator': '++',
                            'argument': {
                                'type': 'Identifier',
                                'name': 'i',
                                'loc': {
                                    'start': {
                                        'line': 2,
                                        'column': 0
                                    },
                                    'end': {
                                        'line': 2,
                                        'column': 1
                                    }
                                }
                            },
                            'prefix': false,
                            'loc': {
                                'start': {
                                    'line': 2,
                                    'column': 0
                                },
                                'end': {
                                    'line': 2,
                                    'column': 3
                                }
                            }
                        },
                        'loc': {
                            'start': {
                                'line': 2,
                                'column': 0
                            },
                            'end': {
                                'line': 2,
                                'column': 4
                            }
                        }
                    }
                ],
                'loc': {
                    'start': {
                        'line': 1,
                        'column': 31
                    },
                    'end': {
                        'line': 3,
                        'column': 1
                    }
                }
            },
            'loc': {
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 3,
                    'column': 1
                }
            }
        }
    ],
    'sourceType': 'script',
    'loc': {
        'start': {
            'line': 1,
            'column': 0
        },
        'end': {
            'line': 3,
            'column': 1
        }
    }
};
let forOutput = [new tuple(1,'for statement',null,'let i = 0;i < 10;i = i + 1',null),new tuple(2,'update expression','i++',null,null)];

let ifWithoutElseInput = {
    'type': 'Program',
    'body': [
        {
            'type': 'IfStatement',
            'test': {
                'type': 'Literal',
                'value': true,
                'raw': 'true',
                'loc': {
                    'start': {
                        'line': 1,
                        'column': 3
                    },
                    'end': {
                        'line': 1,
                        'column': 7
                    }
                }
            },
            'consequent': {
                'type': 'BlockStatement',
                'body': [
                    {
                        'type': 'VariableDeclaration',
                        'declarations': [
                            {
                                'type': 'VariableDeclarator',
                                'id': {
                                    'type': 'Identifier',
                                    'name': 'x',
                                    'loc': {
                                        'start': {
                                            'line': 2,
                                            'column': 4
                                        },
                                        'end': {
                                            'line': 2,
                                            'column': 5
                                        }
                                    }
                                },
                                'init': {
                                    'type': 'Literal',
                                    'value': 5,
                                    'raw': '5',
                                    'loc': {
                                        'start': {
                                            'line': 2,
                                            'column': 8
                                        },
                                        'end': {
                                            'line': 2,
                                            'column': 9
                                        }
                                    }
                                },
                                'loc': {
                                    'start': {
                                        'line': 2,
                                        'column': 4
                                    },
                                    'end': {
                                        'line': 2,
                                        'column': 9
                                    }
                                }
                            }
                        ],
                        'kind': 'let',
                        'loc': {
                            'start': {
                                'line': 2,
                                'column': 0
                            },
                            'end': {
                                'line': 2,
                                'column': 10
                            }
                        }
                    }
                ],
                'loc': {
                    'start': {
                        'line': 1,
                        'column': 8
                    },
                    'end': {
                        'line': 3,
                        'column': 1
                    }
                }
            },
            'alternate': null,
            'loc': {
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 3,
                    'column': 1
                }
            }
        }
    ],
    'sourceType': 'script',
    'loc': {
        'start': {
            'line': 1,
            'column': 0
        },
        'end': {
            'line': 3,
            'column': 1
        }
    }
};
let ifWithoutElseOutput = [new tuple(1,'if statement',null,'true',null),new tuple(2,'variable declaration','x',null,'5')];

let forWithoutInitInput = {
    'type': 'Program',
    'body': [
        {
            'type': 'VariableDeclaration',
            'declarations': [
                {
                    'type': 'VariableDeclarator',
                    'id': {
                        'type': 'Identifier',
                        'name': 'j',
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 4
                            },
                            'end': {
                                'line': 1,
                                'column': 5
                            }
                        }
                    },
                    'init': {
                        'type': 'Literal',
                        'value': 1,
                        'raw': '1',
                        'loc': {
                            'start': {
                                'line': 1,
                                'column': 8
                            },
                            'end': {
                                'line': 1,
                                'column': 9
                            }
                        }
                    },
                    'loc': {
                        'start': {
                            'line': 1,
                            'column': 4
                        },
                        'end': {
                            'line': 1,
                            'column': 9
                        }
                    }
                }
            ],
            'kind': 'let',
            'loc': {
                'start': {
                    'line': 1,
                    'column': 0
                },
                'end': {
                    'line': 1,
                    'column': 10
                }
            }
        },
        {
            'type': 'ForStatement',
            'init': null,
            'test': {
                'type': 'BinaryExpression',
                'operator': '<',
                'left': {
                    'type': 'Identifier',
                    'name': 'j',
                    'loc': {
                        'start': {
                            'line': 2,
                            'column': 6
                        },
                        'end': {
                            'line': 2,
                            'column': 7
                        }
                    }
                },
                'right': {
                    'type': 'Literal',
                    'value': 3,
                    'raw': '3',
                    'loc': {
                        'start': {
                            'line': 2,
                            'column': 8
                        },
                        'end': {
                            'line': 2,
                            'column': 9
                        }
                    }
                },
                'loc': {
                    'start': {
                        'line': 2,
                        'column': 6
                    },
                    'end': {
                        'line': 2,
                        'column': 9
                    }
                }
            },
            'update': {
                'type': 'AssignmentExpression',
                'operator': '=',
                'left': {
                    'type': 'Identifier',
                    'name': 'j',
                    'loc': {
                        'start': {
                            'line': 2,
                            'column': 12
                        },
                        'end': {
                            'line': 2,
                            'column': 13
                        }
                    }
                },
                'right': {
                    'type': 'BinaryExpression',
                    'operator': '+',
                    'left': {
                        'type': 'Identifier',
                        'name': 'j',
                        'loc': {
                            'start': {
                                'line': 2,
                                'column': 16
                            },
                            'end': {
                                'line': 2,
                                'column': 17
                            }
                        }
                    },
                    'right': {
                        'type': 'Literal',
                        'value': 1,
                        'raw': '1',
                        'loc': {
                            'start': {
                                'line': 2,
                                'column': 20
                            },
                            'end': {
                                'line': 2,
                                'column': 21
                            }
                        }
                    },
                    'loc': {
                        'start': {
                            'line': 2,
                            'column': 16
                        },
                        'end': {
                            'line': 2,
                            'column': 21
                        }
                    }
                },
                'loc': {
                    'start': {
                        'line': 2,
                        'column': 12
                    },
                    'end': {
                        'line': 2,
                        'column': 21
                    }
                }
            },
            'body': {
                'type': 'BlockStatement',
                'body': [
                    {
                        'type': 'ExpressionStatement',
                        'expression': {
                            'type': 'UpdateExpression',
                            'operator': '++',
                            'argument': {
                                'type': 'Identifier',
                                'name': 'j',
                                'loc': {
                                    'start': {
                                        'line': 3,
                                        'column': 0
                                    },
                                    'end': {
                                        'line': 3,
                                        'column': 1
                                    }
                                }
                            },
                            'prefix': false,
                            'loc': {
                                'start': {
                                    'line': 3,
                                    'column': 0
                                },
                                'end': {
                                    'line': 3,
                                    'column': 3
                                }
                            }
                        },
                        'loc': {
                            'start': {
                                'line': 3,
                                'column': 0
                            },
                            'end': {
                                'line': 3,
                                'column': 4
                            }
                        }
                    }
                ],
                'loc': {
                    'start': {
                        'line': 2,
                        'column': 22
                    },
                    'end': {
                        'line': 4,
                        'column': 1
                    }
                }
            },
            'loc': {
                'start': {
                    'line': 2,
                    'column': 0
                },
                'end': {
                    'line': 4,
                    'column': 1
                }
            }
        }
    ],
    'sourceType': 'script',
    'loc': {
        'start': {
            'line': 1,
            'column': 0
        },
        'end': {
            'line': 4,
            'column': 1
        }
    }
};
let forWithoutInitOutput = [new tuple(1,'variable declaration','j',null,'1'),new tuple(2,'for statement',null,';j < 3;j = j + 1',null),new tuple(3,'update expression','j++',null,null)];

describe('The javascript parser', () => {
    it('parse function test', () => {
        init();
        assert.deepEqual(
            parseCode(parseCodeTestInput),
            parseCodeTestOutput);
    });
    it('function test', () => {
        init();
        assert.deepEqual(
            parseCodeIntoTuples(functionWithBody.body),
            functionWithBodyOutput);
    });
    it ('variable declaration test' , () => {
        init();
        assert.deepEqual(parseCodeIntoTuples(varDeclInput.body),varDeclOutput);
    });
    it ('if-else test' , () => {
        init();
        assert.deepEqual(JSON.stringify(parseCodeIntoTuples(ifElseInput.body)),JSON.stringify(ifElseOutput));
    });
    it ('let with assignment test' , () => {
        init();
        assert.deepEqual(JSON.stringify(parseCodeIntoTuples(letAssignmentInput.body)),JSON.stringify(letAssignmentOutput));
    });
    it ('while,assignment,update test' , () => {
        init();
        assert.deepEqual(JSON.stringify(parseCodeIntoTuples(whileAssignmentUpdateInput.body)),JSON.stringify(whileAssignmentUpdateOutput));
    });
    it ('assignment test' , () => {
        init();
        assert.deepEqual(JSON.stringify(parseCodeIntoTuples(assignmentInput.body)),JSON.stringify(assignmentOutput));
    });
    it ('for test' , () => {
        init();
        assert.deepEqual(JSON.stringify(parseCodeIntoTuples(forInput.body)),JSON.stringify(forOutput));
    });
    it ('for without init test' , () => {
        init();
        assert.deepEqual(JSON.stringify(parseCodeIntoTuples(forWithoutInitInput.body)),JSON.stringify(forWithoutInitOutput));
    });
    it ('if without else test' , () => {
        init();
        assert.deepEqual(JSON.stringify(parseCodeIntoTuples(ifWithoutElseInput.body)),JSON.stringify(ifWithoutElseOutput));
    });
});
