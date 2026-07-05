// ---------- PLACEHOLDER THUMBNAILS ----------
// Replace "color" with a real image later, e.g. { image: "images/thumb1.jpg" }
const placeholderThumbs = [
  { color: "#1f2937" },
  { color: "#2e5bff" },
  { color: "#0f172a" },
  { color: "#374151" },
  { color: "#111827" },
  { color: "#1e3a8a" },
  { color: "#4b5563" },
  { color: "#1f2937" },
  { color: "#0f172a" },
];

function buildMarqueeColumn(track) {
  if (!track) return;
  // duplicate the list twice so the loop is seamless
  const items = [...placeholderThumbs, ...placeholderThumbs];
  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "thumb";
    if (item.image) {
      div.style.backgroundImage = `url(${item.image})`;
    } else {
      div.style.background = item.color;
    }
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

// ---------- PORTFOLIO GRID (filterable by niche) ----------
// Replace "color" with a real image path, e.g. { niche: "education", image: "images/edu1.jpg" }
const portfolioItems = [
  { niche: "education", color: "#1f2937" },
  { niche: "education", color: "#2e5bff" },
  { niche: "education", color: "#0f172a" },
  { niche: "irl", color: "#374151" },
  { niche: "irl", color: "#111827" },
  { niche: "irl", color: "#1e3a8a" },
  { niche: "documentary", color: "#4b5563" },
  { niche: "documentary", color: "#1f2937" },
  { niche: "documentary", color: "#0f172a" },
];

const portfolioGrid = document.getElementById("portfolioGrid");

function renderPortfolio(filter) {
  if (!portfolioGrid) return;
  portfolioGrid.innerHTML = "";
  const items = filter === "all"
    ? portfolioItems
    : portfolioItems.filter(i => i.niche === filter);

  items.forEach(item => {
    const tile = document.createElement("div");
    tile.className = "portfolio-tile";
    if (item.image) {
      tile.style.backgroundImage = `url(${item.image})`;
      tile.style.backgroundSize = "cover";
      tile.style.backgroundPosition = "center";
    } else {
      tile.style.background = item.color;
    }
    const tag = document.createElement("span");
    tag.className = "portfolio-tag";
    tag.textContent = item.niche;
    tile.appendChild(tag);
    portfolioGrid.appendChild(tile);
  });
}

if (portfolioGrid) {
  renderPortfolio("all");
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderPortfolio(btn.dataset.filter);
    });
  });
}

// ---------- HIRE FORM ----------
const hireForm = document.getElementById("hireForm");
if (hireForm) {
  hireForm.addEventListener("submit", e => {
    e.preventDefault();
    const status = document.getElementById("formStatus");
    status.textContent = "Message received. I'll reply within a day.";
    hireForm.reset();
  });
}

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
