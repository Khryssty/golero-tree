// src/App.jsx
import { useState } from "react";
import AppHeader from "./components/AppHeader.jsx";
import TopPanel from "./components/TopPanel.jsx";
import FamilyTreeChart from "./components/FamilyTreeChart.jsx";
import Sidebar from "./components/Sidebar.jsx";
import AppFooter from "./components/AppFooter.jsx";

export default function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div className="min-h-screen w-screen bg-slate-950 text-slate-100 flex flex-col">
      <AppHeader />

      <main className="flex-1 w-full">
        <div className="w-full px-4 py-4 space-y-4">
          <TopPanel />
          <section className="space-y-3">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] gap-4">
              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-2 sm:p-4 shadow-lg shadow-slate-950/40">
                <h2 className="text-lg font-semibold mb-2 px-1">
                  Interactive Family Tree
                </h2>
                <p className="text-xs text-slate-400 px-1 pb-2">
                  Pan and zoom inside the tree. Click a person to inspect their
                  details.
                </p>
                <div className="h-[80vh] rounded-xl border border-slate-800 overflow-hidden bg-slate-950">
                  <FamilyTreeChart onSelectPerson={setSelectedPerson} />
                </div>
              </div>

              <Sidebar selectedPerson={selectedPerson} />
            </div>
          </section>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
