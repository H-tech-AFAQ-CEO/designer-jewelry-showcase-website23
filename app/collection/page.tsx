'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const pieces = [
  { name: 'Sculpted Signet', type: 'Rings / 18k yellow gold', image: '/ring-collection.png', text: 'A softened signet with a quiet, architectural profile.' },
  { name: 'The No. 03', type: 'Bespoke watches / Automatic', image: '/watch-collection.png', text: 'A restrained timepiece built around the essentials.' },
  { name: 'Cognac Calfskin', type: 'Leather straps / Hand-stitched', image: '/strap-collection.png', text: 'Vegetable-tanned leather that gets better with time.' },
]

export default function CollectionPage() {
  return <main className="site-shell inner-page"><header className="inner-header"><a className="wordmark" href="/">ATELIER <span>NORTH</span></a><nav><a href="/collection">Collection</a><a href="/atelier">The atelier</a><a href="/journal">Journal</a><a href="/contact">Contact</a></nav></header><section className="page-hero"><p className="eyebrow">01 / The collection</p><h1>Objects to<br /><em>keep close.</em></h1><p>Three disciplines, one point of view. Designed in London, made slowly, and intended for every day.</p></section><section className="collection-grid section-pad">{pieces.map((piece, index) => <article className="collection-piece" key={piece.name}><div className="collection-piece-image"><Image src={piece.image} alt={piece.name} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><p className="eyebrow">0{index + 1} / {piece.type}</p><h2>{piece.name}</h2><p>{piece.text}</p><a className="text-link" href="/contact">Enquire <ArrowUpRight size={15} /></a></article>)}</section><section className="quote-band"><p>“The best objects become part of your language.”</p><span>— Studio note no. 08</span></section><footer className="site-footer"><a className="wordmark" href="/">ATELIER <span>NORTH</span></a><p>© 2026 Atelier North</p></footer></main>
}
