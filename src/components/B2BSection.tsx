"use client";

import { useState } from "react";
import {
  TrendingUp,
  Truck,
  Megaphone,
  Award,
  Send,
  CheckCircle2,
  Building2,
  MessageSquare,
  FileCheck,
} from "lucide-react";

export default function B2BSection() {
  const [formData, setFormData] = useState({
    name: "",
    phoneOrTelegram: "",
    companyName: "",
    city: "",
    volume: "Мелкий опт (от 500 кг / паллета)",
    comment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phoneOrTelegram) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const b2bPerks = [
    {
      icon: TrendingUp,
      title: "Маржинальность до 35%",
      description: "Прямые заводские оптовые цены без посредников. Высокая оборачиваемость полки за счет доступной розничной цены.",
      accent: "#10B981",
    },
    {
      icon: Truck,
      title: "Бесперебойные поставки",
      description: "Собственные производственные мощности и постоянный складской запас готовой продукции. Отгрузка от 24 часов.",
      accent: "#0284C7",
    },
    {
      icon: Megaphone,
      title: "Маркетинговая поддержка",
      description: "Предоставляем фирменные брендированные стойки, POS-материалы, тестеры ароматов и софинансируем локальные промо-акции.",
      accent: "#8B5CF6",
    },
    {
      icon: Award,
      title: "100% сертификация и ЭДО",
      description: "Полный пакет сертификатов соответствия ЕАС, протоколов санитарных испытаний и работа по электронному документообороту.",
      accent: "#EC4899",
    },
  ];

  return (
    <section id="b2b" className="py-24 bg-[#0E253A] text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            Сотрудничество с дистрибьюторами и розничными сетями
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Станьте официальным партнером бренда PureLife
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Мы предлагаем дистрибьюторам, супермаркетам и региональным оптовикам высокомаржинальный продукт повседневного спроса с гарантией европейского качества.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: 4 B2B Value Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {b2bPerks.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/25 transition-all duration-200"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white"
                      style={{ backgroundColor: perk.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Wholesale guarantees box */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-sky-900/40 to-emerald-900/40 border border-white/10 flex items-center gap-4">
              <FileCheck className="w-10 h-10 text-emerald-400 shrink-0" />
              <div className="text-xs text-slate-200">
                <strong className="text-white block font-bold mb-0.5">
                  Эксклюзивные дистрибьюторские права на регион:
                </strong>
                Предоставляем территориальный эксклюзив для сильных торговых команд с выполнением согласованного плана продаж.
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 text-slate-900 shadow-2xl">
              {isSubmitted ? (
                <div className="py-10 text-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0E253A] mb-2">
                    Коммерческое предложение формируется!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
                    Благодарим вас за проявленный интерес, <strong>{formData.name}</strong>. Руководитель оптового отдела свяжется с вами по номеру <strong>{formData.phoneOrTelegram}</strong> в течение 15 минут с оптовым прайс-листом и образцами продукции.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="py-3 px-6 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                  >
                    Заполнить еще одну заявку
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284C7] mb-2">
                    <MessageSquare className="w-4 h-4" />
                    B2B Форма прямого запроса
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0E253A] mb-2">
                    Получить оптовый прайс-лист
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Заполните краткую информацию о вашем бизнесе, и мы рассчитаем персональные дилерские условия за 15 минут.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Контактное лицо (ФИО) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Например: Сардор Рахимов"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Телефон / Telegram *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="+998 90 000-00-00 или @username"
                          value={formData.phoneOrTelegram}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phoneOrTelegram: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Компания / Торговая точка
                        </label>
                        <input
                          type="text"
                          placeholder="ООО 'Дистрибьюшн' / Магазин"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              companyName: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Город / Регион поставок
                        </label>
                        <input
                          type="text"
                          placeholder="Ташкент, Самарканд, Бухара..."
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Интересующий объем
                        </label>
                        <select
                          value={formData.volume}
                          onChange={(e) =>
                            setFormData({ ...formData, volume: e.target.value })
                          }
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                        >
                          <option>Мелкий опт (от 500 кг / паллета)</option>
                          <option>Средний опт (от 3 тонн)</option>
                          <option>Крупный опт / Фура (от 20 тонн)</option>
                          <option>Эксклюзивная дистрибуция в регионе</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Дополнительные пожелания (необязательно)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Например: интересуют гели 4 кг Alpine Fresh и условия доставки..."
                        value={formData.comment}
                        onChange={(e) =>
                          setFormData({ ...formData, comment: e.target.value })
                        }
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0284C7] via-[#0E253A] to-[#10B981] hover:opacity-95 shadow-md shadow-sky-600/20 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Формирование запроса...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Получить дилерский прайс и условия</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-slate-400">
                      Нажимая кнопку, вы подтверждаете согласие на обработку персональных данных.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
