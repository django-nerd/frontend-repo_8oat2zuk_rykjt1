import React from 'react';

const PanaflexSection = () => {
  const cards = [
    {
      title: 'Classic (With Sugar)',
      img: 'https://images.unsplash.com/photo-1505575972945-2706bfe20ea7?q=80&w=1974&auto=format&fit=crop',
      file: 'https://images.unsplash.com/photo-1505575972945-2706bfe20ea7?q=80&w=2400&auto=format&fit=crop',
    },
    {
      title: 'Sugar-Free',
      img: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=1974&auto=format&fit=crop',
      file: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=2400&auto=format&fit=crop',
    },
  ];

  return (
    <section id="panaflex" className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Panaflex Showcase</h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Our official promotional banners — designed to make heads turn!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title} className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <a href={c.file} target="_blank" rel="noreferrer" className="block">
                <img src={c.img} alt={c.title} className="h-72 w-full object-cover" />
              </a>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{c.title}</h3>
                </div>
                <a
                  href={c.file}
                  download
                  className="rounded-full px-4 py-2 text-sm font-semibold text-white"
                  style={{ backgroundColor: '#b3003b' }}
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanaflexSection;
