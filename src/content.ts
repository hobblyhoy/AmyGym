import homeJson from './content/home.json'
import scheduleJson from './content/schedule.json'

/**
 * Site content editable through Pages CMS (see `.pages.yml`).
 *
 * One JSON file per CMS tab. The JSON is bundled at build time, so a push to
 * `master` — whether from the CMS or from a local commit — is what makes
 * changes go live.
 */
export type HomeContent = {
  promo: {
    /** Hides the entire promo section on the homepage when false. */
    enabled: boolean
    /** Small pill above the heading. Leave blank to hide just the pill. */
    chipText: string
    heading: string
    /** Public path, e.g. `/uploads/flyer.jpg`. Leave blank to hide just the image. */
    image: string
  }
}

export type ScheduleContent = {
  /** Destination of the "View Schedule" button on the Schedule page. */
  url: string
}

export const home = homeJson as HomeContent
export const schedule = scheduleJson as ScheduleContent
