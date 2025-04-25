document.addEventListener("DOMContentLoaded", async () => {
    // Get footer container
    const footerContainer = document.getElementById("footer-container");
    if (!footerContainer) return alert("footer container not found");

    // Get footer HTML
    try {
        const res = await fetch("./partials/footer.html");
        if (!res.ok) throw new Error("res.ok == false");

        const html = await res.text();
        footerContainer.innerHTML = html;
    }
    catch (err) {
        console.error("[footer.html fetch]", err);
        alert("Failed to fetch footer.html. Check console for error");
    }
});
