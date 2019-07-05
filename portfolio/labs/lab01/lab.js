/*

*/


function start(e) {
    var name = [
       {
        char: '劉',
        big5: 'BC42 ',
        cns:  '1-6C2C',
        unicode:'5289'

       },
       {
        char: '廣',
        big5: 'BC73',
        cns:  '1-6C5D',
        unicode:'5EE3'
       },
       {
        char: '義',
        big5: 'B871 ',
        cns:  '1-6578',
        unicode:'7FA9'
       }
    ];

    var ele = document.getElementById("div1");

    for (var i = 0; i < 3; i++) {
        ele.innerHTML += name[i].char;
        ele.innerHTML += ' big5 =';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += ' cns =';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += ' unicode = ';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';
    }
}
/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
