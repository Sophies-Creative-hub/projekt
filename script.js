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
function activateDotForCurrentSection() {
    // Holen Sie sich alle Sektionen
    var sections = document.querySelectorAll('.section');
    // Überprüfen Sie, welche Sektion gerade sichtbar ist
    sections.forEach(function (section) {
        var bounding = section.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
            // Die Sektion ist sichtbar, aktiviere den entsprechenden Punkt
            var sectionId = section.id;
            if (sectionId) {
                var dotId = 'punkt-' + sectionId.substring('section'.length);
                var dotElement = document.getElementById(dotId);
                if (dotElement) {
                    // Entferne die Klasse "active" von allen Dots
                    var dots = document.querySelectorAll('.dot');
                    dots.forEach(function (dot) {
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
window.onload = function () {
    activateDotForCurrentSection();
};
// Fügen Sie ein Event-Listener für das Scroll-Ereignis hinzu, um die aktive Sektion zu aktualisieren
window.addEventListener('scroll', activateDotForCurrentSection);

