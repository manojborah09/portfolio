// ---------- PLACEHOLDER THUMBNAILS ----------
// Replace these with your real thumbnail image paths, e.g. "images/thumb1.jpg"
const placeholderThumbs = [
  { label: "MY EXACT STRATEGY", color: "#1f2937" },
  { label: "80% Reply Rate", color: "#2e5bff" },
  { label: "$723/DAY", color: "#0f172a" },
  { label: "BANNED?", color: "#374151" },
  { label: "$18,297.34", color: "#111827" },
  { label: "ALL YOU NEED!", color: "#1e3a8a" },
  { label: "10 YEARS", color: "#4b5563" },
  { label: "with AI AGENCY", color: "#1f2937" },
  { label: "never again!", color: "#0f172a" },
];

function buildMarqueeColumn(track) {
  // duplicate the list twice so the loop is seamless
  const items = [...placeholderThumbs, ...placeholderThumbs];
  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "thumb";
    div.style.background = item.color;
    div.textContent = item.label;
    track.appendChild(div);
  });
}

document.querySelectorAll(".marquee-track").forEach(buildMarqueeColumn);

// ---------- FAQ ACCORDION ----------
document.querySelectorAll(".faq-item").forEach(item => {
  const btn = item.querySelector(".faq-q");
  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

// ---------- SMOOTH SCROLL ----------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
