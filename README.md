# Pattern-Oriented Software Architecture (POSA 2026) 🏛️

> Interactive modern course notes, architectural pattern catalogs, and past paper mock exams based on the curriculum by **Prof. Dr. Jörg Schäfer** (Frankfurt University of Applied Sciences).

---

## 🌟 Live Demo & Structure

* **Master Course Portal:** `index.html`
* **Unit 1 · Behavioral:** `unit-1-strategy.html` (Strategy Pattern, SimUDuck evolution)
* **Unit 2 · Behavioral:** `unit-2-behavioral.html` (Template Method, Command Pattern, Hollywood Principle)
* **Unit 3 · Structural:** `unit-3-structural.html` (Iterator & Composite Patterns)
* **Unit 4 · Case Study:** `unit-4-junit.html` (JUnit Architecture: Cook's Tour)
* **Unit 5 · Foundations:** `unit-5-theory.html` (Pattern Theory, Christopher Alexander, GoF)
* **Unit 6 · Principles:** `unit-6-solid.html` (SOLID & 7 Design Smells)
* **Unit 7 · Metrics:** `unit-7-packaging.html` (Packaging Principles & Main Sequence Metrics: $I, A, D$)
* **Unit 8 · Creational:** `unit-8-creational.html` (Abstract Factory & Thread-Safe Singleton)
* **Unit 9 · Flexibility:** `unit-9-flexibility.html` (Decorator & Adapter Patterns)
* **Unit 10 · Decoupling:** `unit-10-decoupling.html` (Observer, Chain of Responsibility, Servlets)
* **Unit 11 · Compound:** `unit-11-mvc.html` (Model-View-Controller in Desktop, Web & Enterprise)
* **Unit 12 · Macro Architecture:** `unit-12-architectural.html` (Pipes & Filters, Blackboard, Apache Server)
* **Unit 13 · Domain:** `unit-13-analysis.html` (Martin Fowler's Quantity, Measurement, Language Idioms)
* **Unit 14 · Quality:** `unit-14-testing.html` (The 5 Test Doubles: Dummies, Fakes, Stubs, Spies, Mocks)
* **Unit 15 · Evolution:** `unit-15-criticism.html` (Peter Norvig's Critique, Dynamic Language Alternatives)
* **Unit 16 · Frontiers:** `unit-16-genai.html` (Patterns in the Age of Generative AI, Weather Station)
* **📝 Past Papers Hub:** `past-papers.html`
* **📝 Mock Exam 1 (75 pts):** `mock-1.html`
* **📝 Mock Exam 2 (95 pts):** `mock-2.html`

---

## 🚀 Instant Deployment to GitHub Pages

1. **Initialize Git & Push**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of POSA 2026 modern course portal"
   git branch -M main
   git remote add origin https://github.com/<your-username>/posa-2026-notes.git
   git push -u origin main
   ```
2. **Enable GitHub Pages**:
   * On your GitHub repository, go to **Settings** $\to$ **Pages**.
   * Under **Build and deployment** $\to$ **Source**, select **GitHub Actions** (automated via `.github/workflows/deploy.yml`).
3. Your site will be live at:
   `https://<your-username>.github.io/posa-2026-notes/`
