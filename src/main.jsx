import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const portraits = [
  { title: 'Portrait Study 01', image: '/assets/portraits/port1.jpeg' },
  { title: 'Portrait Study 02', image: '/assets/portraits/port2.jpeg' },
  { title: 'Portrait Study 03', image: '/assets/portraits/port3.jpeg' }
];

const designs = [
  { title: 'Digital Design 01', image: '/assets/designs/des1.jpeg' },
  { title: 'Digital Design 02', image: '/assets/designs/des2.jpeg' },
  { title: 'Digital Design 03', image: '/assets/designs/des3.jpeg' },
  { title: 'Digital Design 04', image: '/assets/designs/des4.jpeg' },
  { title: 'Digital Design 05', image: '/assets/designs/des5.jpeg' },
  { title: 'Digital Design 06', image: '/assets/designs/des6.jpeg' }
];

const workGroups = [
  {
    id: 'portraits',
    label: 'Portraits',
    intro: 'Hand-drawn studies, faces, and visual experiments.',
    items: portraits.map(item => ({
      ...item,
      text: 'A hand-drawn portrait study.',
      tags: ['Drawing', 'Traditional'],
      link: '#'
    }))
  },
  {
    id: 'designs',
    label: 'Designs',
    intro: 'Digital design, visual systems, and creative experiments.',
    items: designs.map(item => ({
      ...item,
      text: 'A digital design project.',
      tags: ['Design', 'Digital'],
      link: '#'
    }))
  },
  {
    id: 'research',
    label: 'Research papers',
    intro: 'Research-driven work, papers, and technical explorations.',
    items: [
      {
        title: 'Research Library',
        text: 'Federated Learning Under Resource Constraints on iOS Devices, https://eurekamag.com/research/108/885/108885634.php?srsltid=AU7gw4XZfB5hJxh40UTL9__Ce4ccRoW3NSrwBh--B91IE3ly-Bz0TP_J',
        tags: ['Research', 'Academic'],
        link: '#'
      }
    ]
  }
];

function App() {
  const [activeGroup, setActiveGroup] = useState('portraits');
  const active = workGroups.find(group => group.id === activeGroup);

  return (
    <div className="site-shell">
      <header className="nav">
        <a className="logo" href="#top">E<span>.</span></a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-pill" href="https://github.com/Monstersxx021" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <p className="eyebrow">CREATIVE DEVELOPER / ARTIST / EXPERIMENTER</p>
          <h1>Ideas with<br /><span>electric</span> energy.</h1>
          <div className="hero-bottom">
            <p>I’m Eklavya. I build expressive digital experiences, research-driven projects, and useful things with code.</p>
            <a className="circle-link" href="#work">Explore<br />work ↓</a>
          </div>
          <div className="hero-sticker">AVAILABLE<br />FOR<br /><strong>FREELANCE</strong></div>
        </section>

        <section id="work" className="work section-pad">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <span>(03)</span>
          </div>

          <div className="work-tabs" role="tablist" aria-label="Work categories">
            {workGroups.map(group => (
              <button
                key={group.id}
                className={activeGroup === group.id ? 'work-tab active' : 'work-tab'}
                onClick={() => setActiveGroup(group.id)}
              >
                {group.label}
              </button>
            ))}
          </div>

          <div className="category-intro">
            <p className="eyebrow">{active.label.toUpperCase()}</p>
            <p>{active.intro}</p>
          </div>

          {active.items.map((item, index) => (
            <article className="project" key={item.title}>
              <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="project-main">
                <p className="eyebrow">{active.label.toUpperCase()}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                {item.image && (
                  <img className="project-image" src={item.image} alt={item.title} />
                )}
                <div className="tags">
                  {item.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <a className="project-arrow" href={item.link}>↗</a>
            </article>
          ))}
        </section>

        <section id="about" className="about section-pad">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Curious mind.<br /><span>Hands-on</span> builder.</h2>
          <p className="about-copy">I’m Eklavya, a computer science student and creative builder exploring the space between code, art, research, and useful digital experiences. This section is ready for a more personal introduction in your own words.</p>
        </section>

        <section id="contact" className="contact section-pad">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let's make<br /><span>something</span><br />memorable.</h2>
          <a className="contact-link" href="mailto:eklavyas023@gmail.com">eklavyas023@gmail.com ↗</a>
        </section>
      </main>

      <footer>
        <span>EKLAVYA © 2026</span>
        <span>BUILT WITH CURIOSITY + CODE</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/where/'
});