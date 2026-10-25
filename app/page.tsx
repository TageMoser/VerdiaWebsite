import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const stats = [
  ['7–15 %', 'av sykehuspasienter i Norge har trykksår'],
  ['27 %', 'av beboere på sykehjem har trykksår'],
  ['700 MNOK', 'i direkte behandlingskostnader hvert år'],
  ['1,4 MNOK', 'koster ett enkelt trykksår i stadium IV'],
]

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

const team = [
  ['team-andreas.png', 'Andreas Sørensen', 'Daglig leder og medgründer', 'MSc Kybernetikk og robotikk, NTNU'],
  ['team-even.png', 'Even Mælum', 'Teknologidirektør og medgründer', 'MSc Robotikk og automasjon, NTNU'],
  ['team-tage.png', 'Tage Fossgard-Moser', 'Finansdirektør og medgründer', 'BSc International Business, CBS'],
]

export default function Page() {
  return <div className="min-h-screen bg-background"><SiteHeader /><main>
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
      <div><p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand">Verdan Medical</p><h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-foreground md:text-7xl">Få kontroll over trykksår <span className="text-brand">før de oppstår.</span></h1><p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">En tynn sensormatte i setet viser hvor trykket bygger seg opp, varsler personalet i tide og dokumenterer avlastningen automatisk.</p><div className="mt-12 grid gap-7 sm:grid-cols-3">{[['1','Måle','Kontinuerlig trykkart av setet, under 5 mm tynt.'],['2','Varsle','Personalet får beskjed når et område har vært belastet for lenge.'],['3','Dokumentere','Hver avlastning registreres automatisk.']].map(([n,t,d]) => <div key={n}><span className="text-4xl font-semibold text-brand">{n}</span><h2 className="mt-3 font-semibold">{t}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{d}</p></div>)}</div><a href="mailto:hello@verdanmedical.com" className="mt-10 inline-flex rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-strong">Be om en demo</a></div>
      <Image src="/images/wheelchair-hero.png" alt="Rullestol med Verdan Medical sensormatte" width={1000} height={1000} className="w-full rounded-3xl object-contain" priority />
    </section>

    <section id="problemet" className="border-y border-border bg-white"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Problemet</p><h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">Trykksår er et problem som forekommer ofte, er kostbart og kan forebygges</h2><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map(([n,d]) => <div key={n} className="rounded-2xl bg-background p-6"><p className="text-4xl font-semibold text-brand">{n}</p><p className="mt-3 leading-6 text-muted-foreground">{d}</p></div>)}</div><h3 className="mt-20 text-2xl font-semibold">Hvorfor det blir verre</h3><div className="mt-7 grid gap-8 md:grid-cols-3">{[['+120 %','Flere eldre','Gruppen over 80 år vokser kraftig mot 2040, og risikogruppen dobles.'],['28 000','Færre sykepleiere','Mangelen på sykepleiere i 2030 gjør at tiden ikke strekker til.'],['65+ min','Manuelle rutiner','Brukes per vakt på vendeskjemaer og manuell oppfølging.']].map(([n,t,d]) => <div key={t}><p className="text-3xl font-semibold text-brand">{n}</p><h4 className="mt-2 font-semibold">{t}</h4><p className="mt-1 leading-6 text-muted-foreground">{d}</p></div>)}</div><p className="mt-12 text-xs text-muted-foreground">Kilder: SSB, Helsedirektoratet, Perspektivmeldingen 2024</p></div></section>

    <section id="produkt" className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">En tekstilsensor i fem lag i en setepute, på stolene dere allerede har</h2><div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Oppbygning</p><ol className="mt-6 flex flex-col gap-5">{layers.map(([t,d],i) => <li key={t} className={i===2 ? 'rounded-xl bg-white p-4 shadow-sm ring-1 ring-brand/20' : 'flex gap-4'}><span className="font-semibold text-brand">{i+1}</span><span><strong className="font-semibold">{t}</strong><br/><span className="text-sm text-muted-foreground">{d}</span></span></li>)}</ol><p className="mt-8 font-semibold text-brand">Montert: under 5 mm</p><p className="mt-1 text-sm text-muted-foreground">Brukes på: standard rullestol</p></div><Image src="/images/layers-iso.png" alt="Eksplodert visning av Verdan Medical sensorteknologi og rullestol" width={1200} height={900} className="w-full rounded-3xl object-contain" /></div><div className="mt-20 grid gap-12 md:grid-cols-2"><div><h3 className="text-2xl font-semibold">Hva endres</h3><div className="mt-6 flex flex-col gap-4 text-muted-foreground"><p><strong className="text-foreground">Brukere:</strong> avlastes når vevet trenger det, ikke etter fast klokke.</p><p><strong className="text-foreground">Personale:</strong> sanntidskart, prioriterte varsler, automatisk logging.</p><p><strong className="text-foreground">Ledere:</strong> oversikt over enheten og full sporbarhet.</p><p><strong className="text-foreground">Innkjøp:</strong> tillegg til eksisterende stoler, driftsmodell.</p></div></div><div><h3 className="text-2xl font-semibold">Slik kommer dere i gang</h3><ol className="mt-6 flex flex-col gap-5">{[['1','Pilot — én enhet'],['2','Evaluere — varsler, personaltid, dokumentasjon'],['3','Utrulling — enhet for enhet, rammeavtale']].map(([n,t]) => <li key={n} className="flex gap-4"><span className="font-semibold text-brand">{n}</span><span>{t}</span></li>)}</ol></div></div></section>

    <section id="dashbord" className="bg-foreground text-white"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">Ett oversiktlig dashbord som viser hvem som trenger avlastning, og hvor</h2><div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center"><Image src="/images/dashboard.png" alt="Skjermbilde av Verdan Medical dashbord" width={1200} height={900} className="w-full rounded-2xl object-contain shadow-2xl" /><div className="grid gap-5">{dashboardFeatures.map(([t,d]) => <div key={t} className="border-b border-white/20 pb-5"><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm leading-6 text-white/65">{d}</p></div>)}</div></div><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[['Nettleser-dashbord','Ingen installasjon'],['Sporbarhetslogg','Hvem gjorde hva, og når'],['PIN-beskyttelse','På alle endringer og kvitteringer'],['Selvdiagnose','Varsler ved defekt sensor']].map(([t,d]) => <div key={t} className="rounded-xl border border-white/15 p-5"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-white/65">{d}</p></div>)}</div></div></section>

    <section id="om-oss" className="mx-auto max-w-7xl px-6 py-20 lg:px-10"><h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">Utviklet i Norge, sensoren produseres av vår partner i Kina</h2><div className="mt-12 grid gap-4 md:grid-cols-3">{[['Utviklet av oss','Programvare, logikk og data er laget av Verdan Medical i Norge, sammen med klinisk tilpasning og støtte.'],['Produsert i Kina','Sensoren og tekstilet produseres av en etablert produksjonspartner i Kina.'],['Lokalt og trygt','Data lagres og prosesseres lokalt, ingen sky nødvendig. CE-merking etter EU MDR er under forberedelse.']].map(([t,d]) => <div key={t} className="rounded-2xl bg-white p-7 shadow-sm"><h3 className="text-xl font-semibold">{t}</h3><p className="mt-4 leading-7 text-muted-foreground">{d}</p></div>)}</div><div className="mt-20 grid gap-10 sm:grid-cols-3">{team.map(([src,name,role,bio]) => <div key={name}><Image src={`/images/${src}`} alt={name} width={320} height={320} className="aspect-square w-full rounded-full object-cover grayscale" /><h3 className="mt-5 text-xl font-semibold">{name}</h3><p className="mt-1 text-sm font-semibold text-brand">{role}</p><p className="mt-2 text-sm text-muted-foreground">{bio}</p></div>)}</div></section>

    <section id="kontakt" className="bg-brand"><div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-16 text-white lg:flex-row lg:items-center lg:justify-between lg:px-10"><div><h2 className="text-3xl font-semibold">Vil dere teste det i egen enhet?</h2><p className="mt-2 text-white/80">Ta kontakt, så setter vi opp en pilot.</p><a href="mailto:hello@verdanmedical.com" className="mt-4 inline-block text-sm underline underline-offset-4">hello@verdanmedical.com</a></div><a href="mailto:hello@verdanmedical.com?subject=Demo%20av%20Verdan%20Medical" className="inline-flex w-fit rounded-full bg-white px-6 py-3 font-semibold text-brand">Be om en demo</a></div></section>
  </main><SiteFooter /></div>
}
