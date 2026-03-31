import { Link } from 'react-router-dom'

export default function GetInTouch() {
  return (
    <section className="bg-purple-700 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-purple-100 text-lg mb-8 leading-relaxed">
          Whether you're just getting started, or wanting to perfect your tumbling or cheer
          skills we have a class perfectly suited for you! Contact our office today to learn
          more about the Cape Coral Gems Athletics!
        </p>
        <Link
          to="/contact"
          className="inline-block bg-amber-400 text-purple-900 font-bold px-8 py-3 rounded-full
            hover:bg-amber-300 active:bg-amber-500 transition-colors text-lg shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
