import Image from "next/image";
import { Sparkles, ShieldCheck, Leaf, Flame, ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onExploreProducts: () => void;
  onOpenB2B: () => void;
}

export default function Hero({ onExploreProducts, onOpenB2B }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden organic-gradient-hero">
      {/* Decorative ambient blurred orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-5 w-[380px] h-[380px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[320px] h-[320px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200/80 shadow-xs mb-6">
              <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                Европейский стандарт чистоты • Формула 2026
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0E253A] leading-[1.12] mb-6">
              Чистота нового поколения.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0E253A] to-[#10B981]">
                Свежесть, которая остается с вами.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
              Ультраконцентрированные гели для стирки <strong className="text-slate-800 font-semibold">PureLife 4&nbsp;кг</strong> и стиральные порошки с немецкими энзимами. Мгновенно расщепляют сложные загрязнения при 30°C, сохраняют цвет и защищают волокна ткани.
            </p>

            {/* 3 Quick Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-10">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-100 shadow-xs backdrop-blur-xs hover:border-emerald-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Биоразлагаемые ПАВ</div>
                  <div className="text-[11px] text-slate-500">Безопасно для септиков</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-100 shadow-xs backdrop-blur-xs hover:border-sky-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#0284C7] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Без агрессивного хлора</div>
                  <div className="text-[11px] text-slate-500">Гипоаллергенный состав</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/80 border border-slate-100 shadow-xs backdrop-blur-xs hover:border-purple-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Высокая концентрация</div>
                  <div className="text-[11px] text-slate-500">До 80 стирок в бутыли</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                id="hero-explore-button"
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-[#0284C7] to-[#0E253A] hover:from-[#0369A1] hover:to-[#071524] shadow-lg shadow-sky-600/25 hover:shadow-xl hover:shadow-sky-600/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Смотреть продукцию</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="hero-b2b-button"
                onClick={onOpenB2B}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-base text-[#0E253A] bg-white border border-slate-200/90 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all duration-200"
              >
                <span>Оптовое сотрудничество</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                  B2B
                </span>
              </button>
            </div>

            {/* Social Proof Bar */}
            <div className="mt-8 flex items-center gap-4 text-xs font-medium text-slate-500">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-[10px] border-2 border-white">PL</div>
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px] border-2 border-white">ECO</div>
                <div className="w-7 h-7 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-[10px] border-2 border-white">ISO</div>
              </div>
              <p>
                Более <span className="font-bold text-slate-800">120 000+</span> семей уже выбрали PureLife в 2026 году
              </p>
            </div>
          </div>

          {/* Right Column: Hero Visual Product Packshot & Dynamic Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Luminous background aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/20 via-sky-200/30 to-purple-300/20 rounded-3xl blur-2xl -z-10 transform rotate-1 scale-105" />

            {/* Central Product Showcase Container */}
            <div className="relative w-full max-w-md rounded-3xl p-4 bg-white/70 backdrop-blur-md border border-white/90 shadow-2xl shadow-sky-950/10">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-sky-50/50 to-white flex items-center justify-center">
                <Image
                  src="/images/products/alpine-fresh-gel.jpg"
                  alt="Концентрированный гель для стирки PureLife Alpine Fresh 4 кг"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                  className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Badge Top Left */}
                <div className="absolute top-4 left-4 glass-card rounded-2xl px-3.5 py-2.5 shadow-lg border border-white/80 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center font-black text-sm">
                    4kg
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-800">~80 циклов</div>
                    <div className="text-[10px] text-slate-500 font-medium">Концентрат</div>
                  </div>
                </div>

                {/* Floating Badge Bottom Right */}
                <div className="absolute bottom-4 right-4 glass-card rounded-2xl px-3.5 py-2.5 shadow-lg border border-white/80 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-800">100% выполаскивание</div>
                    <div className="text-[10px] text-slate-500">Без белого налета</div>
                  </div>
                </div>
              </div>

              {/* Bottom Caption Pill */}
              <div className="mt-3.5 flex items-center justify-between px-2 text-xs">
                <div className="font-semibold text-slate-700">Флагман: Alpine Fresh & Clean</div>
                <div className="font-bold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                  1 бутыль = 12 кг обычного порошка
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
