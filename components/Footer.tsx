import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Leaf & Life"
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">Leaf & Life</h3>
                <p className="text-xs text-brand-gold">
                  Add Life to Your Space
                </p>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Premium plants, pots & planters for your home and garden.
              Wholesale & retail available.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-brand-gold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/plants" className="hover:text-brand-gold transition-colors">
                  Buy Indoor Plants
                </Link>
              </li>
              <li>
                <Link href="/pots" className="hover:text-brand-gold transition-colors">
                  Garden Pots & Planters
                </Link>
              </li>
              <li>
                <Link href="/designer-pots" className="hover:text-brand-gold transition-colors">
                  Designer Pots
                </Link>
              </li>
              <li>
                <Link href="/metal-stands" className="hover:text-brand-gold transition-colors">
                  Metal Plant Stands
                </Link>
              </li>
              <li>
                <Link href="/plant-care" className="hover:text-brand-gold transition-colors">
                  Plant Care & Nutrition Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-brand-gold uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919942093711" className="hover:text-brand-gold transition-colors">
                  +91 99420 93711
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:leafandlifenursery@gmail.com" className="hover:text-brand-gold transition-colors break-all">
                  leafandlifenursery@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a
                  href="https://maps.app.goo.gl/NG6H29Zf1X3KCb456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  Kelambakkam, Chennai - 603103
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M20.52 3.48c-4.8-4.8-12.58-4.8-17.38 0-2.21 2.21-3.4 5.14-3.4 8.26 0 1.79.47 3.53 1.35 5.07L1 23l6.36-1.66c1.46.8 3.07 1.24 4.74 1.24 3.12 0 6.05-1.19 8.26-3.4 4.8-4.8 4.8-12.58 0-17.38zm-1.8 15.58c-1.86 1.86-4.33 2.88-6.94 2.88-1.49 0-2.94-.35-4.23-1.02l-.3-.17-2.99.78.8-2.92-.19-.3c-.78-1.25-1.19-2.67-1.19-4.12 0-2.9 1.5-5.6 4.12-7.22 2.73-1.71 6.27-1.59 8.7.3 2.43 1.88 3.75 5.02 3.2 8.03-.18.91-.62 1.77-1.26 2.43z" />
                  <path d="M17.35 14.92c-.24-.12-1.42-.71-1.64-.79-.22-.09-.38-.12-.54.12-.16.24-.68.79-.83.95-.15.16-.3.18-.55.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.01-.37.1-.49.11-.12.24-.31.36-.47.12-.16.16-.27.24-.44.08-.16.04-.31-.02-.43-.07-.12-.54-1.31-.74-1.8-.2-.47-.4-.41-.54-.42-.14-.01-.28-.01-.43-.01-.15 0-.38.06-.58.29-.2.24-.76.79-.76 1.92 0 1.13.78 2.22.89 2.38.11.17 1.55 2.37 3.77 3.33.53.23.95.37 1.27.48.53.2 1.01.17 1.39.1.42-.08 1.29-.53 1.49-1.17.19-.64.19-1.2.14-1.32-.05-.12-.18-.19-.38-.31z" />
                </svg>
                <a
                  href="https://wa.me/919942093711?text=Hi%20Leaf%20%26%20Life%2C%20I%20want%20to%20ask%20about%20your%20plants%20and%20pots."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  WhatsApp us: +91 99420 93711
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-brand-gold uppercase tracking-wider">
              Follow Us
            </h4>
            <a
              href="https://instagram.com/leafandlifenursery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-brand-gold transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @leafandlifenursery
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Leaf & Life. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
