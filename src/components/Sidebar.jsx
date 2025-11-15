// src/components/Sidebar.jsx

export default function Sidebar({ selectedPerson }) {
  if (!selectedPerson) {
    return (
      <aside className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 text-sm text-slate-200 space-y-2">
        <h2 className="text-base font-semibold">Family Member Details</h2>
        <p className="text-slate-400">
          Click on a card in the family tree to see more information here.
        </p>
      </aside>
    );
  }

  // -------------------------------------
  // PERSON vs SPOUSE GROUP
  // -------------------------------------
  const isSpouseGroup = selectedPerson.type === "spouse";
  const isPerson = selectedPerson.type === "person" || !selectedPerson.type;

  // Persona Data (safe access)
  const firstName = selectedPerson.firstName || "";
  const lastName = selectedPerson.lastName || "";
  const birthday = selectedPerson.birthday || "";
  const gender = selectedPerson.gender || "";
  const mother = selectedPerson.motherName || null;
  const father = selectedPerson.fatherName || null;

  const fullName = `${firstName} ${lastName}`.trim();

  // -------------------------------------
  // ROLE LABELS
  // -------------------------------------
  function describeRole() {
    if (isSpouseGroup) return "Spouse Group";

    if (!isSpouseGroup && selectedPerson.id === "1") return "Father / Main Ancestor";
    if (!isSpouseGroup && selectedPerson.id === "2") return "First Wife / Mother";
    if (!isSpouseGroup && selectedPerson.id === "3") return "Second Wife / Mother";

    if (mother && mother.includes("Mary")) return "Child of First Wife (Mary)";
    if (mother && mother.includes("Laura")) return "Child of Second Wife (Laura)";

    return "Family Member";
  }

  const role = describeRole();

  return (
    <aside className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 text-sm text-slate-200 space-y-3">
      {/* HEADER */}
      <div>
        <h2 className="text-base font-semibold">{fullName}</h2>
        <p className="text-xs uppercase text-slate-400 tracking-wide">{role}</p>
      </div>

      {/* PERSON DETAILS */}
      {isPerson && (
        <div className="space-y-1">
          {birthday && (
            <p>
              <span className="text-slate-400">Birthday:</span>{" "}
              <span className="font-medium">{birthday}</span>
            </p>
          )}

          {gender && (
            <p>
              <span className="text-slate-400">Gender:</span>{" "}
              <span className="font-medium">
                {gender === "M" ? "Male" : "Female"}
              </span>
            </p>
          )}

          {mother && (
            <p>
              <span className="text-slate-400">Mother:</span>{" "}
              <span className="font-medium">{mother}</span>
            </p>
          )}

          {father && (
            <p>
              <span className="text-slate-400">Father:</span>{" "}
              <span className="font-medium">{father}</span>
            </p>
          )}
        </div>
      )}

      {/* SPOUSE GROUP DETAILS */}
      {isSpouseGroup && (
        <div className="space-y-1">
          <p className="text-slate-300 text-sm">
            This is a **marriage / spouse group node**.  
            Children displayed beneath this node belong to:
          </p>

          <p className="font-medium text-slate-100 mt-1">
            {fullName}
          </p>

          <p className="text-slate-400 text-xs">
            (Click on the children to see their personal details.)
          </p>
        </div>
      )}
    </aside>
  );
}
