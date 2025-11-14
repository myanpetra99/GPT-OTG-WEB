import '../styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faCheckCircle,
  faComments,
  faDownload,
  faGaugeHigh,
  faPuzzlePiece,
  faShieldHalved,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import { faChrome, faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../components/navbar';

const features = [
  {
    icon: faWandMagicSparkles,
    title: 'Context-aware prompts',
    copy: 'Select any text or page element and GPT-OTG automatically shares the relevant context with the model.',
  },
  {
    icon: faComments,
    title: 'Inline conversations',
    copy: 'Stay in flow with floating replies anchored to the site you are exploring—no tab juggling required.',
  },
  {
    icon: faShieldHalved,
    title: 'Privacy-first capture',
    copy: 'Nothing leaves your browser until you trigger the assistant, keeping sensitive data on the page.',
  },
  {
    icon: faGaugeHigh,
    title: 'Optimized for speed',
    copy: 'Preset actions and keyboard shortcuts let you summarize, rewrite, and ideate in seconds.',
  },
];

const steps = [
  {
    title: 'Install the beta',
    copy: 'Add GPT-OTG from the Chrome Web Store and pin it next to your address bar for instant access.',
  },
  {
    title: 'Highlight anything',
    copy: 'Use the command palette (`/ai`) or right-click menu to capture whatever you are reading.',
  },
  {
    title: 'Ask and test away',
    copy: 'Trigger your favorite GPT models to summarize docs, draft replies, or test how the extension behaves.',
  },
];

const highlights = [
  'Works with GPT-4, GPT-3.5 and custom APIs',
  'Keyboard and mouse driven controls',
  'Designed for testers and tinkerers',
];

function App() {
  return (
    <>
      <Navbar />
      <main className="landing" id="home">
        <section className="hero">
          <div className="hero__content">
            <p className="hero__eyebrow">AI Copilot for the Open Web</p>
            <h1>
              Elegantly browse, test, and extend <span>GPT-OTG</span>
            </h1>
            <p className="hero__lead">
              The landing pad for makers trying the GPT-OTG extension. Capture context, ask GPT in-place,
              and showcase your experiments without leaving the page.
            </p>

            <div className="hero__actions">
              <a
                className="button button--primary"
                href="https://chrome.google.com/webstore/detail/gpt-otg-development-build/fmibenbpkickilfocjdghokdnkmolhfi?hl=en&authuser=0"
                target="_blank"
                rel="noreferrer"
              >
                Install the Extension
                <FontAwesomeIcon icon={faDownload} />
              </a>
              <a className="button button--ghost" href="https://github.com/myanpetra99/GPT-OTG" target="_blank" rel="noreferrer">
                View on GitHub
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>

            <div className="hero__meta">
              <span>
                <FontAwesomeIcon icon={faCheckCircle} /> Instant context capture
              </span>
              <span>
                <FontAwesomeIcon icon={faCheckCircle} /> No sign-in required for testing
              </span>
            </div>
          </div>

          <div className="hero__panel">
            <div className="panel__status">
              <span className="status-dot" /> Extension ready for takeoff
            </div>
            <div className="panel__body">
              <h3>
                <FontAwesomeIcon icon={faBolt} /> Live preview
              </h3>
              <p>Pin GPT-OTG and summon it with `/ai` anywhere on the web.</p>
              <ul>
                {highlights.map((item) => (
                  <li key={item}>
                    <FontAwesomeIcon icon={faCheckCircle} /> {item}
                  </li>
                ))}
              </ul>
              <div className="panel__footer">
                <span className="pill">
                  <FontAwesomeIcon icon={faPuzzlePiece} /> Works with any site
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="showcase" id="preview">
          <div className="showcase__card">
            <header>
              <span className="pill pill--light">Testing canvas</span>
              <p>Type `/typeai` and ask GPT-OTG to draft an elegant summary.</p>
            </header>
            <div className="showcase__conversation">
              <div className="bubble bubble--user">/ai Summarize the hero section of this page.</div>
              <div className="bubble bubble--assistant">
                GPT-OTG captures the highlighted copy, explains the value proposition, and offers action items
                without leaving your current tab.
              </div>
            </div>
            <footer>
              <span>Keyboard shortcuts, mouse controls, and context menus supported.</span>
            </footer>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <p className="hero__eyebrow">Built for explorers</p>
            <h2>Functional power for real-world browsing</h2>
            <p>Each block is crafted to help you validate the extension quickly and share polished demos.</p>
          </div>
          <div className="features__grid">
            {features.map(({ icon, title, copy }) => (
              <article key={title} className="feature-card">
                <span className="feature-card__icon">
                  <FontAwesomeIcon icon={icon} />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="steps" id="get-started">
          <div className="steps__list">
            {steps.map(({ title, copy }, index) => (
              <article key={title} className="step-card">
                <div className="step-number">0{index + 1}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="steps__badge">
            <p className="hero__eyebrow">Compatibility</p>
            <h3>Works beautifully on Chromium browsers.</h3>
            <p>Chrome, Edge, Brave, Arc, and every Chromium-based tool that supports extensions.</p>
            <span className="browser-pill">
              <FontAwesomeIcon icon={faChrome} /> Chrome Web Store
            </span>
          </div>
        </section>

        <section className="cta" id="download">
          <div className="cta__card">
            <div>
              <p className="hero__eyebrow">Ready to explore?</p>
              <h2>Install GPT-OTG and start testing within minutes.</h2>
              <p>
                The extension is in active beta. Your feedback shapes every release—grab it, stress test it, and
                share what you build.
              </p>
            </div>
            <div className="cta__actions">
              <a
                className="button button--primary"
                href="https://chrome.google.com/webstore/detail/gpt-otg-development-build/fmibenbpkickilfocjdghokdnkmolhfi?hl=en&authuser=0"
                target="_blank"
                rel="noreferrer"
              >
                Download Beta
                <FontAwesomeIcon icon={faDownload} />
              </a>
              <a className="button button--ghost" href="https://github.com/myanpetra99/GPT-OTG" target="_blank" rel="noreferrer">
                Explore the code
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
