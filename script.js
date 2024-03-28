var _loop_1 = function (i) {
    var point = document.getElementById("punkt-".concat(i));
    if (point) {
        point.addEventListener('click', function () {
            jumpToPage(i);
        });
    }
};
// Event-Listener für alle Punkte registrieren
for (var i = 1; i <= 7; i++) {
    _loop_1(i);
}
// Funktion zum Springen zu einer bestimmten Seite beim Klicken auf den Punkt
function jumpToPage(pageIndex) {
    var pageElement = document.getElementById("section".concat(pageIndex));
    if (pageElement) {
        pageElement.scrollIntoView({ behavior: 'smooth' });
    }
}
