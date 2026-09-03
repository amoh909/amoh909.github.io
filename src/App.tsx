function App() {
  return (
    <>
      <header className="navbar">
        <a href="/" className="logo">
          Ali Mohsen
        </a>

        <nav>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="hero-label">SOFTWARE & AI ENGINEER</p>

          <h1>Ali Mohsen</h1>

          <p className="hero-description">
            Computer Science graduate building scalable software pipelines and
            machine learning architectures. Driven by a deep interest in pure
            mathematics and high-performance computing.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button primary">
              View Projects
            </a>

            <a
              href="/Ali-Mohsen-CV.pdf"
              className="button secondary"
              target="_blank"
              rel="noopener noreferer"
            >
              Download CV
            </a>
          </div>

          <div className="hero-links">
            <a
              href="https://github.com/amoh909"
              target="_blank"
              rel="noopener noreferer"
            >
              GitHub ↗
            </a>

            <a
              href="http://linkedin.com/in/alimohsen5"
              target="_blank"
              rel="noopener noreferer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:ali2moh.04@gmail.com">Email ↗</a>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="section-label">SELECTED WORK</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <div>
                <p className="project-number">01</p>

                <h3>CUDA Sparse Triangular Solver</h3>

                <p>
                  GPU-accelerated sparse triangular system solving using CUDA,
                  with a focus on parallel algorithms and performance
                  optimization.
                </p>
              </div>

              <div className="project-footer">
                <span>C++ · CUDA · GPU Computing</span>
                <a href="https://drive.google.com/file/d/1L9WFoNtrKNnxXI4ZBROpEWr4vSroxkT1/view?usp=drive_link">
                  Report ↗
                </a>
              </div>
            </article>

            <article className="project-card">
              <div>
                <p className="project-number">02</p>

                <h3>Brain Tumor Segmentation</h3>

                <p>
                  Deep learning project using a U-Net architecture to segment
                  brain tumors from medical imaging data.
                </p>
              </div>

              <div className="project-footer">
                <span>Python · PyTorch · U-Net</span>
                <a href="https://github.com/amoh909/Brain-Tumor-Segmentation-LGG">
                  GitHub ↗
                </a>
              </div>
            </article>

            <article className="project-card">
              <div>
                <p className="project-number">03</p>
                <h3>MENA EconLens</h3>
                <p>
                  Full-stack economic intelligence platform featuring World Bank
                  data ingestion, normalized database schemas, and linear
                  regression forecasting panels.
                </p>
              </div>
              <div className="project-footer">
                <span>React · Django · PostgreSQL</span>
                <a href="https://github.com/amoh909/MENA-EconLens">GitHub ↗</a>
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="section-label">EXPERIENCE</p>
            <h2>Where I've Worked</h2>
          </div>

          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-header">
                <div>
                  <h3>Frontend Developer</h3>
                  <p className="experience-company">
                    Ciatek IT & Software Solutions
                  </p>
                </div>

                <span className="experience-date">Jun 2025 - Aug 2025</span>
              </div>

              <p className="experience-description">
                Built responsive web interfaces and contributed to frontend
                development using React, TypeScript, Tailwind CSS, and
                shadcn/ui.
              </p>

              <div className="experience-tech">
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>shadcn/ui</span>
              </div>
            </article>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading">
            <p className="section-label">EDUCATION</p>
            <h2>Education</h2>
          </div>

          <div className="education-item">
            <div className="education-header">
              <div>
                <h3>American University of Beirut</h3>
                <p>B.S. in Computer Science · Minor in Mathematics</p>
              </div>

              <span>2023-2026</span>
            </div>

            <div className="education-details">
              <span>Beirut, Lebanon</span>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="section-label">SKILLS</p>
            <h2>Technical Skills</h2>
          </div>

          <div className="skills-list">
            <div className="skill-group">
              <h3>Languages</h3>
              <p>Python · C++ · C · Java · JavaScript · TypeScript · SQL</p>
            </div>

            <div className="skill-group">
              <h3>Frameworks & Libraries</h3>
              <p>
                React · Node.js · Spring Boot · Django · PyTorch · TensorFlow ·
                Scikit-learn
              </p>
            </div>

            <div className="skill-group">
              <h3>Systems & Computing</h3>
              <p>CUDA · GPU Computing · Parallel Computing · Linux</p>
            </div>

            <div className="skill-group">
              <h3>Tools & Cloud</h3>
              <p>Git · GitHub · AWS · Docker</p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="section-label">ABOUT ME</p>
            <h2>A little about me</h2>
          </div>

          <div className="about-content">
            <p>
              I'm naturally curious and tend to find myself learning about
              things simply because I find them interesting. In computer
              science, I'm particularly drawn to algorithms, complexity theory,
              theory of computation, and GPU computing. I'm also deeply
              interested in mathematics, especially abstract algebra and number
              theory. I particularly enjoyed working with CUDA and exploring the
              challenges of making computations more efficient.
            </p>

            <p>
              Outside of computer science and mathematics, I'm very interested
              in history and Arabic, and I enjoy reading about sociology,
              philosophy, and political philosophy. I'm usually reading or
              learning about something new, often completely unrelated to what
              I'm working on.
            </p>

            <p>
              In my free time, I enjoy solving puzzles, reading/writing Arabic
              poetry, and exploring Arabic textual scholarship and book editing
              "التحقيق". I've also recently developed a strong interest in MMA
              and hope to try it myself soon.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
