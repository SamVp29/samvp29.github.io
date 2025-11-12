import React from "react";

const basePath = import.meta.env.BASE_URL ?? "/";

const roles = [
    "plataformas educativas",
    "dashboards para equipos",
    "APIs listas para produccion",
    "pipelines con Docker",
];

const proyectos = [
    {
        titulo: "SG Academico (CENPCAT)",
        descripcion:
            "Suite web para matriculas, horarios y reporteria en tiempo real con autenticacion por roles.",
        tecnologias: ["Node.js", "Express", "MySQL", "JWT", "Docker"],
        enlace: "https://github.com/samuelvera/sg_academico",
        categoria: "backend",
        categoriaLabel: "Backend",
        imagen: `${basePath}projects/sg-academico.svg`,
    },
    {
        titulo: "Dashboard Recepcionista",
        descripcion:
            "SPA para recepcionistas con seguimiento de visitas, interesados y notificaciones internas.",
        tecnologias: ["React", "Vite", "Bootstrap 5", "Axios"],
        enlace: "https://github.com/samuelvera/dashboard-recepcionista",
        categoria: "frontend",
        categoriaLabel: "Frontend",
        imagen: `${basePath}projects/dashboard-recepcionista.svg`,
    },
    {
        titulo: "API Node.js + MySQL",
        descripcion:
            "API REST modular con controladores desacoplados, ORM ligero y pruebas automatizadas.",
        tecnologias: ["Node.js", "Express", "MySQL", "Jest"],
        enlace: "https://github.com/samuelvera/api-node-mysql",
        categoria: "devops",
        categoriaLabel: "DevOps",
        imagen: `${basePath}projects/api-node.svg`,
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

const stackFilters = [
    { key: "all", label: "Todos" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "devops", label: "DevOps" },
];

const stats = [
    { label: "Proyectos fullstack", value: 18 },
    { label: "Automatizaciones entregadas", value: 12 },
    { label: "Integraciones externas", value: 9 },
    { label: "Equipos entrenados", value: 6 },
];

function useCountUp(target, duration = 1400) {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        let raf;
        const start = (typeof performance !== "undefined" ? performance.now() : Date.now());

        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.round(progress * target));
            if (progress < 1) {
                raf = requestAnimationFrame((ts) => tick(ts || Date.now()));
            }
        };

        raf = requestAnimationFrame((ts) => tick(ts || Date.now()));
        return () => cancelAnimationFrame(raf);
    }, [target, duration]);

    return value;
}

const StatCounter = ({ value, label }) => {
    const count = useCountUp(value);
    return (
        <div className="stat-card h-100 text-center">
            <span className="display-6 fw-bold d-block">{count}+</span>
            <p className="text-secondary mb-0">{label}</p>
        </div>
    );
};

export default function PortfolioSamuelVera() {
    const [stackFilter, setStackFilter] = React.useState("all");
    const [roleIndex, setRoleIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const filteredProjects = React.useMemo(() => {
        if (stackFilter === "all") {
            return proyectos;
        }
        return proyectos.filter((proyecto) => proyecto.categoria === stackFilter);
    }, [stackFilter]);

    return (
        <div className="bg-body-tertiary text-dark">
            <header className="hero position-relative overflow-hidden text-white py-5">
                <div className="container py-md-5 hero-content">
                    <span className="badge text-uppercase fw-semibold hero-badge">
                        Fullstack Engineer
                    </span>
                    <h1 className="display-4 fw-bold mt-3 mb-4">Hola, soy Samuel Vera</h1>
                    <p className="lead text-white-50 mb-4">
                        Diseno plataformas educativas y herramientas empresariales que combinan APIs
                        solidas con interfaces limpias. Me enfoco en entregar soluciones listas para
                        produccion que escalen sin drama.
                    </p>
                    <p className="text-white mb-4 hero-role-text">
                        Actualmente construyendo {roles[roleIndex]}.
                    </p>
                    <div className="hero-roles mb-4">
                        {roles.map((role, index) => (
                            <span
                                key={role}
                                className={`role-chip ${index === roleIndex ? "active" : ""}`}
                            >
                                {role}
                            </span>
                        ))}
                    </div>
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

            <section className="stats-bar py-4">
                <div className="container">
                    <div className="row g-3">
                        {stats.map((stat) => (
                            <div key={stat.label} className="col-6 col-md-3">
                                <StatCounter {...stat} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between mb-4 gap-3">
                        <h2 className="section-title m-0">Proyectos destacados</h2>
                        <div className="filter-chips">
                            {stackFilters.map((filter) => (
                                <button
                                    key={filter.key}
                                    type="button"
                                    className={`chip ${filter.key === stackFilter ? "active" : ""}`}
                                    onClick={() => setStackFilter(filter.key)}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="row g-4">
                        {filteredProjects.map((proyecto) => (
                            <div key={proyecto.titulo} className="col-lg-4 col-md-6">
                                <article className="card h-100 project-card border-0 shadow-sm">
                                    <div className="project-cover">
                                        <img
                                            src={proyecto.imagen}
                                            alt={`Preview ${proyecto.titulo}`}
                                            loading="lazy"
                                        />
                                        <span className="project-pill">{proyecto.categoriaLabel}</span>
                                    </div>
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
                        <div className="timeline">
                            {experiencias.map((exp, index) => (
                                <div key={exp.titulo} className="timeline-item">
                                    <div className="timeline-point" />
                                    <div className="timeline-content">
                                        <p className="text-uppercase small text-muted mb-1">
                                            {exp.periodo}
                                        </p>
                                        <h3 className="h5 fw-bold">{exp.titulo}</h3>
                                        <p className="text-secondary mb-0">{exp.detalle}</p>
                                    </div>
                                    {index !== experiencias.length - 1 && <span className="timeline-line" />}
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
