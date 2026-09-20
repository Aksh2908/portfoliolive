# AKSHITA CHAUDHARY — MASTER PORTFOLIO BUILD SPEC
## For Devin AI / Autonomous Coding Agent

Version: 1.0
Status: Implementation specification
Primary source of truth: Akshita Chaudhary's uploaded resume
Design direction: Professional light-theme interactive editorial portfolio
Priority: Authenticity > clarity > performance > visual novelty

---

# 0. CORE INSTRUCTION

Build a production-quality personal portfolio website for Akshita Chaudhary, a Computer Science & Engineering student.

The website must feel:
- professional
- distinctive
- calm
- modern
- technically polished
- recruiter-friendly
- lightweight
- fast
- intentional

DO NOT build a generic developer portfolio template.

DO NOT build a slideshow.

DO NOT make the portfolio feel like:
- a resume pasted into a website
- a collection of equal cards
- a PowerPoint presentation
- an AI-generated portfolio full of marketing language
- a neon/cyberpunk developer site

The uniqueness must come primarily from:
- information architecture
- spatial composition
- project-specific visual metaphors
- subtle interaction
- transitions based on movement/rearrangement rather than generic fade-ins
- typography
- whitespace
- strong visual hierarchy

The implementation must remain lightweight.

Use the resume as the single source of truth. Do not invent facts, metrics, responsibilities, links, technologies, employers, users, testimonials, screenshots, or achievements.

---

# 1. NON-NEGOTIABLE CONTENT RULES

1. Resume is the single source of truth.
2. Never invent information.
3. Never inflate or exaggerate achievements.
4. Never fabricate project outcomes.
5. Never fabricate project screenshots.
6. Never fabricate users, revenue, performance, clients, deployments, or adoption.
7. If a piece of information is unclear, omit it or use neutral wording.
8. Preserve factual numbers exactly where supported.
9. Do NOT create a Certifications/Certificates section.
10. Do NOT create certification cards, badges, grids, or carousels.
11. Certifications present in the resume should preferably be omitted from the portfolio.
12. Use modest, human writing.
13. Avoid generic phrases such as:
   - passionate developer
   - highly motivated individual
   - results-driven
   - innovative problem solver
   - technology enthusiast
   - transforming ideas into reality
   - cutting-edge solutions
14. Do not write like a marketing agency.
15. Do not make Akshita sound more experienced than the resume supports.

---

# 2. VISUAL DIRECTION

## Overall concept

Build an:

"Interactive editorial workbench"

The site should feel like a continuous environment where the visitor explores Akshita's work.

It should NOT feel like separate slides.

Think:
- editorial website
- premium product documentation
- design portfolio
- interactive technical notebook
- quiet digital workspace

Do NOT directly copy Apple, Aman Singh Negi's portfolio, or any other website.

The friend's portfolio URL was supplied only as inspiration for the idea that a developer portfolio can have a strong personality and unconventional interaction. Do not copy its layouts, code, assets, wording, animations, or visual identity.

---

# 3. THEME

LIGHT THEME ONLY.

There is NO:
- dark mode
- theme toggle
- system-theme detection
- dark-mode CSS
- theme persistence

Use one carefully designed professional light appearance.

Suggested direction:
- warm/off-white or clean white background
- near-black primary text
- muted gray secondary text
- subtle gray borders
- restrained single accent color
- very light surface variations
- subtle shadows only where useful

Avoid:
- neon colors
- rainbow gradients
- excessive gradients
- heavy glassmorphism
- excessive blur
- glowing UI
- overly saturated accent colors

The site should look excellent on a normal laptop display without relying on dramatic visual effects.

---

# 4. CONTENT STRUCTURE

Use exactly these major sections unless implementation reveals a strong accessibility/usability reason to adjust the grouping:

1. Navigation
2. Intro / Hero
3. A Little Context
4. Selected Work
5. Project Details / Technical Layers
6. A Few Numbers
7. Tools I've Used
8. Milestones
9. About
10. Experience
11. Education
12. Contact / Closing
13. Footer

Do not add:
- Certifications
- Blog
- Testimonials
- Services
- pricing
- client logos
- fake case studies
- fake recommendations

---

# 5. NAVIGATION

Desktop:
- Akshita Chaudhary / abbreviated wordmark on left
- minimal navigation on right
- Resume link/button
- no clutter

Suggested navigation:
- Work
- Tools
- Milestones
- About
- Education
- Contact
- Resume

Do not make the navbar oversized.

Use sticky positioning only if it improves usability.

The navbar should visually recede when the user is reading.

Mobile:
- compact brand
- accessible menu button
- full-width/near-full-width navigation panel
- comfortable touch targets
- keyboard accessible
- visible focus state
- Escape closes menu
- no complicated animation

The mobile menu should not be a tiny dropdown with difficult touch targets.

---

# 6. HERO / INTRO

Do not make the hero a conventional animated landing page.

Avoid:
- typing animation
- rotating titles
- particles
- giant 3D model
- animated code
- excessive counters
- cursor effects

Initial composition should be calm and mostly static.

Content:
- Akshita Chaudhary
- Computer Science & Engineering identity
- modest one- or two-sentence introduction
- View Work
- Resume
- GitHub
- LinkedIn if available in the resume

Writing should sound like a student/developer describing herself, not a startup landing page.

Suggested tone:
"Computer Science student interested in software development, AI/ML, and building practical systems."

This is a direction, not permission to invent claims. Keep final wording tied to the resume.

---

# 7. A LITTLE CONTEXT

Do not create a long biography.

Use a compact editorial information layout.

Possible facts:
- B.Tech Computer Science & Engineering
- Graphic Era Hill University
- 2023–2027
- CGPA 9.42/10
- Uttarakhand
- relevant technical interests supported by the resume

Possible visual structure:

A LITTLE CONTEXT

[short paragraph]

STUDYING
Computer Science & Engineering

CGPA
9.42 / 10

GRADUATING
2027

The section should feel like an identity/context panel, not an About-Me essay.

---

# 8. SELECTED WORK — MAIN VISUAL CENTER

This is the most important section.

Projects should NOT be presented as four identical cards.

Use a continuous project environment.

Projects:

01 — Cyber Crime Analysis System
02 — Smart Task Manager
03 — Votix
04 — AI-Driven Institutional Inspection System

Each project should have:
- number
- title
- concise description
- problem/context where supported
- approach
- technologies
- factual result/metric where supported
- GitHub/live link only if actually present
- no fabricated visual

Projects should have different visual metaphors, but remain within one design system.

---

# 9. PROJECT-SPECIFIC VISUAL LANGUAGE

## 01 — Cyber Crime Analysis System

Visual metaphor:
DATA

Use lightweight SVG/CSS visual treatment:
- dots
- lines
- restrained chart-like geometry
- data points
- subtle axis/coordinate structures

Do not fabricate an actual dashboard screenshot.

Resume-supported facts:
- 5+ years of cybercrime data
- data cleaning/analysis
- Logistic Regression
- Random Forest
- XGBoost
- 10+ dashboard visualizations
- 87% model accuracy

Use these facts only as supported.

---

## 02 — Smart Task Manager

Visual metaphor:
SYSTEM MONITORING

Use a lightweight system-monitor-inspired visualization:
- CPU line
- memory indicator
- anomaly marker
- forecasting line

Do not pretend it is a screenshot of the actual product unless an actual screenshot is provided.

Resume-supported facts:
- real-time task/system monitoring
- ML-based anomaly detection
- CPU forecasting
- 96% precision
- approximately 1-second latency

---

## 03 — Votix

Visual metaphor:
VALIDATION / NETWORK

Use restrained connected nodes or block-like structures.

Do not use cliché crypto neon graphics.

Resume-supported facts:
- blockchain voting platform
- Solidity/Web3
- 200+ test votes
- relevant stack from resume

---

## 04 — AI-Driven Institutional Inspection System

Visual metaphor:
DOCUMENT → VISION → ANALYSIS

Use a lightweight visual sequence:
document/input
→ image recognition
→ NLP/analysis
→ assessment

Resume-supported facts:
- image recognition
- NLP
- TensorFlow
- OpenCV
- Flask
- Smart India Hackathon finalist
- 65% reduction in verification time
- 80% reduction in turnaround time

Do not fabricate the interface.

---

# 10. PROJECT INTERACTION

Do NOT use generic:
"fade in → fade out → next card"

Do NOT turn the website into a slideshow.

Instead use:
- expansion
- rearrangement
- horizontal tracking
- clipping/reveal
- layered movement
- subtle translation
- assembly/disassembly
- typography shifting
- visual state changes

Example:
A project starts compact:
"01 / Cyber Crime Analysis System"

As the user continues scrolling, the composition expands into:
- title
- visual metaphor
- metrics
- description
- technology stack

The transition should feel like the project is being revealed, not like a slide is changing.

Keep transitions fast and purposeful.

---

# 11. PROJECT INDEX

On desktop, provide a subtle project index:
01 Cyber Crime
02 Smart Task Manager
03 Votix
04 Institutional Inspection

The active project should have a restrained indicator.

This is NOT a slide navigation system.

Clicking an item should navigate smoothly to its position/state.

On mobile, simplify to:
01 / 04
Project Name

Do not make the user operate a complicated carousel.

---

# 12. PROJECT DEPTH EFFECT

Where appropriate, use multiple visual layers:
- title
- description
- visual
- metadata
- metrics

On pointer movement, layers may shift by a few pixels at different rates.

Example:
title +2px
description -2px
visual +4px
metadata -3px

Keep movement extremely subtle.

No large mouse-following effects.

No custom cursor.

No WebGL.

---

# 13. A FEW NUMBERS

Use only factual numbers supported by the resume.

Possible figures include:
- 9.42/10 CGPA
- 87% model accuracy
- 96% anomaly-detection precision
- 65% verification-time reduction
- 80% turnaround-time reduction
- 480,000+ participants for the Flipkart Grid 6.0 Tech Quiz context
- 200+ test votes
- 10+ dashboard visualizations
- 10+ university events

Do not invent additional metrics.

Design:
large typography
small explanatory labels
lots of whitespace

Do not make this a flashy animated counter section.

Prefer numbers appearing through spatial composition rather than counting from 0.

---

# 14. TOOLS I'VE USED

Do not use skill bars or percentages.

Do not imply proficiency levels.

Group resume-supported technologies.

Possible categories:

LANGUAGES
- Python
- C++
- Java
- C

WEB / UI
- React.js
- HTML
- CSS
- Tailwind CSS

BACKEND / FRAMEWORKS
- Node.js
- Express.js
- Flask
- Solidity

AI / ML
- TensorFlow
- Keras
- OpenCV
- NLTK

DATA / DATABASES
- PostgreSQL
- MongoDB
- SQL

METHODOLOGIES / DEVELOPMENT
- REST APIs
- SDLC
- Agile Development

Only include items actually present in the resume.

The exact resume wording takes precedence over this draft list.

---

# 15. MILESTONES

Use a restrained chronological/editorial layout.

Resume-supported achievements:
- Smart India Hackathon 2024 finalist / top 2.4% nationwide
- Google Girl Hackathon 2025 coding-round qualification
- Flipkart Grid 7.0 coding-round qualification
- Amazon HackOn 5 coding-round qualification
- Flipkart Grid 6.0 Tech Quiz — 480,000+ participants

Do not make these into trophy walls.

Do not add medals, badges, rankings, or icons that imply something not in the resume.

Interaction idea:
- year/event selection
- subtle expansion
- contextual details
- no autoplay carousel

---

# 16. ABOUT

Keep this separate from "A Little Context."

"A Little Context" = factual snapshot.

"About" = short human explanation.

Keep it concise.

Do not invent personality traits.

Possible source-backed themes:
- Computer Science & Engineering student
- software development
- AI/ML
- data-driven systems
- project/hackathon work
- practical experimentation

Write naturally.

Avoid:
"I am a passionate..."
"I am highly motivated..."
"I thrive in..."
"I am a results-driven..."

---

# 17. EXPERIENCE

Resume-supported experience:
Management Intern
2023–Present

Resume-supported responsibilities/impact:
- coordinated 10+ university events
- vendor operations
- engagement-related responsibilities as stated in resume

Keep this section compact.

Do not inflate it into corporate work experience.

If exact wording from resume differs, preserve the resume's wording.

---

# 18. EDUCATION

Primary:
B.Tech — Computer Science & Engineering
Graphic Era Hill University, Uttarakhand
2023–2027
CGPA: 9.42/10

Secondary education may be included in a compact secondary line if present in the resume.

Relevant coursework can be shown if supported:
- AI/ML
- Algorithms
- Operating Systems
- DBMS
- Computer Networks

Do not make Education visually compete with Projects.

---

# 19. CONTACT / CLOSING

Use a quiet closing.

Possible structure:

IF YOU'D LIKE TO TALK

[Email]

LinkedIn ↗
GitHub ↗
Resume ↗

Do not add a contact form unless genuinely useful.

Do not invent contact information.

Use the exact email, GitHub and LinkedIn links from the resume.

---

# 20. FOOTER

Minimal:
- Akshita Chaudhary
- GitHub
- LinkedIn
- Email
- copyright/year if appropriate

No clutter.

---

# 21. TYPOGRAPHY

Use a clean system-first sans-serif stack.

Preferred:
- Inter / Geist if already available efficiently
- otherwise system sans-serif

Do not load several font families.

Suggested hierarchy:
Hero: clamp(3rem, 7vw, 7rem)
Section heading: clamp(2rem, 4vw, 4rem)
Body: 16–18px desktop
Body: 15–17px mobile

Keep paragraph widths constrained.

Use generous line height for body text.

Avoid excessive uppercase text.

---

# 22. SPACING

Use design tokens.

Suggested:
4
8
12
16
24
32
48
64
80
96
120
160

Desktop major sections:
120–160px

Tablet:
96–120px

Mobile:
72–100px

Do not blindly apply the same spacing everywhere.

Project compositions may use larger spacing.

---

# 23. LAYOUT

Maximum overall content width:
approximately 1200–1400px.

Some editorial text blocks:
approximately 650–900px.

Use:
- CSS Grid
- Flexbox
- clamp()
- minmax()
- CSS variables

Avoid unnecessary nested containers.

---

# 24. RESPONSIVE DESIGN

Breakpoints should be chosen based on content rather than arbitrary device names.

Desktop:
- full project visualizations
- side project index
- larger typography
- layered compositions

Tablet:
- simplify layered layouts
- reduce typography
- reduce whitespace
- keep project identity

Mobile:
- single-column
- no horizontal page overflow
- no complex pointer interactions
- project visuals simplified
- project index simplified
- touch targets at least comfortably tappable
- no hover-dependent content
- menu becomes accessible mobile navigation

Do not merely shrink desktop.

Recompose where necessary.

---

# 25. ANIMATION PHILOSOPHY

NO generic fade-in/fade-out system.

Avoid:
- every section fading upward
- every card animating on scroll
- repeated reveal animations
- excessive parallax

Preferred interaction vocabulary:
1. Expand
2. Rearrange
3. Track
4. Split
5. Assemble
6. Shift

Use a small number of repeatable motion patterns.

Animation should explain hierarchy or interaction.

It should never exist only because "portfolio sites need animation."

---

# 26. PERFORMANCE

This is a major requirement.

Target:
- fast first render
- minimal JavaScript
- minimal bundle
- no unnecessary dependencies
- no huge assets
- no blocking animations
- no heavy animation engine
- no WebGL
- no Three.js
- no canvas unless genuinely necessary
- no video background

Prefer:
- CSS transforms
- opacity only when useful
- SVG
- IntersectionObserver
- requestAnimationFrame only when necessary
- lazy loading
- code splitting only where useful
- optimized assets

Do not animate:
top
left
width
height

when transform can be used.

Prefer:
transform: translate3d(...)
scale(...)
rotate(...)

Keep expensive effects limited.

Avoid excessive:
filter: blur()
backdrop-filter
large box-shadow
huge SVGs

---

# 27. ACCESSIBILITY

Use semantic HTML.

Required:
- one logical h1
- proper heading hierarchy
- nav landmarks
- main
- sections
- footer
- accessible buttons
- descriptive links
- visible focus state
- keyboard navigation
- accessible mobile menu
- adequate contrast
- alt text for meaningful images
- decorative graphics marked appropriately

Do not make content dependent on hover.

Respect:
prefers-reduced-motion

For reduced motion:
- remove/reduce spatial transitions
- remove pointer parallax
- keep content fully available
- preserve usability

---

# 28. TECHNICAL ARCHITECTURE

Preferred:
React + Vite unless the existing project dictates otherwise.

Suggested:

src/
  components/
    Navbar
    Hero
    Context
    Work
    Project
    ProjectVisual
    Metrics
    Tools
    Milestones
    About
    Experience
    Education
    Contact
    Footer

  data/
    portfolio.js

  styles/
    tokens.css
    globals.css
    components.css

Keep content data-driven.

Project data should be an array/object structure rather than duplicated JSX.

Example conceptual shape:

projects = [
  {
    number,
    title,
    description,
    problem,
    approach,
    technologies,
    metrics,
    links,
    visualType
  }
]

Do not create duplicate project markup.

---

# 29. DESIGN TOKENS

Create CSS variables for:
- background
- surface
- text-primary
- text-secondary
- border
- accent
- spacing
- radius
- container widths
- typography
- transition durations

Use restrained corner radii.

Do not make every element excessively rounded.

---

# 30. INTERACTION DETAILS

Navbar:
- subtle sticky behavior
- no huge blur layer
- menu accessible

Project:
- pointer response only on desktop
- keyboard-accessible project navigation
- no hover-only content

Buttons:
- clear hover
- clear focus
- small movement
- no exaggerated scaling

Links:
- subtle underline/arrow interaction

Scroll:
- smooth scrolling only where appropriate
- do not hijack natural scrolling
- do not implement a custom scroll engine

IMPORTANT:
Do not replace browser scrolling with a heavy virtual/custom scroll library unless there is an overwhelming reason.

---

# 31. NO FABRICATED VISUALS

If project screenshots are not provided:
- do not fabricate product screenshots
- do not use AI-generated fake dashboards
- do not imply an abstract visual is the real product

Instead:
- create abstract SVG/CSS visual metaphors
- label them appropriately if needed
- keep them visually tied to the project's actual concept

---

# 32. RESUME / LINKS

Use only links actually available in the resume.

If a GitHub link exists:
show it.

If a LinkedIn link exists:
show it.

If a live demo is not present:
do not create one.

Resume download should point to the supplied resume asset.

Do not invent URLs.

---

# 33. WRITING STYLE

Tone:
- modest
- direct
- specific
- natural
- concise
- slightly personal
- professional

Avoid:
- corporate jargon
- hype
- exaggerated adjectives
- generic AI portfolio copy

Bad:
"An innovative AI-powered solution revolutionizing institutional inspection."

Better:
"An AI-based inspection system using image recognition and NLP to help evaluate institutional conditions."

Bad:
"Passionate full-stack developer with a proven track record..."

Better:
"Computer Science student interested in software development, AI/ML, and practical systems."

Only use claims actually supported by the resume.

---

# 34. WHAT NOT TO BUILD

Do NOT build:
- dark mode
- theme toggle
- slideshow
- carousel-heavy portfolio
- terminal intro
- 3D globe
- particle background
- animated code rain
- giant React logo
- floating technology logos
- neon cyberpunk UI
- fake browser mockups
- fake product screenshots
- testimonials
- blog unless explicitly requested
- services section
- certifications section
- skill percentages
- fake statistics
- fake clients
- fake users
- fake deployment metrics
- fake awards
- fake job experience

---

# 35. RECRUITER EXPERIENCE

A recruiter should understand within approximately 10 seconds:
1. who Akshita is
2. what she studies
3. what she builds/interests her
4. where her strongest work is
5. how to view the resume
6. how to contact/connect

Projects should be discoverable immediately.

Do not hide important information behind elaborate animations.

Animations enhance information; they must never obstruct it.

---

# 36. MOBILE EXPERIENCE

Treat mobile as a first-class design.

On mobile:
- no hover-dependent interaction
- no horizontal overflow
- no tiny text
- no dense project visuals
- no giant fixed elements
- no awkward sticky elements
- no huge animation sequences

Project visuals should become simpler but remain recognizable.

The experience should still feel designed, not like a collapsed desktop version.

---

# 37. QA CHECKLIST

Before considering the project complete, test:

## Content
[ ] All content comes from resume
[ ] No invented achievements
[ ] No invented metrics
[ ] No Certifications section
[ ] Correct links
[ ] Correct contact details
[ ] Correct dates
[ ] Correct CGPA
[ ] Correct project names

## Design
[ ] Light theme only
[ ] Professional appearance
[ ] Distinctive interaction
[ ] Not a slideshow
[ ] No generic fade-everything animation
[ ] Strong project hierarchy
[ ] Consistent spacing
[ ] Typography is readable
[ ] No visual clutter

## Responsive
[ ] Large desktop
[ ] Desktop
[ ] Laptop
[ ] Tablet
[ ] Mobile
[ ] No horizontal overflow
[ ] Touch targets are comfortable
[ ] Mobile menu works

## Accessibility
[ ] Keyboard navigation
[ ] Visible focus
[ ] Semantic HTML
[ ] Logical heading hierarchy
[ ] Accessible buttons
[ ] Accessible menu
[ ] Sufficient contrast
[ ] Reduced motion support

## Performance
[ ] No unnecessary heavy libraries
[ ] No Three.js
[ ] No WebGL
[ ] No heavy animation framework
[ ] Images optimized
[ ] Lazy loading where appropriate
[ ] Animations use transform where possible
[ ] No long loading screen
[ ] No blocking visual intro
[ ] Fast initial render

## UX
[ ] Recruiter can find Projects quickly
[ ] Resume is easy to access
[ ] GitHub is easy to access
[ ] LinkedIn is easy to access
[ ] Contact is obvious
[ ] Navigation remains understandable
[ ] Animations never block content

---

# 38. FINAL DESIGN REVIEW

Review the finished website from five perspectives.

## Recruiter
Can I understand the candidate quickly?

## UI/UX designer
Does the composition feel intentional?

## Frontend developer
Is the implementation clean and maintainable?

## Mobile user
Does it work naturally on a phone?

## Performance reviewer
Is anything unnecessarily expensive?

If any answer is no, fix it before completion.

---

# 39. FINAL QUALITY BAR

The finished site should feel like:

"Someone carefully designed a personal website around this particular person's work."

It should NOT feel like:

"Someone selected a developer portfolio template and replaced the text."

The site should be:
- quiet
- professional
- technically credible
- visually memorable
- lightweight
- easy to navigate
- honest

The design should communicate confidence through restraint.

---

# 40. IMPLEMENTATION ORDER

Follow this sequence:

1. Inspect existing repository/project structure.
2. Establish content data from the resume.
3. Establish design tokens.
4. Build semantic page structure.
5. Build Hero and navigation.
6. Build Selected Work.
7. Build project-specific lightweight visual metaphors.
8. Build Tools.
9. Build Milestones.
10. Build About.
11. Build Experience.
12. Build Education.
13. Build Contact/Footer.
14. Add interaction.
15. Add responsive behavior.
16. Add accessibility.
17. Optimize performance.
18. Run full QA.
19. Fix visual inconsistencies.
20. Final review against this specification.

Do not start by adding animations.

First make the static design excellent.

Then add interaction selectively.

---

# 41. IMPORTANT DEVIN BEHAVIOR

Do not make assumptions merely to complete the website.

If a fact is missing:
- omit it
- or use neutral wording

Do not invent.

If a visual is missing:
- use an abstract visual metaphor
- do not fabricate a screenshot

If an interaction hurts usability:
- simplify it

If an animation hurts performance:
- remove it

If a design idea conflicts with recruiter readability:
- prioritize readability

If visual novelty conflicts with maintainability:
- choose the simpler implementation.

The goal is not to demonstrate how many technologies can be used.

The goal is to build the best possible portfolio for Akshita with the minimum necessary complexity.

---

# 42. DEFINITION OF DONE

The portfolio is complete only when:

- it is light-theme only
- all resume content is accurate
- there is no Certifications section
- projects are the main visual focus
- the site does not feel like a slideshow
- transitions are not generic fade-in/fade-out
- interactions feel intentional
- visuals are lightweight
- page remains fast
- mobile experience is excellent
- accessibility is addressed
- links work
- resume works
- no horizontal overflow exists
- no fabricated information exists
- code is reusable and maintainable
- the result feels distinctive but professional

END OF MASTER SPECIFICATION
