// src/utils/buildGenealogyLayout.js

export function buildGenealogyLayout(flatData) {
  const peopleById = new Map(flatData.map(p => [p.id, p]));

  // Step 1: Build marriage nodes
  const marriages = [];

  flatData.forEach(person => {
    const spouseIds = person.rels?.spouses || [];
    spouseIds.forEach(spouseId => {
      if (person.id < spouseId) {
        marriages.push({
          id: `marriage-${person.id}-${spouseId}`,
          type: "marriage",
          spouses: [person.id, spouseId], 
          children: []
        });
      }
    });
  });

  // Step 2: Assign children to the correct marriage
  marriages.forEach(m => {
    flatData.forEach(p => {
      const parents = p.rels?.parents || [];
      if (
        parents.includes(m.spouses[0]) &&
        parents.includes(m.spouses[1])
      ) {
        m.children.push(p.id);
      }
    });
  });

  // Step 3: Build hierarchy layers (each layer is a generation)
  const layers = [];
  let currentGeneration = marriages.filter(m =>
    m.spouses.some(id => !hasParents(flatData, id))
  );

  layers.push(currentGeneration);

  while (currentGeneration.length > 0) {
    const next = currentGeneration
      .flatMap(m => m.children)
      .map(id => findMarriageForPerson(marriages, id))
      .filter(Boolean);

    if (next.length === 0) break;
    layers.push(next);
    currentGeneration = next;
  }

  // Step 4: Position nodes (generic spacing)
  const positionedNodes = [];

  layers.forEach((layer, rowIndex) => {
    layer.forEach((marriage, i) => {
      const xBase = 300 + i * 400;
      const yBase = 100 + rowIndex * 200;

      const spouseA = peopleById.get(marriage.spouses[0]);
      const spouseB = peopleById.get(marriage.spouses[1]);

      // Place spouses
      positionedNodes.push({
        ...spouseA.data,
        id: spouseA.id,
        type: "person",
        __rd3t: { x: xBase - 60, y: yBase }
      });

      positionedNodes.push({
        ...spouseB.data,
        id: spouseB.id,
        type: "person",
        __rd3t: { x: xBase + 60, y: yBase }
      });

      // Marriage node (💍 connector)
      positionedNodes.push({
        id: marriage.id,
        type: "marriage",
        __rd3t: { x: xBase, y: yBase }
      });

      // Children below this marriage
      marriage.children.forEach((childId, childIndex) => {
        const child = peopleById.get(childId);
        positionedNodes.push({
          ...child.data,
          id: child.id,
          type: "person",
          __rd3t: { x: xBase - 80 + childIndex * 80, y: yBase + 150 }
        });
      });
    });
  });

  return {
    name: "root",
    children: positionedNodes
  };
}

function hasParents(flat, id) {
  const p = flat.find(p => p.id === id);
  return p?.rels?.parents?.length > 0;
}

function findMarriageForPerson(marriages, personId) {
  return marriages.find(m => m.spouses.includes(personId));
}
