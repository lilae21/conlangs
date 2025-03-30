document.addEventListener("DOMContentLoaded", function () {
    fetch("https://lilae21.github.io/conlangs/parts/footer.htm")
        .then(response => response.text())
        .then(html => {
            // Aggiunge il footer al fondo della pagina
            document.body.insertAdjacentHTML("beforeend", html);

            // Dopo aver caricato il footer, carica il JSON e aggiorna l'anno
            fetch("https://lilae21.github.io/conlangs/parts/footer-config.json")
                .then(response => response.json())
                .then(config => {
                    const footerYear = document.getElementById("footer-year");
                    const pageURL = window.location.href; // Usa la URL completa

                    // Usa il valore specifico se esiste, altrimenti il valore di default
                    footerYear.textContent = config[pageURL] || config["default"];
                });
        });
});
