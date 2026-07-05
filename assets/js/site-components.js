const pages = [
    { id: 'home', label: 'Home', labelAr: 'الرئيسية', href: 'index.html' },
    { id: 'about', label: 'About', labelAr: 'نبذة', href: 'about-waad-alhwaimel.html' },
    { id: 'projects', label: 'Projects', labelAr: 'المشاريع', href: 'software-engineering-projects.html' },
    { id: 'knowledge', label: 'Knowledge', labelAr: 'المعرفة', href: 'software-engineering-knowledge-base.html' },
    { id: 'tools', label: 'Tools', labelAr: 'الأدوات', href: 'student-project-planning-tools.html' }
];

const currentPage = () => document.body.dataset.page || 'home';
const storedTheme = localStorage.getItem('waad-kernel-theme');
const initialTheme = storedTheme || 'dark';
const storedLanguage = localStorage.getItem('waad-kernel-language');
const initialLanguage = storedLanguage || 'en';

document.documentElement.dataset.theme = initialTheme;
document.body?.setAttribute('data-theme', initialTheme);
document.documentElement.dataset.language = initialLanguage;
document.body?.setAttribute('data-language', initialLanguage);

const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('waad-kernel-theme', theme);

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
        const isLight = theme === 'light';
        const isArabic = document.body.dataset.language === 'ar';
        button.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
        button.querySelector('[data-theme-label]').textContent = isArabic
            ? (isLight ? 'الوضع الداكن' : 'الوضع الفاتح')
            : (isLight ? 'Dark Mode' : 'Light Mode');
    });
};

const applyLanguage = (language) => {
    const isArabic = language === 'ar';
    document.documentElement.dataset.language = language;
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.body.setAttribute('data-language', language);
    localStorage.setItem('waad-kernel-language', language);

    document.querySelectorAll('[data-language-toggle]').forEach((button) => {
        button.setAttribute('aria-pressed', String(isArabic));
        button.setAttribute('aria-label', isArabic ? 'Switch language to English' : 'Switch language to Arabic');
        button.textContent = isArabic ? 'الإنجليزية' : 'Arabic';
    });

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
        const isLight = document.body.dataset.theme === 'light';
        button.querySelector('[data-theme-label]').textContent = isArabic
            ? (isLight ? 'الوضع الداكن' : 'الوضع الفاتح')
            : (isLight ? 'Dark Mode' : 'Light Mode');
    });

    document.querySelectorAll('[data-i18n-key]').forEach((element) => {
        const english = element.getAttribute('data-i18n-en');
        const arabic = element.getAttribute('data-i18n-ar');
        if (english && arabic) element.textContent = isArabic ? arabic : english;
    });

    document.querySelectorAll('[data-nav-label]').forEach((element) => {
        const pageItem = pages.find((item) => item.id === element.getAttribute('data-nav-label'));
        if (pageItem) element.textContent = isArabic ? pageItem.labelAr : pageItem.label;
    });
};

const injectSharedStyles = () => {
    if (document.getElementById('waad-shared-styles')) return;

    const style = document.createElement('style');
    style.id = 'waad-shared-styles';
    style.textContent = `
        :root {
            --wk-bg-base: #06080d;
            --wk-bg-panel: rgba(14, 18, 26, 0.72);
            --wk-bg-panel-solid: #0e121a;
            --wk-bg-card: rgba(12, 16, 28, 0.68);
            --wk-text-main: #e2e8f0;
            --wk-text-muted: #8ea0b8;
            --wk-text-soft: #c5d1e4;
            --wk-cyan: #00f0ff;
            --wk-cyan-dim: rgba(0, 240, 255, 0.14);
            --wk-amber: #ffb020;
            --wk-amber-dim: rgba(255, 176, 32, 0.14);
            --wk-magenta: #ff3d7f;
            --wk-border: rgba(255, 255, 255, 0.09);
            --wk-border-strong: rgba(0, 240, 255, 0.24);
            --wk-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
            --wk-font-ui: 'Rajdhani', 'Space Grotesk', sans-serif;
            --wk-font-mono: 'JetBrains Mono', monospace;
        }

        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        html,
        body {
            margin: 0;
            overflow-x: hidden;
        }

        body {
            background-color: var(--wk-bg-base);
            color: var(--wk-text-main);
        }

        body:not([data-page="home"]) {
            background-color: var(--wk-bg-base) !important;
            color: var(--wk-text-main) !important;
            background-image:
                linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px) !important;
            background-size: 30px 30px !important;
            background-position: center center !important;
        }

        body:not([data-page="home"]) main {
            max-width: 1440px !important;
            padding-top: 9rem !important;
        }

        body:not([data-page="home"]) main.page-main-interface,
        body[data-page="about"] main.about-main-interface {
            max-width: none !important;
            padding-top: 0 !important;
        }

        site-header {
            position: static;
            inset: auto;
            background: transparent;
            border-bottom: 0;
            box-shadow: none;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
        }

        .wk-site-header {
            max-width: 100%;
            margin: 0;
            padding: 0 0 1rem;
            border-bottom: 2px solid var(--wk-border-strong);
        }

        .wk-site-header::after {
            bottom: -2px;
            left: 0;
            width: 280px;
        }

        body:not([data-page="home"]) main > header {
            position: relative;
            padding: clamp(2rem, 4vw, 3.5rem);
            border: 1px solid var(--wk-border);
            border-left: 4px solid var(--wk-cyan);
            border-radius: 4px;
            background:
                linear-gradient(90deg, color-mix(in srgb, var(--wk-cyan) 10%, transparent), transparent 58%),
                linear-gradient(180deg, color-mix(in srgb, var(--wk-bg-panel-solid) 78%, transparent), color-mix(in srgb, var(--wk-bg-card) 84%, transparent));
            box-shadow: var(--wk-shadow);
            overflow: hidden;
            isolation: isolate;
        }

        body:not([data-page="home"]) main > header::before {
            content: 'WK_SECTION_BOOT //';
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            background: var(--wk-cyan);
            color: var(--wk-bg-base);
            padding: 0.2rem 0.65rem;
            font-family: var(--wk-font-mono);
            font-size: 0.62rem;
            font-weight: 800;
            letter-spacing: 0.08em;
        }

        body:not([data-page="home"]) main > header::after {
            content: '';
            position: absolute;
            inset: auto 1.5rem 1.25rem 1.5rem;
            height: 1px;
            background: linear-gradient(90deg, var(--wk-cyan), transparent 70%);
            box-shadow: 0 0 14px color-mix(in srgb, var(--wk-cyan) 34%, transparent);
        }

        body:not([data-page="home"]) main > header h1 {
            font-size: clamp(3.4rem, 7vw, 6.5rem) !important;
            line-height: 0.9 !important;
            text-shadow: 0 0 16px color-mix(in srgb, var(--wk-text-main) 32%, transparent);
        }

        body[data-theme="light"]:not([data-page="home"]) main > header h1 {
            text-shadow: none;
        }

        body[data-theme="light"] {
            --bg-base: #edf4f7;
            --bg-panel: rgba(245, 251, 252, 0.78);
            --bg-panel-solid: #f6fbfc;
            --text-main: #172033;
            --text-muted: #53657b;
            --neon-cyan: #087f93;
            --neon-cyan-dim: rgba(8, 127, 147, 0.13);
            --neon-amber: #a86400;
            --neon-amber-dim: rgba(168, 100, 0, 0.13);
            --neon-magenta: #b8245e;
            --glow-cyan: 0 0 0 rgba(8, 127, 147, 0);
            --glow-amber: 0 0 0 rgba(168, 100, 0, 0);
            --glow-magenta: 0 0 0 rgba(184, 36, 94, 0);
            --wk-bg-base: #edf4f7;
            --wk-bg-panel: rgba(245, 251, 252, 0.82);
            --wk-bg-panel-solid: #f6fbfc;
            --wk-bg-card: rgba(246, 251, 252, 0.84);
            --wk-text-main: #172033;
            --wk-text-muted: #53657b;
            --wk-text-soft: #2d3d52;
            --wk-cyan: #087f93;
            --wk-cyan-dim: rgba(8, 127, 147, 0.12);
            --wk-amber: #a86400;
            --wk-amber-dim: rgba(168, 100, 0, 0.12);
            --wk-magenta: #b8245e;
            --wk-border: rgba(23, 32, 51, 0.13);
            --wk-border-strong: rgba(8, 127, 147, 0.28);
            --wk-shadow: 0 18px 45px rgba(31, 57, 80, 0.12);
            background-color: #edf4f7 !important;
            color: #172033 !important;
            background-image:
                linear-gradient(rgba(8, 127, 147, 0.045) 1px, transparent 1px),
                linear-gradient(90deg, rgba(8, 127, 147, 0.045) 1px, transparent 1px) !important;
        }

        body:not([data-page="home"]) .bg-grid {
            background-image:
                linear-gradient(to right, rgba(0, 240, 255, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 240, 255, 0.03) 1px, transparent 1px) !important;
            background-size: 30px 30px !important;
            mask-image: none !important;
            -webkit-mask-image: none !important;
        }

        body:not([data-page="home"]) .ambient-blob-cyan {
            background: radial-gradient(circle, rgba(0, 240, 255, 0.055) 0%, transparent 62%) !important;
        }

        body:not([data-page="home"]) .ambient-blob-amber {
            background: radial-gradient(circle, rgba(255, 159, 0, 0.045) 0%, transparent 62%) !important;
        }

        body[data-theme="light"] .ambient-light {
            background: radial-gradient(circle at center, rgba(8, 127, 147, 0.09) 0%, transparent 62%);
        }

        body[data-theme="light"] .bg-grid {
            background-image:
                linear-gradient(to right, rgba(8, 127, 147, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(8, 127, 147, 0.05) 1px, transparent 1px);
        }

        body[data-theme="light"] .ambient-blob-cyan {
            background: radial-gradient(circle, rgba(8, 127, 147, 0.09) 0%, transparent 60%);
        }

        body[data-theme="light"] .ambient-blob-amber {
            background: radial-gradient(circle, rgba(168, 100, 0, 0.07) 0%, transparent 60%);
        }

        body[data-theme="light"] .glass-panel,
        body[data-theme="light"] .project-card,
        body[data-theme="light"] .skill-card,
        body[data-theme="light"] .kb-preview,
        body[data-theme="light"] .quote-box {
            background: var(--wk-bg-card) !important;
            border-color: rgba(23, 32, 51, 0.12) !important;
            box-shadow: var(--wk-shadow);
        }

        body:not([data-page="home"]) .glass-panel {
            background: var(--wk-bg-card) !important;
            border: 1px solid var(--wk-border) !important;
            border-radius: 4px !important;
            box-shadow: var(--wk-shadow);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
        }

        body:not([data-page="home"]) article.glass-panel,
        body:not([data-page="home"]) section.glass-panel,
        body:not([data-page="home"]) .certification-card {
            border-top: 2px solid color-mix(in srgb, var(--wk-cyan) 24%, transparent) !important;
        }

        body:not([data-page="home"]) .section-heading {
            margin-bottom: 2.25rem !important;
        }

        body:not([data-page="home"]) .section-heading::after {
            background: linear-gradient(to right, var(--wk-border-strong), transparent) !important;
        }

        body:not([data-page="home"]) h1,
        body:not([data-page="home"]) h2,
        body:not([data-page="home"]) h3,
        body:not([data-page="home"]) h4 {
            letter-spacing: 0 !important;
        }

        body:not([data-page="home"]) h1 {
            text-transform: uppercase;
        }

        body:not([data-page="home"]) .rounded-2xl,
        body:not([data-page="home"]) .rounded-3xl,
        body:not([data-page="home"]) .rounded-\\[2rem\\],
        body:not([data-page="home"]) .rounded-xl {
            border-radius: 4px !important;
        }

        body:not([data-page="home"]) button,
        body:not([data-page="home"]) a[class*="button"],
        body:not([data-page="home"]) a.certification-card {
            border-radius: 4px !important;
        }

        body:not([data-page="home"]) .glow-text-cyan,
        body:not([data-page="home"]) .text-glow-cyan {
            text-shadow: 0 0 10px color-mix(in srgb, var(--wk-cyan) 42%, transparent), 0 0 22px color-mix(in srgb, var(--wk-cyan) 16%, transparent);
        }

        body:not([data-page="home"]) .glow-text-amber {
            text-shadow: 0 0 10px color-mix(in srgb, var(--wk-amber) 38%, transparent), 0 0 22px color-mix(in srgb, var(--wk-amber) 14%, transparent);
        }

        body[data-theme="light"] .text-white,
        body[data-theme="light"] .text-slate-100,
        body[data-theme="light"] .text-slate-200 {
            color: #172033 !important;
        }

        body[data-theme="light"] .text-slate-300,
        body[data-theme="light"] .text-slate-400 {
            color: #33465f !important;
        }

        body[data-theme="light"] .text-slate-500,
        body[data-theme="light"] .text-slate-600 {
            color: #607189 !important;
        }

        body[data-theme="light"] .text-cyan {
            color: #087f93 !important;
        }

        body[data-theme="light"] .text-amber {
            color: #a86400 !important;
        }

        body[data-theme="light"] .bg-base,
        body[data-theme="light"] .bg-base\\/50,
        body[data-theme="light"] .bg-white\\/5,
        body[data-theme="light"] .bg-cyan-dim,
        body[data-theme="light"] .bg-cyan\\/5,
        body[data-theme="light"] .bg-cyan\\/10,
        body[data-theme="light"] .bg-amber-dim,
        body[data-theme="light"] .bg-amber\\/5,
        body[data-theme="light"] .bg-amber\\/10 {
            background-color: rgba(239, 248, 250, 0.72) !important;
        }

        body[data-theme="light"] .border-white\\/5,
        body[data-theme="light"] .border-white\\/10,
        body[data-theme="light"] .border-cyan\\/20,
        body[data-theme="light"] .border-cyan\\/30,
        body[data-theme="light"] .border-cyan\\/40,
        body[data-theme="light"] .border-amber\\/20,
        body[data-theme="light"] .border-amber\\/30,
        body[data-theme="light"] .border-amber\\/40 {
            border-color: rgba(23, 32, 51, 0.14) !important;
        }

        body[data-theme="light"] .glow-text-cyan,
        body[data-theme="light"] .glow-text-amber,
        body[data-theme="light"] .text-glow-cyan {
            text-shadow: none !important;
        }

        .i18n-ar,
        .i18n-block-ar,
        .i18n-flex-ar {
            display: none !important;
        }

        body[data-language="ar"] .i18n-en,
        body[data-language="ar"] .i18n-block-en,
        body[data-language="ar"] .i18n-flex-en {
            display: none !important;
        }

        body[data-language="ar"] .i18n-ar {
            display: inline !important;
        }

        body[data-language="ar"] .i18n-block-ar {
            display: block !important;
        }

        body[data-language="ar"] .i18n-flex-ar {
            display: flex !important;
        }

        .page-system-container {
            max-width: 1440px;
            margin: 0 auto;
            padding: 2rem;
            display: grid;
            grid-template-columns: 80px 1fr;
            gap: 2rem;
            min-height: 100vh;
        }

        .page-main-interface {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            min-width: 0;
        }

        .page-system-container .side-telemetry {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            border-right: 1px solid var(--wk-border-strong);
            padding-right: 1rem;
            font-family: var(--wk-font-mono);
            font-size: 0.65rem;
            color: var(--wk-cyan);
            opacity: 0.72;
        }

        .page-system-container .data-block {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .page-system-container .data-bar {
            height: 4px;
            width: 100%;
            background: var(--wk-bg-panel-solid);
            border-radius: 2px;
            overflow: hidden;
            margin-top: 4px;
        }

        .page-system-container .data-bar-fill {
            display: block;
            height: 100%;
            background: var(--wk-cyan);
            box-shadow: 0 0 10px color-mix(in srgb, var(--wk-cyan) 60%, transparent), 0 0 20px color-mix(in srgb, var(--wk-cyan) 20%, transparent);
            animation: wk-pulse-width 3s infinite alternate ease-in-out;
        }

        .page-system-container .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transform: rotate(180deg);
            margin-top: auto;
            letter-spacing: 2px;
            font-weight: 700;
        }

        @keyframes wk-pulse-width {
            0% { width: 30%; }
            100% { width: 85%; }
        }

        .page-hero {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: center;
            position: relative;
            padding: 4rem 0;
        }

        .page-main-interface > .page-hero {
            border: 0 !important;
            border-left: 0 !important;
            background: transparent !important;
            box-shadow: none !important;
            overflow: visible !important;
            isolation: auto !important;
        }

        .page-main-interface > .page-hero::before,
        .page-main-interface > .page-hero::after {
            content: none !important;
        }

        .page-hero-content {
            position: relative;
            z-index: 10;
        }

        .page-hero .greeting-label {
            font-family: var(--wk-font-mono);
            color: var(--wk-cyan);
            font-size: 0.85rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
            letter-spacing: 0;
        }

        .page-hero .greeting-label::before {
            content: '>';
            color: var(--wk-amber);
        }

        .page-hero-title {
            font-size: 5rem;
            line-height: 0.9;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0 !important;
            margin-bottom: 1rem;
            color: var(--wk-text-main);
            text-shadow: 0 0 15px color-mix(in srgb, var(--wk-text-main) 42%, transparent);
        }

        .page-hero-subtitle {
            font-size: 1.15rem;
            color: var(--wk-text-muted);
            font-weight: 500;
            border-left: 4px solid var(--wk-amber);
            background: linear-gradient(90deg, var(--wk-amber-dim) 0%, transparent 100%);
            padding: 0.75rem 1rem;
            max-width: 42rem;
        }

        .page-visual {
            position: relative;
            width: 100%;
            aspect-ratio: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .page-visual-frame {
            position: absolute;
            width: 90%;
            height: 90%;
            border: 1px solid var(--wk-border-strong);
            border-radius: 50%;
        }

        .page-visual-frame::before,
        .page-visual-frame::after {
            content: '';
            position: absolute;
            left: 50%;
            width: 20px;
            height: 4px;
            background: var(--wk-cyan);
            transform: translateX(-50%);
            box-shadow: 0 0 10px color-mix(in srgb, var(--wk-cyan) 60%, transparent);
        }

        .page-visual-frame::before { top: -10px; }
        .page-visual-frame::after { bottom: -10px; }

        .page-visual-core {
            width: 80%;
            height: 80%;
            border: 1px dashed var(--wk-border-strong);
            border-radius: 50%;
            display: grid;
            place-items: center;
            position: relative;
            background:
                linear-gradient(rgba(0, 240, 255, 0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 240, 255, 0.06) 1px, transparent 1px);
            background-size: 28px 28px;
            animation: rotate-slow 20s linear infinite;
        }

        .page-visual-node {
            width: 42%;
            aspect-ratio: 1;
            border-radius: 50%;
            border: 3px solid var(--wk-cyan);
            background: var(--wk-bg-panel-solid);
            box-shadow: var(--wk-shadow), 0 0 18px color-mix(in srgb, var(--wk-cyan) 32%, transparent);
            display: grid;
            place-items: center;
            color: var(--wk-cyan);
            font-family: var(--wk-font-mono);
            font-weight: 800;
            font-size: clamp(1.4rem, 4vw, 3rem);
            animation: pulse-core 2.4s ease-in-out infinite;
        }

        .terminal-banner {
            background: #000;
            border: 1px solid var(--wk-cyan);
            box-shadow: 0 0 10px color-mix(in srgb, var(--wk-cyan) 60%, transparent), 0 0 20px color-mix(in srgb, var(--wk-cyan) 20%, transparent);
            padding: 1.5rem;
            font-family: var(--wk-font-mono);
            font-size: 1.05rem;
            color: var(--wk-cyan);
            border-radius: 4px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            min-height: 76px;
        }

        .terminal-banner::before {
            content: 'WK_SYS_TERM //';
            position: absolute;
            top: 0;
            left: 0;
            background: var(--wk-cyan);
            color: var(--wk-bg-base);
            font-size: 0.6rem;
            padding: 2px 8px;
            font-weight: 800;
        }

        .scanline {
            width: 100%;
            height: 100px;
            background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.05) 50%, rgba(0,0,0,0));
            position: fixed;
            top: 0;
            pointer-events: none;
            animation: wk-scan 8s linear infinite;
            z-index: 9999;
        }

        @keyframes wk-scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
        }

        body[data-theme="light"] .page-hero-title {
            text-shadow: none;
        }

        body[data-theme="light"] .page-system-container .data-bar-fill,
        body[data-theme="light"] .page-visual-frame::before,
        body[data-theme="light"] .page-visual-frame::after {
            box-shadow: none;
        }

        .wk-site-header {
            position: relative;
            z-index: 50;
            width: 100%;
            max-width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1.25rem;
            padding: 0.95rem 0 1.05rem;
            border-bottom: 2px solid var(--wk-border-strong);
            color: var(--wk-text-main);
            font-family: var(--wk-font-ui);
        }

        .wk-site-header::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 280px;
            height: 2px;
            background: var(--wk-cyan);
            box-shadow: 0 0 14px color-mix(in srgb, var(--wk-cyan) 45%, transparent);
        }

        site-header {
            position: static;
            inset: auto;
            background: transparent;
            border-bottom: 0;
            box-shadow: none;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
        }

        .wk-site-header {
            max-width: 100%;
            margin: 0;
            padding: 0 0 1rem;
            border-bottom: 2px solid var(--wk-border-strong);
        }

        .wk-logo-group {
            display: flex;
            align-items: center;
            gap: 16px;
            color: inherit;
            text-decoration: none;
            min-width: max-content;
        }

        .wk-logo-box {
            width: 120px;
            height: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            flex: 0 0 auto;
        }

        .wk-logo-box img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
        }

        .wk-logo-box::before {
            content: none;
        }

        .wk-brand-name {
            font-family: var(--wk-font-ui);
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--wk-text-main);
        }

        .wk-brand-name span {
            color: var(--wk-cyan);
            font-family: var(--wk-font-mono);
            font-weight: 400;
            opacity: 0.82;
        }

        .wk-nav {
            display: flex;
            align-items: center;
            gap: 16px;
            font-family: var(--wk-font-mono);
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .wk-nav a {
            color: var(--wk-text-muted);
            text-decoration: none;
            transition: color 0.2s ease, text-shadow 0.2s ease;
            white-space: nowrap;
        }

        .wk-nav a:hover,
        .wk-nav a:focus-visible,
        .wk-nav a[aria-current="page"] {
            color: var(--wk-cyan);
            text-shadow: 0 0 12px color-mix(in srgb, var(--wk-cyan) 35%, transparent);
        }

        body[data-theme="light"] .wk-nav a:hover,
        body[data-theme="light"] .wk-nav a:focus-visible,
        body[data-theme="light"] .wk-nav a[aria-current="page"] {
            text-shadow: none;
        }

        .wk-header-actions {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .wk-header-button {
            width: 112px;
            height: 46px;
            min-height: 46px;
            border: 1px solid color-mix(in srgb, var(--wk-text-muted) 32%, transparent);
            border-radius: 4px;
            background: color-mix(in srgb, var(--wk-bg-panel-solid) 56%, transparent);
            color: var(--wk-text-soft);
            padding: 0 12px;
            font-family: var(--wk-font-mono);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.35rem;
            line-height: 1;
            cursor: pointer;
            transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        .wk-header-button:hover,
        .wk-header-button:focus-visible {
            border-color: var(--wk-border-strong);
            color: var(--wk-cyan);
            background: var(--wk-cyan-dim);
            transform: translateY(-1px);
            outline: none;
        }

        body[data-theme="light"] .wk-header-button {
            border-color: rgba(23, 32, 51, 0.28);
            background: rgba(246, 251, 252, 0.84);
            color: #24344a;
            box-shadow: 0 8px 22px rgba(31, 57, 80, 0.08);
        }

        body[data-theme="light"] .wk-header-button:hover,
        body[data-theme="light"] .wk-header-button:focus-visible {
            border-color: rgba(8, 127, 147, 0.42);
            color: #075d6c;
            background: rgba(8, 127, 147, 0.1);
        }

        .wk-menu-button {
            display: none;
        }

        .wk-mobile-menu {
            display: none;
            position: absolute;
            left: 1rem;
            right: 1rem;
            top: calc(100% + 0.75rem);
            padding: 0.75rem;
            border: 1px solid var(--wk-border);
            border-radius: 12px;
            background: var(--wk-bg-panel-solid);
            box-shadow: var(--wk-shadow);
        }

        .wk-mobile-menu[hidden] {
            display: none;
        }

        .wk-mobile-menu a {
            display: block;
            padding: 0.8rem 0.9rem;
            border-radius: 8px;
            color: var(--wk-text-soft);
            font-family: var(--wk-font-mono);
            font-size: 0.78rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            text-decoration: none;
        }

        .wk-mobile-menu a[aria-current="page"] {
            color: var(--wk-cyan);
            background: var(--wk-cyan-dim);
        }

        body[data-language="ar"] site-header,
        body[data-language="ar"] .wk-site-header {
            direction: rtl;
        }

        body[data-language="ar"] .wk-site-header {
            justify-content: flex-start;
        }

        body[data-language="ar"] .wk-logo-group,
        body[data-language="ar"] .wk-nav,
        body[data-language="ar"] .wk-header-actions,
        body[data-language="ar"] .wk-header-button {
            direction: rtl;
        }

        body[data-language="ar"] .wk-logo-group {
            order: 1;
        }

        body[data-language="ar"] .wk-nav {
            order: 2;
            margin-right: auto;
            margin-left: auto;
        }

        body[data-language="ar"] .wk-header-actions {
            order: 3;
            margin-right: 0;
            margin-left: 0;
        }

        body[data-language="ar"] .wk-site-header::after {
            left: auto;
            right: 0;
        }

        body[data-language="ar"] main {
            direction: rtl;
        }

        body[data-language="ar"] .wk-mobile-menu {
            direction: rtl;
            text-align: right;
        }

        body[data-language="ar"] .system-container,
        body[data-language="ar"] .page-system-container,
        body[data-language="ar"] .about-system-container {
            grid-template-columns: minmax(0, 1fr) 80px;
            direction: ltr;
        }

        body[data-language="ar"] .system-container > .side-telemetry,
        body[data-language="ar"] .page-system-container > .side-telemetry,
        body[data-language="ar"] .about-system-container > .side-telemetry {
            grid-column: 2;
            grid-row: 1;
            border-right: 0;
            border-left: 1px solid var(--wk-border-strong);
            padding-right: 0;
            padding-left: 1rem;
            text-align: right;
        }

        body[data-language="ar"] .system-container > main,
        body[data-language="ar"] .page-system-container > main,
        body[data-language="ar"] .about-system-container > main {
            grid-column: 1;
            grid-row: 1;
        }

        @media (max-width: 1120px) {
            .wk-site-header {
                flex-wrap: wrap;
            }

            .wk-nav {
                order: 3;
                width: 100%;
                justify-content: space-between;
                overflow-x: auto;
                padding-bottom: 0.1rem;
            }

            .page-hero {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .page-hero .greeting-label {
                justify-content: center;
            }

            .page-hero-subtitle {
                border-left: 0;
                border-bottom: 4px solid var(--wk-amber);
                background: linear-gradient(0deg, var(--wk-amber-dim) 0%, transparent 100%);
                margin-inline: auto;
            }
        }

        @media (max-width: 760px) {
            body[data-language="ar"] .system-container,
            body[data-language="ar"] .page-system-container,
            body[data-language="ar"] .about-system-container {
                grid-template-columns: 1fr;
            }

            body[data-language="ar"] .system-container > main,
            body[data-language="ar"] .page-system-container > main,
            body[data-language="ar"] .about-system-container > main {
                grid-column: 1;
            }

            body[data-language="ar"] .system-container > .side-telemetry,
            body[data-language="ar"] .page-system-container > .side-telemetry,
            body[data-language="ar"] .about-system-container > .side-telemetry {
                display: none;
            }

            .page-system-container {
                grid-template-columns: 1fr;
                padding: 1rem;
            }

            .page-system-container .side-telemetry {
                display: none;
            }

            .page-hero-title {
                font-size: 4rem;
            }

            .wk-nav {
                display: none;
            }

            .wk-menu-button {
                display: inline-flex;
            }

            .wk-mobile-menu:not([hidden]) {
                display: block;
            }

            .wk-header-actions {
                margin-left: auto;
                gap: 10px;
                max-width: 100%;
                flex-wrap: wrap;
            }

            .wk-header-button {
                width: auto;
                min-width: 46px;
                padding: 0 0.65rem;
            }

            .wk-header-button[data-search-button] .wk-button-text {
                display: none;
            }
        }
    `;
    document.head.append(style);
};

injectSharedStyles();

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(localStorage.getItem('waad-kernel-theme') || initialTheme);
    applyLanguage(localStorage.getItem('waad-kernel-language') || initialLanguage);
});

class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        const page = currentPage();
        this.innerHTML = this.sharedHeader(page);

        const menuButton = this.querySelector('[data-menu-button]');
        const mobileMenu = this.querySelector('[data-mobile-menu]');
        const themeButton = this.querySelector('[data-theme-toggle]');
        const languageButton = this.querySelector('[data-language-toggle]');

        menuButton?.addEventListener('click', () => {
            const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', String(!isOpen));
            mobileMenu.hidden = isOpen;
        });

        themeButton?.addEventListener('click', () => {
            const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
            applyTheme(nextTheme);
        });

        languageButton?.addEventListener('click', () => {
            const nextLanguage = document.body.dataset.language === 'ar' ? 'en' : 'ar';
            applyLanguage(nextLanguage);
        });

        applyTheme(localStorage.getItem('waad-kernel-theme') || initialTheme);
        applyLanguage(localStorage.getItem('waad-kernel-language') || initialLanguage);
    }

    sharedHeader(page) {
        const desktopLinks = pages.map((item) => this.navLink(item, page)).join('');
        const mobileLinks = pages.map((item) => this.mobileNavLink(item, page)).join('');
        const isArabic = (document.body.dataset.language || initialLanguage) === 'ar';
        const themeLabel = isArabic
            ? ((document.body.dataset.theme || initialTheme) === 'light' ? 'الوضع الداكن' : 'الوضع الفاتح')
            : ((document.body.dataset.theme || initialTheme) === 'light' ? 'Dark Mode' : 'Light Mode');
        const languageLabel = isArabic ? 'الإنجليزية' : 'Arabic';

        return `
            <header class="wk-site-header">
                <a class="wk-logo-group" href="index.html" aria-label="Waad Kernel home">
                    <span class="wk-logo-box"><img src="assets/images/waad-kernel-favicon.png" alt="" aria-hidden="true"></span>
                    <span class="wk-brand-name">Waad <span>Kernel</span></span>
                </a>

                <nav class="wk-nav" aria-label="Primary navigation">${desktopLinks}</nav>

                <div class="wk-header-actions">
                    <button type="button" class="wk-header-button" data-search-button aria-label="Search Waad Kernel">
                        <i class="ph-bold ph-magnifying-glass" aria-hidden="true"></i>
                        <span class="wk-button-text" data-i18n-key="search-label" data-i18n-en="Search" data-i18n-ar="بحث">Search</span>
                    </button>
                    <button type="button" class="wk-header-button" data-language-toggle aria-label="Switch language to Arabic" aria-pressed="false">${languageLabel}</button>
                    <button type="button" class="wk-header-button" data-theme-toggle aria-label="Toggle color mode">
                        <span data-theme-label>${themeLabel}</span>
                    </button>
                    <button type="button" class="wk-header-button wk-menu-button" data-menu-button aria-expanded="false" aria-controls="mobile-navigation" aria-label="Open navigation menu">
                        Menu
                    </button>
                </div>

                <div id="mobile-navigation" class="wk-mobile-menu" data-mobile-menu hidden>${mobileLinks}</div>
            </header>
        `;
    }

    navLink(item, page) {
        const active = item.id === page;
        return `<a href="${item.href}" data-nav-label="${item.id}"${active ? ' aria-current="page"' : ''}>${item.label}</a>`;
    }

    mobileNavLink(item, page) {
        const active = item.id === page;
        return `<a href="${item.href}" data-nav-label="${item.id}"${active ? ' aria-current="page"' : ''}>${item.label}</a>`;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.style.display = 'block';
        const home = currentPage() === 'home';
        const year = new Date().getFullYear();

        this.innerHTML = home
            ? `
                <footer class="home-site-footer">
                    <span>WAAD_KERNEL &copy; ${year}</span>
                    <span data-i18n-key="footer-tagline" data-i18n-en="Building practical knowledge" data-i18n-ar="بناء معرفة عملية">Building practical knowledge</span>
                </footer>
            `
            : `
                <footer class="border-t border-white/5 py-8 relative z-10 bg-base/80 backdrop-blur-md mt-auto">
                    <div class="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div class="flex items-center gap-2">
                            <i class="ph-fill ph-hexagon text-cyan text-lg"></i>
                            <span class="font-mono font-medium text-sm tracking-widest text-slate-400">WAAD_KERNEL &copy; ${year}</span>
                        </div>
                        <div class="font-mono text-xs text-slate-500 uppercase tracking-widest">
                            <span data-i18n-key="footer-tagline" data-i18n-en="Building practical knowledge" data-i18n-ar="بناء معرفة عملية">Building practical knowledge</span>
                        </div>
                    </div>
                </footer>
            `;

        applyLanguage(localStorage.getItem('waad-kernel-language') || document.body.dataset.language || initialLanguage);
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);

