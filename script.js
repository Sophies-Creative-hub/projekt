var _loop_1 = function (i) {
    var point = document.getElementById("punkt-".concat(i));
    if (point) {
        point.addEventListener('click', function () {
            jumpToPage(i);
        });
    }
};
// Event-Listener für alle Punkte registrieren
for (var i = 1; i <= 10; i++) {
    _loop_1(i);
}
// Event-Listener für das Scroll-Ereignis registrieren
window.addEventListener('scroll', handleScroll);
// Funktion zum Springen zu einer bestimmten Seite beim Klicken auf den Punkt
function jumpToPage(pageIndex) {
    var pageElement = document.getElementById("section".concat(pageIndex));
    if (pageElement) {
        pageElement.scrollIntoView({ behavior: 'smooth' });
        highlightPoint(pageIndex); // Highlight den entsprechenden Punkt im Menü
    }
}
// Funktion zum Hervorheben des aktuellen Punkts im Menü
function highlightPoint(pageIndex) {
    // Entfernen von "active", falls vorhanden, von allen Punkten
    for (var i = 1; i <= 10; i++) {
        var point = document.getElementById("punkt-".concat(i));
        if (point) {
            point.classList.remove('active');
        }
    }
    // Hinzufügen von "active" zum aktuellen Punkt
    var currentPagePoint = document.getElementById("punkt-".concat(pageIndex));
    if (currentPagePoint) {
        currentPagePoint.classList.add('active');
    }
}
// Funktion zum Behandeln des Scroll-Ereignisses
function handleScroll() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    for (var i = 1; i <= 10; i++) {
        var pageElement = document.getElementById("section".concat(i));
        if (pageElement) {
            var pageTop = pageElement.offsetTop;
            var pageBottom = pageTop + pageElement.offsetHeight;
            if (scrollPosition >= pageTop && scrollPosition < pageBottom) {
                highlightPoint(i);
                return; // Beenden der Funktion, sobald der aktuelle Punkt gefunden wurde
            }
        }
    }
}
