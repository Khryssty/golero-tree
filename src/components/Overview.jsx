

export default function Overview() {
  return (
    <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-lg shadow-slate-950/40">
      <h2 className="text-lg font-semibold mb-2">Family Overview</h2>
      <p className="text-sm text-slate-300 leading-relaxed">
        This demo shows a fictional Smith family:
      </p>
      <ul className="mt-2 text-sm text-slate-300 list-disc list-inside space-y-1">
        <li>
          One father: <strong>John Smith</strong>
        </li>
        <li>
          First wife: <strong>Mary Smith</strong> — together they have{" "}
          <strong>7 children</strong> (5 sons, 2 daughters).
        </li>
        <li>
          Second wife: <strong>Laura Smith</strong> — together they have{" "}
          <strong>3 children</strong> (2 sons, 1 daughter).
        </li>
      </ul>
    </section>
  );
}
