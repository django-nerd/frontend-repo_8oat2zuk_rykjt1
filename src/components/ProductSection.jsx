import React from 'react';

const Feature = ({ children }) => (
  <li className="flex items-start gap-2 text-sm text-gray-700">
    <span className="mt-1 inline-block h-2 w-2 rounded-full" style={{ backgroundColor: '#b3003b' }} />
    <span>{children}</span>
  </li>
);

const ProductCard = ({ title, tone, imageUrl, description, highlights, ctaLabel }) => {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 bg-white"
      style={{ background: 'linear-gradient(180deg, #fff 0%, #fff7f9 100%)' }}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-6">
        <h3 className="text-2xl font-extrabold" style={{ color: tone }}>
          {title}
        </h3>
        <p className="text-gray-700 text-sm sm:text-base">{description}</p>
        <ul className="mt-2 space-y-2">
          {highlights.map((h, i) => (
            <Feature key={i}>{h}</Feature>
          ))}
        </ul>
        <div className="pt-2">
          <a
            href="#panaflex"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white text-sm font-semibold shadow-md"
            style={{ backgroundColor: '#b3003b' }}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <section id="products" className="relative w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our Products
          </h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Two refreshing takes on a beloved classic — choose your vibe.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ProductCard
            title="Rooh Afza Yogurt (Classic)"
            tone="#b3003b"
            imageUrl="https://images.unsplash.com/photo-1540907871918-9113b4710c8a?q=80&w=1932&auto=format&fit=crop"
            description="The original blend — smooth, creamy yogurt infused with the timeless Rooh Afza flavor. Perfectly sweet and irresistibly refreshing."
            highlights={[
              'Made with real Rooh Afza',
              'Perfect for summer refreshment',
              'Serve chilled',
            ]}
            ctaLabel="Download Panaflex"
          />

          <ProductCard
            title="Rooh Afza Yogurt (Sugar-Free)"
            tone="#b3003b"
            imageUrl="https://images.unsplash.com/photo-1525004277915-1f83a1b39239?q=80&w=1932&auto=format&fit=crop"
            description="All the same rich flavor, none of the guilt. Sweetened with natural alternatives for a lighter, healthier indulgence."
            highlights={[
              'Sugar-free formulation',
              'Same floral aroma and color',
              'Guilt-free freshness',
            ]}
            ctaLabel="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
