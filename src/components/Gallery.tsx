import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Slogan {
  slogan: string;
  author: string;
  work: string;
}

const slogans: Slogan[] = [
  {
    slogan: '«Мгновенье, которое останется навсегда»',
    author: 'Александр Пушкин',
    work: '«К***»',
  },
  {
    slogan: '«Что в имени? То, что ты в него вложишь»',
    author: 'Александр Пушкин',
    work: '«Что в имени тебе моём…»',
  },
  {
    slogan: '«Привычка — замена счастью»',
    author: 'Александр Пушкин',
    work: '«Евгений Онегин»',
  },
  {
    slogan: '«Каждая история уникальна. Как твоя?»',
    author: 'Лев Толстой',
    work: '«Анна Каренина»',
  },
  {
    slogan: '«Нет величия без простоты»',
    author: 'Лев Толстой',
    work: '«Война и мир»',
  },
  {
    slogan: '«Красота спасёт — начни с себя»',
    author: 'Фёдор Достоевский',
    work: '«Идиот»',
  },
  {
    slogan: '«Ты — тайна. Разгадай себя.»',
    author: 'Фёдор Достоевский',
    work: '«Братья Карамазовы»',
  },
  {
    slogan: '«Право имею. На что?»',
    author: 'Фёдор Достоевский',
    work: '«Преступление и наказание»',
  },
  {
    slogan: '«Одно слово — и мир изменится»',
    author: 'Антон Чехов',
    work: '«Краткость — сестра таланта»',
  },
  {
    slogan: '«Мёртвые души — живые проблемы»',
    author: 'Николай Гоголь',
    work: '«Мёртвые души»',
  },
  {
    slogan: '«Птица-тройка: куда несёшься ты?»',
    author: 'Николай Гоголь',
    work: '«Мёртвые души»',
  },
  {
    slogan: '«Спор поколений, который стоит выиграть»',
    author: 'Иван Тургенев',
    work: '«Отцы и дети»',
  },
  {
    slogan: '«Природа — мастерская. Работай.»',
    author: 'Иван Тургенев',
    work: '«Отцы и дети»',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 md:py-36 px-6 md:px-12">
      <div className="section-divider mb-20" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="red-line mx-auto mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-white/35 mb-4 font-medium">
            Продукт проекта
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
          >
            13 <span className="text-red-accent">слоганов</span> из классики
          </h2>
          <p className="text-white/35 text-lg font-medium max-w-2xl mx-auto">
            Каждая фраза — это рекламный слоган, созданный на основе классической цитаты
          </p>
        </motion.div>

        {/* Slogan grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {slogans.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="glass-card p-6 group relative overflow-hidden"
            >
              {/* Quote mark */}
              <div
                className="absolute -top-2 -left-1 text-[60px] leading-none text-wine/10 font-serif select-none pointer-events-none"
                aria-hidden="true"
              >
                «
              </div>

              <div className="relative">
                <p
                  className="text-lg md:text-xl font-bold text-white/90 leading-snug mb-4"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
                >
                  {item.slogan}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-red-accent/80 font-semibold">{item.author}</p>
                    <p className="text-xs text-white/30 font-medium mt-0.5">{item.work}</p>
                  </div>
                  <span className="text-[10px] text-white/15 font-medium">#{i + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Usage section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-strong p-8 md:p-12 rounded-[24px]"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-5 font-semibold">
            Где это работает
          </p>
          <p className="text-base md:text-lg text-white/55 leading-relaxed font-medium">
            Эти слоганы можно использовать в{' '}
            <span className="text-white/80 font-semibold">социальных сетях</span> для продвижения
            чтения, в <span className="text-white/80 font-semibold">рекламных кампаниях</span>{' '}
            книжных магазинов и издательств, в{' '}
            <span className="text-white/80 font-semibold">дизайне библиотек</span> и культурных
            пространств, а также на{' '}
            <span className="text-white/80 font-semibold">билбордах</span> возле университетов и
            школ — везде, где нужно привлечь внимание к классической литературе современным языком.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
