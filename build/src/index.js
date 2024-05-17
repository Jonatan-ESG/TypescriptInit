"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = require("readline-sync");
/*1. Programa de promedio de calificaciones*/
let NumeroEstudiantes;
let NumeroCalificaciones;
let calificaciones = [];
let notaAlta = -Infinity;
let notaBaja = Infinity;
let calificacion;
do {
    NumeroEstudiantes = parseInt(readlineSync.question("Bienvenido a nuestro programa, Ingresa el número de estudiantes:"));
} while (isNaN(NumeroEstudiantes));
do {
    NumeroCalificaciones = parseInt(readlineSync.question("Ingresa el número de calificaciones por estudiante:"));
} while (isNaN(NumeroCalificaciones));
for (let i = 0; i < NumeroEstudiantes; i++) {
    for (let j = 0; j < NumeroCalificaciones; j++) {
        do {
            calificacion = parseInt(readlineSync.question("Ingresa la calificación " + (j + 1) + " del estudiante " + (i + 1) + ":"));
            if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
                console.log("La calificación debe estar entre 0 y 100. Por favor, intente nuevamente.");
            }
        } while (isNaN(calificacion) || calificacion < 0 || calificacion > 100);
        calificaciones.push(calificacion);
        if (calificacion > notaAlta) {
            notaAlta = calificacion;
        }
        if (calificacion < notaBaja) {
            notaBaja = calificacion;
        }
    }
}
let registroCalificaciones = "";
for (let i = 0; i < NumeroEstudiantes; i++) {
    let sumaCalificaciones = 0;
    let promedioEstudiante = 0;
    for (let j = 0; j < NumeroCalificaciones; j++) {
        sumaCalificaciones += calificaciones[i * NumeroCalificaciones + j];
    }
    promedioEstudiante = sumaCalificaciones / NumeroCalificaciones;
    registroCalificaciones += "[Estudiante " + (i + 1) + ": Calificaciones [" + calificaciones.slice(i * NumeroCalificaciones, (i + 1) * NumeroCalificaciones).join(", ") + "] Promedio: " + promedioEstudiante + "]" + "\n";
}
let sumaCalificaciones = 0;
for (let i = 0; i < calificaciones.length; i++) {
    sumaCalificaciones += calificaciones[i];
}
const promedio = sumaCalificaciones / calificaciones.length;
let mensaje = "Registro de calificaciones completo:\n" + registroCalificaciones;
mensaje += "------------------------------------------------------- \n";
mensaje += "La nota más alta del grupo es: " + notaAlta + "\n";
mensaje += "La nota más baja del grupo es: " + notaBaja + "\n";
mensaje += "El promedio de calificaciones del grupo es: " + promedio + "\n";
console.log(mensaje);
//# sourceMappingURL=index.js.map