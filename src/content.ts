import siteJson from './content/site.json'

/**
 * Site content editable through Pages CMS (see `.pages.yml`).
 *
 * The JSON is bundled at build time, so a push to `master` — whether from the
 * CMS or from a local commit — is what makes changes go live.
 */
export type SiteContent = {
  homePromo: {
    /** Hides the entire promo section on the homepage when false. */
    enabled: boolean
    /** Small pill above the heading. Leave blank to hide just the pill. */
    chipText: string
    heading: string
    /** Public path, e.g. `/uploads/flyer.jpg`. Leave blank to hide just the image. */
    image: string
  }
  /** Destination of the "View Schedule" button on the Schedule page. */
  scheduleUrl: string
}

export const content = siteJson as SiteContent
