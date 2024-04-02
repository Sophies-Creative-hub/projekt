function activateDot(dotId: string): void {
    // Entferne die Klasse "active" von allen Listenelementen
    const dots: NodeListOf<Element> = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Füge die Klasse "active" zum angeklickten Listenelement hinzu
    const clickedDot: HTMLElement | null = document.getElementById(dotId);
    if (clickedDot) {
        clickedDot.classList.add('active');
    }
}
function activateDotForCurrentSection(): void {
    // Holen Sie sich alle Sektionen
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('.section');

    // Überprüfen Sie, welche Sektion gerade sichtbar ist
    sections.forEach(section => {
        const bounding: DOMRect = section.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
            // Die Sektion ist sichtbar, aktiviere den entsprechenden Punkt
            const sectionId: string | null = section.id;
            if (sectionId) {
                const dotId: string = 'punkt-' + sectionId.substring('section'.length);
                const dotElement: HTMLElement | null = document.getElementById(dotId);
                if (dotElement) {
                    // Entferne die Klasse "active" von allen Dots
                    const dots: NodeListOf<Element> = document.querySelectorAll('.dot');
                    dots.forEach(dot => {
                        dot.classList.remove('active');
                    });

                    // Füge die Klasse "active" zum entsprechenden Dot hinzu
                    dotElement.classList.add('active');
                }
            }
        }
    });
}

// Rufen Sie die Funktion beim Laden der Seite auf
window.onload = function() {
    activateDotForCurrentSection();
};

// Fügen Sie ein Event-Listener für das Scroll-Ereignis hinzu, um die aktive Sektion zu aktualisieren
window.addEventListener('scroll', activateDotForCurrentSection);
