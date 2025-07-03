document.addEventListener("DOMContentLoaded", function () {
    fetch("https://lilae21.github.io/conlangs/parts/footer.htm")
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML("beforeend", html);
            requestAnimationFrame(() => {
                const link = document.getElementById("footer-link");
                if (window.location.pathname.endsWith("index.htm") || window.location.pathname.endsWith("index.html")) {
                    link.href = "https://lilae21.github.io/conlangs/sitemap.htm";
                    link.textContent = "Site map";
                } else {
                    link.href = "https://lilae21.github.io/conlangs/index.htm";
                    const img = document.createElement("img");
                    img.src = "https://lilae21.github.io/conlangs/asset/home.png";
                    img.alt = "Back to homepage";
                    img.style.width = "30px";
                    img.style.height = "30px";
                    img.style.marginBottom = "-6px";
                    img.style.marginRight = "6px";
                    link.textContent = "";
                    link.appendChild(img);
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
