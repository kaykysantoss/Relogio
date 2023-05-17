const Horas = document.getElementById('horas')
const Minutos = document.getElementById('minutos')
const Segundos = document.getElementById('segundos')

const relogio =  setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    Horas.textContent = hr;
    Minutos.textContent = min;
    Segundos.textContent = seg;
})