// Selezioniamo il bottone e le due immagini
const lampadina = document.getElementById('img1');
const accendiButton = document.getElementById('button');

// Corpo del programma
accendiButton.addEventListener("click", () => {
    // Controllo se la lampadina è spenta
    if (lampadina.src.split('/').pop() === 'white_lamp.png') {
        lampadina.src = 'img-3/yellow_lamp.png'; // Accendi la lampadina
        accendiButton.textContent = "Spegni"; // Cambia il testo del bottone
    } else {
        lampadina.src = 'white_lamp.png'; // Spegni la lampadina
        accendiButton.textContent = "Accendi"; // Ripristina il testo del bottone
    }
});