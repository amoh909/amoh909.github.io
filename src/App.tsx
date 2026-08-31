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
      </main>
    </>
  );
}

export default App;
