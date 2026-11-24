import React from 'react';
import {
  FaArrowRight,
  FaBolt,
  FaCalendarCheck,
  FaCheck,
  FaEnvelope,
  FaGlobe,
  FaMobileScreen,
  FaPenNib,
  FaStore,
  FaTableColumns,
  FaWhatsapp
} from 'react-icons/fa6';
import { FaTools } from 'react-icons/fa';

const whatsappLink = 'https://wa.me/27672169078?text=Hi%20Bulela%2C%20I%20need%20a%20website%2C%20online%20store%2C%20or%20business%20web%20tool';
const email = 'gomoshebulela@gmail.com';

const services = [
  {
    icon: <FaGlobe />,
    title: 'Business Websites',
    copy: 'Clear service pages, contact paths, and trust sections for businesses that need to look credible online.',
    from: 'From R2,500'
  },
  {
    icon: <FaStore />,
    title: 'Online Stores',
    copy: 'Simple product catalogues, WhatsApp ordering flows, and storefronts for selling without a heavy setup.',
    from: 'From R6,500'
  },
  {
    icon: <FaTools />,
    title: 'Business Web Tools',
    copy: 'Booking forms, quote tools, dashboards, calculators, and workflow helpers built around your daily operations.',
    from: 'Custom quote'
  }
];

const proof = [
  'Built for SA small businesses',
  'WhatsApp-ready',
  'Mobile-first',
  'Clear starting prices'
];

const process = [
  ['01', 'Free quote', 'Send the brief, links, examples, or voice note.'],
  ['02', 'Design/build', 'We shape the layout, copy, pages, and core functionality.'],
  ['03', 'Launch', 'Your site goes live with handover notes and support options.']
];

const packages = [
  {
    name: 'Starter Site',
    price: 'From R2,500',
    bestFor: 'Best for new businesses that need a credible online presence fast.',
    items: ['1-3 pages', 'Mobile responsive', 'WhatsApp CTA', 'Basic SEO setup']
  },
  {
    name: 'Business Site',
    price: 'From R4,500',
    bestFor: 'Best for service businesses that need more pages, structure, and lead capture.',
    items: ['4-6 pages', 'Contact form', 'Service sections', 'Launch support']
  },
  {
    name: 'Store / Web Tool',
    price: 'From R6,500',
    bestFor: 'Best for selling products, taking requests, or managing a practical workflow.',
    items: ['Product or tool flow', 'Forms or checkout path', 'Admin-friendly structure', 'Custom integrations']
  }
];

const examples = [
  {
    icon: <FaPenNib />,
    type: 'Service website',
    title: 'Salon or Barber',
    copy: 'A polished site with services, prices, gallery, opening hours, and a WhatsApp booking path.'
  },
  {
    icon: <FaStore />,
    type: 'Online store',
    title: 'Food or Product Seller',
    copy: 'A clean catalogue for products, bundles, delivery notes, and order requests sent straight to WhatsApp.'
  },
  {
    icon: <FaCalendarCheck />,
    type: 'Business tool',
    title: 'Bookings or Quotes',
    copy: 'A simple form-driven tool for bookings, quote requests, calculators, or internal tracking.'
  }
];

const faqs = [
  ['Who is Swiftware for?', 'South African small businesses, creators, founders, and community projects that need a credible online presence without agency-level pricing.'],
  ['What do I need before we start?', 'A short brief, your business details, any photos or logos you have, and examples of websites you like. A WhatsApp voice note is enough to begin.'],
  ['Can you help with domain and hosting?', 'Yes. Swiftware can guide the domain, hosting, email, and launch setup so the technical parts are easier to manage.'],
  ['Can I pay in parts?', 'Yes. Smaller builds can be split into simple milestones, usually a start payment and a launch payment.'],
  ['Can you redesign my existing site?', 'Yes. Existing sites can be cleaned up, rebuilt, or turned into a more useful lead-generation flow.'],
  ['Do you provide support?', 'Yes. Support can include edits, hosting guidance, fixes, and small improvements after launch.']
];

function App() {
  return (
    <main className="swiftware-app">
      <nav className="topbar">
        <a className="brand" href="#home" aria-label="Swiftware home">
          <span>Swiftware</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#contact">Contact</a>
          <a className="nav-quote" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            Quote
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Swiftware by Swift House</p>
          <h1>Affordable websites, stores & web tools for SA small businesses.</h1>
          <p className="hero-lead">
            Get a clean, mobile-ready online presence that explains your business, builds trust, and turns visitors
            into WhatsApp conversations.
          </p>
          <div className="hero-actions">
            <a className="btn-primary-action" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
              Get a WhatsApp Quote
            </a>
            <a className="btn-secondary-action" href="#services">
              View Services
              <FaArrowRight />
            </a>
          </div>
          <p className="microcopy">Starter websites from R2,500. Built in Cape Town, serving South Africa.</p>
        </div>

        <div className="hero-preview" aria-label="Swiftware service preview">
          <div className="preview-browser">
            <div className="preview-top">
              <span />
              <span />
              <span />
            </div>
            <div className="preview-hero">
              <span>Local service website</span>
              <strong>Book a clean cut in Cape Town</strong>
              <small>Services, prices, gallery, and WhatsApp bookings in one place.</small>
              <button type="button">
                <FaWhatsapp />
                Book on WhatsApp
              </button>
            </div>
            <div className="preview-grid">
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="preview-stack">
            <span>
              <FaStore />
              Store catalogue
            </span>
            <span>
              <FaTableColumns />
              Quote dashboard
            </span>
            <span>
              <FaMobileScreen />
              Mobile-first
            </span>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Swiftware proof points">
        {proof.map((item) => (
          <span key={item}>
            <FaCheck />
            {item}
          </span>
        ))}
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p>What we build</p>
          <h2>Simple digital products that help customers take you seriously.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <span>{service.from}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow dark">How it works</p>
          <h2>Clear scope first. Then fast execution.</h2>
        </div>
        <div className="process-list">
          {process.map(([number, title, copy]) => (
            <article key={title}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="packages">
        <div className="section-heading">
          <p>Packages</p>
          <h2>Start small, then upgrade when the business grows.</h2>
        </div>
        <div className="package-grid">
          {packages.map((item) => (
            <article className="package-card" key={item.name}>
              <h3>{item.name}</h3>
              <strong>{item.price}</strong>
              <p className="best-for">{item.bestFor}</p>
              <ul>
                {item.items.map((line) => (
                  <li key={line}>
                    <FaBolt />
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section examples-section">
        <div className="section-heading">
          <p>Examples</p>
          <h2>Use cases Swiftware can turn into working digital products.</h2>
        </div>
        <div className="example-grid">
          {examples.map((item) => (
            <article className="example-card" key={item.title}>
              <div className="example-icon">{item.icon}</div>
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading">
          <p>FAQ</p>
          <h2>Questions clients usually ask first.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Ready to launch?</p>
          <h2>Send the brief. We will shape the simplest next step.</h2>
          <p>WhatsApp is fastest. Email is available if you prefer a more formal brief.</p>
        </div>
        <div className="contact-actions">
          <a className="btn-primary-action" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            Get a WhatsApp Quote
          </a>
          <a className="btn-secondary-action" href={`mailto:${email}`}>
            <FaEnvelope />
            Email Swiftware
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
