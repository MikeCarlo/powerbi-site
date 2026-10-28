/**
 * Promo cards for other apps and products.
 *
 * Add a new promo:
 *   1. Build the card as an Astro component in src/promos/cards/ that takes
 *      `href` and `label` props, puts `data-promo-link` on its link, and
 *      prefixes its CSS classes so they cannot clash with site styles.
 *   2. Register it in `promoCards` in src/components/promo/Promo.astro.
 *   3. Add an entry below. Set `placements` to choose where it shows.
 *
 * Placements:
 *   - `home`    inline card at the top of the home page, above Recent Posts.
 *   - `popover` floating, dismissible card on every blog post page.
 * Only the first active promo per placement is shown.
 *
 * Every link gets UTMs: utm_source=powerbi.tips, utm_medium=promo_card (home)
 * or promo_popover (post), utm_campaign=<id>, utm_content=home or the post slug.
 * Clarity events: promo_view, promo_click, promo_dismiss, plus the same names
 * suffixed with `_<id>_<placement>`. Tags: promo_id, promo_placement.
 */
export type PromoPlacement = 'home' | 'popover';

export interface Promo {
  /** Stable id. Used as utm_campaign, Clarity tag and dismiss storage key. */
  id: string;
  /** Destination URL without UTMs. */
  href: string;
  /** Accessible name for the card link. */
  label: string;
  /** Key of the card component in Promo.astro. */
  card: string;
  placements: PromoPlacement[];
  enabled: boolean;
  /** Optional ISO date window. Checked at build time. */
  start?: string;
  end?: string;
  /** Max width in px of the inline home card (default 400). The card scales with its width. */
  homeMaxWidth?: number;
  /** Days the popover stays hidden after the X is clicked. */
  dismissDays?: number;
}

export const promos: Promo[] = [
  {
    id: 'this_or_that',
    href: 'https://thisorthat.tips/',
    label: 'Play the Daily This or That at thisorthat.tips',
    card: 'this-or-that',
    placements: ['home', 'popover'],
    enabled: true,
    dismissDays: 7,
    homeMaxWidth: 400,
  },
];

export const UTM_MEDIUM: Record<PromoPlacement, string> = {
  home: 'promo_card',
  popover: 'promo_popover',
};

export function activePromo(placement: PromoPlacement, now = new Date()): Promo | undefined {
  return promos.find(
    (p) =>
      p.enabled &&
      p.placements.includes(placement) &&
      (!p.start || new Date(p.start) <= now) &&
      (!p.end || new Date(p.end) >= now),
  );
}

export function promoHref(promo: Promo, placement: PromoPlacement, content: string): string {
  const url = new URL(promo.href);
  url.searchParams.set('utm_source', 'powerbi.tips');
  url.searchParams.set('utm_medium', UTM_MEDIUM[placement]);
  url.searchParams.set('utm_campaign', promo.id);
  url.searchParams.set('utm_content', content);
  return url.toString();
}
