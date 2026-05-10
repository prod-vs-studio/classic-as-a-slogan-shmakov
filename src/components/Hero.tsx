import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const allQuotes = [
  '«Я помню чудное мгновенье — явилась ты передо мной.»',
  '«Что в имени тебе моём? Оно умрёт, как шум печальный.»',
  '«Там русский дух, там Русью пахнет.»',
  '«Привычка свыше нам дана — замена счастию она.»',
  '«Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему.»',
  '«Если между двумя людьми есть вражда, то виноваты оба.»',
  '«Нет величия там, где нет простоты, добра и правды.»',
  '«Красота спасёт мир.»',
  '«Тварь ли я дрожащая или право имею?»',
  '«Человек есть тайна. Её надо разгадать.»',
  '«Полюби нас чёрненькими, а беленькими нас всякий полюбит.»',
  '«Ложь можно простить, но только не самому себе.»',
  '«В человеке должно быть всё прекрасно: и лицо, и одежда, и душа, и мысли.»',
  '«Краткость — сестра таланта.»',
  '«Если в первом акте на стене висит ружьё — в последнем оно должно выстрелить.»',
  '«Университет развивает все способности, в том числе — глупость.»',
  '«Скучно на этом свете, господа.»',
  '«Эх, тройка! птица-тройка — кто тебя выдумал?»',
  '«Нет уз святее товарищества.»',
  '«Чему смеётесь? Над собою смеётесь!»',
  '«Природа не храм, а мастерская, и человек в ней — работник.»',
  '«Отцы и дети — вечный спор, который никто не выигрывает.»',
  '«Во дни сомнений, во дни тягостных раздумий о судьбах моей родины — ты один мне поддержка и опора, великий, могучий, правдивый и свободный русский язык.»',
  '«Герой нашего времени — портрет, составленный из пороков всего нашего поколения.»',
  '«Я ищу свободы и покоя.»',
  '«Печально я гляжу на наше поколенье.»',
];

function getRandomQuotes(count: number): string[] {
  const shuffled = [...allQuotes].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

interface MarqueeRowProps {
  initialQuotes: string[];
  speed: number;
  direction: 'left' | 'right';
  rowIndex: number;
  baseOpacity: number;
  isHighlight?: boolean;
}

function MarqueeRow({ initialQuotes, speed, direction, rowIndex, baseOpacity, isHighlight = false }: MarqueeRowProps) {
  const [quotes, setQuotes] = useState<string[]>(initialQuotes);
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    const delay = 5000 + rowIndex * 2200;
    const interval = setInterval(() => {
      setTextOpacity(0.1);
      setTimeout(() => {
        setQuotes(getRandomQuotes(initialQuotes.length));
        setTextOpacity(1);
      }, 900);
    }, delay);
    return () => clearInterval(interval);
  }, [initialQuotes.length, rowIndex]);

  const content = [...quotes, ...quotes, ...quotes];

  return (
    <div className="overflow-hidden whitespace-nowrap py-2 md:py-3">
      <div
        className={direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}
        style={{ animationDuration: `${speed}s` }}
      >
        <div
          className="inline-flex gap-8 md:gap-12 items-center"
          style={{
            opacity: textOpacity * baseOpacity,
            transition: 'opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {content.map((quote, i) => {
            const mod = i % 4;
            let colorClass = 'text-white';
            if (isHighlight) {
              if (mod === 1) colorClass = 'text-red-accent';
              else if (mod === 2) colorClass = 'text-wine-light';
              else if (mod === 3) colorClass = 'text-white/60';
            } else {
              if (mod === 2) colorClass = 'text-wine-light/70';
            }
            return (
              <span
                key={`${rowIndex}-${i}`}
                className={`text-xl md:text-3xl lg:text-[2.5rem] font-bold tracking-tight whitespace-nowrap ${colorClass}`}
                style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
              >
                {quote}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const rows: Omit<MarqueeRowProps, 'rowIndex'>[] = [
    { initialQuotes: allQuotes.slice(0, 4), speed: 55, direction: 'right', baseOpacity: 0.4 },
    { initialQuotes: allQuotes.slice(4, 9), speed: 70, direction: 'left', baseOpacity: 0.55 },
    { initialQuotes: allQuotes.slice(9, 14), speed: 48, direction: 'right', baseOpacity: 0.75, isHighlight: true },
    { initialQuotes: allQuotes.slice(14, 19), speed: 62, direction: 'left', baseOpacity: 0.5 },
    { initialQuotes: allQuotes.slice(19, 23), speed: 75, direction: 'right', baseOpacity: 0.35 },
    { initialQuotes: allQuotes.slice(23, 26), speed: 50, direction: 'left', baseOpacity: 0.45 },
  ];

  return (
    <motion.section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
      style={{ opacity: heroOpacity }}
    >
      {/* Background atmosphere */}
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full blur-[250px] animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(100,18,32,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/4 right-[15%] w-[350px] h-[350px] rounded-full blur-[150px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(198,40,40,0.08) 0%, transparent 70%)',
          animationDelay: '4s',
        }}
      />
      <div
        className="absolute bottom-1/4 left-[10%] w-[300px] h-[300px] rounded-full blur-[130px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(139,26,47,0.1) 0%, transparent 70%)',
          animationDelay: '2s',
        }}
      />

      {/* Watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1
          className="text-[18vw] font-bold tracking-[-0.05em] leading-none uppercase pointer-events-none"
          style={{
            color: 'rgba(255,255,255,0.018)',
fontFamily: 'var(--font-display)',
            fontWeight: 'var(--font-weight-display)',
          }}
        >
          КЛАССИКА
        </h1>
      </div>

      {/* Marquee rows */}
      <motion.div className="absolute inset-0 flex flex-col justify-center gap-0" style={{ y }}>
        {rows.map((row, i) => (
          <MarqueeRow key={i} {...row} rowIndex={i} />
        ))}
      </motion.div>

      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] tracking-[0.4em] uppercase font-medium text-white/25">
          Листайте
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent" />
      </motion.div>
    </motion.section>
  );
}
