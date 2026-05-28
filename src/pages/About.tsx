import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import GetInTouch from '../components/GetInTouch'
import coachFaith from '../assets/coach-faith.jpg'
import coachAmy from '../assets/coach-amy.jpg'
import coachD from '../assets/coach-d.jpg'
import coachRemy from '../assets/coach-remy.png'

const staff = [
  {
    name: 'Coach Amy',
    img: coachAmy,
    bio: [
      `For as long as I can remember, owning a cheerleading gym has been my ultimate dream. Today, as the proud 25-year-old owner of Coral Gem Athletics, I am living that dream alongside an incredible business partner—my mom, who brings over 3 decades of invaluable experience running a highly successful veterinary practice. Together, we combine a deep love for the sport with proven business expertise to serve our CGA families.`,
      `My journey began right here in Southwest Florida back in 2005 on the North Fort Myers Pop Warner field. My passion reached new heights when I transitioned into the All-Star world and absolutely fell in love with flying. I found my true home at Midwest Cheer Elite Florida, training there until 2020. Interestingly enough, I look back and appreciate our losses even more than our wins; those challenges, along with the lifelong friendships, family dynamic, and unforgettable memories, are exactly what shaped me into the athlete and coach I am today.`,
      `When an ACL injury sidelined me during my senior year, it felt like a setback—but it actually pushed me headfirst into my true calling: coaching. That very same year, I helped lead our Junior Level 1 team to their very first Summit competition at ESPN Wide World of Sports, cementing my absolute passion for guiding athletes.`,
      `After a brief intermission working in customer service—where I honed invaluable skills in communication and client care—the stars aligned. I returned to the floor as cheer director for the second season of Cape Coral Gems Cheerleading. By the end of that season, the ultimate opportunity arose: taking over as owners.`,
      `After a highly successful Season 3, we are jumping straight into Season 4 (2026-2027)! My mission for Coral Gems Athletics is simple: to take every lesson, memory, and bit of professional experience I've ever gained and use it to build a positive, elite environment where Southwest Florida families can watch their children foster a lifelong love for the sport of cheerleading.`,
    ],
  },
  {
    name: 'Coach Faith',
    img: coachFaith,
    bio: [
      `Hi! I'm Faith, one of the coaches at Coral Gems Athletics. I started cheering in 2012 and began coaching in 2019. Since then, I've had the opportunity to work with athletes of all ages and skill levels, from beginner tumbling classes to competitive teams. I've been coaching at CGA since the gym opened and love being part of a positive environment where athletes can grow both on and off the mat. My favorite part of coaching is helping kids build confidence, teamwork, and a love for the sport while watching them achieve goals they never thought possible.`,
      `Outside of the gym, I'm a licensed cosmetologist currently pursuing a degree in occupational therapy, with hopes of combining my passion for helping others with my love for working with children.`,
    ],
  },
  {
    name: 'Coach "D"',
    img: coachD,
    bio: [
      `I began dancing and performing at the age of 6 playing drums and then moving on to middle school playing in the band and jazz band as a percussionist winning the Louis Armstrong awards in the jazz band 8th grade year, but meanwhile introduced to the drama department playing in musicals like the Nifty 50's dancing in the chorus.`,
      `In 7th I was a part of the South Shore Drill Team in Chicago IL dancing in parades, shows, halftime shows, commercials, WGI competitions and the biggest one marching for President Obama inauguration Parade my Junior/Senior year while still playing in the band. As a senior I joined my HS dance team performing for basketball games.`,
      `As years went on I continue to dance in college on a hip-hop team while getting an associate in fine art and a bachelors in music productions. Now moving from IL to Florida, I'm now enjoying coaching and choreographing for the Coral Gems Athletics All-star cheer and dance teams.`,
    ],
  },
  {
    name: 'Coach Remy',
    img: coachRemy,
    bio: [
      `Hi! I'm Remy! I was born and raised here, Cape Coral, Florida. I grew up in the cheer world and have been involved in competitive cheerleading for most of my life. Over the years, I cheered at Storms Field, MACS (McGregor Baptist Church), Midwest Cheer Elite, and Cape Coral High School. After high school, I also spent time participating on a college step team.`,
      `I have been coaching at Coral Gems Athletics since January 2025 and primarily work with our tumbling athletes and tumbling classes. I personally trained through Level 4 tumbling and can safely spot skills through that level. One of my favorite parts of coaching is helping athletes build confidence, improve their skills, and have fun while reaching their goals.`,
      `Outside of the gym, I am also a hairstylist at Cre8 Salon and Spa, where I love helping people feel confident and beautiful. In my free time, I enjoy spending time with my boyfriend and my dog, relaxing by the pool, and creating fun social media content.`,
    ],
  },
]

function CoachCard({ name, img, bio }: { name: string; img: string; bio: string[] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-purple-100 shadow-sm p-6">
      <div className="flex items-center gap-5 mb-4">
        <img
          src={img}
          alt={name}
          className="w-32 h-32 rounded-xl object-cover flex-shrink-0"
        />
        <h3 className="text-2xl font-bold text-purple-900">{name}</h3>
      </div>
      <div className={`text-gray-600 leading-relaxed text-[0.95rem] ${expanded ? '' : 'line-clamp-5'}`}>
        {bio.map((para, i) => (
          <p key={i} className={i > 0 ? 'mt-3' : ''}>{para}</p>
        ))}
      </div>
      <button
        onClick={() => setExpanded(prev => !prev)}
        className="mt-3 text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors"
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>
    </div>
  )
}

export default function About() {
  return (
    <div>
      <PageHeader title="About Us" />

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

      {/* Staff */}
      <section className="bg-purple-50 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-4">
            Meet Our Coaches
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            Experienced, passionate, and dedicated to your athlete's growth.
          </p>
          <div className="flex flex-col gap-5">
            {staff.map(member => (
              <CoachCard key={member.name} {...member} />
            ))}
          </div>
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
              { title: 'Family Oriented', text: "Every athlete who joins us becomes part of our family — that's not just a slogan, it's our promise.", icon: '❤️' },
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

      <GetInTouch />
    </div>
  )
}
