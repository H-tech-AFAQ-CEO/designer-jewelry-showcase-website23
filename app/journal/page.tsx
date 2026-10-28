import Image from 'next/image'

const entries = [
  ['01', 'On buying less, better', 'A note on choosing objects that earn their place.', '/ring-collection.png'],
  ['02', 'The beauty of a daily watch', 'Why the pieces we wear most become the most personal.', '/watch-collection.png'],
  ['03', 'Material study: calfskin', 'Following a leather strap from hide to wrist.', '/strap-collection.png'],
]

export default function JournalPage() {
  return <main className="site-shell inner-page"><header className="inner-header"><a className="wordmark" href="/">ATELIER <span>NORTH</span></a><nav><a href="/collection">Collection</a><a href="/atelier">The atelier</a><a href="/journal">Journal</a><a href="/contact">Contact</a></nav></header><section className="page-hero journal-hero"><p className="eyebrow">03 / Journal</p><h1>Notes on<br /><em>the considered life.</em></h1><p>Stories, observations, and studio notes from Atelier North.</p></section><section className="journal-list section-pad">{entries.map(([number, title, description, image]) => <article className="journal-entry" key={number}><div className="journal-image"><Image src={image} alt="" fill sizes="(max-width: 700px) 100vw, 38vw" /></div><div><p className="eyebrow">{number} / Studio journal</p><h2>{title}</h2><p>{description}</p><a className="text-link" href="/contact">Read note <span>↗</span></a></div></article>)}</section><footer className="site-footer"><a className="wordmark" href="/">ATELIER <span>NORTH</span></a><p>Objects with intention.</p><p>© 2026 Atelier North</p></footer></main>
}
