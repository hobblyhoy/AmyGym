import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import GetInTouch from '../components/GetInTouch'

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'Do You Require A Waiver?',
    answer: <>Yes — <strong>all athletes and party guests are required to have a signed waiver.</strong> Waivers can be completed through your <strong>Parent Portal</strong>, or you may fill out a <strong>paper copy at the gym.</strong></>,
  },
  {
    question: 'Where Are You Located?',
    answer: <>We are located at: <strong>211 Hancock Bridge Parkway, Cape Coral, FL</strong></>,
  },
  {
    question: 'What Do Classes Cost?',
    answer: <>Most classes are offered at a <strong>$25 drop-in rate</strong>. We also provide a <strong>discounted monthly punch card</strong> when you pre-pay for <strong>4 classes per month.</strong></>,
  },
  {
    question: 'What Programs Do You Offer?',
    answer: (
      <div className="text-gray-600 leading-relaxed space-y-3">
        <p>We offer a wide range of classes and team programs, including:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Cheerleading</strong></li>
          <li><strong>Tumbling</strong></li>
          <li><strong>Hip Hop</strong></li>
          <li><strong>Pom</strong></li>
          <li><strong>Baton Twirling</strong></li>
        </ul>
        <p>We also host fun special events such as:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li><strong>Daddy-Daughter Stunt Clinics</strong></li>
          <li><strong>Open Gym</strong></li>
          <li><strong>Craft Club</strong></li>
          <li><strong>Parent's Night Out</strong></li>
        </ul>
      </div>
    ),
  },
  {
    question: 'Is There A Sibling Discount?',
    answer: <>Yes — <strong>sibling discounts are available</strong> for teams and special events.</>,
  },
  {
    question: 'Do You Offer Birthday Parties?',
    answer: <>Yes! We offer a variety of <strong>Birthday Party Packages</strong> to make your celebration unforgettable.</>,
  },
]

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-purple-100 rounded-2xl overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-purple-50 transition-colors text-left gap-4 cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-semibold text-purple-900 text-lg">{question}</span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <svg className="w-4 h-4 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="p-6 bg-white border-t border-purple-50">
          {typeof answer === 'string' ? (
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          ) : (
            answer
          )}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"

      />

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              If you have any questions, please do not hesitate to contact our office at any time!
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map(faq => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 text-center bg-purple-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-xl font-bold text-purple-900 mb-2">Still Have Questions?</h3>
            <p className="text-gray-600 mb-5">
              Our team is happy to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-purple-700 text-white font-bold px-7 py-3 rounded-full
                hover:bg-purple-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <GetInTouch />
    </div>
  )
}
