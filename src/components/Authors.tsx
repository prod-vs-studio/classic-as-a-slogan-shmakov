import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Author {
  name: string;
  dates: string;
  slogan: string;
  source: string;
  work: string;
  description: string;
  theme: string;
  fullQuote: string;
  explanation: string;
}

const authors: Author[] = [
  {
    name: 'Александр Пушкин',
    dates: '1799–1837',
    slogan: '«Мгновенье, которое останется навсегда»',
    source: '«Я помню чудное мгновенье…»',
    work: 'Стихотворение «К***», 1825',
    description:
      'Стихотворение о любви и памяти — одно мгновение способно изменить всю жизнь. Сегодня, когда люди ищут настоящие чувства среди информационного шума, эти слова звучат как никогда актуально.',
    theme: 'Любовь',
    fullQuote:
      '«Я помню чудное мгновенье: Передо мной явилась ты, Как мимолетное виденье, Как гений чистой красоты.»',
    explanation:
      'Эта цитата идеальна для рекламного слогана: короткая, эмоциональная, узнаваемая. Контраст «мгновенье» и «навсегда» работает как маркетинговый приём — обещание вечного впечатления.',
  },
  {
    name: 'Лев Толстой',
    dates: '1828–1910',
    slogan: '«Каждая история уникальна. Как твоя?»',
    source: '«Все счастливые семьи похожи друг на друга…»',
    work: 'Роман «Анна Каренина», 1877',
    description:
      'Роман о выборе между долгом и чувством, о том, как одно решение может изменить жизнь. История, которая повторяется в каждой семье до сих пор.',
    theme: 'Выбор',
    fullQuote:
      '«Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему.»',
    explanation:
      'Открывающая фраза «Анны Карениной» — одна из самых узнаваемых в мировой литературе. Она идеально работает как заголовок-аллюзия: читатель мгновенно вспоминает источник и ассоциирует текст с темой семьи, выбора и последствий.',
  },
  {
    name: 'Фёдор Достоевский',
    dates: '1821–1881',
    slogan: '«Красота спасёт — начни с себя»',
    source: '«Красота спасёт мир»',
    work: 'Роман «Идиот», 1869',
    description:
      'Роман о чистой душе в жестоком мире — может ли доброта выжить в современном обществе? Сегодня этот вопрос звучит острее, чем когда-либо.',
    theme: 'Добро и красота',
    fullQuote: '«Красота спасёт мир.»',
    explanation:
      'Четыре слова, ставшие философским манифестом. В рекламе эта фраза работает безупречно: обещает трансформацию, вызывает доверие благодаря авторитету Достоевского и создаёт эмоциональный отклик.',
  },
  {
    name: 'Антон Чехов',
    dates: '1860–1904',
    slogan: '«Одно слово — и мир изменится»',
    source: '«Краткость — сестра таланта»',
    work: 'Письмо А.С. Суворину, 1889',
    description:
      'Чехов доказал, что немногословие может быть сильнее многословия. В эпоху кликбейта и информационного шума его принцип важнее, чем когда-либо.',
    theme: 'Слово',
    fullQuote: '«Краткость — сестра таланта.»',
    explanation:
      'Самая известная чеховская фраза стала афоризмом, который понимают даже те, кто не читал первоисточник. Как слоган — идеальна: пять слов, чёткий посыл, мгновенное узнавание. Сила — в простоте.',
  },
  {
    name: 'Николай Гоголь',
    dates: '1809–1852',
    slogan: '«Мёртвые души — живые проблемы»',
    source: '«Мёртвые души»',
    work: 'Поэма, 1842',
    description:
      'Поэма о мошенничестве, бюрократии и духовном застое. Тема коррупции и формализма не потеряла актуальности и сегодня.',
    theme: 'Общество',
    fullQuote:
      '«Мёртвые души» — так назвал Гоголь своё произведение о людях, живущих без души, без цели, без смысла. Название стало нарицательным.',
    explanation:
      'Название «Мёртвые души» стало нарицательным. В медиа оно используется как аллюзия для критики коррупции и бездушия. Как слоган, фраза создаёт мощный контраст: «мёртвые» и «живые», «души» и «проблемы».',
  },
  {
    name: 'Иван Тургенев',
    dates: '1818–1883',
    slogan: '«Спор поколений, который стоит выиграть»',
    source: '«Отцы и дети»',
    work: 'Роман, 1862',
    description:
      'Роман о конфликте поколений и поиске истины. Противостояние консерватизма и прогресса сегодня звучит как никогда современно.',
    theme: 'Конфликт',
    fullQuote: '«Отцы и дети — вечный спор, который никто не выигрывает.»',
    explanation:
      'Тема «отцов и детей» универсальна и вечна. Каждое новое поколение переживает этот конфликт. Как слоган, фраза апеллирует к личному опыту каждого читателя, создавая мгновенную эмоциональную связь.',
  },
];

function AuthorCard({
  author,
  isExpanded,
  onToggle,
  index,
}: {
  author: Author;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`glass-card p-7 md:p-10 cursor-pointer group ${
        isExpanded ? 'active' : ''
      }`}
      onClick={onToggle}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
          >
            {author.name}
          </h3>
          <p className="text-white/35 text-sm font-medium mt-1">{author.dates}</p>
        </div>
        <span className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-wine/20 text-red-accent border border-wine/30 tracking-wide uppercase shrink-0 ml-4">
          {author.theme}
        </span>
      </div>

      {/* Slogan */}
      <div className="mb-5">
        <p
          className="text-xl md:text-2xl lg:text-[1.65rem] font-bold text-red-accent leading-snug"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
        >
          {author.slogan}
        </p>
      </div>

      {/* Source */}
      <p className="text-xs text-white/35 mb-4 font-medium italic">
        Источник: {author.source} — {author.work}
      </p>

      {/* Description */}
      <p className="text-white/55 leading-relaxed font-medium text-[15px]">
        {author.description}
      </p>

      {/* Expand indicator */}
      <div className="mt-6 flex items-center gap-2 text-white/25 text-sm font-medium group-hover:text-white/40 transition-colors">
        <span>{isExpanded ? 'Свернуть' : 'Подробнее'}</span>
        <motion.svg
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <div className="glass p-5 md:p-7 rounded-2xl mb-5">
                <p className="text-white/25 text-[10px] tracking-[0.25em] uppercase mb-3 font-semibold">
                  Полная цитата
                </p>
                <p
                  className="text-lg md:text-xl text-white/80 italic font-medium leading-relaxed"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
                >
                  {author.fullQuote}
                </p>
              </div>
              <p className="text-white/45 leading-relaxed font-medium text-sm">
                <span className="text-red-accent/70 font-semibold">Почему эта цитата:</span>{' '}
                {author.explanation}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Authors() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 md:py-36 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="red-line mx-auto mb-6" />
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
          >
            Шесть авторов
          </h2>
          <p className="text-white/35 text-lg font-medium">
            Классика, ставшая современным языком
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {authors.map((author, i) => (
            <AuthorCard
              key={i}
              author={author}
              index={i}
              isExpanded={expandedIndex === i}
              onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
