import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const theses = [
  {
    number: '01',
    title: 'Мгновенное узнавание',
    statement: 'Классическая цитата узнаётся мгновенно, потому что она уже живёт в памяти читателя.',
    explanation:
      'Когда человек видит «Красота спасёт мир» или «Краткость — сестра таланта», ему не нужно объяснять контекст. Фраза уже ассоциируется с определёнными эмоциями и смыслами. Это экономит время и сразу устанавливает контакт с аудиторией.',
  },
  {
    number: '02',
    title: 'Авторитет классики',
    statement: 'Классика — это эталон, слова Пушкина часто звучат убедительнее, чем слоган копирайтера.',
    explanation:
      'Рекламный текст вызывает скепсис — потребитель знает, что ему пытаются что-то продать. Но цитата из классической литературы воспринимается как истина, проверенная временем. Доверие к автору переносится на сообщение.',
  },
  {
    number: '03',
    title: 'Возврат к книге',
    statement: 'Хороший слоган на основе классики не просто продаёт — он возвращает читателя к книге.',
    explanation:
      'Увидев знакомую фразу в новом контексте, человек вспоминает произведение, возможно, перечитывает его. Так реклама становится мостом между современной жизнью и классической литературой. Слоган работает как инструмент культурного просвещения.',
  },
];

export default function WhyClassics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 md:py-36 px-6 md:px-12">
      <div className="section-divider mb-20" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="red-line mx-auto mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-white/35 mb-4 font-medium">
            Аргументация
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
          >
            Почему классика <span className="text-red-accent">работает</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {theses.map((thesis, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="glass-card p-7 md:p-10 relative overflow-hidden group"
            >
              {/* Number accent */}
              <div className="absolute top-0 right-0 text-[120px] md:text-[160px] font-bold leading-none text-white/[0.02] select-none pointer-events-none -mt-4 -mr-2">
                {thesis.number}
              </div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="text-2xl md:text-3xl font-bold text-red-accent"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
                  >
                    {thesis.number}
                  </span>
                  <h3
                    className="text-xl md:text-2xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
                  >
                    {thesis.title}
                  </h3>
                </div>

                <p
                  className="text-lg md:text-xl text-white/80 font-bold leading-snug mb-4"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
                >
                  {thesis.statement}
                </p>

                <div className="w-12 h-px bg-gradient-to-r from-red-accent/50 to-transparent mb-4" />

                <p className="text-sm md:text-base text-white/45 leading-relaxed font-medium">
                  {thesis.explanation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
