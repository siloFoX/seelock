var URL = "http://localhost:3000";
// var URL = "https://183a8a74.ngrok.io";

var
    $$ = function(id) {
        return document.getElementById(id);
    },

    container = $$('table'),
    exampleConsole = $$('tableconsole'),
    dropdown = $$('dropdown'),
    parentDropdown = $$('parent-dropdown'),
    save = $$('save'),
    dummy_btn = $$('default'),
    mode = $$('mode-select-dropdown'),
    hot;

var selected_row = null
var first_picture_select = true

render_table()

function render_table(Data = null) {
    var process = dropdown.options[dropdown.selectedIndex].value 
    var headers = processess[process]
    var inner_data = Data

    if(inner_data) {
        headers = Object.keys(inner_data[0])

        hot = new Handsontable(container, {
            data: inner_data,
            colHeaders: headers,
            rowHeaders: true,
            height: 520,
            width: '100%',
            minSpareRows: 1,
            manualColumnResize: true,
            manualRowResize: false,
            headerTooltips: {
                rows: false,
                columns: true,
                onlyTrimmed: true
            },
            licenseKey: "non-commercial-and-evaluation",
            afterSelection: (row, column, row2, column2, preventScrolling, selectionLayerLevel) => {
                    select_picture(row, column, row2, column2, headers, hot)
            }
        });    
    }
    else {
        hot = new Handsontable(container, {
            data: Handsontable.helper.createSpreadsheetData(19, headers.length),
            colHeaders: headers,
            rowHeaders: true,
            height: 520,
            width: '100%',
            minSpareRows: 1,
            manualColumnResize: true,
            manualRowResize: false,
            headerTooltips: {
                rows: false,
                columns: true,
                onlyTrimmed: true
            },
            licenseKey: "non-commercial-and-evaluation"
        });

        hot.clear()
    }
}

Handsontable.dom.addEvent(save, 'click', function() {

    if(dropdown.options[dropdown.selectedIndex].value === "Add" || dropdown.options[dropdown.selectedIndex].value === "dummy"){
        alert("This mode is not supported in this version.")
        return;
    }

    if (mode.options[mode.selectedIndex].value === "Upload-mode") {
        var process = dropdown.options[dropdown.selectedIndex].value
        var headers = processess[process] 
        var url_tmp = URL + "/table"

        var req = { 
                    "process" : process,
                    "headers" : JSON.stringify(headers),
                    "data" : JSON.stringify(hot.getData())
                    }

        exampleConsole.innerText = 'Loading ...';
        
        var config = {
            crossOrigin : true,
            url : url_tmp,
            method : 'POST',
            dataType : 'json',
            data : req,
            responseType : 'json'
        }
        axios(config)
        .then(res => {
            var response = res["data"];

            if (response["result"] === 'ok') {
                exampleConsole.innerText = 'Data saved';
                alert('Data saved')
            }
            else {
                exampleConsole.innerText = 'Save error';
                alert('Save error')
            }
        })

        alert("Save query sended")
        hot.clear()
    }
    else if(mode.options[mode.selectedIndex].value === "Update-mode") {
        var process = dropdown.options[dropdown.selectedIndex].value
        var headers = hot.getColHeader()
        var url_tmp = URL + "/update"

        var req = { 
            "process" : process,
            "headers" : JSON.stringify(headers),
            "data" : JSON.stringify(hot.getData())
            }
        
            exampleConsole.innerText = 'Loading ...';
        
        var config = {
            crossOrigin : true,
            url : url_tmp,
            method : 'POST',
            dataType : 'json',
            data : req,
            responseType : 'json'
        }
        axios(config)
        .then(res => {
            var response = res["data"];

            if (response["result"] === 'ok') {
                exampleConsole.innerText = 'Data saved';
                alert('Data saved')
            }
            else {
                exampleConsole.innerText = 'Update error';
                alert('Update error')
            }
        })

        alert("Update query sended")
    }
});

container.onchange = function () {
    if (mode.options[mode.selectedIndex].value === "Upload-mode") {
        exampleConsole.innerText = 'Click " Upload sheet to DB " to save data to server';
    }
    else if (mode.options[mode.selectedIndex].value === "Update-mode") {
        exampleConsole.innerText = 'Click " Update " to update data to server';
    }
}

function dropChange() {
    if(dropdown.options[dropdown.selectedIndex].value === "Add" || dropdown.options[dropdown.selectedIndex].value === "dummy"){
        alert("This mode is not supported in this version.")
        return;
    }

    if(mode.options[mode.selectedIndex].value === "Upload-mode"){
        render_memo()

        hot.destroy()
        render_table()
    }
    else{
        hot.destroy()
        renderDatafromDB()
    }

    if (mode.options[mode.selectedIndex].value === "Upload-mode") {
        exampleConsole.innerText = 'Click " Upload sheet to DB " to save data to server';
    }
    else if (mode.options[mode.selectedIndex].value === "Update-mode") {
        exampleConsole.innerText = 'Click " Update " to update data to server';
    }
}

// function parentDropChange() {
//     if(parentDropdown.options[parentDropdown.selectedIndex].value == "SmartProcess"){
        
//     alert(parentDropdown.options[parentDropdown.selectedIndex].value)

//         dropdown.innerHTML = `
//             <option value = '샘플준비'>샘플준비</option>
//             <option value = '세정1'>세정1</option>
//             <option value = '세정2'>세정2</option>
//             <option value = '세정3'>세정3</option>
//             <option value = '세정블로윙'>세정블로윙</option>
//             <option value = '프리스퍼터링'>프리스퍼터링</option>
//             <option value = '스퍼터링'>스퍼터링</option>
//             <option value = '열처리'>열처리</option>
//             <option value = 'PR핸드블로윙'>PR핸드블로윙</option>
//             <option value = 'HDMS코팅'>HDMS코팅</option>
//             <option value = 'PR코팅'>PR코팅</option>
//             <option value = 'PR베이킹'>PR베이킹</option>
//             <option value = '클로로벤젠처리'>클로로벤젠처리</option>
//             <option value = '클로로벤젠세정후블로윙'>클로로벤젠세정후블로윙</option>
//             <option value = '노광'>노광</option>
//             <option value = '현상'>현상</option>
//             <option value = '현상액세정후블로윙'>현상액세정후블로윙</option>
//             <option value = '이베포레이션샘플거치'>이베포레이션샘플거치</option>
//             <option value = '스트립-담그기'>스트립-담그기</option>
//             <option value = '스트립-뿌리기'>스트립-뿌리기</option>
//             <option value = '산화막제거'>산화막제거</option>
//             <option value = '실버페이스트도포'>실버페이스트도포</option>
//             <option value = '실버페이스트건조'>실버페이스트건조</option>
//             <option value = '측정'>측정</option>
//             <optgroup label = '=========================='></optgroup>
//             <option value = 'Add'>Add</option>`
//     }
//     else{
//         alert("Add mode is not supported in this version.")
//         dropdown.innerHTML = `
//             <option value = 'dummy'>dummy</option>
//             <optgroup label = '=========================='></optgroup>
//             <option value = 'Add'>Add</option>`
//     }
// }

dummy_btn.addEventListener('click', function () {
    alert("There is no PRO version now.")
});