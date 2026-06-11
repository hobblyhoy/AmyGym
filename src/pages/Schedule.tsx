import PageHeader from '../components/PageHeader'
import GetInTouch from '../components/GetInTouch'
import { SCHEDULE_URL } from '../constants'

export default function Classes() {
  return (
    <div>
      <PageHeader title="Schedule" />

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Please review our upcoming schedule below. Feel free to contact us with any
            additional questions you may have!
          </p>
        </div>
      </section>

      {/* Schedule link */}
      <section className="bg-gray-50 py-16 md:py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
            Upcoming Schedule
          </h2>
          <p className="text-gray-500 text-base md:text-lg mb-10">
            Click the button below to view this month's full class schedule.
          </p>
          <a
            href={SCHEDULE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-700 hover:bg-purple-600 text-white text-lg md:text-xl font-bold px-10 py-5 rounded-2xl shadow-lg transition-colors"
          >
            View Schedule →
          </a>
        </div>
      </section>

      <GetInTouch />
    </div>
  )
}
