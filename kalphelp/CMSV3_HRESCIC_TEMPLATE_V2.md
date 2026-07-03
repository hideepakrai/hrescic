# CMS Website Generator — Standard Prompt Template v3

> **Purpose:** Generate a complete, production-ready corporate/portfolio/marketing CMS website.
> **Stack:** Next.js 15, TypeScript, Redux Toolkit, Tailwind CSS, MongoDB (dynamic content), JSON (static pages).
> **Pattern:** Tokenized, theme-driven, JSON-first, EditableText-enabled, locale-aware, SEO-ready, responsive, type-safe, component-driven.

---

## How To Use This Template

```
SECTION A — USER INPUTS: Fill these per website (company info, design system, pages, sections).
SECTION B — SYSTEM CONFIGURATION: Fixed architecture. Do NOT modify — applies to all CMS websites.
```

When generating a new website:

1. Copy this file
2. Replace all `{{PLACEHOLDER}}` values in SECTION A with your website's data
3. Keep SECTION B as-is
4. Feed the completed prompt to the AI

---

# SECTION A: USER INPUTS

## (Fill these per website — these are the ONLY values that change)

---

## A1. COMPANY INFORMATION

```yaml
COMPANY_NAME: Hrescic
PROJECT_SLUG: hrescic
BUSINESS_TYPE: Creative and Strategy Agency
VERTICAL: Creative & Marketing Agency
INDUSTRY: Branding, Web Design, Content Marketing, Video Production
BUSINESS_GOAL: Build brands, websites, content and video that work together as one system
COMPANY_TAGLINE: "Creative systems that keep your brand alive."

LANGUAGES:
  default: en
  active:
    - en

CURRENCIES:
  default: USD
  active:
    - USD
    - EUR

CONTACT:
  email: "tea@hrescic.com"
  phone: "+385 99 686 1721"
  whatsapp: "+385 99 686 1721"
  address: "Samobor, Croatia"
  googleMapsUrl: ""
```

---

## A2. DESIGN SYSTEM

### Color Palette

```yaml
colors:
  primary: "#41C717" # Brand green — buttons, links, highlights, accent text
  primaryLight: "#5FDB34" # Hover/light variation
  primaryDark: "#3AA914" # Active/visited state
  primaryHover: "#3aa914" # Button hover state

  secondary: "#1D2931" # Dark sections background
  accent: "#3E0577" # Purple accent — showreel/special sections
  accentSoft: "#F3F3F3" # Light surface

  background: "#FFFFFF" # Page background
  surface: "#F8F8F8" # Section background
  card: "#FFFFFF" # Card background

  text: "#1F1F1F" # Primary text (headings, strong)
  textSecondary: "#555555" # Body text
  textMuted: "#666666" # Secondary/meta text

  border: "#DDDDDD" # Borders, dividers
  borderHover: "#E5E7EB" # Border hover

  # Semantic colors
  success: "#41C717"
  warning: "#F59E0B"
  danger: "#EF4444"
  error: "#EF4444"
  info: "#3B82F6"
  overlay: "rgba(0,0,0,0.5)"

  # Dark mode overrides
  dark:
    background: "#0F172A" # Footer bg, dark sections
    surface: "#1E293B"
    card: "#1E293B"
    text: "#F8FAFC"
    textSecondary: "#CBD5E1"
    textMuted: "#94A3B8"
    border: "#334155"
```

### Typography

```yaml
typography:
  bodyFont: "'Inter', sans-serif"
  headingFont: "'Inter', sans-serif"
  monoFont: "'JetBrains Mono', monospace"

  text:
    xs: "0.75rem" # 12px
    sm: "0.8125rem" # 13px
    base: "1rem" # 16px
    md: "1.125rem" # 18px
    lg: "1.25rem" # 20px
    xl: "1.5rem" # 24px
    "2xl": "1.875rem" # 30px
    "3xl": "2.25rem" # 36px
    "4xl": "3rem" # 48px
    "5xl": "3.75rem" # 60px

  fw:
    light: "300"
    normal: "400"
    medium: "500"
    semibold: "600"
    bold: "700"
    extrabold: "800"

  lineHeight:
    tight: "1.2"
    normal: "1.5"
    relaxed: "1.75"
```

### Spacing, Radius, Shadows

```yaml
spacing:
  1: "0.25rem"  2: "0.5rem"  3: "0.75rem"  4: "1rem"
  5: "1.25rem"  6: "1.5rem"  8: "2rem"     10: "2.5rem"
  12: "3rem"    16: "4rem"   20: "5rem"    24: "6rem"

radius:
  sm: "0.125rem"  md: "0.375rem"  lg: "0.5rem"
  xl: "0.75rem"   "2xl": "1rem"   full: "9999px"
  custom: "16px"   # Used on cards
  custom2: "18px"  # Used on hero container
  custom3: "20px"  # Used on large cards
  pill: "9999px"   # Used on CTA buttons

shadow:
  sm: "0 1px 2px rgba(0,0,0,.05)"
  md: "0 4px 6px rgba(0,0,0,.1)"
  lg: "0 10px 15px rgba(0,0,0,.15)"
  hover: "0 15px 25px rgba(0,0,0,.2)"
```

### Layout & Components

```yaml
layout:
  container: "1280px"
  navbarHeight: "80px"
  sectionPadding: "6rem"

buttons:
  height: "48px"
  paddingX: "1.5rem"
  radius: "9999px" # Pill-shaped buttons
  primaryBackground: "#41C717"
  primaryText: "#FFFFFF"
  primaryHover: "#3aa914"
  secondaryBackground: "transparent"
  secondaryText: "#1F1F1F"
  secondaryHover: "#F8F8F8"
  outlineBorder: "#DDDDDD"
  outlineText: "#1F1F1F"
  outlineHoverBackground: "#1F1F1F"
  outlineHoverText: "#FFFFFF"

forms:
  inputHeight: "48px"
  inputPaddingX: "1rem"
  inputPaddingY: "0.75rem"
  inputRadius: "0.5rem"
  inputBackground: "#FFFFFF"
  inputText: "#1F1F1F"
  inputBorder: "#DDDDDD"
  inputBorderHover: "#E5E7EB"
  inputPlaceholder: "#666666"
  inputFocusBorder: "#41C717"
  inputFocusShadow: "0 0 0 3px rgba(65,199,23,.2)"
  inputDisabledBackground: "#F8F8F8"
  inputDisabledText: "#999999"
  textareaMinHeight: "120px"

modal:
  sm: "400px"
  md: "600px"
  lg: "800px"
```

---

## A3. PAGES & ROUTES

### Page Inventory

| #   | Page                 | Slug                        | Type        | Source                        | Description                                                                    |
| --- | -------------------- | --------------------------- | ----------- | ----------------------------- | ------------------------------------------------------------------------------ |
| 1   | Home                 | `/`                         | Static JSON | `homePage.json`               | Hero, trust badges, services overview, industries, stats, brand portfolio, CTA |
| 2   | What We Do           | `/what-we-do`               | Static JSON | `whatWeDoPage.json`           | Service overview, subscription plans, pricing comparison                       |
| 3   | Who We Create For    | `/who-we-create-for`        | Static JSON | `whoWeCreateForPage.json`     | Industry cards (tourism, education, health, boutique)                          |
| 4   | Industry Detail      | `/who-we-create-for/[slug]` | Dynamic     | MongoDB via `/api/industries` | Per-industry detail page with portfolio + results                              |
| 5   | Brand/Project Detail | `/work/[slug]`              | Dynamic     | MongoDB via `/api/portfolio`  | Individual brand case study                                                    |
| 6   | Let's Talk           | `/lets-talk`                | Static JSON | `letsTalkPage.json`           | Contact form + quick question form                                             |

### Route Structure

```
src/app/
  [locale]/                         # Internal folder for all locales
    layout.tsx                      # Locale-aware root layout
    page.tsx                        # Serves / (default) and /[locale]
    what-we-do/page.tsx             # What We Do
    who-we-create-for/
      page.tsx                      # Industry overview
      [slug]/page.tsx               # Industry detail (dynamic)
    work/
      [slug]/page.tsx               # Brand/project detail (dynamic)
    lets-talk/page.tsx              # Contact
  api/
    [[slug]]/route.ts               # Universal proxy → FastAPI backend

src/lib/data/pages/
  homePage.json
  whatWeDoPage.json
  whoWeCreateForPage.json
  letsTalkPage.json
  headerData.json
  footerData.json
```

### URL Mapping

| Page              | URL                                 |
| ----------------- | ----------------------------------- |
| Home              | `/`                                 |
| What We Do        | `/what-we-do`                       |
| Who We Create For | `/who-we-create-for`                |
| Industry Detail   | `/who-we-create-for/tourism-travel` |
| Brand Detail      | `/work/castania`                    |
| Let's Talk        | `/lets-talk`                        |

---

## A4. SECTION CONTENT (Page Blocks)

### Home Page Sections

```yaml
homePage:
  - id: hero-001
    type: hero
    layout: split-overlay
    adminTitle: Hero Section
    props:
      heading:
        en: "Creative systems that\nkeep your brand alive."
      subheading:
        en: "We build brands, websites, content and video that work together — not in fragments."
      primaryButtonText:
        en: "Book a Free Demo"
      primaryButtonHref: "/lets-talk"
      secondaryButtonText:
        en: "Ask Us Anything"
      secondaryButtonHref: "/lets-talk#ask"
      backgroundImage: ""
      backgroundOverlay: "#1D2931"

  - id: trust-bar-001
    type: logo-cloud
    layout: grid
    adminTitle: Trusted By Logos
    props:
      sectionTitle:
        en: "Trusted by Industry Professionals From:"
      logos:
        - src: "/assets/logo/HBS-styleguide-primary-logo-3-1024x507 1.svg"
          alt: "Harvard Business School"
        - src: "/assets/logo/hult-logo.svg"
          alt: "Hult International Business School"
        # ... 11 more logos (see website)

  - id: services-001
    type: service-cards
    layout: 2x2-grid
    adminTitle: What We Do
    props:
      sectionTitle:
        en: "What We Do"
      sectionDescription:
        en: "We combine brand strategy, web design and content to build creative systems..."
      services:
        - title:
            en: "Branding & Strategy"
          description:
            en: "Build clarity, consistency and a voice people remember."
          color: "#41C717"
          href: "/what-we-do"
        - title:
            en: "Web & Digital"
          description:
            en: "Websites and booking experiences designed to convert..."
          color: "#41C717"
          href: "/what-we-do"
        - title:
            en: "Content & Marketing"
          description:
            en: "Content that compounds: social, email, campaigns and analytics."
          color: "#41C717"
          href: "/what-we-do"
        - title:
            en: "AI Video Production"
          description:
            en: "Turn photos into cinematic stories..."
          color: "#41C717"
          href: "/what-we-do"
    content:
      - id: showreel-001
        type: video-embed
        layout: full
        adminTitle: Showreel
        props:
          videoUrl: "https://img.youtube.com/vi/s879lJLEfW8/maxresdefault.jpg"
          youtubeId: "s879lJLEfW8"

  - id: industries-001
    type: industry-cards
    layout: 4-col-grid
    adminTitle: Who We Create For
    props:
      sectionTitle:
        en: "Who We Create For"
      sectionDescription:
        en: "We work with forward-thinking businesses across tourism, health, beauty..."
      industries:
        - slug: tourism-travel
          title:
            en: "Tourism & Travel"
          image: "/assets/Image/travel.png"
          description:
            en: "For brands that host the world..."
        - slug: education-e-learning
          title:
            en: "Learning & Development"
          image: "/assets/Image/learning.png"
          description:
            en: "For brands that educate professionals..."
        - slug: health-pharma-beauty
          title:
            en: "Health, Pharma & Beauty"
          image: "/assets/Image/Beauty.png"
          description:
            en: "For brands that build trust through care..."
        - slug: local-boutique-brands
          title:
            en: "Local & Boutique Brands"
          image: "/assets/Image/local-Boutique.png"
          description:
            en: "For makers, doers and dreamers..."

  - id: stats-001
    type: stats-bar
    layout: centered-dark
    adminTitle: Stats Section
    props:
      background: "#1D2931"
      textColor: "#FFFFFF"
      accentColor: "#41C717"
      stats:
        - value:
            en: "$52M+"
          label:
            en: "in revenue — helped achieved for clients"
        - value:
            en: "12,000+"
          label:
            en: "digital products and services delivered"
        - value:
            en: "2,300+"
          label:
            en: "hours of video materials edited and postproduced"

  - id: portfolio-001
    type: portfolio-grid
    layout: masonry
    adminTitle: Brands We Partner With
    props:
      sectionTitle:
        en: "Brands We Partner With"
      sectionDescription:
        en: "From luxury tourism to local craftsmanship..."
      items:
        - title:
            en: "Coaching.com"
          category:
            en: "Illustration Design, eBook & Digital Reports"
          image: "/assets/Image/img1.png"
          href: "/who-we-create-for/cdc"
        - title:
            en: "MySkin & Poliderma"
          category:
            en: "Illustration Design, eBook & Digital Reports"
          image: "/assets/Image/Rectangle 1815.png"
          href: "/who-we-create-for/poliderma"
        # ... 12 more items (see website)

  - id: cta-001
    type: cta-centered
    layout: centered
    adminTitle: Final CTA
    props:
      heading:
        en: "Marketing Excellence That Works On Your Terms"
      description:
        en: "Because great marketing doesn't stop — it evolves..."
      buttonText:
        en: "Let's Talk"
      buttonHref: "/lets-talk"
```

### What We Do Page Sections

```yaml
whatWeDoPage:
  - id: wwd-hero-001
    type: hero-split
    layout: split
    adminTitle: Hero
    props:
      heading:
        en: "Creative systems that keep your brand alive."
      subheading:
        en: "We build brands, websites, content and video that work together..."
      primaryButtonText:
        en: "Book a Free Demo"
      secondaryButtonText:
        en: "Ask Us Anything"

  - id: wwd-services-001
    type: service-table
    layout: comparison
    adminTitle: Service Overview Table
    props:
      sectionTitle:
        en: "What We Do"
      sectionDescription:
        en: "Your brand, website, content and video all need to work as one system."
      services:
        - name:
            en: "Branding & Strategy"
          problem:
            en: "People don't quickly understand your value."
          deliverable:
            en: "Positioning, messaging, tone of voice, visual identity."
          impact:
            en: "Creates clarity — the foundation for conversion."
        - name:
            en: "Web & Digital"
          problem:
            en: "Your website looks good but doesn't perform."
          deliverable:
            en: "UX/UI, landing pages, full websites, booking flows, SEO."
          impact:
            en: "Turns clarity into action (leads, bookings, sales)."
        - name:
            en: "Content & Marketing"
          problem:
            en: "You're visible, but not consistently."
          deliverable:
            en: "Social content, emails, blogs, campaigns, analytics."
          impact:
            en: "Builds trust, demand and long-term momentum."
        - name:
            en: "AI Video Production"
          problem:
            en: "Hard to stand out in a crowded market."
          deliverable:
            en: "Hero videos, social clips, variations, monthly refresh."
          impact:
            en: "Adds emotional impact and boosts conversions."

  - id: wwd-process-001
    type: process-steps
    layout: horizontal-steps
    adminTitle: How Subscription Works
    props:
      sectionTitle:
        en: "How Our Subscription Model Works"
      steps:
        - title:
            en: "Clarify"
          description:
            en: "We assess what's working, what's not, and your priorities."
        - title:
            en: "Create"
          description:
            en: "We build or fix the key assets your brand needs most."
        - title:
            en: "Maintain"
          description:
            en: "Consistent monthly creative cycle."
        - title:
            en: "Scale"
          description:
            en: "Campaigns, testing and improvements on what works."

  - id: wwd-plans-001
    type: pricing-table
    layout: 4-col
    adminTitle: Plans & Pricing
    props:
      sectionTitle:
        en: "Plans & Deliverables"
      plans:
        - name:
            en: "Start"
          audience:
            en: "Not getting the sales you should."
          features:
            [
              "Brand & website audit",
              "Clear messaging + value proposition",
              "One landing page",
              "Essential updates",
            ]
          cta:
            en: "Book a Free Demo"
        - name:
            en: "Grow"
          audience:
            en: "Getting clients but not consistently."
          features:
            [
              "Deep brand review",
              "Messaging refinement",
              "Regular social + email",
              "Monthly AI video",
            ]
          cta:
            en: "Book a Free Demo"
        - name:
            en: "Scale"
          audience:
            en: "Creative workload is chaos."
          features:
            [
              "Strategic workshop",
              "Multi-channel strategy",
              "High-volume content",
              "Full strategy + analytics",
            ]
          cta:
            en: "Book a Free Demo"
        - name:
            en: "Custom"
          audience:
            en: "Need a partner who sees the whole system."
          features:
            [
              "Full ecosystem review",
              "Roadmap",
              "Hybrid execution",
              "Ongoing leadership",
            ]
          cta:
            en: "Book a Free Demo"
    content:
      - id: wwd-comparison-001
        type: comparison-table
        layout: full
        adminTitle: Plan Comparison Table
        props:
          features:
            - name:
                en: "Brand messaging"
              start:
                en: "Basic clarity"
              grow:
                en: "Full refinement"
              scale:
                en: "System-wide alignment"
              custom:
                en: "Custom messaging system"
            # ... more rows (see website)
```

### Who We Create For Page Sections

```yaml
whoWeCreateForPage:
  - id: wcf-hero-001
    type: hero-centered
    layout: centered
    adminTitle: Hero
    props:
      heading:
        en: "Brands from different worlds — connected by one truth:"
      highlight:
        en: "They need marketing that outlives the campaign."
      primaryButtonText:
        en: "Book a Free Demo"
      secondaryButtonText:
        en: "Ask Us Anything"

  - id: wcf-industries-001
    type: industry-detail-cards
    layout: 2x2-feature
    adminTitle: Industry Details
    props:
      industries:
        - slug: tourism-travel
          title:
            en: "Tourism & Travel"
          pain:
            en: "People browse, compare your offer with 40 similar listings, and leave."
          solution:
            en: "A booking-focused brand and website that make the value obvious — instantly."
          stats:
            en: "+68% bookings after full website rebuild"
          suggestedPlan:
            en: "Grow + Scale"
          href: "/who-we-create-for/tourism-travel"
        - slug: education-e-learning
          title:
            en: "Education & E-Learning"
          pain:
            en: "Programs and funnels evolve separately, creating fragmented experiences."
          solution:
            en: "Clear structure and systems that support scale without adding confusion."
          stats:
            en: "2.5x higher enrolment"
          suggestedPlan:
            en: "Grow + Scale"
          href: "/who-we-create-for/education-e-learning"
        - slug: health-pharma-beauty
          title:
            en: "Health, Pharma & Beauty"
          pain:
            en: "Online presence feels outdated or inconsistent."
          solution:
            en: "Credible, empathetic digital identity that builds trust."
          stats:
            en: "+32% returning clients after content setup"
          suggestedPlan:
            en: "Start + Grow"
          href: "/who-we-create-for/health-pharma-beauty"
        - slug: local-boutique-brands
          title:
            en: "Local & Boutique Brands"
          pain:
            en: "Online you blend in with dozens of similar search results."
          solution:
            en: "Authentic identity + storytelling that match the quality of your work."
          stats:
            en: "45% conversion improvement"
          suggestedPlan:
            en: "Start + Grow"
          href: "/who-we-create-for/local-boutique-brands"
```

### Let's Talk Page Sections

```yaml
letsTalkPage:
  - id: lt-hero-001
    type: hero-centered
    layout: centered
    adminTitle: Hero
    props:
      heading:
        en: "Let's talk on your terms."
      subheading:
        en: "Whether you're ready to move forward or just exploring your options."

  - id: lt-form-demo-001
    type: form
    layout: two_column
    adminTitle: Book a Demo Form
    props:
      formHeading:
        en: "Book your demo"
      formDescription:
        en: "Tell us a bit about your business and we'll tailor the call to what matters."
      successHeading:
        en: "Thank you!"
      successDescription:
        en: "We've received your request and will get back to you within 24 hours."
      successButtonText:
        en: "Back to Home"
      form:
        id: "demo-booking"
        name:
          en: "Demo Booking Form"
        settings:
          submitText:
            en: "Book My Demo"
          recaptcha: true
        fields:
          - id: "name"
            type: text
            name:
              en: "name"
            label:
              en: "Name"
            placeholder:
              en: "Your full name"
            required: true
            validation:
              minLength: 2
              maxLength: 100
          - id: "email"
            type: email
            name:
              en: "email"
            label:
              en: "Email"
            placeholder:
              en: "your@email.com"
            required: true
            validation:
              pattern: "^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$"
          - id: "company"
            type: text
            name:
              en: "company"
            label:
              en: "Company (optional)"
            placeholder:
              en: "Your company name"
            required: false
          - id: "website"
            type: url
            name:
              en: "website"
            label:
              en: "Website (optional)"
            placeholder:
              en: "https://"
            required: false
          - id: "improvement"
            type: textarea
            name:
              en: "improvement"
            label:
              en: "What would you like to improve?"
            placeholder:
              en: "Tell us about your goals..."
            required: false
            validation:
              maxLength: 2000

  - id: lt-form-ask-001
    type: form
    layout: one_column
    adminTitle: Ask a Question Form
    props:
      formHeading:
        en: "Ask us anything"
      formDescription:
        en: "No pressure and no sales pitch, just clarity on what makes sense."
      successHeading:
        en: "Question received!"
      successDescription:
        en: "You'll get a clear answer within 24 hours."
      successButtonText:
        en: "Send Another"
      form:
        id: "ask-question"
        name:
          en: "Quick Question Form"
        settings:
          submitText:
            en: "Send My Question"
          recaptcha: true
        fields:
          - id: "name"
            type: text
            name:
              en: "name"
            label:
              en: "Name"
            placeholder:
              en: "Your full name"
            required: true
            validation:
              minLength: 2
              maxLength: 100
          - id: "email"
            type: email
            name:
              en: "email"
            label:
              en: "Email"
            placeholder:
              en: "your@email.com"
            required: true
            validation:
              pattern: "^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$"
          - id: "question"
            type: textarea
            name:
              en: "question"
            label:
              en: "What do you need help with?"
            placeholder:
              en: "Tell us what you're looking for..."
            required: true
            validation:
              minLength: 10
              maxLength: 5000

  - id: lt-contact-001
    type: contact-info
    layout: centered
    adminTitle: Contact Details
    props:
      email: "tea@hrescic.com"
      phone: "+385 99 686 1721"
      location: "Samobor, Croatia"
```

---

## A5. SHARED COMPONENT DATA

### Header

```yaml
header:
  logo:
    type: image
    src: "/assets/Image/hrescic-logo.svg"
    alt: "Hrescic logo"
    width: "auto"
    height: "32px"
  navigation:
    - label:
        en: "Home"
      href: "/"
    - label:
        en: "What We Do"
      href: "/what-we-do"
    - label:
        en: "Who We Create For"
      href: "/who-we-create-for"
    - label:
        en: "Let's Talk"
      href: "/lets-talk"
  ctaButton:
    label:
      en: "Book a Demo"
    href: "/lets-talk"
  style:
    sticky: true
    background: "#FFFFFF"
    borderBottom: "1px solid #E5E7EB"
```

### Footer

```yaml
footer:
  background: "#0F172A"
  textColor: "#CBD5E1"
  accentColor: "#41C717"
  columns:
    - title:
        en: "Services"
      links:
        - label:
            en: "Branding & Strategy"
          href: "/what-we-do"
        - label:
            en: "Web & Digital"
          href: "/what-we-do"
        - label:
            en: "Content & Marketing"
          href: "/what-we-do"
        - label:
            en: "AI Video Production"
          href: "/what-we-do"
    - title:
        en: "Industries"
      links:
        - label:
            en: "Tourism & Travel"
          href: "/who-we-create-for/tourism-travel"
        - label:
            en: "Education & E-Learning"
          href: "/who-we-create-for/education-e-learning"
        - label:
            en: "Health, Pharma & Beauty"
          href: "/who-we-create-for/health-pharma-beauty"
        - label:
            en: "Local & Boutique Brands"
          href: "/who-we-create-for/local-boutique-brands"
    - title:
        en: "Company"
      links:
        - label:
            en: "Home"
          href: "/"
        - label:
            en: "Let's Talk"
          href: "/lets-talk"
  bottomBar:
    copyright:
      en: "© {year} Hrescic. All rights reserved."
    links:
      - label:
          en: "Privacy Policy"
        href: "/privacy"
      - label:
          en: "Terms of Service"
        href: "/terms"
  social:
    - platform: "Email"
      url: "mailto:tea@hrescic.com"
    - platform: "Phone"
      url: "tel:+385996861721"
```

---

## A6. MONGODB SCHEMAS (Dynamic Content)

```yaml
collections:
  industries:
    fields:
      - name: slug
        type: string
        required: true
      - name: title
        type: localizedString
        required: true
      - name: description
        type: localizedString
      - name: pain
        type: localizedString
      - name: solution
        type: localizedString
      - name: stats
        type: string
      - name: suggestedPlan
        type: string
      - name: heroImage
        type: string
      - name: sections
        type: SectionBlock[]
      - name: order
        type: number
      - name: isPublished
        type: boolean

  portfolio:
    fields:
      - name: slug
        type: string
        required: true
      - name: title
        type: string
        required: true
      - name: category
        type: string
      - name: description
        type: string
      - name: client
        type: string
      - name: projectUrl
        type: string
      - name: featuredImage
        type: string
      - name: gallery
        type: string[]
      - name: tags
        type: string[]
      - name: industry
        type: string
      - name: results
        type: string[]
      - name: isPublished
        type: boolean
```

---

## A7. FORM CONFIGURATIONS (Dynamic)

Every form on the website is defined entirely in JSON via `section.props.form`. Forms are rendered dynamically — no field names are hardcoded.

### Form JSON Structure

```yaml
form:
  id: "unique-form-id" # Required — used in API submission
  name: "Human-readable name" # Required — used in API submission
  settings:
    submitText: "Submit" # Button text
    recaptcha: true # Enable reCAPTCHA
    successRedirect: "/thank-you" # Optional redirect URL
  fields:
    - id: "field-id" # Unique field identifier
      type: text # See supported field types below
      name: "field_name" # Field name for form submission
      label: "Field Label" # Display label
      placeholder: "Hint text" # Placeholder
      defaultValue: "" # Optional default
      required: true # Is this field required?
      helperText: "" # Optional help text below field
      validation:
        minLength: 2
        maxLength: 100
        pattern: "^[a-zA-Z]+$" # Optional regex pattern
        min: 0 # For number fields
        max: 100 # For number fields
      options: # For select/multiselect/radio
        - value:
            en: "opt1"
          label:
            en: "Option 1"
      accept: ".pdf,.jpg" # For file fields
      multiple: false # For file fields
```

### Supported Field Types

| Type          | HTML Rendering                  | Validation                    |
| ------------- | ------------------------------- | ----------------------------- |
| `text`        | `<input type="text">`           | minLength, maxLength, pattern |
| `email`       | `<input type="email">`          | Built-in email + pattern      |
| `phone`       | `<input type="tel">`            | Built-in tel + pattern        |
| `password`    | `<input type="password">`       | minLength, maxLength          |
| `textarea`    | `<textarea>`                    | minLength, maxLength          |
| `number`      | `<input type="number">`         | min, max, step                |
| `select`      | `<select>`                      | options array                 |
| `multiselect` | `<select multiple>`             | options array                 |
| `checkbox`    | `<input type="checkbox">`       | —                             |
| `radio`       | Radio group                     | options array                 |
| `switch`      | Toggle switch                   | —                             |
| `date`        | `<input type="date">`           | min, max                      |
| `datetime`    | `<input type="datetime-local">` | min, max                      |
| `file`        | `<input type="file">`           | accept, multiple              |
| `hidden`      | `<input type="hidden">`         | —                             |
| `url`         | `<input type="url">`            | pattern                       |

Unknown field types must be ignored gracefully — never break rendering.

### Form Layout

Controlled by `section.layout`:

- `one_column` — single column (default)
- `two_column` — 2-column grid
- `three_column` — 3-column grid

### Form Behavior Rules (see B9 for full rendering spec)

1. Forms render entirely from `section.props.form` JSON — never hardcode fields
2. POST to `/api/form-data` with `Content-Type: application/json` (or `multipart/form-data` if files present)
3. Request body includes: `pageSlug`, `pageTitle`, `sectionId`, `formId`, `formName`, `submission: { fieldName: value }`
4. Client-side validation before submit: required, email, phone, pattern, min/max
5. Inline validation messages below each field
6. Submit button disabled while submitting + loading indicator
7. On success: hide form, show `successHeading` / `successDescription` + optional `successButtonText`
8. On error: preserve values, show server errors or generic message
9. Accessibility: `id`, `name`, `label`, `aria-*`, keyboard navigation

---

# SECTION B: SYSTEM CONFIGURATION

## (Fixed — Do NOT modify. Applies to ALL CMS websites)

---

## B1. AI PERSONA

Act as an Elite Full-Stack Next.js 15 Architect, CMS Specialist, and Design System Expert. Generate a complete, production-ready corporate/portfolio/marketing/blog CMS website.

System constraints: Tokenized, theme-driven, JSON-first, EditableText-enabled, locale-aware, SEO-ready, responsive, type-safe, component-driven.

---

## B2. ARCHITECTURE OVERVIEW

```
src/lib/theme/config.ts       ← Source of truth (actual token values)
       │
scripts/generate-theme-css.js ← Compiler
       │
src/styles/globals.css         ← Token placeholders only
       │
Compiled CSS variables on :root
       │
Components consume var(--primary), var(--background), etc.

Data Flow: JSON → Redux → Component
Static pages rendered from local JSON files in src/lib/data/pages/
Dynamic content served via proxy API → FastAPI backend → MongoDB

API PROXY PATTERN:
  src/app/api/[[slug]]/route.ts  ← Single catch-all route
       │
  Proxies all HTTP methods (GET/POST/PUT/PATCH/DELETE/OPTIONS/HEAD)
       │
  Forwards to KALZERO_PUBLIC_API_URL + path
       │
  Special handling for PUT/PATCH /api/media/[id] — updates MongoDB directly
```

---

## B3. CORE REQUIREMENTS

1. NO `.data.ts` files anywhere
2. SINGLE PAGE JSON — each page has its own JSON in `src/lib/data/pages/`
3. ALL PAGES RENDER FROM JSON — static page content is never stored in MongoDB
4. DATA FLOW: JSON → Redux → Component
5. EDITABLE TEXT — All text content must be wrapped in EditableText component. When an admin is signed in, an edit button appears which allows the element's text to be editable inline.
6. CLEAN TEXT STORAGE — JSON stores text WITHOUT HTML tags
7. THEME TOKENS DYNAMIC — `{category.subcategory.property}` placeholders in CSS
8. LOCALE SUPPORT — Routes use `[locale]` folder structure. Default language (en) has NO locale prefix in URLs (e.g. `/`). Other languages include prefix (e.g. `/[locale]`). Translated text must be written in the target language's native script. Switching via URL prefix only, no UI language toggle button.
9. ALL FORMS ARE DYNAMIC — rendered entirely from JSON configuration in `section.props.form`; never hardcode field names, types, or validation rules
10. SINGLE API PROXY — all API calls go through `src/app/api/[[slug]]/route.ts` which proxies to FastAPI backend; no individual route.ts files per entity

---

## B4. GENERATION TARGETS

### TARGET 1: `src/styles/globals.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: {colors.primary};
  --primary-light: {colors.primaryLight};
  --primary-dark: {colors.primaryDark};
  --primary-hover: {colors.primaryHover};
  --secondary: {colors.secondary};
  --accent: {colors.accent};
  --accent-hover: {colors.accentHover};
  --accent-soft: {colors.accentSoft};
  --background: {colors.background};
  --surface: {colors.surface};
  --card: {colors.card};
  --text: {colors.text};
  --text-secondary: {colors.textSecondary};
  --text-muted: {colors.textMuted};
  --border: {colors.border};
  --border-hover: {colors.borderHover};
  --success: {colors.success};
  --warning: {colors.warning};
  --danger: {colors.danger};
  --error: {colors.error};
  --info: {colors.info};
  --overlay: {colors.overlay};

  --card-hover-border: {colors.primary};

  --font-body: {typography.bodyFont};
  --font-heading: {typography.headingFont};
  --font-mono: {typography.monoFont};
  --text-xs: {typography.text.xs};
  --text-sm: {typography.text.sm};
  --text-base: {typography.text.base};
  --text-md: {typography.text.md};
  --text-lg: {typography.text.lg};
  --text-xl: {typography.text.xl};
  --text-2xl: {typography.text.2xl};
  --text-3xl: {typography.text.3xl};
  --text-4xl: {typography.text.4xl};
  --text-5xl: {typography.text.5xl};
  --font-light: {typography.fw.light};
  --font-normal: {typography.fw.normal};
  --font-medium: {typography.fw.medium};
  --font-semibold: {typography.fw.semibold};
  --font-bold: {typography.fw.bold};
  --font-extrabold: {typography.fw.extrabold};
  --leading-tight: {typography.lineHeight.tight};
  --leading-normal: {typography.lineHeight.normal};
  --leading-relaxed: {typography.lineHeight.relaxed};

  --space-1: {spacing.1};  --space-2: {spacing.2};
  --space-3: {spacing.3};  --space-4: {spacing.4};
  --space-5: {spacing.5};  --space-6: {spacing.6};
  --space-8: {spacing.8};  --space-10: {spacing.10};
  --space-12: {spacing.12};  --space-16: {spacing.16};
  --space-20: {spacing.20};  --space-24: {spacing.24};

  --radius-sm: {radius.sm};  --radius-md: {radius.md};
  --radius-lg: {radius.lg};  --radius-xl: {radius.xl};
  --radius-2xl: {radius.2xl};  --radius-full: {radius.full};

  --shadow-sm: {shadow.sm};  --shadow-md: {shadow.md};
  --shadow-lg: {shadow.lg};  --shadow-hover: {shadow.hover};

  --container: {layout.container};
  --navbar-height: {layout.navbarHeight};
  --section-padding: {layout.sectionPadding};

  --btn-height: {buttons.height};
  --btn-padding-x: {buttons.paddingX};
  --btn-radius: {buttons.radius};
  --btn-primary-bg: {buttons.primaryBackground};
  --btn-primary-text: {buttons.primaryText};
  --btn-primary-hover: {buttons.primaryHover};
  --btn-secondary-bg: {buttons.secondaryBackground};
  --btn-secondary-text: {buttons.secondaryText};
  --btn-secondary-hover: {buttons.secondaryHover};
  --btn-outline-border: {buttons.outlineBorder};
  --btn-outline-text: {buttons.outlineText};
  --btn-outline-hover-bg: {buttons.outlineHoverBackground};
  --btn-outline-hover-text: {buttons.outlineHoverText};

  --input-height: {forms.inputHeight};
  --input-padding-x: {forms.inputPaddingX};
  --input-padding-y: {forms.inputPaddingY};
  --input-radius: {forms.inputRadius};
  --input-bg: {forms.inputBackground};
  --input-text: {forms.inputText};
  --input-border: {forms.inputBorder};
  --input-border-hover: {forms.inputBorderHover};
  --input-placeholder: {forms.inputPlaceholder};
  --input-focus-border: {forms.inputFocusBorder};
  --input-focus-shadow: {forms.inputFocusShadow};
  --input-disabled-bg: {forms.inputDisabledBackground};
  --input-disabled-text: {forms.inputDisabledText};
  --textarea-min-height: {forms.textareaMinHeight};

  --modal-sm: {modal.sm};  --modal-md: {modal.md};  --modal-lg: {modal.lg};
}

.dark {
  --background: {colors.dark.background};
  --surface: {colors.dark.surface};
  --card: {colors.dark.card};
  --text: {colors.dark.text};
  --text-secondary: {colors.dark.textSecondary};
  --text-muted: {colors.dark.textMuted};
  --border: {colors.dark.border};
  --input-bg: {colors.dark.inputBackground};
  --input-text: {colors.dark.inputText};
  --input-border: {colors.dark.inputBorder};
  --input-placeholder: {colors.dark.inputPlaceholder};
  --input-disabled-bg: {colors.dark.inputDisabledBackground};
}
```

### TARGET 2: `src/lib/theme/theme.config.ts`

Generate a complete theme config object with ALL values from SECTION A2 (Color Palette, Typography, Spacing, Radius, Shadows, Layout, Buttons, Forms, Modal, Dark Mode).

### TARGET 3: `scripts/generate-theme-css.ts`

Same as existing — reads `theme.config.ts`, replaces `{path.placeholders}` in a CSS template, writes `globals.css`.

### TARGET 4: Page JSON files

Generate one JSON file per static page (from SECTION A4) in `src/lib/data/pages/` following the page block schema:

```typescript
interface PageBlock {
  id: string;
  type: string;
  layout: string;
  adminTitle: string;
  props?: Record<string, unknown>;
  content?: PageBlock[];
}
```

### TARGET 5: Header + Footer JSON

Generate `headerData.json` and `footerData.json` from SECTION A5.

### TARGET 6: MongoDB types (`src/lib/db/types.ts`)

Generate TypeScript interfaces for all dynamic collections listed in SECTION A6.

### TARGET 7: Redux Store (pages slice + store setup)

Same pattern as CMSV2 — pages slice with `setCurrentPageBySlug`, `updatePageField`, `setEditableMode`. Store with Redux Toolkit.

### TARGET 8: Shared Components

- `EditableText` — click-to-edit inline text component
- `Button` — primary/secondary variants
- `Card` — themed card container
- `Modal` — overlay modal
- `Accordion` — expandable sections
- `LoadingSkeleton` — loading placeholder
- `ThemeToggle` — light/dark toggle

### TARGET 9: Page Components per Section Type

For each unique `type` used in SECTION A4 page blocks, generate a render component:

- `HeroSection` (layouts: centered, split, split-overlay)
- `LogoCloud` (trust bar)
- `ServiceCards` (service grid)
- `IndustryCards` (industry grid)
- `StatsBar` (stats section with dark background)
- `PortfolioGrid` (masonry portfolio)
- `CtaCentered` (centered CTA)
- `ServiceTable` (comparison table)
- `ProcessSteps` (horizontal step flow)
- `PricingTable` (plan comparison)
- `ComparisonTable` (feature grid)
- `DynamicForm` (renders forms entirely from JSON — see TARGET 13)
- `ContactInfo` (contact details display)
- `VideoEmbed` (YouTube/showreel)
- `IndustryDetailCards` (per-industry feature cards)

### TARGET 10: `src/app/api/[[slug]]/route.ts`

Generate the universal API proxy route. This is the ONLY API route file in the project.

```typescript
import type { NextRequest } from "next/server";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/db";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ProxyRouteContext {
  params: Promise<{ path?: string[] }>;
}

function normalizeAbsoluteUrl(value: string | undefined) {
  if (!value) return null;
  const trimmed = value.endsWith("/") ? value.slice(0, -1) : value;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://"))
    return trimmed;
  return null;
}

function resolveApiProxyBaseUrl() {
  const envUrl = process.env.KALZERO_PUBLIC_API_URL?.trim();
  if (!envUrl) throw new Error("KALZERO_PUBLIC_API_URL is not defined");
  return normalizeAbsoluteUrl(envUrl) ?? envUrl;
}

function buildTargetUrl(request: NextRequest, path: string[] | undefined) {
  const incomingUrl = new URL(request.url);
  const pathname = path && path.length > 0 ? `/${path.join("/")}` : "";
  const baseUrl = resolveApiProxyBaseUrl();
  return `${baseUrl}${pathname}${incomingUrl.search}`;
}

// Forwards all HTTP methods to the FastAPI backend
// Special-cases PUT/PATCH /api/media/[id] for direct MongoDB updates
async function proxyRequest(request: NextRequest, context: ProxyRouteContext) {
  const { path } = await context.params;

  // Intercept media metadata updates to MongoDB
  if (
    (request.method === "PUT" || request.method === "PATCH") &&
    path &&
    ((path.length === 2 && path[0] === "media") ||
      (path.length === 3 && path[0] === "admin" && path[1] === "media"))
  ) {
    const id = path[path.length - 1];
    const tenantDbName = request.headers.get("x-tenant-db");
    if (!tenantDbName) {
      return Response.json(
        { error: "x-tenant-db header is required" },
        { status: 400 },
      );
    }
    try {
      const body = await request.json();
      const { filename, altText, foldername, isWatermark } = body;
      const client = await connectToDatabase();
      const db = client.db(tenantDbName);
      const collection = db.collection("media");
      const updateData: Record<string, unknown> = {};
      if (filename !== undefined) updateData.filename = filename;
      if (altText !== undefined) updateData.alt = altText;
      if (foldername !== undefined) updateData.foldername = foldername;
      if (isWatermark !== undefined) updateData.isWatermark = isWatermark;
      updateData.updatedAt = new Date();
      let query: Record<string, unknown> = {};
      if (ObjectId.isValid(id)) {
        query = { _id: new ObjectId(id) };
      } else {
        query = { id: id };
      }
      const result = await collection.updateOne(query, { $set: updateData });
      if (result.matchedCount === 0 && ObjectId.isValid(id)) {
        const altResult = await collection.updateOne(
          { id: id },
          { $set: updateData },
        );
        if (altResult.matchedCount === 0) {
          return Response.json(
            { error: "Media item not found" },
            { status: 404 },
          );
        }
      } else if (result.matchedCount === 0) {
        return Response.json(
          { error: "Media item not found" },
          { status: 404 },
        );
      }
      return Response.json({
        success: true,
        message: "Media item updated successfully",
      });
    } catch (error: any) {
      return Response.json(
        { error: error.message || "Failed to update media item" },
        { status: 500 },
      );
    }
  }

  // Proxy everything else to FastAPI backend
  const incomingUrl = new URL(request.url);
  const targetUrl = buildTargetUrl(request, path);
  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.set("x-forwarded-host", incomingUrl.host);
  headers.set("x-forwarded-proto", incomingUrl.protocol.replace(":", ""));
  const init: RequestInit = {
    method: request.method,
    headers,
    cache: "no-store",
    redirect: "manual",
  };
  let body: ArrayBuffer | undefined;
  if (request.method !== "GET" && request.method !== "HEAD") {
    body = await request.arrayBuffer();
  }
  if (body && body.byteLength > 0) init.body = body;
  try {
    const response = await fetch(targetUrl, init);
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: new Headers(response.headers),
    });
  } catch (error: any) {
    const detail =
      error instanceof Error && error.message
        ? `API proxy request failed: ${error.message}`
        : "API proxy request failed.";
    return Response.json({ detail, targetUrl }, { status: 502 });
  }
}

export const GET = proxyRequest;
export const POST = proxyRequest;
export const PUT = proxyRequest;
export const PATCH = proxyRequest;
export const DELETE = proxyRequest;
export const OPTIONS = proxyRequest;
export const HEAD = proxyRequest;
```

### TARGET 11: `src/middleware.ts` (if multi-language)

Generate locale-aware middleware following the pattern from CMSV2.

### TARGET 12: `src/lib/i18n/locale.ts` (if multi-language)

Export `getLocalizedString` helper for `LocalizedString` objects.

### TARGET 13: Dynamic Form Section Component

Generate a `FormSection` component that renders forms entirely from JSON config:

- Reads `section.props.form` for field definitions and settings
- Reads `section.props.formHeading`, `formDescription`, `successHeading`, `successDescription`, `successButtonText` for UI content
- Uses `section.layout` (one_column/two_column/three_column) for field grid layout
- Renders every field type from the dynamic field definitions (text, email, phone, password, textarea, number, select, multiselect, checkbox, radio, switch, date, datetime, file, hidden, url)
- Implements client-side validation: required, email, phone, pattern, min/max
- Shows inline validation messages below each field
- On submit: POSTs to `/api/form-data` with body `{ pageSlug, pageTitle, sectionId, formId, formName, submission: { fieldName: value } }`
- Auto-switches to `multipart/form-data` when file fields are present
- Submit button disabled + loading indicator during submission
- On success: hides form, shows success state with `successHeading`/`successDescription`/`successButtonText`
- On error: preserves values, shows server or generic error
- Full accessibility: `id`, `name`, `label`, `aria-*`, keyboard nav
- Unknown field types are ignored gracefully — never break rendering

### TARGET 14: API Form Submission Handler (included in proxy)

The proxy route at `src/app/api/[[slug]]/route.ts` forwards `POST /api/form-data` to the FastAPI backend. The frontend `FormSection` component sends submissions to `/api/form-data` — no additional route file needed.

---

## B5. COMPONENT INVENTORY

| Component            | Path                                      | Purpose                                                                       |
| -------------------- | ----------------------------------------- | ----------------------------------------------------------------------------- |
| EditableText         | `src/components/shared/EditableText.tsx`  | Click-to-edit inline text                                                     |
| Button               | `src/components/ui/Button.tsx`            | Primary/secondary/outline buttons                                             |
| Card                 | `src/components/ui/Card.tsx`              | Themed card container                                                         |
| Modal                | `src/components/ui/Modal.tsx`             | Overlay dialog                                                                |
| Accordion            | `src/components/ui/Accordion.tsx`         | Expandable FAQ/list                                                           |
| LoadingSkeleton      | `src/components/ui/LoadingSkeleton.tsx`   | Loading state                                                                 |
| ThemeToggle          | `src/components/ui/ThemeToggle.tsx`       | Light/dark toggle                                                             |
| DynamicForm          | `src/components/sections/DynamicForm.tsx` | Renders forms entirely from JSON config (field types, validation, submission) |
| [Section Components] | `src/components/sections/*.tsx`           | One per page block type                                                       |

---

## B6. DATA FLOW SUMMARY

```
STATIC PAGES:
  src/lib/data/pages/*.json
       │
  pagesSlice.loadInitialData()
       │
  useSelector(state.pages.currentPages)
       │
  Page renders content.map() → <SectionRenderer block={...} />
       │
  <EditableText> dispatches updatePageField → Redux → UI updates

DYNAMIC PAGES:
  Server component fetches via fetch(/api/industries, /api/portfolio, ...)
       │
  src/app/api/[[slug]]/route.ts proxies to KALZERO_PUBLIC_API_URL + path
       │
  FastAPI backend queries MongoDB and returns JSON
       │
  Renders same section components with fetched props

FORM SUBMISSION:
  <DynamicForm block={...}>
       │
  POST /api/form-data (pageSlug, sectionId, formId, submission)
       │
  src/app/api/[[slug]]/route.ts proxies to FastAPI backend
       │
  FastAPI stores submission in MongoDB
       │
  Returns success/error response → DynamicForm shows success/error state

MEDIA UPLOAD:
  PUT/PATCH /api/media/[id]
       │
  src/app/api/[[slug]]/route.ts intercepts and updates MongoDB directly
       │
  (Bypasses FastAPI for media metadata updates)
```

---

## B7. RESPONSIVE BREAKPOINTS

| Breakpoint | Width    | Usage                     |
| ---------- | -------- | ------------------------- |
| Mobile     | < 640px  | Single column, stacked    |
| sm         | ≥ 640px  | 2-column grids            |
| md         | ≥ 768px  | 2-3 column grids          |
| lg         | ≥ 1024px | Full multi-column layouts |
| xl         | ≥ 1280px | Max-width container       |

Container max-width: 1280px (`container-xl` or `max-w-8xl`)

---

## B8. SEO REQUIREMENTS

1. Each page JSON includes `metaTitle` and `metaDescription`
2. `generateMetadata()` reads from Redux store or page JSON
3. Open Graph tags: `og:title`, `og:description`, `og:url`
4. Twitter card: `summary`
5. Canonical URL per page
6. robots: `index, follow`
7. Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`
8. `alt` text on all images
9. Focus-visible outlines for keyboard navigation
10. Skip-to-content link
11. Prefers-reduced-motion media query support
12. Create appropriate robot.txt and sitemap files.
