import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import Hero from '../components/Hero'
import { Btn, Container, Display, Eyebrow, Ornament, Reveal, Section } from '../components/primitives'
import { contact, socials } from '../data/site'
import { divisions } from '../data/divisions'
import { usePageMeta } from '../lib/meta'

/**
 * FORM ROUTING — Build v5, Section 0: "All form submissions across the entire
 * site must route to lynea@solvecustomevents.com only."
 *
 * Paste a form endpoint below (Formspree, HubSpot, Netlify Forms, or your own
 * handler) and submissions POST to it. Until then the form composes the same
 * submission as an email to that address, so no enquiry is ever lost and no
 * silent failure can happen. info@ stays the public-facing address.
 */
const FORM_ENDPOINT = ''
const ROUTE_TO = 'lynea@solvecustomevents.com'

const INQUIRY_TYPES = [
  ...divisions.map((d) => d.name),
  'Mystic Moonlight Masquerade Campaign',
  'Press or media enquiry',
  'Something else',
]

const fieldClass =
  'w-full rounded-[2px] border border-stone/60 bg-ivory px-[18px] py-[14px] font-body text-[18px] text-charcoal transition-colors duration-300 placeholder:text-espresso focus:border-gold focus:outline-none'
const labelClass = 'block font-ui text-[11px] uppercase text-espresso'

export default function Connect() {
  const [sent, setSent] = useState(false)
  usePageMeta(
    'Connect — Sol Vé Custom Events, Calgary Alberta',
    'Every meaningful gathering begins with a conversation. Reach Sol Vé Custom Events in Calgary, Alberta — serving clients throughout Canada and internationally.',
  )

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (FORM_ENDPOINT) {
      await fetch(FORM_ENDPOINT, { method: 'POST', body: data })
    } else {
      const body = [...data.entries()].map(([key, value]) => `${key}: ${value}`).join('\n')
      window.location.href = `mailto:${ROUTE_TO}?subject=${encodeURIComponent(
        `Website enquiry — ${data.get('inquiry') ?? 'Sol Vé Custom Events'}`,
      )}&body=${encodeURIComponent(body)}`
    }

    setSent(true)
    form.reset()
  }

  return (
    <>
      <Hero
        size="page"
        eyebrow="Connect"
        headline="Let's Begin the Conversation"
        subheadline="Every meaningful gathering begins with a conversation."
        media="connect-hero"
      />

      <Section tone="ivory" rule>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[55fr_45fr] lg:gap-20">
            <Reveal>
              <div className="max-w-xl space-y-6 font-body text-[18px] leading-[1.7] text-espresso md:text-[20px]">
                <p>
                  Whether you're celebrating a milestone, bringing people together around a shared
                  purpose, creating an unforgettable experience, or exploring an idea that has yet to
                  take shape, we'd be honoured to hear your story.
                </p>
                <p>
                  At Sol Vé, we believe the most extraordinary experiences begin by listening. Before
                  design, before planning, and before the first detail is imagined, we take the time
                  to understand what matters most to you, the people you're bringing together, and the
                  purpose your gathering is meant to serve.
                </p>
                <p className="font-display text-[21px] italic text-espresso md:text-[24px]">
                  No two gatherings are ever the same. Neither is our approach.
                </p>
                <p>If our philosophy resonates with you, we invite you to begin the conversation.</p>
                <p>
                  Together, we'll explore what is possible and thoughtfully create an experience that
                  reflects your vision, your values, and the story you want to tell.
                </p>
              </div>

              <div className="mt-14 border-t border-stone/40 pt-10">
                <Display as="h2" size="sm" className="text-charcoal">
                  Get in Touch
                </Display>
                <p className="mt-5 max-w-xl font-body text-[18px] leading-[1.7] text-espresso md:text-[20px]">
                  Whether you're planning a wedding, designing a signature celebration, creating a
                  workshop or curated experience, organizing a conference, developing a fundraising
                  initiative, or simply exploring an idea, we'd love to connect.
                </p>
              </div>

              <div className="mt-10 space-y-7">
                <div>
                  <p className={labelClass} style={{ letterSpacing: '0.22em' }}>
                    Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-2 flex items-center gap-4 font-body text-[19px] text-charcoal hover:text-gold"
                  >
                    <Mail size={18} className="text-gold" />
                    {contact.email}
                  </a>
                </div>
                <div>
                  <p className={labelClass} style={{ letterSpacing: '0.22em' }}>
                    Phone
                  </p>
                  <a
                    href={contact.phoneHref}
                    className="mt-2 flex items-center gap-4 font-body text-[19px] text-charcoal hover:text-gold"
                  >
                    <Phone size={18} className="text-gold" />
                    {contact.phone}
                  </a>
                </div>
                <div>
                  <p className={labelClass} style={{ letterSpacing: '0.22em' }}>
                    Location
                  </p>
                  <p className="mt-2 flex items-center gap-4 font-body text-[19px] text-charcoal">
                    <MapPin size={18} className="text-gold" />
                    {contact.location}
                  </p>
                  <p className="mt-1 pl-9 font-body text-[17px] italic text-espresso">
                    {contact.serving}
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <Eyebrow>Follow Along</Eyebrow>
                <p className="mt-5 max-w-md font-body text-[17px] leading-relaxed text-espresso">
                  Stay connected as we continue to share stories, perspectives, behind-the-scenes
                  moments, and the experiences that continue to shape the way people gather.
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                  {socials.map((social) => (
                    <li key={social.name}>
                      {social.url ? (
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          className="font-ui text-[11px] uppercase text-espresso underline underline-offset-4 hover:text-gold"
                          style={{ letterSpacing: '0.22em' }}
                        >
                          {social.name}
                        </a>
                      ) : (
                        <span
                          className="font-ui text-[11px] uppercase text-walnut"
                          style={{ letterSpacing: '0.22em' }}
                          title="Link pending confirmation"
                        >
                          {social.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <div className="rounded-[2px] border border-stone/50 bg-linen/40 p-6 md:p-10">
                {sent ? (
                  <div className="py-16 text-center">
                    <Ornament />
                    <p className="mt-10 font-display text-[26px] leading-snug text-charcoal md:text-[30px]">
                      Thank you.
                    </p>
                    <p className="mx-auto mt-5 max-w-sm font-body text-[18px] leading-relaxed text-espresso">
                      Your message is on its way. We will be in touch shortly to begin the
                      conversation.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-9 font-ui text-[11px] uppercase text-espresso underline underline-offset-4 hover:text-gold"
                      style={{ letterSpacing: '0.22em' }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                      <label className={labelClass} htmlFor="name" style={{ letterSpacing: '0.22em' }}>
                        Full name <span className="text-gold">*</span>
                      </label>
                      <input id="name" name="name" required className={`${fieldClass} mt-2.5`} />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="email" style={{ letterSpacing: '0.22em' }}>
                        Email <span className="text-gold">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={`${fieldClass} mt-2.5`}
                      />
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="phone" style={{ letterSpacing: '0.22em' }}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={`${fieldClass} mt-2.5`}
                      />
                    </div>

                    <div>
                      <label
                        className={labelClass}
                        htmlFor="inquiry"
                        style={{ letterSpacing: '0.22em' }}
                      >
                        Type of enquiry
                      </label>
                      <select id="inquiry" name="inquiry" className={`${fieldClass} mt-2.5`}>
                        {INQUIRY_TYPES.map((type) => (
                          <option key={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        className={labelClass}
                        htmlFor="message"
                        style={{ letterSpacing: '0.22em' }}
                      >
                        Your vision <span className="text-gold">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className={`${fieldClass} mt-2.5 resize-y`}
                      />
                    </div>

                    <Btn type="submit" className="w-full">
                      Send Your Vision
                    </Btn>

                    <p className="font-body text-[15px] leading-relaxed text-espresso">
                      Your message goes directly to Lynea. We reply to every enquiry personally.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="charcoal" className="!py-[60px] md:!py-[90px]">
        <div className="grain absolute inset-0 opacity-40" />
        <Container width="narrow" className="relative z-10 text-center">
          <Reveal>
            <Eyebrow tone="light">A Final Thought</Eyebrow>
            <p className="mt-10 font-body text-[19px] leading-relaxed text-champagne md:text-[21px]">
              Thank you for taking the time to learn about Sol Vé.
            </p>
            <p className="mt-8 font-display text-[24px] italic leading-snug text-ivory md:text-[30px]">
              We never take for granted the trust it takes to invite someone into life's most
              meaningful moments.
            </p>
            <p className="mx-auto mt-8 max-w-xl font-body text-[18px] leading-relaxed text-champagne/85">
              Should you choose to gather with us, we promise to honour that trust with thoughtful
              stewardship, genuine hospitality, and intentional care.
            </p>
            <p className="mt-8 font-body text-[18px] italic leading-relaxed text-champagne/85">
              Because the way people gather shapes everything that follows.
            </p>
            <p className="mt-8 font-display text-[20px] text-gold md:text-[24px]">
              We look forward to what we'll create together.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
