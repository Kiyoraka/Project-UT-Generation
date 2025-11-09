# 🏗️ UT Generation Sdn Bhd - Corporate Website

**Engineering Success Through Innovation**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-production--ready-green)
![Tech](https://img.shields.io/badge/tech-vanilla-yellow)

---

## 📋 Project Description

Corporate website for **UT Generation Sdn Bhd**, a 28-year engineering company specializing in Civil/Structural and Mechanical/Electrical engineering. Modern glassmorphism dark-blue theme showcasing 23 projects (RM186M+ portfolio), 17-person organizational chart, and company credentials. Single-page application with modular architecture using vanilla HTML5/CSS3/JavaScript ES6. Production-ready with responsive design.

---

## 🎯 About The Project

UT Generation Sdn Bhd (formerly Iringan Khidmat Sdn. Bhd.) is a Class 'A' & Class 'I' contractor established in 1995, serving Malaysia's engineering and construction industry for over 28 years. This website serves as their digital presence to showcase:

- **Project Portfolio:** 23 major projects across datacenters, transmission lines, M&E building services, civil work, and solar energy
- **Professional Credentials:** PKK Class A/I, CIDB Grade 7, TNB Class A/I contractor status
- **Team Structure:** 17-person organization with 5-level hierarchy from Managing Director to Operations
- **Core Sectors:** Power Generation & Transmission, Building Services, Infrastructure Development, Renewable Energy

**Target Audiences:**
- Government procurement officers
- Corporate clients (TNB, Telekom Malaysia, Datacenter operators)
- Consulting engineers and business partners
- Potential talent and stakeholders

---

## 🚀 Tech Stack

### Core Technologies
- **HTML5** (990 lines) - Semantic markup with Open Graph meta tags
- **CSS3** (2,248 lines) - Modern styling with glassmorphism design
- **JavaScript ES6+** (963 lines) - Component-based architecture with classes

### CSS Features
- CSS Variables (Custom Properties) - Design token system
- CSS Grid & Flexbox - Responsive layouts
- Backdrop-filter - Glassmorphism effects
- CSS Animations & Keyframes - Smooth transitions
- Media Queries - Mobile-first responsive design
- Pseudo-elements (::before, ::after) - Organizational chart connectors
- Custom Scrollbars - Branded UI elements

### JavaScript APIs
- **DOM API** - Dynamic content manipulation
- **Session Storage API** - Logo animation state tracking
- **History API** - Hash-based SPA routing (pushState, hashchange)
- **Intersection Observer API** - Section visibility tracking
- **Custom Events** - Component communication
- **Event Delegation** - Efficient event handling

### External Libraries
- **Font Awesome 6.5.1** (CDN) - Icon library with SHA-512 integrity verification

### Design Patterns
- Component-based architecture
- Module pattern (ES6 Classes)
- Observer pattern (Intersection Observer)
- Singleton pattern (App controller)
- Event-driven communication

### Browser Support
- Modern browsers (2020+)
- ES6 JavaScript support
- CSS Grid & Flexbox support
- Backdrop-filter support (Webkit)
- Intersection Observer API support

---

## ✨ Features

### Core Functionality
- **🎬 Logo Splash Screen** - 3-second brand animation with session storage tracking
- **🧭 Fixed Glassmorphism Navigation** - Scroll effects, active state tracking, mobile hamburger menu
- **📱 Responsive Design** - 4 breakpoints (480px, 768px, 1024px, 1400px)
- **🎨 Modern UI** - Dark blue glassmorphism theme with backdrop blur effects
- **📊 Organizational Chart** - 5-level hierarchy with traditional connector lines
- **💼 Project Portfolio** - 23 projects with modal detail views
- **🔍 Section Management** - SPA behavior with hash routing and smooth scrolling
- **♿ Accessibility** - WCAG 2.1 compliant, keyboard navigation, reduced motion support

### Interactive Elements
- Rise-from-below animations with staggered delays
- Project detail modals with dynamic content
- Smooth scroll navigation with Intersection Observer
- Mobile-responsive hamburger menu
- Keyboard shortcuts (H for home, Ctrl/Cmd+D for debug)

### Performance
- Zero build dependencies - Vanilla implementation
- CDN delivery for external resources
- Debounced resize handlers (250ms)
- Event delegation for efficient listeners
- Session caching for logo state
- Component lazy initialization

---

## 📁 Project Structure

```
Website UT Generation/
├── index.html                          # Main entry point (990 lines)
├── README.md                           # Project documentation
├── assets/
│   ├── images/
│   │   └── logo.png                    # Company logo (955x651px RGBA)
│   ├── script/
│   │   ├── master.js                   # Main application controller (260 lines)
│   │   └── components/
│   │       ├── logo-animation.js       # Splash screen component (118 lines)
│   │       ├── modal.js                # Project details modal (163 lines)
│   │       ├── navigation.js           # Navigation component (202 lines)
│   │       └── section-manager.js      # SPA routing component (220 lines)
│   └── style/
│       ├── theme.css                   # Design system & variables (235 lines)
│       ├── master.css                  # Base styles & reset (185 lines)
│       └── components/
│           ├── animations.css          # Animation library (186 lines)
│           ├── cards.css               # Card components (770 lines)
│           ├── home.css                # Hero section styles (259 lines)
│           ├── logo-animation.css      # Splash screen styles (168 lines)
│           ├── modal.css               # Modal styles (237 lines)
│           └── navigation.css          # Navbar styles (208 lines)
└── resources/
    └── Company profile.pptx            # Reference documentation
```

**Total Lines of Code:** 3,748 lines
**Total Files:** 16 files
**File Distribution:** 1 HTML, 8 CSS, 5 JavaScript, 1 PNG, 1 README

---

## 🎨 Design System

### Color Palette
```css
--color-primary: #0a1929        /* Deep dark blue */
--color-secondary: #1a2332      /* Medium dark blue */
--color-accent: #2563eb         /* Bright blue accent */
--color-white: #ffffff
--color-black: #000000
```

### Glassmorphism Effects
```css
--glass-bg: rgba(26, 35, 50, 0.7)
--glass-bg-light: rgba(37, 99, 235, 0.1)
--glass-border: rgba(255, 255, 255, 0.1)
--glass-shadow: rgba(0, 0, 0, 0.3)
--backdrop-blur-sm: blur(8px)
--backdrop-blur-md: blur(16px)
--backdrop-blur-lg: blur(24px)
```

### Spacing Scale
- `--spacing-xs: 0.5rem` (8px)
- `--spacing-sm: 1rem` (16px)
- `--spacing-md: 2rem` (32px)
- `--spacing-lg: 4rem` (64px)
- `--spacing-xl: 6rem` (96px)

---

## 🏢 Company Information

**UT Generation Sdn. Bhd.**
- **Founded:** October 25, 1995 (formerly Iringan Khidmat Sdn. Bhd.)
- **Ownership:** 100% Bumiputra-owned
- **Experience:** 28+ years in engineering & construction

**Registrations & Classifications:**
- PKK: Class 'A' & Class 'I' Contractor (Bumiputra)
- CIDB: Grade '7'
- TNB: Class 'A' and Class 'I' Contractor
- Suruhanjaya Tenaga: Class 'A' Contractor
- Ministry of Finance: Bumiputra status

**Location:**
```
NO. 42A, JALAN BADMINTON 13/29
SECTION 13, 40100 SHAH ALAM
SELANGOR DARUL EHSAN, MALAYSIA
```

**Contact:**
- Phone: +603-5518 4870
- Email: utgsb@utg.com.my

**Core Services:**
- Civil & Structural Engineering
- Mechanical & Electrical Engineering
- Overhead Transmission Systems Design & Implementation
- Domestic & Industrial Wiring
- Infrastructure Works
- Solar Energy Systems

---

## 📊 Project Portfolio Highlights

**Total Documented Projects:** 23 projects
**Project Value Range:** RM 471K - RM 42.67M
**Total Portfolio Value:** RM 186M+
**Timeline:** 1999 - Present

**Project Categories:**
1. **Transmission Line Projects (8)** - 33kV, 132kV, 275kV systems
2. **M&E Building Services (6)** - Datacenters, hospitals, commercial buildings
3. **Solar Energy (7)** - RE-Fit, rooftop, BIPV, large-scale plants
4. **Substation & Power Systems (2)** - Grid modernization, transmission upgrades
5. **Civil Work (1)** - World Heritage Site infrastructure

**Major Clients:**
- Tenaga Nasional Berhad (TNB)
- Telekom Malaysia Bhd
- CSF CX Sdn Bhd (Datacenters)
- Ahmad Zaki Sdn Bhd
- Government agencies (JKR, FELDA, Majlis Bandaraya)
- UNOPS/Minconsult (International - Papua New Guinea)

**Largest Project:** CX5 Datacenter Infrastructure (2014) - RM 42.67M

---

## 🚀 Installation & Usage

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (optional - for development)

### Quick Start
1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process required - runs immediately

### Development Server (Optional)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

### Deployment
Simply upload all files to any static web hosting:
- Upload entire directory structure
- Ensure file permissions are correct
- Point domain to `index.html`
- No server-side processing required

**Hosting Recommendations:**
- Netlify (Free tier available)
- Vercel (Free tier available)
- GitHub Pages
- Traditional web hosting (cPanel, Apache, Nginx)

---

## 🎯 SEO & Meta Tags

The website includes comprehensive meta tags for search engine optimization:

- **Title:** UT Generation Sdn Bhd - Engineering Success Through Innovation
- **Description:** Professional engineering company delivering innovative solutions
- **Keywords:** UT Generation, engineering, technology, innovation, solutions
- **Open Graph Tags:** For social media sharing
- **Favicon:** Company logo

---

## 📱 Responsive Breakpoints

```css
/* Mobile Small */
@media (max-width: 480px) {
    /* Single column, smaller text, stacked buttons */
}

/* Tablet */
@media (max-width: 768px) {
    /* Mobile menu, 2-column grids, reduced animations */
}

/* Laptop */
@media (max-width: 1024px) {
    /* 3-column grids, adjusted spacing */
}

/* Desktop */
@media (min-width: 1025px) {
    /* Full 4-column layouts, max-width 1400px */
}
```

---

## 🔧 Browser Compatibility

**Fully Supported:**
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

**Required Features:**
- ES6 JavaScript (Classes, Arrow Functions, Template Literals)
- CSS Grid & Flexbox
- Backdrop-filter (Glassmorphism)
- Intersection Observer API
- Custom Events
- Session Storage

---

## 📝 License

Copyright © 2025 UT Generation Sdn. Bhd.
All rights reserved.

---

## 👨‍💻 Development

**Developed by:** Kiyo Software TechLab
**Architecture:** Single-Page Application (SPA)
**Development Approach:** Vanilla JavaScript (No frameworks)
**Status:** Production-ready

---

## 📞 Support & Contact

For inquiries about this website or UT Generation's services:

**UT Generation Sdn. Bhd.**
Email: utgsb@utg.com.my
Phone: +603-5518 4870
Address: 42A, Jalan Badminton 13/29, Section 13, Shah Alam, Selangor

---

*Built with 💜 using modern web technologies and glassmorphism design principles*
