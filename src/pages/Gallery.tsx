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
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null)
    }
  }

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
            {galleryImages.map((img) => (
              <div
                key={img.label}
                className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => setSelectedImage(img.src)}
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
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Image */}
            <img
              src={selectedImage}
              alt="Enlarged gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <GetInTouch />
    </div>
  )
}
