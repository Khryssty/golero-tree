export default function AppHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
      <div className="w-full px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            The Smith Family Tree
          </h1>
          <p className="text-sm text-slate-300">
            Two generations, multiple spouses, and 10 children — visualized with
            React and Family Chart.
          </p>
        </div>
        <span className="text-xs uppercase tracking-wide bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
          Demo · Fake Data
        </span>
      </div>
    </header>
  );
}
