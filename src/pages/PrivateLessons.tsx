import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import GetInTouch from '../components/GetInTouch'

export default function PrivateLessons() {
  return (
    <div>
      <PageHeader
        title="Private Lessons"

      />

      {/* Main Content */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-1 bg-amber-400 mb-6 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
                Personalized Training for Your Athlete
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Our private lessons are tailored to your child's goals. Whether you're in need of
                  extra help to perfect a specific skill, or want to advance faster, our facility
                  provides private lessons with our team of experienced coaches.
                </p>
                <p>
                  Private lessons are scheduled in advance and can be customized to focus on set
                  skills, strength and conditioning, flexibility, and overall training. Contact our
                  office today to review your private lesson needs!
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-block bg-amber-400 text-purple-900 font-bold px-8 py-4 rounded-full
                    hover:bg-amber-300 transition-colors text-lg shadow-md"
                >
                  Sign Up Today
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://picsum.photos/seed/ccgems-private-lesson/600/600"
                alt="Private lessons coaching"
                className="rounded-2xl shadow-lg w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-purple-50 py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
            What We Can Work On
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🤸', title: 'Specific Skills', text: 'Target and perfect individual cheerleading or tumbling skills.' },
              { icon: '💪', title: 'Strength & Conditioning', text: 'Build the athletic foundation for peak performance.' },
              { icon: '🧘', title: 'Flexibility', text: 'Improve range of motion essential for advanced cheerleading.' },
              { icon: '🏋️', title: 'Overall Training', text: 'Comprehensive sessions covering all aspects of your athlete\'s development.' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-purple-100">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-purple-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-12">How It Works</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Contact Us', text: 'Reach out to our office to discuss your athlete\'s goals and needs.' },
              { step: '2', title: 'Schedule Your Session', text: 'We\'ll find a time that works for you and match you with the right coach.' },
              { step: '3', title: 'Start Training', text: 'Your personalized lesson begins — focused entirely on your athlete\'s growth.' },
            ].map(s => (
              <div key={s.step} className="flex gap-5 items-start text-left bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-purple-900 text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-600">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block bg-purple-700 text-white font-bold px-8 py-4 rounded-full
                hover:bg-purple-600 transition-colors text-lg shadow-md"
            >
              Contact Us to Get Started
            </Link>
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>
  )
}
