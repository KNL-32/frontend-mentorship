import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const destinations = [
  {
    id: 1,
    name: "Kigali Genocide Memorial",
    category: "History",
    description:
      "A profound and moving tribute to the 1994 genocide victims, offering education, remembrance, and a message of hope for Rwanda's future.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    rating: 4.9,
    duration: "2–3 hrs",
    tag: "Must Visit",
  },
  {
    id: 2,
    name: "Nyamirambo District",
    category: "Culture",
    description:
      "Kigali's most vibrant and authentic neighbourhood — a mosaic of street food, local markets, mosques, and the true heartbeat of the city.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80",
    rating: 4.7,
    duration: "Half day",
    tag: "Local Favourite",
  },
  {
    id: 3,
    name: "Inema Arts Center",
    category: "Art",
    description:
      "A world-class contemporary arts hub showcasing Rwandan and African artists through galleries, live music, dance, and cultural events.",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80",
    rating: 4.8,
    duration: "2–4 hrs",
    tag: "Art & Culture",
  },
  {
    id: 4,
    name: "Mount Kigali Summit",
    category: "Nature",
    description:
      "Trek to one of Kigali's signature hilltops and be rewarded with sweeping panoramic views of the city's rolling green valleys.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
    rating: 4.6,
    duration: "3–4 hrs",
    tag: "Adventure",
  },
  {
    id: 5,
    name: "Kimironko Market",
    category: "Shopping",
    description:
      "Kigali's largest open-air market — a sensory feast of fresh produce, woven baskets, Kitenge fabrics, and warm community energy.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    rating: 4.5,
    duration: "1–2 hrs",
    tag: "Shopping",
  },
  {
    id: 6,
    name: "Volcanoes National Park",
    category: "Wildlife",
    description:
      "A short drive from Kigali, trek through mist-covered forests to encounter the rare and majestic mountain gorillas in their natural habitat.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
    rating: 5.0,
    duration: "Full day",
    tag: "UNESCO Site",
  },
];

const hotels = [
  {
    id: 1,
    name: "Kigali Marriott Hotel",
    stars: 5,
    location: "City Centre",
    price: "$280",
    description:
      "Kigali's premier luxury address. Rooftop pool, world-class dining, and panoramic city views define this iconic five-star experience.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&q=80",
    amenities: ["Pool", "Spa", "Fine Dining", "Gym", "Rooftop Bar"],
    badge: "Luxury Pick",
  },
  {
    id: 2,
    name: "The Retreat Kigali",
    stars: 5,
    location: "Nyarutarama",
    price: "$195",
    description:
      "Nestled on a quiet hillside, The Retreat blends boutique elegance with Rwandan craft — intimate, refined, and unforgettable.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=700&q=80",
    amenities: ["Garden Pool", "Wellness Spa", "Farm-to-Table", "Firepit"],
    badge: "Boutique Gem",
  },
  {
    id: 3,
    name: "Hotel des Mille Collines",
    stars: 4,
    location: "Kiyovu",
    price: "$145",
    description:
      "The legendary 'Hotel Rwanda' — steeped in history yet thoroughly modern. A landmark stay with warmth, character, and timeless appeal.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=80",
    amenities: ["Historic Pool", "Restaurant", "Bar", "City Views"],
    badge: "Historic Icon",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sophie Andersson",
    country: "Sweden",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    text: "Kigali completely shattered my expectations. The city is spotlessly clean, the people incredibly warm, and the food — oh, the food! Every single morning I woke up excited for the day ahead.",
    rating: 5,
    trip: "Solo Traveller · 2 weeks",
  },
  {
    id: 2,
    name: "James Okonkwo",
    country: "Nigeria",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    text: "As an African traveller, Kigali gave me profound pride. It's proof of what's possible — a safe, modern, green African capital that rolls out the red carpet for every visitor.",
    rating: 5,
    trip: "Business & Leisure · 10 days",
  },
  {
    id: 3,
    name: "Mei Lin Chen",
    country: "Singapore",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    text: "The gorilla trek from Kigali was the single greatest travel experience of my life. But the city itself — the nightlife, the coffee culture, the art scene — I didn't want to leave.",
    rating: 5,
    trip: "Couple · 12 days",
  },
];

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=600&q=80", label: "City Skyline at Dusk" },
  { id: 2, src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80", label: "Rolling Green Hills" },
  { id: 3, src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80", label: "Valley Panorama" },
  { id: 4, src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80", label: "Vibrant Street Life" },
  { id: 5, src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80", label: "Primate Encounters" },
  { id: 6, src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80", label: "Local Markets" },
];

const stats = [
  { label: "Annual Visitors", value: 1200000, suffix: "+" },
  { label: "UNESCO Sites Nearby", value: 3, suffix: "" },
  { label: "Hotels & Lodges", value: 340, suffix: "+" },
  { label: "Safety Index Score", value: 78, suffix: "/100" },
];

const foods = [
  {
    name: "Brochettes",
    description: "Rwanda's beloved street food — skewers of marinated goat or beef, grilled over charcoal and served with fried plantains.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
    origin: "National Classic",
  },
  {
    name: "Isombe",
    description: "A hearty Rwandan stew made from cassava leaves, peanuts, and vegetables — deeply comforting and distinctly local.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
    origin: "Traditional Cuisine",
  },
  {
    name: "Rwandan Coffee",
    description: "Among the world's finest. Single-origin beans from volcanic highlands, served in Kigali's thriving third-wave café scene.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
    origin: "World-Class Export",
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function useCountUp(target, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, started]);
  return count;
}

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-4 h-4 ${s <= Math.round(rating) ? "text-amber-400" : "text-gray-300 dark:text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

function HillsDivider({ dark }) {
  return (
    <div className={`w-full overflow-hidden leading-none -mb-1 ${dark ? "text-stone-900" : "text-stone-50 dark:text-stone-900"}`}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
        <path fill="currentColor" d="M0,80 C120,20 240,60 360,40 C480,20 560,70 720,50 C880,30 960,65 1080,45 C1200,25 1320,60 1440,35 L1440,80 Z"/>
      </svg>
    </div>
  );
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

function Navbar({ dark, toggleDark, scrolled }) {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Explore", "Hotels", "Culture", "Contact"];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-white/95 dark:bg-stone-950/95 backdrop-blur-md shadow-lg shadow-stone-200/50 dark:shadow-stone-900/50"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-600 to-amber-600 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm tracking-tight">K</span>
          </div>
          <div className="text-left">
            <div className={`font-bold text-base leading-none tracking-wide transition-colors ${scrolled ? "text-stone-900 dark:text-white" : "text-white"}`} style={{fontFamily:"'Playfair Display', Georgia, serif"}}>
              Kigali
            </div>
            <div className={`text-[10px] uppercase tracking-[0.2em] leading-none mt-0.5 transition-colors ${scrolled ? "text-emerald-600 dark:text-emerald-400" : "text-amber-300"}`}>
              Tourism
            </div>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link === "Home" ? "home" : link)}
              className={`text-sm font-medium tracking-wide transition-all hover:text-amber-500 relative group ${
                scrolled ? "text-stone-700 dark:text-stone-300" : "text-white/90"
              }`}
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-amber-500 rounded-full transition-all duration-300 group-hover:w-full"/>
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className={`p-2 rounded-full transition-all ${
              scrolled
                ? "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            )}
          </button>

          <button
            onClick={() => scrollTo("Contact")}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-emerald-900/30 hover:from-emerald-500 hover:to-emerald-600 transition-all hover:shadow-emerald-700/40 hover:-translate-y-0.5"
          >
            Plan Trip
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-stone-700 dark:text-stone-300" : "text-white"}`}
          >
            <div className="space-y-1.5 w-6">
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}/>
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? "opacity-0" : ""}`}/>
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}/>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-80" : "max-h-0"}`}>
        <div className="bg-white dark:bg-stone-950 border-t border-stone-100 dark:border-stone-800 px-6 py-4 space-y-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link === "Home" ? "home" : link)}
              className="block w-full text-left py-3 text-stone-700 dark:text-stone-300 font-medium border-b border-stone-50 dark:border-stone-800/50 last:border-0 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="mt-3 w-full py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl text-center"
          >
            Plan Your Trip
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1800&q=85"
        alt="Kigali skyline"
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[10s] hover:scale-100"
      />
      {/* Layered gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80"/>
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-amber-900/20"/>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-amber-200 text-xs font-medium tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"/>
          Land of a Thousand Hills
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>
          Discover the
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300">
            Heart of Africa
          </span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Kigali — Africa's cleanest, safest, and most surprising capital city. 
          Rolling green hills, world-class cuisine, and a story of extraordinary resilience await you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-900 font-bold rounded-full shadow-2xl shadow-amber-900/40 hover:from-amber-400 hover:to-amber-500 transition-all hover:-translate-y-1 text-sm tracking-wide"
          >
            Explore Kigali
          </button>
          <button
            onClick={() => document.getElementById("hotels")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/25 transition-all hover:-translate-y-1 text-sm tracking-wide"
          >
            Browse Hotels
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-white/80 animate-bounce"/>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────

function StatCounter({ label, value, suffix, started }) {
  const count = useCountUp(value, started);
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-400" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-stone-500 dark:text-stone-400 text-sm mt-1 font-medium">{label}</div>
    </div>
  );
}

function About() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-stone-50 dark:bg-stone-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">About the City</div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-6 leading-tight" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>
              Africa's Most<br />
              <span className="text-emerald-700 dark:text-emerald-400">Inspiring Capital</span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-6">
              Perched at 1,567 metres above sea level, Kigali is a city unlike any other on the continent. Consistently ranked among Africa's cleanest and safest cities, it has transformed itself into a beacon of modern urban design, innovation, and warm hospitality.
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-10">
              From the historic Kigali Genocide Memorial to the buzzing creative energy of Inema Arts Center, from misty hilltop views to vibrant neighbourhood restaurants — Kigali rewards every traveller who arrives with an open heart.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Cleanest City in Africa", "Safari Gateway", "Third-Wave Coffee", "Thriving Arts Scene"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium border border-emerald-100 dark:border-emerald-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="relative h-96 md:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&q=80"
              alt="Kigali cityscape"
              className="absolute top-0 left-0 w-3/5 h-3/4 object-cover rounded-2xl shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80"
              alt="Rwanda hills"
              className="absolute bottom-0 right-0 w-3/5 h-3/4 object-cover rounded-2xl shadow-xl border-4 border-stone-50 dark:border-stone-900"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-stone-800 rounded-2xl p-4 shadow-2xl text-center z-10">
              <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>1,567m</div>
              <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">Above Sea Level</div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div ref={ref} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-stone-200 dark:border-stone-800">
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── DESTINATIONS ─────────────────────────────────────────────────────────────

function DestinationCard({ dest }) {
  return (
    <div className="group bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-stone-300/50 dark:hover:shadow-stone-900/80 transition-all duration-500 hover:-translate-y-2 border border-stone-100 dark:border-stone-800">
      <div className="relative h-52 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"/>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-amber-500 text-stone-900 text-xs font-bold rounded-full">{dest.tag}</span>
        </div>
        <div className="absolute bottom-3 left-3 text-white/90 text-xs font-medium bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
          {dest.category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-stone-900 dark:text-white text-base leading-tight" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>{dest.name}</h3>
          <span className="text-xs text-stone-400 dark:text-stone-500 ml-2 shrink-0">{dest.duration}</span>
        </div>
        <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-4 line-clamp-3">{dest.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <StarRating rating={dest.rating} />
            <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">{dest.rating}</span>
          </div>
          <button className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1 group/btn">
            Learn more
            <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function Destinations() {
  return (
    <section id="explore" className="bg-white dark:bg-stone-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">Top Attractions</div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>
            Popular Destinations
          </h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto text-lg">
            From hillside panoramas to vibrant markets — every corner of Kigali holds a discovery.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── HOTELS ──────────────────────────────────────────────────────────────────

function HotelCard({ hotel }) {
  return (
    <div className="group bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100 dark:border-stone-800 flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent"/>
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 bg-amber-500 text-stone-900 text-xs font-bold rounded-full shadow-md">{hotel.badge}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <h3 className="text-white font-bold text-lg leading-tight" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>{hotel.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(hotel.stars)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-amber-300 font-bold text-xl" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>{hotel.price}</div>
            <div className="text-white/70 text-xs">per night</div>
          </div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-1.5 text-stone-400 dark:text-stone-500 text-sm mb-3">
          <svg className="w-4 h-4 shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          {hotel.location}
        </div>
        <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed flex-1 mb-4">{hotel.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {hotel.amenities.map((a) => (
            <span key={a} className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs rounded-full border border-emerald-100 dark:border-emerald-800">
              {a}
            </span>
          ))}
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-900/30 text-sm">
          Book Now
        </button>
      </div>
    </div>
  );
}

function Hotels() {
  return (
    <section id="hotels" className="bg-stone-50 dark:bg-stone-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">Where to Stay</div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>
            Exceptional Hotels
          </h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto text-lg">
            From iconic landmarks to quiet boutique retreats, Kigali's hotels match the city's extraordinary standard.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((h) => (
            <HotelCard key={h.id} hotel={h} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CULTURE ─────────────────────────────────────────────────────────────────

function Culture() {
  return (
    <section id="culture" className="bg-white dark:bg-stone-950 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-amber-600 dark:text-amber-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">Culture & Cuisine</div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-white mb-4" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>
            Taste Rwanda's Soul
          </h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto text-lg">
            Kigali's food and culture scene is as layered and rich as the hills that frame the city.
          </p>
        </div>

        {/* Culture highlight strip */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80" alt="Rwandan culture" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"/>
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-bold text-xl" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>Ubumuntu — Human Kindness</p>
              <p className="text-white/80 text-sm">The philosophy that defines every Rwandan interaction</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-4" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>A Culture of Warmth & Resilience</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
              Rwanda's culture is anchored in the concept of <em>Ubumuntu</em> — the belief in the inherent humanity and dignity of every person. Visitors are welcomed not as tourists, but as guests and future friends.
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
              Traditional crafts like Imigongo (geometric cow-dung painting) and Agaseke (woven peace baskets) reflect an artistic heritage that has survived and thrived. The annual Kwibuka memorial, Umuganura harvest festival, and Umuganda community day all offer visitors a window into Rwanda's extraordinary living culture.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Kinyarwanda Language", "Imigongo Art", "Agaseke Baskets", "Intore Dance"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-stone-600 dark:text-stone-400 text-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"/>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Food cards */}
        <div className="grid sm:grid-cols-3 gap-8">
          {foods.map((food) => (
            <div key={food.name} className="group text-center">
              <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden shadow-xl ring-4 ring-amber-100 dark:ring-amber-900/30 group-hover:ring-amber-400 dark:group-hover:ring-amber-600 transition-all duration-300">
                <img src={food.image} alt={food.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="text-xs text-amber-600 dark:text-amber-400 font-bold tracking-widest uppercase mb-1">{food.origin}</div>
              <h4 className="text-xl font-bold text-stone-900 dark:text-white mb-2" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>{food.name}</h4>
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{food.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── GALLERY ─────────────────────────────────────────────────────────────────

function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  return (
    <section className="bg-stone-900 dark:bg-stone-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">Photo Gallery</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>
            Kigali Through the Lens
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              onClick={() => setLightbox(img)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              style={{ height: i === 0 ? "400px" : "190px" }}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-300"/>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-3xl w-full">
            <img src={lightbox.src} alt={lightbox.label} className="w-full rounded-2xl shadow-2xl"/>
            <p className="text-white/80 text-center mt-4 font-medium">{lightbox.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-emerald-800 via-emerald-900 to-stone-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">Traveller Stories</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>
            What Visitors Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-colors">
              <div className="flex gap-1 mb-4">
                <StarRating rating={t.rating} />
              </div>
              <p className="text-white/85 leading-relaxed mb-6 text-sm italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/15">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-400/50"/>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-emerald-300 text-xs">{t.country} · {t.trip}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── NEWSLETTER ──────────────────────────────────────────────────────────────

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-amber-50 dark:bg-stone-900 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-amber-600 dark:text-amber-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">Stay Inspired</div>
        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>
          Never Miss a Kigali Moment
        </h2>
        <p className="text-stone-500 dark:text-stone-400 mb-10">
          Travel tips, hidden gems, festival dates, and exclusive hotel deals — delivered monthly.
        </p>
        {submitted ? (
          <div className="flex flex-col items-center gap-3 text-emerald-700 dark:text-emerald-400">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <p className="font-semibold">You're on the list! Welcome to the Kigali family.</p>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-4 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-full text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button
              onClick={() => email.includes("@") && setSubmitted(true)}
              className="px-7 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-full shadow-lg hover:from-emerald-500 hover:to-emerald-600 transition-all whitespace-nowrap hover:-translate-y-0.5"
            >
              Subscribe Free
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── FOOTER / CONTACT ────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="bg-stone-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-amber-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg" style={{fontFamily:"'Playfair Display', Georgia, serif"}}>Kigali Tourism</div>
                <div className="text-emerald-400 text-[10px] uppercase tracking-widest">Official Travel Guide</div>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your official guide to exploring Rwanda's extraordinary capital. We connect travellers with the best of Kigali's culture, nature, and hospitality.
            </p>
            <div className="flex gap-3">
              {["twitter", "instagram", "facebook", "youtube"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-stone-800 hover:bg-emerald-700 text-stone-400 hover:text-white flex items-center justify-center transition-all text-xs font-bold">
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Explore</h4>
            <ul className="space-y-3">
              {["Top Attractions", "Hotels", "Restaurants", "Tours", "Culture", "Nightlife"].map((l) => (
                <li key={l}><a href="#" className="text-stone-400 hover:text-emerald-400 text-sm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-stone-400 text-sm">
                <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                KN 3 Rd, Kigali, Rwanda
              </li>
              <li className="flex items-center gap-2.5 text-stone-400 text-sm">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                hello@visitkigali.rw
              </li>
              <li className="flex items-center gap-2.5 text-stone-400 text-sm">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +250 788 000 000
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">© 2026 Kigali Tourism. Made with ❤️ in Rwanda.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-stone-500 hover:text-stone-300 text-sm transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);
    // Base font
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);

  return (
    <div className={dark ? "dark" : ""} style={{ scrollBehavior: "smooth" }}>
      <div className="bg-white dark:bg-stone-950 text-stone-900 dark:text-white min-h-screen">
        <Navbar dark={dark} toggleDark={() => setDark(!dark)} scrolled={scrolled} />
        <Hero />
        <About />
        <HillsDivider dark={false} />
        <Destinations />
        <HillsDivider dark={true} />
        <Hotels />
        <Culture />
        <Gallery />
        <Testimonials />
        <Newsletter />
        <Contact />
      </div>
    </div>
  );
}
