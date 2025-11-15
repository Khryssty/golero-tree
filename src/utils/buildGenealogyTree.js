// src/utils/buildGenealogyTree.js

export function buildGenealogyTree(flat) {
  const peopleById = new Map(flat.map(p => [p.id, p]));

  // Step 1: build all marriages
  const marriages = [];

  flat.forEach(p => {
    (p.rels?.spouses || []).forEach(spouseId => {
      if (p.id < spouseId) {
        marriages.push({
          id: `m-${p.id}-${spouseId}`,
          type: "marriage",
          spouses: [p.id, spouseId],
          children: []
        });
      }
    });
  });

  // Step 2: assign children to correct marriage
  marriages.forEach(m => {
    flat.forEach(p => {
      const parents = p.rels?.parents || [];
      if (
        parents.includes(m.spouses[0]) &&
        parents.includes(m.spouses[1])
      ) {
        m.children.push(p.id);
      }
    });
  });

  // Step 3: convert marriages into hierarchical tree
  const root = {
    name: "root",
    children: marriages.map(marriageToTreeNode)
  };

  return root;

  function marriageToTreeNode(m) {
    const spouseA = peopleById.get(m.spouses[0]);
    const spouseB = peopleById.get(m.spouses[1]);

    return {
      id: m.id,
      type: "marriage",
      children: [
        // spouses side by side
        {
          ...spouseA.data,
          id: spouseA.id,
          type: "person"
        },
        {
          ...spouseB.data,
          id: spouseB.id,
          type: "person"
        },
        // children below spouses
        ...m.children.map(cid => {
          const child = peopleById.get(cid);

          // FUTURE PROOF: if child marries later, we’ll replace this
          return {
            ...child.data,
            id: child.id,
            type: "person"
          };
        })
      ]
    };
  }
}
