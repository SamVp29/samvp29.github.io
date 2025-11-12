import React from "react";

const proyectos = [
    {
        titulo: "SG Academico (CENPCAT)",
        descripcion:
            "Suite web para administrar matriculas, horarios y reportes en tiempo real con flujos multirol.",
        tecnologias: ["Node.js", "Express", "MySQL", "JWT", "Docker"],
        enlace: "https://github.com/samuelvera/sg_academico",
    },
    {
        titulo: "Dashboard Recepcionista",
        descripcion:
            "SPA en React para recepcionistas: registro de visitas, seguimiento de interesados y alertas internas.",
        tecnologias: ["React", "Vite", "Bootstrap 5", "Axios"],
        enlace: "https://github.com/samuelvera/dashboard-recepcionista",
    },
    {
        titulo: "API Node.js + MySQL",
        descripcion:
            "API RESTful con controladores desacoplados y un mini ORM para automatizar consultas SQL parametrizadas.",
        tecnologias: ["Node.js", "Express", "MySQL", "Jest"],
        enlace: "https://github.com/samuelvera/api-node-mysql",
    },
];

const habilidades = [
    {
        titulo: "Backend",
        items: ["Node.js", "Express", "REST APIs", "Autenticacion JWT", "Sequelize"],
    },
    {
        titulo: "Frontend",
        items: ["React", "Vite", "Bootstrap 5", "Tailwind", "React Query"],
    },
    {
        titulo: "DevOps",
        items: ["Docker", "Docker Compose", "GitHub Actions", "NGINX", "Linux"],
    },
    {
        titulo: "Datos",
        items: ["MySQL", "PostgreSQL", "Knex", "MongoDB", "Diseno de ERD"],
    },
];

const experiencias = [
    {
        titulo: "CENPCAT",
        periodo: "2022 - Actualidad",
        detalle: "Lidero el desarrollo fullstack del sistema academico y la automatizacion de reportes.",
    },
    {
        titulo: "Freelance",
        periodo: "2019 - 2022",
        detalle: "Construi web apps y APIs a medida para instituciones educativas y negocios locales.",
    },
    {
        titulo: "Mentorias",
        periodo: "2018 - Actualidad",
        detalle: "Acompano equipos junior en buenas practicas, testing y despliegues continuos.",
    },
];

export default function PortfolioSamuelVera() {
    return (
        <div className="bg-body-tertiary text-dark">
            <header className="hero position-relative overflow-hidden text-white py-5">
                <div className="container py-md-5">
                    <span className="badge text-uppercase fw-semibold hero-badge">
                        Fullstack Engineer
                    </span>
                    <h1 className="display-4 fw-bold mt-3 mb-4">Hola, soy Samuel Vera</h1>
                    <p className="lead text-white-50 mb-4">
                        Diseno plataformas educativas y herramientas empresariales que combinan APIs
                        solidas con interfaces limpias. Me enfoco en entregar soluciones listas para
                        produccion que escalen sin drama.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                        <a className="btn btn-primary btn-lg" href="#projects">
                            Ver proyectos
                        </a>
                        <a
                            className="btn btn-outline-light btn-lg"
                            href="mailto:samuelvera.dev@example.com"
                        >
                            Contactame
                        </a>
                    </div>
                </div>
                <div className="hero-glow" aria-hidden="true" />
            </header>

            <main>
                <section id="about" className="container py-5">
                    <div className="row align-items-center g-4">
                        <div className="col-md-7">
                            <h2 className="section-title">Sobre mi</h2>
                            <p className="fs-5 text-secondary">
                                Ingeniero en Tecnologias de la Informacion con mas de 5 anos
                                construyendo productos digitales end-to-end. Domino Node.js, React,
                                MySQL y Docker para crear arquitecturas confiables que se despliegan
                                en contenedores ligeros o GitHub Pages.
                            </p>
                            <p className="text-secondary">
                                Tambien disfruto liderar equipos pequenos, definir estandares de
                                codigo y documentar procesos para que los proyectos se mantengan
                                vivos en el tiempo.
                            </p>
                        </div>
                        <div className="col-md-5">
                            <div className="card shadow-sm border-0 highlight-card">
                                <div className="card-body">
                                    <p className="text-uppercase text-muted mb-1 small">
                                        Stack principal
                                    </p>
                                    <p className="fw-semibold mb-3">
                                        Node.js / React / Vite / MySQL / Docker / GitHub Actions
                                    </p>
                                    <p className="text-uppercase text-muted mb-1 small">
                                        Actualmente
                                    </p>
                                    <p className="fw-semibold mb-0">Disenando SG Academico 2.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="skills" className="py-5 bg-white border-top border-bottom">
                    <div className="container">
                        <h2 className="section-title text-center mb-5">Habilidades tecnicas</h2>
                        <div className="row g-4">
                            {habilidades.map((habilidad) => (
                                <div key={habilidad.titulo} className="col-md-3 col-sm-6">
                                    <div className="card h-100 border-0 shadow-sm skill-card">
                                        <div className="card-body">
                                            <h5 className="fw-bold text-primary mb-3">
                                                {habilidad.titulo}
                                            </h5>
                                            <ul className="list-unstyled text-secondary mb-0">
                                                {habilidad.items.map((item) => (
                                                    <li key={item}>- {item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="projects" className="container py-5">
                    <h2 className="section-title text-center mb-5">Proyectos destacados</h2>
                    <div className="row g-4">
                        {proyectos.map((proyecto) => (
                            <div key={proyecto.titulo} className="col-lg-4 col-md-6">
                                <article className="card h-100 project-card border-0 shadow-sm">
                                    <div className="card-body d-flex flex-column">
                                        <h3 className="h5 fw-bold text-primary">
                                            {proyecto.titulo}
                                        </h3>
                                        <p className="text-secondary flex-grow-1">
                                            {proyecto.descripcion}
                                        </p>
                                        <div className="mb-3">
                                            {proyecto.tecnologias.map((tag) => (
                                                <span key={tag} className="badge tech-badge me-2 mb-2">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={proyecto.enlace}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-primary w-100"
                                        >
                                            Ver repositorio
                                        </a>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="experience" className="py-5 bg-white border-top">
                    <div className="container">
                        <h2 className="section-title text-center mb-4">Experiencia</h2>
                        <div className="row g-4">
                            {experiencias.map((exp) => (
                                <div key={exp.titulo} className="col-md-4">
                                    <div className="card border-0 shadow-sm h-100">
                                        <div className="card-body">
                                            <p className="text-uppercase small text-muted mb-1">
                                                {exp.periodo}
                                            </p>
                                            <h3 className="h5 fw-bold">{exp.titulo}</h3>
                                            <p className="text-secondary mb-0">{exp.detalle}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-dark text-white py-5">
                <div className="container text-center">
                    <p className="text-uppercase text-secondary mb-3 small">Contacto</p>
                    <div className="d-flex flex-column flex-md-row justify-content-center gap-4 mb-4">
                        <a
                            href="mailto:samuelvera.dev@example.com"
                            className="text-white text-decoration-none"
                        >
                            samuelvera.dev@example.com
                        </a>
                        <a
                            href="https://github.com/samuelvera"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-decoration-none"
                        >
                            github.com/samuelvera
                        </a>
                        <span>Guayaquil, Ecuador</span>
                    </div>
                    <p className="m-0 text-secondary">
                        Copyright {new Date().getFullYear()} Samuel Vera - Construido con React + Vite.
                    </p>
                </div>
            </footer>
        </div>
    );
}
