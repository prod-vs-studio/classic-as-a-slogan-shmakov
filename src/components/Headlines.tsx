import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const headlineTypes = [
  {
    name: 'Информационный',
    description: 'Сообщает факт напрямую, без эмоций и скрытого смысла.',
    example: '«Город открывает новую библиотеку в центре»',
  },
  {
    name: 'Вопросительный',
    description: 'Задаёт вопрос читателю и побуждает искать ответ в тексте.',
    example: '«Что стоит за новыми реформами образования?»',
  },
  {
    name: 'Цитатный',
    description: 'Использует чужую речь для привлечения внимания и авторитетности.',
    example: '«Мы не остановимся» — заявил мэр о реконструкции»',
  },
  {
    name: 'Интригующий',
    description: 'Создаёт curiosity gap — разрыв между тем, что знает читатель, и тем, что хочет узнать.',
    example: '«Пять книг, которые изменят ваш взгляд на мир»',
  },
  {
    name: 'Призывной',
    description: 'Побуждает к действию: прочитать, подписаться, участвовать.',
    example: '«Прочитайте это, прежде чем голосовать»',
  },
  {
    name: 'Аллюзивный',
    description: 'Отсылает к известному произведению, создавая двойной смысл.',
    example: '«Мёртвые души госкорпораций»',
  },
];

const allusionExamples = [
  { headline: '«Мёртвые души госкорпораций»', source: 'Н. Гоголь, «Мёртвые души»' },
  { headline: '«Вишнёвый сад под угрозой»', source: 'А. Чехов, «Вишнёвый сад»' },
  { headline: '«Отцы и дети цифровой эпохи»', source: 'И. Тургенев, «Отцы и дети»' },
  { headline: '«Преступление и наказание коррупционера»', source: 'Ф. Достоевский, «Преступление и наказание»' },
  { headline: '«Евгений Онегин современного офиса»', source: 'А. Пушкин, «Евгений Онегин»' },
  { headline: '«Ревизор в соцсетях: кто проверяет проверки»', source: 'Н. Гоголь, «Ревизор»' },
];

export default function Headlines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 md:py-36 px-6 md:px-12">
      {/* Section divider */}
      <div className="section-divider mb-20" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="red-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-white/35 mb-4 font-medium">
            Теория заголовков
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
          >
            Как работает <span className="text-red-accent">заголовок</span>
          </h2>
        </motion.div>

        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-card p-8 md:p-12 mb-12"
        >
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-medium mb-4">
            Большинство людей читает <span className="text-white font-bold">только заголовок</span> и
            никогда не переходит к тексту. Исследования показывают, что{' '}
            <span className="text-red-accent font-bold">80%</span> прочитавших заголовок не продолжают
            чтение.
          </p>
          <p className="text-base md:text-lg text-white/45 leading-relaxed font-medium">
            Заголовок в медиа — это первая и часто единственная точка контакта с читателем. Он должен
            привлечь внимание, вызвать интерес и передать суть — всё за несколько секунд.
          </p>
        </motion.div>

        {/* Types grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3
            className="text-2xl md:text-3xl font-bold mb-8 tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
          >
            Типы заголовков
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {headlineTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                className="glass-card p-6 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-red-accent/10 border border-red-accent/20 flex items-center justify-center text-[10px] text-red-accent font-bold">
                    {i + 1}
                  </span>
                  <h4 className="text-lg font-bold text-white">{type.name}</h4>
                </div>
                <p className="text-sm text-white/50 leading-relaxed font-medium mb-3">
                  {type.description}
                </p>
                <div className="glass px-4 py-3 rounded-xl">
                  <p className="text-sm text-wine-light italic font-medium">{type.example}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Allusion focus */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative glass-strong p-8 md:p-14 rounded-[24px] overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] bg-wine/10 pointer-events-none" />

            <div className="relative">
              <p className="text-xs tracking-[0.3em] uppercase text-red-accent/70 mb-4 font-semibold">
                Фокус проекта
              </p>
              <h3
                className="text-2xl md:text-4xl font-bold mb-6 tracking-tight"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
              >
                Заголовок-<span className="text-red-accent">аллюзия</span>
              </h3>

              <p className="text-lg md:text-xl text-white/65 leading-relaxed font-medium mb-4">
                Это заголовок, который использует узнаваемую цитату, название или фразу из классической
                литературы.
              </p>
              <p className="text-base md:text-lg text-white/45 leading-relaxed font-medium mb-8">
                Он работает потому, что читатель{' '}
                <span className="text-white/70">мгновенно узнаёт источник</span> и ассоциации. Это
                создаёт двойной смысл: поверхностный (новость) и глубинный (литературный). Классика
                становится инструментом журналиста.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allusionExamples.map((ex, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                    className="glass p-4 rounded-xl group hover:border-wine/40 transition-all duration-300"
                  >
                    <p
                      className="text-base md:text-lg font-bold text-white/90 mb-2"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
                    >
                      {ex.headline}
                    </p>
                    <p className="text-xs text-white/30 font-medium">
                      отсылка к: {ex.source}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
