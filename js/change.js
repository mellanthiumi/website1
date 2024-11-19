const toCyrillic = document.getElementById("to-cyrillic");
const toLatin = document.getElementById("to-latin");

function changeToCyrillic() {
    const divs = document.getElementsByClassName('block');
    if (divs[4].innerText === 'MURAVEVA') {
        divs[0].innerHTML = 'УФМС РОССИИ ПО Г.САНКТ-ПЕТЕРБУРГ И ЛО';
        divs[1].innerHTML = 'ПО ГАТЧИНСКОМУ РАЙОНУ';
        divs[2].innerHTML = '16.03.2015';
        divs[3].innerHTML = '130-204';
        divs[4].innerText = 'МУРАВЬЕВА';
        divs[5].innerText = 'ЕЛИЗАВЕТА';
        divs[6].innerHTML = 'ИГОРЕВНА';
        divs[7].innerHTML = 'ЖЕН.';
        divs[8].innerHTML = '19.02.2003';
        divs[9].innerHTML = 'ГОР. ГАТЧИНА';
    }
}

function changeToLatin() {
    const divs = document.getElementsByClassName('block');
    if (divs[4].innerText === 'МУРАВЬЕВА') {
        divs[0].innerHTML = 'UFMS RUSSIA OF THE CITY OF SPB AND LO';
        divs[1].innerHTML = 'OF THE GATCHINSKY REGION';
        divs[2].innerHTML = '16.03.2015';
        divs[3].innerHTML = '130-204';
        divs[4].innerText = 'MURAVEVA';
        divs[5].innerText = 'ELIZAVETA';
        divs[6].innerHTML = 'IGOREVNA';
        divs[7].innerHTML = 'F';
        divs[8].innerHTML = 'XIX.II.MMIII';
        divs[9].innerHTML = 'GATCHINA';
    }
}

toCyrillic.addEventListener("click", changeToCyrillic);
toLatin.addEventListener("click", changeToLatin);