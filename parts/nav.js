function generateNavigation() {
    const h2Elements = document.querySelectorAll('h2[id]');
    const h3Elements = document.querySelectorAll('h3[id]');
        // Crea una mappa delle sezioni h2 e i loro h3 figli
        const sections = new Map();
        h2Elements.forEach(h2 => {
            sections.set(h2.id, {
                element: h2,
                title: h2.textContent.trim(),
                children: []
            });
        });
        // Associa ogni h3 al suo h2 padre
        h3Elements.forEach(h3 => {
            let parentH2 = null;
            let currentElement = h3.previousElementSibling;
            // Cerca all'indietro fino a trovare un h2
            while (currentElement) {
                if (currentElement.tagName === 'H2' && currentElement.id) {
                    parentH2 = currentElement;
                    break;
                }
                currentElement = currentElement.previousElementSibling;
            }
            if (parentH2 && sections.has(parentH2.id)) {
                sections.get(parentH2.id).children.push({
                    id: h3.id,
                    title: h3.textContent.trim(),
                    element: h3
                });
            }
        });
        h2Elements.forEach(h2 => {
            const section = sections.get(h2.id);
            if (section && section.children.length > 0) {
                const navContainer = document.createElement('div');
                navContainer.className = 'nav-links';
                navContainer.style.marginTop = '1rem';
                section.children.forEach(child => {
                    const link = document.createElement('a');
                    link.href = `#${child.id}`;
                    link.className = 'nav-link';
                    link.textContent = child.title;
                    navContainer.appendChild(link);
                });
                h2.parentNode.insertBefore(navContainer, h2.nextSibling);
            }
        });
        h3Elements.forEach(h3 => {
            let parentH2 = null;
            let currentElement = h3.previousElementSibling;
            while (currentElement) {
                if (currentElement.tagName === 'H2' && currentElement.id) {
                    parentH2 = currentElement;
                    break;
                }
                currentElement = currentElement.previousElementSibling;
            }
            if (!parentH2) return;
            // Verifica se è il primo h3 della sezione
            const section = sections.get(parentH2.id);
            const isFirstH3 = section && section.children.length > 0 && section.children[0].id === h3.id;
            if (isFirstH3) {
                // Per il primo h3, non aggiungere back link
                return;
            }
            const navContainer = document.createElement('div');
            navContainer.className = 'auto-nav';
            const newH3 = h3.cloneNode(true);
            navContainer.appendChild(newH3);
            const backLink = document.createElement('a');
            backLink.href = `#${parentH2.id}`;
            backLink.className = 'nav-link back-link';
            backLink.innerHTML = `<i class="ph-fill ph-arrow-fat-line-left"></i> ${parentH2.innerHTML.trim()}`;
            navContainer.appendChild(backLink);
            h3.parentNode.replaceChild(navContainer, h3);
        });
}
document.addEventListener('DOMContentLoaded', generateNavigation);
