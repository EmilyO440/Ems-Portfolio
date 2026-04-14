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
            <p className="role">Frontend Developer & Digital Creative</p>

            <p>
              I build clean, functional websites and I bring something most developers don't — a background that spans legal operations, client systems, AI evaluation, and genuine creative work in photography and design.
            </p>

            <p>
                Self-taught and certificate-trained, I've spent years learning by building. My work lives at the intersection of technical precision and visual instinct — and I work best when I own something completely.
            </p>
          </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>Personal Portfolio</h3>
          <p>
            Built with React and custom CSS. Focused on layout,
            responsiveness, and clean structure.
          </p>
          <div className="project-links">
            <a href="https://ems-portfolio-88dev.netlify.app/" target="_blank" rel="noopener noreferrer">
              Live
            </a>
            <a href="https://github.com/EmilyO440/Ems-Portfolio" target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
        </div>

        <div className="card">
          <h3>TaskFlow</h3>
          <p>
            A responsive task management app featuring priority levels,
            deadlines, and real-time progress tracking.
          </p>
          <div className="project-links">
            <a href="https://my-taskflow-manager-app.netlify.app/" target="_blank" rel="noopener noreferrer">
              Live
            </a>
            <a href="https://github.com/EmilyO440/TaskFlow-App" target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Quiet Observations</h3>
          <p>
            An immersive, narrative-driven web experience that blends creative writing
            with visual storytelling, focusing on perception, stillness, and atmosphere.
          </p>
          <div className="project-links">
            <a href="https://quiet-observations.netlify.app/" target="_blank" rel="noopener noreferrer">
              Live
            </a>
            <a href="https://github.com/EmilyO440/Quiet-Observations" target="_blank" rel="noopener noreferrer">
              Code
            </a>
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
            <a href="https://world-social.netlify.app/" target="_blank" rel="noopener noreferrer">
              Live
            </a>
            <a href="https://github.com/EmilyO440/world-social" target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
        </div>

      </section>

      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I'm a frontend developer and digital creative with a strong focus on
          user experience, visual design, and building interfaces that feel intentional.
        </p>

        <p>
          My background combines technical work with creative disciplines like photography
          and design, which shapes how I approach building. I don't just focus on
          functionality - I pay attention to how something feels, how it flows, and how
          users naturally move through it.
        </p>

        <p>
          I've worked in fast-paced, customer-facing environments where communication,
          adaptability, and problem solving were essential. That experience carries into
          my development work, where I prioritize clarity, usability, and real-world practicality.
        </p>

        <p>
          I'm currently focused on building projects that reflect both technical ability
          and perspective - from structured applications to more immersive, narrative-driven experiences.
        </p>

        <p>
          I'm especially interested in opportunities where development, design, and user
          experience overlap, and where I can continue growing as both a developer and a creative.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-box">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React, Vite</p>
          </div>

          <div className="skill-box">
            <h3>Design & UI</h3>
            <p>Responsive Design, Layout, Visual Hierarchy, Application UI Design</p>
          </div>

          <div className="skill-box">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, Adobe, Slack, Recharts</p>
          </div>

          <div className="skill-box">
            <h3>Data & Visualization</h3>
            <p>Data Visualization, Interactive Dashboards, Recharts, Chart Design</p>
          </div>

          <div className="skill-box">
            <h3>Strengths</h3>
            <p>Communication, Organization, Problem Solving, Attention to Detail</p>
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
          <h3>AI Rater & Data Annotator — TELUS Digital</h3>
          <p>2026 – Present</p>
          <p>
            Assessing digital content and search results for quality, relevance, and
            user value. Contributing to AI model training through clear content
            evaluations and structured justifications.
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

        <div className="card">
          <h3>Web Development & UI Design</h3>
          <p>
            Designed and built responsive web applications using React, HTML, CSS,
            JavaScript, and Vite. Projects include an interactive data dashboard,
            a task management application, and a narrative-driven storytelling site.
          </p>
        </div>

        <div className="card">
          <h3>Creative Work & Visual Storytelling</h3>
          <p>
            Background in photography and writing with a strong focus on observation,
            composition, and capturing subtle details. This perspective directly
            influences my approach to design and user interfaces.
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
        <p>LinkedIn: <a href="https://www.linkedin.com/in/emily-o-943809402/" target="_blank" rel="neoopener noreferrer">www.linkedin.com/in/emily-o-943809402</a></p>
        <p>Email: emilyobrien64728@yahoo.com</p>
        <p>GitHub: <a href="https://github.com/EmilyO440" target="_blank" rel="noopener noreferrer">github.com/EmilyO440</a></p>
        <p>Portfolio: <a href="https://ems-portfolio-88dev.netlify.app/" target="_blank" rel="noopener noreferrer">emily-obrien-dev-portfolio.netlify.app</a></p>
        <p>Open to remote contract, and international opportunities</p>
      </section>

    </div>
  );
}

export default App;
