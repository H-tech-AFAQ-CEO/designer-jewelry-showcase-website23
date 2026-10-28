'use client'

import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const products = [
  { number: '01', name: 'Sculpted Signet', type: 'Rings / 18k yellow gold', image: '/ring-collection.png', href: '#contact' },
  { number: '02', name: 'The No. 03', type: 'Bespoke watches / Automatic', image: '/watch-collection.png', href: '#contact' },
  { number: '03', name: 'Cognac Calfskin', type: 'Leather straps / Hand-stitched', image: '/strap-collection.png', href: '#contact' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Atelier North home">ATELIER <span>NORTH</span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Collection</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>The atelier</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-image"><Image src="/atelier-hero.png" alt="Sculptural gold signet ring on dark stone" fill priority sizes="100vw" /></div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">Est. 2014 / London</p>
          <h1>Objects with<br /><em>intention.</em></h1>
          <div className="hero-bottom">
            <p>Quietly considered jewellery<br />and timepieces, made to last.</p>
            <a className="circle-link" href="#gallery" aria-label="Explore the collection"><ArrowDownRight size={25} strokeWidth={1} /></a>
          </div>
        </div>
        <p className="hero-caption">Image 01 / The signature signet</p>
      </section>

      <section className="intro section-pad">
        <p className="eyebrow">01 / A considered collection</p>
        <div className="intro-grid">
          <h2>Made slowly.<br /><em>Worn forever.</em></h2>
          <div className="intro-copy"><p>Atelier North creates modern heirlooms for those who notice the details. Every piece is shaped by hand in our London studio, using honest materials and a respect for the craft.</p><a className="text-link" href="#about">Discover our approach <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <section className="gallery section-pad" id="gallery">
        <div className="section-heading"><p className="eyebrow">02 / The collection</p><p className="section-note">Three disciplines. One point of view.</p></div>
        <div className="product-list">
          {products.map((product) => <article className="product-card" key={product.number}>
            <div className="product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" /><span className="product-number">{product.number}</span><a className="product-buy" href={product.href}>Enquire <ArrowUpRight size={15} /></a></div>
            <div className="product-meta"><div><h3>{product.name}</h3><p>{product.type}</p></div><a href={product.href} className="arrow-button" aria-label={`Enquire about ${product.name}`}><ArrowUpRight size={18} /></a></div>
          </article>)}
        </div>
      </section>

      <section className="manifesto"><div className="manifesto-inner"><p className="eyebrow light">The North standard</p><h2>Less, but<br /><em>better.</em></h2><p className="manifesto-copy">We believe the most enduring objects are the ones that reveal something new over time. No noise. No shortcuts. Just material, proportion, and the human hand.</p></div></section>

      <section className="about section-pad" id="about">
        <div className="about-grid"><div><p className="eyebrow">03 / The atelier</p><h2>A studio built<br />around <em>craft.</em></h2></div><div className="about-copy"><p>From the first sketch to the final polish, each Atelier North piece passes through the hands of our small team of makers.</p><p>Our work is personal by design. We make in small numbers, offer thoughtful customisation, and believe in repairing what can be kept.</p><a className="text-link" href="#contact">Meet the makers <ArrowUpRight size={15} /></a></div></div>
        <div className="atelier-strip"><div className="atelier-block dark-block"><span>Studio notes</span><strong>Handmade in<br />London</strong></div><div className="atelier-block warm-block"><span>Material first</span><strong>Gold · Steel<br />Leather</strong></div><div className="atelier-block pale-block"><span>Since 2014</span><strong>Built for<br />the long run</strong></div></div>
      </section>

      <section className="contact section-pad" id="contact"><div className="contact-grid"><div><p className="eyebrow">04 / Start a conversation</p><h2>Let&apos;s make<br /><em>something lasting.</em></h2><p className="contact-note">For commissions, sourcing enquiries, or just to say hello.</p><div className="socials"><a href="mailto:studio@ateliernorth.co">studio@ateliernorth.co</a><a href="#top">Instagram</a></div></div><form className="contact-form"><label>Name<input type="text" name="name" placeholder="Your name" /></label><label>Email<input type="email" name="email" placeholder="you@email.com" /></label><label>How can we help?<textarea name="message" rows={3} placeholder="Tell us a little about your project" /></label><button type="submit" className="form-submit">Send enquiry <ArrowUpRight size={17} /></button></form></div></section>

      <footer className="site-footer"><a className="wordmark" href="#top">ATELIER <span>NORTH</span></a><p>Objects with intention.</p><p>© 2026 Atelier North</p></footer>
    </main>
  )
}
