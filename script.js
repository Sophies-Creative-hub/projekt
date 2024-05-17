function activateDot(dotId) {
    // Entferne die Klasse "active" von allen Listenelementen
    var dots = document.querySelectorAll('.dot');
    dots.forEach(function (dot) {
        dot.classList.remove('active');
    });
    // Füge die Klasse "active" zum angeklickten Listenelement hinzu
    var clickedDot = document.getElementById(dotId);
    if (clickedDot) {
        clickedDot.classList.add('active');
    }
}
// Funktion, um den aktiven Navigationspunkt zu aktualisieren
function updateActiveNavItem(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Abschnitt ist sichtbar, finde entsprechenden Navigationspunkt
            const sectionId = entry.target.getAttribute('id');
            console.log(`Section ${sectionId} is intersecting.`);

            // Extrahiere die Zahl aus der ID des Abschnitts
            const sectionNumber = sectionId.match(/\d+/)[0];
            const navItem = document.querySelector(`#punkt-${sectionNumber}`);

            if (navItem) {
                // Aktiviere den Navigationspunkt und deaktiviere alle anderen
                document.querySelectorAll('.nav-item').forEach(item => {
                    if (item === navItem) {
                        item.classList.add('active');
                        console.log(`Activating nav item for section ${sectionId}`);
                    } else {
                        item.classList.remove('active');
                    }
                });
            } else {
                console.log(`No nav item found for section ${sectionId}`);
            }
        }
    });
}

// Intersection Observer Optionen
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Passen Sie den Schwellenwert an, um sicherzustellen, dass der letzte Abschnitt erkannt wird
};

// Initialisieren des Intersection Observers
const observer = new IntersectionObserver(updateActiveNavItem, options);

// Beobachte alle Abschnitte
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});


