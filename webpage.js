//Adjusts iframe height to content height
function resizeIFrameToFitContent(iFrame) {

    iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}

window.addEventListener('DOMContentLoaded', function(e) 
{

    var iFrame = document.getElementById('iFrame1');
    resizeIFrameToFitContent( iFrame );
} );

//Navbar color change
document.addEventListener("DOMContentLoaded", function () 
{
    const navLinks = document.querySelectorAll(".navbar a");

    const activePage = sessionStorage.getItem("activePage");
    if (activePage) {
        navLinks.forEach(link => {
            if (link.getAttribute("href") === activePage) {
                link.classList.add("active");
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
            sessionStorage.setItem("activePage", this.getAttribute("href"));
        });
    });
});