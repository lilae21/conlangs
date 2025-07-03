document.addEventListener("DOMContentLoaded", function () {
    fetch("https://lilae21.github.io/conlangs/parts/footer.htm")
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML("beforeend", html);
            requestAnimationFrame(() => {
                const link = document.getElementById("footer-link");
                if (window.location.pathname.endsWith("index.htm") || window.location.pathname.endsWith("index.html")) {
                    // Sei sulla homepage → mostra link semplice alla sitemap
                    link.href = "https://lilae21.github.io/conlangs/sitemap.htm";
                    link.textContent = "Site map";
                } else {
                    // Sei in una pagina interna → mostra immagine + testo per tornare alla home
                    link.href = "https://lilae21.github.io/conlangs/index.htm";

                    const img = document.createElement("img");
                    img.src = "https://lilae21.github.io/conlangs/asset/home.png";
                    img.alt = "Home page";
                    img.style.width = "30px";
                    img.style.height = "30px";
                    img.style.marginBottom = "-6px";
                    img.style.marginRight = "6px";

                    link.textContent = "";  // Pulisce contenuto esistente
                    link.appendChild(img);  // Inserisce l'immagine
                    link.append("Back to homepage");  // Inserisce il testo accanto
                }

                // Dopo aver caricato il footer, carica il JSON e aggiorna l'anno
                fetch("https://lilae21.github.io/conlangs/parts/footer-config.json")
                    .then(response => response.json())
                    .then(config => {
                        const footerYear = document.getElementById("footer-year");
                        const pageURL = window.location.href;
                        // Usa il valore specifico se esiste, altrimenti il valore di default
                        footerYear.textContent = config[pageURL] || config["default"];
                    });
            });
        });
});
