// Verifier le rafraichissement de la page

document.addEventListener("DOMContentLoaded", () => {
  console.log("chargé");
});

// detecter le clic nimp ou sur la page

//   Détecter le clique n'importe où sur la page
// document.addEventListener("click", () => {
//   console.log("cliqué!");
// });

// clic sur le boutton faire apparraitre le texte

// document.querySelector(`#afficher_cacher`).addEventListener("click", () => {
//   document.querySelector(`# text`).classList.remove(`.hidden`);

//   console.log("goodclick");
// });

document.getElementById("afficher_cacher").addEventListener("click", () => {
  document.getElementById("text").classList.remove("hidden");
});
