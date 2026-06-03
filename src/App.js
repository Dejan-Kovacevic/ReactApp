import React from "react";
import "./App.css";
import reposData from "./reposData";
import TodoList from "./TodoList";

const workflowSteps = [
  {
    title: "Planen",
    text: "Sammle die wichtigsten Aufgaben, sortiere sie nach Priorität und starte fokussiert in den Tag.",
    icon: "01",
  },
  {
    title: "Bauen",
    text: "Arbeite in klaren Schritten an Frontend, Backend und Lernprojekten weiter.",
    icon: "02",
  },
  {
    title: "Prüfen",
    text: "Halte offene Issues, Updates und Repository-Metriken im Blick, bevor du veröffentlichst.",
    icon: "03",
  },
];

function App() {
  const totalStars = reposData.reduce((sum, repo) => sum + repo.stars, 0);
  const totalForks = reposData.reduce((sum, repo) => sum + repo.forks, 0);
  const openIssues = reposData.reduce((sum, repo) => sum + repo.openIssues, 0);
  const latestRepo = reposData.reduce((latest, repo) =>
    repo.lastUpdate > latest.lastUpdate ? repo : latest
  );

  return (
    <div className="App">
      <header className="hero">
        <nav className="topbar" aria-label="Hauptnavigation">
          <a className="brand" href="#top" aria-label="Zur Startseite">
            <span className="brand-mark">R</span>
            <span>Repo Studio</span>
          </a>
          <div className="nav-links">
            <a href="#repos">Repos</a>
            <a href="#workflow">Workflow</a>
            <a href="#todos">Todos</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <section className="hero-copy" aria-labelledby="hero-title">
            <p className="eyebrow">Projektübersicht · React Dashboard</p>
            <h1 id="hero-title">Eine moderne UI für deine Projekte und Tagesplanung.</h1>
            <p className="hero-text">
              Alles Wichtige auf einer Seite: Repository-Status, offene Issues,
              Workflow-Schritte und eine Todo-Liste für die nächsten Aufgaben.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#repos">
                Repos ansehen
              </a>
              <a className="button button-secondary" href="#todos">
                Aufgabe hinzufügen
              </a>
            </div>
          </section>

          <aside className="hero-panel" aria-label="Aktuelle Kennzahlen">
            <p className="panel-label">Live Übersicht</p>
            <div className="panel-number">{reposData.length}</div>
            <p className="panel-text">aktive Repositories im Dashboard</p>
            <div className="mini-stats">
              <span>★ {totalStars} Sterne</span>
              <span>⑂ {totalForks} Forks</span>
              <span>⊙ {openIssues} Issues</span>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="stats-grid" aria-label="Dashboard-Kennzahlen">
          <article className="stat-card">
            <span className="stat-label">Repositories</span>
            <strong>{reposData.length}</strong>
            <p>Öffentliche und private Projekte in einer Ansicht.</p>
          </article>
          <article className="stat-card">
            <span className="stat-label">Sterne</span>
            <strong>{totalStars}</strong>
            <p>Gesammeltes Feedback aus allen gelisteten Projekten.</p>
          </article>
          <article className="stat-card">
            <span className="stat-label">Offene Issues</span>
            <strong>{openIssues}</strong>
            <p>Aufgaben, Bugs und Verbesserungen, die noch anstehen.</p>
          </article>
          <article className="stat-card stat-card-highlight">
            <span className="stat-label">Letztes Update</span>
            <strong>{latestRepo.name}</strong>
            <p>{latestRepo.lastUpdate}</p>
          </article>
        </section>

        <section className="section" id="repos">
          <div className="section-heading">
            <p className="eyebrow">Repository Cards</p>
            <h2>Deine Projekte im Überblick</h2>
            <p>
              Jede Karte zeigt Sprache, Sichtbarkeit, Aktivität und Metadaten,
              damit du schnell erkennst, wo als Nächstes Arbeit wartet.
            </p>
          </div>

          <div className="repo-grid">
            {reposData.map((repo) => (
              <article className="repo-card" key={repo.id}>
                <div className="repo-card-header">
                  <div>
                    <a
                      className="repo-name"
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                    <div className="repo-lang">
                      <span
                        className="repo-lang-dot"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </div>
                  </div>
                  <span
                    className={
                      "visibility" +
                      (repo.visibility === "private" ? " visibility-private" : "")
                    }
                  >
                    {repo.visibility}
                  </span>
                </div>

                <p className="repo-description">{repo.description}</p>

                <div className="repo-stats">
                  <span>★ {repo.stars}</span>
                  <span>⑂ {repo.forks}</span>
                  <span>⊙ {repo.openIssues} Issues</span>
                </div>

                <div className="repo-meta">
                  {repo.license && <span>⚖ {repo.license}</span>}
                  <span>Erstellt: {repo.createdAt}</span>
                  <span>Update: {repo.lastUpdate}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="workflow">
          <div className="section-heading compact">
            <p className="eyebrow">Arbeitsablauf</p>
            <h2>Von Idee zu Umsetzung</h2>
            <p>
              Ein klarer Ablauf hilft dir dabei, auch bei mehreren Projekten den
              Fokus zu behalten.
            </p>
          </div>
          <div className="workflow-list">
            {workflowSteps.map((step) => (
              <article className="workflow-card" key={step.title}>
                <span>{step.icon}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section todo-section" id="todos">
          <div className="section-heading compact">
            <p className="eyebrow">Nächste Schritte</p>
            <h2>Plane deinen Tag direkt im Dashboard</h2>
          </div>
          <TodoList />
        </section>
      </main>
    </div>
  );
}

export default App;
