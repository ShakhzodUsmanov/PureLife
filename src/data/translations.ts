export type Language = "RU" | "UZ" | "EN";

export interface Translations {
  nav: {
    products: string;
    why: string;
    calculator: string;
    b2b: string;
    faq: string;
    telegramBtn: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titlePart2: {
      alpine: string;
      lavender: string;
      bloom: string;
    };
    subtitle: string;
    ctaChoose: string;
    ctaTelegram: string;
    switchLabel: string;
    marquee: string[];
  };
  products: {
    sectionTag: string;
    title: string;
    tabGels: string;
    tabPowders: string;
    orderTelegram: string;
    compositionBtn: string;
    washesCount: string;
    tempActivation: string;
    packFormat: string;
  };
  why: {
    sectionTag: string;
    title: string;
    item1: {
      stat: string;
      title: string;
      desc: string;
    };
    item2: {
      stat: string;
      title: string;
      desc: string;
    };
    item3: {
      stat: string;
      title: string;
      desc: string;
    };
  };
  calculator: {
    sectionTag: string;
    title: string;
    subtitle: string;
    sliderLabel: string;
    sliderUnit: string;
    productTypeGel: string;
    productTypePowder: string;
    resultPrefix: string;
    resultSuffix: string;
    resultDescription: string;
    orderBtn: string;
  };
  b2b: {
    sectionTag: string;
    title: string;
    subtitle: string;
    point1: string;
    point2: string;
    point3: string;
    btnTelegram: string;
    btnCall: string;
  };
  faq: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  footer: {
    tagline: string;
    copyright: string;
    city: string;
  };
}

export const DICTIONARY: Record<Language, Translations> = {
  RU: {
    nav: {
      products: "Продукция",
      why: "Почему PureLife",
      calculator: "Калькулятор",
      b2b: "Оптовикам",
      faq: "FAQ",
      telegramBtn: "Telegram",
    },
    hero: {
      badge: "Коллекция Life • 4 кг Концентрат • ~80 стирок",
      titlePart1: "Чистота, которая",
      titlePart2: {
        alpine: "пахнет лучше.",
        lavender: "дышит покоем.",
        bloom: "сияет цветом.",
      },
      subtitle:
        "Ультраконцентрированные гели для стирки PureLife 4 кг и порошки с энзимами. Чистота от 30°C и свежесть, которую чувствуешь каждый день.",
      ctaChoose: "Выбрать свой аромат",
      ctaTelegram: "Заказать в Telegram",
      switchLabel: "Переключить аромат",
      marquee: [
        "Свежесть горного воздуха",
        "Французская лаванда",
        "Яркие весенние цветы",
        "Стирка от 30°C",
        "До 80 стирок в 4 кг",
      ],
    },
    products: {
      sectionTag: "Каталог средств PureLife",
      title: "Стирка, созданная для чистоты и уюта.",
      tabGels: "Гели 4 кг",
      tabPowders: "Порошки",
      orderTelegram: "Заказать в Telegram",
      compositionBtn: "Состав и дозировка",
      washesCount: "стирок в канистре 4 кг",
      tempActivation: "температура активации",
      packFormat: "Формат упаковки:",
    },
    why: {
      sectionTag: "Честные факты",
      title: "Чистота, основанная на фактах.",
      item1: {
        stat: "30°C",
        title: "Работает в прохладной воде",
        desc: "Энзимы активируются уже при 20–30°C. Вещи отстирываются бережно, ткань не садится, а стиральная машина расходует меньше энергии.",
      },
      item2: {
        stat: "0%",
        title: "Без белого налета на вещах",
        desc: "Жидкая формула полностью вымывается за один стандартный цикл полоскания. Безопасно для чувствительной кожи и темной одежды.",
      },
      item3: {
        stat: "80 стирок",
        title: "Один флакон 4 кг на месяцы вперед",
        desc: "Концентрированный состав заменяет до 12 кг обычного порошка. Меньше пластика, меньше лишних упаковок в доме.",
      },
    },
    calculator: {
      sectionTag: "Простой расчет расхода",
      title: "На сколько вам хватит одной упаковки?",
      subtitle: "Выберите среднее количество стирок в вашей семье за неделю.",
      sliderLabel: "Количество стирок в неделю:",
      sliderUnit: "стирок",
      productTypeGel: "Гель 4 кг (~80 стирок)",
      productTypePowder: "Порошок 1 кг (~20 стирок)",
      resultPrefix: "Вам хватит на",
      resultSuffix: "недель",
      resultDescription: "Один мерный колпачок (50 мл) на полную загрузку стиральной машины.",
      orderBtn: "Заказать этот объем в Telegram",
    },
    b2b: {
      sectionTag: "Оптовое сотрудничество",
      title: "Прямые поставки от завода-производителя.",
      subtitle:
        "Поставляем концентрированные гели 4 кг и стиральные порошки для торговых сетей, магазинов и дистрибьюторов по всему Узбекистану.",
      point1: "Прямые оптовые цены от производителя без наценок посредников",
      point2: "Постоянный складской запас готовой продукции, отгрузка от 24 часов",
      point3: "Сертифицированная продукция, работа по договору и официальный ЭДО",
      btnTelegram: "Написать в Telegram оптовому отделу",
      btnCall: "+998 (71) 200-44-88",
    },
    faq: {
      sectionTag: "Вопросы и ответы",
      title: "Часто задаваемые вопросы",
      subtitle: "Все самое важное о средствах PureLife, дозировке и поставках.",
      items: [
        {
          q: "Чем гель PureLife 4 кг лучше обычного стирального порошка?",
          a: "Гель растворяется мгновенно даже в холодной воде, не оставляет белых разводов на одежде и не забивает лоток стиральной машины. Одна канистра 4 кг рассчитана примерно на 80 стирок.",
        },
        {
          q: "Подходит ли гель для стирки в жесткой воде?",
          a: "Да. Формула включает смягчающие компоненты, которые нейтрализуют соли жесткости, защищая нагревательный элемент (ТЭН) машины от накипи.",
        },
        {
          q: "Безопасен ли состав для чувствительной и детской кожи?",
          a: "В составе нет агрессивного хлора и фосфатов. Средство полностью выполаскивается из волокон за стандартный цикл полоскания.",
        },
        {
          q: "При какой температуре эффективнее всего стирать?",
          a: "Благодаря активным энзимам гели и порошки PureLife эффективно расщепляют пятна уже при 30°C, а также выдерживают высокотемпературные режимы до 90°C.",
        },
        {
          q: "Как оформить оптовый заказ для магазина или сети?",
          a: "Свяжитесь с нами напрямую через Telegram @purelife_uz или по телефону +998 (71) 200-44-88. Менеджер предоставит оптовый прайс-лист и согласует доставку.",
        },
      ],
    },
    footer: {
      tagline: "Свежесть и чистота, которую чувствуешь каждый день.",
      copyright: "© 2026 PureLife Care Tech. Все права защищены.",
      city: "Ташкент, Узбекистан",
    },
  },
  UZ: {
    nav: {
      products: "Mahsulotlar",
      why: "Nega PureLife",
      calculator: "Kalkulyator",
      b2b: "Ulgurji savdo",
      faq: "Savol-javob",
      telegramBtn: "Telegram",
    },
    hero: {
      badge: "Life to'plami • 4 kg Konsentrat • ~80 yuvish",
      titlePart1: "Hidi bilan ajralib turadigan",
      titlePart2: {
        alpine: "tozalik.",
        lavender: "tinchlik.",
        bloom: "go'zallik.",
      },
      subtitle:
        "PureLife 4 kg ultra-konsentrlangan kir yuvish gellari va bio-fermentli kukunlari. 30°C dan boshlab mukammal tozalik.",
      ctaChoose: "Iforni tanlash",
      ctaTelegram: "Telegram orqali buyurtma",
      switchLabel: "Iforni o'zgartirish",
      marquee: [
        "Tog' havosi musaffoligi",
        "Fransuz lavandasi",
        "Bahoriy gullar ifori",
        "30°C dan boshlab yuvish",
        "4 kg da 80 martagacha yuvish",
      ],
    },
    products: {
      sectionTag: "PureLife mahsulotlar katalogi",
      title: "Tozalik va shinamlik uchun yaratilgan.",
      tabGels: "Gellar 4 kg",
      tabPowders: "Kukunlar",
      orderTelegram: "Telegramda buyurtma berish",
      compositionBtn: "Tarkibi va me'yori",
      washesCount: "4 kg idishda yuvish soni",
      tempActivation: "faollashuv harorati",
      packFormat: "Qadoq hajmi:",
    },
    why: {
      sectionTag: "Aniq dalillar",
      title: "Faktlarga asoslangan tozalik.",
      item1: {
        stat: "30°C",
        title: "Salqin suvda ham ishlaydi",
        desc: "Fermentlar 20–30°C haroratda faollashadi. Kiyimlar matosi saqlanadi va elektr energiyasi tejaladi.",
      },
      item2: {
        stat: "0%",
        title: "Kiyimlarda oq dog' qoldirmaydi",
        desc: "Suyuq formula to'liq chayiladi, nozik teriga xavfsiz va qora kiyimlarda iz qoldirmaydi.",
      },
      item3: {
        stat: "80 marta",
        title: "4 kg bitta idish oylab xizmat qiladi",
        desc: "Konsentrlangan tarkib 12 kg oddiy kukun o'rnini bosadi. Uyda kamroq plastik chiqindi.",
      },
    },
    calculator: {
      sectionTag: "Oddiy hisob-kitob",
      title: "Bitta idish sizga qanchaga yetadi?",
      subtitle: "Oilangiz haftasiga o'rtacha necha marta kir yuvishini belgilang.",
      sliderLabel: "Haftalik kir yuvish soni:",
      sliderUnit: "marta",
      productTypeGel: "Gel 4 kg (~80 marta)",
      productTypePowder: "Kukun 1 kg (~20 marta)",
      resultPrefix: "Sizga",
      resultSuffix: "haftaga yetadi",
      resultDescription: "To'liq kir yuvish mashinasi uchun 1 qopqoq (50 ml) yetarli.",
      orderBtn: "Telegram orqali buyurtma berish",
    },
    b2b: {
      sectionTag: "Ulgurji hamkorlik",
      title: "To'g'ridan-to'g'ri ishlab chiqaruvchidan yetkazib berish.",
      subtitle:
        "O'zbekiston bo'ylab supermarketlar, do'konlar va dilerlar uchun 4 kg gellar va kukunlar ulgurji narxlarda.",
      point1: "Vositachilarsiz to'g'ridan-to'g'ri zavod narxlari",
      point2: "Doimiy ombor zaxirasi va 24 soat ichida yuklash",
      point3: "Sertifikatlangan mahsulot va rasmiy shartnoma",
      btnTelegram: "Ulgurji bo'limga Telegramda yozish",
      btnCall: "+998 (71) 200-44-88",
    },
    faq: {
      sectionTag: "Ko'p beriladigan savollar",
      title: "Tez-tez beriladigan savollar",
      subtitle: "PureLife vositalari va ulgurji yetkazib berish haqida barcha ma'lumotlar.",
      items: [
        {
          q: "PureLife 4 kg geli oddiy kukunlardan nimasi bilan yaxshiroq?",
          a: "Gel sovuq suvda ham darhol eriydi, kiyimlarda oq dog' qoldirmaydi. 4 kg idish 80 martagacha yuvishga yetadi.",
        },
        {
          q: "Qattiq suvda yuvish uchun mos keladimi?",
          a: "Ha, gel tarkibidagi maxsus komponentlar suv qattiqligini yumshatadi va kir yuvish mashinasini himoya qiladi.",
        },
        {
          q: "Bolalar kiyimlari uchun xavfsizmi?",
          a: "Tarkibida xlor va fosfatlar yo'q, matodan 100% chayilib ketadi va allergiyaga sabab bo'lmaydi.",
        },
        {
          q: "Qaysi haroratda yuvish eng samarali?",
          a: "Faol fermentlar tufayli 30°C da dog'larni a'lo darajada ketkazadi, shuningdek 90°C gacha chidamli.",
        },
        {
          q: "Ulgurji buyurtma qanday beriladi?",
          a: "Biz bilan to'g'ridan-to'g'ri Telegram @purelife_uz yoki +998 (71) 200-44-88 orqali bog'laning.",
        },
      ],
    },
    footer: {
      tagline: "Har kuni his qilinadigan soflik va tozalik.",
      copyright: "© 2026 PureLife Care Tech. Barcha huquqlar himoyalangan.",
      city: "Toshkent, O'zbekiston",
    },
  },
  EN: {
    nav: {
      products: "Products",
      why: "Why PureLife",
      calculator: "Calculator",
      b2b: "Wholesale",
      faq: "FAQ",
      telegramBtn: "Telegram",
    },
    hero: {
      badge: "Life Collection • 4kg Concentrate • ~80 Washes",
      titlePart1: "Cleanliness that",
      titlePart2: {
        alpine: "smells better.",
        lavender: "breathes calm.",
        bloom: "blooms vivid.",
      },
      subtitle:
        "Ultra-concentrated PureLife 4kg laundry gels and enzyme powders. Effortless stain removal from 30°C.",
      ctaChoose: "Explore Scents",
      ctaTelegram: "Order in Telegram",
      switchLabel: "Switch Scent",
      marquee: [
        "Alpine Mountain Freshness",
        "French Lavender Calm",
        "Vibrant Spring Peony",
        "Active from 30°C",
        "Up to 80 washes per 4kg",
      ],
    },
    products: {
      sectionTag: "PureLife Product Lineup",
      title: "Laundry care designed for purity and comfort.",
      tabGels: "Liquid Gels 4kg",
      tabPowders: "Powders",
      orderTelegram: "Order via Telegram",
      compositionBtn: "Formula & Dosage",
      washesCount: "washes in a 4kg jug",
      tempActivation: "activation temperature",
      packFormat: "Package size:",
    },
    why: {
      sectionTag: "Pure Facts",
      title: "Cleanliness backed by facts.",
      item1: {
        stat: "30°C",
        title: "Cold Water Active",
        desc: "Enzymes target tough stains starting at 20–30°C. Protects delicate fibers and cuts washing cycle energy.",
      },
      item2: {
        stat: "0%",
        title: "Zero Soap Residue",
        desc: "Rinses away entirely in a single standard rinse cycle. Safe for sensitive skin and dark fabrics.",
      },
      item3: {
        stat: "80 Washes",
        title: "One 4kg Bottle Lasts Months",
        desc: "Ultra-concentrated formula replaces up to 12kg of standard detergent powder. Less plastic waste at home.",
      },
    },
    calculator: {
      sectionTag: "Honest Dosage Estimator",
      title: "How long will one bottle last you?",
      subtitle: "Select your family's average weekly laundry loads.",
      sliderLabel: "Washes per week:",
      sliderUnit: "loads",
      productTypeGel: "Gel 4kg (~80 washes)",
      productTypePowder: "Powder 1kg (~20 washes)",
      resultPrefix: "Lasts you",
      resultSuffix: "weeks",
      resultDescription: "One measuring cap (50ml) for a standard 4-5kg washing load.",
      orderBtn: "Order this quantity via Telegram",
    },
    b2b: {
      sectionTag: "Wholesale Partnership",
      title: "Direct supply from manufacturer.",
      subtitle:
        "Supplying 4kg concentrated laundry gels and powders to retail chains, supermarkets, and regional distributors across Uzbekistan.",
      point1: "Direct factory wholesale pricing without middleman markup",
      point2: "Guaranteed warehouse inventory and fast dispatch within 24 hours",
      point3: "Full certification, official contract, and compliant electronic billing",
      btnTelegram: "Message Wholesale Sales on Telegram",
      btnCall: "+998 (71) 200-44-88",
    },
    faq: {
      sectionTag: "Questions & Answers",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about PureLife formulas and wholesale distribution.",
      items: [
        {
          q: "Why is PureLife 4kg gel superior to traditional powders?",
          a: "It dissolves instantly even in cold water, never leaves white chalky residue, and provides up to 80 wash cycles per 4kg jug.",
        },
        {
          q: "Does it work well in hard tap water?",
          a: "Yes. Formulated with water-softening agents that neutralize calcium ions and protect washing machine heating elements from limescale.",
        },
        {
          q: "Is it safe for sensitive skin and children's laundry?",
          a: "Contains zero chlorine or harsh phosphates and rinses clean during the first cycle without leaving irritating film.",
        },
        {
          q: "What is the optimal wash temperature?",
          a: "Bio-enzymes deliver full cleaning power starting at 30°C, while also supporting high-temperature sanitizing up to 90°C.",
        },
        {
          q: "How can I place a wholesale B2B order?",
          a: "Contact our wholesale department directly via Telegram @purelife_uz or call +998 (71) 200-44-88.",
        },
      ],
    },
    footer: {
      tagline: "Purity and freshness you feel every single day.",
      copyright: "© 2026 PureLife Care Tech. All rights reserved.",
      city: "Tashkent, Uzbekistan",
    },
  },
};
