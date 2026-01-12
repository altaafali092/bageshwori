import { PromoText } from "@/types/Frontend"
import { Asterisk } from "lucide-react"

interface PromoProps {
  promoTexts: PromoText[]
}

export default function PromoBanner({ promoTexts }: PromoProps) {
  if (!promoTexts?.length) return null

  return (
    <section className="bg-[#f9f9f7] dark:bg-slate-950 text-emerald-900 dark:text-emerald-400 overflow-hidden border-y border-gray-200 dark:border-slate-800">
      <div className="relative flex overflow-hidden whitespace-nowrap py-8">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#f9f9f7] dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#f9f9f7] dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-8 px-4 shrink-0"
              aria-hidden={idx > 0}
            >
              {promoTexts.map((promo) => (
                <div key={promo.id} className="flex items-center gap-8 text-2xl font-extrabold uppercase">
                  <span>{promo.title}</span>
                  <Asterisk className="text-emerald-700 dark:text-emerald-500 w-16 h-8 flex-shrink-0" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}