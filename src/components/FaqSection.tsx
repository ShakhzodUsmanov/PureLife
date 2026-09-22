"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Подходит ли гель PureLife для стирки в воде с высокой жесткостью?",
    answer:
      "Да, абсолютно. Формула гелей PureLife обогащена современными поликарбоксилатами и смягчающими агентами, которые нейтрализуют ионы кальция и магния. Это предотвращает осаждение минерального налета на нагревательном элементе (ТЭНе) стиральной машины и позволяет энзимам сохранять 100% эффективность очистки даже в очень жесткой воде.",
    category: "Качество воды",
  },
  {
    question: "Можно ли стирать гелем PureLife деликатные ткани (натуральную шерсть и шелк)?",
    answer:
      "Для деликатных вещей (тонкий хлопок, вискоза, смесовые ткани) идеально подходит PureLife Lavender Dream при температуре до 30°C на режиме бережной стирки. Средство бережно защищает микроструктуру волокон. Для 100% натуральной шерсти и чистого шелка рекомендуется стирать при температуре не выше 30°C с минимальным отжимом.",
    category: "Деликатный уход",
  },
  {
    question: "Безопасны ли средства PureLife для стирки детского белья и одежды новорожденных?",
    answer:
      "Вся продукция PureLife успешно прошла токсикологический и дерматологический контроль. В составе используются мягкие биоразлагаемые ПАВ, отсутствуют агрессивные хлорные отбеливатели, фосфаты и токсичные оптические аллергены. Гель и порошки полностью выполаскиваются из волокон ткани за стандартный цикл, исключая контакт аллергенов с чувствительной детской кожей.",
    category: "Безопасность",
  },
  {
    question: "Каковы минимальные условия и скидки для региональных оптовых дистрибьюторов?",
    answer:
      "Минимальная стартовая партия для оптовых партнеров составляет от 500 кг (1 паллета). Для сетевого ритейла и официальных региональных дистрибьюторов мы предоставляем скидки до 35% от базового прайса, отсрочку платежа до 30 календарных дней, компенсацию логистики до распределительного центра и бесплатные маркетинговые POS-материалы.",
    category: "Оптовикам (B2B)",
  },
  {
    question: "В чем реальная выгода концентрированного геля 4 кг по сравнению с обычным порошком?",
    answer:
      "Одна 4-килограммовая канистра концентрата PureLife рассчитана в среднем на 80 циклов стирки, что эквивалентно 12–15 кг стандартного разбавленного порошка с наполнителем из соды. Стоимость одного цикла стирки снижается почти в 2 раза, а точная дозировка мерным колпачком исключает перерасход средства и появление белых разводов на вещах.",
    category: "Экономия",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#0E253A] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#0284C7]" />
            Вопросы и экспертные ответы
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E253A] tracking-tight mb-4">
            Часто задаваемые вопросы о PureLife
          </h2>
          <p className="text-base text-slate-600">
            Все, что нужно знать о технологии стирки, дозировке концентратов и оптовых поставках от производителя.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-sky-200 bg-sky-50/30 shadow-sm"
                    : "border-slate-200/80 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-[#0E253A]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0284C7]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/60 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support callout */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-800">
                Остались индивидуальные вопросы по продукции или контракту?
              </div>
              <div className="text-[11px] text-slate-500">
                Наши технологи и оптовые консультанты на связи ежедневно с 9:00 до 19:00
              </div>
            </div>
          </div>

          <a
            href="https://t.me/purelife_uz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-bold text-[#0284C7] bg-white border border-sky-200 hover:bg-sky-50 transition-colors shadow-2xs shrink-0"
          >
            Связаться в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
