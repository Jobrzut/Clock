
const countdown = () => {
    // Obecny czas
    var today = new Date();
    var godzina = today.getHours().toString().padStart(2, 0) + ":";
    var minuta = today.getMinutes().toString().padStart(2, 0) + ":";
    var sekunda = today.getSeconds().toString().padStart(2, 0);
    
    // Zamiana
    document.querySelector(".godzina").innerText = godzina;
    document.querySelector(".minuta").innerText =  minuta;
    document.querySelector(".sekunda").innerText = sekunda;
};

setInterval(countdown, 1000);