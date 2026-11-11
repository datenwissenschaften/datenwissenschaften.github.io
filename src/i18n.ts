import { computed } from 'vue'
import { useRoute } from 'vue-router'

export type Locale = 'en' | 'de'

export const locales: Locale[] = ['en', 'de']

export const SITE_URL = 'https://www.datenwissenschaften.com'

// One entry per page; each locale gets its own, indexable URL. The bare root `/`
// is not a page: nginx redirects it to /en or /de (see nginx.conf).
export const pages = {
  home: { en: '/en', de: '/de' },
  services: { en: '/en/services', de: '/de/leistungen' },
  work: { en: '/en/work', de: '/de/projekte' },
  about: { en: '/en/about', de: '/de/ueber-mich' },
  contact: { en: '/en/contact', de: '/de/kontakt' },
  'case-study': { en: '/en/case-study', de: '/de/fallstudien' },
  products: { en: '/en/products', de: '/de/produkte' },
  imprint: { en: '/en/imprint', de: '/de/impressum' },
} as const

export type PageKey = keyof typeof pages

/** Remembers an explicit language choice so the root redirect respects it. */
export const LANGUAGE_COOKIE = 'lang'

export type Localized<T> = Record<Locale, T>

export function useLocale() {
  const route = useRoute()
  const locale = computed<Locale>(() => (route.meta.locale as Locale | undefined) ?? 'en')
  const pageKey = computed(() => route.meta.page as PageKey | undefined)

  /** Path of a page in the current locale, optionally with a hash. */
  const path = (page: PageKey, hash?: string) => `${pages[page][locale.value]}${hash ? `#${hash}` : ''}`

  /** Path of the current page in another locale, used by the language switch. */
  const alternatePath = (target: Locale) => (pageKey.value ? pages[pageKey.value][target] : pages.home[target])

  return { locale, pageKey, path, alternatePath }
}

/** Picks the current locale's copy from a `{ en, de }` content object. */
export function useContent<T>(content: Localized<T>) {
  const { locale } = useLocale()
  return computed(() => content[locale.value])
}
