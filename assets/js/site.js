/**
 * Biu Forum — Shared Site Logic
 * Designed & Managed by Zion Netcom Solutions Limited
 */

// ── FOOTER HTML ──────────────────────────────────────────────────────────────
const FOOTER_HTML = `
<footer class="dark-footer py-20 px-6 lg:px-20" style="font-family:'Plus Jakarta Sans',sans-serif;">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

      <div class="space-y-6">
        <div class="flex items-center gap-3">
          <img src="logo.png" alt="Biu Forum" class="h-10 w-auto">
          <div>
            <div class="font-extrabold text-sm text-white tracking-tight uppercase">Biu Forum</div>
            <div class="text-[9px] text-green-500 font-bold tracking-[0.2em] uppercase">Official Platform</div>
          </div>
        </div>
        <p class="text-xs text-white/40 leading-relaxed max-w-xs">
          Empowering the indigenes of Biu Emirate through information, connectivity, and collective development across Nigeria and the diaspora.
        </p>
        <div class="flex gap-3">
          <a href="#" aria-label="Facebook" class="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300">
            <i class="fab fa-facebook-f text-white/50 text-xs"></i>
          </a>
          <a href="#" aria-label="Twitter / X" class="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300">
            <i class="fab fa-x-twitter text-white/50 text-xs"></i>
          </a>
          <a href="#" aria-label="WhatsApp" class="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300">
            <i class="fab fa-whatsapp text-white/50 text-xs"></i>
          </a>
          <a href="#" aria-label="YouTube" class="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300">
            <i class="fab fa-youtube text-white/50 text-xs"></i>
          </a>
        </div>
      </div>

      <div class="lg:pl-6">
        <p class="text-[10px] font-bold text-green-500 tracking-[0.2em] uppercase mb-6">Navigate</p>
        <div class="flex flex-col gap-3">
          <a href="index.html"    class="text-xs text-white/50 hover:text-green-400 font-medium transition-colors">Home</a>
          <a href="heritage.html" class="text-xs text-white/50 hover:text-green-400 font-medium transition-colors">Heritage & Culture</a>
          <a href="history.html"  class="text-xs text-white/50 hover:text-green-400 font-medium transition-colors flex items-center gap-1">
            <span class="text-[8px] text-green-600 font-black uppercase tracking-widest border border-green-600/40 px-1 rounded">NEW</span>
            History of Biu
          </a>
          <a href="emirs.html"    class="text-xs text-white/50 hover:text-green-400 font-medium transition-colors">Past Emirs & Dignitaries</a>
          <a href="news.html"     class="text-xs text-white/50 hover:text-green-400 font-medium transition-colors">News</a>
          <a href="events.html"   class="text-xs text-white/50 hover:text-green-400 font-medium transition-colors">Events</a>
          <a href="gallery.html"  class="text-xs text-white/50 hover:text-green-400 font-medium transition-colors">Gallery</a>
        </div>
      </div>

      <div>
        <p class="text-[10px] font-bold text-green-500 tracking-[0.2em] uppercase mb-6">Community</p>
        <div class="flex flex-col gap-3">
          <a href="about.html"         class="text-xs text-white/50 hover:text-green-400 font-medium transition-colors">About Us</a>
          <a href="leadership.html"    class="text-xs text-white/50 hover:text-green-400 font-medium transition-colors">Leadership</a>
          <a href="join-registry.html" class="text-xs text-white/50 hover:text-green-400 font-medium transition-colors">Join Registry</a>
          <a href="contact.html"       class="text-xs text-white/50 hover:text-green-400 font-medium transition-colors">Contact Us</a>
        </div>
      </div>

      <div>
        <p class="text-[10px] font-bold text-green-500 tracking-[0.2em] uppercase mb-6">Contact</p>
        <div class="flex flex-col gap-4">
          <div class="flex items-start gap-3">
            <i class="fas fa-phone text-green-600 text-xs mt-1"></i>
            <a href="tel:+2347067589333" class="text-xs text-white/50 hover:text-white transition-colors">+234 706 758 9333</a>
          </div>
          <div class="flex items-start gap-3">
            <i class="fas fa-envelope text-green-600 text-xs mt-1"></i>
            <a href="mailto:info@biuforum.com" class="text-xs text-white/50 hover:text-white transition-colors">info@biuforum.com</a>
          </div>
          <div class="flex items-start gap-3">
            <i class="fas fa-location-dot text-green-600 text-xs mt-1"></i>
            <span class="text-xs text-white/50">Biu, Borno State, Nigeria</span>
          </div>
        </div>
      </div>

    </div>
    <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <p class="text-[10px] text-white/20 uppercase tracking-widest">© 2026 Official Biu Emirate Platform. All rights reserved.</p>
      <div class="flex items-center gap-3">
        <span class="text-[10px] text-white/20 uppercase tracking-widest">Designed & managed by</span>
        <span class="text-[11px] font-black text-white uppercase border-b-2 border-green-600 pb-0.5">Zion Netcom Solutions Limited</span>
      </div>
    </div>
  </div>
</footer>`;

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject footer
    const fp = document.getElementById('footer-placeholder');
    if (fp) fp.innerHTML = FOOTER_HTML;

    // Fix footer logo path based on nesting level
    const logoImgs = fp ? fp.querySelectorAll('img[src="logo.png"]') : [];
    const depth = (window.location.pathname.match(/\//g) || []).length;
    if (depth > 1) logoImgs.forEach(img => img.src = '../logo.png');

    // Fix footer href paths when inside admin/
    if (window.location.pathname.includes('/admin/')) {
        fp && fp.querySelectorAll('a[href$=".html"]').forEach(a => {
            if (!a.href.includes('/admin/')) a.href = '../' + a.getAttribute('href');
        });
    }

    // 2. Scroll animations
    initScrollAnimations();

    // 3. Registry modal click-away
    const modal = document.getElementById('registryModal');
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeRegistry(); });

    // 4. Search
    const search = document.getElementById('globalSearch');
    if (search) {
        search.addEventListener('keypress', e => {
            if (e.key === 'Enter' && search.value.trim()) {
                window.location.href = 'news.html?q=' + encodeURIComponent(search.value.trim());
            }
        });
    }
});

// ── NAV ───────────────────────────────────────────────────────────────────────
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.toggle('translate-x-full');
}

// ── REGISTRY MODAL ────────────────────────────────────────────────────────────
function openRegistry() {
    const modal = document.getElementById('registryModal');
    if (!modal) return;
    modal.classList.replace('hidden', 'flex');
    document.body.style.overflow = 'hidden';
}
function closeRegistry() {
    const modal = document.getElementById('registryModal');
    if (!modal) return;
    modal.classList.replace('flex', 'hidden');
    document.body.style.overflow = '';
}
// ── NEWSLETTER & REGISTRY CONFIG ─────────────────────────────────────────────
// STEP 1: Replace the URL below with your Mailchimp form action URL.
// How to get it: Mailchimp → Audience → Signup forms → Embedded forms
//                → copy the URL inside action="..." of the <form> tag
//                → paste it below (keep the quotes)
const MAILCHIMP_URL = 'https://gmail.us13.list-manage.com/subscribe/post?u=5d222b1e81a32835c24a8a0a9&amp;id=d535e38ba8&amp;f_id=00fdc3e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank';

// ── Get Firestore safely (works on all pages) ─────────────────────────────────
function getDb() {
    try {
        if (typeof firebase === 'undefined') return null;
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey:            "AIzaSyBH-M2fLyy3vEuh87L3FOZBq79LTxE6I8M",
                authDomain:        "biu-forum.firebaseapp.com",
                projectId:         "biu-forum",
                storageBucket:     "biu-forum.firebasestorage.app",
                messagingSenderId: "174972307655",
                appId:             "1:174972307655:web:b374798e9c55fa04c296e2"
            });
        }
        return firebase.firestore();
    } catch(e) {
        try { return firebase.firestore(); } catch(e2) { return null; }
    }
}

// ── Save to Firestore subscribers collection ──────────────────────────────────
async function saveToFirestore(data) {
    try {
        const db = getDb();
        if (!db) return;
        await db.collection('subscribers').add({
            ...data,
            subscribedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('✓ Saved to Firestore subscribers');
    } catch(err) {
        console.warn('Firestore save error:', err.message);
    }
}

// ── Send to Mailchimp via JSONP (no CORS issues) ──────────────────────────────
function sendToMailchimp(email, name) {
    if (!MAILCHIMP_URL || MAILCHIMP_URL.includes('YOUR_MAILCHIMP')) return;
    const endpoint = MAILCHIMP_URL.replace('/post?', '/post-json?') +
                     '&EMAIL=' + encodeURIComponent(email) +
                     '&FNAME=' + encodeURIComponent(name || '') +
                     '&c=_mc_cb_' + Date.now();
    const s = document.createElement('script');
    s.src = endpoint;
    document.body.appendChild(s);
    setTimeout(() => { try { document.body.removeChild(s); } catch(e){} }, 4000);
}
window['_mc_cb_' + Date.now()] = function() {}; // JSONP response handler

async function handleRegistry(e) {
    e.preventDefault();
    const form  = e.target;
    const name  = (form.querySelector('input[type="text"]') || {}).value || '';
    const email = form.querySelector('input[type="email"]').value.trim();
    const btn   = form.querySelector('button[type="submit"]');
    if (!email) return;

    const orig = btn ? btn.innerHTML : '';
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Saving…'; }

    // 1 — Save to Firestore
    await saveToFirestore({
        name:   name.trim(),
        email,
        source: 'Homepage Registry Modal',
        page:   window.location.pathname,
        type:   'registry'
    });

    // 2 — Send to Mailchimp
    sendToMailchimp(email, name.trim());

    // 3 — Success feedback
    showSiteToast('✓ ' + (name.trim() || email) + ' added to the Official Biu Registry!', 'success');
    form.reset();
    closeRegistry();
    if (btn) { btn.disabled = false; btn.innerHTML = orig; }
}

// ── TOAST ─────────────────────────────────────────────────────────────────────
function showSiteToast(msg, type = '') {
    let toast = document.getElementById('siteToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'siteToast';
        toast.className = 'site-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.className = 'site-toast ' + type;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => toast.classList.add('show'));
    });
    setTimeout(() => toast.classList.remove('show'), 3500);
}

// ── SUBSCRIPTION (news.html, events.html subscribe forms) ────────────────────
async function handleSubscribe(e) {
    e.preventDefault();
    const form  = e.target;
    const email = form.querySelector('input[type="email"]').value.trim();
    const btn   = form.querySelector('button[type="submit"]');
    if (!email) return;

    const orig = btn ? btn.innerHTML : '';
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Subscribing…'; }

    // 1 — Save to Firestore
    await saveToFirestore({
        name:   '',
        email,
        source: document.title.replace(' | Biu Forum', '') + ' — Subscribe Form',
        page:   window.location.pathname,
        type:   'newsletter'
    });

    // 2 — Send to Mailchimp
    sendToMailchimp(email, '');

    // 3 — Success feedback
    showSiteToast('✓ Subscribed! Updates will be sent to ' + email, 'success');
    form.reset();
    if (btn) { btn.disabled = false; btn.innerHTML = orig; }
}

// ── SCROLL ANIMATIONS ─────────────────────────────────────────────────────────
function initScrollAnimations() {
    const els = document.querySelectorAll('.scroll-anim');
    if (!els.length) return;
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
}
