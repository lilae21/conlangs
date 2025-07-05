document.addEventListener("DOMContentLoaded", function () {
    fetch("https://lilae21.github.io/conlangs/parts/footer.htm")
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML("beforeend", html);
            requestAnimationFrame(() => {
                const link = document.getElementById("footer-link");
                if (window.location.pathname.endsWith("index.htm") || window.location.pathname.endsWith("index.html")) {
                    link.href = "https://lilae21.github.io/conlangs/sitemap.htm";
                    const ism = document.createElement("i");
                    ism.className = "ph ph-compass";
                    ism.setAttribute("aria-label", "Site map");
                    link.textContent = "";
                    link.appendChild(ism);
                } else {
                    link.href = "https://lilae21.github.io/conlangs/index.htm";
                    const i = document.createElement("i");
                    i.className = "ph ph-house";
                    i.setAttribute("aria-label", "Back to homepage");
                    link.textContent = "";
                    link.appendChild(i);
                }
                fetch("https://lilae21.github.io/conlangs/parts/footer-config.json")
                    .then(response => response.json())
                    .then(config => {
                        const footerYear = document.getElementById("footer-year");
                        const pageURL = window.location.href;
                        footerYear.textContent = config[pageURL] || config["default"];
                    });
            });
        });
});
