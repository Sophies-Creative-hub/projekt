document.getElementById('punkt-1').addEventListener('click', function () {
    jumpToPage(1);
});
document.getElementById('punkt-2').addEventListener('click', function () {
    jumpToPage(2);
});
document.getElementById('punkt-3').addEventListener('click', function () {
    jumpToPage(3);
});
document.getElementById('punkt-4').addEventListener('click', function () {
    jumpToPage(4);
});
document.getElementById('punkt-5').addEventListener('click', function () {
    jumpToPage(5);
});
// Funktion zum Springen zu einer bestimmten Seite beim Klicken auf den Punkt
function jumpToPage(pageIndex) {
    var pageElement = document.getElementById("section".concat(pageIndex));
    if (pageElement) {
        pageElement.scrollIntoView({ behavior: 'smooth' });
    }
}
