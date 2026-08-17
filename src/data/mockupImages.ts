// High-fidelity UI mockups & Vector SVGs for Pooja Panchal's Portfolio
// Designed with a pure Royal Blue (#2563eb / #1d4ed8 / #0284c7) & Cool Slate theme. Zero orange elements.

// Helper to convert SVG strings to data URIs
function svgToUri(svgString: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
}

// 1. Hero Mockup: Modern Design & Code Studio Interface
const heroSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <defs>
    <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
    <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.2"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <rect width="800" height="800" rx="32" fill="url(#heroBg)"/>
  
  <g opacity="0.12" stroke="#38bdf8" stroke-width="1">
    <line x1="100" y1="0" x2="100" y2="800"/>
    <line x1="200" y1="0" x2="200" y2="800"/>
    <line x1="300" y1="0" x2="300" y2="800"/>
    <line x1="400" y1="0" x2="400" y2="800"/>
    <line x1="500" y1="0" x2="500" y2="800"/>
    <line x1="600" y1="0" x2="600" y2="800"/>
    <line x1="700" y1="0" x2="700" y2="800"/>
    <line x1="0" y1="100" x2="800" y2="100"/>
    <line x1="0" y1="200" x2="800" y2="200"/>
    <line x1="0" y1="300" x2="800" y2="300"/>
    <line x1="0" y1="400" x2="800" y2="400"/>
    <line x1="0" y1="500" x2="800" y2="500"/>
    <line x1="0" y1="600" x2="800" y2="600"/>
    <line x1="0" y1="700" x2="800" y2="700"/>
  </g>

  <circle cx="400" cy="380" r="260" fill="#2563eb" opacity="0.18" filter="blur(60px)"/>
  <circle cx="560" cy="240" r="160" fill="#38bdf8" opacity="0.15" filter="blur(50px)"/>

  <g filter="url(#shadow)">
    <rect x="70" y="90" width="660" height="580" rx="20" fill="#0b1120" stroke="#1e293b" stroke-width="2"/>
    
    <rect x="70" y="90" width="660" height="46" rx="20" fill="#131c2e"/>
    <rect x="70" y="116" width="660" height="20" fill="#131c2e"/>
    <circle cx="102" cy="113" r="5.5" fill="#ef4444"/>
    <circle cx="120" cy="113" r="5.5" fill="#eab308"/>
    <circle cx="138" cy="113" r="5.5" fill="#22c55e"/>
    <rect x="250" y="103" width="300" height="20" rx="6" fill="#1e293b"/>
    <text x="330" y="117" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" font-weight="600">pooja-panchal.design/studio</text>
    
    <rect x="70" y="136" width="160" height="534" fill="#0e1726"/>
    <rect x="90" y="160" width="120" height="28" rx="6" fill="#2563eb"/>
    <text x="120" y="178" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">UI / UX Studio</text>
    
    <rect x="90" y="206" width="120" height="14" rx="4" fill="#1e293b"/>
    <rect x="90" y="228" width="95" height="12" rx="4" fill="#1e293b" opacity="0.6"/>
    <rect x="90" y="248" width="110" height="12" rx="4" fill="#1e293b" opacity="0.6"/>
    <rect x="90" y="268" width="80" height="12" rx="4" fill="#1e293b" opacity="0.6"/>
    <rect x="90" y="288" width="105" height="12" rx="4" fill="#1e293b" opacity="0.6"/>

    <rect x="250" y="160" width="460" height="300" rx="14" fill="#0f172a" stroke="#2563eb" stroke-width="1.5"/>
    <rect x="270" y="180" width="420" height="120" rx="10" fill="url(#blueGlow)" stroke="#3b82f6" stroke-width="1"/>
    <text x="290" y="220" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="800">Clean. Scalable. Modern.</text>
    <text x="290" y="242" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="12">Figma Design Systems &amp; Frontend Engineering</text>
    <rect x="290" y="258" width="90" height="24" rx="6" fill="#2563eb"/>
    <text x="312" y="274" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Explore UI</text>

    <g>
      <rect x="270" y="320" width="130" height="120" rx="8" fill="#1e293b"/>
      <circle cx="300" cy="348" r="14" fill="#2563eb"/>
      <rect x="285" y="374" width="70" height="10" rx="3" fill="#ffffff"/>
      <rect x="285" y="392" width="100" height="8" rx="3" fill="#64748b"/>
    </g>
    <g>
      <rect x="415" y="320" width="130" height="120" rx="8" fill="#1e293b"/>
      <circle cx="445" cy="348" r="14" fill="#38bdf8"/>
      <rect x="430" y="374" width="70" height="10" rx="3" fill="#ffffff"/>
      <rect x="430" y="392" width="100" height="8" rx="3" fill="#64748b"/>
    </g>
    <g>
      <rect x="560" y="320" width="130" height="120" rx="8" fill="#1e293b"/>
      <circle cx="590" cy="348" r="14" fill="#6366f1"/>
      <rect x="575" y="374" width="70" height="10" rx="3" fill="#ffffff"/>
      <rect x="575" y="392" width="100" height="8" rx="3" fill="#64748b"/>
    </g>

    <rect x="250" y="480" width="460" height="170" rx="12" fill="#090e17" stroke="#1e293b" stroke-width="1"/>
    <text x="270" y="508" fill="#38bdf8" font-family="monospace" font-size="11">// React, WordPress &amp; Webflow Architecture</text>
    <text x="270" y="528" fill="#e2e8f0" font-family="monospace" font-size="11"><tspan fill="#ec4899">export const</tspan> <tspan fill="#60a5fa">PortfolioProjects</tspan> = () => {</text>
    <text x="290" y="548" fill="#94a3b8" font-family="monospace" font-size="11"><tspan fill="#ec4899">const</tspan> liveWork = [<tspan fill="#34d399">'Love Devani'</tspan>, <tspan fill="#34d399">'Zync AI'</tspan>, <tspan fill="#34d399">'Bear Analytics'</tspan>];</text>
    <text x="290" y="568" fill="#94a3b8" font-family="monospace" font-size="11"><tspan fill="#ec4899">return</tspan> &lt;<tspan fill="#60a5fa">ClientSuccess</tspan> rating={<tspan fill="#38bdf8">100</tspan>} /&gt;;</text>
    <text x="270" y="588" fill="#e2e8f0" font-family="monospace" font-size="11">};</text>
  </g>
</svg>
`;

// 2. About Showcase
const aboutSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="50%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" rx="28" fill="url(#aboutGrad)"/>
  <circle cx="240" cy="300" r="140" fill="url(#avatarGrad)" opacity="0.25" filter="blur(30px)"/>
  
  <g transform="translate(60, 80)">
    <rect width="280" height="440" rx="24" fill="#131d31" stroke="#2563eb" stroke-width="2"/>
    <circle cx="140" cy="140" r="70" fill="url(#avatarGrad)"/>
    <circle cx="140" cy="125" r="30" fill="#ffffff" opacity="0.9"/>
    <path d="M90 190 C90 155 190 155 190 190 Z" fill="#ffffff" opacity="0.9"/>
    
    <text x="140" y="245" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">Pooja Panchal</text>
    <text x="140" y="270" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="600">UI/UX Designer &amp; Developer</text>
    
    <rect x="30" y="300" width="100" height="28" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-width="1"/>
    <text x="80" y="318" text-anchor="middle" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="11">Figma Pro</text>
    
    <rect x="140" y="300" width="110" height="28" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-width="1"/>
    <text x="195" y="318" text-anchor="middle" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="11">Frontend Eng</text>
    
    <rect x="30" y="340" width="105" height="28" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-width="1"/>
    <text x="82" y="358" text-anchor="middle" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="11">WordPress</text>
    
    <rect x="145" y="340" width="105" height="28" rx="14" fill="#1e293b" stroke="#3b82f6" stroke-width="1"/>
    <text x="197" y="358" text-anchor="middle" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="11">Webflow</text>
    
    <rect x="30" y="385" width="220" height="30" rx="8" fill="#2563eb"/>
    <text x="140" y="405" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">5+ Years Industry Experience</text>
  </g>

  <g transform="translate(380, 80)">
    <rect width="360" height="135" rx="16" fill="#111c2e" stroke="#1e293b" stroke-width="1"/>
    <text x="24" y="36" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">CORE APPROACH</text>
    <text x="24" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="600">Pixel-Perfect Visual Craft</text>
    <text x="24" y="92" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Transforming complex concepts into intuitive,</text>
    <text x="24" y="110" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">accessible, and user-centric interfaces.</text>

    <rect y="155" width="360" height="135" rx="16" fill="#111c2e" stroke="#1e293b" stroke-width="1"/>
    <text x="24" y="191" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">TECHNICAL EXECUTION</text>
    <text x="24" y="220" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="600">Clean &amp; Performant Code</text>
    <text x="24" y="247" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Semantic HTML, modern CSS, TypeScript, and</text>
    <text x="24" y="265" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">robust CMS engines that convert visitors.</text>

    <rect y="310" width="360" height="110" rx="16" fill="#1e293b" stroke="#2563eb" stroke-width="1.5"/>
    <text x="24" y="345" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Client Satisfaction Guaranteed</text>
    <text x="24" y="375" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">40+ projects successfully delivered worldwide</text>
    <text x="24" y="395" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="600">✓ On-Time Delivery · 100% Rating</text>
  </g>
</svg>
`;

// Helper template generator for clean Royal Blue project SVGs
function createBrowserMockup(domain: string, title: string, subtitle: string, tag: string, contentLayout: string): string {
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#091122"/>
      <stop offset="100%" stop-color="#111c33"/>
    </linearGradient>
    <linearGradient id="blueAccent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
  </defs>
  <rect width="800" height="500" rx="24" fill="url(#bgGrad)"/>
  
  <!-- Browser Chrome -->
  <rect width="800" height="42" rx="24" fill="#13213c"/>
  <rect y="20" width="800" height="22" fill="#13213c"/>
  <circle cx="32" cy="21" r="5" fill="#ef4444"/>
  <circle cx="48" cy="21" r="5" fill="#eab308"/>
  <circle cx="64" cy="21" r="5" fill="#22c55e"/>
  <rect x="180" y="10" width="440" height="22" rx="6" fill="#0d1728"/>
  <text x="400" y="25" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" font-weight="600">${domain}</text>

  <!-- Hero Header Bar -->
  <g transform="translate(40, 65)">
    <rect width="720" height="95" rx="14" fill="#162544" stroke="#2563eb" stroke-width="1.5"/>
    <text x="24" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="1">${tag.toUpperCase()}</text>
    <text x="24" y="60" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="700">${title}</text>
    <text x="24" y="80" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">${subtitle}</text>
    <rect x="580" y="30" width="116" height="34" rx="8" fill="#2563eb"/>
    <text x="638" y="51" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Live Website</text>
  </g>

  <!-- Dynamic Content Area -->
  <g transform="translate(40, 180)">
    ${contentLayout}
  </g>
</svg>
`;
}

// 1. Love Devani
const lovedevaniSvg = createBrowserMockup(
  'lovedevani.com · Personal Brand & Studio',
  'Love Devani',
  'Creative Portfolio, Personal Brand & Digital Showcase',
  'UI/UX & Frontend Development',
  `
  <rect width="720" height="270" rx="14" fill="#0e182b" stroke="#1e293b" stroke-width="1"/>
  <!-- Left Side: Editorial Bio Banner -->
  <g transform="translate(30, 25)">
    <rect width="300" height="220" rx="12" fill="#152440" stroke="#2563eb" stroke-width="1"/>
    <circle cx="150" cy="65" r="36" fill="#2563eb"/>
    <text x="150" y="70" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="700">LD</text>
    <text x="150" y="125" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Creative Visionary</text>
    <text x="150" y="148" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Strategy · Direction · Architecture</text>
    <rect x="60" y="170" width="180" height="28" rx="6" fill="#2563eb"/>
    <text x="150" y="188" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Explore Portfolio</text>
  </g>
  <!-- Right Side: 2 Feature Cards -->
  <g transform="translate(360, 25)">
    <rect x="0" y="0" width="330" height="100" rx="12" fill="#13213a"/>
    <text x="20" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">CREATIVE DIRECTION</text>
    <text x="20" y="62" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="600">Modern Layouts &amp; Bespoke Styling</text>
    <text x="20" y="82" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Clean typography hierarchy with sub-second load times.</text>

    <rect x="0" y="120" width="330" height="100" rx="12" fill="#13213a"/>
    <text x="20" y="155" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">RESPONSIVE PERFECTION</text>
    <text x="20" y="182" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="600">100% Mobile &amp; Tablet Ready</text>
    <text x="20" y="202" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Optimized across all screen dimensions and viewports.</text>
  </g>
  `
);

// 2. Real Estate Sparkle
const realestateSparkleSvg = createBrowserMockup(
  'realestate.sparkleinfotech.com · Property Hub',
  'Sparkle Real Estate',
  'Interactive Property Listings & Location Filtering Portal',
  'Frontend & UI/UX Design',
  `
  <rect width="720" height="270" rx="14" fill="#0e182b" stroke="#1e293b" stroke-width="1"/>
  <!-- Search Bar -->
  <rect x="30" y="20" width="660" height="46" rx="10" fill="#15233c" stroke="#2563eb" stroke-width="1"/>
  <text x="50" y="47" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Search luxury villas, penthouses, commercial spaces...</text>
  <rect x="560" y="27" width="115" height="32" rx="6" fill="#2563eb"/>
  <text x="617" y="47" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Search</text>

  <!-- 3 Property Cards -->
  <g transform="translate(30, 80)">
    <rect x="0" y="0" width="205" height="170" rx="10" fill="#142139"/>
    <rect x="10" y="10" width="185" height="75" rx="6" fill="#1e3256"/>
    <text x="20" y="52" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Grand Azure Villa</text>
    <text x="15" y="110" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">$1,850,000</text>
    <text x="15" y="130" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">4 Beds · 3 Baths · 2,800 sqft</text>
    <rect x="15" y="142" width="175" height="22" rx="4" fill="#2563eb"/>
    <text x="102" y="157" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">View Details</text>

    <rect x="227" y="0" width="205" height="170" rx="10" fill="#142139"/>
    <rect x="237" y="10" width="185" height="75" rx="6" fill="#1e3256"/>
    <text x="247" y="52" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Skyline Penthouse</text>
    <text x="242" y="110" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">$2,400,000</text>
    <text x="242" y="130" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">3 Beds · 3.5 Baths · 3,100 sqft</text>
    <rect x="242" y="142" width="175" height="22" rx="4" fill="#2563eb"/>
    <text x="329" y="157" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">View Details</text>

    <rect x="455" y="0" width="205" height="170" rx="10" fill="#142139"/>
    <rect x="465" y="10" width="185" height="75" rx="6" fill="#1e3256"/>
    <text x="475" y="52" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Coastal Manor</text>
    <text x="470" y="110" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">$3,200,000</text>
    <text x="470" y="130" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">5 Beds · 4 Baths · 4,500 sqft</text>
    <rect x="470" y="142" width="175" height="22" rx="4" fill="#2563eb"/>
    <text x="557" y="157" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">View Details</text>
  </g>
  `
);

// 3. Gross Gruppe
const grossGruppeSvg = createBrowserMockup(
  'gross-gruppe.com · Infrastructure & Construction',
  'Gross Gruppe',
  'Corporate Infrastructure, Construction & Industrial Solutions',
  'Corporate UI/UX & Web Development',
  `
  <rect width="720" height="270" rx="14" fill="#0d1628" stroke="#1e293b" stroke-width="1"/>
  <!-- Top 3 Metrics in Blue Theme -->
  <g transform="translate(30, 25)">
    <rect x="0" y="0" width="205" height="80" rx="10" fill="#14223d"/>
    <text x="20" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11">PROJECT PORTFOLIO</text>
    <text x="20" y="60" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="700">500+ Built</text>

    <rect x="227" y="0" width="205" height="80" rx="10" fill="#14223d"/>
    <text x="247" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11">INDUSTRY EXP</text>
    <text x="247" y="60" fill="#ffffff" font-family="system-ui, sans-serif" font-size="20" font-weight="700">45+ Years</text>

    <rect x="455" y="0" width="205" height="80" rx="10" fill="#14223d"/>
    <text x="475" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11">CERTIFICATION</text>
    <text x="475" y="60" fill="#34d399" font-family="system-ui, sans-serif" font-size="18" font-weight="700">ISO 9001 · 14001</text>
  </g>

  <!-- Bottom Architecture Grid -->
  <g transform="translate(30, 120)">
    <rect width="660" height="125" rx="10" fill="#152442" stroke="#2563eb" stroke-width="1"/>
    <text x="25" y="40" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Engineering Sustainable German Infrastructure</text>
    <text x="25" y="65" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">High precision civil engineering, turn-key real estate development, and green energy buildings.</text>
    <rect x="25" y="82" width="140" height="28" rx="6" fill="#2563eb"/>
    <text x="95" y="100" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Corporate Overview</text>
  </g>
  `
);

// 4. Zync AI
const zyncAiSvg = createBrowserMockup(
  'zync.ai · AI Marketing & Automation',
  'Zync AI',
  'AI Content & Automated Marketing Engine Built in Webflow',
  'Webflow & UI/UX Design',
  `
  <rect width="720" height="270" rx="14" fill="#0a1220" stroke="#1e293b" stroke-width="1"/>
  <!-- AI Workflow Visualizer -->
  <g transform="translate(30, 20)">
    <rect width="660" height="110" rx="12" fill="#12203a" stroke="#2563eb" stroke-width="1.5"/>
    <text x="25" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">INTELLIGENT CONTENT AUTOMATION</text>
    <text x="25" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">Generate 10x Content with Enterprise Brand Consistency</text>
    <text x="25" y="90" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Multimodal generation for video, audio, copy &amp; ad distribution.</text>
    <rect x="520" y="38" width="120" height="34" rx="8" fill="#146EF5"/>
    <text x="580" y="59" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Webflow Live</text>
  </g>

  <!-- 3 Feature Chips -->
  <g transform="translate(30, 145)">
    <rect x="0" y="0" width="205" height="105" rx="10" fill="#111d33"/>
    <text x="20" y="35" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Instant AI Video</text>
    <text x="20" y="60" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Short-form clips to full production ads in minutes.</text>

    <rect x="227" y="0" width="205" height="105" rx="10" fill="#111d33"/>
    <text x="247" y="35" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Brand Voice Engine</text>
    <text x="247" y="60" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Trained on proprietary company tone and assets.</text>

    <rect x="455" y="0" width="205" height="105" rx="10" fill="#111d33"/>
    <text x="475" y="35" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Multi-Channel Sync</text>
    <text x="475" y="60" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">One-click push to TikTok, Meta, LinkedIn &amp; YouTube.</text>
  </g>
  `
);

// 5. Bear Analytics
const bearAnalyticsSvg = createBrowserMockup(
  'bearanalytics.com · Event Data Intelligence',
  'Bear Analytics',
  'Audience & Event Intelligence SaaS Platform',
  'SaaS UI/UX & Web Development',
  `
  <rect width="720" height="270" rx="14" fill="#0c1626" stroke="#1e293b" stroke-width="1"/>
  <!-- Analytics Chart Banner -->
  <g transform="translate(30, 20)">
    <rect width="660" height="125" rx="12" fill="#13233f" stroke="#2563eb" stroke-width="1"/>
    <text x="25" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">AUDIENCE DISCOVERY (BEAR IQ)</text>
    <!-- Bar Chart in Blue Palette -->
    <g transform="translate(25, 55)">
      <rect x="0" y="30" width="35" height="35" rx="4" fill="#1e3a6a"/>
      <rect x="45" y="15" width="35" height="50" rx="4" fill="#2563eb"/>
      <rect x="90" y="5" width="35" height="60" rx="4" fill="#38bdf8"/>
      <rect x="135" y="20" width="35" height="45" rx="4" fill="#1e3a6a"/>
      <rect x="180" y="0" width="35" height="65" rx="4" fill="#2563eb"/>
      <rect x="225" y="10" width="35" height="55" rx="4" fill="#38bdf8"/>
    </g>
    <g transform="translate(320, 45)">
      <text x="0" y="20" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">+48% Attendance Lift</text>
      <text x="0" y="42" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Predictive machine learning algorithms</text>
      <text x="0" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">identifying high-intent conference delegates.</text>
    </g>
  </g>

  <!-- Bottom Stat Cards -->
  <g transform="translate(30, 160)">
    <rect x="0" y="0" width="205" height="90" rx="10" fill="#111f38"/>
    <text x="20" y="32" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">REVENUE GENERATED</text>
    <text x="20" y="58" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">$50M+ Tracked</text>

    <rect x="227" y="0" width="205" height="90" rx="10" fill="#111f38"/>
    <text x="247" y="32" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">DATA INGESTION</text>
    <text x="247" y="58" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="18" font-weight="700">10M+ Records</text>

    <rect x="455" y="0" width="205" height="90" rx="10" fill="#111f38"/>
    <text x="475" y="32" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">CLIENT RETENTION</text>
    <text x="475" y="58" fill="#34d399" font-family="system-ui, sans-serif" font-size="18" font-weight="700">98.4% NPS</text>
  </g>
  `
);

// 6. Prisma Sentinel
const prismaSentinelSvg = createBrowserMockup(
  'prismasentinel.com · Threat Intelligence',
  'Prisma Sentinel',
  'Autonomous Cybersecurity Threat Hunting Platform',
  'Webflow & Security UI/UX',
  `
  <rect width="720" height="270" rx="14" fill="#080e1a" stroke="#1e293b" stroke-width="1"/>
  <!-- Threat Radar Visual in Royal Blue -->
  <g transform="translate(30, 20)">
    <rect width="660" height="120" rx="12" fill="#101c30" stroke="#2563eb" stroke-width="1.5"/>
    <circle cx="90" cy="60" r="45" fill="none" stroke="#2563eb" stroke-width="1" opacity="0.4"/>
    <circle cx="90" cy="60" r="30" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.6"/>
    <circle cx="90" cy="60" r="15" fill="#2563eb" opacity="0.8"/>
    <circle cx="110" cy="45" r="4" fill="#38bdf8"/>
    <circle cx="75" cy="75" r="3" fill="#60a5fa"/>

    <g transform="translate(160, 25)">
      <text x="0" y="20" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">ACTIVE THREAT CONTAINMENT</text>
      <text x="0" y="48" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">Zero-Trust Network Protection</text>
      <text x="0" y="70" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Real-time telemetry, automated honeypots &amp; cryptographic audits.</text>
    </g>
  </g>

  <!-- Bottom 3 Cards -->
  <g transform="translate(30, 155)">
    <rect x="0" y="0" width="205" height="95" rx="10" fill="#111c2e"/>
    <text x="20" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Incident Detection</text>
    <text x="20" y="55" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="700">&lt; 1.2 Seconds</text>

    <rect x="227" y="0" width="205" height="95" rx="10" fill="#111c2e"/>
    <text x="247" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Compliance</text>
    <text x="247" y="55" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="700">SOC2 · GDPR · HIPAA</text>

    <rect x="455" y="0" width="205" height="95" rx="10" fill="#111c2e"/>
    <text x="475" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Webflow Setup</text>
    <text x="475" y="55" fill="#34d399" font-family="system-ui, sans-serif" font-size="16" font-weight="700">100% Score</text>
  </g>
  `
);

// 7. Clear Cyber
const clearCyberSvg = createBrowserMockup(
  'clearcyber.com.au · Cybersecurity Australia',
  'Clear Cyber',
  'Australian Information Security & Compliance Consultancy',
  'UI/UX & Web Development',
  `
  <rect width="720" height="270" rx="14" fill="#0c1527" stroke="#1e293b" stroke-width="1"/>
  <g transform="translate(30, 20)">
    <rect width="660" height="110" rx="12" fill="#13213d" stroke="#2563eb" stroke-width="1"/>
    <text x="25" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">ESSENTIAL EIGHT COMPLIANCE</text>
    <text x="25" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">Safeguarding Australian Enterprises from Cyber Vulnerabilities</text>
    <text x="25" y="88" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Independent cyber audits, penetration testing &amp; risk governance.</text>
  </g>
  <g transform="translate(30, 145)">
    <rect x="0" y="0" width="315" height="105" rx="10" fill="#131e33"/>
    <text x="20" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Penetration Testing</text>
    <text x="20" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Full-spectrum offensive security tests</text>
    <rect x="20" y="70" width="90" height="22" rx="4" fill="#2563eb"/>
    <text x="65" y="85" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Learn More</text>

    <rect x="345" y="0" width="315" height="105" rx="10" fill="#131e33"/>
    <text x="365" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">ISO 27001 Advisory</text>
    <text x="365" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Strategic roadmap to global security standards</text>
    <rect x="365" y="70" width="90" height="22" rx="4" fill="#2563eb"/>
    <text x="410" y="85" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Learn More</text>
  </g>
  `
);

// 8. YumaWorks
const yumaWorksSvg = createBrowserMockup(
  'yumaworks.com · Enterprise YANG Management',
  'YumaWorks',
  'YANG-Based Enterprise Network Configuration & Protocol Management',
  'WordPress CMS & UI/UX',
  `
  <rect width="720" height="270" rx="14" fill="#0b1424" stroke="#1e293b" stroke-width="1"/>
  <g transform="translate(30, 20)">
    <rect width="660" height="110" rx="12" fill="#12223c" stroke="#2563eb" stroke-width="1.5"/>
    <text x="25" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">YUMA PRO SDK &amp; NETCONF SERVER</text>
    <text x="25" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">Carrier-Grade YANG &amp; RESTCONF Tools for Telecom</text>
    <text x="25" y="88" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Powering leading network hardware vendors worldwide.</text>
    <rect x="520" y="38" width="120" height="34" rx="8" fill="#21759B"/>
    <text x="580" y="59" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">WordPress</text>
  </g>
  <g transform="translate(30, 145)">
    <rect x="0" y="0" width="205" height="105" rx="10" fill="#132038"/>
    <text x="20" y="35" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">YANG Compiler</text>
    <text x="20" y="60" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">High-speed validation &amp; code generation tools.</text>

    <rect x="227" y="0" width="205" height="105" rx="10" fill="#132038"/>
    <text x="247" y="35" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">RESTCONF Engine</text>
    <text x="247" y="60" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Full RFC 8040 compliance for modern APIs.</text>

    <rect x="455" y="0" width="205" height="105" rx="10" fill="#132038"/>
    <text x="475" y="35" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Global Telecom</text>
    <text x="475" y="60" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Deployed in millions of network nodes.</text>
  </g>
  `
);

// 9. ABBA Training
const abbaTrainingSvg = createBrowserMockup(
  'abbatrainindev.wpenginepowered.com · Training Academy',
  'ABBA Training',
  'Professional Skills & Corporate Workforce Training Portal',
  'WordPress CMS & LMS Design',
  `
  <rect width="720" height="270" rx="14" fill="#0d1729" stroke="#1e293b" stroke-width="1"/>
  <g transform="translate(30, 20)">
    <rect width="660" height="110" rx="12" fill="#152442" stroke="#2563eb" stroke-width="1"/>
    <text x="25" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">CAREER UPSKILLING ACADEMY</text>
    <text x="25" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">Industry-Certified Professional Courses &amp; Seminars</text>
    <text x="25" y="88" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Interactive class schedules, trainer bookings &amp; certification exams.</text>
  </g>
  <g transform="translate(30, 145)">
    <rect x="0" y="0" width="315" height="105" rx="10" fill="#132038"/>
    <text x="20" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Leadership &amp; Management</text>
    <text x="20" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Executive masterclasses for emerging team leads</text>
    <rect x="20" y="70" width="110" height="22" rx="4" fill="#2563eb"/>
    <text x="75" y="85" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">View Schedule</text>

    <rect x="345" y="0" width="315" height="105" rx="10" fill="#132038"/>
    <text x="365" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Technical Compliance</text>
    <text x="365" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">OSHA &amp; Workplace Safety Accredited Courses</text>
    <rect x="365" y="70" width="110" height="22" rx="4" fill="#2563eb"/>
    <text x="420" y="85" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">View Schedule</text>
  </g>
  `
);

// 10. Notary Course Online
const notaryCourseSvg = createBrowserMockup(
  'notarycourseonline.com · Certified State E-Learning',
  'Notary Course Online',
  'State-Accredited Notary Public Certification & Examination System',
  'WordPress CMS & E-Learning',
  `
  <rect width="720" height="270" rx="14" fill="#0a1222" stroke="#1e293b" stroke-width="1"/>
  <g transform="translate(30, 20)">
    <rect width="660" height="110" rx="12" fill="#13213a" stroke="#2563eb" stroke-width="1.5"/>
    <text x="25" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">STATE-APPROVED NOTARY CERTIFICATION</text>
    <text x="25" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">100% Online Self-Paced Training &amp; Instant Certificate</text>
    <text x="25" y="88" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Complete chapter quizzes, verify ID &amp; submit state application.</text>
    <rect x="520" y="38" width="120" height="34" rx="8" fill="#2563eb"/>
    <text x="580" y="59" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Enroll Today</text>
  </g>
  <g transform="translate(30, 145)">
    <rect x="0" y="0" width="205" height="105" rx="10" fill="#121e33"/>
    <text x="20" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Passing Rate</text>
    <text x="20" y="56" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">99.8% Success</text>

    <rect x="227" y="0" width="205" height="105" rx="10" fill="#121e33"/>
    <text x="247" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Time to Complete</text>
    <text x="247" y="56" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">3 - 6 Hours</text>

    <rect x="455" y="0" width="205" height="105" rx="10" fill="#121e33"/>
    <text x="475" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Official Seal</text>
    <text x="475" y="56" fill="#34d399" font-family="system-ui, sans-serif" font-size="18" font-weight="700">Secretary of State</text>
  </g>
  `
);

// 11. Roof Hero
const roofHeroSvg = createBrowserMockup(
  'roofhero.com.au · Australia Roofing & Solar',
  'Roof Hero',
  'Australia Roofing Restoration & Solar Installation Marketplace',
  'Webflow CMS & UI/UX',
  `
  <rect width="720" height="270" rx="14" fill="#0a1220" stroke="#1e293b" stroke-width="1"/>
  <g transform="translate(30, 20)">
    <rect width="660" height="110" rx="12" fill="#14233e" stroke="#2563eb" stroke-width="1.5"/>
    <text x="25" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">AUSTRALIA'S TRUSTED ROOFING SPECIALISTS</text>
    <text x="25" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">Roof Restorations, Leak Repairs &amp; Solar Shield Coatings</text>
    <text x="25" y="88" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Over 2,500 homes restored with 10-year warranty guarantee.</text>
    <rect x="520" y="38" width="120" height="34" rx="8" fill="#146EF5"/>
    <text x="580" y="59" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Get Quote</text>
  </g>
  <g transform="translate(30, 145)">
    <rect x="0" y="0" width="205" height="105" rx="10" fill="#111d33"/>
    <text x="20" y="35" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Free Inspection</text>
    <text x="20" y="60" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Full drone roof scan with detailed report.</text>

    <rect x="227" y="0" width="205" height="105" rx="10" fill="#111d33"/>
    <text x="247" y="35" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">10-Year Warranty</text>
    <text x="247" y="60" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Guaranteed waterproof seal against Australian storms.</text>

    <rect x="455" y="0" width="205" height="105" rx="10" fill="#111d33"/>
    <text x="475" y="35" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Solar Integration</text>
    <text x="475" y="60" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Clean solar panel mounting &amp; tile restoration.</text>
  </g>
  `
);

// 12. Hyper Vets
const hyperVetsSvg = createBrowserMockup(
  'hypervets.com · Veterinary Care & Clinic',
  'Hyper Vets',
  'Comprehensive Veterinary Medicine & Pet Wellness Network',
  'WordPress CMS & Healthcare UI/UX',
  `
  <rect width="720" height="270" rx="14" fill="#0b1322" stroke="#1e293b" stroke-width="1"/>
  <g transform="translate(30, 20)">
    <rect width="660" height="110" rx="12" fill="#13213a" stroke="#2563eb" stroke-width="1"/>
    <text x="25" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">COMPASSIONATE PET HEALTHCARE</text>
    <text x="25" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">Advanced Veterinary Surgery, Diagnostics &amp; Wellness</text>
    <text x="25" y="88" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">24/7 Emergency triage, routine checkups &amp; online appointment booking.</text>
    <rect x="520" y="38" width="120" height="34" rx="8" fill="#2563eb"/>
    <text x="580" y="59" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Book Visit</text>
  </g>
  <g transform="translate(30, 145)">
    <rect x="0" y="0" width="315" height="105" rx="10" fill="#111e33"/>
    <text x="20" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Emergency &amp; Critical Care</text>
    <text x="20" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Immediate trauma care with dedicated ICU</text>
    <rect x="20" y="70" width="100" height="22" rx="4" fill="#2563eb"/>
    <text x="70" y="85" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">24/7 Hotline</text>

    <rect x="345" y="0" width="315" height="105" rx="10" fill="#111e33"/>
    <text x="365" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Preventative Wellness</text>
    <text x="365" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Vaccinations, dental care &amp; nutrition plans</text>
    <rect x="365" y="70" width="100" height="22" rx="4" fill="#2563eb"/>
    <text x="415" y="85" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Wellness Plans</text>
  </g>
  `
);

// 13. Birdsong Beach Retreat
const birdsongSvg = createBrowserMockup(
  'birdsongbeachretreat.com.au · Luxury Vacation Haven',
  'Birdsong Beach Retreat',
  'Australian Luxury Coastal Vacation Haven & Private Sanctuary',
  'WordPress & Hospitality UI/UX',
  `
  <rect width="720" height="270" rx="14" fill="#091220" stroke="#1e293b" stroke-width="1"/>
  <g transform="translate(30, 20)">
    <rect width="660" height="110" rx="12" fill="#112038" stroke="#2563eb" stroke-width="1.5"/>
    <text x="25" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">OCEANFRONT LUXURY ESCAPE</text>
    <text x="25" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">Private Beach Access, Coastal Native Gardens &amp; Serenity</text>
    <text x="25" y="88" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Panoramic coastal views, gourmet kitchen &amp; bespoke retreat packages.</text>
    <rect x="520" y="38" width="120" height="34" rx="8" fill="#2563eb"/>
    <text x="580" y="59" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Reserve Stay</text>
  </g>
  <g transform="translate(30, 145)">
    <rect x="0" y="0" width="205" height="105" rx="10" fill="#101c30"/>
    <text x="20" y="35" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Private Beach Track</text>
    <text x="20" y="60" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Direct 60-second walk to pristine white sands.</text>

    <rect x="227" y="0" width="205" height="105" rx="10" fill="#101c30"/>
    <text x="247" y="35" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Eco Luxury Living</text>
    <text x="247" y="60" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Solar-powered architectural coastal sanctuary.</text>

    <rect x="455" y="0" width="205" height="105" rx="10" fill="#101c30"/>
    <text x="475" y="35" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Guest Rating</text>
    <text x="475" y="60" fill="#34d399" font-family="system-ui, sans-serif" font-size="11">5.0 ★ Superhost Standards.</text>
  </g>
  `
);

// 14. Solarix Clean Energy Telemetry
const solarixSvg = createBrowserMockup(
  'projects.sparkleinfotech.com/solarix · Clean Energy Grid',
  'Solarix Energy Telemetry',
  'Real-time Solar Generation, Storage & ROI Calculation Dashboard',
  'Frontend (HTML / CSS / JavaScript)',
  `
  <rect width="720" height="270" rx="14" fill="#090d16" stroke="#1e293b" stroke-width="1"/>
  <!-- Curved telemetry line in Royal Blue -->
  <g transform="translate(30, 20)">
    <rect width="660" height="120" rx="12" fill="#111c2e" stroke="#2563eb" stroke-width="1.5"/>
    <path d="M 40 90 Q 150 15 280 65 T 480 35 T 620 55" fill="none" stroke="#2563eb" stroke-width="3.5"/>
    <circle cx="280" cy="65" r="5" fill="#38bdf8"/>
    <circle cx="480" cy="35" r="5" fill="#60a5fa"/>
    <text x="30" y="30" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">SOLAR GRID GENERATION (MWh)</text>
    <text x="500" y="30" fill="#34d399" font-family="system-ui, sans-serif" font-size="12" font-weight="700">99.4% Efficiency</text>
  </g>
  <g transform="translate(30, 155)">
    <rect x="0" y="0" width="205" height="95" rx="10" fill="#111c2e"/>
    <text x="20" y="32" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">BATTERY STORAGE</text>
    <text x="20" y="58" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">94% Active</text>

    <rect x="227" y="0" width="205" height="95" rx="10" fill="#111c2e"/>
    <text x="247" y="32" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">ANNUAL ROI</text>
    <text x="247" y="58" fill="#34d399" font-family="system-ui, sans-serif" font-size="18" font-weight="700">$1,420 / yr</text>

    <rect x="455" y="0" width="205" height="95" rx="10" fill="#111c2e"/>
    <text x="475" y="32" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">CARBON OFFSET</text>
    <text x="475" y="58" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="18" font-weight="700">12.8 Tons</text>
  </g>
  `
);

// 15. ACIT
const acitSvg = createBrowserMockup(
  'acitinstitute.edu · Student Learning Portal',
  'ACIT Institute',
  'Academic Technology & Engineering Course Enrollment Portal',
  'WordPress CMS & UI/UX',
  `
  <rect width="720" height="270" rx="14" fill="#0a1220" stroke="#1e293b" stroke-width="1"/>
  <g transform="translate(30, 20)">
    <rect width="660" height="110" rx="12" fill="#13213a" stroke="#2563eb" stroke-width="1.5"/>
    <text x="25" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">TECHNICAL CURRICULUM PORTAL</text>
    <text x="25" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">Figma Design Systems &amp; Modern Frontend Engineering</text>
    <text x="25" y="88" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">12 Modules · 48 Hours of Mentor-Led Bootcamps.</text>
  </g>
  <g transform="translate(30, 145)">
    <rect x="0" y="0" width="315" height="105" rx="10" fill="#111e33"/>
    <text x="20" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">UI/UX Design Masterclass</text>
    <text x="20" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Design token architecture &amp; user prototyping</text>
    <rect x="20" y="70" width="100" height="22" rx="4" fill="#2563eb"/>
    <text x="70" y="85" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Curriculum</text>

    <rect x="345" y="0" width="315" height="105" rx="10" fill="#111e33"/>
    <text x="365" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">React &amp; TypeScript</text>
    <text x="365" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Component logic &amp; API state handling</text>
    <rect x="365" y="70" width="100" height="22" rx="4" fill="#2563eb"/>
    <text x="415" y="85" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Curriculum</text>
  </g>
  `
);

// 16. Estatein
const estateinSvg = createBrowserMockup(
  'estatein-luxury.com · Real Estate Platform',
  'Estatein Real Estate',
  'Ultra-Luxury Real Estate Interface with Instant Calculations',
  'React · Frontend · UI/UX',
  `
  <rect width="720" height="270" rx="14" fill="#0a101d" stroke="#1e293b" stroke-width="1"/>
  <g transform="translate(30, 20)">
    <rect width="660" height="110" rx="12" fill="#132036" stroke="#2563eb" stroke-width="1.5"/>
    <text x="25" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">ARCHITECTURAL LUXURY HOMES</text>
    <text x="25" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="18" font-weight="700">Curated Coastal Penthouses &amp; Modernist Mansions</text>
    <text x="25" y="88" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Custom mortgage sliders &amp; 3D floor plan explorer.</text>
  </g>
  <g transform="translate(30, 145)">
    <rect x="0" y="0" width="315" height="105" rx="10" fill="#121d30"/>
    <text x="20" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">The Glass Tower Penthouse</text>
    <text x="20" y="58" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="14" font-weight="700">$3,450,000</text>
    <text x="20" y="76" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">4 Beds · 3.5 Baths · 3,200 sqft</text>

    <rect x="345" y="0" width="315" height="105" rx="10" fill="#121d30"/>
    <text x="365" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Skyline Penthouse &amp; Terrace</text>
    <text x="365" y="58" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="14" font-weight="700">$4,800,000</text>
    <text x="365" y="76" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">5 Beds · 4.5 Baths · 4,500 sqft</text>
  </g>
  `
);

// 17. Media Search
const mediaSearchSvg = createBrowserMockup(
  'media-audio-search.io · Waveform Analyzer',
  'Media Search Engine',
  'Lossless Audio Stem & Video Discovery Engine with Live Visualizer',
  'React & Web Audio API',
  `
  <rect width="720" height="270" rx="14" fill="#080e1a" stroke="#1e293b" stroke-width="1"/>
  <g transform="translate(30, 20)">
    <rect width="660" height="110" rx="12" fill="#0f1c32" stroke="#2563eb" stroke-width="1.5"/>
    <text x="25" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">SPECTRAL AUDIO WAVEFORM ANALYZER</text>
    <g transform="translate(25, 55)">
      <rect x="0" y="10" width="5" height="30" rx="2.5" fill="#2563eb"/>
      <rect x="10" y="5" width="5" height="40" rx="2.5" fill="#38bdf8"/>
      <rect x="20" y="0" width="5" height="50" rx="2.5" fill="#60a5fa"/>
      <rect x="30" y="15" width="5" height="25" rx="2.5" fill="#2563eb"/>
      <rect x="40" y="5" width="5" height="40" rx="2.5" fill="#38bdf8"/>
      <rect x="50" y="0" width="5" height="50" rx="2.5" fill="#60a5fa"/>
      <rect x="60" y="10" width="5" height="30" rx="2.5" fill="#2563eb"/>
      <rect x="70" y="20" width="5" height="15" rx="2.5" fill="#38bdf8"/>
      <rect x="80" y="0" width="5" height="50" rx="2.5" fill="#60a5fa"/>
      <rect x="90" y="5" width="5" height="40" rx="2.5" fill="#2563eb"/>
      <rect x="100" y="15" width="5" height="25" rx="2.5" fill="#38bdf8"/>
      <rect x="110" y="0" width="5" height="50" rx="2.5" fill="#60a5fa"/>
    </g>
    <text x="160" y="75" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="700">50,000+ Lossless Multitrack Stems</text>
  </g>
  <g transform="translate(30, 145)">
    <rect x="0" y="0" width="315" height="105" rx="10" fill="#101c30"/>
    <text x="20" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Deep Synthwave Anthem</text>
    <text x="20" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">128 BPM · 44.1kHz 24-bit WAV</text>
    <rect x="20" y="70" width="90" height="22" rx="4" fill="#2563eb"/>
    <text x="65" y="85" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Play Audio</text>

    <rect x="345" y="0" width="315" height="105" rx="10" fill="#101c30"/>
    <text x="365" y="35" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Future Bass Uplift Stems</text>
    <text x="365" y="58" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">140 BPM · Multitrack Pack</text>
    <rect x="365" y="70" width="90" height="22" rx="4" fill="#2563eb"/>
    <text x="410" y="85" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Play Audio</text>
  </g>
  `
);

// Education & Credential
const educationSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="eduBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1322"/>
      <stop offset="100%" stop-color="#142138"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" rx="28" fill="url(#eduBg)"/>
  
  <g transform="translate(60, 60)">
    <rect width="680" height="480" rx="20" fill="#111c30" stroke="#2563eb" stroke-width="2"/>
    <rect x="20" y="20" width="640" height="440" rx="14" fill="#0d1729" stroke="#1e293b" stroke-width="1"/>
    
    <circle cx="340" cy="90" r="40" fill="#2563eb" opacity="0.2"/>
    <circle cx="340" cy="90" r="28" fill="#2563eb"/>
    <path d="M320 88 L340 78 L360 88 L340 98 Z" fill="#ffffff"/>
    <path d="M328 92 V102 C328 108 352 108 352 102 V92" fill="none" stroke="#ffffff" stroke-width="2"/>

    <text x="340" y="160" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="2">OFFICIAL ACADEMIC CREDENTIAL</text>
    <text x="340" y="200" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="700">Bachelor of Engineering</text>
    <text x="340" y="230" text-anchor="middle" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="16" font-weight="600">Information Technology</text>
    <text x="340" y="265" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="14">Gujarat Technological University (GTU)</text>
    
    <rect x="200" y="295" width="280" height="38" rx="19" fill="#2563eb" opacity="0.15" stroke="#2563eb" stroke-width="1.5"/>
    <text x="340" y="319" text-anchor="middle" fill="#60a5fa" font-family="system-ui, sans-serif" font-size="12" font-weight="700">First Class with Distinction (Honors)</text>

    <g transform="translate(60, 360)">
      <rect x="0" y="0" width="165" height="60" rx="8" fill="#15223a"/>
      <text x="82" y="26" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="600">Human-Computer</text>
      <text x="82" y="44" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="600">Interaction (HCI)</text>

      <rect x="195" y="0" width="165" height="60" rx="8" fill="#15223a"/>
      <text x="277" y="26" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="600">Data Structures &amp;</text>
      <text x="277" y="44" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="600">Algorithms</text>

      <rect x="390" y="0" width="170" height="60" rx="8" fill="#15223a"/>
      <text x="475" y="26" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="600">Web Architectures &amp;</text>
      <text x="475" y="44" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="600">Optimization</text>
    </g>
  </g>
</svg>
`;

// Contact mockup
const contactSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="contactBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#091120"/>
      <stop offset="100%" stop-color="#111c33"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" rx="28" fill="url(#contactBg)"/>
  
  <g transform="translate(60, 60)">
    <rect width="680" height="480" rx="20" fill="#101a2e" stroke="#2563eb" stroke-width="2"/>
    
    <rect x="0" y="0" width="680" height="50" rx="20" fill="#15233e"/>
    <rect x="0" y="25" width="680" height="25" fill="#15233e"/>
    <circle cx="35" cy="25" r="6" fill="#22c55e"/>
    <text x="52" y="29" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Online &amp; Available for Inquiries</text>
    <text x="630" y="29" text-anchor="end" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11">Avg Response: &lt; 2h</text>

    <rect x="40" y="80" width="400" height="90" rx="14" fill="#1a2947"/>
    <text x="60" y="112" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Project Opportunity Inquiry</text>
    <text x="60" y="136" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">"Hi Pooja, we loved your UI/UX portfolio and</text>
    <text x="60" y="154" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">would love to collaborate on our new product launch!"</text>

    <rect x="240" y="190" width="400" height="90" rx="14" fill="#2563eb"/>
    <text x="260" y="222" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Pooja Panchal</text>
    <text x="260" y="246" fill="#f0f9ff" font-family="system-ui, sans-serif" font-size="12">"Thanks for reaching out! Let's schedule a kickoff</text>
    <text x="260" y="264" fill="#f0f9ff" font-family="system-ui, sans-serif" font-size="12">discovery call to discuss requirements &amp; timeline."</text>

    <g transform="translate(40, 310)">
      <rect x="0" y="0" width="185" height="130" rx="12" fill="#15233c"/>
      <text x="20" y="38" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">DIRECT EMAIL</text>
      <text x="20" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11">pooja.panchal.design</text>
      <text x="20" y="82" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11">@gmail.com</text>
      <rect x="20" y="95" width="145" height="24" rx="4" fill="#2563eb"/>
      <text x="92" y="111" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Send Email</text>

      <rect x="207" y="0" width="185" height="130" rx="12" fill="#15233c"/>
      <text x="227" y="38" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">LINKEDIN</text>
      <text x="227" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11">/in/poojapanchal</text>
      <text x="227" y="82" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11">-design</text>
      <rect x="227" y="95" width="145" height="24" rx="4" fill="#0077b5"/>
      <text x="300" y="111" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Connect</text>

      <rect x="415" y="0" width="185" height="130" rx="12" fill="#15233c"/>
      <text x="435" y="38" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">GITHUB</text>
      <text x="435" y="65" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11">/pooja-panchal</text>
      <text x="435" y="82" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">40+ Repositories</text>
      <rect x="435" y="95" width="145" height="24" rx="4" fill="#2563eb"/>
      <text x="507" y="111" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">View Code</text>
    </g>
  </g>
</svg>
`;

export const FALLBACK_PROJECT_SVGS: Record<string, string> = {
  lovedevani: svgToUri(lovedevaniSvg),
  'zync-ai': svgToUri(zyncAiSvg),
  'bear-analytics': svgToUri(bearAnalyticsSvg),
  'prisma-sentinel': svgToUri(prismaSentinelSvg),
  'realestate-sparkle': svgToUri(realestateSparkleSvg),
  'gross-gruppe': svgToUri(grossGruppeSvg),
  'clear-cyber': svgToUri(clearCyberSvg),
  yumaworks: svgToUri(yumaWorksSvg),
  'abba-training': svgToUri(abbaTrainingSvg),
  'notary-course': svgToUri(notaryCourseSvg),
  'roof-hero': svgToUri(roofHeroSvg),
  'hyper-vets': svgToUri(hyperVetsSvg),
  'birdsong-retreat': svgToUri(birdsongSvg),
  solarix: svgToUri(solarixSvg),
  acit: svgToUri(acitSvg),
};

export const PLACEHOLDER_IMAGES = {
  hero: svgToUri(heroSvg),
  about: svgToUri(aboutSvg),
  education: svgToUri(educationSvg),
  contact: svgToUri(contactSvg),

 
  // Real User Projects connected to actual project images
  lovedevani:'/assets/images/placeholders/lovedevani.png',
  zyncAi: '/assets/images/placeholders/zync.png',
  bearAnalytics:'/assets/images/placeholders/bearanalytics.png',
  prismaSentinel:'/assets/images/placeholders/prismasentinel.png',
  realestateSparkle: '/assets/images/placeholders/realestate.png',
  grossGruppe: '/assets/images/placeholders/gross-grupp.png',
  clearCyber: '/assets/images/placeholders/clearcyber.png',
  yumaWorks: '/assets/images/placeholders/YumaWorks.png',
  abbaTraining: '/assets/images/placeholders/abbatrainindev.png',
  notaryCourse: '/assets/images/placeholders/notarycourseonline.png',
  roofHero: '/assets/images/placeholders/roofhero.png',
  hyperVets: '/assets/images/placeholders/hypervets.png',
  birdsong: '/assets/images/placeholders/sonyawebtest.png',
  solarix: '/assets/images/placeholders/solarix.png',
 
};
