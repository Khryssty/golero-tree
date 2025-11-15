// src/utils/buildTree.js
export function buildFamilyTree(flat) {
  const byId = new Map();

  // 1. Create node shells
  flat.forEach((n) => {
    byId.set(n.id, {
      id: n.id,
      ...n.data,        // firstName, lastName, birthday, gender
      children: [],
      motherName: null,
      fatherName: null,
    });
  });

  // 2. Derive parents and attach children to ONE parent (the father if present)
  flat.forEach((n) => {
    const rels = n.rels || {};
    if (rels.parents && rels.parents.length > 0) {
      const parentIds = rels.parents;
      const childNode = byId.get(n.id);

      let fatherId = parentIds.find((id) => byId.get(id)?.gender === "M");
      let motherId = parentIds.find((id) => byId.get(id)?.gender === "F");

      if (!fatherId) {
        // fallback: first parent as structural parent
        fatherId = parentIds[0];
      }

      const father = byId.get(fatherId);
      const mother = motherId ? byId.get(motherId) : null;

      if (father) {
        father.children.push(childNode);
      }

      childNode.fatherName = father
        ? `${father.firstName} ${father.lastName}`
        : null;
      childNode.motherName = mother
        ? `${mother.firstName} ${mother.lastName}`
        : null;
    }
  });

  // 3. Pick root = person who has spouses (John in your data)
  const rootSource =
    flat.find((n) => n.rels?.spouses?.length) ||
    flat.find((n) => !(n.rels && n.rels.parents)); // fallback

  const rootNode = byId.get(rootSource.id);

  return rootNode;
}
