import PageHeader from '../components/PageHeader'
import GetInTouch from '../components/GetInTouch'
import coachFaith from '../assets/coach_faith.jpeg'
import coachAmy from '../assets/coach_amy.jpeg'
import coachD from '../assets/coach_d.jpeg'
import coachSarah from '../assets/coach_sarah.jpg'

const staff = [
  { name: 'Coach Faith', role: 'Head Coach', img: coachFaith },
  { name: 'Coach Amy', role: 'All Star Coach', img: coachAmy },
  { name: 'Coach D', role: 'Tumbling Coach', img: coachD },
  { name: 'Coach Sarah', role: 'Assistant Coach', img: coachSarah },
]

export default function About() {
  return (
    <div>
      <PageHeader
        title="About Us"

      />

      {/* Intro */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
            We invite you to be part of something bigger than a cheerleading gym! Our staff is
            dedicated to creating a positive, supporting environment that helps our athletes develop
            their strengths while building character and life skills.
          </p>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            We seek to create a lasting impression on the children we work with in our
            family-oriented gym.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-purple-50 py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Positive Environment', text: 'We build athletes up through positive reinforcement and encouragement at every step.', icon: '🌟' },
              { title: 'Character Building', text: 'Sports teach life lessons. We invest in our athletes as people first, athletes second.', icon: '💎' },
              { title: 'Community Trust', text: 'As a local organization, the trust our community places in us is our highest priority.', icon: '🤝' },
              { title: 'Family Oriented', text: 'Every athlete who joins us becomes part of our family — that\'s not just a slogan, it\'s our promise.', icon: '❤️' },
            ].map(val => (
              <div key={val.title} className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100 flex gap-4 items-start">
                <span className="text-3xl flex-shrink-0">{val.icon}</span>
                <div>
                  <h3 className="font-bold text-purple-900 text-lg mb-1">{val.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{val.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-4">
            Meet Our Coaches
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            Experienced, passionate, and dedicated to your athlete's growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {staff.map(member => (
              <div key={member.name} className="text-center group">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/20 transition-colors duration-300 rounded-2xl" />
                </div>
                <h3 className="text-xl font-bold text-purple-900">{member.name}</h3>
                <p className="text-amber-600 font-medium mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>
  )
}
