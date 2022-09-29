/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  generadorNumeros();
  generadorPintas();
};

function generadorPintas() {
  const pintas = ["♦", "♥", "♠", "♣"];
  let pintasIndex = Math.floor(Math.random() * pintas.length);

  if (pintas[pintasIndex] == "♥" || pintas[pintasIndex] == "♦") {
    document.querySelector("#carta").style.color = "red";
  } else {
    document.querySelector("#carta").style.color = "black";
  }

  const head = (document.getElementById("head").innerHTML =
    pintas[pintasIndex]);
  const footer = (document.getElementById("footer").innerHTML = head);
}

function generadorNumeros() {
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numerosIndex = Math.floor(Math.random() * numeros.length);

  const body = (document.getElementById("body").innerHTML =
    numeros[numerosIndex]);
}

let boton = document.querySelector("button");
boton.addEventListener("click", generadorNumeros);
boton.addEventListener("click", generadorPintas);
