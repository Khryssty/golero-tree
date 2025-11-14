

export default function Legend() {
  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-3 flex flex-wrap items-center gap-4 text-xs text-slate-200">
      <h2 className="text-sm font-semibold mr-2">Legend</h2>

      <div className="flex items-center gap-2">
        <span className="inline-block w-3 h-3 rounded-full bg-sky-500" />
        <span>Male</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="inline-block w-3 h-3 rounded-full bg-pink-400" />
        <span>Female</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="inline-block w-4 h-3 border-b-2 border-lime-400" />
        <span>Child from First Marriage (John + Mary)</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="inline-block w-4 h-3 border-b-2 border-purple-400" />
        <span>Child from Second Marriage (John + Laura)</span>
      </div>

      <p className="text-[11px] text-slate-500 ml-auto">
        Tip: Click any card to view full details in the sidebar.
      </p>
    </div>
  );
}
