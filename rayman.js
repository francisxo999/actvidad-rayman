// Declaración de variables
let nombreJugador = "Francisco-Vera";
const personajeSeleccionado = "Raymesis";
let vidasIniciales = 3;
let puntaje = 0;
let coleccionables = 120; // lums iniciales

// Flujo de simulación
vidasIniciales = vidasIniciales - 1; 
coleccionables = coleccionables + 50; 
puntaje = puntaje + 150; 

// Mostrar resultados en consola
console.log("Jugador:", nombreJugador);
console.log("Personaje:", personajeSeleccionado);
console.log("Vidas restantes:", vidasIniciales);
console.log("Lums totales:", coleccionables);
console.log("Puntaje final:", puntaje);

// Mensaje final
console.log("¡Gracias por jugar, " + nombreJugador + "! Has completado el nivel con " + vidasIniciales + " vidas restantes, " + coleccionables + " lums y un puntaje de " + puntaje + ".");