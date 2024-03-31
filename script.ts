// Event-Listener für alle Punkte registrieren
for (let i = 1; i <= 10; i++) {
    const point = document.getElementById(`punkt-${i}`);
    if (point) {
        point.addEventListener('click', () => {
            jumpToPage(i);
        });
    }
}

// Event-Listener für das Scroll-Ereignis registrieren
window.addEventListener('scroll', handleScroll);

// Funktion zum Springen zu einer bestimmten Seite beim Klicken auf den Punkt
function jumpToPage(pageIndex: number): void {
    const pageElement = document.getElementById(`section${pageIndex}`);
    if (pageElement) {
        pageElement.scrollIntoView({ behavior: 'smooth' });
        highlightPoint(pageIndex); // Highlight den entsprechenden Punkt im Menü
    }
}

// Funktion zum Hervorheben des aktuellen Punkts im Menü
function highlightPoint(pageIndex: number): void {
    // Entfernen von "active", falls vorhanden, von allen Punkten
    for (let i = 1; i <= 10; i++) {
        const point = document.getElementById(`punkt-${i}`);
        if (point) {
            point.classList.remove('active');
        }
    }
    // Hinzufügen von "active" zum aktuellen Punkt
    const currentPagePoint = document.getElementById(`punkt-${pageIndex}`);
    if (currentPagePoint) {
        currentPagePoint.classList.add('active');
    }
}

// Funktion zum Behandeln des Scroll-Ereignisses
function handleScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    for (let i = 1; i <= 10; i++) {
        const pageElement = document.getElementById(`section${i}`);
        if (pageElement) {
            const pageTop = pageElement.offsetTop;
            const pageBottom = pageTop + pageElement.offsetHeight;

            if (scrollPosition >= pageTop && scrollPosition < pageBottom) {
                highlightPoint(i);
                return; // Beenden der Funktion, sobald der aktuelle Punkt gefunden wurde
            }
        }
    }
}
