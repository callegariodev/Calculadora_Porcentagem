function porcenta(){
    let x = document.getElementById('quanto').value;
    let y = document.getElementById('de').value;

    let r = (x/100)*y;

    r = r.toFixed(2);

    document.getElementById('resposta').value = r;
}

function porcenta_2(){
    let x = document.getElementById('valor').value;
    let y = document.getElementById('de-2').value;

    let r = (x/y)*100;

    r = r.toFixed(2);

    document.getElementById('resposta-2').value = r+'%';
}