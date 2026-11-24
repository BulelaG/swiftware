import { Link, NavLink, Route, Routes } from 'react-router-dom';

const offerings = [
  { number: '01', title: 'Business websites', text: 'A clear, credible home online that helps the right customers understand what you do and get in touch.' },
  { number: '02', title: 'Online stores', text: 'Product catalogues and checkout experiences that make it easier to start selling online.' },
  { number: '03', title: 'MVP development', text: 'A focused first version of your app or platform, built to test the idea with real people.' },
  { number: '04', title: 'Automations & tools', text: 'Practical workflows, internal dashboards, and small software tools that reduce repetitive work.' },
  { number: '05', title: 'Our own products', text: 'Useful software, templates, and platforms made by Swiftware for everyday business needs.' }
];

const tiers = [
  { name: 'Starter', price: 'From R2,500', detail: 'A professional starting point for a small business.', items: ['Focused scope', 'Mobile-ready build', 'WhatsApp contact path'] },
  { name: 'Growth', price: 'Scoped to your needs', detail: 'More pages, richer content, or a growing online catalogue.', items: ['Expanded structure', 'Lead or order flows', 'Launch support'] },
  { name: 'Scale', price: 'Custom quote', detail: 'MVPs, integrations, and business-specific software.', items: ['Feature planning', 'Custom workflows', 'Milestone-based delivery'] }
];

function Header() {
  return <header className="site-header"><Link className="wordmark" to="/">swiftware<span>.</span></Link><nav aria-label="Main navigation"><NavLink to="/services">Services</NavLink><NavLink to="/work">Work</NavLink><NavLink to="/pricing">Pricing</NavLink><NavLink className="nav-cta" to="/contact">Let’s talk <span aria-hidden="true">↗</span></NavLink></nav></header>;
}

function Footer() {
  return <footer className="site-footer"><Link className="wordmark" to="/">swiftware<span>.</span></Link><p>Digital services and software products from Swift House (Pty) Ltd.</p><span>South Africa · © {new Date().getFullYear()} Swiftware Solutions</span></footer>;
}

function Home() {
  return <>
    <main>
      <section className="hero wrap">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Digital services & software products</p><h1>Good ideas deserve <em>a way forward.</em></h1><p className="hero-intro">We help South African businesses and founders move from “we should build this” to a useful digital product people can actually use.</p><div className="hero-actions"><Link className="button button-dark" to="/contact">Tell us what you’re building <span aria-hidden="true">↗</span></Link><a className="text-link" href="#services">Explore what we do <span aria-hidden="true">↓</span></a></div><p className="hero-note">Websites · Online stores · MVPs · Business tools</p></div>
        <div className="hero-art" aria-label="Abstract preview of a digital product interface"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="product-window"><div className="window-bar"><span/><span/><span/><b>swiftware / workspace</b></div><div className="window-content"><aside><i/><i/><i/><i/></aside><div className="window-main"><small>BUSINESS OVERVIEW</small><strong>Make room for<br/>what matters.</strong><div className="window-stats"><span/><span/><span/></div><div className="window-row"><i/><i/><i/></div></div></div></div><div className="art-label label-top">Built around your business</div><div className="art-label label-bottom">Concept → product</div><div className="art-stamp">SW<span>✳</span></div></div>
      </section>
      <section className="trust-row"><div className="wrap trust-inner"><span>Made for the next step</span><i/><span>Designed around real work</span><i/><span>Built in South Africa</span></div></section>
      <section className="section wrap" id="services"><div className="section-head"><div><p className="eyebrow">What we do</p><h2>From first website<br/>to first product.</h2></div><p className="section-aside">One practical technology partner for the things your business needs online.</p></div><div className="service-list">{offerings.map(item=><article className="service-row" key={item.number}><span className="service-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><Link aria-label={`Learn about ${item.title}`} to="/services">↗</Link></article>)}</div></section>
      <section className="statement"><div className="wrap statement-inner"><p className="eyebrow">A thoughtful way to build</p><h2>Start with the problem.<br/><span>Build only what moves it forward.</span></h2><Link className="text-link" to="/services">See how we work <span aria-hidden="true">↗</span></Link></div></section>
      <section className="section wrap pricing-preview"><div className="section-head"><div><p className="eyebrow">Straightforward starting points</p><h2>Small start.<br/>Room to grow.</h2></div><Link className="text-link" to="/pricing">View service pricing <span aria-hidden="true">↗</span></Link></div><div className="tier-grid">{tiers.map((tier,index)=><article className={`tier-card ${index===1?'tier-featured':''}`} key={tier.name}><div className="tier-top"><span>{tier.name}</span><span>0{index+1}</span></div><strong>{tier.price}</strong><p>{tier.detail}</p><ul>{tier.items.map(item=><li key={item}><span>+</span>{item}</li>)}</ul></article>)}</div></section>
      <section className="contact-band"><div className="wrap contact-inner"><div><p className="eyebrow">Have a project in mind?</p><h2>Let’s make the next step<br/>feel manageable.</h2></div><Link className="button button-light" to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  </>;
}

function SimplePage({ title, intro, children }) {
  return <main className="simple-page wrap"><p className="eyebrow">Swiftware Solutions</p><h1>{title}</h1><p className="simple-intro">{intro}</p>{children}</main>;
}

function Services() { return <SimplePage title="Digital help for the work ahead." intro="Choose a service to get moving. We’ll shape the scope around your goals, customers, and budget."><div className="service-list">{offerings.map(item=><article className="service-row" key={item.number}><span className="service-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></SimplePage>; }
function Work() { return <SimplePage title="Useful work, made with purpose." intro="We’re preparing selected client projects and in-house products for this space. Have a project in mind? Let’s talk."/>; }
function Pricing() { return <SimplePage title="A clear place to start." intro="Every project is scoped to what you need. These starting points help set expectations before we talk."><div className="tier-grid page-tiers">{tiers.map((tier,index)=><article className="tier-card" key={tier.name}><div className="tier-top"><span>{tier.name}</span><span>0{index+1}</span></div><strong>{tier.price}</strong><p>{tier.detail}</p><ul>{tier.items.map(item=><li key={item}><span>+</span>{item}</li>)}</ul></article>)}</div></SimplePage>; }
function Contact() { return <SimplePage title="Tell us what you have in mind." intro="Share a little about the business and what you want to build. We’ll get back to you with a useful next step."><a className="button button-dark" href="https://wa.me/27672169078?text=Hi%20Swiftware%2C%20I%27d%20like%20to%20discuss%20a%20project.">Message us on WhatsApp <span aria-hidden="true">↗</span></a><p className="contact-email">Or email <a href="mailto:gomoshebulela@gmail.com">gomoshebulela@gmail.com</a></p></SimplePage>; }

export default function App() {
  return <><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/work" element={<Work/>}/><Route path="/pricing" element={<Pricing/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<SimplePage title="Page not found." intro="That link doesn’t lead to a page here."><Link className="text-link" to="/">Back to home ↗</Link></SimplePage>}/></Routes><Footer/></>;
}
