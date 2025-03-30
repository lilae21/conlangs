document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.htm")
        .then(response => response.text())
        .then(html => {
            // Aggiunge il footer al fondo della pagina
            document.body.insertAdjacentHTML("beforeend", html);

            // Dopo aver caricato il footer, carica il JSON e aggiorna l'anno
            fetch("footer-config.json")
                .then(response => response.json())
                .then(config => {
                    const footerYear = document.getElementById("footer-year");
                    const page = window.location.pathname.split("/").pop();

                    // Usa il valore specifico se esiste, altrimenti il valore di default
                    footerYear.textContent = config[page] || config["default"];
                });
        });
});
