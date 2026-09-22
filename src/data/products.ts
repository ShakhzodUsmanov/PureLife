export interface ProductWeightOption {
  id: string;
  label: string;
  weight: string;
  yieldWashes: number;
  yieldDescription: string;
  recommendedDosage: string;
  priceEstimate?: string;
  isDefault?: boolean;
}

export interface ProductItem {
  id: string;
  category: "gel" | "powder";
  categoryName: string;
  name: string;
  scentOrLine: string;
  subtitle: string;
  format: string;
  image: string;
  accentColor: string;
  auraGlow: string;
  badge: string;
  features: string[];
  specs: {
    baseSpec: string;
    temperatureRange: string;
    washingType: string;
    dermatologicalTest: string;
  };
  weightOptions?: ProductWeightOption[];
  composition: {
    activeAgents: string;
    enzymes: string;
    fragrance: string;
    specialCare: string;
    fullInci: string;
  };
  safetyInfo: string[];
}

export const PRODUCTS_GELS: ProductItem[] = [
  {
    id: "gel-alpine-fresh",
    category: "gel",
    categoryName: "Гели для стирки PureLife Liquid Gel (Suyuq Gel)",
    name: "PureLife Liquid Gel",
    scentOrLine: "Alpine Fresh & Clean",
    subtitle: "Ультраконцентрированный гель для белых и светлых тканей",
    format: "Бутыль 4 кг с мерным колпачком и эргономичной ручкой",
    image: "/images/products/alpine-fresh-gel.jpg",
    accentColor: "#0284C7",
    auraGlow: "rgba(2, 132, 199, 0.22)",
    badge: "Флагман • 4 кг Концентрат",
    features: [
      "Кристальная свежесть белья на 24 часа",
      "Защита белых и светлых тканей от серого налета",
      "Энзимы нового поколения против стойких белковых и жировых пятен",
      "Полное выполаскивание без разводов на одежде",
    ],
    specs: {
      baseSpec: "4 кг (~80 стирок)",
      temperatureRange: "20°C – 95°C",
      washingType: "Автоматическая и ручная стирка",
      dermatologicalTest: "Гипоаллергенно, одобрено для ежедневного использования",
    },
    composition: {
      activeAgents: "5-15% биоразлагаемые анионные ПАВ, <5% неионогенные ПАВ",
      enzymes: "Био-энзимный комплекс (протеаза, амилаза, пектат-лиаза)",
      fragrance: "Гипоаллергенная ароматическая композиция Alpine Crisp",
      specialCare: "Оптический отбеливатель премиум-класса, ингибитор накипи",
      fullInci: "Aqua, Sodium Laureth Sulfate, Alcohols C12-14 Ethoxylated, Protease, Amylase, Optical Brightener, Perfume Alpine Fresh, Methylisothiazolinone.",
    },
    safetyInfo: [
      "0% агрессивного хлора и токсичных фосфатов",
      "Быстро растворяется в ледяной воде (от 20°C)",
      "Безопасно для септиков и автономных систем очистки",
    ],
  },
  {
    id: "gel-lavender-dream",
    category: "gel",
    categoryName: "Гели для стирки PureLife Liquid Gel (Suyuq Gel)",
    name: "PureLife Liquid Gel",
    scentOrLine: "Lavender Dream",
    subtitle: "Ароматерапевтический гель для деликатных и постельных тканей",
    format: "Бутыль 4 кг с мерным колпачком и эргономичной ручкой",
    image: "/images/products/lavender-dream-gel.jpg",
    accentColor: "#8B5CF6",
    auraGlow: "rgba(139, 92, 246, 0.22)",
    badge: "Релакс-формула • 4 кг Концентрат",
    features: [
      "Успокаивающий натуральный лавандовый аромат для глубокого сна",
      "Сохранение эластичности и микроструктуры деликатных тканей",
      "Антистатический эффект — белье не электризуется и легко гладится",
      "Мягкость полотенец и трикотажа без добавления кондиционера",
    ],
    specs: {
      baseSpec: "4 кг (~80 стирок)",
      temperatureRange: "30°C – 60°C",
      washingType: "Автоматическая и бережная ручная стирка",
      dermatologicalTest: "Протестировано дерматологами для чувствительной кожи",
    },
    composition: {
      activeAgents: "5-15% мягкие анионные ПАВ растительного происхождения, <5% мыло",
      enzymes: "Деликатные энзимы для защиты шелковистых и хлопковых волокон",
      fragrance: "Эфирные ноты прованской лаванды с расслабляющим шлейфом",
      specialCare: "Кондиционирующие агенты, антистатик-комплекс",
      fullInci: "Aqua, Sodium Lauryl Ether Sulfate, Cocamidopropyl Betaine, Lavender Essential Extract, Fabric Conditioning Polymer, Enzymes, Kathon CG.",
    },
    safetyInfo: [
      "Идеально для постельного белья, пижам и домашнего текстиля",
      "Не вызывает раздражения дыхательных путей",
      "Не оставляет мыльного налета на волокнах",
    ],
  },
  {
    id: "gel-floral-bloom",
    category: "gel",
    categoryName: "Гели для стирки PureLife Liquid Gel (Suyuq Gel)",
    name: "PureLife Liquid Gel",
    scentOrLine: "Floral Bloom",
    subtitle: "Защита цвета и нежный весенний шлейф для цветных тканей",
    format: "Бутыль 4 кг с мерным колпачком и эргономичной ручкой",
    image: "/images/products/floral-bloom-gel.jpg",
    accentColor: "#EC4899",
    auraGlow: "rgba(236, 72, 153, 0.22)",
    badge: "Color Protect • 4 кг Концентрат",
    features: [
      "Нежный шлейф весенних цветов, сохраняющийся до следующей стирки",
      "Технология фиксации пигментов Color Lock — цвета не линяют",
      "Глубокое смягчение волокон хлопчатобумажных и смесовых тканей",
      "Эффективно удаляет следы косметики, пота и напитков",
    ],
    specs: {
      baseSpec: "4 кг (~80 стирок)",
      temperatureRange: "30°C – 60°C",
      washingType: "Автоматическая и ручная стирка всех типов цветных тканей",
      dermatologicalTest: "Дерматологически протестировано",
    },
    composition: {
      activeAgents: "5-15% анионные ПАВ, <5% неионогенные ПАВ",
      enzymes: "Таргетные био-ферменты против цветных органических пятен",
      fragrance: "Цветочный букет: магнолия, пион и майская роза",
      specialCare: "Ингибиторы вымывания пигментов, защита эластана",
      fullInci: "Aqua, Sodium Laureth Sulfate, Color Fixative Copolymer, Subtilisin, Parfum Floral Bloom, Disodium EDTA, Benzisothiazolinone.",
    },
    safetyInfo: [
      "Сохраняет яркость темных и разноцветных принтов",
      "Предотвращает скатывание (антипиллинг эффект)",
      "Низкое пенообразование для легкого полоскания",
    ],
  },
];

export const PRODUCTS_POWDERS: ProductItem[] = [
  {
    id: "powder-new-line",
    category: "powder",
    categoryName: "Стиральные порошки PureLife Powder",
    name: "PureLife New Line",
    scentOrLine: "Active Granules",
    subtitle: "Инновационный порошок с синими активными гранулами против въевшихся пятен",
    format: "Плотный влагозащитный пакет с удобной ручкой для переноски",
    image: "/images/products/new-line-powder.jpg",
    accentColor: "#10B981",
    auraGlow: "rgba(16, 185, 129, 0.22)",
    badge: "Active Granules • Усиленная формула",
    features: [
      "Формула с активными гранулами для быстрого расщепления сложных пятен",
      "Универсален: идеален как для автоматической, так и для ручной стирки",
      "Сияющая белизна белого и чистота цветного белья без посерения",
      "Мгновенно растворяется в воде без комкования в лотке стиральной машины",
    ],
    specs: {
      baseSpec: "1 кг (~20 стирок) / 400 г (~8 стирок)",
      temperatureRange: "30°C – 90°C",
      washingType: "Автомат + Ручная стирка (быстрое растворение)",
      dermatologicalTest: "Не сушит кожу рук при ручной стирке",
    },
    weightOptions: [
      {
        id: "nl-1kg",
        label: "1 кг (Большой)",
        weight: "1 кг",
        yieldWashes: 20,
        yieldDescription: "до 20 полноценных циклов стирки (50 г на загрузку)",
        recommendedDosage: "50 г на 4-5 кг белья средней степени загрязнения",
        isDefault: true,
      },
      {
        id: "nl-400g",
        label: "400 г (Компактный)",
        weight: "400 г",
        yieldWashes: 8,
        yieldDescription: "до 8 стирок (удобно брать в поездки или на пробу)",
        recommendedDosage: "50 г на 4-5 кг белья",
        isDefault: false,
      },
    ],
    composition: {
      activeAgents: "5-15% анионные ПАВ, <5% неионогенные ПАВ",
      enzymes: "Двойной энзимный комплекс (расщепление белков и крахмала)",
      fragrance: "Освежающий цитрусово-озоновый аромат чистоты",
      specialCare: "Синие микрогранулы Activ Granules, антиресорбент грязи",
      fullInci: "Sodium Carbonate, Sodium Sulfate, Sodium Alkylbenzene Sulfonate, Activ Granules (Enzymes coated), Oxygen Booster, Fragrance, Polycarboxylates.",
    },
    safetyInfo: [
      "Не содержит хлорных отбеливателей",
      "Защищает ТЭН стиральной машины от минеральных отложений",
      "Безопасная ручная стирка благодаря смягчающим компонентам",
    ],
  },
  {
    id: "powder-classic",
    category: "powder",
    categoryName: "Стиральные порошки PureLife Powder",
    name: "Pure Life Classic",
    scentOrLine: "Экономная Стирка / New Formula",
    subtitle: "Сбалансированное решение для ежедневной чистоты по доступной цене",
    format: "Классическая упаковка с просечкой для комфортного вскрытия",
    image: "/images/products/classic-powder.jpg",
    accentColor: "#0284C7",
    auraGlow: "rgba(2, 132, 199, 0.20)",
    badge: "Экономная стирка • 900+5г бонус",
    features: [
      "Максимально выгодная себестоимость одной стирки для всей семьи",
      "Интегрированная защита нагревательных элементов от накипи",
      "Бережное очищение повседневных хлопковых и синтетических вещей",
      "Пылеудаленная грануляция для комфортного засыпания",
    ],
    specs: {
      baseSpec: "900 г (~18 стирок) / 300 г (~6 стирок)",
      temperatureRange: "30°C – 80°C",
      washingType: "Автомат и ручная стирка",
      dermatologicalTest: "Смывается полностью при двойном полоскании",
    },
    weightOptions: [
      {
        id: "classic-900g",
        label: "900 г (Большой)",
        weight: "900 г (+5г бонус)",
        yieldWashes: 18,
        yieldDescription: "до 18 стирок для семейного гардероба",
        recommendedDosage: "50-60 г на стандартную загрузку 4-5 кг",
        isDefault: true,
      },
      {
        id: "classic-300g",
        label: "300 г (Компактный)",
        weight: "300 г",
        yieldWashes: 6,
        yieldDescription: "до 6 стирок (мобильный компактный формат)",
        recommendedDosage: "50 г на загрузку",
        isDefault: false,
      },
    ],
    composition: {
      activeAgents: "5-15% анионные поверхностно-активные вещества",
      enzymes: "Базовые энзимы для расщепления повседневных загрязнений",
      fragrance: "Классическая свежесть утреннего белья",
      specialCare: "Комплексообразователи против жесткости водопроводной воды",
      fullInci: "Sodium Carbonate, Sodium Sulfate, Anionic Surfactants, Anti-scale Complex, Optical Brightener, Perfume Classic Freshness.",
    },
    safetyInfo: [
      "Экономичный расход без переплаты за избыточную рекламу",
      "Предотвращает образование известкового налета на барабане",
      "Подходит для частой освежающей стирки",
    ],
  },
];

export const ALL_PRODUCTS = [...PRODUCTS_GELS, ...PRODUCTS_POWDERS];
