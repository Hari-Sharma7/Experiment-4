/* Simple Reveal */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
}, { threshold: 0.1 });

document.querySelectorAll(".photo-card").forEach(card => observer.observe(card));

/* Creative 3D Tilt */
document.querySelectorAll(".photo-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.querySelector("img").style.transform = `perspective(1000px) rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale(1.05)`;
    });
    card.addEventListener("mouseleave", () => {
        card.querySelector("img").style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});