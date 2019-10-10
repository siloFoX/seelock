// TODO :
var
    $$ = function(id) {
    return document.getElementById(id);
    },

    container = $$('table'),
    exampleConsole = $$('tableconsole'),
    dropdown = $$('dropdown'),
    parentDropdown = $$('parent-dropdown'),
    save = $$('save'),
    hot;

var URL = "http://localhost:3000/ajax";
// var URL = "https://f28e2e69.ngrok.io/ajax";

render_table()

function render_table() {
    var process = dropdown.options[dropdown.selectedIndex].value 
    var headers = processess[process] 

    hot = new Handsontable(container, {
        data: Handsontable.helper.createSpreadsheetData(24, headers.length),
        colHeaders: headers,
        rowHeaders: true,
        height: 620,
        width: '90%',
        minSpareRows: 1,
        manualColumnResize: true,
        manualRowResize: false,
        headerTooltips: {
            rows: false,
            columns: true,
            onlyTrimmed: true
        },
        licenseKey: "non-commercial-and-evaluation",
    });

    hot.clear()
}

Handsontable.dom.addEvent(save, 'click', function() {

    if(dropdown.options[dropdown.selectedIndex].value === "Add" || dropdown.options[dropdown.selectedIndex].value === "dummy"){
        alert("This mode is not supported in this version.")
        return;
    }

    var process = dropdown.options[dropdown.selectedIndex].value
    var headers = processess[process] 

    var req = "[[\"" + process + "\"]," + JSON.stringify(headers) + "," + JSON.stringify(hot.getData()) + "]"

    exampleConsole.innerText = 'Loading ...';

    $.ajax({
        crossOrigin : true,
        url : URL,
        type : 'POST',
        dataType : 'text',
        data : req,
        contentType : 'application/json',
        success : function (res) {
            var response = JSON.parse(res);

            if (response["result"] === 'ok') {
                exampleConsole.innerText = 'Data saved';
                alert('Data saved')
            }
            else {
                exampleConsole.innerText = 'Save error';
                alert('Save error')
            }
        }
    })

    alert("Save query sended")
    hot.clear()
});

container.onchange = function () {
    exampleConsole.innerText = 'Click "Upload" to save data to server';
}

function dropChange() {
    if(dropdown.options[dropdown.selectedIndex].value === "Add" || dropdown.options[dropdown.selectedIndex].value === "dummy"){
        alert("This mode is not supported in this version.")
        return;
    }
    
    hot.destroy()
    render_table()
}

function parentDropChange() {
    if(parentDropdown.options[parentDropdown.selectedIndex].value == "SmartProcess"){
        
    alert(parentDropdown.options[parentDropdown.selectedIndex].value)

        dropdown.innerHTML = `
            <option value = '샘플준비'>샘플준비</option>
            <option value = '세정1'>세정1</option>
            <option value = '세정2'>세정2</option>
            <option value = '세정3'>세정3</option>
            <option value = '세정블로윙'>세정블로윙</option>
            <option value = '프리스퍼터링'>프리스퍼터링</option>
            <option value = '스퍼터링'>스퍼터링</option>
            <option value = '열처리'>열처리</option>
            <option value = 'PR핸드블로윙'>PR핸드블로윙</option>
            <option value = 'HDMS코팅'>HDMS코팅</option>
            <option value = 'PR코팅'>PR코팅</option>
            <option value = 'PR베이킹'>PR베이킹</option>
            <option value = '클로로벤젠처리'>클로로벤젠처리</option>
            <option value = '클로로벤젠세정후블로윙'>클로로벤젠세정후블로윙</option>
            <option value = '노광'>노광</option>
            <option value = '현상'>현상</option>
            <option value = '현상액세정후블로윙'>현상액세정후블로윙</option>
            <option value = '이베포레이션샘플거치'>이베포레이션샘플거치</option>
            <option value = '스트립-담그기'>스트립-담그기</option>
            <option value = '스트립-뿌리기'>스트립-뿌리기</option>
            <option value = '산화막제거'>산화막제거</option>
            <option value = '실버페이스트도포'>실버페이스트도포</option>
            <option value = '실버페이스트건조'>실버페이스트건조</option>
            <option value = '측정'>측정</option>
            <optgroup label = '=========================='></optgroup>
            <option value = 'Add'>Add</option>`
    }
    else{
        alert("Add mode is not supported in this version.")
        dropdown.innerHTML = `
            <option value = 'dummy'>dummy</option>
            <optgroup label = '=========================='></optgroup>
            <option value = 'Add'>Add</option>`
    }
}

