import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PortfolioSamuelVera() {
  const proyectos = [
    {
      titulo: "SG Académico (CENPCAT)",
      descripcion:
        "Sistema de gestión académica con módulos de autenticación JWT, registro de sesiones y paneles por rol.",
      enlace: "https://github.com/samuelvera/sg_academico",
    },
    {
      titulo: "Dashboard Recepcionista",
      descripcion:
        "Interfaz React para el módulo de recepción: registro de visitas, interesados y novedades.",
      enlace: "https://github.com/samuelvera/sg_academico",
    },
    {
      titulo: "API Node.js + MySQL",
      descripcion:
        "Backend REST con Express, controladores modulares y ORM personalizado para MySQL.",
      enlace: "https://github.com/samuelvera/sg_academico",
    },
  ];

  return (
    <div className="bg-light text-dark min-vh-100">
      {/* Header */}
      <header className="bg-primary text-white text-center py-5 shadow-sm">
        <h1 className="fw-bold mb-2">Samuel Vera</h1>
        <p className="fs-5 mb-0">
          Desarrollador Fullstack · Node.js · React · MySQL · Docker
        </p>
      </header>

      {/* Sobre mí */}
      <section id="about" className="container py-5">
        <h2 className="text-center mb-4 text-primary fw-bold">Sobre mí</h2>
        <p className="text-center mx-auto" style={{ maxWidth: "800px" }}>
          Ingeniero en Tecnologías de la Información con experiencia en desarrollo
          fullstack. Me especializo en Node.js, React, Docker y MySQL, creando
          soluciones escalables y eficientes. Disfruto diseñar sistemas que
          integren backend sólido con interfaces limpias y usables.
        </p>
      </section>

      {/* Proyectos */}
      <section id="projects" className="bg-white py-5 border-top border-bottom">
        <div className="container">
          <h2 className="text-center mb-5 text-primary fw-bold">Proyectos</h2>
          <div className="row g-4">
            {proyectos.map((p, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-primary fw-bold">{p.titulo}</h5>
                      <p className="card-text">{p.descripcion}</p>
                    </div>
                    <a
                      href={p.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary mt-3"
                    >
                      Ver en GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-1">© 2025 Samuel Vera</p>
        <p className="mb-0">
          <a href="mailto:samuelvera.dev@example.com" className="text-white text-decoration-none">
            📧 samuelvera.dev@example.com
          </a>
        </p>
      </footer>
    </div>
  );
}
