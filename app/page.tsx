import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const layers = [
  ['Toppstoff', 'Pustende tekstil, RoHS'],
  ['Y-elektroder', '20 ledende baner'],
  ['Sensorfilm', '0,8–200 kPa, ±15 %'],
  ['X-elektroder', '400 målepunkter'],
  ['Bunnstoff', 'Limt eller sydd'],
]

const dashboardFeatures = [
  ['Varsler til skjerm og telefon', 'Personalet får beskjed når noen trenger avlastning.'],
  ['Sanntidsindikatorer', 'Status og tid i samme stilling for hver bruker.'],
  ['Romlig trykkart', 'Viser hvor trykket bygger seg opp, med grovt vektestimat.'],
  ['Tilpassbare risikoindekser', 'Egne terskler per enhet eller per bruker.'],
  ['Opptak og avspilling', 'Se tidligere hendelser på nytt.'],
  ['Lett og avansert modus', 'Lett for elever og helsearbeidere, avansert for analytikere.'],
]

function FeatureCard({
  id,
  title,
  image,
  alt,
  children,
}: {
  id: string
  title: string
  image: string
  alt: string
  children: React.ReactNode
}) {
  return (
    <article id={id} className="feature-card group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand/40 md:p-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{id === 'produkt' ? 'Oppbygning' : 'Dashbord'}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          <div className="feature-card-details mt-7">{children}</div>
        </div>
        <div className="overflow-hidden rounded-2xl bg-background p-4 ring-1 ring-border/70">
          <Image src={image} alt={alt} width={1200} height={900} className="h-auto w-full object-contain transition duration-500 group-hover:scale-[1.03]" />
        </div>
      </div>
    </article>
  )
}

export default function Page() {
  return <div id="top" className="min-h-screen bg-background"><SiteHeader /><main>
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
      <div><p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand">Verdan Medical</p><h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-foreground md:text-7xl">Få kontroll over trykksår <span className="text-brand">før de oppstår.</span></h1><p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">En tynn sensormatte i setet viser hvor trykket bygger seg opp, varsler personalet i tide og dokumenterer avlastningen automatisk.</p><div className="mt-12 grid gap-7 sm:grid-cols-3">{[['1','Måle','Kontinuerlig trykkart av setet, under 5 mm tynt.'],['2','Varsle','Personalet får beskjed når et område har vært belastet for lenge.'],['3','Dokumentere','Hver avlastning registreres automatisk.']].map(([n,t,d]) => <div key={n}><span className="text-4xl font-semibold text-brand">{n}</span><h2 className="mt-3 font-semibold">{t}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{d}</p></div>)}</div><a href="mailto:hello@verdanmedical.com" className="mt-10 inline-flex rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-strong">Be om en demo</a></div>
      <Image src="/images/wheelchair-hero.png" alt="Rullestol med Verdan Medical sensormatte" width={1000} height={1000} className="w-full rounded-3xl object-contain" priority />
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="flex flex-col gap-8">
        <FeatureCard id="produkt" title="En tekstilsensor i fem lag i en setepute, på stolene dere allerede har" image="/images/layers-iso.png" alt="Eksplodert visning av Verdan Medical sensorteknologi og rullestol">
          <ol className="flex flex-col gap-4">{layers.map(([title, description], index) => <li key={title} className={index === 2 ? 'rounded-xl bg-background p-4 ring-1 ring-brand/20' : 'flex gap-4'}><span className="font-semibold text-brand">{index + 1}</span><span><strong className="font-semibold">{title}</strong><br /><span className="text-sm text-muted-foreground">{description}</span></span></li>)}</ol><p className="mt-6 font-semibold text-brand">Montert: under 5 mm</p><p className="mt-1 text-sm text-muted-foreground">Brukes på: standard rullestol</p>
        </FeatureCard>

        <FeatureCard id="dashbord" title="Ett oversiktlig dashbord som viser hvem som trenger avlastning, og hvor" image="/images/dashboard.png" alt="Skjermbilde av Verdan Medical dashbord">
          <div className="grid gap-4">{dashboardFeatures.map(([title, description]) => <div key={title} className="border-b border-border pb-4"><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p></div>)}</div><div className="mt-6 grid gap-3 sm:grid-cols-2">{[['Nettleser-dashbord','Ingen installasjon'],['Sporbarhetslogg','Hvem gjorde hva, og når'],['PIN-beskyttelse','På alle endringer og kvitteringer'],['Selvdiagnose','Varsler ved defekt sensor']].map(([title, description]) => <div key={title}><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{description}</p></div>)}</div>
        </FeatureCard>
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-2"><div><h2 className="text-2xl font-semibold">Hva endres</h2><div className="mt-6 flex flex-col gap-4 text-muted-foreground"><p><strong className="text-foreground">Brukere:</strong> avlastes når vevet trenger det, ikke etter fast klokke.</p><p><strong className="text-foreground">Personale:</strong> sanntidskart, prioriterte varsler, automatisk logging.</p><p><strong className="text-foreground">Ledere:</strong> oversikt over enheten og full sporbarhet.</p><p><strong className="text-foreground">Innkjøp:</strong> tillegg til eksisterende stoler, driftsmodell.</p></div></div><div><h2 className="text-2xl font-semibold">Slik kommer dere i gang</h2><ol className="mt-6 flex flex-col gap-5">{[['1','Pilot — én enhet'],['2','Evaluere — varsler, personaltid, dokumentasjon'],['3','Utrulling — enhet for enhet, rammeavtale']].map(([number, text]) => <li key={number} className="flex gap-4"><span className="font-semibold text-brand">{number}</span><span>{text}</span></li>)}</ol></div></div>
    </section>

    <section id="kontakt" className="bg-brand"><div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-16 text-white lg:flex-row lg:items-center lg:justify-between lg:px-10"><div><h2 className="text-3xl font-semibold">Vil dere teste det i egen enhet?</h2><p className="mt-2 text-white/80">Ta kontakt, så setter vi opp en pilot.</p><a href="mailto:hello@verdanmedical.com" className="mt-4 inline-block text-sm underline underline-offset-4">hello@verdanmedical.com</a></div><a href="mailto:hello@verdanmedical.com?subject=Demo%20av%20Verdan%20Medical" className="inline-flex w-fit rounded-full bg-white px-6 py-3 font-semibold text-brand">Be om en demo</a></div></section>
  </main><SiteFooter /></div>
}
