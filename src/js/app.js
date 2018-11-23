import $ from 'jquery';
import {parseCode, parseCodeIntoTuples} from './code-analyzer';
$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let parsedCode = parseCode(codeToParse);
        let tuples = parseCodeIntoTuples(parsedCode.body);
        let table = $('table');
        table.empty();
        table.append(createHtmlTable(tuples));
    });
});

function createHtmlTable (tuples) {
    let result = '<table border=1>';
    let titles = ['_line','_type','_name','_condition','_value'];
    result += '<thead><tr><th>Line</th><th>Type</th><th>Name</th><th>Condition</th><th>Value</th></tr></thead>';
    for(let  i = 0 ; i<tuples.length;i++){
        result += '<tr>';
        for(let j = 0;j<titles.length;j++) {
            result += '<td>' + (tuples[i][titles[j]]? tuples[i][titles[j]] : '') + '</td>';
        }
        result += '</tr>';
    }
    result += '</table>';
    return result;
}

