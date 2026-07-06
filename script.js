// ---------- PLACEHOLDER THUMBNAILS (3 separate sets, one per column) ----------
// Replace "color" with a real image later, e.g. { image: "images/thumb1.jpg" }
const marqueeSets = {
  track1: [
    { image: "images/IRL/theatre.png" },
    { image: "images/IRL/frozenfood.jpg" },
    { image: "images/IRL/airrack_day.png" },
    { image: "images/IRL/01_03.png" },
    { image: "images/IRL/02_01_notext.png" },
    { image: "images/IRL/3.png" },
    { image: "images/IRL/4.png" },
    { image: "images/IRL/final_text.png" },
    { image: "images/IRL/Version-01.jpg" },
  ],
  track2: [
    { image: "images/Documentary/02_01.jpg" },
    { image: "images/Documentary/eatin01.jpg" },
    { image: "images/Documentary/quiting.png" },
    { image: "images/Documentary/GoogleVEO3.jpg" },
    { image: "images/Documentary/progression01.png" },
    { image: "images/Documentary/miketyson.png" },
    { image: "images/Documentary/legends.jpg" },
    { image: "images/Documentary/Jaoflix.jpg" },
    { image: "images/Documentary/02.jpg" },
  ],
  track3: [
    { image: "images/Education/JonathanScaled.jpg" },
    { image: "images/Education/kube02.png" },
    { image: "images/Education/lasthope.png" },
    { image: "images/Education/Lovable.png" },
    { image: "images/Education/Artboard1.png" },
    { image: "images/Education/stupid02.jpg" },
    { image: "images/Education/ai.png" },
    { image: "images/Education/whoop01.jpg" },
    { image: "images/Education/stupid03.jpg" },
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
      div.addEventListener("click", () => openLightbox(item.image));
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
// Add `avatar: "images/xyz.jpg"` for a real channel profile picture (falls back
// to a letter circle if omitted).
// Add `personal: true` for a practice/concept piece — it hides the verified tick
// since there's no real association to claim.
// Note: view counts and time-since-posted are intentionally not displayed anywhere.
const portfolioItems = [
  { niche: "irl", image: "images/IRL/01_03.png", avatar: "images/avatar/BaxterPersse.jpg", title: "I Turned $0.01 into $10,000 in 14 Days", channel: "Baxter Persse" },

  { niche: "documentary", image: "images/Documentary/legends.jpg", avatar: "images/avatar/legends.jpg", title: "How Donald Trump's Grandfather Built The Empire With Gold", channel: "Legends of Gold with Dave Turin" },

  { niche: "documentary", image: "images/Documentary/quiting.png", title: "I Quit My PhD to Become a Full-Time Artist", channel: "Wayfarer Design" },

  { niche: "irl", image: "images/IRL/frozenfood.jpg", title: "I Tested £100 of Frozen Costco Meals", channel: "Wayfarer Design" },

  { niche: "irl", image: "images/IRL/02_01_notext.png", avatar: "images/avatar/BaxterPersse.jpg", title: "I Turned $0.01 into $10,000 in 14 Days", channel: "Baxter Persse" },

  { niche: "irl", image: "images/IRL/airrack_day.png", title: "I Opened A FAKE 5-Star Restaurant In My House!", channel: "Wayfarer Design" },

  { niche: "documentary", image: "images/Documentary/02.jpg", avatar: "images/avatar/legends.jpg", title: "HIS GOLD WON INDEPENDENCE - The forgotten patriot who funded the American Revolution", channel: "Legends of Gold with Dave Turin" },

  { niche: "education", image: "images/Education/Artboard1.png", avatar: "images/avatar/luke.jpg", title: "How To Master Trading SMT + 10RR Trade Breakdown", channel: "LukesProjections" },

  { niche: "education", image: "images/Education/mindset.jpg", avatar: "images/avatar/jaden.jpg", title: "Thinking in Decades: The Mindset That Separates the Top 1%", channel: "Jaden Bottarini" },

  { niche: "irl", image: "images/IRL/4.png", avatar: "images/avatar/BaxterPersse.jpg", title: "I Turned $0.01 into $10,000 in 14 Days", channel: "Baxter Persse" },

  { niche: "irl", image: "images/IRL/101.png", avatar: "images/avatar/joseph.png", title: "Exploring the Strangest Places in the World", channel: "Thumbnails 101" },

  { niche: "documentary", image: "images/Documentary/progression01.png",  title: "I Spent 10 Years Sculpting THIS Dragon…", channel: "Wayfarer Design" },

  { niche: "education", image: "images/Education/whoop01.jpg",  title: "The Clipping Business That Pays", channel: "Wayfarer Design" },

  { niche: "education", image: "images/Education/JonathanScaled.jpg", title: "How Freelance Brand Scaling Bought Me My Dream Penthouse", channel: "Wayfarer Design" },

  { niche: "education", image: "images/Education/emailoutreacha.png", avatar: "images/avatar/tommy.jpg", title: "How To Get An 80% Reply Rate On Outreach (WITHOUT GETTING NO's)", channel: "Tommy loutzenheiser" },

  { niche: "irl", image: "images/IRL/JordanBently.png", title: "Trying The BEST French & Senegalese Restaurants in LA", channel: "Wayfarer Design" },

  { niche: "irl", image: "images/IRL/Version-01.jpg", title: "I Spent 30 Days Recreating Goku's Physique (Here's What Happened)", channel: "Wayfarer Design" },

  { niche: "irl", image: "images/IRL/kendo.png", title: "I Challenged a Real Life Samurai", channel: "Wayfarer Design" },

  { niche: "education", image: "images/Education/Secret.png", avatar: "images/avatar/jaden.jpg", title: "How Billionaires Make Decisions (The System You Don't See)", channel: "Jaden Bottarini" },

  { niche: "education", image: "images/Education/Kube02.png", title: "The Psychology Behind Top 1% Sales Performance", channel: "Wayfarer Design" },

  { niche: "education", image: "images/Education/lasthope.png", title: "0 → 10 Clients: The Exact Process I Used (Full Breakdown)", channel: "Wayfarer Design" },

  { niche: "documentary", image: "images/Documentary/02_01.jpg",  title: "Hollywood's Dirtiest Secret Was a Real Cowboy", channel: "Wayfarer Design" },

  { niche: "documentary", image: "images/Documentary/miketyson.png",  title: "Mike Tyson Was a Monster in His Prime", channel: "Wayfarer Design" },

  { niche: "documentary", image: "images/Documentary/eatin01.jpg",  title: "I Ate Only Eggs For 1 Week (Big Mistake?)", channel: "Wayfarer Design" },

  { niche: "documentary", image: "images/Documentary/04_01.jpg", avatar: "images/avatar/legends.jpg", title: "How Wyatt Earp Became The Most Feared Gunman of The Wild West ", channel: "Legends of Gold with Dave Turin" },

  { niche: "irl", image: "images/IRL/3.png", avatar: "images/avatar/BaxterPersse.jpg", title: "I Turned $0.01 into $10,000 in 14 Days", channel: "Baxter Persse" },

  { niche: "irl", image: "images/IRL/final_text.png", avatar: "images/avatar/mansion.jpg", title: "We never planned for this... | Mansion on Waverly Hill Historic Restoration Project", channel: "Mansion on Waverly Hill" },

  { niche: "irl", image: "images/IRL/theatre.png", title: "I Tried Cheap vs Luxury Movie Theaters", channel: "Wayfarer Design" },

  { niche: "irl", image: "images/IRL/restrat.jpg", title: "I Faked Being a Food Critic for Free Food", channel: "Wayfarer Design" },

  { niche: "irl", image: "images/IRL/fruit.jpg", title: "I Ate The King Of Fruits (I Regret It)", channel: "Wayfarer Design" },

  { niche: "irl", image: "images/IRL/KSI.png", title: "Can YouTubers Beat Pro Footballers?", channel: "Wayfarer Design" },

  { niche: "education", image: "images/Education/ai.png", title: "The Exact System Behind My First $20K", channel: "Wayfarer Design" },

  { niche: "education", image: "images/Education/Lovable.png", title: "How I'd Make Money If I Had to Start Over", channel: "Wayfarer Design" },

  { niche: "education", image: "images/Education/meta.jpg", avatar: "images/avatar/jaden.jpg", title: "How This Facebook Ads Funnel Made $15K/Month (Full Strategy)", channel: "Jaden Bottarini" },

  { niche: "education", image: "images/Education/stupid02.jpg", title: "5 Positioning Mistakes (99% Get This Wrong)", channel: "Wayfarer Design" },

  { niche: "education", image: "images/Education/whoop02.jpg", title: "The Only Tools You Need To Make Money Online With AI", channel: "Wayfarer Design" },

  { niche: "education", image: "images/Education/stupid03.jpg", title: "5 Positioning Mistakes (99% Get This Wrong)", channel: "Wayfarer Design" },

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
      thumb.addEventListener("click", () => openLightbox(item.image, {
        title: item.title,
        channel: item.channel,
        avatar: item.avatar
      }));
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

    const meta = document.createElement("div");
    meta.className = "yt-meta";

    const avatar = document.createElement("div");
    avatar.className = "yt-avatar";
    if (item.avatar) {
      avatar.style.backgroundImage = `url(${item.avatar})`;
      avatar.style.backgroundSize = "cover";
      avatar.style.backgroundPosition = "center";
    } else {
      avatar.textContent = item.channel.charAt(0);
    }

    const info = document.createElement("div");
    info.className = "yt-info";

    if (item.personal) {
      // No verified tick for concept/practice pieces — no real association to claim
      info.innerHTML = `
        <p class="yt-title">${item.title}</p>
        <p class="yt-channel">${item.channel}</p>
      `;
    } else {
      info.innerHTML = `
        <p class="yt-title">${item.title}</p>
        <p class="yt-channel">${item.channel}
          <svg class="yt-verified" width="14" height="14" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
        </p>
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

// ---------- LIGHTBOX ----------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxMeta = document.getElementById("lightboxMeta");
const lightboxAvatar = document.getElementById("lightboxAvatar");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxChannel = document.getElementById("lightboxChannel");

function openLightbox(src, meta) {
  if (!src || !lightbox) return;
  lightboxImg.src = src;

  if (meta && meta.title) {
    lightboxMeta.classList.add("has-content");
    lightboxTitle.textContent = meta.title;
    lightboxChannel.textContent = meta.channel || "";
    if (meta.avatar) {
      lightboxAvatar.style.backgroundImage = `url(${meta.avatar})`;
      lightboxAvatar.textContent = "";
    } else {
      lightboxAvatar.style.backgroundImage = "";
      lightboxAvatar.textContent = (meta.channel || "?").charAt(0);
    }
  } else {
    lightboxMeta.classList.remove("has-content");
  }

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}
if (lightbox) {
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLightbox();
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