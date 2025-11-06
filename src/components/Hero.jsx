import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for brand tones (non-blocking) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 60% at 20% 20%, rgba(255,182,193,0.55) 0%, rgba(255,255,255,0) 60%), linear-gradient(180deg, rgba(179,0,59,0.30) 0%, rgba(255,192,203,0.25) 60%, rgba(255,255,255,0.65) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 backdrop-blur-md shadow-sm">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#b3003b' }} />
          <span className="text-sm font-medium" style={{ color: '#b3003b' }}>New Launch • 2025</span>
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
          <span style={{ fontFamily: 'cursive', color: '#b3003b' }}>Rooh Afza</span>{' '}
          <span className="text-gray-900">Yogurt</span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl font-semibold text-gray-800">
          Cool. Creamy. Classic Refreshment.
        </p>
        <p className="mt-3 max-w-2xl text-base sm:text-lg text-gray-700">
          The taste of tradition — reimagined for today.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('products')}
            className="rounded-full px-6 py-3 text-white font-semibold shadow-lg transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: '#b3003b' }}
          >
            Explore Our Products
          </button>
          <button
            onClick={() => scrollTo('stall')}
            className="rounded-full px-6 py-3 font-semibold text-gray-900 bg-white/80 backdrop-blur-md shadow-lg transition-transform hover:scale-[1.02]"
          >
            Visit Our Stall
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
