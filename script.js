const app = document.getElementById("app");
const navButtons = document.querySelectorAll("[data-page]");

const featuredEpisodes = [
  {
    title: "La Revolución de los Cobots en Córdoba",
    category: "Nuevo programa",
    summary:
      "Visitamos plantas industriales que ya integran robots colaborativos para potenciar su producción.",
  },
  {
    title: "Biotecnología Aplicada",
    category: "Entrevista",
    summary:
      "Un recorrido por desarrollos científicos que impactan en salud, agro y nuevos procesos productivos.",
  },
  {
    title: "Smart City Córdoba 2030",
    category: "Especial Córdoba",
    summary:
      "Ideas, infraestructura y tecnología urbana pensadas para una ciudad más conectada.",
  },
  {
    title: "Educación y futuro del trabajo",
    category: "Debate",
    summary:
      "Cómo la formación y las nuevas habilidades se vuelven centrales en el mundo que viene.",
  },
];

const articles = [
  {
    title: "¿Estamos listos para la IA General?",
    tag: "Inteligencia Artificial",
    text: "Una mirada prudente sobre el avance de los modelos de lenguaje y su impacto real.",
  },
  {
    title: "El boom del AgTech en la región central",
    tag: "Tendencias",
    text: "Cómo el campo se está transformando con drones, sensores e IoT.",
  },
  {
    title: "Movilidad Eléctrica",
    tag: "Movilidad",
    text: "Infraestructura, baterías y oportunidades para la industria local.",
  },
  {
    title: "Genética Cordobesa",
    tag: "Ciencia",
    text: "Avances técnicos con aplicación concreta en empresas y laboratorios.",
  },
];

const sponsors = [
  "UNC",
  "UTN",
  "TechPark",
  "Ciudad de Córdoba",
  "INVAP",
  "Globant",
  "Cluster Tecnológico",
  "AgTech Hub",
  "Media Partner",
];

function pageHeader(eyebrow, title, text) {
  return `
    <section class="page-header">
      <div class="container">
        <div class="eyebrow">${eyebrow}</div>
        <h1 class="page-title">${title}</h1>
        <p class="page-text">${text}</p>
      </div>
    </section>
  `;
}

function renderHome() {
  return `
    <section class="hero">
      <div class="container hero-inner">
        <div class="pill">Ciencia y Córdoba</div>
        <h1 class="hero-title">TV <span class="accent">4.0</span></h1>
        <p class="hero-text">Ciencia, innovación y tecnología en lenguaje simple. Descubrí el futuro que ya está ocurriendo en Córdoba.</p>
        <div class="hero-actions">
          <button class="btn" data-page="episodes">Ver últimos episodios</button>
          <button class="btn-secondary" data-page="hosts">Conocer el programa</button>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container grid-3">
        ${[
          {
            title: "Innovación Local",
            text: "Exploramos el ecosistema tecnológico de Córdoba, desde startups disruptivas hasta la industria 4.0 en acción.",
          },
          {
            title: "Divulgación Simple",
            text: "La robótica y la ciencia explicadas sin complicaciones. Acercamos el conocimiento a todos los televidentes.",
          },
          {
            title: "Futuro Educativo",
            text: "Conectamos con universidades e institutos para mostrar las carreras y habilidades que demanda el nuevo mundo.",
          },
        ]
          .map(
            (item) => `
            <article class="card">
              <div class="card-icon"></div>
              <h3 class="card-title">${item.title}</h3>
              <p class="card-text">${item.text}</p>
            </article>
          `
          )
          .join("")}
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="section-head">
          <div>
            <h2 class="section-title">Programas Destacados</h2>
            <p class="section-text">Recorré los momentos más importantes de nuestra última temporada.</p>
          </div>
          <button class="inline-link" data-page="episodes">Explorar archivo →</button>
        </div>

        <div class="featured-layout">
          <article class="featured-main">
            <span class="tag">Último programa</span>
            <h3 class="card-title" style="margin-top:16px; font-size:2rem;">La Revolución de los Cobots en Córdoba</h3>
            <p class="card-text">Visitamos plantas industriales que ya integran robots colaborativos para potenciar su producción.</p>
            <div style="margin-top:24px;">
              <button class="btn" data-page="episodes">Ver detalle</button>
            </div>
          </article>

          <div class="side-stack">
            ${featuredEpisodes
              .slice(1, 3)
              .map(
                (ep) => `
                <article class="side-card">
                  <div class="eyebrow" style="font-size:11px;">${ep.category}</div>
                  <h3 class="card-title" style="margin-top:10px;">${ep.title}</h3>
                  <p class="card-text">Ver detalle del episodio y su ficha.</p>
                </article>
              `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container split-layout">
        <div class="placeholder-photo"></div>
        <div>
          <div class="eyebrow">Nuestro equipo</div>
          <h2 class="section-title" style="margin-top:12px;">La voz de la innovación</h2>
          <p class="section-text">Conducción y producción para acercar conceptos complejos en historias claras, visuales y atractivas para toda la familia.</p>
          <div class="grid-2" style="margin-top:24px;">
            <div class="info-box">
              <div class="muted">Dirección</div>
              <div style="margin-top:6px; font-weight:600;">Canal 12 Córdoba</div>
            </div>
            <div class="info-box">
              <div class="muted">Producción</div>
              <div style="margin-top:6px; font-weight:600;">Obsidian Lens Team</div>
            </div>
          </div>
          <div style="margin-top:24px;">
            <button class="btn-secondary" data-page="hosts">Ver perfil del equipo</button>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="section-head" style="justify-content:center; text-align:center;">
          <div>
            <h2 class="section-title">Obsidian Lens Magazine</h2>
          </div>
        </div>

        <div class="magazine-layout">
          <article class="magazine-hero">
            <div class="eyebrow">Inteligencia Artificial</div>
            <h3 class="card-title" style="margin-top:12px; font-size:2rem;">¿Estamos listos para la IA General?</h3>
            <p class="card-text">Una mirada profunda sobre el avance de los modelos de lenguaje en el día a día profesional.</p>
            <div style="margin-top:22px;">
              <button class="inline-link" data-page="magazine">Leer más →</button>
            </div>
          </article>

          <div class="side-stack">
            ${articles
              .slice(1)
              .map(
                (item) => `
                <article class="side-card">
                  <div class="eyebrow" style="font-size:11px;">${item.tag}</div>
                  <h3 class="card-title" style="margin-top:10px;">${item.title}</h3>
                  <p class="card-text">${item.text}</p>
                </article>
              `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container">
        <div class="sponsor-row-title">Instituciones que nos acompañan</div>
        <div class="grid-sponsors">
          ${sponsors.slice(0, 6).map((item) => `<article class="sponsor-card">${item}</article>`).join("")}
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container" style="max-width:900px;">
        <div class="form-box">
          <div style="text-align:center; margin-bottom:24px;">
            <h2 class="section-title">¿Querés ser parte del programa?</h2>
            <p class="section-text">Contactanos para sponsors, prensa o para enviarnos tu proyecto tecnológico.</p>
          </div>
          <div class="form-grid">
            <input placeholder="Tu nombre completo" />
            <input placeholder="contacto@empresa.com" />
            <textarea class="full" placeholder="Contanos tu propuesta..."></textarea>
          </div>
          <div style="margin-top:22px; text-align:center;">
            <button class="btn" data-page="contact">Enviar mensaje</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderEpisodes() {
  return `
    ${pageHeader(
      "Archivo audiovisual",
      "Episodios y especiales",
      "Un prototipo de archivo completo con programas destacados, filtros simulados y fichas listas para ampliar en una versión real."
    )}
    <section class="page-section">
      <div class="container">
        <div class="filter-row">
          ${["Todos", "IA", "Robótica", "Industria", "Educación", "Entrevistas"]
            .map((item) => `<div class="filter-chip">${item}</div>`)
            .join("")}
        </div>
        <div class="grid-cards">
          ${[...featuredEpisodes, ...featuredEpisodes]
            .map(
              (ep) => `
              <article class="feature-card">
                <div class="thumb-box"></div>
                <div class="eyebrow" style="font-size:11px;">${ep.category}</div>
                <h3 class="card-title" style="margin-top:12px;">${ep.title}</h3>
                <p class="card-text">${ep.summary}</p>
                <div style="margin-top:20px; display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                  <button class="btn">Ver episodio</button>
                  <button class="btn-secondary">Ficha técnica</button>
                </div>
              </article>
            `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderScience() {
  return `
    ${pageHeader(
      "Ciencia",
      "Historias donde la ciencia se vuelve concreta",
      "Esta sección podría reunir investigaciones, entrevistas con especialistas, laboratorios y proyectos científicos explicados en un formato claro y visual."
    )}
    <section class="page-section">
      <div class="container grid-2">
        <article class="magazine-hero">
          <div class="eyebrow">Nota principal</div>
          <h2 class="section-title" style="margin-top:12px;">Biotecnología, genética y nuevos materiales</h2>
          <p class="section-text">Un espacio ideal para mostrar desarrollos de universidades, centros de investigación y empresas de base científica.</p>
        </article>
        <div class="side-stack">
          ${["Genética aplicada", "Neurociencia cotidiana", "Salud y bioingeniería"]
            .map(
              (item) => `
              <article class="side-card">
                <h3 class="card-title">${item}</h3>
                <p class="card-text">Contenido demostrativo para navegación del prototipo.</p>
              </article>
            `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderTech() {
  return `
    ${pageHeader(
      "Tecnología",
      "Industria, software, robótica y futuro digital",
      "Una página principal para agrupar tendencias tecnológicas, empresas, soluciones reales y cobertura de innovación aplicada."
    )}
    <section class="page-section">
      <div class="container grid-cards">
        ${["IA", "Robótica", "Smart Cities", "Transformación Digital"]
          .map(
            (item) => `
            <article class="card">
              <div class="card-icon"></div>
              <h3 class="card-title">${item}</h3>
              <p class="card-text">Módulo listo para desarrollar con videos, notas, invitados y cobertura especial.</p>
            </article>
          `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderHosts() {
  return `
    ${pageHeader(
      "Hosts y producción",
      "Las personas detrás de TV 4.0",
      "Este prototipo ya deja preparada la estructura para conductor, co-conductor, producción y colaboradores, con fotos, bios y redes."
    )}
    <section class="page-section">
      <div class="container profile-grid">
        ${["Conductor principal", "Producción ejecutiva"]
          .map(
            (role, index) => `
            <article class="profile-card">
              <div class="profile-photo"></div>
              <div>
                <div class="eyebrow">${role}</div>
                <h3 class="card-title" style="margin-top:12px; font-size:2rem;">Perfil ${index + 1}</h3>
                <p class="card-text">Espacio listo para presentar trayectoria, enfoque editorial, presencia en medios y vínculo con el programa.</p>
                <div class="badges">
                  <span class="badge">LinkedIn</span>
                  <span class="badge">Instagram</span>
                </div>
              </div>
            </article>
          `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderMagazine() {
  return `
    ${pageHeader(
      "Magazine",
      "Notas, tendencias y análisis",
      "Una portada editorial para publicar artículos, novedades del ecosistema y coberturas especiales relacionadas con ciencia y tecnología."
    )}
    <section class="page-section">
      <div class="container magazine-layout">
        <article class="magazine-hero">
          <div class="eyebrow">Portada</div>
          <h2 class="section-title" style="margin-top:12px;">¿Estamos listos para la IA General?</h2>
          <p class="section-text">Una nota principal con diseño grande y bloques secundarios para continuar la navegación del sitio.</p>
        </article>
        <div class="side-stack">
          ${articles
            .slice(1)
            .map(
              (item) => `
              <article class="side-card">
                <div class="eyebrow" style="font-size:11px;">${item.tag}</div>
                <h3 class="card-title" style="margin-top:10px;">${item.title}</h3>
                <p class="card-text">${item.text}</p>
              </article>
            `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSponsors() {
  return `
    ${pageHeader(
      "Sponsors y aliados",
      "Instituciones, empresas y partners",
      "Página lista para mostrar auspiciantes, universidades, cámaras empresarias y organizaciones vinculadas al programa."
    )}
    <section class="page-section">
      <div class="container grid-sponsors">
        ${sponsors
          .map(
            (item) => `
            <article class="sponsor-card">
              <div class="logo-box"></div>
              <h3 class="card-title">${item}</h3>
              <p class="card-text">Espacio demostrativo para logo, breve descripción y enlace.</p>
            </article>
          `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    ${pageHeader(
      "Contacto",
      "Prensa, sponsors y propuestas",
      "Formulario visual y bloques de contacto preparados para una versión real, sin lógica conectada todavía."
    )}
    <section class="page-section">
      <div class="container" style="max-width:920px;">
        <div class="form-box">
          <div class="form-grid">
            <input placeholder="Nombre" />
            <input placeholder="Email" />
            <input class="full" placeholder="Asunto" />
            <textarea class="full" placeholder="Escribí tu mensaje"></textarea>
          </div>
          <div style="margin-top:22px; display:flex; gap:12px; flex-wrap:wrap;">
            <button class="btn">Enviar</button>
            <button class="btn-secondary">Descargar media kit</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

const routes = {
  home: renderHome,
  episodes: renderEpisodes,
  science: renderScience,
  tech: renderTech,
  hosts: renderHosts,
  magazine: renderMagazine,
  sponsors: renderSponsors,
  contact: renderContact,
};

function setActiveNav(page) {
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === page);
  });
}

function renderPage(page) {
  const renderer = routes[page] || routes.home;
  app.innerHTML = renderer();
  setActiveNav(page);
  bindPageButtons();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindPageButtons() {
  document.querySelectorAll("#app [data-page], .site-footer [data-page], .live-btn[data-page], .brand[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      const page = button.dataset.page;
      renderPage(page);
    });
  });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderPage(button.dataset.page);
  });
});

renderPage("home");

