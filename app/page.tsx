import Image from "next/image";
import Link from "next/link";
import { plants } from "@/data/products";

const featured = plants.slice(0, 8);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-green overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-green-light to-brand-green opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center">
            <div className="flex w-full justify-center">
              <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full bg-white">
                <Image
                  src="/images/logo.png"
                  alt="Leaf & Life Logo"
                  fill
                  sizes="200px"
                  className="translate-x-[-3px] translate-y-[5px] object-contain"
                  priority
                />
              </div>
            </div>
            <p className="mt-4 max-w-lg text-sm text-white/70 leading-relaxed sm:text-base">
              Premium plants, pots & planters for your home and garden.
              Browse our collection and order directly via WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/plants"
                className="rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold text-brand-green hover:bg-brand-gold-light transition-colors"
              >
                Browse Plants
              </Link>
              <Link
                href="/pots"
                className="rounded-full border-2 border-white/30 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Browse Pots & Planters
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-brand-green sm:text-3xl">
          Our Collections
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Premium Plants &bull; Decor &bull; Gifting
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Link
            href="/plants"
            className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <Image
                src="/images/plants/monstera.jpg"
                alt="Plant Collections"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-green">
                Plant Collections
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Indoor, Balcony, Succulents & Flowering Plants
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-gold">
                Browse {plants.length} plants
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>

          <Link
            href="/pots"
            className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <Image
                src="/images/pots/pot-001.jpg"
                alt="Pots & Planters"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-green">
                Pots & Planters
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Plastic, Ceramic, Roto Moulded, Iron & Metal Stands
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-gold">
                Browse 59 pots & planters
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Plants */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-brand-green sm:text-3xl">
            Popular Plants
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            Handpicked favourites from our collection
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {featured.map((plant) => (
              <Link
                key={plant.id}
                href="/plants"
                className="group overflow-hidden rounded-2xl bg-brand-cream shadow-sm hover:shadow-lg transition-all border border-brand-green/5"
              >
                <div className="relative aspect-square overflow-hidden bg-white">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-sm font-semibold text-brand-green">
                    {plant.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/plants"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
            >
              View All Plants
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-brand-green sm:text-3xl">
          Why Choose Leaf & Life?
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Premium Quality",
              desc: "Carefully selected plants and durable pots",
            },
            {
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              ),
              title: "Wide Variety",
              desc: "100+ products across multiple categories",
            },
            {
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Best Prices",
              desc: "Wholesale & retail at competitive rates",
            },
            {
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              ),
              title: "Indoor & Outdoor",
              desc: "Plants and planters for every space",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 text-center shadow-sm border border-brand-green/5"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-cream text-brand-green">
                {item.icon}
              </div>
              <h3 className="mt-4 font-semibold text-brand-green">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
