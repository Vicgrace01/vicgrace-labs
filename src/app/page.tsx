export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-neutral-400">
          Vicgrace Labs
        </p>
        <h1 className="mt-4 text-5xl font-semibold leading-tight">
          A venture studio building AI and software for Africa&apos;s edge.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-300">
          We build, ship, and compete. From on-device language models to
          full-stack products, Vicgrace Labs is where the work lives.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="/ventures"
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-neutral-950 hover:bg-neutral-200"
          >
            See our ventures
          </a>
          <a
            href="/team"
            className="rounded-lg border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-100 hover:border-neutral-500"
          >
            Meet the team
          </a>
        </div>
      </section>
    </main>
  );
}
