import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Era {
  name: string;
  dates: string;
  description: string;
  example: string;
}

const eras: Era[] = [
  {
    name: 'Дореволюционная пресса',
    dates: 'до 1917',
    description:
      'Заголовки были формальными, описательными, литературными. Газеты ориентировались на образованную публику, язык был изысканным и развернутым.',
    example: '«В столице состоялось торжественное открытие новой публичной библиотеки для всех сословий»',
  },
  {
    name: 'Советские 1920–1930-е',
    dates: '1917–1940',
    description:
      'Заголовки стали агитационными, декларативными, эмоционально заряжёнными. Язык плаката перешёл на страницы газет.',
    example: '«Даёшь индустриализацию! Пятилетку — в четыре года!»',
  },
  {
    name: 'Сталинская эпоха',
    dates: '1940–1953',
    description:
      'Заголовки идеологически выверенные, авторитарные, славящие достижения партии и вождя. Личность пронизывает каждый заголовок.',
    example: '«Сталинская Конституция — величайшая победа советского народа»',
  },
  {
    name: 'Оттепель',
    dates: '1953–1964',
    description:
      'Более открытые, оптимистичные заголовки. Появились новые темы — космос, молодёжь, культура. Язык стал живее.',
    example: '«Человек космоса: Юрий Гагарин покорил звёздные дали»',
  },
  {
    name: 'Перестройка',
    dates: '1985–1991',
    description:
      'Заголовки стали откровенными, критическими, обнажая ранее скрытую правду. Гласность изменила всё.',
    example: '«Чернобыль: правда, которую скрывали от народа»',
  },
  {
    name: 'Девяностые',
    dates: '1991–2000',
    description:
      'Сенсационные, крикливые, таблоидные заголовки. Свобода слова + хаос = шок-контент и крик на первой полосе.',
    example: '«ШОК! Новые русские захватили Рублёвку — эксклюзивное расследование!»',
  },
  {
    name: 'Интернет и кликбейт',
    dates: '2000–2015',
    description:
      'Заголовки стали провокационными, формульными, заточенными под клики. Появился SEO и виральный формат.',
    example: '«Вы не поверите, что произошло дальше! Шокирующая правда о…»',
  },
  {
    name: 'Наши дни',
    dates: '2015 — настоящее время',
    description:
      'Баланс между качеством и кликабельностью. Мультимедийные заголовки, адаптированные для соцсетей и мессенджеров.',
    example: '«Как искусственный интеллект меняет правила: разбор нового тренда»',
  },
];

function EraCard({ era, index, isLeft }: { era: Era; index: number; isLeft: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="relative flex items-start mb-12 last:mb-0">
      {/* Desktop layout - alternating sides */}
      <div className="hidden md:flex items-start w-full">
        {isLeft ? (
          <>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-[calc(50%-2rem)] pr-8 text-right"
            >
              <EraContent era={era} align="right" />
            </motion.div>
            <TimelineDot index={index} />
            <div className="w-[calc(50%-2rem)] pl-8" />
          </>
        ) : (
          <>
            <div className="w-[calc(50%-2rem)] pr-8" />
            <TimelineDot index={index} />
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-[calc(50%-2rem)] pl-8"
            >
              <EraContent era={era} align="left" />
            </motion.div>
          </>
        )}
      </div>

      {/* Mobile layout - all on right */}
      <div className="flex md:hidden items-start w-full">
        <TimelineDot index={index} />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1 pl-6"
        >
          <EraContent era={era} align="left" />
        </motion.div>
      </div>
    </div>
  );
}

function TimelineDot({ index }: { index: number }) {
  return (
    <div className="relative z-10 shrink-0">
      <div
        className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
        style={{
          borderColor: index % 2 === 0 ? '#C62828' : '#641220',
          background: index % 2 === 0 ? 'rgba(198,40,40,0.2)' : 'rgba(100,18,32,0.2)',
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: index % 2 === 0 ? '#E53935' : '#C62828' }}
        />
      </div>
    </div>
  );
}

function EraContent({ era, align }: { era: Era; align: 'left' | 'right' }) {
  return (
    <div className="glass-card p-5 md:p-7">
      <div className={`flex items-center gap-3 mb-3 ${align === 'right' ? 'justify-end' : ''}`}>
        <span
          className="text-xs font-bold px-3 py-1 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(198,40,40,0.15), rgba(100,18,32,0.15))',
            border: '1px solid rgba(198,40,40,0.25)',
            color: '#E53935',
          }}
        >
          {era.dates}
        </span>
      </div>
      <h4
        className={`text-lg md:text-xl font-bold mb-3 ${align === 'right' ? 'text-right' : ''}`}
        style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
      >
        {era.name}
      </h4>
      <p className={`text-sm text-white/50 leading-relaxed font-medium mb-4 ${align === 'right' ? 'text-right' : ''}`}>
        {era.description}
      </p>
      <div className={`glass p-4 rounded-xl ${align === 'right' ? 'text-right' : ''}`}>
        <p className="text-sm text-wine-light italic font-medium">{era.example}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
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
          className="text-center mb-16"
        >
          <div className="red-line mx-auto mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-white/35 mb-4 font-medium">
            Исторический контекст
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
          >
            История <span className="text-red-accent">заголовков</span> в России
          </h2>
          <p className="text-white/35 text-lg font-medium">
            От дореволюционной печати до эпохи кликбейта
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line hidden md:block" />
          <div className="md:hidden absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-wine/50 to-transparent" />

          {eras.map((era, i) => (
            <EraCard key={i} era={era} index={i} isLeft={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
