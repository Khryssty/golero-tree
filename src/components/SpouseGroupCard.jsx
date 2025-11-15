export default function SpouseGroupCard({ node }) {
  return (
    <div
      style={{
        background: "#2c2c2c",
        padding: "8px 12px",
        borderRadius: 8,
        border: "2px solid #00AEEF",
        color: "white",
        minWidth: 160,
      }}
    >
      <div style={{ fontWeight: 700 }}>
        {node.firstName} {node.lastName}
      </div>

      <div style={{ opacity: 0.7, fontSize: 12 }}>
        (Spouse Group)
      </div>
    </div>
  );
}
