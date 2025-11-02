import CircleRibbon from "./CircleRibbon";
import ThreadsPaths from "./ThreadsPaths";

export default function Home() {
  return (
    <div className="relative min-h-screen threads-gradient threads-grid text-white overflow-hidden">
      {/* PATH LAYER */}
      <CircleRibbon />
      <ThreadsPaths />

      <main className="relative container mx-auto px-6 md:px-10 py-16 md:py-24">
        <section className="surface-dark max-w-3xl">
          <span className="inline-block rounded-full px-3 py-1 text-sm font-medium
                           bg-white/10 border border-white/15 backdrop-blur">
            Tutorial
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight">
            Create the <span className="text-[color:var(--color-primary-light)]">Threads</span> Graphic
          </h1>
          <p className="mt-4 text-white/80">in Adobe Illustrator</p>
        </section>
      </main>
    </div>
  );
}
