import PageHeader from '../components/PageHeader'
import GetInTouch from '../components/GetInTouch'

const facilityImages = [
  { seed: 'ccgems-facility1', label: 'Main Floor' },
  { seed: 'ccgems-facility2', label: 'Tumbling Area' },
  { seed: 'ccgems-facility3', label: 'Training Space' },
  { seed: 'ccgems-facility4', label: 'Practice Floor' },
  { seed: 'ccgems-facility5', label: 'Conditioning Area' },
  { seed: 'ccgems-facility6', label: 'Lobby' },
]

export default function Facility() {
  return (
    <div>
      <PageHeader
        title="Our Facility"

      />

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Our state-of-the-art facility is designed to give every athlete the best possible
            training environment. From our main practice floor to our dedicated tumbling area,
            every inch of Cape Coral Gems is built with your athlete in mind.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
            Take a Look Around
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {facilityImages.map((img, i) => (
              <div key={img.seed} className={`overflow-hidden rounded-2xl shadow-sm ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                <img
                  src={`https://picsum.photos/seed/${img.seed}/600/400`}
                  alt={img.label}
                  className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="bg-white px-4 py-3">
                  <p className="text-purple-800 font-semibold text-sm">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
            Facility Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏅', title: 'Competition-Ready Floor', text: 'Our main practice floor is designed to match competition conditions.' },
              { icon: '🤸', title: 'Tumbling Area', text: 'Dedicated space with proper mats and equipment for safe tumbling practice.' },
              { icon: '💪', title: 'Conditioning Space', text: 'Strength and conditioning equipment to support overall athletic development.' },
              { icon: '🛡️', title: 'Safety First', text: 'Our facility is designed with athlete safety as the top priority at every turn.' },
              { icon: '📍', title: 'Convenient Location', text: '211 Hancock Bridge Pkwy #3, Cape Coral — easy to find and plenty of parking.' },
              { icon: '👨‍👩‍👧', title: 'Family Friendly', text: 'A welcoming space for athletes and families alike.' },
            ].map(f => (
              <div key={f.title} className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="font-bold text-purple-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>
  )
}
