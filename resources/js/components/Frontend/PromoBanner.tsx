import { Asterisk } from "lucide-react"

interface Promo {
  id: number
  text: string
}

const promos: Promo[] = [
  { id: 1, text: "Exclusive 20% discount for loyal customers" },
  { id: 2, text: "30% Cashback on orders above $499" },
  { id: 3, text: 'Use code: "Hello25" to get $25 off on first order' },
  { id: 4, text: "Trusted by over 10,000 happy customers" },
]

export default function PromoBanner() {
  const duplicatedPromos = [...promos, ...promos]

  return (
    <section className="bg-[#f9f9f7] text-emerald-900 overflow-hidden border-y border-gray-200">
      <div className="relative flex overflow-hidden whitespace-nowrap py-8">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#f9f9f7] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#f9f9f7] to-transparent z-10" />

        <div
          className="flex items-center gap-8 animate-marquee text-sm md:text-base font-medium"
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = "paused"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = "running"
          }}
        >
          {duplicatedPromos.map((promo, i) => (
            <div key={`${promo.id}-${i}`} className="flex items-center gap-8 text-2xl font-extrabold">
              <span>{promo.text}</span>
              <Asterisk className="text-emerald-700 w-16 h-8 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}