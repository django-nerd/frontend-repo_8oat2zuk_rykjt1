import React from 'react';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-8 text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{children}</h2>
    {subtitle && <p className="mt-3 text-gray-700 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

const About = () => (
  <section id="about" className="w-full bg-gradient-to-b from-white to-rose-50/60 py-16">
    <div className="mx-auto max-w-7xl px-6">
      <SectionTitle>
        Where Tradition Meets Innovation
      </SectionTitle>
      <div className="mx-auto max-w-3xl text-gray-700 space-y-4 leading-relaxed">
        <p>
          Rooh Afza Yogurt is a student-led innovation bringing together the nostalgia of Rooh Afza with the modern refreshment of yogurt. Crafted to blend sweetness, health, and heritage, this product reimagines one of Pakistan’s most iconic flavors in a new, exciting form.
        </p>
        <p>
          Created for the Entrepreneurship Competition 2025, this concept aims to showcase how tradition can evolve with changing consumer lifestyles.
        </p>
      </div>
    </div>
  </section>
);

const Stall = () => (
  <section id="stall" className="w-full bg-white py-16">
    <div className="mx-auto max-w-7xl px-6">
      <SectionTitle subtitle="Visit our stall to sample both flavors, learn about our product concept, and experience the unique fusion of culture and refreshment.">
        Our Stall at the Competition
      </SectionTitle>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1974&auto=format&fit=crop"
            alt="Stall mockup"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center rounded-2xl bg-rose-50/50 p-6 ring-1 ring-rose-100">
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#b3003b' }}>Stall Highlights</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full" style={{ backgroundColor: '#b3003b' }} /> Chilled samples served fresh</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full" style={{ backgroundColor: '#b3003b' }} /> Staff in Rooh Afza-branded aprons</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full" style={{ backgroundColor: '#b3003b' }} /> QR code for feedback and votes</li>
            <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full" style={{ backgroundColor: '#b3003b' }} /> Product information cards</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="w-full bg-gradient-to-t from-white to-rose-50/60 py-16">
    <div className="mx-auto max-w-7xl px-6">
      <SectionTitle subtitle="Want to know more about Rooh Afza Yogurt or collaborate with us? Reach out below!">
        Get in Touch
      </SectionTitle>

      <div className="mx-auto max-w-3xl grid grid-cols-1 gap-6 sm:grid-cols-2">
        <a href="mailto:adhiazia@gmail.com" className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5 hover:shadow-lg transition">
          <div className="rounded-full p-2 text-white" style={{ backgroundColor: '#b3003b' }}>
            <Mail size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold text-gray-900">adhiazia@gmail.com</p>
          </div>
        </a>
        <a href="tel:+923078252626" className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5 hover:shadow-lg transition">
          <div className="rounded-full p-2 text-white" style={{ backgroundColor: '#b3003b' }}>
            <Phone size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold text-gray-900">+92 307 8252626</p>
          </div>
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5 hover:shadow-lg transition">
          <div className="rounded-full p-2 text-white" style={{ backgroundColor: '#b3003b' }}>
            <Instagram size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Instagram</p>
            <p className="font-semibold text-gray-900">@roohafza.yogurt</p>
          </div>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5 hover:shadow-lg transition">
          <div className="rounded-full p-2 text-white" style={{ backgroundColor: '#b3003b' }}>
            <Linkedin size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">LinkedIn</p>
            <p className="font-semibold text-gray-900">Rooh Afza Yogurt Team</p>
          </div>
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-white border-t border-rose-100">
    <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col items-center gap-3 text-center">
      <div className="font-extrabold text-2xl" style={{ color: '#b3003b' }}>
        Rooh Afza Yogurt
      </div>
      <p className="text-sm text-gray-600">© 2025 Rooh Afza Yogurt — Created for the Entrepreneurship Showcase.</p>
      <p className="text-xs text-gray-500">The flavor of memories — reborn in every spoonful.</p>
    </div>
  </footer>
);

const AboutStallContact = () => (
  <>
    <About />
    <Stall />
    <Contact />
    <Footer />
  </>
);

export default AboutStallContact;
