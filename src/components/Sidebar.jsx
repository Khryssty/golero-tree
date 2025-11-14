// src/components/Sidebar.jsx

function describeRole(person) {
  if (!person) return "Family Member";

  if (person.id === "1") return "Father / Main Ancestor";
  if (person.id === "2") return "First Wife / Mother";
  if (person.id === "3") return "Second Wife / Stepmother";

  const parents = person.rels?.parents || [];

  if (parents.includes("1") && parents.includes("2")) {
    return "Child from First Marriage";
  }
  if (parents.includes("1") && parents.includes("3")) {
    return "Child from Second Marriage";
  }

  return "Family Member";
}

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

  const { data, rels } = selectedPerson;
  const fullName = `${data["first name"]} ${data["last name"]}`;
  const role = describeRole(selectedPerson);

  return (
    <aside className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 text-sm text-slate-200 space-y-3">
      <div>
        <h2 className="text-base font-semibold">{fullName}</h2>
        <p className="text-xs uppercase text-slate-400 tracking-wide">
          {role}
        </p>
      </div>

      <div className="space-y-1">
        <p>
          <span className="text-slate-400">Birthday:</span>{" "}
          <span className="font-medium">{data.birthday}</span>
        </p>
        <p>
          <span className="text-slate-400">Gender:</span>{" "}
          <span className="font-medium">
            {data.gender === "M" ? "Male" : "Female"}
          </span>
        </p>
      </div>

      <div className="space-y-1">
        <p>
          <span className="text-slate-400">Spouses:</span>{" "}
          {rels?.spouses && rels.spouses.length > 0 ? (
            <span>{rels.spouses.length}</span>
          ) : (
            <span className="text-slate-500">None listed</span>
          )}
        </p>
        <p>
          <span className="text-slate-400">Children:</span>{" "}
          {rels?.children && rels.children.length > 0 ? (
            <span>{rels.children.length}</span>
          ) : (
            <span className="text-slate-500">None listed</span>
          )}
        </p>
      </div>
    </aside>
  );
}