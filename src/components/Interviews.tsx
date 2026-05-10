import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface InterviewType {
  name: string;
  description: string;
  example: string;
}

const interviewTypes: InterviewType[] = [
  {
    name: 'Информационное интервью',
    description:
      'Короткий формат, цель которого — получить конкретные факты. Журналист задаёт прямые вопросы, интервьюент даёт чёткие ответы.',
    example:
      '«Какие изменения ожидают студентов в новом учебном году?» — ректор отвечает кратко и по делу.',
  },
  {
    name: 'Аналитическое интервью',
    description:
      'Глубокое интервью с экспертом, раскрывающее суть проблемы. Вопросы требуют размышления, а не односложных ответов.',
    example:
      '«Почему падает уровень чтения среди молодёжи?» — филолог объясняет тенденцию с разных сторон.',
  },
  {
    name: 'Портретное интервью',
    description:
      'Фокус на личности собеседника: его характер, ценности, жизненный путь. Читатель должен почувствовать человека за текстом.',
    example:
      '«День из жизни молодого режиссёра, который ставит Чехова в провинции» — история личности.',
  },
  {
    name: 'Проблемное интервью',
    description:
      'Центр — конкретная социальная или политическая проблема. Интервьюер задаёт неудобные вопросы и ищет решения.',
    example:
      '«Почему в школах не преподают финансовую грамотность?» — обсуждение с министром образования.',
  },
  {
    name: 'Конфликтное интервью',
    description:
      'Напряжённый диалог с человеком, у которого другая позиция. Цель — выявить аргументы обеих сторон и обнажить суть конфликта.',
    example:
      '«Вы согласны с запретом?» — журналист спорит с депутатом в прямом эфире.',
  },
  {
    name: 'Развлекательное интервью',
    description:
      'Лёгкий формат с юмором и неожиданными вопросами. Цель — развлечь аудиторию и показать героя с необычной стороны.',
    example:
      '«С кем из классиков вы бы пошли на кофе?» — актёр отвечает с юмором и искренностью.',
  },
  {
    name: 'Авторское интервью',
    description:
      'Интервью, в котором стиль журналиста так же важен, как ответы собеседника. Журналист ведёт личный нарратив.',
    example:
      '«Я встретился с писателем в его кабинете, пахнущем старыми книгами...» — авторский взгляд.',
  },
];

function InterviewCard({
  type,
  isOpen,
  onToggle,
  index,
}: {
  type: InterviewType;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`glass-card cursor-pointer group ${isOpen ? 'active' : ''}`}
      onClick={onToggle}
    >
      <div className="p-6 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
              style={{
                background: isOpen
                  ? 'linear-gradient(135deg, rgba(198,40,40,0.2), rgba(100,18,32,0.2))'
                  : 'rgba(255,255,255,0.04)',
                border: isOpen
                  ? '1px solid rgba(198,40,40,0.3)'
                  : '1px solid rgba(255,255,255,0.06)',
                color: isOpen ? '#E53935' : 'rgba(255,255,255,0.4)',
              }}
            >
              {index + 1}
            </span>
            <h4
              className="text-base md:text-lg font-bold text-white/90"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
            >
              {type.name}
            </h4>
          </div>
          <motion.svg
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 text-white/25 group-hover:text-white/40 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m7-7H5" />
          </motion.svg>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-5" />
              <p className="text-sm md:text-base text-white/55 leading-relaxed font-medium mb-4">
                {type.description}
              </p>
              <div className="glass p-4 rounded-xl">
                <p className="text-sm text-wine-light italic font-medium">{type.example}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Interviews() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-28 md:py-36 px-6 md:px-12">
      <div className="section-divider mb-20" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="red-line mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-white/35 mb-4 font-medium">
            Теория интервью
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
          >
            Интервью в <span className="text-red-accent">медиа</span>
          </h2>
          <p className="text-base md:text-lg text-white/45 leading-relaxed font-medium max-w-2xl">
            Семь основных видов интервью — от короткого информационного до авторского эссе. Каждый
            формат решает свою задачу.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {interviewTypes.map((type, i) => (
            <InterviewCard
              key={i}
              type={type}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
