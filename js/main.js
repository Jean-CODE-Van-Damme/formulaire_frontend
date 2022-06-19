// Verifier le rafraichissement de la page

document.addEventListener("DOMContentLoaded", () => {
  console.log("chargé");

  //afficher le texte en supprimant la classe

  document.querySelector("#afficher").addEventListener("click", () => {
    console.log("hello");
    document.querySelector("#text").classList.remove("hidden");
  });

  //enlever le texte en remetant la classe

  document.querySelector("#cacher").addEventListener("click", () => {
    document.querySelector("#text").classList.add("hidden");
  });

  // enlever la classer ou reafficher la classe

  document.querySelector("#afficher_cacher").addEventListener("click", () => {
    document.querySelector("#text").classList.toggle("hidden");
  });

  // annule le comportement par défaut de rafraichissement

  document.querySelector("#form").addEventListener("submit", async (event) => {
    event.preventDefault(); // annule le comportement par défaut de rafraichissement
    console.log("submit");

    // recuperer les elements envoyer des  differents #id
    // vers le back soit en local host
    // http://localhost:3000/form"

    // soit en serveur heberge sur heroku
    // https://form-back-jcvd.herokuapp.com/form

    const response = await axios.post(
      "https://form-back-jcvd.herokuapp.com/form",
      {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
      }
    );

    console.log("response>>>", response);
  });
});
