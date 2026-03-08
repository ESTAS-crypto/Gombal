/* ============================================
   ROMANTIC GOMBALAN - v4 THEMED CHALLENGES
   Each challenge relates to its gombalan!
   ============================================ */

// ==========================================
// GOMBALAN + THEMED CHALLENGE DATA
// ==========================================
const gombalanList = [
    {
        text: "Kamu tahu kenapa aku suka hujan? Karena setiap tetes airnya mengingatkanku pada betapa aku jatuh... jatuh cinta padamu 💕",
        emoji: "🌧️💕",
        challenge: "catch-rain",
        challengeTitle: "🌧️ Tangkap Tetesan Hujan!",
        challengeHint: "Tangkap semua tetesan hujan yang jatuh"
    },
    {
        text: "Kalau kamu adalah bintang, aku rela jadi langit malam supaya aku bisa memelukmu selamanya ✨",
        emoji: "🌙✨",
        challenge: "riddle",
        challengeTitle: "🌙 Teka-Teki Bintang",
        riddleQuestion: "Aku bersinar di malam hari, ada jutaan temanku di langit. Aku apa?",
        riddleAnswer: "bintang",
        riddleOptions: ["Bulan", "Bintang", "Lampu", "Matahari"]
    },
    {
        text: "Aku bukan fotografer, tapi aku bisa membayangkan kita berdua di masa depan 📸",
        emoji: "📸💖",
        challenge: "scratch",
        challengeTitle: "✨ Gosok untuk Buka Rahasia!",
        challengeHint: "Gosok area ini untuk membuka pesan rahasia",
        scratchReveal: "✨ Aku selalu\n💕 membayangkanmu 💕"
    },
    {
        text: "Apakah kamu peta? Karena aku tersesat di matamu dan tidak mau ditemukan 🗺️",
        emoji: "🗺️💕",
        challenge: "riddle",
        challengeTitle: "🗺️ Teka-Teki Cinta",
        riddleQuestion: "Aku punya banyak jalan tapi tidak bisa dilalui kaki. Aku apa?",
        riddleAnswer: "peta",
        riddleOptions: ["Peta", "Labirin", "Jembatan", "Rel Kereta"]
    },
    {
        text: "Kamu pasti capek ya? Karena kamu sudah berlari-lari di pikiranku seharian 🏃‍♀️",
        emoji: "🏃‍♀️💭",
        challenge: "rapid-tap",
        challengeTitle: "🏃‍♀️ Berlari di Pikiranku!",
        challengeHint: "Ketuk 20x secepat mungkin! Seperti kamu berlari di pikiranku"
    },
    {
        text: "Kalau aku jadi bunga, aku mau jadi matahari karena aku selalu ingin menghadap ke arahmu 🌻",
        emoji: "🌻🌞",
        challenge: "hold-bloom",
        challengeTitle: "🌻 Tumbuhkan Bunga Cinta!",
        challengeHint: "Tahan tombol untuk menumbuhkan bunga matahari"
    },
    {
        text: "Aku bukan ahli matematika, tapi aku tahu kamu + aku = sempurna 💕",
        emoji: "➕💖",
        challenge: "riddle",
        challengeTitle: "➕ Hitung Cinta!",
        riddleQuestion: "Kamu + Aku = ?",
        riddleAnswer: "sempurna",
        riddleOptions: ["Dua Orang", "Sempurna", "Banyak", "Lucu"]
    },
    {
        text: "Kalau cinta itu lautan, aku rela tenggelam asal bersamamu 🌊",
        emoji: "🌊💙",
        challenge: "pop-bubbles",
        challengeTitle: "🌊 Pecahkan Gelembung Laut!",
        challengeHint: "Pecahkan semua gelembung di lautan cinta"
    },
    {
        text: "Kamu tahu? Senyummu itu lebih manis dari semua gula di dunia ini 😊",
        emoji: "😊🍬",
        challenge: "emoji-match",
        challengeTitle: "😊 Temukan Pasangan Senyum!",
        challengeHint: "Cocokkan semua pasangan emoji manis"
    },
    {
        text: "Aku mau jadi selimutmu supaya setiap malam aku bisa memelukmu dengan hangat 🤗",
        emoji: "🤗💕",
        challenge: "scratch",
        challengeTitle: "🤗 Gosok untuk Kehangatan!",
        challengeHint: "Gosok area ini untuk merasakan kehangatan",
        scratchReveal: "🤗 Pelukan Hangat\nSetiap Malam 💕"
    },
    {
        text: "Kalau kamu hujan, aku gak butuh payung karena aku mau basah kuyup oleh cintamu ☔",
        emoji: "☔💖",
        challenge: "catch-rain",
        challengeTitle: "☔ Tangkap Hujan Cinta!",
        challengeHint: "Tangkap semua tetesan cinta yang jatuh"
    },
    {
        text: "Kamu itu seperti WiFi, tanpamu hidupku disconnect 📶",
        emoji: "📶❤️",
        challenge: "riddle",
        challengeTitle: "📶 Teka-Teki Koneksi",
        riddleQuestion: "Aku tidak terlihat, tapi kamu butuh aku setiap hari untuk terhubung. Aku apa?",
        riddleAnswer: "wifi",
        riddleOptions: ["Listrik", "WiFi", "Udara", "Cinta"]
    },
    {
        text: "Aku rela jadi alarm supaya aku bisa jadi yang pertama menyapamu setiap pagi ⏰",
        emoji: "⏰💕",
        challenge: "hold-bloom",
        challengeTitle: "⏰ Putar Jam Cinta!",
        challengeHint: "Tahan tombol untuk memutar waktu sampai pagi"
    },
    {
        text: "Kalau bumi ini bulat, kenapa hatiku selalu berputar ke arahmu? 🌍",
        emoji: "🌍💖",
        challenge: "pop-bubbles",
        challengeTitle: "🌍 Pecahkan Planet Cinta!",
        challengeHint: "Pecahkan semua gelembung planet"
    },
    {
        text: "Kamu itu kayak kopi, bikin aku nggak bisa tidur karena terus memikirkanmu ☕",
        emoji: "☕💕",
        challenge: "hold-bloom",
        challengeTitle: "☕ Isi Gelas Kopi!",
        challengeHint: "Tahan tombol untuk mengisi kopi cintamu"
    }
];

let currentIndex = 0;
let isLocked = true;

// ==========================================
// MATRIX RAIN
// ==========================================
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const chars = '♥♡💕❤✿✧⋆♪♫★☆αβγ01';
    const charArray = Array.from(chars);
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    function draw() {
        ctx.fillStyle = 'rgba(10,10,15,0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        const colors = ['#FF1744', '#FF6B9A', '#E040FB', '#FF4081', '#FF80AB'];
        for (let i = 0; i < drops.length; i++) {
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.font = `${fontSize}px monospace`; ctx.shadowBlur = 8; ctx.shadowColor = '#FF1744';
            ctx.fillText(charArray[Math.floor(Math.random() * charArray.length)], i * fontSize, drops[i] * fontSize);
            ctx.shadowBlur = 0;
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    const interval = setInterval(draw, 45);
    window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
    return interval;
}

// ==========================================
// STARS
// ==========================================
function initStars(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const stars = [];
    for (let i = 0; i < 100; i++) {
        stars.push({
            x: Math.random() * canvas.width, y: Math.random() * canvas.height,
            r: Math.random() * 1.8 + 0.4, o: Math.random() * 0.8 + 0.2, sp: Math.random() * 0.02 + 0.005,
            ph: Math.random() * Math.PI * 2, c: ['#fff', '#FFB6C1', '#FFD700', '#00E5FF', '#E040FB'][Math.floor(Math.random() * 5)]
        });
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(s => {
            s.ph += s.sp; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = s.c; ctx.globalAlpha = s.o * (Math.sin(s.ph) * 0.4 + 0.6); ctx.fill(); ctx.globalAlpha = 1;
        });
        requestAnimationFrame(draw);
    }
    draw();
    window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
}

// ==========================================
// CONFETTI
// ==========================================
function spawnConfetti(count = 40) {
    const c = document.getElementById('confetti-container');
    const colors = ['#FF1744', '#FF6B9A', '#FFD700', '#E040FB', '#00E5FF', '#69F0AE'];
    for (let i = 0; i < count; i++) {
        const el = document.createElement('div'); el.className = 'confetti';
        const sz = 5 + Math.random() * 8; el.style.cssText = `width:${sz}px;height:${sz}px;background:${colors[Math.floor(Math.random() * colors.length)]};border-radius:${Math.random() > 0.5 ? '50%' : '2px'};left:${30 + Math.random() * 40}%;top:20%;`;
        const a = (Math.random() - 0.5) * 2.5, d = 150 + Math.random() * 300;
        el.animate([{ transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${d}px) translateX(${Math.sin(a) * d}px) rotate(${Math.random() * 720}deg) scale(0.2)`, opacity: 0 }],
            { duration: 1800 + Math.random() * 1200, easing: 'cubic-bezier(.25,.46,.45,.94)', fill: 'forwards', delay: Math.random() * 300 });
        c.appendChild(el);
        setTimeout(() => el.remove(), 3500);
    }
}

// ==========================================
// GIFT BOX
// ==========================================
function initGiftBox() {
    const giftBox = document.getElementById('gift-box');
    const handleOpen = () => {
        giftBox.classList.add('opening');
        const w = document.getElementById('gift-wrapper');
        // Big emoji explosion!
        setTimeout(() => {
            const emojis = ['💕', '💖', '✨', '🌸', '💝', '⭐', '🎀', '💗', '❤️', '🌹', '💘', '🥰', '💞', '🎉', '🌟', '💫'];
            for (let i = 0; i < 50; i++) {
                const p = document.createElement('div');
                p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                const sz = 16 + Math.random() * 22;
                p.style.cssText = `position:absolute;z-index:20;font-size:${sz}px;left:50%;top:40%;pointer-events:none;`;
                const angle = (Math.PI * 2 / 50) * i + (Math.random() - 0.5) * 0.5;
                const dist = 100 + Math.random() * 250;
                const dur = 1500 + Math.random() * 1500;
                p.animate([
                    { transform: 'translate(-50%,-50%) scale(0) rotate(0deg)', opacity: 1 },
                    { transform: `translate(calc(-50% + ${Math.cos(angle) * dist * 0.6}px), calc(-50% + ${Math.sin(angle) * dist * 0.6}px)) scale(1.2) rotate(${Math.random() * 180}deg)`, opacity: 1, offset: 0.3 },
                    { transform: `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px)) scale(0.3) rotate(${Math.random() * 360}deg)`, opacity: 0 }
                ], { duration: dur, fill: 'forwards', easing: 'cubic-bezier(.2,.8,.3,1)', delay: Math.random() * 300 });
                w.appendChild(p);
            }
        }, 150);
        setTimeout(() => {
            document.getElementById('gift-screen').classList.add('fade-out');
            setTimeout(() => { document.getElementById('gift-screen').classList.add('hidden'); showMainContent(); }, 1000);
        }, 1500);
    };
    giftBox.addEventListener('click', handleOpen);
    giftBox.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handleOpen(); });
}

// ==========================================
// MAIN CONTENT
// ==========================================
function showMainContent() {
    const m = document.getElementById('main-content');
    m.classList.remove('hidden');
    requestAnimationFrame(() => m.classList.add('show'));
    initStars('stars-canvas');
    loadGombalan(0);
}

// ==========================================
// GOMBALAN DISPLAY
// ==========================================
function loadGombalan(index) {
    currentIndex = index;
    isLocked = true;
    const g = gombalanList[index];
    document.getElementById('card-emoji').textContent = g.emoji;
    document.getElementById('card-text').textContent = g.text;
    document.getElementById('card-number').textContent = `#${index + 1} / ${gombalanList.length}`;
    document.getElementById('counter-text').textContent = `💕 ${index + 1} / ${gombalanList.length}`;
    const card = document.getElementById('gombalan-card');
    card.classList.add('locked'); card.classList.remove('unlocked');
    document.getElementById('next-btn').classList.add('hidden');
    loadChallenge(g);
}

function unlockCard() {
    if (!isLocked) return;
    isLocked = false;
    const card = document.getElementById('gombalan-card');
    card.classList.remove('locked'); card.classList.add('unlocked');
    spawnConfetti(45);
    setTimeout(() => {
        const btn = document.getElementById('next-btn');
        btn.classList.remove('hidden');
        btn.textContent = currentIndex >= gombalanList.length - 1 ? '🎉 Selesai! Mulai Lagi 💕' : 'Gombalan Berikutnya 💌';
    }, 600);
    document.getElementById('challenge-area').innerHTML = '';
}

// ==========================================
// LOAD THEMED CHALLENGE
// ==========================================
function loadChallenge(gombalan) {
    const area = document.getElementById('challenge-area');
    area.innerHTML = '';
    switch (gombalan.challenge) {
        case 'catch-rain': return createCatchRain(area, gombalan);
        case 'riddle': return createRiddle(area, gombalan);
        case 'scratch': return createScratch(area, gombalan);
        case 'rapid-tap': return createRapidTap(area, gombalan);
        case 'hold-bloom': return createHoldBloom(area, gombalan);
        case 'pop-bubbles': return createPopBubbles(area, gombalan);
        case 'emoji-match': return createEmojiMatch(area, gombalan);
    }
}

// ==========================================
// CHALLENGE: CATCH RAIN / LOVE DROPS
// ==========================================
function createCatchRain(area, g) {
    const total = 8;
    let caught = 0;
    const isLove = g.emoji.includes('☔');
    const items = isLove ? ['💕', '💖', '💗', '💓', '❤️', '💘', '💝', '💞'] : ['💧', '💧', '💦', '🌧️', '💧', '💦', '💧', '💧'];

    area.innerHTML = `
        <div class="challenge-container">
            <p class="challenge-title">${g.challengeTitle}</p>
            <p class="challenge-subtitle">${g.challengeHint}</p>
            <div class="tap-hearts-area" id="catch-area"></div>
            <p class="tap-counter" id="catch-count">0 / ${total}</p>
        </div>`;

    const catchArea = document.getElementById('catch-area');
    for (let i = 0; i < total; i++) {
        const d = document.createElement('div');
        d.className = 'tap-heart';
        d.textContent = items[i];
        d.style.left = (5 + Math.random() * 75) + '%';
        d.style.top = (5 + Math.random() * 65) + '%';
        d.style.animationDelay = (Math.random() * 2) + 's';
        d.style.animationDuration = (2 + Math.random() * 2) + 's';
        d.addEventListener('click', () => {
            if (d.classList.contains('popped')) return;
            d.classList.add('popped');
            caught++;
            document.getElementById('catch-count').textContent = `${caught} / ${total}`;
            if (caught >= total) setTimeout(unlockCard, 400);
        });
        catchArea.appendChild(d);
    }
}

// ==========================================
// CHALLENGE: RIDDLE (Multiple Choice)
// ==========================================
function createRiddle(area, g) {
    area.innerHTML = `
        <div class="challenge-container">
            <p class="challenge-title">${g.challengeTitle}</p>
            <p class="challenge-subtitle" style="font-style:italic;color:#f0e6f6;font-size:0.9rem;margin-bottom:15px;">"${g.riddleQuestion}"</p>
            <div class="riddle-options" id="riddle-options"></div>
            <p class="riddle-feedback" id="riddle-feedback"></p>
        </div>`;

    const optDiv = document.getElementById('riddle-options');
    // Shuffle options
    const opts = [...g.riddleOptions].sort(() => Math.random() - 0.5);

    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'riddle-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => {
            if (opt.toLowerCase() === g.riddleAnswer.toLowerCase()) {
                btn.classList.add('correct');
                document.getElementById('riddle-feedback').textContent = '✅ Benar! Kamu pintar! 💕';
                document.getElementById('riddle-feedback').style.color = '#69F0AE';
                // Disable all buttons
                document.querySelectorAll('.riddle-btn').forEach(b => b.disabled = true);
                setTimeout(unlockCard, 800);
            } else {
                btn.classList.add('wrong');
                btn.disabled = true;
                document.getElementById('riddle-feedback').textContent = '❌ Coba lagi, sayang!';
                document.getElementById('riddle-feedback').style.color = '#FF6B9A';
                setTimeout(() => { btn.classList.remove('wrong'); }, 500);
            }
        });
        optDiv.appendChild(btn);
    });
}

// ==========================================
// CHALLENGE: SCRATCH CARD (FIXED!)
// ==========================================
function createScratch(area, g) {
    area.innerHTML = `
        <div class="challenge-container">
            <p class="challenge-title">${g.challengeTitle}</p>
            <p class="challenge-subtitle">${g.challengeHint}</p>
            <div class="scratch-container" id="scratch-wrapper">
                <div class="scratch-reveal" id="scratch-reveal">${g.scratchReveal}</div>
                <canvas class="scratch-canvas" id="scratch-canvas"></canvas>
            </div>
            <p class="scratch-hint">👆 Gosok dengan jari atau mouse</p>
        </div>`;

    const wrapper = document.getElementById('scratch-wrapper');
    const reveal = document.getElementById('scratch-reveal');
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size to match wrapper
    const w = Math.min(320, window.innerWidth - 80);
    const h = 110;
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    reveal.style.width = w + 'px';
    reveal.style.height = h + 'px';

    // Draw the scratch coating (what gets scratched away)
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, '#C51162');
    gradient.addColorStop(0.3, '#FF1744');
    gradient.addColorStop(0.6, '#E040FB');
    gradient.addColorStop(1, '#FF4081');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    // Draw scratch text on top
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = 'bold 16px Poppins, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ GOSOK DI SINI ✨', w / 2, h / 2 - 10);
    ctx.font = '12px Poppins, sans-serif';
    ctx.fillText('👆 gosok gosok gosok 👆', w / 2, h / 2 + 15);

    // Draw sparkle decorations
    for (let i = 0; i < 15; i++) {
        ctx.fillStyle = `rgba(255,215,0,${0.3 + Math.random() * 0.4})`;
        ctx.font = `${8 + Math.random() * 10}px serif`;
        ctx.fillText('✦', Math.random() * w, Math.random() * h);
    }

    let isScratching = false;
    let hasUnlocked = false;
    let scratchStrokes = 0;
    let lastX = -1, lastY = -1;
    let totalDist = 0;

    function scratch(x, y) {
        if (hasUnlocked) return;
        ctx.globalCompositeOperation = 'destination-out';
        // Big radius for easy scratching
        ctx.beginPath();
        ctx.arc(x, y, 35, 0, Math.PI * 2);
        ctx.fill();
        // Also draw a thick connecting line for smooth scratching
        if (lastX >= 0 && lastY >= 0) {
            ctx.lineWidth = 50;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();
            totalDist += Math.hypot(x - lastX, y - lastY);
        }
        lastX = x; lastY = y;
        scratchStrokes++;

        // Needs some effort: 25 strokes OR 300px total drag distance
        if ((scratchStrokes >= 25 || totalDist > 300) && !hasUnlocked) {
            hasUnlocked = true;
            ctx.clearRect(0, 0, w, h);
            canvas.style.opacity = '0';
            setTimeout(unlockCard, 500);
        }
    }

    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        const cx = e.touches ? e.touches[0].clientX : e.clientX;
        const cy = e.touches ? e.touches[0].clientY : e.clientY;
        return { x: cx - rect.left, y: cy - rect.top };
    }

    canvas.addEventListener('mousedown', e => { isScratching = true; scratch(getPos(e).x, getPos(e).y); });
    canvas.addEventListener('mousemove', e => { if (isScratching) { const p = getPos(e); scratch(p.x, p.y); } });
    canvas.addEventListener('mouseup', () => isScratching = false);
    canvas.addEventListener('mouseleave', () => isScratching = false);
    canvas.addEventListener('touchstart', e => { e.preventDefault(); isScratching = true; const p = getPos(e); scratch(p.x, p.y); }, { passive: false });
    canvas.addEventListener('touchmove', e => { e.preventDefault(); if (isScratching) { const p = getPos(e); scratch(p.x, p.y); } }, { passive: false });
    canvas.addEventListener('touchend', () => isScratching = false);
}

// ==========================================
// CHALLENGE: RAPID TAP
// ==========================================
function createRapidTap(area, g) {
    const target = 20;
    let count = 0, timeLeft = 6, started = false, timer = null;

    area.innerHTML = `
        <div class="challenge-container">
            <p class="challenge-title">${g.challengeTitle}</p>
            <p class="challenge-subtitle">${g.challengeHint}</p>
            <div class="rapid-tap-area">
                <button class="rapid-btn" id="rapid-btn">🏃‍♀️</button>
                <p class="rapid-counter"><span id="rapid-count">0</span> / ${target}</p>
                <p class="meter-text" id="rapid-timer">⏰ ${timeLeft.toFixed(1)} detik</p>
            </div>
        </div>`;

    const btn = document.getElementById('rapid-btn');
    btn.addEventListener('click', () => {
        if (!started) {
            started = true;
            timer = setInterval(() => {
                timeLeft -= 0.1;
                document.getElementById('rapid-timer').textContent = `⏰ ${Math.max(0, timeLeft).toFixed(1)} detik`;
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    if (count < target) {
                        count = 0; timeLeft = 6; started = false;
                        document.getElementById('rapid-count').textContent = '0';
                        document.getElementById('rapid-timer').textContent = `⏰ 6.0 detik`;
                        btn.animate([{ transform: 'translateX(-5px)' }, { transform: 'translateX(5px)' }, { transform: 'translateX(-5px)' }, { transform: 'translateX(0)' }], { duration: 400 });
                    }
                }
            }, 100);
        }
        count++;
        document.getElementById('rapid-count').textContent = count;
        btn.style.transform = 'scale(0.85)';
        setTimeout(() => btn.style.transform = '', 80);
        if (count >= target) { clearInterval(timer); setTimeout(unlockCard, 300); }
    });
}

// ==========================================
// CHALLENGE: HOLD TO BLOOM / FILL
// ==========================================
function createHoldBloom(area, g) {
    let progress = 0, holding = false, interval = null;
    const icon = g.emoji.includes('☕') ? '☕' : g.emoji.includes('⏰') ? '⏰' : '🌱';
    const fullIcon = g.emoji.includes('☕') ? '☕' : g.emoji.includes('⏰') ? '⏰' : '🌻';

    area.innerHTML = `
        <div class="challenge-container">
            <p class="challenge-title">${g.challengeTitle}</p>
            <p class="challenge-subtitle">${g.challengeHint}</p>
            <div class="love-meter-container">
                <button class="hold-btn" id="hold-btn"><span id="bloom-icon">${icon}</span></button>
                <div class="meter-bar"><div class="meter-fill" id="meter-fill"></div></div>
                <p class="meter-text" id="meter-pct">0%</p>
            </div>
        </div>`;

    const btn = document.getElementById('hold-btn');
    const fill = document.getElementById('meter-fill');
    const pct = document.getElementById('meter-pct');
    const bloomIcon = document.getElementById('bloom-icon');

    function startHold() {
        if (progress >= 100) return;
        holding = true;
        interval = setInterval(() => {
            if (!holding) return;
            progress = Math.min(progress + 1.2, 100);
            fill.style.width = progress + '%';
            pct.textContent = Math.floor(progress) + '%';
            // Update icon at stages
            if (progress > 30 && progress < 70) bloomIcon.textContent = g.emoji.includes('☕') ? '☕' : g.emoji.includes('⏰') ? '🕐' : '🌿';
            if (progress >= 70) bloomIcon.textContent = fullIcon;
            if (progress >= 100) { clearInterval(interval); setTimeout(unlockCard, 400); }
        }, 40);
    }
    function stopHold() {
        holding = false; clearInterval(interval);
        if (progress < 100 && progress > 0) {
            const decay = setInterval(() => {
                if (holding || progress >= 100) { clearInterval(decay); return; }
                progress = Math.max(progress - 0.4, 0);
                fill.style.width = progress + '%'; pct.textContent = Math.floor(progress) + '%';
                if (progress <= 0) { clearInterval(decay); bloomIcon.textContent = icon; }
            }, 50);
        }
    }

    btn.addEventListener('mousedown', startHold); btn.addEventListener('mouseup', stopHold); btn.addEventListener('mouseleave', stopHold);
    btn.addEventListener('touchstart', e => { e.preventDefault(); startHold(); }, { passive: false });
    btn.addEventListener('touchend', stopHold);
}

// ==========================================
// CHALLENGE: POP BUBBLES
// ==========================================
function createPopBubbles(area, g) {
    const total = 10;
    let popped = 0;
    const isOcean = g.emoji.includes('🌊');
    const emojis = isOcean ? ['🫧', '🐚', '🐟', '🦀', '🐙', '🌊', '⭐', '🐠', '🦈', '🐬'] : ['🌍', '🪐', '⭐', '🌙', '☄️', '🌟', '💫', '🛸', '🌠', '✨'];
    const colors = ['rgba(255,107,154,0.25)', 'rgba(0,229,255,0.25)', 'rgba(224,64,251,0.25)', 'rgba(255,215,0,0.25)', 'rgba(105,240,174,0.25)',
        'rgba(255,152,0,0.25)', 'rgba(33,150,243,0.25)', 'rgba(255,23,68,0.25)', 'rgba(156,39,176,0.25)', 'rgba(0,188,212,0.25)'];

    area.innerHTML = `
        <div class="challenge-container">
            <p class="challenge-title">${g.challengeTitle}</p>
            <p class="challenge-subtitle">${g.challengeHint}</p>
            <div class="bubble-area" id="bubble-area"></div>
            <p class="tap-counter" id="bubble-count">0 / ${total}</p>
        </div>`;

    const ba = document.getElementById('bubble-area');
    for (let i = 0; i < total; i++) {
        const b = document.createElement('div');
        b.className = 'bubble';
        const sz = 32 + Math.random() * 18;
        b.style.cssText = `width:${sz}px;height:${sz}px;left:${3 + Math.random() * 75}%;top:${3 + Math.random() * 60}%;background:${colors[i]};font-size:${sz * 0.5}px;animation-delay:${Math.random() * 2}s;`;
        b.textContent = emojis[i];
        b.addEventListener('click', () => {
            if (b.classList.contains('popped')) return;
            b.classList.add('popped'); popped++;
            document.getElementById('bubble-count').textContent = `${popped} / ${total}`;
            if (popped >= total) setTimeout(unlockCard, 400);
        });
        ba.appendChild(b);
    }
}

// ==========================================
// CHALLENGE: EMOJI MATCH
// ==========================================
function createEmojiMatch(area, g) {
    const pairs = ['😊', '🍬', '😄', '🍭'];
    let cards = [...pairs, ...pairs];
    for (let i = cards.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[cards[i], cards[j]] = [cards[j], cards[i]]; }
    let flipped = [], matched = 0, lockBoard = false;

    area.innerHTML = `
        <div class="challenge-container">
            <p class="challenge-title">${g.challengeTitle}</p>
            <p class="challenge-subtitle">${g.challengeHint}</p>
            <div class="emoji-grid" id="emoji-grid"></div>
        </div>`;

    const grid = document.getElementById('emoji-grid');
    cards.forEach((emoji, i) => {
        const c = document.createElement('div');
        c.className = 'emoji-card-game'; c.textContent = '❓'; c.dataset.emoji = emoji;
        c.addEventListener('click', () => {
            if (lockBoard || c.classList.contains('flipped') || c.classList.contains('matched')) return;
            c.classList.add('flipped'); c.textContent = emoji; flipped.push(c);
            if (flipped.length === 2) {
                lockBoard = true;
                const [a, b] = flipped;
                if (a.dataset.emoji === b.dataset.emoji) {
                    a.classList.add('matched'); b.classList.add('matched'); matched++; flipped = []; lockBoard = false;
                    if (matched === pairs.length) setTimeout(unlockCard, 500);
                } else {
                    setTimeout(() => { a.classList.remove('flipped'); b.classList.remove('flipped'); a.textContent = '❓'; b.textContent = '❓'; flipped = []; lockBoard = false; }, 800);
                }
            }
        });
        grid.appendChild(c);
    });
}

// ==========================================
// NEXT
// ==========================================
function goNext() {
    // If on last gombalan, show ending screen
    if (currentIndex >= gombalanList.length - 1) {
        showEnding();
        return;
    }
    const card = document.getElementById('gombalan-card');
    card.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    card.style.transform = 'translateX(-100px) rotate(-5deg)'; card.style.opacity = '0';
    setTimeout(() => {
        card.style.transition = 'none'; card.style.transform = 'translateX(100px) rotate(5deg)'; card.style.opacity = '0';
        loadGombalan(currentIndex + 1);
        requestAnimationFrame(() => {
            card.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease';
            card.style.transform = ''; card.style.opacity = '';
        });
    }, 400);
}

// ==========================================
// ENDING SCREEN
// ==========================================
function showEnding() {
    // Fade out main content
    const main = document.getElementById('main-content');
    main.style.transition = 'opacity 1s ease';
    main.style.opacity = '0';

    setTimeout(() => {
        main.classList.add('hidden');
        const ending = document.getElementById('ending-screen');
        ending.classList.remove('hidden');
        initStars('ending-stars-canvas');

        // Start floating hearts
        startFloatingHearts();

        // Trigger text animations
        requestAnimationFrame(() => ending.classList.add('show'));

        // Confetti burst
        setTimeout(() => spawnConfetti(60), 500);
    }, 1000);
}

function startFloatingHearts() {
    const container = document.getElementById('ending-hearts-container');
    const hearts = ['💕', '💖', '💗', '❤️', '💘', '💝', '✨', '🌸', '💞', '🌹'];

    function spawnHeart() {
        const h = document.createElement('div');
        h.className = 'floating-heart';
        h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        h.style.left = (5 + Math.random() * 90) + '%';
        h.style.bottom = '-30px';
        h.style.fontSize = (12 + Math.random() * 18) + 'px';
        h.style.animationDuration = (6 + Math.random() * 6) + 's';
        container.appendChild(h);
        setTimeout(() => h.remove(), 12000);
    }

    // Spawn initial batch
    for (let i = 0; i < 10; i++) setTimeout(() => spawnHeart(), i * 300);
    // Keep spawning
    setInterval(spawnHeart, 800);
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const matrixInterval = initMatrixRain();
    setTimeout(() => document.querySelector('.line-1').classList.add('show'), 800);
    setTimeout(() => document.querySelector('.line-2').classList.add('show'), 2200);
    setTimeout(() => {
        clearInterval(matrixInterval);
        document.getElementById('loading-screen').classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('gift-screen').classList.remove('hidden');
            initStars('gift-stars-canvas');
            initGiftBox();
        }, 1500);
    }, 4500);
    document.getElementById('next-btn').addEventListener('click', goNext);
    document.getElementById('replay-btn').addEventListener('click', () => location.reload());
});
