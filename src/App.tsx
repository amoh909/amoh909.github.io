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
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="hero-label">SOFTWARE & AI ENGINEER</p>

          <h1>Ali Mohsen</h1>

          <p className="hero-description">
            Computer Science graduate focused on software engineering, machine
            learning, and high-performance computing. Building systems with
            Python, C++, CUDA, and modern web technologies.
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
                <p className="project-category">HIGH-PERFORMANCE COMPUTING</p>
                <p className="project-metric">UP TO 577× SPEEDUP</p>
                <h3>Sparse Lower Triangular Matrix Solver (CUDA)</h3>
                <p>
                  GPU-accelerated sparse triangular system solver using CUDA,
                  exploring parallel algorithms and performance optimization for
                  sparse linear algebra.
                </p>
              </div>

              <div className="project-footer">
                <span>C++ · CUDA · GPU Computing</span>
                <a
                  href="https://drive.google.com/file/d/1L9WFoNtrKNnxXI4ZBROpEWr4vSroxkT1/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>
            </article>

            <article className="project-card">
              <div>
                <p className="project-number">02</p>
                <p className="project-category">DEEP LEARNING</p>
                <h3>Brain Tumor Segmentation (LGG)</h3>
                <p>
                  Deep learning project using a U-Net architecture to segment
                  lower-grade glioma tumors from brain MRI images.
                </p>
              </div>

              <div className="project-footer">
                <span>Python · PyTorch · U-Net</span>
                <a
                  href="https://github.com/amoh909/Brain-Tumor-Segmentation-LGG"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>
            </article>

            <article className="project-card">
              <div>
                <p className="project-number">03</p>
                <p className="project-category">FULL-STACK / DATA</p>
                <h3>MENA EconLens</h3>
                <p>
                  Full-stack economic intelligence dashboard for exploring and
                  comparing macroeconomic indicators across MENA countries using
                  World Bank data.
                </p>
              </div>

              <div className="project-footer">
                <span>Python · Django · React · TypeScript · PostgreSQL</span>
                <a
                  href="https://github.com/amoh909/MENA-EconLens"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>
            </article>

            <article className="project-card">
              <div>
                <p className="project-number">04</p>
                <p className="project-category">MACHINE LEARNING</p>
                <h3>Healthcare Provider Fraud Detection</h3>
                <p>
                  End-to-end machine learning system for detecting potentially
                  fraudulent healthcare providers from Medicare claims data.
                </p>
              </div>

              <div className="project-footer">
                <span>Python · Scikit-learn · XGBoost</span>
                <a
                  href="https://github.com/amoh909/healthcare-provider-fraud-detection"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <p className="section-label">EXPERIENCE</p>
            <h2>Where I've Worked</h2>
          </div>

          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-header">
                <div>
                  <h3>Software Engineering Intern</h3>
                  <p className="experience-company">Quantum Trading Company</p>
                </div>

                <span className="experience-date">Aug 2026 - Present</span>
              </div>

              <ul
                className="experience-description"
                style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
              >
                <li>
                  Developing custom Odoo modules in Python to automate the
                  ingestion of supplier product data into inventory records for
                  publication on the company's website.
                </li>
                <li>
                  Implementing data extraction, transformation, validation, and
                  database integration using Python, PostgreSQL, and XML within
                  Odoo.
                </li>
                <li>
                  Developing and debugging backend workflows and automation
                  while using AI-assisted development tools to accelerate
                  implementation and problem solving.
                </li>
              </ul>

              <div className="experience-tech">
                <span>Python</span>
                <span>PostgreSQL</span>
                <span>Odoo</span>
                <span>XML</span>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-header">
                <div>
                  <h3>Frontend Development Intern</h3>
                  <p className="experience-company">
                    Ciatek IT & Software Solutions
                  </p>
                </div>

                <span className="experience-date">Jun 2025 - Aug 2025</span>
              </div>

              <ul
                className="experience-description"
                style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}
              >
                <li>
                  Developed and customized React components and responsive web
                  interfaces as part of hands-on frontend development projects.
                </li>
                <li>
                  Worked with TypeScript, Tailwind CSS, MUI, and shadcn to build
                  and style reusable UI components.
                </li>
                <li>
                  Gained practical experience applying modern frontend
                  development practices in a professional environment.
                </li>
              </ul>

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

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <p className="section-label">CONTACT</p>
            <h2>Let's connect.</h2>
          </div>

          <div className="contact-content">
            <p>
              I'm currently open to software engineering and research
              opportunities, as well as interesting projects. If you'd like to
              get in touch about an opportunity, a project, research, or
              anything else, you can reach me through the links below.
            </p>

            <div className="contact-links">
              <a href="mailto:ali2moh.04@gmail.com">Email ↗</a>

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
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Ali Mohsen</p>
      </footer>
    </>
  );
}

export default App;
