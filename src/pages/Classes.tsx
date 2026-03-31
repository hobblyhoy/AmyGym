import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import GetInTouch from '../components/GetInTouch'
import { FACEBOOK_URL, SCHEDULE_CSV_URL } from '../constants'

interface ScheduleDay {
  date: Date
  dateKey: string
  activities: string[]
}

function parseCSV(text: string): ScheduleDay[] {
  const grouped = new Map<string, { date: Date; activities: string[] }>()

  for (const line of text.trim().split('\n')) {
    const commaIdx = line.indexOf(',')
    if (commaIdx === -1) continue
    const dateStr = line.slice(0, commaIdx).trim()
    const activity = line.slice(commaIdx + 1).trim()
    if (!dateStr || !activity) continue

    if (!grouped.has(dateStr)) {
      const [month, day, year] = dateStr.split('/').map(Number)
      grouped.set(dateStr, { date: new Date(year, month - 1, day), activities: [] })
    }
    grouped.get(dateStr)!.activities.push(activity)
  }

  return Array.from(grouped.entries())
    .map(([dateKey, val]) => ({ dateKey, ...val }))
    .filter(day => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return day.date >= today
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function Classes() {
  const [schedule, setSchedule] = useState<ScheduleDay[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(SCHEDULE_CSV_URL)
      .then(res => res.text())
      .then(text => {
        setSchedule(parseCSV(text))
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <PageHeader title="Classes" />

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
            Please review our upcoming schedule below. Feel free to contact us with any
            additional questions you may have!
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

      {/* Schedule */}
      <section className="bg-gray-50 py-12 md:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-900 text-center mb-10">
            Upcoming Schedule
          </h2>

          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-8 h-8 border-4 border-purple-200 border-t-purple-700 rounded-full animate-spin mb-4" />
              <p className="text-gray-500">Loading schedule...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-20 bg-white rounded-2xl border border-red-100">
              <p className="text-red-500 font-medium">Unable to load schedule.</p>
              <p className="text-gray-400 text-sm mt-1">Please check back soon or contact us directly.</p>
            </div>
          )}

          {!loading && !error && schedule.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-purple-100">
              <div className="text-5xl mb-4">📅</div>
              <p className="text-purple-400 font-medium">No upcoming classes scheduled yet.</p>
              <p className="text-gray-400 text-sm mt-1">Check back soon or follow us on Facebook for updates.</p>
            </div>
          )}

          {!loading && !error && schedule.length > 0 && (
            <div className="space-y-4">
              {schedule.map(day => (
                <div key={day.dateKey} className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden">
                  <div className="bg-purple-700 px-5 py-3">
                    <p className="text-white font-semibold text-sm md:text-base">{formatDate(day.date)}</p>
                  </div>
                  <ul className="divide-y divide-gray-50">
                    {day.activities.map((activity, i) => (
                      <li key={i} className="flex items-center gap-3 px-5 py-3">
                        <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <GetInTouch />
    </div>
  )
}
