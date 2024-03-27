document.getElementById('punkt-1')!.addEventListener('click', () => {
    jumpToPage(1);
});

document.getElementById('punkt-2')!.addEventListener('click', () => {
    jumpToPage(2);
});

document.getElementById('punkt-3')!.addEventListener('click', () => {
    jumpToPage(3);
});

document.getElementById('punkt-4')!.addEventListener('click', () => {
    jumpToPage(4);
});

document.getElementById('punkt-5')!.addEventListener('click', () => {
    jumpToPage(5);
});

// Funktion zum Springen zu einer bestimmten Seite beim Klicken auf den Punkt
function jumpToPage(pageIndex: number): void {
    const pageElement = document.getElementById(`section${pageIndex}`);
    if (pageElement) {
        pageElement.scrollIntoView({ behavior: 'smooth' });
    }
}
