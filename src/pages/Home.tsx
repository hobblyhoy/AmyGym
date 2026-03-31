import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-white text-center px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/ccgems-hero/1400/800)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-purple-900/70" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-amber-400 font-semibold text-lg md:text-xl mb-3 tracking-widest uppercase">
            Cape Coral, FL
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Cape Coral Gems<br />
            <span className="text-amber-400">Cheerleading</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Cape Coral Gems supports and elevates all athletes to be their very best. As an
            all-inclusive All-Star cheerleading team in Cape Coral, we offer a safe, respectful,
            and competitive environment. Our coaches teach positive reinforcements, sportsmanship,
            and offer the best training in cheerleading and tumbling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-amber-400 text-purple-900 font-bold px-8 py-4 rounded-full
                hover:bg-amber-300 active:bg-amber-500 transition-colors text-lg shadow-lg"
            >
              Join The Cape Coral Gems
            </Link>
            <a
              href="tel:2393185923"
              className="bg-white/10 border-2 border-white text-white font-bold px-8 py-4 rounded-full
                hover:bg-white/20 active:bg-white/30 transition-colors text-lg backdrop-blur-sm"
            >
              Call Today
            </a>
          </div>
        </div>
      </div>

      {/* Trust / Community Copy */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
            As a local organization we take the trust our community puts in us with the utmost pride
            and will protect, teach, and guide our athletes in a way that will honor that trust.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-purple-50 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
            More Than Just Cheerleading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Athletic Excellence',
                icon: '🏆',
                text: 'Our coaches help athletes grow both physically and personally, building skills that extend far beyond competition.',
              },
              {
                title: 'Mental Wellness',
                icon: '💜',
                text: 'We believe athletes\' mental health is just as important as their physical health. By focusing on both, our athletes sparkle like true Gems!',
              },
              {
                title: 'Family & Community',
                icon: '⭐',
                text: 'Our athletes are more than just names on a roster — they become our family too. The bonds formed here last a lifetime.',
              },
            ].map(card => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100 text-center"
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-purple-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Copy Section */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://picsum.photos/seed/ccgems-team/600/500"
                alt="Cape Coral Gems team"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[6/5]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
                Our Program Is About <span className="text-amber-500">More</span> Than Winning
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  With every athlete, every practice, and every competition our focus will be to
                  build our athletes up. Our coaches will help them grow both athletically and personally.
                </p>
                <p>
                  Our program isn't just about winning a competition — it's about mentoring our athletes
                  to grow all around. We hope that the bonds and lessons formed in this sport will carry
                  on into adult life and provide many happy memories to come.
                </p>
                <p className="font-semibold text-purple-800">
                  Our Athletes are more than just names on a roster, they become our "Family" too.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/all-star"
                  className="text-center bg-purple-700 text-white font-bold px-6 py-3 rounded-full
                    hover:bg-purple-600 transition-colors"
                >
                  All Star Cheerleading
                </Link>
                <Link
                  to="/classes"
                  className="text-center bg-amber-400 text-purple-900 font-bold px-6 py-3 rounded-full
                    hover:bg-amber-300 transition-colors"
                >
                  View Classes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-purple-800 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Gems Family?</h2>
          <p className="text-purple-200 text-lg mb-8">
            Contact us today to learn more about our programs, classes, and how to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-amber-400 text-purple-900 font-bold px-8 py-3 rounded-full
                hover:bg-amber-300 transition-colors text-lg shadow-lg"
            >
              Get In Touch
            </Link>
            <a
              href="tel:2393185923"
              className="border-2 border-amber-400 text-amber-400 font-bold px-8 py-3 rounded-full
                hover:bg-amber-400/10 transition-colors text-lg"
            >
              (239) 318-5923
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
