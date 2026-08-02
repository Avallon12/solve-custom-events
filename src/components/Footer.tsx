import { Link } from 'react-router-dom'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './BrandIcons'
import { Container, Eyebrow, GoldRule } from './primitives'
import { contact, divisionNav, navigation, socials } from '../data/site'

const icons = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Website: Globe,
} as const

export default function Footer() {
  return (
    <footer className="relative bg-charcoal text-champagne">
      <GoldRule className="absolute inset-x-0 top-0" />
      <div className="grain absolute inset-0 opacity-40" />

      <Container className="relative z-10 py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr_1fr] lg:gap-20">
          <div>
            <Link to="/" aria-label="Sol Vé Custom Events — home">
              <Logo size="lg" />
            </Link>
            <p className="mt-8 max-w-sm font-body text-[19px] italic leading-relaxed text-champagne/90">
              We design how people gather. Because the way people gather shapes everything that
              follows.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              {socials.map((social) => {
                const Icon = icons[social.name as keyof typeof icons] ?? Globe
                const shared =
                  'grid h-11 w-11 place-items-center rounded-full border transition-colors duration-300'
                return social.url ? (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${social.name} — ${social.handleLabel}`}
                    className={`${shared} border-gold/50 text-gold hover:bg-gold hover:text-charcoal`}
                  >
                    <Icon size={17} />
                  </a>
                ) : (
                  <span
                    key={social.name}
                    title={`${social.name} link pending confirmation`}
                    aria-label={`${social.name} link pending confirmation`}
                    className={`${shared} cursor-default border-gold/20 text-gold/35`}
                  >
                    <Icon size={17} />
                  </span>
                )
              })}
            </div>
          </div>

          <div>
            <Eyebrow tone="light">Explore</Eyebrow>
            <ul className="mt-6 space-y-3">
              <li>
                <Link to="/" className="font-body text-[17px] hover:text-gold">
                  Home
                </Link>
              </li>
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="font-body text-[17px] hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/founder" className="font-body text-[17px] hover:text-gold">
                  Meet the Founder
                </Link>
              </li>
              <li>
                <Link to="/connect" className="font-body text-[17px] hover:text-gold">
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Eyebrow tone="light">Experiences</Eyebrow>
            <ul className="mt-6 space-y-3">
              {divisionNav.map((division) => (
                <li key={division.to}>
                  <Link to={division.to} className="font-body text-[17px] hover:text-gold">
                    {division.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Eyebrow tone="light" className="mt-10">
              Get in touch
            </Eyebrow>
            <ul className="mt-6 space-y-3 font-body text-[17px]">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 hover:text-gold"
                >
                  <Mail size={15} className="text-gold" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-gold">
                  <Phone size={15} className="text-gold" />
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={15} className="text-gold" />
                {contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gold/20 pt-8">
          <p className="max-w-4xl font-body text-[15px] leading-relaxed text-champagne/70">
            Sol Vé Custom Events respectfully acknowledges that we live, work, and gather on the
            traditional territories of the peoples of the Treaty 7 region in Southern Alberta, and
            the Métis Nation of Alberta, Region 3.{' '}
            <Link to="/commitments" className="text-gold underline underline-offset-4">
              Read our commitments
            </Link>
            .
          </p>
          <div className="mt-7 flex flex-col gap-2 font-ui text-[11px] uppercase text-champagne/50 md:flex-row md:items-center md:justify-between">
            <span style={{ letterSpacing: '0.22em' }}>
              © {new Date().getFullYear()} Sol Vé Custom Events
            </span>
            <span style={{ letterSpacing: '0.22em' }}>{contact.serving}</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
