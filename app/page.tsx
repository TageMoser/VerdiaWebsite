import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Statement } from '@/components/statement'
import { FeatureRow } from '@/components/feature-row'
import { UseCases } from '@/components/use-cases'
import { MetricsTable } from '@/components/metrics-table'
import { CallToAction, SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Statement />

        <FeatureRow
          eyebrow="Sensorer"
          titleLead="Kontinuerlig trykkmåling"
          title="i setet."
          body="Et tett sensornettverk måler trykket i setet, i lår og i de områdene som får mest belastning under bruk. I stedet for å gjette mellom justeringer ser brukeren eller personalet hvor kraften samler seg og hvordan den endrer seg når stolen justeres."
          points={[
            'Hundrevis av trykkpunkter, målt kontinuerlig',
            'Forseglet sensorpanel tilpasset stol og rullestol',
            'Ingen ekstra utstyr eller klumpete tilkoblinger',
            'Fungerer i en vanlig daglig bruk med enkel justering',
          ]}
          visual={
            <Image
              src="/images/layers-iso.png"
              alt="Eksplodert sensorlag med rullestol"
              width={1200}
              height={900}
              className="w-full rounded-xl object-contain ring-1 ring-border"
            />
          }
        />

        <FeatureRow
          reverse
          eyebrow="Innsikt"
          titleLead="Levende varmekart og analyse"
          title="som er lett å lese."
          body="Rådata om trykk blir til et tydelig bilde av setet og de områdene som får mest belastning. Brukeren eller personalet ser når et område har vært under høyt trykk for lenge, og forstår mønsteret bak en advarsel i stedet for bare en alarm."
          points={[
            'Varmekart av setet med enkel risikofargeskala',
            'Trender over minutter og timer',
            'Trykk og belastningssporing per område',
            'Lokalt grensesnitt uten behov for skytilkobling',
          ]}
          visual={
            <Image
              src="/images/dashboard.png"
              alt="Skjermbilde av Verdan Medical dashbord"
              width={1200}
              height={900}
              className="w-full rounded-xl object-contain ring-1 ring-border"
            />
          }
        />

        <FeatureRow
          eyebrow="Handling"
          titleLead="Automatiske risikovarsler"
          title="som styrer riktig justering."
          body="Når trykket holder seg høyt i ett område over en trygg tidsgrense, varsler Verdan Stol brukeren eller personalet om justering. Det erstatter en rigid rutine med en mer proaktiv oppfølging av det som faktisk skjer i setet."
          points={[
            'Terskel- og belastningsvarsler, tilpasset brukeren',
            'Rutet til skjerm eller telefon i samme arbeidsflyt',
            'Logg for justeringer og belastningshistorikk',
            'Tydelig prioritering av de mest kritiske setepunktene',
          ]}
          visual={
            <div className="overflow-hidden rounded-xl bg-hero ring-1 ring-border">
              <Image
                src="/images/dashboard.png"
                alt="Varselvisning i Verdan Medical dashbord"
                width={1200}
                height={900}
                className="h-full w-full object-cover object-left"
              />
            </div>
          }
        />

        <FeatureRow
          reverse
          eyebrow="Holdbarhet"
          titleLead="Bygget for hverdagens bruk"
          title="i en stol eller rullestol."
          body="Bruk i hverdagen krever enkelhet, hygiene og robusthet. Verdan Stol er utviklet som et tett, forseglet sensorelement som tåler rengjøring, daglig bruk og stadig tilpasning i arbeid med brukeren."
          points={[
            'Helt forseglet mot væsker og rengjøring',
            'Lav profil uten å påvirke komforten',
            'Enkel å ta i bruk i eksisterende oppsett',
            'Personvern innebygd: kun trykkdata, ingen bilder',
          ]}
          visual={
            <Image
              src="/images/wheelchair-hero.png"
              alt="Rullestol med Verdan Medical sensormatte"
              width={1200}
              height={900}
              className="w-full rounded-xl object-contain ring-1 ring-border"
            />
          }
        />

        <UseCases />
        <MetricsTable />
        <CallToAction />
      </main>
      <SiteFooter />
    </div>
  )
}
