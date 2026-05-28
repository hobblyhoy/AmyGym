import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import GetInTouch from '../components/GetInTouch'
import cjGc from '../assets/gym-photos/cj-gc.webp'
import cobalt from '../assets/gym-photos/cobalt.webp'
import crownJewels from '../assets/gym-photos/crown-jewels.webp'
import kingdomCoaches from '../assets/gym-photos/kingdom-coaches.webp'
import leahAva from '../assets/gym-photos/leah-ava.webp'
import mostSpirited from '../assets/gym-photos/most-spirited.webp'
import parade from '../assets/gym-photos/parade.webp'
import raven from '../assets/gym-photos/raven.webp'
import reefRebels from '../assets/gym-photos/reef-rebels.webp'
import teamPhotos from '../assets/gym-photos/team-photos.webp'

const galleryImages = [
  { src: cjGc, label: 'CJ & GC Team' },
  { src: cobalt, label: 'Cobalt Squad' },
  { src: crownJewels, label: 'Crown Jewels' },
  { src: kingdomCoaches, label: 'Kingdom Coaches' },
  { src: leahAva, label: 'Leah & Ava' },
  { src: mostSpirited, label: 'Most Spirited' },
  { src: parade, label: 'Parade' },
  { src: raven, label: 'Raven' },
  { src: reefRebels, label: 'Reef Rebels' },
  { src: teamPhotos, label: 'Team Photos' },
]

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedIndex(null)
    }
  }

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex(i => (i !== null ? i - 1 : null))
  }

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedIndex(i => (i !== null ? i + 1 : null))
  }

  const activeImage = selectedIndex !== null ? galleryImages[selectedIndex] : null

  return (
    <div>
      <PageHeader title="Gallery" />

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Check out our amazing teams in action! Our athletes showcase their skills,
            dedication, and passion for cheerleading. From competitions to team events,
            these moments capture the spirit of Cape Coral Gems.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
            Our Community
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((img, index) => (
              <div
                key={img.label}
                className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative overflow-hidden bg-gray-200 h-80">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-white px-4 py-4">
                  <p className="text-purple-800 font-semibold text-center">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10 cursor-pointer"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={activeImage.src}
              alt={activeImage.label}
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Side arrows — desktop only */}
            {selectedIndex > 0 && (
              <button
                onClick={goPrev}
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-white hover:text-gray-300 transition-colors p-5 cursor-pointer"
                aria-label="Previous image"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {selectedIndex < galleryImages.length - 1 && (
              <button
                onClick={goNext}
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-white hover:text-gray-300 transition-colors p-5 cursor-pointer"
                aria-label="Next image"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Prev / Next buttons below image — mobile only */}
            <div className="flex md:hidden justify-center gap-4 mt-4">
              <button
                onClick={goPrev}
                disabled={selectedIndex === 0}
                className="w-16 flex items-center justify-center bg-white/20 text-white py-3 rounded-full
                  hover:bg-white/30 transition-colors cursor-pointer disabled:opacity-0 disabled:pointer-events-none"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                disabled={selectedIndex >= galleryImages.length - 1}
                className="w-16 flex items-center justify-center bg-white/20 text-white py-3 rounded-full
                  hover:bg-white/30 transition-colors cursor-pointer disabled:opacity-0 disabled:pointer-events-none"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <GetInTouch />
    </div>
  )
}
