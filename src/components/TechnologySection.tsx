import { Sparkles, ShieldCheck, ThermometerSnowflake, Droplet, RefreshCw, BadgePercent } from "lucide-react";

export default function TechnologySection() {
  const technologies = [
    {
      step: "01",
      title: "Интеллектуальные энзимы",
      subtitle: "Таргетное расщепление органики при 30°C",
      description:
        "Био-ферменты четвертого поколения распознают молекулярную структуру белковых, жировых и крахмальных пятен. Формула активируется в прохладной воде от 20-30°C, экономя до 60% электроэнергии стиральной машины.",
      tag: "Cold-Water Active",
      icon: ThermometerSnowflake,
      accent: "#0284C7",
      stat: "30°C",
      statLabel: "полная активация ферментов",
    },
    {
      step: "02",
      title: "Сохранение цвета и волокон",
      subtitle: "Технология Color Lock & Anti-Pilling",
      description:
        "Ингибиторы вымывания пигментов фиксируют красители внутри ткани, препятствуя линьке и потускнению даже после 50 циклов стирки. Специальный полимер предотвращает образование катышков и сохраняет шелковистость.",
      tag: "Color Guard 50+",
      icon: RefreshCw,
      accent: "#EC4899",
      stat: "50+",
      statLabel: "стирок без потери цвета",
    },
    {
      step: "03",
      title: "100% выполаскивание без остатка",
      subtitle: "Безопасно для чувствительной и детской кожи",
      description:
        "Быстрорастворимая формула с микромолекулярной дисперсией полностью вымывается за стандартный цикл полоскания. Одежда не оставляет ощущения мыльной пленки и не вызывает зуда или раздражений.",
      tag: "Dermatologically Tested",
      icon: Droplet,
      accent: "#8B5CF6",
      stat: "0%",
      statLabel: "остаточных ПАВ на ткани",
    },
    {
      step: "04",
      title: "Экономичный расход концентрата",
      subtitle: "Снижает стоимость одной стирки в 2 раза",
      description:
        "Бутыль 4 кг заменяет 3 стандартных мешка порошка по 4 кг, занимая минимум места в ванной комнате и сокращая потребление первичного пластика упаковки на 35%. Честная экономия бюджета семьи.",
      tag: "Ultra-Concentrate",
      icon: BadgePercent,
      accent: "#10B981",
      stat: "2x",
      statLabel: "выгоднее обычных средств",
    },
  ];

  return (
    <section id="technology" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#0E253A] mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Технологии & Контроль Качества
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E253A] tracking-tight mb-4">
            Почему миллионы семей выбирают PureLife?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Научный подход к домашней чистоте: синергия европейских биоразлагаемых компонентов и передовых энзимных комплексов.
          </p>
        </div>

        {/* 4 Feature Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.step}
                className="group relative rounded-3xl p-8 bg-[#FAFCFF] border border-slate-200/80 hover:border-slate-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: tech.accent }}
                />

                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md shadow-slate-900/10"
                      style={{ backgroundColor: tech.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-black tracking-widest text-slate-400">
                        {tech.step}
                      </span>
                      <div className="text-xs font-bold text-slate-500">
                        {tech.tag}
                      </div>
                    </div>
                  </div>

                  {/* Stat pill */}
                  <div className="text-right">
                    <div
                      className="text-2xl font-black"
                      style={{ color: tech.accent }}
                    >
                      {tech.stat}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-400 uppercase">
                      {tech.statLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0E253A] mb-1">
                  {tech.title}
                </h3>
                <h4 className="text-xs font-semibold text-slate-500 mb-3">
                  {tech.subtitle}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0E253A] via-[#163653] to-[#0E253A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold">
                100% соответствие международным стандартам безопасности
              </div>
              <div className="text-xs text-slate-300">
                Каждая партия сырья проходит спектрометрический и микробиологический контроль в заводской лаборатории.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold tracking-wider">
              ISO 9001:2015
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold tracking-wider">
              ECO CERTIFIED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
