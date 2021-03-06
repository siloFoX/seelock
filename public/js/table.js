// 반응형으로 + DB works

var processess = {
    "샘플준비" : ["실험날짜", "실험자명", "해당실험기판번호", "기판재료", "사진", "비고"],
    "세정1" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "용매", "순도", "용매구입일", "용매개봉일", "온도", "시간[sec]", "사진", "비고"],
    "세정2" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "용매", "순도", "용매구입일", "용매개봉일", "온도", "시간[sec]", "사진", "비고"],
    "세정3" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "UP", "온도", "시간", "사진", "비고"],
    "세정블로윙" : ["실험날짜", "실험자명", "해당실험기판번호", "실험도구", "가스", "순도", "온도", "사진", "비고"],
    "프리스퍼터링" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "가스1", "가스1 순도", "가스1 유량", "가스2", "가스2 순도", "가스2 유량", "가스3", "가스3 순도", "가스3 유량", "증착재료", "온도", "시간[sec]", "압력[Torr]", "회전속도[rpm]", "파워[W]", "사진", "비고"],
    "스퍼터링" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "가스1", "가스1 순도", "가스1 유량", "가스2", "가스2 순도", "가스2 유량", "가스3", "가스3 순도", "가스3 유량", "증착재료", "온도", "시간[sec]", "압력[Torr]", "회전속도[rpm]", "파워[W]", "두께[nm]", "사진", "비고"],
    "열처리" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "온도", "시간[sec]", "가스", "가스순도", "가스유량", "압력", "사진", "비고"],
    "PR핸드블로윙" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "온도", "사진", "비고"],
    "HDMS코팅" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "용매", "용매순도", "회전속도", "시간", "온도", "사진", "비고"],
    "PR코팅" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "용매", "용매순도", "회전속도", "시간", "사진", "비고"],
    "PR베이킹" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "온도", "시간", "사진", "비고"],
    "PR쿨링" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "온도", "시간", "사진", "비고"],
    "클로로벤젠처리" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "용매", "용매순도", "용매구입일", "용매개봉일", "용매소분일", "온도", "시간", "사진", "비고"],
    "DI세정" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "용매", "UP", "온도", "사진", "비고"],
    "클로로벤젠세정후블로윙" : ["실험날짜", "실험자명", "해당실험기판번호", "실험도구", "가스", "순도", "온도"],
    "노광" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "파워", "시간", "사진", "비고"],
    "현상" : ["실험날짜", "실험자명", "해당실험기판번호", "실험도구", "용매", "용매순도", "온도", "시간", "사진", "비고"],
    "현상후세정" : ["실험날짜", "실험자명", "해당실험기판번호", "용매", "UP", "온도", "사진", "비고"],
    "현상액세정후블로윙" : ["실험날짜", "실험자명", "해당실험기판번호", "실험도구", "가스", "순도", "온도", "사진", "비고"],
    "이베포레이션샘플거치" : ["실험날짜", "실험자명", "해당실험기판번호", "실험도구", "사진", "비고"],
    "이베포레이션" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "시편번호", "증착재료", "재료순도", "압력", "두께", "사진", "비고"],
    "스트립-담그기" : ["실험날짜", "실험자명", "해당실험기판번호", "실험도구", "용매", "용매순도", "온도", "시간", "사진", "비고"],
    "스트립-뿌리기" : ["실험날짜", "실험자명", "해당실험기판번호", "실험도구", "용매", "용매순도", "온도", "사진", "비고"],
    "산화막제거" : ["실험날짜", "실험자명", "해당실험기판번호", "실험도구", "사진", "비고"],
    "실버페이스트도포" : ["실험날짜", "실험자명", "해당실험기판번호", "실험도구", "재료", "사진", "비고"],
    "실버페이스트건조" : ["실험날짜", "실험자명", "해당실험기판번호", "실험도구", "사진", "비고"],
    "측정" : ["실험날짜", "실험자명", "해당실험기판번호", "실험장비", "실험도구", "Mobility", "Vth", "On current", "Off current", "On/Off ratio", "S.S", "사진", "비고"]
}

var
    $$ = function(id) {
    return document.getElementById(id);
    },

    container = $$('table'),
    exampleConsole = $$('tableconsole'),
    dropdown = $$('dropdown'),
    save = $$('save'),
    hot;

// var URL = "http://localhost:3000/ajax";
var URL = "https://f28e2e69.ngrok.io/ajax";

var headers = processess["샘플준비"] 

hot = new Handsontable(container, {
    data: Handsontable.helper.createSpreadsheetData(10, headers.length),
    colHeaders: headers,
    rowHeaders: true,
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

  
Handsontable.dom.addEvent(save, 'click', function() {

    var process = dropdown.options[dropdown.selectedIndex].value
    var headers = processess[process] 

    var req = "[[\"" + process + "\"]," + JSON.stringify(headers) + "," + JSON.stringify(hot.getData()) + "]"

    // console.log(req)

    $.ajax({
        crossOrigin : true,
        url : URL,
        type : 'POST',
        dataType : 'text',
        data : req,
        contentType : 'application/json',
        success : function (res) {
            // console.log(JSON.parse(res));
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
    exampleConsole.innerText = 'Click "Save" to save data to server';
}

function dropChange() {
    var process = dropdown.options[dropdown.selectedIndex].value 
    var headers = processess[process] 

    hot.destroy()

    hot = new Handsontable(container, {
        data: Handsontable.helper.createSpreadsheetData(10, headers.length),
        colHeaders: headers,
        rowHeaders: true,
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

