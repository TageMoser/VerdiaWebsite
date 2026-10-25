import { BrandMark } from '@/components/brand-mark'

export function SiteHeader() {
  return <header className="sticky top-0 z-20 border-b border-border/70 bg-background/95 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"><a href="#top" className="flex items-center gap-3" aria-label="Verdan Medical"><BrandMark className="h-6 w-auto text-brand" /><span className="text-lg font-semibold tracking-tight">Verdan<span className="text-muted-foreground"> Medical</span></span></a><a href="mailto:hello@verdanmedical.com" className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-strong">Be om en demo</a></div></header>
}
