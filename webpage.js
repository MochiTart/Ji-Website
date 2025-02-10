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
    const defaultPage = "about.html";

    function setActiveLink(page) 
    {
        navLinks.forEach(link => 
        {
            link.classList.remove("active");
            if (link.getAttribute("href") === page) {
                link.classList.add("active");
            }
        });
    }

    // Reset to "about.html" on refresh
    sessionStorage.setItem("activePage", defaultPage);
    setActiveLink(defaultPage);

    // Handle navbar clicks
    navLinks.forEach(link => 
    {
        link.addEventListener("click", function () 
        {
            const selectedPage = this.getAttribute("href");
            sessionStorage.setItem("activePage", selectedPage);
            setActiveLink(selectedPage);
        });
    });
});
