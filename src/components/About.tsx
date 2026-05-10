import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 md:py-36 px-6 md:px-12">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="red-line mb-8" />
          <p className="text-xs tracking-[0.3em] uppercase text-white/35 mb-8 font-medium">
            О проекте
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-card p-8 md:p-14"
        >
          <p className="text-xl md:text-2xl text-white font-bold mb-8 leading-tight">
            Шмаков Владислав, <span className="text-red-accent">ИСПб-012</span>
          </p>

          <p className="text-base md:text-lg text-white/55 leading-relaxed mb-6 font-medium">
            Сайт создан в рамках проекта{' '}
            <span className="text-white/85">
              «Анализ видов заголовков в современных медиа, виды интервью в современных медиа»
            </span>{' '}
            по предмету <span className="text-wine-light font-semibold">Родной русский язык</span>.
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6 font-semibold">
            Главная идея: <span className="text-white">классическая литература не устарела</span> —
            её просто нужно правильно подать.
          </p>

          <p className="text-base md:text-lg text-white/50 leading-relaxed font-medium">
            Заголовок в медиа и рекламе — это инструмент, а классика работает как этот инструмент
            идеально, когда превращается в современный слоган.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
