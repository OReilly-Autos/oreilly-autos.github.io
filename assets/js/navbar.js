document.addEventListener("DOMContentLoaded", async () => {
    // Get navbar container
    const navbarContainer = document.getElementById("navbar-container");
    if (!navbarContainer) return alert("Navbar container not found");

    // Get navbar HTML
    try {
        const res = await fetch("./partials/navbar.html");
        if (!res.ok) throw new Error("res.ok == false");

        const html = await res.text();
        navbarContainer.innerHTML = html;
    }
    catch (err) {
        console.error("[navbar.html fetch]", err);
        alert("Failed to fetch navbar.html. Check console for error");
    }
});
