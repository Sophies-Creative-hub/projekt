// Event-Listener für alle Punkte registrieren
for (let i = 1; i <= 7; i++) {
    const point = document.getElementById(`punkt-${i}`);
    if (point) {
        point.addEventListener('click', () => {
            jumpToPage(i);
        });
    }
}

// Funktion zum Springen zu einer bestimmten Seite beim Klicken auf den Punkt
function jumpToPage(pageIndex: number): void {
    const pageElement = document.getElementById(`section${pageIndex}`);
    if (pageElement) {
        pageElement.scrollIntoView({ behavior: 'smooth' });
    }
}
