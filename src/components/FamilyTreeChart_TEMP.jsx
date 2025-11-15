import Tree from "react-d3-tree";
import PersonCard from "./PersonCard";
import MarriageNode from "./MarriageNode";
import { buildGenealogyTree } from "../utils/buildGenealogyTree";
import familyData from "../data/familyData.json";
import { useMemo } from "react";

export default function FamilyTreeChart({ onSelectPerson }) {
  const treeData = useMemo(
    () => buildGenealogyTree(familyData),
    []
  );

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Tree
        data={treeData}
        orientation="vertical"
        nodeSize={{ x: 200, y: 120 }}
        separation={{ siblings: 1, nonSiblings: 2 }}
        renderCustomNodeElement={({ nodeDatum }) => (
          <foreignObject
            width={200}
            height={100}
            x={-100}
            y={-50}
            onClick={() => onSelectPerson?.(nodeDatum)}
          >
            {nodeDatum.type === "marriage" ? (
              <MarriageNode />
            ) : (
              <PersonCard node={nodeDatum} />
            )}
          </foreignObject>
        )}
      />
    </div>
  );
}
