export default function Footer() {
  return (
    <footer className="relative py-20 md:py-28 px-6 md:px-12 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto">
        {/* Closing quote */}
        <div className="text-center mb-16">
          <div className="red-line mx-auto mb-8" />
          <p
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white/70 leading-snug tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--font-weight-display)' }}
          >
            «Классика не устарела.
            <br />
            Её просто нужно{' '}
            <span className="text-red-accent">правильно прочитать</span>.»
          </p>
        </div>

        {/* Info block */}
        <div className="glass p-8 md:p-10 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-white/25 mb-3 font-semibold">
                Проект
              </p>
              <p className="text-base text-white/60 font-medium leading-relaxed">
                Индивидуальный проект по{' '}
                <span className="text-white/80">Родному русскому языку</span>
              </p>
              <p className="text-sm text-white/35 font-medium mt-2">
                «Анализ видов заголовков в современных медиа, виды интервью в современных медиа»
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-white/25 mb-3 font-semibold">
                Образовательное учреждение
              </p>
              <p className="text-base text-white/60 font-medium leading-relaxed">
                НИУ РАНХиГС, Нижегородский институт управления, Колледж
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/30 font-medium">
              Шмаков Владислав, ИСПб-012
            </p>
            <p className="text-sm text-white/20 font-medium">
              2026
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-white/15 font-medium">
            Classics are not outdated. They simply need to be read correctly.
          </p>
        </div>
      </div>
    </footer>
  );
}
