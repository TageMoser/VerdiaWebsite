import { BrandMark } from '@/components/brand-mark'

export function SiteFooter() {
  return <footer className="border-t border-border bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-10"><div><div className="flex items-center gap-3"><BrandMark className="h-6 w-auto text-brand" /><span className="font-semibold">Verdan Medical</span></div><p className="mt-4 text-sm text-muted-foreground">Utviklet i Norge</p></div><div className="text-sm text-muted-foreground"><a href="mailto:hello@verdanmedical.com" className="font-medium text-foreground hover:text-brand">hello@verdanmedical.com</a><p className="mt-2">CE-merking etter EU MDR er under forberedelse.</p><p className="mt-2">© {new Date().getFullYear()} Verdan Medical</p></div></div></footer>
}
