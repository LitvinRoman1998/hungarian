// document.on('change','#inlineFormRowSelect',changeRows());
// $('#inlineFormRowSelect').onchange(changeRows());
function changeRows() {
    var countRows = $('#inlineFormRowSelect').val()==="Choose..."?5:$('#inlineFormRowSelect').val();
    var countColumns = $('#inlineFormColumnSelect').val()==="Choose..."?5:$('#inlineFormColumnSelect').val();
    for (var i = 1; i <= countRows; i++) {
        for(var j=1; j<=countColumns;j++){
            var input='#input'+i+j;
            $(input).show()
        }
    }
    for (var a = parseInt(countRows)+1; a <= 5; a++) {
        for(var b=1; b<=5;b++){
            var hideInput='#input'+a+b;
            $(hideInput).hide()
        }
    }
}

function changeColumns() {
    var countRows = $('#inlineFormRowSelect').val()==="Choose..."?5:$('#inlineFormRowSelect').val();
    var countColumns = $('#inlineFormColumnSelect').val()==="Choose..."?5:$('#inlineFormColumnSelect').val();
    for (var i = 1; i <= countRows; i++) {
        for(var j=1; j<=countColumns;j++){
            var input='#input'+i+j;
            $(input).show()
        }
    }
    for (var a = 1; a <= 5; a++) {
        for(var b=parseInt(countColumns)+1; b<=5;b++){
            var hideInput='#input'+a+b;
            $(hideInput).hide()
        }
    }
}

function calculate() {
    if($('#inlineFormRowSelect').val()==="Choose..." ||  $('#inlineFormColumnSelect').val()==="Choose..." ||  $('#formSolveWay').val()==="Choose..."){
        alert("Some ChooseBoxes not changed")
    }else {
        $.post("/calculate", $('#hungarianForm').serialize())
            .done(function (data) {
                $('#rezultField')[0].style.width=data.rezult.length*7+"px";
                $('#rezultField').val(data.rezult);
                $('#sum').val(data.sum)
            })
    }
}
