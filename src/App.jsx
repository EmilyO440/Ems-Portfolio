import "./index.css";

import hibiscus from "./assets/hibiscus.JPG";
import amsterdamRoof from "./assets/amsterdam-roof.jpg";
import motions from "./assets/motions.png";
import redLightDistrict from "./assets/red-light-district.png";
import glasgowNight from "./assets/glasgow-rainy-night.JPEG";
import pinkAmsterdam from "./assets/pink-city-amsterdam.jpg";
import cambridgeRiver from "./assets/cambridge-river.JPEG";
import moersWalk from "./assets/moers-city-walk.jpg";
import moonlight from "./assets/moonlight.JPEG";
import farmperspective from "./assets/farm-perspective.JPEG";
import canalsandboats from "./assets/canals-and-boats.JPEG";
import dusseldorf from "./assets/dusseldorf-night.JPEG";
import busylife from "./assets/busy-life.JPEG";

function App() {
  return (
    <div>

      <nav className="nav">
        <h2 className="logo">Ems Portfolio</h2>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#creative">Photography</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <img src={hibiscus} className="hero-img" />
        <div className="hero-text">
          <h1 className="main-name">Emily O'Brien</h1>
          <p className="role">Frontend Developer · Digital Creative · Based in Düsseldorf, Germany</p>
          <p>
            I build clean, functional websites and bring something most developers don't — a background spanning legal operations, client systems, AI evaluation, genealogical research, and genuine creative work in photography and design.
          </p>
          <p>
            Self-taught and certificate-trained, I've spent years learning by building. My work lives at the intersection of technical precision and visual instinct. Currently based in Düsseldorf and actively seeking opportunities in the German tech sector.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>konfetti Workshop Discovery</h3>
          <p>
            A workshop booking and discovery platform built with Vue 3 and Vite.
            Features live search, category filtering, a booking modal, and
            confirmation flow — inspired by konfetti's real-world event platform.
          </p>
          <div className="project-links">
            <a href="https://konfetti-workshops.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
            <a href="https://github.com/EmilyO440/konfetti-workshops" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>

        <div className="card">
          <h3>World Social</h3>
          <p>
            An interactive dashboard visualizing social media engagement trends
            across platforms. Toggle between Instagram, TikTok, YouTube, and
            LinkedIn to explore how different content formats perform in 2026.
            Built with React, Vite, and Recharts.
          </p>
          <div className="project-links">
            <a href="https://world-social.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
            <a href="https://github.com/EmilyO440/world-social" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>

        <div className="card">
          <h3>TaskFlow</h3>
          <p>
            A responsive task management app featuring priority levels,
            deadlines, and real-time progress tracking.
          </p>
          <div className="project-links">
            <a href="https://my-taskflow-manager-app.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
            <a href="https://github.com/EmilyO440/TaskFlow-App" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>

        <div className="card">
          <h3>Quiet Observations</h3>
          <p>
            An immersive, narrative-driven web experience blending creative writing
            with visual storytelling, focusing on perception, stillness, and atmosphere.
          </p>
          <div className="project-links">
            <a href="https://quiet-observations.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
            <a href="https://github.com/EmilyO440/Quiet-Observations" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>

        <div className="card">
          <h3>Personal Portfolio</h3>
          <p>
            Built with React and custom CSS. Focused on layout,
            responsiveness, and clean structure.
          </p>
          <div className="project-links">
            <a href="https://ems-portfolio-88dev.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
            <a href="https://github.com/EmilyO440/Ems-Portfolio" target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </div>

        <div className="card">
          <h3>AI Trends — In Development</h3>
          <p>
            An interactive data visualization exploring the growth of AI adoption
            across industries over the past decade. Built with React and Recharts.
          </p>
        </div>

      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a frontend developer and digital creative currently based in Düsseldorf, Germany, actively seeking opportunities in the German tech sector. I build interfaces that feel intentional — technically precise and visually considered.
        </p>
        <p>
          My background is broader than most developers: I've worked in legal operations, insurance client management, AI content evaluation, and I have 5+ years of independent genealogical research experience tracing family histories across U.S. records using Ancestry.com, FamilySearch, DNA analysis, and archival sources. That research instinct — finding patterns, following threads, documenting findings clearly — carries directly into how I approach development.
        </p>
        <p>
          I've worked in fast-paced, customer-facing environments where communication, adaptability, and problem solving were essential. I prioritize clarity, usability, and real-world practicality in everything I build.
        </p>
        <p>
          I'm currently enrolled in intensive German language courses in Düsseldorf (A2 level, working toward B1/B2) and am committed to building a long-term career in Germany. I'm especially interested in remote and international opportunities where development, design, and user experience overlap.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">

          <div className="skill-box">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React, Vue 3, Vite, TypeScript, Bootstrap</p>
          </div>

          <div className="skill-box">
            <h3>Design & UI</h3>
            <p>Responsive Design, Layout, Visual Hierarchy, Figma, Adobe Creative Suite, Canva</p>
          </div>

          <div className="skill-box">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, Recharts, Node.js, RESTful APIs</p>
          </div>

          <div className="skill-box">
            <h3>AI & Workflow</h3>
            <p>AI Prompt Engineering, AI-Assisted Development, GitHub Copilot, Claude API, Content Evaluation</p>
          </div>

          <div className="skill-box">
            <h3>Research</h3>
            <p>Genealogical Research, Ancestry.com, FamilySearch, DNA Analysis, Archival Records, Documentation</p>
          </div>

          <div className="skill-box">
            <h3>Data & Visualization</h3>
            <p>Data Visualization, Interactive Dashboards, Recharts, Chart Design</p>
          </div>

          <div className="skill-box">
            <h3>Languages</h3>
            <p>English (native) · German (A2, actively studying — intensive courses in Düsseldorf)</p>
          </div>

          <div className="skill-box">
            <h3>Creative</h3>
            <p>Photography, Visual Thinking, UI/UX Design, Storytelling</p>
          </div>

        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>

         <div className="card">
          <h3>Creative Work & Visual Storytelling</h3>
          <p>
            Documentary and travel photography across Europe — Germany, Netherlands, UK,
            and beyond. Strong compositional eye applied directly to UI design and layout decisions.
          </p>
        </div>

        <div className="card">
          <h3>Web Development & UI Design</h3>
          <p>
            Designed and built responsive web applications using React, Vue 3, HTML, CSS,
            JavaScript, and Vite. Projects include a workshop discovery platform, an
            interactive data dashboard, a task management app, and a narrative-driven
            storytelling site.
          </p>
        </div>

        <div className="card">
          <h3>Independent Genealogical Researcher</h3>
          <p>2019 – Present</p>
          <p>
            Conducted in-depth genealogical research for personal clients, family members,
            and independent projects with a focus on U.S. Mid-South and Southern states.
            Utilized Ancestry.com, FamilySearch, census records, vital records, military
            records, and DNA analysis. Produced detailed research logs, source citations,
            and narrative reports aligned with genealogical proof standards.
          </p>
        </div>

        <div className="card">
          <h3>Client Services & Systems Coordinator — State Farm</h3>
          <p>2023 – 2025</p>
          <p>
            Managed 400+ client records within CRM platforms. Investigated and resolved
            30–40 client inquiries weekly including billing discrepancies and policy
            modifications, ensuring data consistency and streamlined operations.
          </p>
        </div>

        <div className="card">
          <h3>Operations & Administrative Coordinator — Law Office of MJ Chernin</h3>
          <p>2021 – 2023</p>
          <p>
            Maintained and organized 100+ active legal case files ensuring documentation
            accuracy and compliance. Coordinated scheduling, case preparation, and
            research support across daily office activities.
          </p>
        </div>


      </section>

      <section id="creative" className="section">
        <h2>Photography</h2>
        <div className="gallery">
          <img src={amsterdamRoof} />
          <img src={motions} />
          <img src={redLightDistrict} />
          <img src={glasgowNight} />
          <img src={pinkAmsterdam} />
          <img src={cambridgeRiver} />
          <img src={moersWalk} />
          <img src={moonlight} />
          <img src={farmperspective} />
          <img src={canalsandboats} />
          <img src={dusseldorf} />
          <img src={busylife} />
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/emily-o-943809402/" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/emily-o-943809402</a></p>
        <p>Email: emilyobrien64728@yahoo.com OR emilyobrien64728@gmail.com</p>
        <p>GitHub: <a href="https://github.com/EmilyO440" target="_blank" rel="noopener noreferrer">github.com/EmilyO440</a></p>
        <p>Portfolio: <a href="https://ems-portfolio-88dev.netlify.app/" target="_blank" rel="noopener noreferrer">ems-portfolio-88dev.netlify.app</a></p>
        <p>Based in Düsseldorf, Germany · Open to remote and on-site opportunities</p>
      </section>

    </div>
  );
}

export default App;