// ---------- PLACEHOLDER THUMBNAILS (3 separate sets, one per column) ----------
// Replace "color" with a real image later, e.g. { image: "images/thumb1.jpg" }
const marqueeSets = {
  track1: [
    { color: "#1f2937" }, { color: "#2e5bff" }, { color: "#0f172a" },
  ],
  track2: [
    { color: "#374151" }, { color: "#111827" }, { color: "#1e3a8a" },
  ],
  track3: [
    { color: "#4b5563" }, { color: "#1f2937" }, { color: "#0f172a" },
  ],
};

function buildMarqueeColumn(track) {
  if (!track) return;
  const set = marqueeSets[track.id] || marqueeSets.track1;
  // duplicate the list twice so the loop is seamless
  const items = [...set, ...set];
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

// ---------- PORTFOLIO GRID (YouTube-style cards, filterable by niche) ----------
// Replace "color" with a real image path, e.g. { image: "images/edu1.jpg" }
// Add `personal: true` + optional `label` to any item that's a practice/personal
// piece rather than real client work — it'll show the label instead of view stats.
const portfolioItems = [
  { niche: "education", color: "#1f2937", title: "I Turned $0.01 into $10,000 in 14 Days", channel: "MoneyMindset", duration: "14:22", views: "482K views", time: "2 weeks ago" },
  { niche: "education", color: "#2e5bff", title: "Why You Keep Losing (And How to Fix It)", channel: "GrowthLab", duration: "9:41", views: "1.1M views", time: "1 month ago" },
  { niche: "education", color: "#0f172a", title: "The $30,000/Month Freelance Blueprint", channel: "SkillStack", duration: "18:05", personal: true, label: "Personal project" },
  { niche: "irl", color: "#374151", title: "I Tried Cheap vs Luxury Movie Theaters", channel: "DailyDare", duration: "12:37", views: "890K views", time: "5 days ago" },
  { niche: "irl", color: "#111827", title: "$1 = Dance in the Middle of London", channel: "StreetStunts", duration: "16:12", views: "1.4M views", time: "2 months ago" },
  { niche: "irl", color: "#1e3a8a", title: "Sleeping Rough for 24 Hours Challenge", channel: "OutThere", duration: "21:58", personal: true, label: "Concept piece" },
  { niche: "documentary", color: "#4b5563", title: "I Quit My PhD to Become a Full-Time Artist", channel: "RealStories", duration: "24:10", views: "310K views", time: "4 days ago" },
  { niche: "documentary", color: "#1f2937", title: "Inside the World's Loneliest Job", channel: "ThreadDocs", duration: "27:33", views: "740K views", time: "3 weeks ago" },
  { niche: "documentary", color: "#0f172a", title: "The Town That Banned the Internet", channel: "RealStories", duration: "19:47", personal: true, label: "Practice redesign" },
  { niche: "healthcare", color: "#134e4a", title: "What Doctors Don't Tell You About Sleep", channel: "WellnessWire", duration: "11:28", views: "560K views", time: "1 week ago" },
  { niche: "healthcare", color: "#0f766e", title: "I Tracked My Blood Sugar for 30 Days", channel: "VitalSigns", duration: "15:52", views: "410K views", time: "2 weeks ago" },
  { niche: "healthcare", color: "#115e59", title: "The Truth About Cold Plunges", channel: "WellnessWire", duration: "13:19", personal: true, label: "Personal project" },
];

const portfolioGrid = document.getElementById("portfolioGrid");

function renderPortfolio(filter) {
  if (!portfolioGrid) return;
  portfolioGrid.innerHTML = "";
  const items = filter === "all"
    ? portfolioItems
    : portfolioItems.filter(i => i.niche === filter);

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "yt-card";

    const thumb = document.createElement("div");
    thumb.className = "yt-thumb";
    if (item.image) {
      thumb.style.backgroundImage = `url(${item.image})`;
      thumb.style.backgroundSize = "cover";
      thumb.style.backgroundPosition = "center";
    } else {
      thumb.style.background = item.color;
    }

    // Only show the niche tag in the "All" view — it's redundant once filtered
    if (filter === "all") {
      const nicheTag = document.createElement("span");
      nicheTag.className = "yt-niche-tag";
      nicheTag.textContent = item.niche;
      thumb.appendChild(nicheTag);
    }

    const duration = document.createElement("span");
    duration.className = "yt-duration";
    duration.textContent = item.duration;
    thumb.appendChild(duration);

    const meta = document.createElement("div");
    meta.className = "yt-meta";

    const avatar = document.createElement("div");
    avatar.className = "yt-avatar";
    avatar.textContent = item.channel.charAt(0);

    const info = document.createElement("div");
    info.className = "yt-info";

    if (item.personal) {
      info.innerHTML = `
        <p class="yt-title">${item.title}</p>
        <p class="yt-channel">${item.channel}</p>
        <p class="yt-stats yt-personal-label">${item.label || "Personal project"}</p>
      `;
    } else {
      info.innerHTML = `
        <p class="yt-title">${item.title}</p>
        <p class="yt-channel">${item.channel}
          <svg class="yt-verified" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 1.4 2.7-.6 1.6 2.3 2.7.9-.1 2.8 1.7 2.2-1.7 2.2.1 2.8-2.7.9-1.6 2.3-2.7-.6L12 22l-2.4-1.4-2.7.6-1.6-2.3-2.7-.9.1-2.8L1 12l1.7-2.2-.1-2.8 2.7-.9 1.6-2.3 2.7.6z"/><path d="M9 12l2 2 4-4" stroke="#fff" stroke-width="2" fill="none"/></svg>
        </p>
        <p class="yt-stats">${item.views} • ${item.time}</p>
      `;
    }

    meta.appendChild(avatar);
    meta.appendChild(info);
    card.appendChild(thumb);
    card.appendChild(meta);
    portfolioGrid.appendChild(card);
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