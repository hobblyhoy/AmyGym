import PageHeader from '../components/PageHeader'
import GetInTouch from '../components/GetInTouch'

export default function AllStar() {
  return (
    <div>
      <PageHeader
        title="All Star Cheerleading"

      />

      {/* Mission Section */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
              Cape Coral GEMS Cheerleading
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                Our mission is to support and elevate our athletes to be their very best. Our
                all-inclusive All Star cheerleading team provides a safe, respectful, and
                competitive environment for your child to flourish.
              </p>
              <p>
                We teach through positive reinforcement while instilling sportsmanship, values,
                and teamwork in every exercise. As a local organization we take the trust our
                community puts in us with the utmost pride and will protect, teach, and guide our
                athletes in a way that will honor that trust.
              </p>
              <p>
                With every athlete, every practice, and every competition our focus will be to
                build our athletes up. Our coaches will help them grow both athletically and
                personally. Our program isn't just about winning a competition — it's about
                mentoring our athletes to grow all around.
              </p>
            </div>
            <div>
              <img
                src="https://picsum.photos/seed/ccgems-allstar-team/600/500"
                alt="All Star Cheerleading Team"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[6/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health + Family Section */}
      <section className="bg-purple-800 text-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Whole Athlete</h2>
          <div className="space-y-5 text-purple-100 text-lg leading-relaxed">
            <p>
              All of us here at the Cape Coral Gems feel that our athletes' mental health is just
              as important as their physical health. By focusing on both, our athletes will sparkle
              like true Gems!
            </p>
            <p>
              We hope that the bonds and lessons formed in this sport will carry on into adult life
              and provide many happy memories to come.
            </p>
            <p className="font-semibold text-amber-300 text-xl">
              Our Athletes are more than just names on a roster, they become our "Family" as well.
            </p>
          </div>
        </div>
      </section>

      {/* Season Info */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
            Season Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            {[
              {
                title: 'Full Season',
                description: 'Commit to the full All Star season and experience the complete journey from first practice to championship.',
                highlight: 'Full Competition Experience',
              },
              {
                title: 'Half Season',
                description: 'Perfect for athletes looking to try All Star cheerleading or those with scheduling constraints.',
                highlight: 'Flexible Option',
              },
            ].map(season => (
              <div
                key={season.title}
                className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-8 text-center"
              >
                <span className="inline-block bg-amber-400 text-purple-900 text-sm font-bold px-3 py-1 rounded-full mb-4">
                  {season.highlight}
                </span>
                <h3 className="text-2xl font-bold text-purple-900 mb-3">{season.title}</h3>
                <p className="text-gray-600 leading-relaxed">{season.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>
  )
}
