import PageHeader from '../components/PageHeader'
import GetInTouch from '../components/GetInTouch'
import { FACEBOOK_URL } from '../constants'

export default function Classes() {
  return (
    <div>
      <PageHeader
        title="Classes"

      />

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
            Please review our class calendar. Classes can be selected and paid for by clicking
            the appropriate date/class. Feel free to contact our office with any additional
            questions you may have!
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We are constantly adding and changing new classes. Please make sure you follow our{' '}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 font-semibold hover:text-purple-500 transition-colors"
            >
              Facebook page
            </a>{' '}
            for any new updates!
          </p>
        </div>
      </section>

      {/* Calendar Placeholder */}
      <section className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 text-center mb-10">
            The District YSA's Calendar
          </h2>
          <div className="bg-white rounded-2xl border-2 border-dashed border-purple-200 min-h-96 flex items-center justify-center shadow-sm">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">📅</div>
              <p className="text-purple-400 text-lg font-medium">Calendar Coming Soon</p>
              <p className="text-gray-400 mt-2 text-sm">
                Check back soon or follow us on Facebook for class updates
              </p>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>
  )
}
